import React, { useState, useEffect } from "react";
import Container from "~/components/layouts/Container";
import { useRouter } from "next/router";
import { Form, Input, Button, message, Checkbox } from "antd";
import Link from "next/link";
import { AiFillFacebook, AiOutlineLock, AiOutlineUser, AiFillLinkedin } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";

import { decode } from "hex-encode-decode";
function ResetPassword() {
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState(false);
    const router = useRouter();
    const { Code } = router.query;
    useEffect(() => {
        console.log("code", Code);
        if (Code) {
            var email = decode(Code);
            setIsLoading(true);

            VerifyEmail(email);
        }
        // else {
        //     toast.error("unauthorized", {
        //         position: "top-right",
        //         autoClose: 5000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "colored",
        //     });
        //     // Router.push(process.env.NEXT_BASE_URL+"/auth/UserLogin");
        // }
    }, [Code]);

    const VerifyEmail = async (email) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            email: email,
        });

        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
        };

        await fetch(process.env.NEXT_BASE_URL + "/api/Email/CheckEmail", requestOptions)
            .then((response) => response.json())
            .then(async (result) => {
                if (result.code == 200) {
                    setStatus(true);
                    setIsLoading(false);
                    toast.success("Email Verified Successfully", {
                        position: "top-right",
                        autoClose: 15000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                } else {
                    setStatus(false);
                    setIsLoading(false);
                    toast.error("Email not Verified", {
                        position: "top-right",
                        autoClose: 15000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                }
            })
            .catch((error) => console.log("error", error));
    };

    return (
        <Container title="My Account">
            {/* <div>{code}</div> */}
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <div className="ps-page ps-page--inner ">
                <div className="container">
                    <div className="ps-page__header"></div>
                    <div className="ps-page__content ps-account">
                        <section className="mail-seccess section">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 offset-lg-3 col-12">
                                        <div className="success-inner">
                                            <h1>
                                                <i className="fa fa-envelope"></i>
                                                <span>Thanks for verifying your account</span>
                                            </h1>
                                            <p>Verified accounts allow us to provide customised products, services, and promotions.</p>
                                            <a className=" text-uppercase btn btn-lg button-orange text-white m-4" href="/auth/UserLogin">
                                                Login
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default ResetPassword;
