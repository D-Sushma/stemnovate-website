import prisma from "~/lib/prisma";

export default async function handler(req, res) {
    res.setHeader('Cache-Control', 's-maxage=86400')
    try {

        const topTrendingDetails = await prisma.home_top_trending.findMany({
            take: 4,
            orderBy: {
                section_order: 'asc'
            },
            where: {status: 1, deleted_at: null },
            select: {
                id: true,
                section_type: true,
                section_title: true,
                image: true,
                btn_url: true,
                section_order: true,
                status: true,
                created_at: true,
                updated_at: true,
                deleted_at: true,
            }
        });

        if (topTrendingDetails.length > 0) {
            res.status(200).json({ status: 200, data: topTrendingDetails })
        } else {
            res.status(200).json({ status: 201, data: [] })
        }
    } catch (error) {
        console.error("Error fetching blog list:", error)
        res
            .status(503)
            .json({ status: 500, data: [], massage: "something Went to wrong" })
    }

}
