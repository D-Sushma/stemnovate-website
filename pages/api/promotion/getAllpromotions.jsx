import prisma from "~/lib/prisma"

export default async function handler(req, res) {
  if (req.method == "POST") {
    const { url } = req.body

    const promotionsData = await prisma.promotions_offer.findMany({
      where: { url: url }
    })

    if (promotionsData.length > 0) {
      res.status(200).json({ status: 200, data: promotionsData })
    } else {
      console.log("Error")
      res.status(200).json({ status: 201, data: [] })
    }
  } else {
    const promotionsData = await prisma.promotions_offer.findMany({
      where: { status: 1 },
      orderBy: { promo_id: "desc" }
    })
    if (promotionsData.length > 0) {
      res.status(200).json({ status: 200, data: promotionsData })
    } else {
      console.log("Error")
      res.status(200).json({ status: 201, data: [] })
    }
  }
}
