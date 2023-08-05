import prisma from "~/lib/prisma";

export default async function handler(req, res) {
    try {
        const { orderId } = req.query;
        console.log(req.query);

        var userOrders = await prisma.orders.findMany({
            where: { order_id: orderId },
        });

        const userOrdersDetails = await prisma.order_details.findMany({
            where: { order_id: userOrders[0].id },
        });

        userOrders.push(userOrdersDetails);

        var responce = { userOrders };

        res.json(responce);
    } catch (error) {
        res.json(error);
    }
}
