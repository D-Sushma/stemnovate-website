import prisma from "~/lib/prisma";

import bcrypt from "bcrypt";
import moment from "moment";
// moment.locale().tz('Europe/London');
export default async function handle(req, res) {
    const { First, last, Email, Country, password, amex, agreement, promotions } = req.body;
    const checkuser = await prisma.customers.findMany({
        where: {
            email: Email,
        },
    });

    if (checkuser.length == 0) {
        if (password == amex) {
            if (agreement) {
                bcrypt.hash(password, 10).then(async (hashedpassword) => {
                    var unique = new Date().valueOf();
                    const result = await prisma.customers
                        .create({
                            data: {
                                firstname: First,
                                lastname: last,
                                email: Email,
                                phoneno: "",
                                location: Country,
                                password: hashedpassword,
                                status: 0,
                                newsletter: promotions,
                                tnc: agreement,
                                customer_id: JSON.stringify(unique),
                            },
                        })
                        .then((result) => {
                            var response = {
                                code: "200",
                                message: "Account Created Successfully",
                                result: result,
                            };
                            res.json(response);
                        })
                        .catch((err) => {
                            var response = {
                                code: "401",
                                message: "Something Went To wrong",
                                result: "",
                            };
                            res.json(response);
                        });
                });
            } else {
                var response = {
                    code: "401",
                    message: "Agreement Not Accepted",
                    result: "",
                };
                res.json(response);
            }
        } else {
            var response = {
                code: "401",
                message: "Password Not Match",
                result: "",
            };
            res.json(response);
        }
    } else {
        var response = {
            code: "401",
            message: "email Id already Exist",
            result: "",
        };
        res.json(response);
    }
}
