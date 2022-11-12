import React, { useEffect } from "react"
import Container from "~/components/layouts/Container"
import BreadCrumb from "~/components/elements/BreadCrumb"
import { useSession, getSession } from "next-auth/react"
import useEcomerce from "~/hooks/useEcomerce"
import { baseUrl } from "~/repositories/Repository"
import { useRouter } from "next/router"
import { Alert } from "antd"
import { ToastContainer } from "react-toastify"
import BothFormCheckout from "~/components/shared/forms/BothFormCheckout"
import Link from "next/link"

const CheckoutScreen = ({ UserData }) => {
  const router = useRouter()
  const { status, orderId } = router.query
  const { removeItems } = useEcomerce()

  const mySession = useSession()
  const breadcrumb = [
    {
      text: "Home",
      url: "/"
    },
    {
      text: "Shop",
      url: "/Products"
    },
    {
      text: "Checkout"
    }
  ]

  useEffect(() => {
    if (status) {
      removeItems("cart")
      updateStatus()
    }
  }, [status])

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
    var resp = await res.json()
    console.log(resp)
  }

  return (
    <Container title="Checkout">
      <ToastContainer />
      <div className="ps-page ps-page--shopping">
        <div className="container">
          <div className="ps-page__header">
            <BreadCrumb breacrumb={breadcrumb} />
            <h1 className="ps-page__heading">Checkout</h1>
          </div>
          <div className="ps-page__content">
            {status && status === "success" && (
              <Alert
                message="Success "
                description="Payment successful."
                type="success"
                showIcon
                closable
              />
            )}
            {status && status === "cancel" && (
              <Alert
                message="Error"
                description="Payment Unsuccessful"
                type="error"
                showIcon
                closable
              />
            )}
            <div className="ps-checkout">
              <div className="ps-checkout__wapper">
                {mySession ? (
                  UserData &&
                  UserData?.result?.status &&
                  UserData?.result?.is_verified ? null : (
                    <>
                      {UserData &&
                      UserData?.result?.is_verified &&
                      UserData?.result?.customer_address_details == null ? (
                        <div className="alert alert-info" role="alert">
                          Welcome to Stemnovate! Please complete your profile to
                          get custom pricing.
                        </div>
                      ) : null}

                      {UserData && UserData?.result?.is_verified == 0 ? (
                        <div className="alert alert-info" role="alert">
                          Welcome to Stemnovate! Please verify your email.
                        </div>
                      ) : null}

                      {UserData &&
                      UserData?.result?.is_verified &&
                      UserData?.result?.customer_address_details !== null &&
                      UserData.result.status == 0 ? (
                        <div className="alert alert-info" role="alert">
                          We are reviewing your profile and we will be in touch
                          with you soon.
                        </div>
                      ) : null}
                    </>
                  )
                ) : (
                  <p className="ps-checkout__text">
                    Returning customer?{" "}
                    <Link href="/auth/UserLogin">
                      <a>Click here to login</a>
                    </Link>
                  </p>
                )}
              </div>
              <BothFormCheckout
                UserData={UserData}
                userStatus={UserData && UserData?.result?.status}
              />
            </div>
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

export default CheckoutScreen
