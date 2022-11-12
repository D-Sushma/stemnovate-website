import React, { useState } from "react";

const Subscribe = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [email, setemail] = useState("");
    const submitNewsletter = () => {
        if (email !== "") {
            setShowMessage(true);
        }
    };
    return (
        <section className="ps-section--newsletter  newsletter-section">
            <h4 className="ps-section__title">Join our newsletter</h4>
            <div className="ps-section__content">
                <form onSubmit={submitNewsletter} method="post" id="subscribe-newsletter">
                    <div className="ps-form--subscribe">
                        <div className="ps-form__control">
                            <input className="form-control ps-input" type="email" onChange={(val) => setemail(val)} placeholder="Enter your email address" required />
                            <button className="ps-btn ps-btn--warning ps-btn--curve bg-white  " style={{ color: "#ff9923" }}>
                                Subscribe
                            </button>
                        </div>
                    </div>
                    {showMessage && (
                        <>
                            <div className="text-white text-center m-3 ">Thank you for subscribing to Stemnovate newsletter!</div>
                        </>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Subscribe;
