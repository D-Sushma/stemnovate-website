import React, { useState, useEffect } from "react"
import { Steps, Col, Row, Form, Input, Button, Select, Checkbox } from "antd"
import {
  AiOutlineBank,
  AiOutlineGlobal,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlinePhone
} from "react-icons/ai"
import { BsSignpost2, BsSignpost, BsSignpostSplit } from "react-icons/bs"
import { HiOutlineReceiptTax } from "react-icons/hi"
import { GrMap } from "react-icons/gr"
import Countries from "../../public/static/data/AllCountries.json"
import { getSession } from "next-auth/react"
import { baseUrl } from "~/repositories/Repository"
import { ToastContainer, toast } from "react-toastify"
import { useRouter } from "next/router"
import dynamic from "next/dynamic"

const Container = dynamic(() => import("~/components/layouts/Container"), {
  loading: () => <p>Loading...</p>
})
const BreadCrumb = dynamic(() => import("~/components/elements/BreadCrumb"), {
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
    text: "My Application"
  }
]
const { Step } = Steps
const { Option } = Select
const steps = [
  {
    title: "Organization",
    content: "First-content"
  },
  {
    title: "Shipping/Billing Detail",
    content: "Second-content"
  }
]

const MyApplication = ({ UserData }) => {
  const [current, setCurrent] = React.useState(0)
  const [BSameAsOrg, setBSameAsOrg] = React.useState(false)
  const [SSameAsOrg, setSSameAsOrg] = React.useState(false)
  const [isLoading, setisLoading] = React.useState(false)
  const [Scope, setScope] = React.useState("Research")
  const [Errors, setErrors] = useState("")
  const [form] = Form.useForm()
  const router = useRouter()

  React.useEffect(() => {
    setisLoading(false)
  }, [UserData])

  useEffect(() => {
    const setFields = async () => {
      console.log(UserData, "userdata")
      console.log(
        UserData.result.customer_application_details,
        "application details"
      )
      if (UserData.result.customer_application_details !== null) {
        form.setFieldsValue(UserData.result.customer_application_details)
      }

      if (UserData.result.customer_address_details !== null) {
        form.setFieldsValue(UserData.result.customer_address_details)
        setBSameAsOrg(UserData.result.customer_address_details.B_SameAsOrg)

        setSSameAsOrg(UserData.result.customer_address_details.S_SameAsOrg)
      }

      console.log(UserData.result.customer_address_details == null, BSameAsOrg)
      if (UserData.result.customer_address_details == null || BSameAsOrg) {
        form.setFieldsValue({ B_First: UserData.result.firstname })
        form.setFieldsValue({ B_last: UserData.result.lastname })
        form.setFieldsValue({ B_Email: UserData.result.email })

        if (UserData.result.customer_application_details !== null) {
          form.setFieldsValue({
            B_Country: UserData.result.customer_application_details.Country
          })
          form.setFieldsValue({
            B_County: UserData.result.customer_application_details.County_States
          })
          form.setFieldsValue({
            B_Town: UserData.result.customer_application_details.Town_City
          })
          form.setFieldsValue({
            B_ZIP: UserData.result.customer_application_details.Postcode_ZIP
          })
          form.setFieldsValue({
            B_Address1:
              UserData.result.customer_application_details.Address_line1
          })
          form.setFieldsValue({
            B_Address2:
              UserData.result.customer_application_details.Address_line2
          })
        }
      }

      if (UserData.result.customer_address_details == null || SSameAsOrg) {
        form.setFieldsValue({ S_First: UserData.result.firstname })
        form.setFieldsValue({ S_last: UserData.result.lastname })
        form.setFieldsValue({ S_Email: UserData.result.email })

        if (UserData.result.customer_application_details !== null) {
          form.setFieldsValue({
            S_Country: UserData.result.customer_application_details.Country
          })
          form.setFieldsValue({
            S_County: UserData.result.customer_application_details.County_States
          })
          form.setFieldsValue({
            S_Town: UserData.result.customer_application_details.Town_City
          })
          form.setFieldsValue({
            S_ZIP: UserData.result.customer_application_details.Postcode_ZIP
          })
          form.setFieldsValue({
            S_Address1:
              UserData.result.customer_application_details.Address_line1
          })
          form.setFieldsValue({
            S_Address2:
              UserData.result.customer_application_details.Address_line2
          })
        }
      }
    }
    setFields()
  }, [])

  const next = () => {
    setCurrent(current + 1)
  }

  const prev = () => {
    setCurrent(current - 1)
  }

  const onFinish = async (values) => {
    if (current === 0) {
      setisLoading(true)

      var raw = values

      const response = await fetch(
        process.env.NEXT_BASE_URL + "/api/user/UpdateORGDetails",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(raw)
        }
      )
      const json = await response.json()

      console.log(json)

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

        setisLoading(false)
        next()
        gotoTop()
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
    }

    if (current === 1) {
      setisLoading(true)

      var raw = values

      const response = await fetch(
        process.env.NEXT_BASE_URL + "/api/user/UpdateUserAddress",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(raw)
        }
      )
      const json = await response.json()

      console.log(json)

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

        setisLoading(false)
        router.push("/user/dashboard")
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
        gotoTop()
      }

      console.log("Shhiping")
    }
  }

  const onFinishFailed = () => {
    if (current === 0) {
      console.log("Orgination")
    }

    if (current === 1) {
      console.log("Shhiping")
    }
    setErrors("error")
  }

  function onChange(value) {
    console.log(`selected ${value}`)
  }

  function onSearch(val) {
    console.log("search:", val)
  }

  const gotoTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }
  return (
    <Container title="My Application">
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
        <div className="ps-page__header pb-0">
          <div className="container">
            <BreadCrumb breacrumb={breadcrumb} />
          </div>
        </div>
        <div className="ps-page__content">
          <div className="ps-about m-5 p-3">
            <Row>
              <Col md={24} sm={24}>
                <Steps
                  type="navigation"
                  size="default"
                  onChange={(cur) => {
                    setCurrent(cur)
                  }}
                  current={current}
                  status={Errors}
                >
                  {steps.map((item) => (
                    <Step key={item.title} title={item.title} />
                  ))}
                </Steps>
                <Form
                  layout="vertical"
                  size={"large"}
                  initialvalues={{
                    remember: false
                  }}
                  form={form}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <div className="steps-content m-5">
                    {current == 0 ? (
                      <>
                        <h3>Organization</h3>
                        <Row>
                          <Col md="12" lg={12} sm={24}>
                            <Form.Item
                              name="Scope"
                              wrapperCol={{
                                span: 23
                              }}
                              label="Scope"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input Scope!"
                                }
                              ]}
                            >
                              <Select
                                onChange={(val) => {
                                  setScope(val)
                                }}
                                allowClear
                              >
                                <Select.Option value="Research">
                                  Research
                                </Select.Option>
                                <Select.Option value="Teaching">
                                  Teaching
                                </Select.Option>
                                <Select.Option value="Production">
                                  Production
                                </Select.Option>
                                <Select.Option value="Manufacturing">
                                  Manufacturing
                                </Select.Option>
                                <Select.Option value="Clinical">
                                  Clinical
                                </Select.Option>
                                <Select.Option value="Diagnostic">
                                  Diagnostic
                                </Select.Option>
                              </Select>
                            </Form.Item>
                          </Col>
                          <Col md="12" lg={12} sm={24}>
                            <Form.Item
                              name="Compliance"
                              wrapperCol={{
                                span: 23
                              }}
                              label="Compliance"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input Compliance!"
                                }
                              ]}
                            >
                              <Select allowClear>
                                <Select.Option value="Biosafety -1">
                                  Biosafety -1
                                </Select.Option>
                                <Select.Option value="Biosafety-2">
                                  Biosafety-2
                                </Select.Option>
                                <Select.Option value="Biosafety 3">
                                  Biosafety 3
                                </Select.Option>
                                <Select.Option value="Other">
                                  Other
                                </Select.Option>
                              </Select>
                            </Form.Item>
                          </Col>
                          <Col md="12" lg={12} sm={24}>
                            <Form.Item
                              wrapperCol={{
                                span: 23
                              }}
                              name="Contact_Email"
                              rules={[
                                {
                                  type: "email",
                                  message: "The input is not valid E-mail!"
                                },
                                {
                                  required: true,
                                  message: "Please input Contact Email!"
                                }
                              ]}
                              label="Contact Email"
                            >
                              <Input
                                prefix={
                                  <AiOutlineMail className="site-form-item-icon" />
                                }
                                autoComplete="off"
                                placeholder="Contact Email"
                              />
                            </Form.Item>
                          </Col>
                          {Scope == "Research" || Scope == "Teaching" ? (
                            <Col md="12" lg={12} sm={24}>
                              <Form.Item
                                name="Organization_type"
                                wrapperCol={{
                                  span: 23
                                }}
                                label="University"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please input University!"
                                  }
                                ]}
                              >
                                <Select allowClear>
                                  <Select.Option value="Research organisation">
                                    Research organisation
                                  </Select.Option>
                                </Select>
                              </Form.Item>
                            </Col>
                          ) : Scope == "Production" ||
                            Scope == "Manufacturing" ? (
                            <Col md="12" lg={12} sm={24}>
                              <Form.Item
                                name="Organization_type"
                                wrapperCol={{
                                  span: 23
                                }}
                                label="Industrial"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please input Industrial!"
                                  }
                                ]}
                              >
                                <Select allowClear>
                                  <Select.Option value="SME">SME</Select.Option>
                                  <Select.Option value="Pharmaceutical">
                                    Pharmaceutical
                                  </Select.Option>
                                  <Select.Option value="Biotech/life sciences">
                                    Biotech/life sciences
                                  </Select.Option>
                                  <Select.Option value="Contract Research Organisation">
                                    Contract Research Organisation
                                  </Select.Option>
                                </Select>
                              </Form.Item>
                            </Col>
                          ) : Scope == "Clinical" || Scope == "Diagnostic" ? (
                            <Col md="12" lg={12} sm={24}>
                              <Form.Item
                                name="Organization_type"
                                wrapperCol={{
                                  span: 23
                                }}
                                label="Clinical"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please input Clinical!"
                                  }
                                ]}
                              >
                                <Select allowClear>
                                  <Select.Option value="Hospital">
                                    Hospital
                                  </Select.Option>
                                  <Select.Option value="Diagnostic lab">
                                    Diagnostic lab
                                  </Select.Option>
                                  <Select.Option value="Environmental">
                                    Environmental
                                  </Select.Option>
                                </Select>
                              </Form.Item>
                            </Col>
                          ) : null}

                          <Col md="12" lg={12} sm={24}>
                            <Form.Item
                              name="Organization_Name"
                              wrapperCol={{
                                span: 23
                              }}
                              label="Organization Name"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input Organization Name!"
                                }
                              ]}
                            >
                              <Input
                                prefix={
                                  <AiOutlineBank className="site-form-item-icon" />
                                }
                                placeholder="Name"
                                autoComplete="off"
                              />
                            </Form.Item>
                          </Col>

                          <Col md="12" lg={12} sm={24}>
                            <Form.Item
                              wrapperCol={{
                                span: 23
                              }}
                              name="Website"
                              label="Website"
                            >
                              <Input
                                prefix={
                                  <AiOutlineGlobal className="site-form-item-icon" />
                                }
                                autoComplete="off"
                                placeholder="Website"
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
                              rules={[
                                {
                                  required: true,
                                  message: "Please input County / States!"
                                }
                              ]}
                              name="County_States"
                              label="County / States"
                            >
                              <Input
                                prefix={
                                  <GrMap className="site-form-item-icon" />
                                }
                                autoComplete="off"
                                placeholder="County / States"
                              />
                            </Form.Item>
                          </Col>

                          <Col md="12" lg={12} sm={24}>
                            <Form.Item
                              wrapperCol={{
                                span: 23
                              }}
                              name="Address_line1"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your Address line 1!"
                                }
                              ]}
                              label="Address line 1"
                            >
                              <Input
                                prefix={
                                  <BsSignpost2 className="site-form-item-icon" />
                                }
                                autoComplete="off"
                                placeholder="Address line 1"
                              />
                            </Form.Item>
                          </Col>
                          <Col md="12" lg={12} sm={24}>
                            <Form.Item
                              wrapperCol={{
                                span: 23
                              }}
                              name="Address_line2"
                              label="Address line 2"
                            >
                              <Input
                                prefix={
                                  <BsSignpostSplit className="site-form-item-icon" />
                                }
                                autoComplete="off"
                                placeholder="Address line 2"
                              />
                            </Form.Item>
                          </Col>
                          <Col md="12" lg={12} sm={24}>
                            <Form.Item
                              wrapperCol={{
                                span: 23
                              }}
                              name="Town_City"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your City!"
                                }
                              ]}
                              label="Town / City"
                            >
                              <Input
                                prefix={
                                  <BsSignpostSplit className="site-form-item-icon" />
                                }
                                autoComplete="off"
                                placeholder="Town / City"
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
                                  message:
                                    "Please input your Address Zip code/Postcode 1!"
                                }
                              ]}
                              name="Postcode_ZIP"
                              label="Postcode / ZIP"
                            >
                              <Input
                                prefix={
                                  <BsSignpost className="site-form-item-icon" />
                                }
                                autoComplete="off"
                                placeholder="Postcode / ZIP"
                              />
                            </Form.Item>
                          </Col>
                          <Col md="12" lg={12} sm={24}>
                            <Form.Item
                              wrapperCol={{
                                span: 23
                              }}
                              name="VAT_number"
                              label="VAT number"
                            >
                              <Input
                                prefix={
                                  <HiOutlineReceiptTax className="site-form-item-icon" />
                                }
                                autoComplete="off"
                                placeholder="VAT number"
                              />
                            </Form.Item>
                          </Col>
                          <Col md="12" lg={12} sm={24}>
                            <Form.Item
                              wrapperCol={{
                                span: 23
                              }}
                              name="VAT_Exemption"
                              label="VAT Exemption"
                            >
                              <Input
                                prefix={
                                  <HiOutlineReceiptTax className="site-form-item-icon" />
                                }
                                autoComplete="off"
                                placeholder="VAT Exemption"
                              />
                            </Form.Item>
                          </Col>
                        </Row>
                      </>
                    ) : current == 1 ? (
                      <>
                        <h3>Billing Detail</h3>
                        <Row>
                          <Col md="12" lg={12} sm={24}>
                            <Form.Item
                              name="B_First"
                              wrapperCol={{
                                span: 23
                              }}
                              label="First Name"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your First name!"
                                }
                              ]}
                            >
                              <Input
                                prefix={
                                  <AiOutlineUser className="site-form-item-icon" />
                                }
                                placeholder="First Name"
                                autoComplete="off"
                              />
                            </Form.Item>
                          </Col>
                          <Col md="12" lg={12} sm={24}>
                            <Form.Item
                              wrapperCol={{
                                span: 23
                              }}
                              name="B_last"
                              label="Last Name"
                            >
                              <Input
                                prefix={
                                  <AiOutlineUser className="site-form-item-icon" />
                                }
                                autoComplete="off"
                                placeholder="Last Name"
                              />
                            </Form.Item>
                          </Col>
                          <Col md="12" lg={12} sm={24}>
                            <Form.Item
                              wrapperCol={{
                                span: 23
                              }}
                              name="B_Email"
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
                                autoComplete="off"
                                placeholder="Email"
                              />
                            </Form.Item>
                          </Col>
                          <Col md="12" lg={12} sm={24}>
                            <Form.Item
                              wrapperCol={{
                                span: 23
                              }}
                              name="B_PhoneNumber"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your Phone Number!"
                                }
                              ]}
                              label="Phone Number"
                            >
                              <Input
                                prefix={
                                  <AiOutlinePhone className="site-form-item-icon" />
                                }
                                autoComplete="off"
                                placeholder="Phone Number"
                              />
                            </Form.Item>
                          </Col>
                          <Col md="24" lg={24} sm={24}>
                            <Form.Item
                              name="B_SameAsOrg"
                              valuePropName="checked"
                            >
                              <Checkbox
                                className="mt-5"
                                value={BSameAsOrg}
                                onClick={(e) => setBSameAsOrg(e.target.checked)}
                              >
                                Same as organisation address
                              </Checkbox>
                            </Form.Item>
                          </Col>
                        </Row>
                        {!BSameAsOrg ? (
                          <Row>
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
                                name="B_Country"
                                label="Country"
                              >
                                <Select
                                  showSearch
                                  placeholder="Select a Country"
                                  optionFilterProp="children"
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
                                rules={[
                                  {
                                    required: true,
                                    message: "Please input County / States!"
                                  }
                                ]}
                                name="B_County"
                                label="County / States"
                              >
                                <Input
                                  prefix={
                                    <GrMap className="site-form-item-icon" />
                                  }
                                  autoComplete="off"
                                  placeholder="County / States"
                                />
                              </Form.Item>
                            </Col>

                            <Col md="12" lg={12} sm={24}>
                              <Form.Item
                                wrapperCol={{
                                  span: 23
                                }}
                                name="B_Address1"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please input your Address line 1!"
                                  }
                                ]}
                                label="Address line 1"
                              >
                                <Input
                                  prefix={
                                    <BsSignpost2 className="site-form-item-icon" />
                                  }
                                  autoComplete="off"
                                  placeholder="Address line 1"
                                />
                              </Form.Item>
                            </Col>
                            <Col md="12" lg={12} sm={24}>
                              <Form.Item
                                wrapperCol={{
                                  span: 23
                                }}
                                name="B_Address2"
                                label="Address line 2"
                              >
                                <Input
                                  prefix={
                                    <BsSignpostSplit className="site-form-item-icon" />
                                  }
                                  autoComplete="off"
                                  placeholder="Address line 2"
                                />
                              </Form.Item>
                            </Col>
                            <Col md="12" lg={12} sm={24}>
                              <Form.Item
                                wrapperCol={{
                                  span: 23
                                }}
                                name="B_Town"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please input your City!"
                                  }
                                ]}
                                label="Town / City"
                              >
                                <Input
                                  prefix={
                                    <BsSignpostSplit className="site-form-item-icon" />
                                  }
                                  autoComplete="off"
                                  placeholder="Town / City"
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
                                    message:
                                      "Please input your Address Zip code/Postcode 1!"
                                  }
                                ]}
                                name="B_ZIP"
                                label="Postcode / ZIP"
                              >
                                <Input
                                  prefix={
                                    <BsSignpost className="site-form-item-icon" />
                                  }
                                  autoComplete="off"
                                  placeholder="Postcode / ZIP"
                                />
                              </Form.Item>
                            </Col>
                          </Row>
                        ) : null}

                        <h3 className="mt-3">Shipping Detail</h3>
                        <Row>
                          <Col md="12" lg={12} sm={24}>
                            <Form.Item
                              name="S_First"
                              wrapperCol={{
                                span: 23
                              }}
                              label="First Name"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your First name!"
                                }
                              ]}
                            >
                              <Input
                                prefix={
                                  <AiOutlineUser className="site-form-item-icon" />
                                }
                                placeholder="First Name"
                                autoComplete="off"
                              />
                            </Form.Item>
                          </Col>
                          <Col md="12" lg={12} sm={24}>
                            <Form.Item
                              wrapperCol={{
                                span: 23
                              }}
                              name="S_last"
                              label="Last Name"
                            >
                              <Input
                                prefix={
                                  <AiOutlineUser className="site-form-item-icon" />
                                }
                                autoComplete="off"
                                placeholder="Last Name"
                              />
                            </Form.Item>
                          </Col>
                          <Col md="12" lg={12} sm={24}>
                            <Form.Item
                              wrapperCol={{
                                span: 23
                              }}
                              name="S_Email"
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
                                autoComplete="off"
                                placeholder="Email"
                              />
                            </Form.Item>
                          </Col>
                          <Col md="12" lg={12} sm={24}>
                            <Form.Item
                              wrapperCol={{
                                span: 23
                              }}
                              name="S_PhoneNumber"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your Phone Number!"
                                }
                              ]}
                              label="Phone Number"
                            >
                              <Input
                                prefix={
                                  <AiOutlinePhone className="site-form-item-icon" />
                                }
                                autoComplete="off"
                                placeholder="Phone Number"
                              />
                            </Form.Item>
                          </Col>
                          <Col md="24" lg={24} sm={24}>
                            <Form.Item
                              name="S_SameAsOrg"
                              valuePropName="checked"
                            >
                              <Checkbox
                                className="mt-5"
                                value={SSameAsOrg}
                                onClick={(e) => setSSameAsOrg(e.target.checked)}
                              >
                                Same as organisation address
                              </Checkbox>
                            </Form.Item>
                          </Col>
                        </Row>
                        {!SSameAsOrg ? (
                          <Row>
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
                                name="S_Country"
                                label="Country"
                              >
                                <Select
                                  showSearch
                                  placeholder="Select a Country"
                                  optionFilterProp="children"
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
                                rules={[
                                  {
                                    required: true,
                                    message: "Please input County / States!"
                                  }
                                ]}
                                name="S_County"
                                label="County / States"
                              >
                                <Input
                                  prefix={
                                    <GrMap className="site-form-item-icon" />
                                  }
                                  autoComplete="off"
                                  placeholder="County / States"
                                />
                              </Form.Item>
                            </Col>

                            <Col md="12" lg={12} sm={24}>
                              <Form.Item
                                wrapperCol={{
                                  span: 23
                                }}
                                name="S_Address1"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please input your Address line 1!"
                                  }
                                ]}
                                label="Address line 1"
                              >
                                <Input
                                  prefix={
                                    <BsSignpost2 className="site-form-item-icon" />
                                  }
                                  autoComplete="off"
                                  placeholder="Address line 1"
                                />
                              </Form.Item>
                            </Col>
                            <Col md="12" lg={12} sm={24}>
                              <Form.Item
                                wrapperCol={{
                                  span: 23
                                }}
                                name="S_Address2"
                                label="Address line 2"
                              >
                                <Input
                                  prefix={
                                    <BsSignpostSplit className="site-form-item-icon" />
                                  }
                                  autoComplete="off"
                                  placeholder="Address line 2"
                                />
                              </Form.Item>
                            </Col>
                            <Col md="12" lg={12} sm={24}>
                              <Form.Item
                                wrapperCol={{
                                  span: 23
                                }}
                                name="S_Town"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please input your City!"
                                  }
                                ]}
                                label="Town / City"
                              >
                                <Input
                                  prefix={
                                    <BsSignpostSplit className="site-form-item-icon" />
                                  }
                                  autoComplete="off"
                                  placeholder="Town / City"
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
                                    message:
                                      "Please input your Address Zip code/Postcode 1!"
                                  }
                                ]}
                                name="S_ZIP"
                                label="Postcode / ZIP"
                              >
                                <Input
                                  prefix={
                                    <BsSignpost className="site-form-item-icon" />
                                  }
                                  autoComplete="off"
                                  placeholder="Postcode / ZIP"
                                />
                              </Form.Item>
                            </Col>
                          </Row>
                        ) : null}
                      </>
                    ) : null}
                  </div>
                  <div className="steps-action">
                    <Row>
                      <Col md={12} sm={24}>
                        {current > 0 && (
                          <Button
                            style={{ margin: "0 8px" }}
                            size={"large"}
                            onClick={() => {
                              prev(), gotoTop()
                            }}
                          >
                            Previous
                          </Button>
                        )}
                      </Col>
                      <Col md={12} sm={24}>
                        {current < steps.length - 1 && (
                          // <Button
                          //     type="primary"
                          //     size={"large"}
                          //     onClick={() => {
                          //         next(), gotoTop();
                          //     }}>
                          //      Submit And Next
                          // </Button>
                          <Form.Item>
                            {isLoading ? (
                              <Button
                                type="primary"
                                htmlType="submit"
                                size={"large"}
                                loading
                              >
                                Submit
                              </Button>
                            ) : (
                              <Button
                                type="primary"
                                htmlType="submit"
                                size={"large"}
                              >
                                Submit & Next
                              </Button>
                            )}
                          </Form.Item>
                        )}

                        {current === steps.length - 1 && (
                          <Form.Item>
                            {isLoading ? (
                              <Button
                                type="danger"
                                htmlType="submit"
                                size={"large"}
                                loading
                              >
                                Submit
                              </Button>
                            ) : (
                              <Button
                                type="danger"
                                htmlType="submit"
                                size={"large"}
                              >
                                Submit
                              </Button>
                            )}
                          </Form.Item>
                        )}
                      </Col>
                    </Row>
                  </div>
                </Form>
              </Col>
            </Row>
          </div>
        </div>
      </main>
    </Container>
  )
}

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx)
  var UserData = ""
  console.log(session, "session")
  if (session) {
    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")
    // myHeaders.append("cookie", ctx.req.headers.cookie);

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
  return { props: { session, UserData } }
}
export default MyApplication
