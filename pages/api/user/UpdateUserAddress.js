import prisma from "~/lib/prisma";
import { getSession } from "next-auth/react";
import { v4 as uuidv4 } from "uuid";
import { Prisma } from "@prisma/client";
import { update } from "lodash";

export default async function handle(req, res) {
    try {
        const session = await getSession({ req });
        var response = "";
        var upData = req.body;
        if (session != null) {
            const { Scope, Compliance, ContactEmail, Organization_type, Name, Website, Country, County, Address1, Address2, Town, ZIP, UserLoginId, VATExemption, VatNo } = req.body;

            const checkuser = await prisma.customer_address_details.findMany({
                where: {
                    customer_id: session.id,
                },
            });

            var isDone = "";

            const getApplication = await prisma.customer_application_details.findMany({
                where: {
                    customer_id: parseInt(session.id),
                },
            });

            console.log("getApplication", getApplication);

            if (checkuser.length > 0) {
                if (upData.B_SameAsOrg) {
                    upData.B_Country = getApplication[0].Country;
                    upData.B_County = getApplication[0].County_States;
                    upData.B_Town = getApplication[0].Town_City;
                    upData.B_ZIP = getApplication[0].Postcode_ZIP;
                    upData.B_Address1 = getApplication[0].Address_line1;
                    upData.B_Address2 = getApplication[0].Address_line2;
                }

                if (upData.B_SameAsOrg) {
                    upData.S_Country = getApplication[0].Country;
                    upData.S_County = getApplication[0].County_States;
                    upData.S_Town = getApplication[0].Town_City;
                    upData.S_ZIP = getApplication[0].Postcode_ZIP;
                    upData.S_Address1 = getApplication[0].Address_line1;
                    upData.S_Address2 = getApplication[0].Address_line2;
                }

                const AddORG = await prisma.customer_address_details.updateMany({
                    where: {
                        customer_id: parseInt(session.id),
                    },
                    data: upData,
                });
                console.log("Update", AddORG);
                isDone = AddORG;
            } else {
                if (upData.B_SameAsOrg) {
                    upData.B_Country = getApplication[0].Country;
                    upData.B_County = getApplication[0].County_States;
                    upData.B_Town = getApplication[0].Town_City;
                    upData.B_ZIP = getApplication[0].Postcode_ZIP;
                    upData.B_Address1 = getApplication[0].Address_line1;
                    upData.B_Address2 = getApplication[0].Address_line2;
                }

                if (upData.S_SameAsOrg) {
                    upData.S_Country = getApplication[0].Country;
                    upData.S_County = getApplication[0].County_States;
                    upData.S_Town = getApplication[0].Town_City;
                    upData.S_ZIP = getApplication[0].Postcode_ZIP;
                    upData.S_Address1 = getApplication[0].Address_line1;
                    upData.S_Address2 = getApplication[0].Address_line2;
                }

                upData.customer_id = parseInt(session.id);
                upData.add_id = uuidv4();

                const AddORG = await prisma.customer_address_details.create({
                    data: upData,
                });

                isDone = AddORG;
            }

            if (isDone !== null) {
                response = {
                    code: "200",
                    message: "Address Updated Successfully",
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
