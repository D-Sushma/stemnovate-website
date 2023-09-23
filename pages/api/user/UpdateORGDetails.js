import prisma from "~/lib/prisma";
import { getSession } from "next-auth/react";
import { v4 as uuidv4 } from "uuid";
import { Prisma } from "@prisma/client";

export default async function handle(req, res) {
    try {
        const session = await getSession({ req });
        var response = "";
        if (session != null) {
            // const { Scope, Compliance, ContactEmail, Organization_type, Name, Website, Country, County, Address1, Address2, Town, ZIP, UserLoginId, VATExemption, VatNo } = req.body;

            const checkuser = await prisma.customer_application_details.findMany({
                where: {
                    customer_id: session.id,
                },
            });

            // console.log("checkuser",checkuser)
            var isDone = null;

            if (checkuser.length > 0) {
                var upDateApplication = {};
                upDateApplication = req.body;
                const AddORG = await prisma.customer_application_details.updateMany({
                    where: {
                        customer_id: parseInt(session.id),
                    },
                    data: upDateApplication,
                });
                // console.log("Update",AddORG)
                isDone = AddORG;
            } else {
                var addApplication = req.body;
                addApplication.customer_id = parseInt(session.id);
                addApplication.Application_id = uuidv4();
                const AddORG = await prisma.customer_application_details.create({
                    data: addApplication,
                });
                // console.log("AddORG",AddORG)
                isDone = AddORG;
            }

            if (isDone !== null) {
                response = {
                    code: "200",
                    message: "Organization Details Added Successfully",
                    result: "",
                };
                res.status(200).send(response);
            } else {
                response = {
                    code: "401",
                    message: "Something Went to wrong",
                    result: "",
                };
                res.status(401).send(response);
            }
        } else {
            res.status(401).send({
                unauthorized: "You are not authorized to view this page",
            });
        }
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            // The .code property can be accessed in a type-safe manner
            if (e.code === "P2002") {
                console.log("There is a unique constraint violation, a new user cannot be created with this email");
            }
        }
        throw e;
    }
}
