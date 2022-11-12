import prisma from "~/lib/prisma";

export default async function handler(req, res) {
    if (req.method == "POST") {
        const { slug } = req.body;
        // console.log(url);

        const promotionsData = await prisma.campaign_data.findMany({
            where: { slug: slug },
        });

        if (promotionsData.length > 0) {
            res.status(200).json({ status: 200, data: promotionsData });
        } else {
            console.log("Error");
            res.status(200).json({ status: 201, data: [] });
        }
    } else {
        const promotionsData = await prisma.campaign_data.findMany();

        if (promotionsData.length > 0) {
            res.status(200).json({ status: 200, data: promotionsData });
        } else {
            console.log("Error");
            res.status(200).json({ status: 201, data: [] });
        }
    }
}
