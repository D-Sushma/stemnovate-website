const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
import {
  calculateAmount,
  calculatePercentage,
  // calculateShipping
} from "~/utilities/ecomerce-helpers"
import prisma from "~/lib/prisma"
import moment from "moment"
import { v1 as uuidv1 } from "uuid"
import { getSession } from "next-auth/react"
import { baseUrl } from "~/repositories/Repository"
async function CreateStripeSession(req, res) {
  const { item, userData, pONumber, maximumShippingCost,customerCountry,couponDiscount } = req.body
  const mySession = await getSession({ req })

  console.log("item", item)

  let allTotal = 0
  let totalTax = 0
  let vatPercentage = 0
  let discountAmountView = 0
  let withVAT = 0
  const todayDate = moment().format()
  const amountView = calculateAmount(item) 
  // const maxShippingCost = calculateShipping(item)
  const maxShippingCost = maximumShippingCost 

  if (couponDiscount > 0) {
    discountAmountView = parseFloat(amountView) - parseFloat(couponDiscount) 
    allTotal = parseFloat(discountAmountView) + parseFloat(maxShippingCost) 
  } else {
    allTotal = parseFloat(amountView) + parseFloat(maxShippingCost)
  }
  
  if ((customerCountry == "United Kingdom" && couponDiscount > 0)||(customerCountry == "United Kingdom")) {
    vatPercentage = calculatePercentage(20, allTotal)
  }

  withVAT = parseFloat(allTotal) + parseFloat(vatPercentage)

  if (couponDiscount > 0) {
    totalTax = parseFloat(vatPercentage) + parseFloat(maxShippingCost) - parseFloat(couponDiscount)
  } else {
    totalTax = parseFloat(vatPercentage) + parseFloat(maxShippingCost)
  }
  
  const orderId = uuidv1()
  const purchaseId = uuidv1()
  const paymentId = uuidv1()

  const redirectURL = `${baseUrl}order/order-confirmation/`

  var myProducts = []

  item.forEach((element) => {
    var images = element.product_image.split(",")
    const proImg = process.env.AWS_S3BUCKET_URL + images[0]
    myProducts.push({
      price_data: {
        currency: "gbp",
        product_data: {
          images: [proImg],
          name: element.product_name
        },
        unit_amount: element.price * 100
      },
      description: element.product_description,
      quantity: element.quantity
    })
  });
  // add orders details to database
  const orderData = await prisma.orders.create({
    data: {
      order_id: orderId,
      customer_id: mySession.id,
      order_date: todayDate,
      order_status: "Pending",
      total_amount: parseFloat(withVAT),
      total_tax: parseFloat(totalTax),
      payment_type: "Card",
      payment_status: null,
      transaction_id: "",
      vat_percent: parseFloat("20"),
      vat_amount: parseFloat(vatPercentage),
      total_shipping_cost: parseFloat(maxShippingCost),
      po_number: pONumber
    }
  })

  await prisma.customer_address_details.updateMany({
    where: {
      customer_id: parseInt(userData.id)
    },
    data: userData.customer_address_details
  })
  // console.log("Update AddAddress", AddAddress);

  await prisma.customer_application_details.updateMany({
    where: {
      customer_id: parseInt(userData.id)
    },
    data: userData.customer_application_details
  })

  // console.log("Update AddORG", AddORG);

  const customer = await stripe.customers.create({
    description: userData.id,
    email: userData.email,
    name: userData.firstname,
    phone: userData.customer_address_details.B_PhoneNumber,
    address: {
      city: userData.customer_address_details.B_Town,
      country: userData.customer_address_details.B_Country,
      line1: userData.customer_address_details.B_Address1,
      line2: userData.customer_address_details.B_Address2,
      postal_code: userData.customer_address_details.B_ZIP,
      state: userData.customer_address_details.B_County
    },
    shipping: {
      name: userData.customer_application_details.Organization_Name,
      phone: userData.customer_address_details.S_PhoneNumber,
      address: {
        city: userData.customer_address_details.S_Town,
        country: userData.customer_address_details.S_Country,
        line1: userData.customer_address_details.S_Address1,
        line2: userData.customer_address_details.S_Address2,
        postal_code: userData.customer_address_details.S_ZIP,
        state: userData.customer_address_details.S_County
      }
    }
  })
  // console.log("customer", customer);

  const session = await stripe.checkout.sessions.create({
    // payment_method_types: ['gpay'],
    shipping_address_collection: {
      allowed_countries: [
        "GB",
        "US",
        "AE",
        "AR",
        "AT",
        "AU",
        "BE",
        "BG",
        "BO",
        "CA",
        "CH",
        "CL",
        "CO",
        "CR",
        "CY",
        "CZ",
        "DE",
        "DK",
        "DO",
        "EE",
        "EG",
        "ES",
        "FI",
        "FR",
        "GM",
        "GR",
        "HK",
        "HR",
        "HU",
        "ID",
        "IE",
        "IL",
        "IS",
        "IT",
        "KE",
        "KR",
        "LI",
        "LT",
        "LU",
        "LV",
        "MT",
        "MX",
        "NL",
        "NO",
        "NZ",
        "PE",
        "PH",
        "PL",
        "PT",
        "PY",
        "RO",
        "SA",
        "SE",
        "SG",
        "SI",
        "SK",
        "TH",
        "TR",
        "TT",
        "UY",
        "ZA",
        "BD",
        "BJ",
        "CI",
        "JM",
        "JP",
        "MA",
        "MC",
        "NE",
        "RS",
        "SN",
        "TN",
        "AG",
        "BH",
        "GH",
        "GT",
        "GY",
        "KW",
        "LC",
        "MU",
        "NA",
        "SM"
      ]
    },
    customer: customer.id,
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            // amount: parseInt(totalTax) * 100,
            amount: parseFloat(totalTax) * 100,
            currency: "gbp"
          },
          display_name: (vatPercentage > 0) ? 
          ((couponDiscount > 0) ? `Shipping Charge(${maxShippingCost})+VAT(20%)(${vatPercentage})-Coupon Discount(${couponDiscount})`
          : `Shipping Charge(${maxShippingCost}) + VAT(20%)(${vatPercentage})`) 
          : (couponDiscount > 0) ? `Shipping Charge(${maxShippingCost}) - Coupon Discount(${couponDiscount})` : `Shipping Charge(${maxShippingCost})`,
          // display_name: (vatPercentage > 0) ? ((couponDiscount > 0) ? "Shipping Charge+VAT(20%)-Coupon Discount" : "Shipping Charge + VAT(20%)") : (couponDiscount > 0) ? "Shipping Charge - Coupon Discount" : "Shipping Charge",
          // display_name: (vatPercentage > 0) ? "Shipping Charge including VAT(20%)" : "Shipping Charge",
          // display_name: "Shipping Charge including VAT(20%)"
        }
      }
    ],
    line_items: myProducts,
    mode: "payment",
    // customer_details: { email: "testmail@gmail.com", name: "Rajeshwar", phone: "9000000000", address: { city: "durg", country: "IN", line1: "Durg", line2: "Chhattishgarh", postal_code: "491001", state: "Chhattishgarh" } },

    success_url: redirectURL + `?status=success&orderId=${orderId}`,
    cancel_url: redirectURL + `?status=cancel&orderId=${orderId}`,
    metadata: {
      images: item.image
    }
  })
  await prisma.orders.update({
    where: {
      id: orderData.id
    },
    data: {
      transaction_id: session.id
    }
  })

  var ProductData = []
  item.forEach((pd) => {
    var images = pd.product_image.split(",")
    const proImg = `${process.env.AWS_S3BUCKET_URL}${images[0]}`
    ProductData.push({
      order_id: orderData.id,
      product_id: parseInt(pd.id),
      product_price: parseFloat(pd.price),
      product_quantity: parseInt(pd.quantity),
      total_amount: parseFloat(pd.price * pd.quantity),
      total_tax: parseFloat(0),
      product_order_status: "-",
      imgUrl: proImg,
      ProductName: pd.product_name,
      description: pd.short_description
    })
  })

  await prisma.order_details.createMany({
    data: ProductData
  })

  var resourcesData = []
  item.forEach((rd) => {
    console.log("rd: ", rd)
    var chk_res_id = Object.keys(rd).some((key) => key === "resources_id")
    if (chk_res_id) {
      resourcesData.push({
        purchase_id: purchaseId,
        user_id: mySession.id,
        resources_id: rd.id,
        txn_id: session.id,
        payment_id: paymentId,
        collected_amount: rd.resources_price
      })
    }
  })

  await prisma.resorces_purchese_details.createMany({
    data: resourcesData
  })
  // console.log(productDetails);

  res.json({ id: session.id })
}

export default CreateStripeSession
