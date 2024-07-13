import prismaConnect from "lib/prisma"

export default async function handler(req, res) {
  try {
    if (req.method == "POST") {
      const { page_name } = req.body
      const promotionsData = await prismaConnect.header_banners.findMany({
        where: { page_name: page_name }
      })
      if (promotionsData.length > 0) {
        res.status(200).json({ status: 200, data: promotionsData })
      } else {
        res.status(200).json({ status: 201, data: [] })
      }
    } else {
      const promotionsData = await prismaConnect.header_banners.findMany({
      })
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
