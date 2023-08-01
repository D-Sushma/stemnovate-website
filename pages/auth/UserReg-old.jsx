import React, { useState } from "react"
import Container from "~/components/layouts/Container"
import { Form, Input, Button, Modal, Checkbox, Tooltip } from "antd"
import {
  AiOutlineLock,
  AiOutlineUser,
  AiOutlineMail,
} from "react-icons/ai"
import { ToastContainer, toast } from "react-toastify"
import { Row, Col, Select } from "antd"
const { Option } = Select
import { signIn } from "next-auth/react"
import Countries from "../../public/static/data/AllCountries.json"
import { encode } from "hex-encode-decode"
import Link from "next/link"
import Image from "~/components/elements/Image"

const UserReg = ({ reffrals }) => {
 const [isModalVisible, setIsModalVisible] = useState(false)

  const [Checktnc, setChecktnc] = useState(false)

  const [isLoading, setisLoading] = useState(false)

  function onChange(value) {
    console.log(`selected ${value}`)
  }

  function onSearch(val) {
    console.log("search:", val)
  }

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const CheckPassword = (p) => {
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

  const SendEmail = async (name, email) => {
    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    var raw = JSON.stringify({
      name: name,
      email: email
    })

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    }

    await fetch(
      process.env.NEXT_BASE_URL + "/api/Email/welcomeEmail",
      requestOptions
    )
      .then((response) => response.json())
      .then(async (result) => {
        console.log(result)
        if (result.msg == "success") {
          sendVerifyLink(name, email)
        }
      })
      .catch((error) => console.log("error", error))
  }

  const sendVerifyLink = async (name, myPlaintextPassword) => {
    const EncodedText = encode(myPlaintextPassword)
    
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

    await fetch(
      process.env.NEXT_BASE_URL + "/api/Email/verifyEmail",
      requestOptions
    )
      .then((response) => response.json())
      .then(async (result) => {
        console.log(result)

        if ((result.msg = "success")) {
          toast.success("Verification email send successfully", {
            position: "top-right",
            autoClose: 15000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
            // theme: "colored",
          })
        } else {
          toast.danger("something went to wrong", {
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
      .catch((error) => console.log("error", error))
  }

  const onFinish = async (values) => {
    const username = values.Email
    const password = values.amex
    const fullname = values.First
    const userFullName = values.First + " " + values.last
    setisLoading(true)

    try {
      const response = await fetch(
        process.env.NEXT_BASE_URL + "/api/auth/register-user",
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
        await SendEmail(userFullName, username)
        const res = await signIn("credentials", {
          username,
          password,
          callbackUrl: reffrals
        })
        setisLoading(false)
      } else {
        toast.info(json.message, {
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
      toast.error("Something Went to Wrong...", {
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
      <ToastContainer />
      <div className="ps-page ps-page--inner ">
        <div className="container">
          <div className="ps-page__header"></div>
          <div className="ps-page__content ps-account">
            <div className="row">
              <div className="col col-12 col-md-6 d-sm-none d-md-block">
                <Image
                  src="/static/img/Home/sinup-img.jpg"
                  alt="Stemnovate Limited"
                  width={1000}
                  height={1120}
                  //   style={{ width: "100%" }}
                />
              </div>
              <div className="p-4 col-12 col-md-6 card">
                <div className="ps-form--review m-5">
                  <h2 className="ps-form__title">Sign up</h2>
                  <Form
                    layout="vertical"
                    size={"large"}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Row>
                      <Col md="12" lg={12} sm={24}>
                        <Form.Item
                          name="First"
                          wrapperCol={{
                            span: 23
                          }}
                          label="First Name"
                          rules={[
                            {
                              required: true,
                              message: "Please input your First Name!"
                            }
                          ]}
                        >
                          <Input
                            prefix={
                              <AiOutlineUser className="site-form-item-icon" />
                            }
                            placeholder="First Name"
                          />
                        </Form.Item>
                      </Col>
                      <Col md="12" lg={12} sm={24}>
                        <Form.Item
                          wrapperCol={{
                            span: 23
                          }}
                          name="last"
                          rules={[
                            {
                              required: true,
                              message: "Please input your Last Name!"
                            }
                          ]}
                          label="Last Name"
                        >
                          <Input
                            prefix={
                              <AiOutlineUser className="site-form-item-icon" />
                            }
                            placeholder="Last Name"
                          />
                        </Form.Item>
                      </Col>
                      <Col md="12" lg={12} sm={24}>
                        <Form.Item
                          wrapperCol={{
                            span: 23
                          }}
                          name="Email"
                          rules={[
                            {
                              type: "email",
                              message: "The input is not valid E-mail!"
                            },
                            {
                              required: true,
                              message: "Please input your Email!"
                            }
                          ]}
                          label="Email"
                        >
                          <Input
                            prefix={
                              <AiOutlineMail className="site-form-item-icon" />
                            }
                            placeholder="Email"
                          />
                        </Form.Item>
                      </Col>
                      <Col md="12" lg={12} sm={24}>
                        <Form.Item
                          wrapperCol={{
                            span: 23
                          }}
                          rules={[
                            {
                              required: true,
                              message: "Please Select your Country!"
                            }
                          ]}
                          name="Country"
                          label="Country"
                        >
                          <Select
                            showSearch
                            placeholder="Select a Country"
                            optionFilterProp="children"
                            onChange={onChange}
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                              option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            {Countries.map((data, key) => (
                              <Option key={key} value={data.name}>
                                {data.name}
                              </Option>
                            ))}
                          </Select>
                        </Form.Item>
                      </Col>

                      <Col md="12" lg={12} sm={24}>
                        <Form.Item
                          wrapperCol={{
                            span: 23
                          }}
                          label="Password&nbsp;&nbsp;"
                          name="password"
                          tooltip={
                            <>
                              <div>
                                1. password must be at least 8 characters{" "}
                              </div>
                              <div>
                                2. password must contain at least one lower case
                                letter{" "}
                              </div>
                              <div>
                                3. password must contain at least one upper case
                                letter{" "}
                              </div>
                              <div>
                                4. password must contain at least special char
                                from -[ ! @ # $ % ^ & * _ ]
                              </div>
                              <div>
                                5. password must contain at least one digit
                              </div>
                            </>
                          }
                          rules={[
                            {
                              required: true,
                              message: "Please confirm your password!"
                            },
                            { validator: CheckPassword }
                          ]}
                        >
                          <Input.Password
                            prefix={
                              <Tooltip
                                placement="topLeft"
                                overlayInnerStyle={{ whiteSpace: "pre-wrap" }}
                                title={`1. password must be at least 8 characters 
2. password must contain at least one lower case letter 
3. password must contain at least one upper case letter 
4. password must contain at least special char from -[ ! @ # $ % ^ & * _ ]
5. password must contain at least one digit`}
                              >
                                <AiOutlineLock className="site-form-item-icon" />{" "}
                              </Tooltip>
                            }
                            type="password"
                            placeholder="Password"
                          />
                        </Form.Item>
                      </Col>
                      <Col md="12" lg={12} sm={24}>
                        <Form.Item
                          wrapperCol={{
                            span: 23
                          }}
                          name="amex"
                          label="Confirm Password"
                          dependencies={["password"]}
                          hasFeedback
                          rules={[
                            {
                              required: true,
                              message: "Please confirm your password!"
                            },
                            ({ getFieldValue }) => ({
                              validator(_, value) {
                                if (
                                  !value ||
                                  getFieldValue("password") === value
                                ) {
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
                            placeholder="Password"
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Modal
                      title="Terms & Conditions of Stemnovate."
                      visible={isModalVisible}
                      onOk={handleOk}
                      onCancel={handleCancel}
                      width={1000}
                    >
                      <>
                        <div
                          className="container"
                          style={{
                            boxSizing: "border-box",
                            WebkitFontSmoothing: "antialiased",
                            padding: "0px 20px",
                            margin: "0px auto",
                            maxWidth: "1105px"
                          }}
                        >
                          <p
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                              margin: "0px 0px 15px",
                              fontSize: "16px",
                              fontWeight: 300,
                              color: "rgb(51, 51, 51)",
                              lineHeight: "28px"
                            }}
                          >
                            This website, https://www.stemnovate.co.uk (the “
                            <strong
                              style={{
                                boxSizing: "border-box",
                                WebkitFontSmoothing: "antialiased",
                                fontWeight: 400
                              }}
                            >
                              Website
                            </strong>
                            “), is operated by Stemnovate Limited (“
                            <strong
                              style={{
                                boxSizing: "border-box",
                                WebkitFontSmoothing: "antialiased",
                                fontWeight: 400
                              }}
                            >
                              we
                            </strong>
                            ” or “
                            <strong
                              style={{
                                boxSizing: "border-box",
                                WebkitFontSmoothing: "antialiased",
                                fontWeight: 400
                              }}
                            >
                              us
                            </strong>
                            “) on behalf of itself. Access is provided only in
                            accordance with these Website Terms and Conditions.
                          </p>
                          <ol
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                              margin: "0px 0px 1.41575em 3em",
                              padding: "0px",
                              listStyle: "decimal"
                            }}
                          >
                            <li
                              style={{
                                boxSizing: "border-box",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            >
                              <strong
                                style={{
                                  boxSizing: "border-box",
                                  WebkitFontSmoothing: "antialiased",
                                  fontWeight: 600
                                }}
                              >
                                Use of our Website
                              </strong>
                            </li>
                          </ol>
                          <p
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                              margin: "0px 0px 15px",
                              fontSize: "16px",
                              fontWeight: 300,
                              color: "rgb(51, 51, 51)",
                              lineHeight: "28px"
                            }}
                          >
                            By using our Website, you confirm that you accept
                            these terms of use and that you agree to comply with
                            them. If you do not agree to these terms, you must
                            not use our Website. We recommend that you print a
                            copy of these terms for future reference.
                          </p>
                          <ol
                            start={2}
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                              margin: "0px 0px 1.41575em 3em",
                              padding: "0px",
                              listStyle: "decimal"
                            }}
                          >
                            <li
                              style={{
                                boxSizing: "border-box",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            >
                              <strong
                                style={{
                                  boxSizing: "border-box",
                                  WebkitFontSmoothing: "antialiased",
                                  fontWeight: 600
                                }}
                              >
                                Other terms that may apply to you
                              </strong>
                            </li>
                          </ol>
                          <p
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                              margin: "0px 0px 15px",
                              fontSize: "16px",
                              fontWeight: 300,
                              color: "rgb(51, 51, 51)",
                              lineHeight: "28px"
                            }}
                          >
                            These terms of use refer to the following additional
                            terms, which also apply to your use of our Website:
                          </p>
                          <ol
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                              margin: "0px 0px 1.41575em 3em",
                              padding: "0px",
                              listStyle: "decimal"
                            }}
                          >
                            <li
                              style={{
                                boxSizing: "border-box",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            >
                             Our 
                              <Link href="https://stemnovate.co.uk/privacy-policy/" >
                                <span >
                                <strong
                                  style={{
                                    boxSizing: "border-box",
                                    WebkitFontSmoothing: "antialiased",
                                    fontWeight: 600,
                                    backgroundColor: "transparent",
                                    textDecoration: "none",
                                    color: "rgb(61, 149, 165)",
                                    cursor:"pointer"
                                  }}
                                >
                                  Privacy Policy
                                </strong>
                                ,
                                </span>
                              </Link>{" "}
                              which sets out the terms on which we process any
                              personal data we collect from you, or that you
                              provide to us. By using our Website, you consent
                              to such processing and you warrant that all data
                              provided by you is accurate.
                            </li>
                            <li
                              style={{
                                boxSizing: "border-box",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            >
                              Our 
                              <Link href="https://stemnovate.co.uk/cookies-policy/" >
                                <span>
                                <strong
                                  style={{
                                    boxSizing: "border-box",
                                    WebkitFontSmoothing: "antialiased",
                                    fontWeight: 600,
                                    backgroundColor: "transparent",
                                  textDecoration: "none",
                                  color: "rgb(61, 149, 165)",
                                  cursor:"pointer"
                                  }}
                                >
                                  Cookie Policy
                                </strong>
                                ,
                                </span>
                              </Link>{" "}
                              also sets out information about the cookies on our
                              Website.
                            </li>
                            <li
                              style={{
                                boxSizing: "border-box",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            >
                              <strong
                                style={{
                                  boxSizing: "border-box",
                                  WebkitFontSmoothing: "antialiased",
                                  fontWeight: 600
                                }}
                              >
                                Copyright Notices.
                              </strong>
                            </li>
                          </ol>
                          <p
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                              margin: "0px 0px 15px",
                              fontSize: "16px",
                              fontWeight: 300,
                              color: "rgb(51, 51, 51)",
                              lineHeight: "28px"
                            }}
                          >
                            Copyright in works contained in the Website,
                            including but not limited to all software, design,
                            text, images, sound recordings, animations and video
                            sequences, are owned or licensed, except as
                            otherwise expressly stated, by us. You may access
                            the Website for your own use of the facilities
                            offered. You may not otherwise copy, transmit,
                            display, perform, distribute (for compensation or
                            otherwise), license, alter, store or otherwise use
                            the Website or any of its content. You may, however,
                            print off copies and may download extracts of any
                            page from the Website for your personal reference.
                            You must not modify the paper or digital copies of
                            any Website content you have printed or downloaded
                            in any way, and you must not use any images, sound
                            recordings, animations and video sequences
                            separately from any accompanying text. At no point
                            are you permitted to use any Website content for
                            commercial purposes without our prior written
                            consent.
                          </p>
                          <ol
                            start={4}
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                              margin: "0px 0px 1.41575em 3em",
                              padding: "0px",
                              listStyle: "decimal"
                            }}
                          >
                            <li
                              style={{
                                boxSizing: "border-box",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            >
                              <strong
                                style={{
                                  boxSizing: "border-box",
                                  WebkitFontSmoothing: "antialiased",
                                  fontWeight: 600
                                }}
                              >
                                Printing content.
                              </strong>
                            </li>
                          </ol>
                          <p
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                              margin: "0px 0px 15px",
                              fontSize: "16px",
                              fontWeight: 300,
                              color: "rgb(51, 51, 51)",
                              lineHeight: "28px"
                            }}
                          >
                            If you print off, copy or download any part of the
                            Website in breach of these Website Terms and
                            Conditions, your right to use the Website will cease
                            immediately and you must, at our option, return or
                            destroy any copies of the Website you have made.
                          </p>
                          <ol
                            start={5}
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                              margin: "0px 0px 1.41575em 3em",
                              padding: "0px",
                              listStyle: "decimal"
                            }}
                          >
                            <li
                              style={{
                                boxSizing: "border-box",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            >
                              <strong
                                style={{
                                  boxSizing: "border-box",
                                  WebkitFontSmoothing: "antialiased",
                                  fontWeight: 600
                                }}
                              >
                                Linking to this Website.
                              </strong>
                            </li>
                          </ol>
                          <p
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                              margin: "0px 0px 15px",
                              fontSize: "16px",
                              fontWeight: 300,
                              color: "rgb(51, 51, 51)",
                              lineHeight: "28px"
                            }}
                          >
                            Linking to the Website (whether to the home-page or
                            otherwise and including framing) is permitted only
                            with our prior written consent.
                          </p>
                          <ol
                            start={6}
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                              margin: "0px 0px 1.41575em 3em",
                              padding: "0px",
                              listStyle: "decimal"
                            }}
                          >
                            <li
                              style={{
                                boxSizing: "border-box",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            >
                              <strong
                                style={{
                                  boxSizing: "border-box",
                                  WebkitFontSmoothing: "antialiased",
                                  fontWeight: 600
                                }}
                              >
                                Web Content and Materials.
                              </strong>
                            </li>
                          </ol>
                          <p
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                              margin: "0px 0px 15px",
                              fontSize: "16px",
                              fontWeight: 300,
                              color: "rgb(51, 51, 51)",
                              lineHeight: "28px"
                            }}
                          >
                            The information, materials and services contained in
                            the Website are subject to change from time to time
                            without notice. Not all products and services are
                            available in all geographic areas. Your eligibility
                            for particular products and services is subject to
                            our final determination and acceptance. We may
                            discontinue or make changes to the information,
                            products or services described herein at any time.
                            Any dated information is published as of its date
                            only, and we do not undertake any obligation or
                            responsibility to update or amend any such
                            information. Furthermore, by offering information,
                            products or services via the Website, we make no
                            solicitation to any person to use such information,
                            products or services in jurisdictions where the
                            provision of such information, products or services
                            is prohibited by law.
                          </p>
                          <ol
                            start={7}
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                              margin: "0px 0px 1.41575em 3em",
                              padding: "0px",
                              listStyle: "decimal"
                            }}
                          >
                            <li
                              style={{
                                boxSizing: "border-box",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            >
                              <strong
                                style={{
                                  boxSizing: "border-box",
                                  WebkitFontSmoothing: "antialiased",
                                  fontWeight: 600
                                }}
                              >
                                Links to Other Sites.
                              </strong>
                            </li>
                          </ol>
                          <p
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                              margin: "0px 0px 15px",
                              fontSize: "16px",
                              fontWeight: 300,
                              color: "rgb(51, 51, 51)",
                              lineHeight: "28px"
                            }}
                          >
                            Links to third-party websites are provided solely as
                            pointers to information on topics or services that
                            may be useful to users of the Website, and we have
                            no control over the content on such other websites.
                            Links to other sites do not imply any responsibility
                            for the opinions, ideas, products, information or
                            services offered on such sites, or any
                            representation regarding the content on such sites.
                            These links are provided to you as a convenience
                            only. You are responsible for complying with the
                            terms of use of those sites. We make no warranties,
                            either express or implied, concerning the content of
                            such sites.
                          </p>
                          <ol
                            start={8}
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                              margin: "0px 0px 1.41575em 3em",
                              padding: "0px",
                              listStyle: "decimal"
                            }}
                          >
                            <li
                              style={{
                                boxSizing: "border-box",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            >
                              <strong
                                style={{
                                  boxSizing: "border-box",
                                  WebkitFontSmoothing: "antialiased",
                                  fontWeight: 600
                                }}
                              >
                                Termination.
                              </strong>
                            </li>
                          </ol>
                          <p
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                              margin: "0px 0px 15px",
                              fontSize: "16px",
                              fontWeight: 300,
                              color: "rgb(51, 51, 51)",
                              lineHeight: "28px"
                            }}
                          >
                            We may terminate your access and use of any part of
                            the Website at any time without notice if you are in
                            breach of any of the terms of these Website Terms
                            and Conditions or for any other reason. We reserve
                            the right to cease operating the Website at any time
                            without notice.
                          </p>
                          <ol
                            start={9}
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                              margin: "0px 0px 1.41575em 3em",
                              padding: "0px",
                              listStyle: "decimal"
                            }}
                          >
                            <li
                              style={{
                                boxSizing: "border-box",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            >
                              <strong
                                style={{
                                  boxSizing: "border-box",
                                  WebkitFontSmoothing: "antialiased",
                                  fontWeight: 600
                                }}
                              >
                                Third-Party Rights.
                              </strong>
                            </li>
                          </ol>
                          <p
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                              margin: "0px 0px 15px",
                              fontSize: "16px",
                              fontWeight: 300,
                              color: "rgb(51, 51, 51)",
                              lineHeight: "28px"
                            }}
                          >
                            When you place an order on Stemnovate, we are
                            entering a contract with you personally. Nothing in
                            these terms will confer any benefit on any third
                            party or any right to enforce these terms.
                          </p>
                          <ol
                            start={10}
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                              margin: "0px 0px 1.41575em 3em",
                              padding: "0px",
                              listStyle: "decimal"
                            }}
                          >
                            <li
                              style={{
                                boxSizing: "border-box",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            >
                              <strong
                                style={{
                                  boxSizing: "border-box",
                                  WebkitFontSmoothing: "antialiased",
                                  fontWeight: 600
                                }}
                              >
                                Which Country’s Laws apply to any disputes?
                              </strong>
                            </li>
                          </ol>
                          <p
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                              margin: "0px 0px 15px",
                              fontSize: "16px",
                              fontWeight: 300,
                              color: "rgb(51, 51, 51)",
                              lineHeight: "28px"
                            }}
                          >
                            If you are a consumer, please note that these
                            Website Terms and Conditions, their subject matter
                            and their formation, are governed by English law.
                            You and we both agree that the courts of England and
                            Wales will have exclusive jurisdiction except that
                            if you are a resident of Northern Ireland you may
                            also bring proceedings in Northern Ireland, and if
                            you are resident of Scotland, you may also bring
                            proceedings in Scotland.
                          </p>
                          <ol
                            start={11}
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                              margin: "0px 0px 1.41575em 3em",
                              padding: "0px",
                              listStyle: "decimal"
                            }}
                          >
                            <li
                              style={{
                                boxSizing: "border-box",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            >
                              <strong
                                style={{
                                  boxSizing: "border-box",
                                  WebkitFontSmoothing: "antialiased",
                                  fontWeight: 600
                                }}
                              >
                                Viruses
                              </strong>
                            </li>
                          </ol>
                          <p
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                              margin: "0px 0px 15px",
                              fontSize: "16px",
                              fontWeight: 300,
                              color: "rgb(51, 51, 51)",
                              lineHeight: "28px"
                            }}
                          >
                            We do not guarantee that our Website will be secure
                            or free from bugs or viruses. You are responsible
                            for configuring your information technology,
                            computer programmes and platform to access our
                            Website. You should use your own virus protection
                            software. You must not misuse our site by knowingly
                            introducing viruses, trojans, worms, logic bombs or
                            other material that is malicious or technologically
                            harmful. You must not attempt to gain unauthorised
                            access to our Website, the server on which our
                            Website is stored or any server, computer or
                            database connected to our Website. You must not
                            attack our Website via a denial-of-service attack or
                            a distributed denial-of-service attack. By breaching
                            this provision, you would commit a criminal offence
                            under the Computer Misuse Act 1990. We will report
                            any such breach to the relevant law enforcement
                            authorities and we will co-operate with those
                            authorities by disclosing your identity to them. In
                            the event of such a breach, your right to use our
                            Website will cease immediately.
                          </p>
                          <ol
                            start={12}
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                              margin: "0px 0px 1.41575em 3em",
                              padding: "0px",
                              listStyle: "decimal"
                            }}
                          >
                            <li
                              style={{
                                boxSizing: "border-box",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            >
                              <strong
                                style={{
                                  boxSizing: "border-box",
                                  WebkitFontSmoothing: "antialiased",
                                  fontWeight: 600
                                }}
                              >
                                Do not rely on the information on this site
                              </strong>
                            </li>
                          </ol>
                          <p
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                              margin: "0px 0px 15px",
                              fontSize: "16px",
                              fontWeight: 300,
                              color: "rgb(51, 51, 51)",
                              lineHeight: "28px"
                            }}
                          >
                            The content on our Website is provided for general
                            information only. It is not intended to amount to
                            advice on which you should rely. You must obtain
                            professional or specialist advice before taking, or
                            refraining from, any action on the basis of the
                            content on our Website. Although we make reasonable
                            efforts to update the information on our Website, we
                            make no representations, warranties or guarantees,
                            whether express or implied, that the content on our
                            Website is accurate, complete or up to date.
                          </p>
                          <ol
                            start={13}
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                              margin: "0px 0px 1.41575em 3em",
                              padding: "0px",
                              listStyle: "decimal"
                            }}
                          >
                            <li
                              style={{
                                boxSizing: "border-box",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            >
                              <strong
                                style={{
                                  boxSizing: "border-box",
                                  WebkitFontSmoothing: "antialiased",
                                  fontWeight: 600
                                }}
                              >
                                You must keep your account details safe
                              </strong>
                            </li>
                          </ol>
                          <p
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                              margin: "0px 0px 15px",
                              fontSize: "16px",
                              fontWeight: 300,
                              color: "rgb(51, 51, 51)",
                              lineHeight: "28px"
                            }}
                          >
                            If you choose, or you are provided with, a user
                            identification code, password or any other piece of
                            information as part of our security procedures, you
                            must treat such information as confidential. You
                            must not disclose it to any third party. We have the
                            right to disable any user identification code or
                            password, whether chosen by you or allocated by us,
                            at any time, if in our reasonable opinion you have
                            failed to comply with any of the provisions of these
                            terms of use.
                          </p>
                          <ol
                            start={14}
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                              margin: "0px 0px 1.41575em 3em",
                              padding: "0px",
                              listStyle: "decimal"
                            }}
                          >
                            <li
                              style={{
                                boxSizing: "border-box",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            >
                              <strong
                                style={{
                                  boxSizing: "border-box",
                                  WebkitFontSmoothing: "antialiased",
                                  fontWeight: 600
                                }}
                              >
                                We may suspend or withdraw our Website
                              </strong>
                            </li>
                          </ol>
                          <p
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                              margin: "0px 0px 15px",
                              fontSize: "16px",
                              fontWeight: 300,
                              color: "rgb(51, 51, 51)",
                              lineHeight: "28px"
                            }}
                          >
                            Our Website is made available free of charge. We do
                            not guarantee that our Website, or any content on
                            it, will always be available or be uninterrupted. We
                            may suspend or withdraw or restrict the availability
                            of all or any part of our Website for business and
                            operational reasons. We will try to give you
                            reasonable notice of any suspension or withdrawal.
                            You are also responsible for ensuring that all
                            persons who access our Website through your internet
                            connection are aware of these terms of use and other
                            applicable terms and conditions and that they comply
                            with them.
                          </p>
                          <ol
                            start={15}
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                              margin: "0px 0px 1.41575em 3em",
                              padding: "0px",
                              listStyle: "decimal"
                            }}
                          >
                            <li
                              style={{
                                boxSizing: "border-box",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            >
                              <strong
                                style={{
                                  boxSizing: "border-box",
                                  WebkitFontSmoothing: "antialiased",
                                  fontWeight: 600
                                }}
                              >
                                We may make changes to these terms
                              </strong>
                            </li>
                          </ol>
                          <p
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                              margin: "0px 0px 15px",
                              fontSize: "16px",
                              fontWeight: 300,
                              color: "rgb(51, 51, 51)",
                              lineHeight: "28px"
                            }}
                          >
                            We amend these terms from time to time. Every time
                            you wish to use our Website, please check these
                            terms to ensure you understand the terms that apply
                            at that time.
                          </p>
                          <ol
                            start={16}
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                              margin: "0px 0px 1.41575em 3em",
                              padding: "0px",
                              listStyle: "decimal"
                            }}
                          >
                            <li
                              style={{
                                boxSizing: "border-box",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            >
                              <strong
                                style={{
                                  boxSizing: "border-box",
                                  WebkitFontSmoothing: "antialiased",
                                  fontWeight: 600
                                }}
                              >
                                We may make changes to our Website
                              </strong>
                            </li>
                          </ol>
                          <p
                            style={{
                              boxSizing: "border-box",
                              WebkitFontSmoothing: "antialiased",
                              margin: "0px 0px 15px",
                              fontSize: "16px",
                              fontWeight: 300,
                              color: "rgb(51, 51, 51)",
                              lineHeight: "28px"
                            }}
                          >
                            We may update and change our Website from time to
                            time to reflect changes to our products, our users’
                            needs and our business priorities.
                          </p>
                        </div>
                        <style
                          dangerouslySetInnerHTML={{
                            __html: `
html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  font-family: sans-serif;
  text-size-adjust: 100%;
  margin-top: 32px;
}

body {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  margin: 0px;
  overflow-wrap: break-word;
  line-height: 1.618;
  text-rendering: optimizelegibility;
  font-weight: 400;
  font-family: Montserrat, sans-serif;
  background-color: rgb(255, 255, 255);
  overflow-x: hidden;
  color: rgb(109, 109, 109);
}
`
                          }}
                        />
                      </>
                    </Modal>

                    <Form.Item
                      name="agreement"
                      valuePropName="checked"
                      onClick={(e) => {
                        setChecktnc(e.target.checked)
                      }}
                      rules={[
                        {
                          validator: (_, value) =>
                            value
                              ? Promise.resolve()
                              : Promise.reject(
                                  new Error("Should accept agreement")
                                )
                        }
                      ]}
                    >
                      <Checkbox>
                        I agree to the{" "}
                        <u className=" text-info">
                          <span className=" text-info" onClick={showModal}>
                            Terms & Conditions
                          </span>
                        </u>{" "}
                        of Stemnovate.
                      </Checkbox>
                    </Form.Item>
                    <Form.Item name="promotions" valuePropName="checked">
                      <Checkbox>
                        Email me relevant offers and promotions from Stemnovate.
                      </Checkbox>
                    </Form.Item>

                    <Form.Item className="mt-5">
                      {isLoading ? (
                        <Button
                          type="danger"
                          htmlType="submit"
                          disabled={!Checktnc}
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
                          disabled={!Checktnc}
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

export default UserReg
