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

const ModuleEcomerceCartSummary = ({ cartItems }) => {

  const [couponDetail, setCouponDetail] = useState([])
  const [couponApplied, setCouponApplied] = useState(false)
  const [showCouponAppliedMessage, setShowCouponAppliedMessage] =
    useState(false)
  const router = useRouter()
  const [customerCountry, setCustomerCountry] = useState("")
  // const [shippingCost, setShippingCost] = useState([])
  // const [deliveryType, setDeliveryType] = useState([])
  const [shippingDetail, setShippingDetail] = useState([])

  const getCustomerDetail = async () => {
    try {
      const sessionData = await getSession()
      const response = await axios.post(
        "/api/shipping-cost/getCustomerAddressDetail",
        {
          customer_id: sessionData.id
        }
      )
      // console.log("Customer detail response-----",response?.data?.result[0]);
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
      // console.log("county region response-----",response?.data);
      // console.log("county region response-----",response?.data?.result[0]?.Regions);
      return response?.data?.result[0]?.Regions
    } catch (error) {
      console.error(error)
    }
  }
  const getShippingCost = async (customerData, region) => {
    const country = customerData?.S_Country
    // console.log("country, region",country,region);
    try {
      const response = await axios.post("/api/shipping-cost/getShippingCost", {
        country: country,
        region: region
      })
      // console.log("shipping cost response-----",response?.data);
      // console.log("shipping cost response-----",response?.data?.result[0]?.delivery_type);
      // console.log("shipping cost response-----",response?.data?.result[0]?.shipping_cost);
      // setShippingCost(response?.data?.result[0]?.shipping_cost)
      // setDeliveryType(response?.data?.result[0]?.delivery_type)
      setShippingDetail(response?.data?.result)
    } catch (error) {
      console.error(error)
    }
  }
  // console.log("deliveryType,shippingCost", deliveryType, shippingCost)
  console.log("shippingDetail", shippingDetail)
  useEffect(() => {
    async function fetchData() {
      const customerData = await getCustomerDetail()
      if (customerCountry == "United Kingdom") {
        const region = await getCountyRegion(customerData)
        getShippingCost(customerData, region)
      } else {
        // console.log("call only getShippingCost()");
        getShippingCost(customerData, null)
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
  console.log( "deliveryTypeArray,shippingCostArray", deliveryTypeArray,shippingCostArray)

  const handleCouponExistChange = (exist) => {
    setCouponDetail(exist)
    // OR-----------------
    // if (exist.length > 0) {
    //   setCouponDetail(exist)
    // } else {
    //   setCouponDetail([])
    // }
    if (exist.length > 0) {
      // Coupon successfully applied
      setCouponApplied(true)
      setShowCouponAppliedMessage(true)
    } else {
      setCouponApplied(false)
    }
  }
  // console.log("couponDetail====>", couponDetail)
  let discount = 0.0,
    discountType = ""
  couponDetail.forEach((item) => {
    discount = item?.discount
    discountType = item?.discount_type
  })
  // console.log("Discount,DiscountType", discount, discountType)

  // view
  let totalView, maxShippingCost, withVAT, percentage, allTotal, couponDiscount
  const { data: session } = useSession()
  if (cartItems) {
    if (cartItems && cartItems.length > 0) {
      let finalShippingCost = 0
      let finalShippingDeliveryType = ""
      cartItems.forEach((items) => {
        // console.log("items==================",items?.deliver_type)
        const productDeliveryType = items?.deliver_type
        console.log("productDeliveryType", productDeliveryType) // live frozen
        if (deliveryTypeArray.includes(productDeliveryType)) {
          const indexOfDeliveryType = deliveryTypeArray.indexOf(productDeliveryType)
          const resultShippingCost = shippingCostArray[indexOfDeliveryType]
          console.log("indexOfDeliveryType,resultShippingCost",indexOfDeliveryType,resultShippingCost) //0 50 1 40
          if (resultShippingCost > finalShippingCost) {  // 50>0 50>40
            finalShippingCost = resultShippingCost
            finalShippingDeliveryType = productDeliveryType
          }
        }
      })
      console.log("finalShippingDeliveryType,finalShippingCost",finalShippingDeliveryType,finalShippingCost) //0 50

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
      // console.log("maxShippingCost,allTotal,totalView",maxShippingCost,allTotal,totalView);

      if (discountType == "Percentage") {
        couponDiscount = calculateTotalDiscount(discount, totalView)
        withVAT = parseFloat(allTotal) + parseFloat(percentage) - parseFloat(couponDiscount)
      } else if (discountType == "Fixed") {
        couponDiscount = discount
        withVAT = parseFloat(allTotal) + parseFloat(percentage) - parseFloat(couponDiscount)
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
    if (couponDiscount > 0) {
      router.push({
        pathname: "/shop/checkout",
        query: {
          couponDiscount: couponDiscount
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
      {/* <CouponFormSystem onCouponExistChange={handleCouponExistChange} /> */}
      {!couponApplied && (<CouponFormSystem onCouponExistChange={handleCouponExistChange} />)}
      {showCouponAppliedMessage && (
        <div className="alert alert-success font-weight-bold" role="alert" style={{ color: "green" }}>
          Your coupon discount applied successfully!
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
