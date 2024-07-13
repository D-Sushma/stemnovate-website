import React, { useState, useEffect } from "react"
import { baseUrl } from "~/repositories/Repository"
import moment from "moment"

const ModuleDetailTopInformation = ({ product }) => {
  const [coupon_details, setcoupon_details] = useState("")
  const [expiry, setExpiry] = useState("")
  let d1 = moment().format("YYYY-MM-DD")

  console.log("product---", product)

  useEffect(() => {
    var c_details = product
    console.log(
      "c_details",
      c_details,
      c_details?.coupon_code !== "null",
      c_details?.coupon_code !== null
    )
    setcoupon_details(c_details)
    if (product?.coupon_code !== null || product?.coupon_code !== "null") {
      getExpiryDate()
    }
  }, [])

  const getExpiryDate = async () => {
    console.log("product?.coupon_code", product?.coupon_code)
    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    var raw = JSON.stringify({
      coupon_code: product?.coupon_code
    })
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    }

    const res = await fetch(
      baseUrl + "/api/products/getCouponValidationDate",
      requestOptions
    )
    const myProductData = await res.json()
    console.log("res__", myProductData.data)
    if (myProductData.status == 200) {
      var ex_date = myProductData.data[0].expiry_date
      var ex_date_new = moment(ex_date).utc().format("YYYY-MM-DD")

      setExpiry(ex_date_new)
    }
  }

  // Views
  return (
    <header className="ps-product__top-info">
      <h1 className="ps-product__title">{product.product_name}</h1>
      {coupon_details?.coupon_text == null ||
      coupon_details?.coupon_code == null ||
      coupon_details?.coupon_text == "null" ||
      coupon_details?.coupon_code == "null" ||
      coupon_details?.coupon_text == "" ||
      coupon_details?.coupon_code == "" ? (
        <></>
      ) : (
        <>
          {expiry >= d1 ? (
            <>
              <div className="ps-product__coupon">
                <text style={{ color: "#000000" }}>
                  {coupon_details?.coupon_text} -{" "}
                  <text
                    style={{
                      color: "#f06a34",
                      fontWeight: "bold",
                      fontSize: 15
                    }}
                  >
                    {coupon_details?.coupon_code}
                  </text>
                </text>
              </div>
              <text
                style={{
                  color: "#000",
                  fontWeight: "bold",
                  fontSize: 13,
                  marginLeft: 10
                }}
              >
                Valid untill :{" "}
                <text
                  style={{ color: "red", fontWeight: "bold", fontSize: 14 }}
                >
                  {expiry}
                </text>
              </text>
            </>
          ) : null}
        </>
      )}
    </header>
  )
}

export default ModuleDetailTopInformation
