import React from "react"
import { Form, Input, Row, Col } from "antd"

import { toast } from "react-toastify"
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai"

const SendEmail = async (name, email, phone, message) => {
  var myHeaders = new Headers()
  myHeaders.append("Content-Type", "application/json")

  var raw = JSON.stringify({
    name: name,
    email: email,
    phone: phone,
    message: message
  })

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw
  }

  fetch(process.env.NEXT_BASE_URL + "/api/Email/contactUsEmail", requestOptions)
    .then((response) => response.text())
    .then(async (result) => {
      console.log(result)
    })
    .catch((error) => console.log("error", error))
}

const onFinish = async (values) => {
  console.log("values:", values)
  const username = values.Email
  const phone = values.Phone
  const fullname = values.First
  const message = values.message

  try {
    SendEmail(fullname, username, phone, message)
  } catch (error) {
    console.log(error)
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
  }
}

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo)
}

const FormContact = () => {
  return (
    <div className="ps-form--contact">
      <h2 className="ps-form__title">
        Fill up the form if you have any question
      </h2>
      <Form
        layout="vertical"
        size={"large"}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row>
          <Col md="4" lg={12} sm={24}>
            <Form.Item
              name="First"
              wrapperCol={{
                span: 23
              }}
              label="First Name"
              rules={[
                {
                  required: true,
                  message: "Please input your username!"
                }
              ]}
            >
              <Input
                prefix={
                  <AiOutlineUser className="form-control ps-form__input" />
                }
                placeholder="First Name"
                autoComplete="off"
              />
            </Form.Item>
          </Col>
          <Col md="4" lg={12} sm={24}>
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
                  <AiOutlineMail className="form-control ps-form__input" />
                }
                autoComplete="off"
                placeholder="Email"
              />
            </Form.Item>
          </Col>
          <Col md="4" lg={12} sm={24}>
            <Form.Item
              name="Phone"
              wrapperCol={{
                span: 23
              }}
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: "Please input your phone!"
                }
              ]}
            >
              <Input
                prefix={
                  <AiOutlineUser className="form-control ps-form__input" />
                }
                placeholder="Phone"
                autoComplete="off"
              />
            </Form.Item>
          </Col>
        </Row>
        <div className="row">
          <div className="col-12">
            <div className="ps-form__group">
              <textarea
                className="form-control ps-form__textarea"
                rows="5"
                name="message"
                placeholder="Message"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="ps-form__submit">
          <button
            className="ps-btn ps-btn--warning"
            name="submit"
            type="submit"
          >
            Send message
          </button>
        </div>
      </Form>
    </div>
  )
}

export default FormContact
