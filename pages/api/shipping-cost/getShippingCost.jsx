import prisma from "~/lib/prisma"

export default async function handleShippingCost (req,res) {
    try {
        const { country, region } = req.body;
        console.log("region",region )
        const shippingCost = await prisma.country_shipping_cost.findMany({
            where: {
                country_name: country,
                country_region: region
            }
        })
        console.log("shippingCost",shippingCost);

        res.status(200).json({
            code: "200",
            message: "Success",
            result: shippingCost
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            code: "500",
            message: "Internal Server Error",
            error: error.message
        })
    }
}