import prisma from "~/lib/prisma";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
    try {
        const { orderId } = req.body;

        var data = [];

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
