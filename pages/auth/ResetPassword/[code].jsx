import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { Form, Input, Button } from "antd"
import Link from "next/link"
import { AiOutlineLock } from "react-icons/ai"
import { ToastContainer, toast } from "react-toastify"
import dynamic from "next/dynamic"

const Container = dynamic(() => import("~/components/layouts/Container"), {
  loading: () => <p>Loading...</p>
})

function ResetPassword() {
  const [isLoading, setisLoading] = useState(false)
  const router = useRouter()
  const { code } = router.query
  useEffect(() => {
    if (code == "") {
      toast.error("unauthorized", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
      })
      router.push(process.env.NEXT_BASE_URL + "/auth/UserLogin")
    }
  }, [])

  const CheckPassword = (data, p) => {
    if (p.length < 8) {
      return Promise.reject(new Error("password must be at least 8 characters"))
    }
    if (p.search(/[a-z]/) < 0) {
      return Promise.reject(
        new Error("password must contain at least one lower case letter.")
      )
    }

    if (p.search(/[A-Z]/) < 0) {
      return Promise.reject(
        new Error("password must contain at least one upper case letter.")
      )
    }
    if (p.search(/[!@#\$%\^&\*_]/) < 0) {
      return Promise.reject(
        new Error(
          "Your password must contain at least special char from -[ ! @ # $ % ^ & * _ ]"
        )
      )
    }
    if (p.search(/[0-9]/) < 0) {
      return Promise.reject(
        new Error("password must contain at least one digit.")
      )
    }
    if (p.length > 32) {
      return Promise.reject(new Error("password must be at max 32 characters"))
    }

    return Promise.resolve()
  }

  const onFinish = async (values) => {
    values.code = code
    console.log(values)
    setisLoading(true)
    try {
      const response = await fetch(
        process.env.NEXT_BASE_URL + "/api/auth/SetNewPassword",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(values)
        }
      )
      const json = await response.json()
      // return json.movies;
      console.log(json)
      if (json.code == "200") {
        toast.success(json.result.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored"
        })
        router.push(process.env.NEXT_BASE_URL + "/auth/UserLogin")
        setisLoading(false)
      } else {
        toast.error(json.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored"
        })

        setisLoading(false)
      }
    } catch (error) {
      console.error(error)
      toast.error("Something Went to wrong", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
      })

      setisLoading(false)
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo)
  }

  return (
    <Container title="My Account">
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
      <div className="ps-page ps-page--inner ">
        <div className="container">
          <div className="ps-page__header"></div>
          <div className="ps-page__content ps-account">
            <div className="row">
              <div
                className="p-4 col-12 col-md-6 d-sm-none d-md-block "
                style={{
                  color: "white",
                  background: "#5292a4"
                }}
              >
                <h2 className="ps-form__title">Personalize Your Experience</h2>
                <p className="m-3">
                  You are currently not signed in. For a better experience,
                  please sign in or create an online profile.* This will allow
                  you to find products and prices that are specific to the
                  organization you work in. You will also be able to:
                </p>
                <ul className="m-3">
                  <li>Get access to featured online tools</li>
                  <li>Check out faster</li>
                  <li>Save multiple shipping locations</li>
                  <li>Access your order history</li>
                  <li>Save items to a favorites list</li>
                </ul>
                <small>
                  * Welcome to the new stemnovate.co.uk. As a security feature,
                  all registered users must reset their password when logging
                  into the new site for the first time. Please enter your
                  profile email address and password to have a password reset
                  link sent to your email account. This link will expire after
                  24 hours. If you need support, please contact your local
                  customer service team.
                </small>
              </div>
              <div className="p-4 col-12 col-md-6 card">
                <div className="ps-form--review m-5">
                  <h2 className="ps-form__title">Reset Password</h2>
                  <p className="m-3">
                    Enter your Stronger Password to secure Your Account.
                  </p>
                  <Form
                    layout="vertical"
                    size={"large"}
                    className="login-form"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Form.Item
                      label="New Password"
                      name="password"
                      autoComplete="new-password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!"
                        },
                        { validator: CheckPassword }
                      ]}
                    >
                      <Input.Password
                        prefix={
                          <AiOutlineLock className="site-form-item-icon" />
                        }
                        type="password"
                        placeholder="Password"
                      />
                    </Form.Item>
                    <Form.Item
                      name="confirm"
                      label="Confirm New Password"
                      dependencies={["password"]}
                      hasFeedback
                      autoComplete="new-password"
                      rules={[
                        {
                          required: true,
                          message: "Please confirm your password!"
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue("password") === value) {
                              return Promise.resolve()
                            }

                            return Promise.reject(
                              new Error(
                                "The two passwords that you entered do not match!"
                              )
                            )
                          }
                        })
                      ]}
                    >
                      <Input.Password
                        prefix={
                          <AiOutlineLock className="site-form-item-icon" />
                        }
                        type="password"
                        placeholder="Confirm Password"
                      />
                    </Form.Item>

                    <Form.Item className="mt-5">
                      <Link href={"/"}>
                        <Button
                          type="primary"
                          htmlType="Cancel"
                          size={"large"}
                          className="mx-4"
                        >
                          Cancel
                        </Button>
                      </Link>

                      {isLoading ? (
                        <Button
                          type="danger"
                          htmlType="submit"
                          size={"large"}
                          loading
                        >
                          Set New Password
                        </Button>
                      ) : (
                        <Button type="danger" htmlType="submit" size={"large"}>
                          Set New Password
                        </Button>
                      )}
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ResetPassword
