import prisma from "~/lib/prisma";

export default async (req, res) => {
    if (req.method == "POST") {
        const { UserId } = req.body;
        const userData = await prisma.customers.findUnique({
            where: {
                id: UserId,
            },
        });

        response = {
            code: "200",
            message: "Account Updated Successfully",
        };
        res.status(200).send(userData);
    }
};
