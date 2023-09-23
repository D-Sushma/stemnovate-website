import prisma from "~/lib/prisma";
import { getSession } from "next-auth/react";
import bcrypt from "bcrypt";
export default async function handle(req, res) {
    let session = await getSession({ req });
    var response = "";
    if (session !== null) {
        const {
            First,
            last,
            // Email,
            changepassword,
            CPassword,
            password,
            confirm,
            UserLoginId,
        } = req.body;

        const checkuser = await prisma.customers.findUnique({
            where: {
                id: UserLoginId,
            },
            select: {
                id: true,
                firstname: true,
                password: true,
            },
        });

        if (checkuser !== null) {
            var BatchUpdate = {};
            var error = 0;

            if (changepassword && changepassword != undefined) {
                const hash = checkuser.password;

                console.log("Change Password")

                const match = await bcrypt.compare(CPassword, hash);

                if (match) {
                    if(CPassword!==confirm)
                    {

                    if (password === confirm) {
                        const hash = bcrypt.hashSync(confirm, 10);

                        BatchUpdate.password = hash;
                    } else {
                        error = 1;
                        response = {
                            code: "401",
                            message: "Both Password Not Match",
                            result: "",
                        };
                        // res.status(401).send(response);
                    }
                } else {
                    error = 1;
                    response = {
                        code: "401",
                        message: "Current Password & New Password Same. Please Use New One",
                        result: "",
                    };
                    // res.status(401).send(response);
                }

                } else {
                    error = 1;
                    response = {
                        code: "401",
                        message: "Current Password Not Match",
                        result: "",
                    };
                    // res.status(401).send(response);
                }
            }

            if (error === 0) {
                BatchUpdate.firstname = First;
                BatchUpdate.lastname = last;

                const updateUser = await prisma.customers.update({
                    where: {
                        id: checkuser.id,
                    },
                    data: BatchUpdate,
                });

                if (updateUser != null) {
                    response = {
                        code: "200",
                        message: "Account Updated Successfully",
                    };
                    res.status(200).send(response);
                } else {
                    response = {
                        code: "401",
                        message: "Something Went to Wrong, Try after Some Time",
                        result: "",
                    };
                    res.status(401).send(response);
                }
            } else {
                // response = {
                //     code: "401",
                //     message: "Something Went to Wrong, Try after Some Time",
                //     result: "",
                // };
                res.status(500).send(response);
            }
        } else {
            response = {
                code: "401",
                message: "User Not Found",
                result: "",
            };
            res.status(401).send(response);
        }
    } else {
        response = {
            code: "401",
            message: "Unauthorized Access",
            result: "",
        };
        res.status(401).send(response);
    }
}
