import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import {
  calculateAmount,
  calculateShipping,
  calculatePercentage
} from "~/utilities/ecomerce-helpers"
import useEcomerce from "~/hooks/useEcomerce"
import Link from "next/link"
import axios from "axios"
import { loadStripe } from "@stripe/stripe-js"
import { toast } from "react-toastify"
import Countries from "~/public/static/data/AllCountries.json"

function BothFormCheckout({ ecomerce, userStatus, UserData }) {
  console.log("userData", UserData.result)
  const [myBillingdetails, setMybillingDetails] = useState("")
  const [deliveryAdd, setDeliveryAdd] = useState("")
  React.useEffect(() => {
    setMybillingDetails(UserData.result)
    setDeliveryAdd(UserData?.result?.customer_address_details?.B_County)
  }, [])

  const handleUpdate = (index, name, todo) => {
    console.log("billing", myBillingdetails.customer_address_details)
    if (myBillingdetails[index] && myBillingdetails[index][name] != null) {
       var newDetails = myBillingdetails.customer_address_details
      if (myBillingdetails.customer_address_details != null) {
        newDetails[name] = myBillingdetails[index][name]
      } else {
        newDetails = {}
        newDetails[name] = myBillingdetails[index][name]
      }

      setMybillingDetails(newDetails)
    } else {
      const newDetailsAdd = { ...myBillingdetails }
      newDetailsAdd[index] = {}
      newDetailsAdd[index][name] = todo
      setMybillingDetails(newDetailsAdd)
       }
  }

  const { products, getProducts } = useEcomerce()
  
  const [loading, setLoading] = useState(false)
  const [checkTnC, setCheckTnC] = useState(false)
  const [pONumber, setPONumber] = useState("")
  useEffect(() => {
    getProducts(ecomerce.cartItems, "cart")
  }, [ecomerce])

  // Views
  let cartItemsView,
    maxShippingCost,
    allTotal,
    percentage,
    withVAT,
    amountView = "0.00"
  var shippingCosts = []
  if (products && products.length > 0) {
    amountView = calculateAmount(products)
    maxShippingCost = calculateShipping(products)
    if (deliveryAdd == "cambridge" || deliveryAdd == "Cambridge") {
      maxShippingCost = parseFloat(0)
    }
    allTotal = parseFloat(amountView) + parseFloat(maxShippingCost)
    percentage = calculatePercentage(20, allTotal)
    withVAT = parseFloat(allTotal) + parseFloat(percentage)

    cartItemsView = products.map((item) => (
      <div className="ps-checkout__row ps-product" key={item.id}>
        <div className="ps-product__name">
          <span>{item.product_name}</span> x <span>{item.quantity}</span>
        </div>
        <div className="ps-product__price">£{item.price}</div>
      </div>
    ))
  } else {
    amountView = "0.00"
    maxShippingCost = "0.00"
    allTotal = "0.00"
    percentage = "0.00"
    withVAT = "0.00"
  }

  const blankField = () => {
    var myFields = []

    if (myBillingdetails?.customer_address_details?.B_First == "") {
      myFields.push("Billing First Name ")
    }
    if (myBillingdetails?.customer_address_details?.B_last == "") {
      myFields.push("Billing last Name ")
    }
    if (myBillingdetails?.customer_address_details?.B_Email == "") {
      myFields.push("Billing Email ")
    }
    if (myBillingdetails?.customer_address_details?.B_Country == "") {
      myFields.push("Billing Country ")
    }
    if (myBillingdetails?.customer_address_details?.B_County == "") {
      myFields.push("Billing County ")
    }
    if (myBillingdetails?.customer_address_details?.B_PhoneNumber == "") {
      myFields.push("Billing PhoneNumber ")
    }
    if (myBillingdetails?.customer_address_details?.B_Address1 == "") {
      myFields.push("Billing Address1 ")
    }

    if (myBillingdetails?.customer_address_details?.B_ZIP == "") {
      myFields.push("Billing ZIP ")
    }
    if (myBillingdetails?.customer_address_details?.B_Town == "") {
      myFields.push("Billing Town ")
    }

    return myFields
  }

  const checkAllFelids = () => {
    console.log(blankField())
    if (
      myBillingdetails?.customer_address_details &&
      myBillingdetails?.customer_address_details?.B_First !== "" &&
      myBillingdetails?.customer_address_details?.B_last !== "" &&
      myBillingdetails?.customer_address_details?.B_Email !== "" &&
      myBillingdetails?.customer_address_details?.B_Country !== "" &&
      myBillingdetails?.customer_address_details?.B_County !== "" &&
      myBillingdetails?.customer_address_details?.B_PhoneNumber !== "" &&
      myBillingdetails?.customer_address_details?.B_Address1 !== "" &&
      myBillingdetails?.customer_address_details?.B_ZIP !== "" &&
      myBillingdetails?.customer_address_details?.B_Town !== "" &&
      myBillingdetails?.customer_address_details?.B_PhoneNumber !== ""
    ) {
      return true
    }
    return false
  }

  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  const stripePromise = loadStripe(publishableKey)
  const createCheckOutSession = async () => {
    try {
      var cust_address_details = myBillingdetails.customer_address_details
      var cust_application_details =
        myBillingdetails.customer_application_details
      var is_proceed = 0
      if (
        cust_application_details == null ||
        cust_application_details === "undefined"
      ) {
        is_proceed = 1
      }
      if (
        cust_address_details == null ||
        cust_address_details === "undefined"
      ) {
        is_proceed = 1
      }
      if (is_proceed == 1) {
        toast.warning(
          "Please fill organization and profile details before proceeding.",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored"
          }
        )
      } else {
        if (checkAllFelids()) {
          if (!checkTnC) {
            toast.warning(
              "Please accept our terms and conditions before proceeding.",
              {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored"
              }
            )
          } else {
            setLoading(true)
            const stripe = await stripePromise
            const checkoutSession = await axios.post(
              "/api/payments/checkout_sessions",
              {
                item: products,
                userData: myBillingdetails,
                pONumber: pONumber
              }
            )

            const result = await stripe.redirectToCheckout({
              sessionId: checkoutSession.data.id
            })
            if (result.error) {
              // alert(result.error.message);
              setLoading(false)
            }
            setLoading(false)
          }
        } else {
          // console.log("Some Filled Empty");
          toast.warning("Please Filled " + blankField() + " fields.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored"
          })
        }
      }
    } catch (error) {
      setLoading(false)
    }
  }

  return (
    <div className="row">
      <div className="col-md-8">
        {UserData ? (
          <form className="ps-form--checkout" action="/" method="get">
            <div className="ps-form__billings">
              <h4 className="ps-form__heading">Billing Details</h4>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>
                      First Name <sup>*</sup>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="First Name"
                      defaultValue={
                        myBillingdetails?.customer_address_details &&
                        myBillingdetails?.customer_address_details?.B_First
                      }
                      onChange={(val) => {
                        handleUpdate(
                          "customer_address_details",
                          "B_First",
                          val.target.value
                        )
                      }}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>
                      Last Name <sup>*</sup>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Last Name"
                      defaultValue={
                        myBillingdetails?.customer_address_details &&
                        myBillingdetails?.customer_address_details?.B_last
                      }
                      onChange={(val) => {
                        handleUpdate(
                          "customer_address_details",
                          "B_last",
                          val.target.value
                        )
                      }}
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <label>Purchase Order Number (optional)</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Purchase Order Number"
                      defaultValue={pONumber}
                      onChange={(val) => {
                        setPONumber(val.target.value)
                      }}
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <label>Company Name (optional)</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Company Name"
                      defaultValue={
                        myBillingdetails?.customer_application_details &&
                        myBillingdetails?.customer_application_details
                          ?.Organization_Name
                      }
                      onChange={(val) => {
                        handleUpdate(
                          "customer_application_details",
                          "Organization_Name",
                          val.target.value
                        )
                      }}
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <label>
                      Country <sup>*</sup>
                    </label>
                    <select
                      className="ps-select form-control"
                      onChange={(val) => {
                        handleUpdate(
                          "customer_address_details",
                          "B_Country",
                          val.target.value
                        )
                      }}
                      value={
                        myBillingdetails?.customer_address_details &&
                        myBillingdetails?.customer_address_details?.B_Country
                      }
                    >
                      {Countries.map((data) => (
                        <option key={data.name} defaultValue={data.name}>
                          {data.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <label>
                      County / States <sup>*</sup>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="County / States"
                      onChange={(val) => {
                        handleUpdate(
                          "customer_address_details",
                          "B_County",
                          val.target.value
                        )
                      }}
                      defaultValue={
                        myBillingdetails?.customer_address_details &&
                        myBillingdetails?.customer_address_details?.B_County
                      }
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <label>
                      Address line 1 <sup>*</sup>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Address line 1"
                      onChange={(val) => {
                        handleUpdate(
                          "customer_address_details",
                          "B_Address1",
                          val.target.value
                        )
                      }}
                      defaultValue={
                        myBillingdetails?.customer_address_details &&
                        myBillingdetails?.customer_address_details?.B_Address1
                      }
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <label>Address line 2</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Address line 2"
                      onChange={(val) => {
                        handleUpdate(
                          "customer_address_details",
                          "B_Address2",
                          val.target.value
                        )
                      }}
                      defaultValue={
                        myBillingdetails?.customer_address_details &&
                        myBillingdetails?.customer_address_details?.B_Address2
                      }
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <label>
                      Town / City <sup>*</sup>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Town / City"
                      onChange={(val) => {
                        handleUpdate(
                          "customer_address_details",
                          "B_Town",
                          val.target.value
                        )
                      }}
                      defaultValue={
                        myBillingdetails?.customer_address_details &&
                        myBillingdetails?.customer_address_details?.B_Town
                      }
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <label>Postcode / ZIP</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Postcode / ZIP "
                      onChange={(val) => {
                        handleUpdate(
                          "customer_address_details",
                          "B_ZIP",
                          val.target.value
                        )
                      }}
                      defaultValue={
                        myBillingdetails?.customer_address_details &&
                        myBillingdetails?.customer_address_details?.B_ZIP
                      }
                    />
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="form-group">
                    <label>
                      Email <sup>*</sup>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Email"
                      onChange={(val) => {
                        handleUpdate(
                          "customer_address_details",
                          "B_Email",
                          val.target.value
                        )
                      }}
                      defaultValue={
                        myBillingdetails?.customer_address_details &&
                        myBillingdetails?.customer_address_details?.B_Email
                      }
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>
                      Phone <sup>*</sup>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Phone"
                      onChange={(val) => {
                        handleUpdate(
                          "customer_address_details",
                          "B_PhoneNumber",
                          val.target.value
                        )
                      }}
                      defaultValue={
                        myBillingdetails?.customer_address_details &&
                        myBillingdetails?.customer_address_details
                          ?.B_PhoneNumber
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        ) : (
          <Link href="/auth/UserLogin">
            <button className="ps-btn ps-btn--warning link-hover-thumb-shape">Login</button>
          </Link>
        )}
      </div>
      <div className="col-md-4">
        <div className="ps-checkout__order">
          <h3 className="ps-checkout__heading">Your order</h3>
          <div className="ps-checkout__row">
            <div className="ps-title">Product</div>
            <div className="ps-title">Subtotal</div>
          </div>
          {cartItemsView}

          <div className="ps-checkout__row">
            <div className="ps-title">Cart Total</div>
            <div className="ps-product__price">£ {amountView}</div>
          </div>
          <div className="ps-checkout__row">
            <div className="ps-title">Shipping</div>
            <span>
              <div className="ps-product__price">£ {maxShippingCost}</div>
            </span>
          </div>
          <div className="ps-checkout__row">
            <div className="ps-title">Total</div>
            <div className="ps-product__price">£ {allTotal}</div>
          </div>
          <div className="ps-checkout__row">
            <div className="ps-title">VAT (20%)</div>
            <div className="ps-product__price">£ {percentage}</div>
          </div>

          <div className="ps-checkout__row">
            <div className="ps-title">Subtotal</div>
            <div className="ps-product__price">£ {withVAT}</div>
          </div>
          <div className="ps-checkout__payment">
            <div className="check-faq">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onClick={(e) => setCheckTnC(e.target.checked)}
                  checked={checkTnC}
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  {" "}
                  I have read and agree to the website{" "}
                  <Link target={"_blank"} href="/terms-of-use">
                    <u className="text-info link-hover-thumb-shape">terms and conditions</u>
                  </Link>{" "}
                  *
                </label>
              </div>
            </div>
           
            <button
              disabled={
                userStatus
                  ? products.length === 0 || loading
                    ? true
                    : false
                  : true
              }
              onClick={createCheckOutSession}
              className="ps-btn ps-btn--warning"
            >
              {loading ? "Processing..." : "Buy"}
            </button>
            {UserData && UserData.result.status ? null : (
              <div className="my-3">
                {UserData &&
                UserData?.result?.is_verified &&
                UserData?.result?.customer_address_details == null ? (
                  <div className="alert alert-info" role="alert">
                    Welcome to Stemnovate! Please complete your profile to get
                    custom pricing.
                  </div>
                ) : null}

                {UserData && UserData?.result?.is_verified == 0 ? (
                  <div className="alert alert-info" role="alert">
                    Welcome to Stemnovate! Please verify your email.
                  </div>
                ) : null}

                {UserData &&
                UserData?.result?.is_verified &&
                UserData?.result?.customer_address_details !== null &&
                UserData?.result?.status == 0 ? (
                  <div className="alert alert-info" role="alert">
                    We are reviewing your profile and we will be in touch with
                    you soon.
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect((state) => state)(BothFormCheckout)
