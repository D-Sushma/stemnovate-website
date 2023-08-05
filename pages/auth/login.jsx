import React, { useState } from "react";
import Container from "~/components/layouts/Container";
import { Alert } from "antd";
import { signIn } from "next-auth/react";

const MyAccountScreen = () => {
    const [showpass, setshowpass] = useState(false);
    const Togglepass = () => {
        setshowpass(!showpass);
    };
    const preventDefault = (f) => (e) => {
        e.preventDefault();
        f(e);
    };

    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [message, setmessage] = useState("");
    const [status, setstatus] = useState("");
    const [loading, setloading] = useState(false);

    const handleSubmit = preventDefault(async () => {
        setloading(true);
        try {
            const res = await signIn("credentials", {
                username,
                password,
                callbackUrl: `${window.location.origin}/`,
            });
            console.log(res);
        } catch (error) {
            console.error(error);
            setloading(false);
        }
    });
    return (
        <Container title="My Account">
            <div className="ps-page ps-page--inner ">
                <div className="container">
                    <div className="ps-page__header"></div>
                    <div className="ps-page__content ps-account">
                        <div className="row">
                            <div className="m-4 col-11 col-md-4 card">
                                <form onSubmit={handleSubmit} method="post">
                                    <div className="ps-form--review">
                                        <h2 className="ps-form__title">
                                            Sign in to your Profile
                                        </h2>
                                        <div className="m-3">
                                            {message !== "" && (
                                                <Alert
                                                    message={message}
                                                    type={status}
                                                    closable
                                                    showIcon
                                                />
                                            )}
                                        </div>
                                        <div className="ps-form__group">
                                            <label className="ps-form__label">
                                                User Name / Email
                                            </label>
                                            <input
                                                className="form-control ps-form__input"
                                                type="email"
                                                onChange={(uname) => {
                                                    setusername(
                                                        uname.target.value
                                                    );
                                                }}
                                            />
                                        </div>
                                        <div className="ps-form__group">
                                            <label className="ps-form__label">
                                                Password
                                            </label>
                                            <div className="input-group">
                                                <input
                                                    className="form-control ps-form__input"
                                                    type={
                                                        showpass
                                                            ? "text"
                                                            : "password"
                                                    }
                                                    onChange={(pass) => {
                                                        setpassword(
                                                            pass.target.value
                                                        );
                                                    }}
                                                />
                                                <div
                                                    className="input-group-append"
                                                    onClick={() => {
                                                        Togglepass();
                                                    }}>
                                                    <a
                                                        className={
                                                            showpass
                                                                ? "fa fa-eye toogle-password"
                                                                : "fa fa-eye-slash toogle-password"
                                                        }></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ps-form__submit">
                                            {loading ? (
                                                <button
                                                    className="ps-btn ps-btn--gray"
                                                    disabled>
                                                    <span
                                                        className="spinner-border spinner-border-lg"
                                                        role="status"
                                                        aria-hidden="true"></span>{" "}
                                                    Log in
                                                </button>
                                            ) : (
                                                <button className="ps-btn ps-btn--warning">
                                                    {" "}
                                                    Log in
                                                </button>
                                            )}

                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="remember"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="remember">
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>
                                        <a
                                            className="ps-account__link"
                                            href="lost-password.html">
                                            Lost your password?
                                        </a>
                                    </div>
                                </form>
                            </div>
                            <div className="m-4 col-11 col-md-6 ">
                                <h2 className="ps-form__title">
                                    Personalize Your Experience
                                </h2>
                                <p className="m-3">
                                    {" "}
                                    You are currently not signed in. For a
                                    better experience, please sign in or create
                                    an online profile.* This will allow you to
                                    find products and prices that are specific
                                    to the organization you work in. You will
                                    also be able to:
                                </p>
                                <ul className="m-3">
                                    <li>Get access to featured online tools</li>
                                    <li>Check out faster</li>
                                    <li>Save multiple shipping locations</li>
                                    <li>Access your order history</li>
                                    <li>Save items to a favorites list</li>
                                </ul>
                                <small>
                                    * Welcome to the new stemnovate.co.uk. As a
                                    security feature, all registered users must
                                    reset their password when logging into the
                                    new site for the first time. Please enter
                                    your profile email address and password to
                                    have a password reset link sent to your
                                    email account. This link will expire after
                                    24 hours. If you need support, please
                                    contact your local customer service team.
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default MyAccountScreen;
