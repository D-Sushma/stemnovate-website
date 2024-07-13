
import prisma from "~/lib/prisma";
import bcrypt from "bcrypt";

export default async function handle(req, res) {
    try {
        const { username, password } = req.body;
        const checkuser = await prisma.customers.findMany({
            where: {
                email: username
            },
        });
        if (checkuser.length > 0) {
            const hash = checkuser[0].password;
            const resullt = {
                id: checkuser[0].id,
                email: checkuser[0].email,
                firstname: checkuser[0].firstname,
                lastname: checkuser[0].lastname,
                location: checkuser[0].location,
                newsletter: checkuser[0].newsletter,
                status: checkuser[0].status,
                tnc: checkuser[0].tnc,
            }
            const match = await bcrypt.compare(password, hash);
            if (match) {
                var response = {
                    code: "200",
                    message: "Login Successfully",
                    result: resullt,
                };
                res.status(200).send(response)
            } else {
                response = {
                    code: "401",
                    message: "Password Not Match",
                    result: "",
                };
                res.status(200).send(response)
            }
        } else {
            response = {
                code: "401",
                message: "User Not Found",
                result: "",
            };
            res.status(401).send(response)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}
