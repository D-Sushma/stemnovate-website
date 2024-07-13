import prisma from "~/lib/prisma";

export default async function handle(req, res) {
    const { email } = req.body;
    const existingEmail = await prisma.customers.findMany({
        where: {
            email
        }
    })
    let response = {};
    if (existingEmail.length > 0) {
        response = {
            code: "409",
            message: "email Id already Exist",
            result: "",
        };
    } else {
        response = {
            code: "404",
            message: "Email Not Found",
            result: "",
        };
    }
    res.json(response);
}