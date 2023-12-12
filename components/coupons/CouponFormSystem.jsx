import React, { useState } from "react"
import axios from "axios"

function CouponFormSystem({ onCouponExistChange }) {
  const [couponCode, setCouponCode] = useState("")
  
  const checkCouponExist = async () => {
    try {
      const response = await axios.post("/api/coupons/checkCoupons", {
        coupon_code: couponCode,
      })
      return response?.data;
    } catch (error) {
      console.log("error", error)
    }
  }
  
  const handleApplyClick = async () => {
    const couponDetail = await checkCouponExist();
    console.log("CouponCode", couponCode)
    console.log("couponDetail", couponDetail)
    
    onCouponExistChange(couponDetail?.result, couponCode)
  }
  return (
    <>
      <div className="mb-5 coupon-container ">
        <div className="">
          <p>Enter code and use at order</p>
          <div className="dotted-rounded-box position-relative mb-3 ">
            <input
              type="text"
              className="coupon-code-input"
              style={{ border: "none", outline: "none" }}
              placeholder="Enter coupon code"
              value={couponCode}
              onChange={(e) => {
                const enteredCode = e.target.value
                setCouponCode(enteredCode)
              }}
            />
            <div
              className="position-absolute"
              style={{ marginLeft: "77%", marginTop: "-10.4%" }}
            >
              <button
                className="btn btn-primary"
                type="button"
                style={{
                  width: "65px",
                  borderRadius: "0px 10px 10px 0px",
                  paddingTop: "9px",
                  paddingBottom: "10px"
                }}
                onClick={handleApplyClick}
                disabled = {!couponCode} // "" 
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CouponFormSystem