import prisma from "~/lib/prisma";
import moment from "moment";
import nodemailer from "nodemailer";
import path from "path";
import ejs from "ejs";
import { EmailConfig } from "~/lib/constant";
import { EmailUserName } from "~/lib/constant";
export default async function handle(req, res) {
    const { orderId, status } = req.body;
    const todayDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

    const checkOrder = await prisma.orders.findMany({
        where: {
            order_id: orderId,
            payment_status: null,
        },
    });

    if (checkOrder.length > 0) {
        if (status) {
            if (status == "cancel") {
                var order_status = "failed";
            } else {
                var order_status = "Pending";
            }

            const updateUser = await prisma.orders.updateMany({
                where: {
                    order_id: orderId,
                },
                data: {
                    payment_status: status,
                    order_status: order_status,
                },
            });

            // send mail
            if (status == "success") {
                var userOrders = await prisma.orders.findMany({
                    where: { order_id: orderId },
                });

                const userOrdersDetails = await prisma.order_details.findMany({
                    where: { order_id: userOrders[0].id },
                });

                // userOrders.push(userOrdersDetails);
                const OrderID = "#STEM-900" + userOrders[0].id;

                const { name, email } = req.body;
                const url = process.env.NEXT_BASE_URL;

                var smtpTransport = nodemailer.createTransport({
                    service: "gmail",
                    auth: EmailConfig,
                });

                smtpTransport.verify(function (error, success) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log("Server is ready to take our messages");
                    }
                });

                ejs.renderFile(path.resolve(`./components/email/OrderStatus.ejs`), { name: name, products: userOrdersDetails, details: userOrders[0], order_date: todayDate, OrderID: OrderID, url: url }, function (err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        let from = `${EmailUserName} <${EmailConfig.user}>`;
                        var mainOptions = {
                            from: from,
                            to: email,
                            subject: "Your Orders  !",
                            html: data,
                            bcc: "info@stemnovate.co.uk"
                        };

                        smtpTransport.sendMail(mainOptions, function (err, info) {
                            if (err) {
                                console.log(err);
                                // res.json({
                                //     msg: "fail",
                                // });
                            } else {
                                console.log(info);
                                // res.json({
                                //     msg: "success",
                                // });
                            }
                        });
                    }
                });
            }

            // send mail

            var response = {
                code: "200",
                message: "Status Updated Successfully",
                result: status,
            };
            res.json(response);
        } else {
            var response = {
                code: "401",
                message: "No Status Updates",
                result: "",
            };
            res.json(response);
        }
    } else {
        var response = {
            code: "401",
            message: "Order Not Exist",
            result: "",
        };
        res.json(response);
    }
}
