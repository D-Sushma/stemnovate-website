import React, { useState, useEffect } from "react"
import Container from "~/components/layouts/Container"
import { useRouter } from "next/router"
import { Form, Input, Button, Checkbox } from "antd"
import { AiOutlineLock, AiOutlineUser } from "react-icons/ai"
import { ToastContainer, toast } from "react-toastify"
import Link from "next/link"
import Image from "~/components/elements/Image"
import { getSession } from "next-auth/react"

const UserLogin = ({ reffrals }) => {
  const router = useRouter()
  console.log("router", router)
  console.log("reffrals", reffrals)

  useEffect(() => {
    const auth = async () => {
      const session = await getSession()
      if (session) {
        router.push({
          pathname: reffrals
        })
      }
    }

    auth()
  }, [])

  const [isLoading, setisLoading] = useState(false)

  const onFinish = async (values) => {
    setisLoading(true)
    var username = values.username
    var password = values.password

    try {
      const response = await fetch(
        process.env.NEXT_BASE_URL + "/api/auth/check-login",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: username,
            password: password
          })
        }
      )
      const json = await response.json()
      if (json.code == "200") {
        toast.success(json.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored"
        })

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

  const onFinishFailed = () => {
    // console.log("Failed:", errorInfo);
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
              <div className="col col-12 col-md-6 d-sm-none d-md-block">
                <Image
                  src="/static/img/Home/sinup-img.jpg"
                  alt="Stemnovate Limited"
                  width={955}
                  height={1080}
                 //   style={{ width: "100%" }}
                />
              </div>
              <div className="p-4 col-12 col-md-6 card">
                <div className="ps-form--review m-5">
                  <h2 className="ps-form__title">Sign in</h2>

                  <Form
                    layout="vertical"
                    size={"large"}
                    id="CollectedForms-5456750"
                    className="login-form"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Form.Item
                      label="Email"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!"
                        }
                      ]}
                    >
                      <Input
                        prefix={
                          <AiOutlineUser className="site-form-item-icon" />
                        }
                      />
                    </Form.Item>

                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!"
                        }
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

                    <Form.Item>
                      <Form.Item
                        name="remember"
                        valuePropName="checked"
                        noStyle
                      >
                        <Checkbox>Remember me</Checkbox>
                      </Form.Item>
                      <span className="float-right">
                        <Link href={"/auth/ForgotPassword"}>
                          <div className="login-form-forgot text-primary link-hover-thumb-shape">
                            Forgot password ?
                          </div>
                        </Link>
                      </span>
                    </Form.Item>
                    <Form.Item className="mt-5">
                      {isLoading ? (
                        <Button
                          type="danger"
                          htmlType="submit"
                          size={"large"}
                          block
                          loading
                        >
                          Submit
                        </Button>
                      ) : (
                        <Button
                          type="danger"
                          htmlType="submit"
                          size={"large"}
                          block
                        >
                          Submit
                        </Button>
                      )}
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </div>
          </div>
          <div className="ps-page__header"></div>
        </div>
      </div>
    </Container>
  )
}
export async function getServerSideProps(context) {
  var reffrals = context.req.headers.referer
  return { props: { reffrals } }
}
export default UserLogin
