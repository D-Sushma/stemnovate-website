import React, { useState, useEffect } from "react"
import { toast, ToastContainer } from "react-toastify"
import axios from "axios"

function CouponFormSystem({ onCouponExistChange }) {
  const [couponCode, setCouponCode] = useState("")
  const [isCouponExist, setIsCouponExist] = useState(false)
  const [applied, setApplied] = useState(false)
  const [showEmptyCouponError, setShowEmptyCouponError] = useState(false)
  // const [couponAppliedOnce, setCouponAppliedOnce] = useState(false)

  const checkCouponExist = async () => {
    try {
      const response = await axios.post("/api/coupons/checkCoupons", {
        coupon_code: couponCode
      })
      // console.log("response", response?.data)
      setIsCouponExist(response?.data)
    } catch (error) {
      console.log("error", error)
    }
  }
  
  useEffect(() => {
    checkCouponExist();
  }, [couponCode])
  const handleApplyClick = () => {
    console.log("CouponCode", couponCode)
    console.log("isCouponExist 2", isCouponExist)
    
    if (!couponCode) {
      // toast.info("Please enter a coupon code.", {
      //   position: "bottom-left",
      //   autoClose: 15000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "colored"
      // })
      setShowEmptyCouponError(true)
      setApplied(false)
      return
    }
    setShowEmptyCouponError(false)

    onCouponExistChange(isCouponExist?.result)
    // console.log("couponAppliedOnce",couponAppliedOnce);
    if (isCouponExist?.exist) {
      // if (!couponAppliedOnce) {
      //   toast.success(`Coupon code "${couponCode}" already exists.`)
      //   setApplied(true)
      //   setCouponAppliedOnce(true)
      // }else{
      //   setCouponAppliedOnce(false)
      //   toast.info(`Coupon code "${couponCode}" already applied `)
      // }
      toast.success(`Coupon code "${couponCode}" already exists.`);
      setApplied(true);
    } else {
      toast.error(`Coupon code "${couponCode}" not exist.`)
      setApplied(false)
    }
  }
  return (
    <>
      <div className="mb-5 coupon-container ">
        <ToastContainer/>
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
                // setIsCouponExist(enteredCode)
                // TAKE FOR LOGIC IF INPUT AGAIN EMPTY THAN APPLY BUTTON AGAIN BLUE----
                // setIsCouponExist((enteredCode !== "")? enteredCode : setApplied(false)) ;
              }}
            />
            <div
              className="position-absolute"
              style={{ marginLeft: "77%", marginTop: "-10.4%" }}
            >
              <button
                // className="btn btn-primary"
                className={`btn btn-${applied ? "success" : "primary"}`}
                type="button"
                style={{
                  width: "65px",
                  borderRadius: "0px 10px 10px 0px",
                  paddingTop: "9px",
                  paddingBottom: "10px"
                }}
                onClick={handleApplyClick}
              >
                {applied ? "Applied" : "Apply"}
              </button>
            </div>
          </div>
          {showEmptyCouponError && (
            <div style={{ color: "red", marginTop: "3px" }}>
              Please enter a coupon code.
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default CouponFormSystem