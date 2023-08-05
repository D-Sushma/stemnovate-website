import prisma from "~/lib/prisma";

export default async function handler(req, res) {
    try {
        const { CustomerId } = req.body;

        const userOrders = await prisma.orders.findMany({
            where: { customer_id: CustomerId }, orderBy: {
                  id: 'desc',
              },
        });
        res.json(userOrders);
    } catch (error) {
        res.json(error);
    }
}
