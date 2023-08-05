import prisma from "~/lib/prisma";
export default async function handle(req, res) {
    try {
        const { UserLoginId } = req.body;

        if (UserLoginId) {
            const checkuser = await prisma.customers.findUnique({
                where: {
                    id: UserLoginId,
                },
                select: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    email: true,
                    phoneno: true,
                    location: true,
                    status: true,
                    is_verified: true,
                    tnc: true,
                    newsletter: true,
                    customer_address_details: true,
                    customer_application_details: true,
                    orders: true,
                    referral_link: true,
                },
            });

            if (checkuser !== null) {

                var response = {
                    code: "200",
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
        } else {
            res.status(401).send({
                unauthorized: "You are not authorized to view this page",
            });
        }
    } catch (error) {
        res.status(500).send(error);
    }
}
