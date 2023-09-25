import React, { useState } from "react"
import { Form, Input, Button } from "antd"
import Link from "next/link"
import { AiOutlineUser } from "react-icons/ai"
import { ToastContainer, toast } from "react-toastify"
import dynamic from "next/dynamic"

const Container = dynamic(() => import("~/components/layouts/Container"), {
  loading: () => <p>Loading...</p>
})
const Image = dynamic(() => import("~/components/elements/Image"), {
  loading: () => <p>Loading...</p>
})

const ForgotPassword = () => {
  const [isLoading, setisLoading] = useState(false)

  const SendEmail = async (name, email, code) => {
    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    var raw = JSON.stringify({
      name: name,
      email: email,
      code: code
    })

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    }

    fetch(
      process.env.NEXT_BASE_URL + "/api/Email/forgotPassEmail",
      requestOptions
    )
      .then((response) => response.text())
      .then(async (result) => {
        console.log(result)
      })
      .catch((error) => console.log("error", error))
  }

  const onFinish = async (values) => {
    console.log(values)
    setisLoading(true)
    try {
      const response = await fetch(
        process.env.NEXT_BASE_URL + "/api/auth/ForgotPassword",
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
        SendEmail(json.result.firstname, json.result.email, json.result.code)
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
              <div className="p-0 col-12 col-md-6 d-sm-none d-md-block bg-login-page">
                <Image
                  src="/static/img/Home/signin-img.jpg"
                  alt="Stemnovate Limited"
                  width={1000}
                  height={788}
                />
              </div>
              <div className="p-4 col-12 col-md-6 card">
                <div className="ps-form--review m-5">
                  <h2 className="ps-form__title">Forgot Password</h2>
                  <p className="m-3">
                    {" "}
                    Enter your email address to receive a link to reset your
                    password.
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
                      label="Email"
                      name="Email"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Email!"
                        }
                      ]}
                    >
                      <Input
                        prefix={
                          <AiOutlineUser className="site-form-item-icon" />
                        }
                      />
                    </Form.Item>

                    <Form.Item className="mt-5">
                      <Link href={"/"}>
                        <Button
                          type="primary"
                          htmlType="Cancel"
                          size={"large"}
                          className="mx-4 span-with-link"
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
                          Sending
                        </Button>
                      ) : (
                        <Button type="danger" htmlType="submit" size={"large"}>
                          Send Mail
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

export default ForgotPassword
