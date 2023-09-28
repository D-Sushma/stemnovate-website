import React, { useEffect, useState, useRef } from "react"
import { getSession } from "next-auth/react"
import { baseUrl } from "~/repositories/Repository"
import { useRouter } from "next/router"
import moment from "moment"
import dynamic from "next/dynamic"

const Container = dynamic(() => import("~/components/layouts/Container"), {
  loading: () => <p>Loading...</p>
})
const Subscribe = dynamic(() =>
  import("~/components/shared/sections/Subscribe")
)

function orderConfirmation({ UserData }) {
  const router = useRouter()
  const { status, orderId } = router.query
  const [orderData, setOrderdata] = useState("")
  const MySummery = useRef(null)
  const [resourcesData, setResourcesdata] = useState([])
  useEffect(() => {
    getOrderDetails()
  }, [])

  const getOrderDetails = async () => {
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
    console.log("userOrders", userOrders.userOrders)
    setOrderdata(userOrders.userOrders)
    if (userOrders.userOrders.length > 0) {
      const orders_Array = userOrders.userOrders
      const orders_Details_Array = orders_Array[1]
      if (orders_Details_Array.length > 0) {
        var userResourcesArr = []
        console.log("order_details", orders_Details_Array)
        for (let i = 0; i < orders_Details_Array.length; i++) {
          console.log("product_id", orders_Details_Array[i].product_id)
          var resourcesID = orders_Details_Array[i].product_id
          var raw1 = JSON.stringify({ resourcesID: resourcesID })

          var requestOptions1 = {
            method: "POST",
            headers: myHeaders,
            body: raw1
          }
          const response1 = await fetch(
            `${baseUrl}/api/resources/getResourcesById`,
            requestOptions1
          )
          const userResources = await response1.json()
          console.log("userResources", userResources)
          if (userResources.data.length > 0) {
            userResourcesArr.push(userResources.data)
          }
        }
        console.log("userResourcesArr", userResourcesArr)
        setResourcesdata(userResourcesArr)
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 83 && window.scrollY < 750) {
        MySummery.current.scrollIntoView({ behavior: "smooth" })
        MySummery.current.style.position = "fixed"
        MySummery.current.style.right = "10px"
        MySummery.current.style.top = "100px"
      } else {
        MySummery.current.scrollIntoView({ behavior: "smooth" })
        MySummery.current.style.position = ""
        MySummery.current.style.right = ""
        MySummery.current.style.top = ""
      }
      console.log(MySummery.current.style)
      console.log(window.scrollY)
    })
  }, [])

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
                                orderData &&
                                orderData[0].payment_status == "success"
                                  ? "badge badge-success"
                                  : "badge badge-danger"
                              }`}
                            >
                              {orderData &&
                              orderData[0]?.payment_status == "success"
                                ? "Successfull"
                                : orderData[0]?.payment_status}
                            </span>
                          </h3>
                          <h5>
                            Order Date:{" "}
                            {moment(orderData[0]?.order_date).format(
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
                                  UserData.result.customer_application_details
                                    .Organization_Name
                                }
                              </p>

                              <p>
                                {UserData.result.firstname}{" "}
                                {UserData.result.lastname}
                              </p>
                              <p>{UserData.result.email}</p>
                              <p>
                                {
                                  UserData.result.customer_address_details
                                    .B_PhoneNumber
                                }
                              </p>
                            </div>
                            <div className="col-md-4">
                              <h4>Billing Address</h4>
                              <p>
                                {
                                  UserData.result.customer_address_details
                                    .B_First
                                }{" "}
                                {
                                  UserData.result.customer_address_details
                                    .B_last
                                }
                              </p>
                              <p>
                                {
                                  UserData.result.customer_address_details
                                    .B_Email
                                }
                              </p>
                              <p>
                                {
                                  UserData.result.customer_address_details
                                    .B_PhoneNumber
                                }
                              </p>
                              <p>
                                {
                                  UserData.result.customer_address_details
                                    .B_Address1
                                }
                                ,{" "}
                                {
                                  UserData.result.customer_address_details
                                    .B_Address2
                                }
                                ,{" "}
                                {
                                  UserData.result.customer_address_details
                                    .B_Town
                                }
                                ,{" "}
                                {
                                  UserData.result.customer_address_details
                                    .B_County
                                }
                                ,{" "}
                                {UserData.result.customer_address_details.B_ZIP}
                                ,{" "}
                                {
                                  UserData.result.customer_address_details
                                    .B_Country
                                }
                              </p>
                            </div>
                            <div className="col-md-4">
                              <h4>Shipping Address</h4>
                              <p>
                                {
                                  UserData.result.customer_address_details
                                    .S_First
                                }{" "}
                                {
                                  UserData.result.customer_address_details
                                    .S_last
                                }
                              </p>
                              <p>
                                {
                                  UserData.result.customer_address_details
                                    .S_Email
                                }
                              </p>
                              <p>
                                {
                                  UserData.result.customer_address_details
                                    .S_PhoneNumber
                                }
                              </p>
                              <p>
                                {
                                  UserData.result.customer_address_details
                                    .S_Address1
                                }
                                ,{" "}
                                {
                                  UserData.result.customer_address_details
                                    .S_Address2
                                }
                                ,{" "}
                                {
                                  UserData.result.customer_address_details
                                    .S_Town
                                }
                                ,{" "}
                                {
                                  UserData.result.customer_address_details
                                    .S_County
                                }
                                ,{" "}
                                {UserData.result.customer_address_details.S_ZIP}
                                ,{" "}
                                {
                                  UserData.result.customer_address_details
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
                              <p>TermsIncoterms: Delivered At Place (DAP).</p>
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
                                  <th width="10%">Catalogue Number</th>
                                  <th width="46%">Product Description</th>
                                  <th width="10%">Resource Link</th>
                                  <th width="10%">Price</th>
                                  <th width="8%">Quantity</th>
                                  <th width="16%">Total</th>
                                </tr>
                                <tbody>
                                  {orderData &&
                                    orderData[1].map((item, key) => (
                                      <tr key={key}>
                                        <td width="10%"> {item.ProductName}</td>
                                        <td width="46%">
                                          <span
                                            dangerouslySetInnerHTML={{
                                              __html: item.description
                                            }}
                                          />
                                        </td>
                                        <td width="10%">
                                          {resourcesData?.map((data, key) => (
                                            <a
                                              href={`/resources/Access/${data[0].resources_category_resourcesToresources_category.slug}/${data[0].resources_id}/${data[0].access_type}`}
                                              rel="noreferrer"
                                              key={key}
                                            >
                                              <button className="button button--green mr-2">
                                                Access
                                              </button>
                                            </a>
                                          ))}
                                        </td>
                                        <td width="10%">
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
                        <div className="col-md-4" ref={MySummery}>
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
                                <p className="text-white">Subtotal</p>{" "}
                              </div>
                              <div className="d-flex">
                                <p className="text-white">
                                  £
                                  {orderData &&
                                    parseFloat(orderData[0].total_amount) -
                                      parseFloat(orderData[0].total_tax)}
                                </p>
                              </div>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                              <div className="d-flex">
                                <p className="text-white">Shipping</p>
                              </div>
                              <div className="d-flex">
                                <p className="text-white">
                                  £{" "}
                                  {orderData &&
                                    orderData[0].total_shipping_cost}
                                </p>
                              </div>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                              <div className="d-flex">
                                <p className="text-white">VAT (20%)</p>
                              </div>
                              <div className="d-flex">
                                <p className="text-white">
                                  £ {orderData && orderData[0].vat_amount}
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
                              <div className="d-flex">
                                <p className="text-white">
                                  £ {orderData && orderData[0].total_amount}
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

export default orderConfirmation
