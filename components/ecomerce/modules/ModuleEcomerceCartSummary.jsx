import React, { useState } from "react"
import { useRouter } from "next/router";
import {
  calculateAmount,
  calculateShipping,
  calculatePercentage,
  calculateTotalDiscount
} from "~/utilities/ecomerce-helpers"
import Link from "next/link"
import { useSession } from "next-auth/react"
import CouponFormSystem from "~/components/coupons/CouponFormSystem"

const ModuleEcomerceCartSummary = ({ cartItems }) => {
  console.log("cartItems---",cartItems);
  const [couponDetail, setCouponDetail] = useState([])
  const [couponApplied, setCouponApplied] = useState(false)
  const [showCouponAppliedMessage, setShowCouponAppliedMessage] = useState(false)
  const router = useRouter()

  const handleCouponExistChange = (exist) => {
    setCouponDetail(exist)
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
  console.log("couponDetail====>", couponDetail)
  let discount = 0.0,
    discountType = ""
  couponDetail.forEach((item) => {
    discount = item?.discount
    discountType = item?.discount_type
  })
  console.log("Discount,DiscountType", discount, discountType)

  // view
  let totalView, maxShippingCost, withVAT, percentage, allTotal, couponDiscount
  const { data: session } = useSession()

  if (cartItems) {
    if (cartItems && cartItems.length > 0) {
      totalView = calculateAmount(cartItems)
      maxShippingCost = calculateShipping(cartItems)
      allTotal = parseFloat(totalView) + parseFloat(maxShippingCost)
      percentage = calculatePercentage(20, allTotal)

      if (discountType == "Percentage") {
        couponDiscount = calculateTotalDiscount(discount, allTotal)
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
    if(couponDiscount>0){
      router.push({
        pathname: "/shop/checkout",
        query: {
          couponDiscount:couponDiscount
        },
      });
    }else{
      router.push({
        pathname: "/shop/checkout",
      });
    }
    
  };
 
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
                <button onClick={handleProceedToCheckout} className="ps-btn ps-btn--orange">Proceed to checkout</button>
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
