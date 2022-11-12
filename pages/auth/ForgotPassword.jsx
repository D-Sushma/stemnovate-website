import React, { useState, useEffect } from "react";
import Container from "~/components/layouts/Container";
import { useRouter } from "next/router";
import { Form, Input, Button, message, Checkbox } from "antd";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { AiFillFacebook, AiOutlineLock, AiOutlineUser, AiFillLinkedin } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";

const ForgotPassword = () => {
    const [isLoading, setisLoading] = useState(false);

    const SendEmail = async (name, email, code) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            name: name,
            email: email,
            code: code,
        });

        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
        };

        fetch(process.env.NEXT_BASE_URL + "/api/Email/forgotPassEmail", requestOptions)
            .then((response) => response.text())
            .then(async (result) => {
                console.log(result);
            })
            .catch((error) => console.log("error", error));
    };

    const onFinish = async (values) => {
        console.log(values);
        setisLoading(true);
        try {
            const response = await fetch(process.env.NEXT_BASE_URL + "/api/auth/ForgotPassword", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });
            const json = await response.json();
            // return json.movies;
            console.log(json);
            if (json.code == "200") {
                toast.success(json.result.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                SendEmail(json.result.firstname, json.result.email, json.result.code);
                setisLoading(false);
            } else {
                toast.error(json.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });

                setisLoading(false);
            }
        } catch (error) {
            console.error(error);
            toast.error("Something Went to wrong", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });

            setisLoading(false);
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <Container title="My Account">
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <div className="ps-page ps-page--inner ">
                <div className="container">
                    <div className="ps-page__header"></div>
                    <div className="ps-page__content ps-account">
                        <div className="row">
                            <div className="p-0 col-12 col-md-6 d-sm-none d-md-block bg-login-page">
                                <img src="/static/img/Home/signin-img.jpg" style={{ width: "100%" }} alt="Stemnovate Limited" />
                                {/* <h2 className="ps-form__title">Personalize Your Experience</h2>
                                <p className="m-3"> You are currently not signed in. For a better experience, please sign in or create an online profile.* This will allow you to find products and prices that are specific to the organization you work in. You will also be able to:</p>
                                <ul className="m-3">
                                    <li>Get access to featured online tools</li>
                                    <li>Check out faster</li>
                                    <li>Save multiple shipping locations</li>
                                    <li>Access your order history</li>
                                    <li>Save items to a favorites list</li>
                                </ul>
                                <small>* Welcome to the new stemnovate.co.uk. As a security feature, all registered users must reset their password when logging into the new site for the first time. Please enter your profile email address and password to have a password reset link sent to your email account. This link will expire after 24 hours. If you need support, please contact your local customer service team.</small>*/}
                            </div>
                            <div className="p-4 col-12 col-md-6 card">
                                <div className="ps-form--review m-5">
                                    <h2 className="ps-form__title">Forgot Password</h2>
                                    <p className="m-3"> Enter your email address to receive a link to reset your password.</p>
                                    <Form layout="vertical" size={"large"} className="login-form" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
                                        <Form.Item
                                            label="Email"
                                            name="Email"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Please input your Email!",
                                                },
                                            ]}>
                                            <Input prefix={<AiOutlineUser className="site-form-item-icon" />} />
                                        </Form.Item>

                                        <Form.Item className="mt-5">
                                            <Link href={"/"}>
                                                <a>
                                                    <Button type="primary" htmlType="Cancel" size={"large"} className="mx-4">
                                                        Cancel
                                                    </Button>
                                                </a>
                                            </Link>

                                            {isLoading ? (
                                                <Button type="danger" htmlType="submit" size={"large"} loading>
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
                                {/* </form> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ForgotPassword;
