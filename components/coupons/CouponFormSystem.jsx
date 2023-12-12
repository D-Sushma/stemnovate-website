import React, { useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import axios from "axios"
import moment from "moment";

function CouponFormSystem({ onCouponExistChange }) {
  const [couponCode, setCouponCode] = useState("")
  const [applied, setApplied] = useState(false)
  const [showEmptyCouponError, setShowEmptyCouponError] = useState(false)
  // const [couponDetail, setCouponDetail] = useState(false)

  const checkCouponExist = async () => {
    try {
      const response = await axios.post("/api/coupons/checkCoupons", {
        coupon_code: couponCode
      })
      // setCouponDetail(response?.data)
      return response?.data;
    } catch (error) {
      console.log("error", error)
    }
  }
  const getCouponUsed = async (coupon) => {
    try {
      const response = await axios.post("/api/coupons/checkCouponUsed", {
              coupon_code: coupon,
          });
          console.log("response==========",response?.data)
      return response?.data
    } catch (error) {
      console.error(error)
    }
  }
  
  const handleApplyClick = async () => {
    const couponDetail = await checkCouponExist();
    // await checkCouponExist();
    console.log("CouponCode", couponCode)
    console.log("couponDetail 2", couponDetail)
    
    if (!couponCode) {
      // toast.info("Please enter a coupon code.", {
      //   position: "bottom-left",
      //   autoClose: 3000,
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

    onCouponExistChange(couponDetail?.result)
    if (couponDetail?.exist) {
      const currentDate = moment(new Date());
      const couponExpiryDate = moment(couponDetail?.result[0]?.expiry_date);
      if(couponDetail?.result[0]?.published && couponExpiryDate <= currentDate){
        const usedCoupon = await getCouponUsed(couponDetail?.result[0]?.coupon_code);
        console.log("usedCoupon",usedCoupon)
            if(!usedCoupon?.exist){ 
              setApplied(true);
              // toast.success(`Coupon code "${couponDetail?.result[0]?.coupon_code}" is applied successfully!`);
            }else{
              toast.info(usedCoupon?.message,
              {
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
                },
              })
              // toast.error(`Coupon code "${couponDetail?.result[0]?.coupon_code}" is already used.`);
              setApplied(false);
            }
            // toast.error(`Coupon code "${couponDetail?.result[0]?.coupon_code}" is active & not expiry.`);
      }else{
        toast.error(`Coupon code "${couponDetail?.result[0]?.coupon_code}" has expired.`,
        {
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
            backgroundColor:"gray"
          },
        })
        // toast.error(`Coupon code "${couponDetail?.result[0]?.coupon_code}" has expired.`);
        // toast.error(`Coupon code "${couponDetail?.result[0]?.coupon_code}" is Inactive & expiry.`);
        setApplied(false);
      }
      // toast.success(`Coupon code "${couponCode}" is exists.`);
    } else {
      toast.error(`Coupon code "${couponCode}" not exist.`,
      {
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
        },
      })
      // toast.error(`Coupon code "${couponCode}" not exist.`)
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
              }}
            />
            <div
              className="position-absolute"
              style={{ marginLeft: "77%", marginTop: "-10.4%" }}
            >
              <button
                // className="btn btn-primary"
                className={`btn btn-${applied && couponCode ? "success" : "primary"}`}
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
                {applied && couponCode ? "Applied" : "Apply"}
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