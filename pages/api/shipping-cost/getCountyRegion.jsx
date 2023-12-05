import prisma from "~/lib/prisma"

export default async function handleCountyRegion (req,res) {
    try {
        const {county} = req.body
        const countyRegion = await prisma.regions.findMany({
            where: {
                Counties: county
            }
        })
        console.log("countyRegion",countyRegion);

        res.status(200).json({
            code: "200",
            message: "Success",
            result: countyRegion
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