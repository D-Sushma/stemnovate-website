import prisma from "~/lib/prisma"

export default async function handler(req, res) {
  try {
    if (req.method == "POST") {
      const { promoId } = req.body
      const promotionsData = await prisma.home_video_banner.findMany({
        where: { id: promoId }
      })
      if (promotionsData.length > 0) {
        res.status(200).json({ status: 200, data: promotionsData })
      } else {
        res.status(200).json({ status: 201, data: [] })
      }
    } else {
      const promotionsData = await prisma.home_video_banner.findMany()
      if (promotionsData.length > 0) {
        res.status(200).json({ status: 200, data: promotionsData })
      } else {
        res.status(200).json({ status: 201, data: [] })
      }
    }
  } catch (e) {
    res
      .status(200)
      .json({ status: 500, data: [], massage: "something Went to wrong" })
  }
}
