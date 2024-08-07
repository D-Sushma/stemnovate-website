import React, { useEffect, useState } from "react"
import { Card, Col, Row } from "antd"
import { ToastContainer, toast } from "react-toastify"
import { baseUrl } from "~/repositories/Repository"
import { getSession } from "next-auth/react"
import { auth } from "~/lib/CheckUser"
import Link from "next/link"
import { encode } from "hex-encode-decode"
import { GrContactInfo, GrUserSettings, GrList, GrBasket } from "react-icons/gr"
import dynamic from "next/dynamic"
import bannerImg from "~/public/static/img/banners/dashboard-banner.svg"

const Container = dynamic(() => import("~/components/layouts/Container"), {
  loading: () => <p>Loading...</p>
})
const BreadCrumb = dynamic(() => import("~/components/elements/BreadCrumb"), {
  loading: () => <p>Loading...</p>
})
const Loader = dynamic(() => import("~/components/reuseable/Loader"), {
  loading: () => <p>Loading...</p>
})
const BannerImage = dynamic(() => import("~/components/elements/BannerImage"), {
  loading: () => <p>Loading...</p>
})

const breadcrumb = [
  {
    id: 1,
    text: "Home",
    url: "/"
  },

  {
    id: 2,
    text: "Dashboard"
  }
]

const dashboard = ({ UserData }) => {
  useEffect(() => {
    auth()
  }, [])
  const [isLoading, setIsLoading] = useState(false)
  const sendVerifyLink = () => {
    setIsLoading(true)
    const myPlaintextPassword = UserData.result.email
    const EncodedText = encode(myPlaintextPassword)
    const name = UserData.result.firstname + " " + UserData.result.lastname

    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    var raw = JSON.stringify({
      name: name,
      email: myPlaintextPassword,
      code: EncodedText
    })

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    }

    fetch(process.env.NEXT_BASE_URL + "/api/Email/verifyEmail", requestOptions)
      .then((response) => response.json())
      .then(async (result) => {
        if (result.msg == "success") {
          setIsLoading(false)
          toast.success("Verification email send successfully", {
            position: "top-right",
            autoClose: 15000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          })
        } else {
          setIsLoading(false)
          toast.error("something went to wrong", {
            position: "top-right",
            autoClose: 15000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          })
        }
      })
      .catch((error) => {
        setIsLoading(false)
      })
  }

  return (
    <Container title="Dashboard">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <main className="ps-page ps-page--inner">
        <div className="ps-page__header breadcrumb-h banner-breadcrumb-bg">
          <BannerImage
            alt="dashboard-banner-image"
            src={bannerImg}
            layout="fill"
            objectFit="cover"
            priority={true}
            style={{
              zIndex: -1
            }}
          />
          <div className="container ">
            <BreadCrumb breacrumb={breadcrumb} />
            <h1 className="text-center  text-white p-2">Dashboard</h1>
          </div>
        </div>
        <div className="ps-page__content">
          <div className="container">
            <div className="ps-about">
              <div className="container">
                <p className="py-4 font-weight-bold">
                  Welcome,{" "}
                  {UserData &&
                    UserData?.result?.firstname +
                      " " +
                      UserData?.result?.lastname +
                      "."}{" "}
                  How can we help you?
                </p>

                {UserData && UserData?.result?.is_verified ? null : (
                  <div className="alert alert-primary" role="alert">
                    Welcome to Stemnovate! We have sent you a verification
                    email. If you have not received it, please click the
                    <span
                      onClick={() => sendVerifyLink()}
                      className="alert-link span-with-link"
                    >
                      {" "}
                      <u>resend.</u>
                    </span>{" "}
                    link
                    {isLoading ? <Loader /> : null}
                  </div>
                )}

                {UserData && UserData?.result?.is_verified ? (
                  <>
                    {UserData &&
                    UserData.result.is_verified &&
                    UserData.result.customer_address_details == null ? (
                      <div className="alert alert-info" role="alert">
                        Welcome to Stemnovate! Please complete your profile to
                        get custom pricing.
                      </div>
                    ) : null}

                    {UserData &&
                    UserData.result.customer_address_details !== null &&
                    UserData.result.status == 0 ? (
                      <div className="alert alert-info" role="alert">
                        We are reviewing your profile and we will be in touch
                        with you soon.
                      </div>
                    ) : null}
                  </>
                ) : null}
              </div>
              {!UserData.result?.customer_address_details &&
              !UserData.result?.customer_application_details ? (
                <div
                  className="text-danger px-4 my-5"
                  style={{ fontWeight: "bolder" }}
                >
                  NOTE: Add organization and shipping details for ordering.{" "}
                  <Link href="/user/MyApplication">
                    <span
                      className="link-hover-thumb-shape"
                      style={{
                        fontWeight: "bolder",
                        textDecoration: "underline"
                      }}
                    >
                      Click link here
                    </span>
                  </Link>
                </div>
              ) : (
                ""
              )}

              <div className="site-card-wrapper my-5 flex-grow-1 row-eq-height">
                <Row gutter={16}>
                  <Col md={6} sm={24} style={{ width: "100%" }}>
                    <Link href="/user/EditProfile" prefetch={false}>
                      <Card className="card-bg-color m-2 " hoverable bordered>
                        <div className="d-flex flex-row">
                          <div className="rounded-circle d-flex align-items-center m-2">
                            <GrUserSettings size={40} color={"#003e4c"} />
                          </div>
                          <div className="d-flex flex-column align-items-center m-2">
                            <h4 className="align-self-start mb-1">
                              Edit Profile
                            </h4>
                            <p>Edit First name, last name etc.</p>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </Col>
                  <Col md={6} sm={24} style={{ width: "100%" }}>
                    <Link href="/user/Orders" prefetch={false}>
                      <Card className="card-bg-color m-2" hoverable bordered>
                        <div className="d-flex flex-row">
                          <div className="rounded-circle d-flex align-items-center m-2">
                            <GrList size={40} color={"#003e4c"} />
                          </div>
                          <div className="d-flex flex-column align-items-center m-2">
                            <h4 className="align-self-start mb-1">My Orders</h4>
                            <p>See Order List and Billing Details</p>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </Col>
                  <Col md={6} sm={24} style={{ width: "100%" }}>
                    <Link href={"/user/MyApplication"} prefetch={false}>
                      <Card className="card-bg-color m-2" hoverable bordered>
                        <div className="d-flex flex-row">
                          <div className="rounded-circle d-flex align-items-center m-2">
                            <GrContactInfo size={40} color={"#003e4c"} />
                          </div>
                          <div className="d-flex flex-column align-items-center m-2">
                            <h4 className="align-self-start mb-1">
                              Organization Profile
                            </h4>
                            <p>Update your Organization Details</p>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </Col>
                  <Col md={6} sm={24} style={{ width: "100%" }}>
                    <Link
                      href={`${baseUrl}${"/promotions-products"}`}
                      prefetch={false}
                    >
                      <Card className="card-bg-color m-2" hoverable bordered>
                        <div className="d-flex flex-row">
                          <div className="rounded-circle d-flex align-items-center m-2">
                            <GrBasket size={40} color="red" />
                          </div>
                          <div className="d-flex flex-column align-items-center m-2">
                            <h4 className="align-self-start mb-1">
                              Promotions
                            </h4>
                            <p>Check our limited time offers</p>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </main>
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
    const res = await fetch(`${baseUrl}/api/user/UserDetails`, requestOptions)
    UserData = await res.json()
  }

  return { props: { UserData } }
}

export default dashboard
