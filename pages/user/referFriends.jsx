import React, { useState, useEffect, useRef } from "react";
import Container from "~/components/layouts/Container";
import BreadCrumb from "~/components/elements/BreadCrumb2";
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
        text: "Dashboard",
        url: "/user/dashboard",
    },
    {
        id: 3,
        text: "Refer a Friends",
    },
];

const referFriends = ({ UserData }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [ChangeCPass, setChangeCPass] = useState(false);
    const [form] = Form.useForm();

    const GanerateReffCode = async (ctx) => {
        const session = await getSession(ctx);
        if (session.id) {
            try {
                const RequestData = await fetch("/api/user/ganerateReffralLink", requestParama);
                const result = RequestData.then((res = res.json()));
                console.log(result);
            } catch (error) {}
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

    return (
        <Container title="Reffer A Friend">
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <main className="ps-page ps-page--inner">
                <div className="ps-page__header pb-0">
                    <div className="container">
                        <BreadCrumb breacrumb={breadcrumb} />
                        <h1>Refer A Friends</h1>
                    </div>
                </div>
                <div className="ps-page__content">
                    <div className="ps-about min-vh-100">
                        <div className="container bg-gray">
                            <div className="row py-5">
                                {/* <div className="col-md-6">
                                    <input type="text" className="form-control" name="" id="" />
                                </div> */}
                                <div className="col-md-6">
                                    <h3>You Dont have Reffral Code, Ganerate Now</h3>
                                    <input type="button" onClick={GanerateReffCode} value="ganerate" className="btn btn-lg btn-danger" />
                                </div>
                            </div>
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

export default referFriends;
