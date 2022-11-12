import React, { useState, useEffect } from "react";
import Container from "~/components/layouts/Container";
import { useRouter } from "next/router";
import { Form, Input, Button, message, Checkbox } from "antd";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineLock, AiOutlineUser, AiFillLinkedin } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";

import { signIn, getSession } from "next-auth/react";
import Link from "next/link";

const UserLogin = ({ reffrals }) => {
    const router = useRouter();
    console.log("router", router);
    console.log("reffrals", reffrals);

    const [showpass, setshowpass] = useState(false);
    const Togglepass = () => {
        setshowpass(!showpass);
    };
    const preventDefault = (f) => (e) => {
        e.preventDefault();
        f(e);
    };

    useEffect(() => {
        const auth = async () => {
            const session = await getSession();
            if (session) {
                router.push({
                    pathname: reffrals,
                });
            }
        };

        auth();
    }, []);

    const [query, setQuery] = useState("");

    const handleParam = (setValue) => (e) => setValue(e.target.value);
    const action = "/api/check-login";
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [isLoading, setisLoading] = useState(false);

    const onFinish = async (values) => {
        // console.log("Success:", values.username);
        setisLoading(true);
        var username = values.username;
        var password = values.password;

        try {
            const response = await fetch(process.env.NEXT_BASE_URL + "/api/auth/check-login", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });
            const json = await response.json();
            // return json.movies;
            // console.log(json);
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

                const res = await signIn("credentials", {
                    username,
                    password,
                    callbackUrl: `${reffrals}`,
                });

                // console.log(json);
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
        // console.log("Failed:", errorInfo);
    };

    return (
        <Container title="My Account">
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <div className="ps-page ps-page--inner ">
                <div className="container">
                    <div className="ps-page__header"></div>
                    <div className="ps-page__content ps-account my-5">
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
                                {/* <form onSubmit={handleSubmit} method="post"> */}
                                <div className="ps-form--review m-5">
                                    <h2 className="ps-form__title">Sign in</h2>

                                    <Form layout="vertical" size={"large"} id="CollectedForms-5456750" className="login-form" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
                                        <Form.Item
                                            label="Email"
                                            name="username"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Please input your username!",
                                                },
                                            ]}>
                                            <Input prefix={<AiOutlineUser className="site-form-item-icon" />} />
                                        </Form.Item>

                                        <Form.Item
                                            label="Password"
                                            name="password"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Please input your password!",
                                                },
                                            ]}>
                                            <Input.Password prefix={<AiOutlineLock className="site-form-item-icon" />} type="password" placeholder="Password" />
                                        </Form.Item>

                                        <Form.Item>
                                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                                <Checkbox>Remember me</Checkbox>
                                            </Form.Item>
                                            <span className="float-right">
                                                <Link href={"/auth/ForgotPassword"}>
                                                    <a className="login-form-forgot text-primary" href="">
                                                        Forgot password ?
                                                    </a>
                                                </Link>
                                            </span>
                                        </Form.Item>
                                        <Form.Item className="mt-5">
                                            {isLoading ? (
                                                <Button type="danger" htmlType="submit" size={"large"} block loading>
                                                    Submit
                                                </Button>
                                            ) : (
                                                <Button type="danger" htmlType="submit" size={"large"} block>
                                                    Submit
                                                </Button>
                                            )}
                                        </Form.Item>
                                    </Form>
                                    {/* <div class="d-flex justify-content-center">OR</div>
                                    <div class="row ">
                                        <div className="col-md-6 col-sm-12 mt-3">
                                            <Button
                                                icon={<FcGoogle className="mr-2" />}
                                                size={"large"}
                                                htmlType="Login with Google"
                                                block>
                                                Login with Google
                                            </Button>
                                        </div>
                                        <div className="col-md-6 col-sm-12 mt-3">
                                            <Button
                                                icon={<AiFillLinkedin className="mr-2" />}
                                                size={"large"}
                                                htmlType="Login with Linkedin"
                                                block>
                                                Login with Linkedin
                                            </Button>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ps-page__header"></div>
                </div>
            </div>
        </Container>
    );
};
export async function getServerSideProps(context) {
    // console.log(context.req.headers.referer);
    var reffrals = context.req.headers.referer;
    return { props: { reffrals } };
}
export default UserLogin;
