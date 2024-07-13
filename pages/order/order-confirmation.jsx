import React, { useEffect, useState, useRef } from "react"
import { getSession } from "next-auth/react"
import useEcomerce from "~/hooks/useEcomerce"
import { baseUrl } from "~/repositories/Repository"
import { useRouter } from "next/router"
import moment from "moment"
import dynamic from "next/dynamic"
import axios from "axios"

const Container = dynamic(() => import("~/components/layouts/Container"), {
  loading: () => <p>Loading...</p>
})
const Subscribe = dynamic(
  () => import("~/components/shared/sections/Subscribe"),
  { loading: () => <p>Loading...</p> }
)

const Image = dynamic(() => import("~/components/elements/Image"), {
  loading: () => <p>Loading...</p>
})

function OrderConfirmation({ UserData }) {
  const router = useRouter()
  const { status, orderId } = router.query
  const [orderData, setOrderdata] = useState("")
  const MySummery = useRef(null)
  const { removeItems } = useEcomerce()

  useEffect(() => {
    if (status) {
      const fetchDetails = async () => {
        updateStatus()
        const orderDetails = await getOrderDetails(status)
        if (status == "success") {
          removeItems("cart")
          insertCouponUsedData(orderDetails)
        }
      }
      fetchDetails()
    }
  }, [status])
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 83 && window.scrollY < 350) {
        MySummery?.current.scrollIntoView({ behavior: "smooth" })
        MySummery.current.style.position = "fixed"
        MySummery.current.style.right = "10px"
        MySummery.current.style.top = "100px"
      } else {
        MySummery.current.scrollIntoView({ behavior: "smooth" })
        MySummery.current.style.position = ""
        MySummery.current.style.right = ""
        MySummery.current.style.top = ""
      }
    })
  }, [])

  const getOrderDetails = async (status) => {
    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    var raw = JSON.stringify({ orderId: orderId })

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    }
    const response = await fetch(
      `${baseUrl}/api/orders/getOrderDetails`,
      requestOptions
    )
    const userOrders = await response.json()
    var list = userOrders?.userOrders[1];
    var arr = []
    list?.forEach((element) => {
      if (element?.is_resource == true) {
        arr.push({ resourceId: element?.product_id, userId: userOrders?.userOrders[0]?.customer_id })
      }
    })

    if(status=='success'){
        updateIsAccess(arr);
    }
   

    setOrderdata(userOrders.userOrders)
    return userOrders.userOrders
  }
  const insertCouponUsedData = async (orderData) => {
    try {
      await axios.post("/api/coupons/insertUsedCoupon", {
        coupon_code: orderData[0]?.coupon_code,
        discount_type: orderData[0]?.discount_type,
        discount: orderData[0]?.discount,
        customer_id: orderData[0]?.customer_id
      })
    } catch (error) {
    }
  }

  const updateStatus = async () => {
    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")
    const fullName =
      UserData?.result?.firstname + " " + UserData?.result?.lastname
    const Email = UserData?.result?.email

    var raw = JSON.stringify({
      orderId: orderId,
      status: status,
      name: fullName,
      email: Email
    })

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    }
    // Fetch data from external API
    const res = await fetch(
      `${process.env.NEXT_BASE_URL}api/orders/addOrders`,
      requestOptions
    )
  }

  const updateIsAccess = async (arr) => {
  var myHeaders = new Headers()
  myHeaders.append("Content-Type", "application/json")

  var raw = JSON.stringify({
    UserIdId: arr[0].userId,
    resources_id: arr[0]?.resourceId
  })

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw
  }

  await fetch("/api/orders/updateAccessResource", requestOptions)
    .then((response) => response.json())
    .then(async (result) => {
      if (result.code == "200") {
       
      }
    })
    .catch((error) => console.log("error", error))
  }

  return (
    <Container title="Order Confirmation">
      <div className="ps-page ps-page--shopping">
        <div className="ps-page__content">
          <div className="ps-about">
            <div className="about-section">
              <div className="container-fluid">
                <div className="ps-page__content">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div
                          className="col-md-12 mb-3"
                          style={{ borderBottom: "1px solid black" }}
                        >
                          <h3>ORDER STEM90{orderData && orderData[0].id}</h3>
                          <h3>
                            Status:{" "}
                            <span
                              className={`h3 ${
                                status && status == "success"
                                  ? "badge badge-success"
                                  : "badge badge-danger"
                              }`}
                            >
                              {status == "success" ? "Successfull" : status}
                            </span>
                          </h3>
                          <h5>
                            Order Date:{" "}
                            {moment(orderData[0]?.order_date)?.format(
                              "MMMM Do YYYY"
                            )}
                          </h5>
                        </div>
                        <div className="col-md-8 ">
                          <div
                            className="row mb-2"
                            style={{ borderBottom: "1px solid black" }}
                          >
                            <div className="col-md-4">
                              <h4>Primary Contact</h4>
                              <p>
                                {
                                  UserData?.result?.customer_application_details
                                    .Organization_Name
                                }
                              </p>

                              <p>
                                {UserData?.result?.firstname}{" "}
                                {UserData?.result?.lastname}
                              </p>
                              <p>{UserData?.result?.email}</p>
                              <p>
                                {
                                  UserData?.result?.customer_address_details
                                    .B_PhoneNumber
                                }
                              </p>
                            </div>
                            <div className="col-md-4">
                              <h4>Billing Address</h4>
                              <p>
                                {
                                  UserData?.result?.customer_address_details
                                    .B_First
                                }{" "}
                                {
                                  UserData?.result?.customer_address_details
                                    .B_last
                                }
                              </p>
                              <p>
                                {
                                  UserData?.result?.customer_address_details
                                    .B_Email
                                }
                              </p>
                              <p>
                                {
                                  UserData?.result?.customer_address_details
                                    .B_PhoneNumber
                                }
                              </p>
                              <p>
                                {
                                  UserData?.result?.customer_address_details
                                    .B_Address1
                                }
                                ,{" "}
                                {
                                  UserData?.result?.customer_address_details
                                    .B_Address2
                                }
                                ,{" "}
                                {
                                  UserData?.result?.customer_address_details
                                    .B_Town
                                }
                                ,{" "}
                                {
                                  UserData?.result?.customer_address_details
                                    .B_County
                                }
                                ,{" "}
                                {
                                  UserData?.result?.customer_address_details
                                    .B_ZIP
                                }
                                ,{" "}
                                {
                                  UserData?.result?.customer_address_details
                                    .B_Country
                                }
                              </p>
                            </div>
                            <div className="col-md-4">
                              <h4>Shipping Address</h4>
                              <p>
                                {
                                  UserData?.result?.customer_address_details
                                    .S_First
                                }{" "}
                                {
                                  UserData?.result?.customer_address_details
                                    .S_last
                                }
                              </p>
                              <p>
                                {
                                  UserData?.result?.customer_address_details
                                    .S_Email
                                }
                              </p>
                              <p>
                                {
                                  UserData?.result?.customer_address_details
                                    .S_PhoneNumber
                                }
                              </p>
                              <p>
                                {
                                  UserData?.result?.customer_address_details
                                    .S_Address1
                                }
                                ,{" "}
                                {
                                  UserData?.result?.customer_address_details
                                    .S_Address2
                                }
                                ,{" "}
                                {
                                  UserData?.result?.customer_address_details
                                    .S_Town
                                }
                                ,{" "}
                                {
                                  UserData?.result?.customer_address_details
                                    .S_County
                                }
                                ,{" "}
                                {
                                  UserData?.result?.customer_address_details
                                    .S_ZIP
                                }
                                ,{" "}
                                {
                                  UserData?.result?.customer_address_details
                                    .S_Country
                                }
                              </p>
                            </div>
                          </div>
                          <div
                            className="row"
                            style={{ borderBottom: "1px solid black" }}
                          >
                            <div className="col-md-6">
                              <h4 className="my-3">PO Number</h4>
                              <p>
                                {orderData.po_number
                                  ? orderData[0].po_number
                                  : "-"}
                              </p>
                            </div>
                            <div className="col-md-6">
                              <h4 className="my-3">Invoice Terms</h4>
                              <p>Terms Incoterms: Delivered At Place (DAP).</p>
                              <p>Payment Terms: 30 days from date of order.</p>
                            </div>
                          </div>
                          <div
                            className="row"
                            style={{ borderBottom: "1px solid black" }}
                          >
                            <div className="col-md-12">
                              <h4 className="my-3">ORDER SUMMARY</h4>
                              <table className="table" width="100%">
                                <tr>
                                  <th width="15%"></th>
                                  <th width="45%">Product Description</th>
                                  <th width="8%">Price</th>
                                  <th width="13%">Quantity</th>
                                  <th width="16%">Total</th>
                                </tr>
                                <tbody>
                                  {orderData &&
                                    orderData[1].map((item, key) => (
                                      <tr key={key}>
                                        <td width="15%">
                                          <div>
                                            <Image
                                              className="hover-zoom d-flex m-2"
                                              src={item.imgUrl}
                                              alt={item.ProductName}
                                              width={100}
                                              height={100}
                                              objectFit="contain"
                                            />
                                          </div>
                                        </td>
                                        <td width="45%">
                                          <div
                                            style={{ marginRight: "5%" }}
                                          >
                                            {item.ProductName}
                                            <br />

                                            <span
                                              dangerouslySetInnerHTML={{
                                                __html: item.description
                                              }}
                                            />
                                          </div>
                                        </td>
                                        <td width="16%">
                                          £{item.product_price}
                                        </td>
                                        <td width="8%">
                                          {item.product_quantity}
                                        </td>
                                        <td width="16%">
                                          £{item.total_amount}
                                        </td>
                                      </tr>
                                    ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          {" "}
                          <div className="d-flex flex-column justify-content-center plus-section-new p-5">
                            <div className="">
                              <h2
                                className="text-white"
                                style={{ borderBottom: "2px solid white" }}
                              >
                                Summary
                              </h2>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                              <div className="d-flex">
                                <p className="text-white">Product Total</p>{" "}
                              </div>
                              <div className="d-flex ml-3">
                                <p className="text-white">
                                  £
                                  {orderData &&
                                    (
                                      parseFloat(orderData[0].total_amount) -
                                      parseFloat(orderData[0].total_tax)
                                    ).toFixed(2)}
                                </p>
                              </div>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                              <div className="d-flex">
                                <p className="text-white">Discount</p>
                              </div>
                              <div className="d-flex mr-3">
                                <p className="text-white">
                                  - £
                                  {orderData &&
                                    orderData[0].discount_amount.toFixed(2)}
                                </p>
                              </div>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                              <div className="d-flex">
                                <p className="text-white">Subtotal</p>{" "}
                              </div>
                              <div className="d-flex ml-3">
                                <p className="text-white">
                                  £
                                  {orderData &&
                                    (
                                      parseFloat(orderData[0].total_amount) -
                                      parseFloat(orderData[0].total_tax) -
                                      orderData[0].discount_amount
                                    ).toFixed(2)}
                                </p>
                              </div>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                              <div className="d-flex">
                                <p className="text-white">Shipping</p>
                              </div>
                              <div className="d-flex ml-3">
                                <p className="text-white">
                                  £
                                  {orderData &&
                                    orderData[0].total_shipping_cost.toFixed(2)}
                                </p>
                              </div>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                              <div className="d-flex">
                                <p className="text-white">VAT (20%)</p>
                              </div>
                              <div className="d-flex ml-3">
                                <p className="text-white">
                                  £
                                  {orderData &&
                                    orderData[0].vat_amount.toFixed(2)}
                                </p>
                              </div>
                            </div>

                            <div
                              className="d-flex flex-row justify-content-between"
                              style={{
                                borderBottom: "1px solid white",
                                borderTop: "1px solid white"
                              }}
                            >
                              <div className="d-flex">
                                <p className="text-white">Total</p>
                              </div>
                              <div className="d-flex ml-3">
                                <p className="text-white">
                                  £
                                  {orderData &&
                                    orderData[0].total_amount.toFixed(2)}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Subscribe />
          </div>
        </div>
      </div>
    </Container>
  )
}

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx)
  var UserData = ""
  if (session) {
    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    var raw = JSON.stringify({
      UserLoginId: session.id
    })

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    }
    // Fetch data from external API
    const res = await fetch(`${baseUrl}/api/user/UserDetails`, requestOptions)
    UserData = await res.json()
  }

  // Pass data to the page via props
  return { props: { UserData } }
}

export default OrderConfirmation
