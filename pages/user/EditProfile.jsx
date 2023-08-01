import React, { useState, useEffect } from "react";
import Container from "~/components/layouts/Container";
import BreadCrumb from "~/components/elements/BreadCrumb";
import { Form, Input, Button, Row, Col, Checkbox } from "antd";
import { baseUrl } from "~/repositories/Repository";
import { auth } from "~/lib/CheckUser";
import { AiOutlineLock, AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";

import { getSession } from "next-auth/react";

const breadcrumb = [
    {
        id: 1,
        text: "Home",
        url: "/",
    },

    {
        id: 2,
        text: "EditProfile",
    },
];

const EditProfile = ({ UserData }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [ChangeCPass, setChangeCPass] = useState(false);
    const [form] = Form.useForm();
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const onFinish = async (values) => {
        const session = await getSession();
        setIsLoading(true);

        try {
            var raw = values;
            raw.UserLoginId = session.id;

            const response = await fetch(process.env.NEXT_BASE_URL + "/api/user/UpdateProfile", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(raw),
            });
            const json = await response.json();

            if (json.code == "200") {
                toast.success(json.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });

                setIsLoading(false);
            } else {
                toast.info(json.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something Went to Wrong...", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });

            setIsLoading(false);
        }
    };

    useEffect(() => {
        auth();
        if (UserData !== "") {
            form.setFieldsValue({
                First: UserData.result.firstname,
                last: UserData.result.lastname,
                Email: UserData.result.email,
                UserId: UserData.result.id,
            });
        }
    }, []);

    const CheckPassword = (data, p) => {
        if (p.length < 8) {
            return Promise.reject(new Error("password must be at least 8 characters"));
        }
        if (p.search(/[a-z]/) < 0) {
            return Promise.reject(new Error("password must contain at least one lower case letter."));
        }

        if (p.search(/[A-Z]/) < 0) {
            return Promise.reject(new Error("password must contain at least one upper case letter."));
        }
        if (p.search(/[!@#\$%\^&\*_]/) < 0) {
            return Promise.reject(new Error("Your password must contain at least special char from -[ ! @ # $ % ^ & * _ ]"));
        }
        if (p.search(/[0-9]/) < 0) {
            return Promise.reject(new Error("password must contain at least one digit."));
        }
        if (p.length > 32) {
            return Promise.reject(new Error("password must be at max 32 characters"));
        }

        return Promise.resolve();
    };

    return (
        <Container title="Edit Profile">
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <main className="ps-page ps-page--inner">
                <div className="ps-page__header pb-0">
                    <div className="container">
                        <BreadCrumb breacrumb={breadcrumb} />
                    </div>
                </div>
                <div className="ps-page__content">
                    <div className="ps-about">
                        <div className="m-5">
                            <Form
                                form={form}
                                layout="vertical"
                                size={"large"}
                                initialvalues={{
                                    remember: false,
                                }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off">
                                <Row>
                                    <Col md="12" lg={12} sm={24}>
                                        <Form.Item
                                            name="First"
                                            wrapperCol={{
                                                span: 23,
                                            }}
                                            label="First Name"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Please input your username!",
                                                },
                                            ]}>
                                            <Input prefix={<AiOutlineUser className="site-form-item-icon" />} placeholder="First Name" autoComplete="off" />
                                        </Form.Item>
                                    </Col>
                                    <Col md="12" lg={12} sm={24}>
                                        <Form.Item
                                            wrapperCol={{
                                                span: 23,
                                            }}
                                            name="last"
                                            label="Last Name">
                                            <Input prefix={<AiOutlineUser className="site-form-item-icon" />} autoComplete="off" placeholder="Last Name" />
                                        </Form.Item>
                                    </Col>
                                    <Col md="12" lg={12} sm={24}>
                                        <Form.Item
                                            wrapperCol={{
                                                span: 23,
                                            }}
                                            name="Email"
                                            rules={[
                                                {
                                                    type: "email",
                                                    message: "The input is not valid E-mail!",
                                                },
                                                {
                                                    required: true,
                                                    message: "Please input your Email!",
                                                },
                                            ]}
                                            label="Email">
                                            <Input prefix={<AiOutlineMail className="site-form-item-icon" />} autoComplete="off" placeholder="Email" readOnly />
                                        </Form.Item>
                                    </Col>
                                    <Col md="12" lg={12} sm={24}>
                                        <Form.Item name="changepassword" valuePropName="checked">
                                            <Checkbox className="mt-5" value={ChangeCPass} onClick={(e) => setChangeCPass(e.target.checked)}>
                                                Change Password.
                                            </Checkbox>
                                        </Form.Item>
                                    </Col>
                                </Row>{" "}
                                {ChangeCPass ? (
                                    <Row>
                                        <Col md="12" lg={12} sm={24}>
                                            <Form.Item
                                                wrapperCol={{
                                                    span: 23,
                                                }}
                                                label="Current Password"
                                                name="CPassword"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "Please input your Password!",
                                                    },
                                                ]}>
                                                <Input.Password prefix={<AiOutlineLock className="site-form-item-icon" />} type="password" autoComplete="off" placeholder="Current Password" />
                                            </Form.Item>
                                        </Col>
                                        <Col md="12" lg={12} sm={24}>
                                            <Form.Item
                                                wrapperCol={{
                                                    span: 23,
                                                }}
                                                label="Password"
                                                name="password"
                                                rules={[{ validator: CheckPassword }]}>
                                                <Input.Password prefix={<AiOutlineLock className="site-form-item-icon" />} type="password" autoComplete="off" placeholder="Password" />
                                            </Form.Item>
                                        </Col>
                                        <Col md="12" lg={12} sm={24}>
                                            <Form.Item
                                                wrapperCol={{
                                                    span: 23,
                                                }}
                                                name="confirm"
                                                label="Confirm Password"
                                                dependencies={["password"]}
                                                hasFeedback
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "Please confirm your password!",
                                                    },
                                                    ({ getFieldValue }) => ({
                                                        validator(_, value) {
                                                            if (!value || getFieldValue("password") === value) {
                                                                return Promise.resolve();
                                                            }

                                                            return Promise.reject(new Error("The two passwords that you entered do not match!"));
                                                        },
                                                    }),
                                                ]}>
                                                <Input.Password prefix={<AiOutlineLock className="site-form-item-icon" />} type="password" autoComplete="off" placeholder="Confirm Password" />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                ) : null}
                                <Form.Item className="mt-5">
                                    {isLoading ? (
                                        <Button type="danger" htmlType="submit" size={"large"} loading>
                                            Submit
                                        </Button>
                                    ) : (
                                        <Button type="danger" htmlType="submit" size={"large"}>
                                            Submit
                                        </Button>
                                    )}
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </main>
        </Container>
    );
};

export async function getServerSideProps(ctx) {
    const session = await getSession(ctx);
    var UserData = "";
    if (session) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("cookie", ctx.req.headers.cookie);

        var raw = JSON.stringify({
            UserLoginId: session.id,
        });

        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
        };
        // Fetch data from external API
        const res = await fetch(`${baseUrl}/api/user/UserDetails`, requestOptions);
        UserData = await res.json();
    }

    // Pass data to the page via props
    return { props: { UserData } };
}

export default EditProfile;
