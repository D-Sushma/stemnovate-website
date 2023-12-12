import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
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

const ModuleEcomerceCartSummary = ({ cartItems }) => {
  const [couponDetail, setCouponDetail] = useState([])
  const [couponApplied, setCouponApplied] = useState(false)
  const router = useRouter()
  const [customerCountry, setCustomerCountry] = useState("")
  const [shippingDetail, setShippingDetail] = useState([])

  const getCustomerAddressDetail = async () => {
    try {
      const sessionData = await getSession()
      const response = await axios.post( "/api/shipping-cost/getCustomerAddressDetail",
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
  var getCountyRegion = async (customerData) => {
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
  const getCouponUsed = async (coupon) => {
    try {
      const response = await axios.post("/api/coupons/checkCouponUsed", {
              coupon_code: coupon,
          });
      return response?.data
    } catch (error) {
      console.error(error)
    }
  }
  
  useEffect(() => {
    async function fetchData() {
      const customerData = await getCustomerAddressDetail()
      if (customerCountry == "United Kingdom") {
        const region = await getCountyRegion(customerData)
        getShippingCost(customerData, region)
      } else {
        getShippingCost(customerData, "")
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
  const handleCouponExistCheck = async (couponData) => {
    if(couponData.length > 0){
      const coupon = couponData[0];
      // console.log("coupon============",coupon,coupon?.published,coupon?.expiry_date)
      const currentDate = moment(new Date());
      const couponExpiryDate = moment(coupon?.expiry_date); 
      // console.log("currentDate,couponExpiryDate===",currentDate,couponExpiryDate)
        if(coupon?.published && couponExpiryDate >= currentDate){
            const usedCoupon = await getCouponUsed(coupon?.coupon_code);
            if(!usedCoupon?.exist){
              setCouponApplied(true)
              setCouponDetail(couponData)
            }else{
              setCouponApplied(false)
              setCouponDetail([])
            }
          }else{
          setCouponApplied(false)
          setCouponDetail([])
        }
    }else{
      setCouponApplied(false)
      setCouponDetail([])
    }
    // old ----------------------
    // if (couponData.length > 0) {
    //   setCouponDetail(couponData)
    //   // Coupon successfully applied
    //   setCouponApplied(true)
    // } else {
    //   setCouponApplied(false)
    // }
  }
  const handleCrossIconClick = () => {
    setCouponApplied(false)
    setCouponDetail([])
  }

  console.log("couponDetail====>", couponDetail)
  let discount = 0.0,
    discountType = ""
  couponDetail.forEach((item) => {
    discount = item?.discount
    discountType = item?.discount_type
  })

  // view
  let totalView, maxShippingCost, withVAT, percentage, allTotal, couponDiscount
  const { data: session } = useSession()
  if (cartItems) {
    if (cartItems && cartItems.length > 0) {
      let finalShippingCost = 0
      // let finalShippingDeliveryType = ""
      cartItems.forEach((items) => {
        const productDeliveryType = items?.deliver_type
        // console.log("productDeliveryType", productDeliveryType) // live frozen
        if (deliveryTypeArray.includes(productDeliveryType)) {
          const indexOfDeliveryType =
            deliveryTypeArray.indexOf(productDeliveryType)
          const resultShippingCost = shippingCostArray[indexOfDeliveryType]
          // console.log("indexOfDeliveryType,resultShippingCost",indexOfDeliveryType,resultShippingCost) //0 50 1 40
          if (resultShippingCost > finalShippingCost) {
            // 50>0 50>40
            finalShippingCost = resultShippingCost
            // finalShippingDeliveryType = productDeliveryType
          }
        }
      })
      // console.log("finalShippingDeliveryType,finalShippingCost",finalShippingDeliveryType,finalShippingCost) //0 50

      totalView = calculateAmount(cartItems)
      // maxShippingCost = calculateShipping(cartItems)

      if (finalShippingCost > 0) {
        maxShippingCost = finalShippingCost
        allTotal = parseFloat(totalView) + parseFloat(maxShippingCost)
      } else {
        maxShippingCost = 0.0
        allTotal = parseFloat(totalView) + parseFloat(maxShippingCost)
      }
      percentage = calculatePercentage(20, allTotal)

      if (discountType == "Percentage") {
        couponDiscount = calculateTotalDiscount(discount, totalView)
        withVAT =
          parseFloat(allTotal) +
          parseFloat(percentage) -
          parseFloat(couponDiscount)
      } else if (discountType == "Fixed") {
        couponDiscount = discount
        withVAT =
          parseFloat(allTotal) +
          parseFloat(percentage) -
          parseFloat(couponDiscount)
      } else {
        withVAT = withVAT = parseFloat(allTotal) + parseFloat(percentage)
      }
    } else {
      totalView = "0.00"
      maxShippingCost = "0.00"
      allTotal = "0.00"
      percentage = "0.00"
      withVAT = "0.00"
      couponDiscount = "0.00"
    }
  }

  const handleProceedToCheckout = () => {
    if (couponDiscount > 0 || maxShippingCost >= 0) {
      router.push({
        pathname: "/shop/checkout",
        query: {
          couponDiscount: couponDiscount,
          maximumShippingCost: maxShippingCost
        }
      })
    } else {
      router.push({
        pathname: "/shop/checkout"
      })
    }
  }

  return (
    <>
      {/* <CouponFormSystem onCouponExistChange={handleCouponExistCheck} /> */}
      {!couponApplied ?
      (
        <CouponFormSystem onCouponExistChange={handleCouponExistCheck} />
      ) :
      (
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
            <p>
              <span>Subtotal</span>
              <strong>£{totalView}</strong>
            </p>
            <p>
              <span>Shipping</span>
              <span>
                £ {maxShippingCost !== "NaN" ? maxShippingCost : "0.00"}
              </span>
            </p>
            <p>
              <span>VAT (20%)</span>
              <span>£ {percentage !== "NaN" ? percentage : "0.00"}</span>
            </p>
            {discount ? (
              <p className="total">
                <span>Coupon Discount</span>
                <strong>- £{couponDiscount ?? "0.00"}</strong>
              </p>
            ) : (
              ""
            )}

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
