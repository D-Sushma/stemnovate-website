import React, { useEffect } from "react";
import Container from "~/components/layouts/Container";
import BreadCrumb from "~/components/elements/BreadCrumb";
import { getSession } from "next-auth/react";
import { baseUrl } from "~/repositories/Repository";
import { Table, Tag, Space } from "antd";
import Link from "next/link";
import dayjs from "dayjs";

const breadcrumb = [
    {
        id: 1,
        text: "Home",
        url: "/",
    },

    {
        id: 2,
        text: "Orders",
    },
];

const Orders = ({ userOrders }) => {
    useEffect(() => {
        console.log("userOrders", JSON.parse(userOrders));
    }, []);

    const columns = [
        {
            title: "Order Id",
            dataIndex: "orderId",
            key: "orderId",
        },
        {
            title: "Date",
            dataIndex: "orderDate",
            key: "orderDate",
        },
        {
            title: "Payment Status",
            dataIndex: "PaymentStatus",
            key: "PaymentStatus",
            render: (PaymentStatus) => (
                <>
                    {PaymentStatus.map((tag) => {
                        if (tag != null) {
                            let color = tag == "-" ? "blue" : "yellow";
                            if (tag === "-") {
                                color = "yellow";
                            }
                            if (tag === "cancel") {
                                color = "red";
                            }
                            if (tag === "success") {
                                color = "green";
                            }

                            return (
                                <Tag color={color} key={tag}>
                                    {tag === ""
                                        ? "Payment Initiated"
                                        : tag.toUpperCase()}
                                </Tag>
                            );
                        }
                        return (
                            <Tag key={tag} color={"yellow"}>
                                Payment Initiated
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: "Order Status",
            key: "OrderStatus",
            dataIndex: "OrderStatus",
            render: (OrderStatus) => (
                <>
                    {OrderStatus.map((tag) => {
                        if (tag != null) {
                            let color = tag == "-" ? "blue" : "yellow";
                            if (tag === "-") {
                                color = "yellow";
                            }
                            if (tag === "cancel") {
                                color = "red";
                            }
                            if (tag === "success") {
                                color = "green";
                            }

                            return (
                                <Tag color={color} key={tag}>
                                    {tag === ""
                                        ? "Payment Initiated"
                                        : tag.toUpperCase()}
                                </Tag>
                            );
                        }
                        return (
                            <Tag key={tag} color={"yellow"}>
                                Pending
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: "Total Amount",
            dataIndex: "Amount",
            key: "Amount",
        },
       {
            title: "Action",
            key: "action",
            dataIndex: "action",
            render: (action) => (
                <Space size="middle">
                    <Link href={`/user/OrderDetails/${action}`}>
                        <button className="btn btn-info ">View</button>
                    </Link>
                </Space>
            ),
        },
    ];

    return (
        <Container title="Orders">
            <main className="ps-page ps-page--inner">
                <div className="ps-page__header pb-0">
                    <div className="container">
                        <BreadCrumb breacrumb={breadcrumb} />
                    </div>
                </div>
                <div className="ps-page__content mb-5">
                    <div className="ps-about">
                        <div className="container">
                            <div className="card">
                            <h5 className="card-header">Order Details</h5>
                                <div className="card-body">
                                    {console.log("data", userOrders)}
                                    <Table
                                        columns={columns}
                                        dataSource={
                                            userOrders && JSON.parse(userOrders)
                                        }
                                    />
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
    const mySession = await getSession(ctx);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ CustomerId: mySession.id });

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
    };
    const response = await fetch(
        `${baseUrl}/api/orders/getAllOrders`,
        requestOptions
    );
    const userOrders = await response.json();
    var orderData = [];
    userOrders.forEach((ord, key) => {
        orderData.push({
            key: key,
            orderId: `STEM-${9000+ord.id}`,
            orderDate: dayjs(ord.order_date).format('dddd, MMMM D, YYYY h:mm A'),
            PaymentStatus: [ord.payment_status],
            OrderStatus: [ord.order_status],
            Amount: ord.total_amount,
            action: ord.order_id,
        });
    });
    // console.log(orderData)
    const myResponse = JSON.stringify(orderData);
    return {
        props: { userOrders: myResponse },
    };
}

export default Orders;
