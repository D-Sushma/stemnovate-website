import prisma from "~/lib/prisma"

export default async function handleCustomerDetail(req, res) {
  try {
    const {customer_id} = req.body;
    const customerDetail = await prisma.customer_address_details.findMany({
        where: {
            customer_id
        }
    })

    res.status(200).json({
        status: "200",
        message: "success",
        result: customerDetail
    })
} catch (error) {
    console.error(error)
    res.status(500).json({
        status: "500",
        message: "Internal Server Error",
        error: error.message
    })
}
}
