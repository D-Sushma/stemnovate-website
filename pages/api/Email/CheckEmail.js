import prisma from "~/lib/prisma";
export default async function handle(req, res) {
    try {
        const { email } = req.body;

        const checkuser = await prisma.customers.updateMany({
            where: {
                email: email,
            },
            data: {
                is_verified: parseInt(1),
            },
        });
       
        if (parseInt(checkuser.count)) {
            var response = {
                code: "200",
                message: "Verify Successfully",
                result: checkuser,
            };
            res.status(200).send(response);
        } else {
            response = {
                code: "401",
                message: "User Not Found",
                result: "",
            };
            res.status(401).send(response);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}
