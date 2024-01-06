import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { toast, ToastContainer } from "react-toastify"
import {
  calculateAmount,
  // calculateShipping,
  calculatePercentage,
  calculateTotalDiscount
} from "~/utilities/ecomerce-helpers"
import Link from "next/link"
import { useSession } from "next-auth/react"
import CouponFormSystem from "~/components/coupons/CouponFormSystem"
import { getSession } from "next-auth/react"
import axios from "axios"
import moment from "moment"

const myArr = [];
const ModuleEcomerceCartSummary = ({ cartItems }) => {
  const [couponDetail, setCouponDetail] = useState([])
  const [couponApplied, setCouponApplied] = useState(false)
  const router = useRouter()
  const [customerCountry, setCustomerCountry] = useState("")
  const [shippingDetail, setShippingDetail] = useState([])
  const [couponProductData, setCouponProductData] = useState(myArr)
  
  const getCustomerAddressDetail = async () => {
    try {
      const sessionData = await getSession()
      const response = await axios.post(
        "/api/shipping-cost/getCustomerAddressDetail",
        {
          customer_id: sessionData.id
        }
      )
      // console.log("User detail response-----",response?.data?.result[0]?.S_County);
      // console.log("User detail response-----",response?.data?.result[0]?.S_Country);
      setCustomerCountry(response?.data?.result[0]?.S_Country)
      return response?.data?.result[0]
    } catch (error) {
      console.error("Error in getCustomerAddressDetail:", error)
    }
  }
  const getCountyRegion = async (customerData) => {
    const county = customerData?.S_County
    try {
      const response = await axios.post("/api/shipping-cost/getCountyRegion", {
        county: county
      })
      // console.log("county region response-----",response?.data?.result[0]?.Regions);
      return response?.data?.result[0]?.Regions
    } catch (error) {
      console.error(error)
    }
  }
  const getShippingCost = async (customerData, region) => {
    const country = customerData?.S_Country
    try {
      const response = await axios.post("/api/shipping-cost/getShippingCost", {
        country: country,
        region: region
      })
      setShippingDetail(response?.data?.result)
    } catch (error) {
      console.error(error)
    }
  }
  const getCouponUsed = async (coupon, sessionId) => {
    try {
      const response = await axios.post("/api/coupons/checkCouponUsed", {
        coupon_code: coupon,
        customer_id: sessionId
      })
      return response?.data
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    async function fetchData() {
      try{
        const customerData = await getCustomerAddressDetail()
        if (customerCountry == "United Kingdom") {
          const region = await getCountyRegion(customerData)
          await getShippingCost(customerData, region)
        } else {
          await getShippingCost(customerData, "")
        }
      }catch(error){
        console.error("Error fetching data:", error);
      }
    }

    fetchData()
  }, [customerCountry])

  const deliveryTypeArray = []
  const shippingCostArray = []
  shippingDetail.forEach((s_detail) => {
    deliveryTypeArray.push(s_detail?.delivery_type)
    shippingCostArray.push(s_detail?.shipping_cost)
  })
  const handleCouponExistCheck = async (couponData, couponCode) => {
    try {
      if (couponData.length) {
        const coupon = couponData[0]
        // console.log("coupon",coupon,coupon?.published,coupon?.expiry_date,coupon?.coupon_code)
        const currentDate = moment(new Date())
        const couponExpiryDate = moment(coupon?.expiry_date)
        if (coupon?.published && couponExpiryDate >= currentDate) {
          const sessionData = await getSession()
          const usedCoupon = await getCouponUsed(
            coupon?.coupon_code,
            sessionData.id
          )
          if (!usedCoupon?.exist) {
            const productArray = []
            if (cartItems && cartItems.length > 0) {
              productArray.push(...cartItems)
            }
            let isProductFound = false
            // var coupon_product = [];
            // productArray.forEach((item) => {
            //   if (coupon?.coupon_code === item?.coupon_code) {
            //     console.log("YES product has coupon ------------------")
            //     isProductFound = true
            //     console.log("isProductFound", isProductFound)
            //     coupon_product.push(item)
            //     myArr.push(item);
            //   }
            // })
            // setCouponProductData(coupon_product);
            let maxAmount = 0
            let maxAmountCouponProduct = null
            productArray.forEach((item) => {
              if (coupon?.coupon_code === item?.coupon_code) {
                isProductFound = true
                if(item?.price > maxAmount){
                  maxAmount = item?.price
                  maxAmountCouponProduct = item
                }
              }
            })
            myArr.push(maxAmountCouponProduct);
            setCouponProductData(myArr);
            // console.log("couponProductData", couponProductData)
            
            if (isProductFound) {
              setCouponApplied(true)
              setCouponDetail(couponData)
            } else {
              toast.warning(`Coupon "${coupon?.coupon_code}" is not available for this product.`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                style: {
                  fontSize: "12px",
                  height: "50px"
                }
              })
            }
            // setCouponApplied(true)
            // setCouponDetail(couponData)
          } else {
            toast.info(usedCoupon?.message, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              style: {
                fontSize: "12px",
                height: "50px"
              }
            })
            resetCouponState();
          }
        } else {
          toast.error(`Coupon code "${coupon?.coupon_code}" has expired.`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            style: {
              fontSize: "12px",
              height: "50px",
              backgroundColor: "gray"
            }
          });
          resetCouponState();
        }
      } else {
        toast.error(`Coupon code "${couponCode}" not exist.`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          style: {
            fontSize: "12px",
            height: "50px"
          }
        });
        resetCouponState();
      }
    } catch (error) {
      console.error("Error in handleCouponExistCheck:", error)
      toast.error("An error occurred while processing the coupon.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        style: {
          fontSize: "12px",
          height: "50px"
        }
      })
      resetCouponState();
    }
  }
  const resetCouponState = () => {
    setCouponApplied(false)
    setCouponDetail([])
  }
  const handleCrossIconClick = () => {
    setCouponApplied(false)
    setCouponDetail([])
  }

  // console.log("couponDetail====>", couponDetail)
  let discount = 0.0
  let discountType = ""
  let couponPromoCode = ''
  couponDetail.forEach((item) => {
    discount = item?.discount
    discountType = item?.discount_type
    couponPromoCode = item?.coupon_code
  })

  // view
  let totalView = 0.00,
    maxShippingCost = 0.00,
    withVAT = 0.00,
    vatPercentage = 0.00,
    allTotal = 0.00,
    couponDiscount = 0.00,
    // discountCouponProduct = 0.00,
    discountTotalView = 0.00
  const { data: session } = useSession()

  if (cartItems) { 
    if (cartItems && cartItems.length > 0) {
      let finalShippingCost = 0
      // let finalShippingDeliveryType = ""
      cartItems.forEach((items) => {
        const productDeliveryType = items?.deliver_type
        // console.log("productDeliveryType", productDeliveryType) // live frozen
        if (deliveryTypeArray.includes(productDeliveryType)) {
          const indexOfDeliveryType = deliveryTypeArray.indexOf(productDeliveryType)
          const resultShippingCost = shippingCostArray[indexOfDeliveryType]
          // console.log("indexOfDeliveryType,resultShippingCost",indexOfDeliveryType,resultShippingCost) 
          if (resultShippingCost > finalShippingCost) { 
            finalShippingCost = resultShippingCost
            // finalShippingDeliveryType = productDeliveryType
          }
        }
      })
      // console.log("finalShippingDeliveryType,finalShippingCost",finalShippingDeliveryType,finalShippingCost) 

        totalView = calculateAmount(cartItems)

      // maxShippingCost = calculateShipping(cartItems)
      // if (finalShippingCost > 0) {
      //   maxShippingCost = finalShippingCost
      //   allTotal = parseFloat(totalView) + parseFloat(maxShippingCost)
      // } else {
      //   maxShippingCost = 0.0
      //   allTotal = parseFloat(totalView) + parseFloat(maxShippingCost)
      // }
      maxShippingCost = (finalShippingCost).toFixed(2)

      if (discountType == "Percentage") {
        // couponDiscount = calculateTotalDiscount(discount, totalView)
        couponDiscount = calculateTotalDiscount(discount, couponProductData[0]?.price)
        // discountCouponProduct = parseFloat(couponProductData[0]?.price) - parseFloat(couponDiscount)
        discountTotalView = (parseFloat(totalView) -  parseFloat(couponDiscount)).toFixed(2)
      } else if (discountType == "Fixed") {
        couponDiscount = discount
        // discountCouponProduct = parseFloat(couponProductData[0]?.price) - parseFloat(couponDiscount)
        discountTotalView = (parseFloat(totalView) -  parseFloat(couponDiscount)).toFixed(2)
      } else {
        couponDiscount = 0
        // discountCouponProduct = parseFloat(couponProductData[0]?.price) - parseFloat(couponDiscount)
        discountTotalView = (parseFloat(totalView) -  parseFloat(couponDiscount)).toFixed(2)
      }

      if(finalShippingCost > 0 && discount > 0){
        allTotal = parseFloat(discountTotalView) + parseFloat(maxShippingCost)
      } else if(finalShippingCost > 0){
        allTotal = parseFloat(totalView) + parseFloat(maxShippingCost)
      }

      if ((customerCountry == "United Kingdom" && discount)||(customerCountry == "United Kingdom")) {
        vatPercentage = calculatePercentage(20, allTotal) 
      }

      withVAT = (parseFloat(allTotal) + parseFloat(vatPercentage)).toFixed(2) 

    } else {
      totalView = "0.00"
      maxShippingCost = "0.00"
      allTotal = "0.00"
      vatPercentage = "0.00"
      withVAT = "0.00"
      couponDiscount = "0.00"
      // discountCouponProduct = "0.00"
      discountTotalView = "0.00"
    }
  }

  const handleProceedToCheckout = () => {
    if ((couponDiscount > 0 || maxShippingCost >= 0 || (couponProductData>0 && discount) || discount || discountType) && customerCountry ) {
      // router.push(`/shop/checkout?couponDiscount=${couponDiscount}&maximumShippingCost=${maxShippingCost}&customerCountry=${customerCountry}&couponProductPrice=${couponProductData[0]?.price}&couponProductName=${couponProductData[0]?.product_name}&discount=${discount}&discountType=${discountType}&couponCode=${couponPromoCode}`)
      // or-----------------------
      router.push({
        pathname: "/shop/checkout",
        query: {
          couponDiscount: couponDiscount,
          maximumShippingCost: maxShippingCost,
          customerCountry: customerCountry,
          couponProductPrice: couponProductData[0]?.price,
          couponProductName: couponProductData[0]?.product_name,
          discount: discount,
          discountType: discountType,
          couponCode: couponPromoCode
        }
      })
      // }, "/shop/checkout")
    } else {
      router.push({
        pathname: "/shop/checkout"
      })
    }
  }
  
  return (
    <>
      <ToastContainer />
      {!couponApplied ? (
        <CouponFormSystem onCouponExistChange={handleCouponExistCheck} />
      ) : (
        <div
          className="alert alert-success d-flex justify-content-between"
          role="alert"
        >
          <span style={{ color: "green", fontWeight: "bold" }}>
            Your coupon discount applied successfully!
          </span>
          <i
            className="icon-cross text-danger font-weight-bold"
            onClick={handleCrossIconClick}
            style={{ cursor: "pointer" }}
          ></i>
        </div>
      )}

      <div className="ps-block--cart-summary">
        <div className="ps-block__header">
          <h4>Cart Total</h4>
        </div>

        <div className="ps-block__content">
          <div className="ps-block__records">

          {discount ? (
              <p className="total">
                <span>Product Total</span>
                <strong>£{totalView}</strong>
              </p>
            ) : ("")}

          {discount ? (
              <p className="total">
                <span>Coupon Discount<br/><span className="text-success">{couponProductData[0]?.product_name}</span></span>
                <strong>- £{couponDiscount ?? "0.00"}</strong>
              </p>
            ) : ("")}

            {/* {discount ? (
            <p>
              <span>{couponProductData[0]?.product_name} <br/> (Discount Added)</span>
              <strong>£{discountCouponProduct}</strong>
            </p>
            ) : (
              ""
            )} */}
            {discount ? (
            <p>
              <span>Subtotal</span>
              <strong>£{discountTotalView}</strong>
            </p>
            ) : (
              <p>
              <span>Subtotal</span>
              <strong>£{totalView}</strong>
            </p>
            )}
            <p>
              <span>Shipping</span>
              <span>
                £{maxShippingCost !== "NaN" ? maxShippingCost : "0.00"}
              </span>
            </p> 
            {(customerCountry == "United Kingdom" && discount)||(customerCountry == "United Kingdom")  ? (
              <p>
                <span>VAT (20%)</span>
                <span>
                  £{vatPercentage !== "NaN" ? vatPercentage : "0.00"}
                </span> 
              </p>
            ) : ("")}

          <p className="total">
              <span>Pay Total</span>
              <strong>£{withVAT}</strong>
            </p>
          </div>

          {session !== null ? (
            <div className="ps-block__bottom">
              
              {/* <Link href="/shop/checkout"> */}
              <button
                onClick={handleProceedToCheckout}
                className="ps-btn ps-btn--orange"
              >
                Proceed to checkout
              </button>
              {/* </Link> */}
            </div>
          ) : (
            <div className="ps-block__bottom">
              <Link href="/auth/UserLogin">
                <a className="ps-btn ps-btn--orange">Login</a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ModuleEcomerceCartSummary
