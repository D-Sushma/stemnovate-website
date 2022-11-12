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

        // if (error === 0) {
        //     BatchUpdate.firstname = First;
        //     BatchUpdate.lastname = last;

        //     const updateUser = await prisma.customers.update({
        //         where: {
        //             id: checkuser.id,
        //         },
        //         data: BatchUpdate,
        //     });

        //     if (updateUser != null) {
        //         response = {
        //             code: "200",
        //             message: "Account Updated Successfully",
        //         };
        //         res.status(200).send(response);
        //     } else {
        //         response = {
        //             code: "401",
        //             message: "Something Went to Wrong, Try after Some Time",
        //             result: "",
        //         };
        //         res.status(401).send(response);
        //     }
        // } else {
        //     res.status(500).send(response);
        // }
    }
};
