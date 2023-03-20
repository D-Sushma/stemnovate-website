import prisma from "~/lib/prisma"

export default async function handler(req, res) {
  if (req.method == "POST") {
    const { url } = req.body
    // console.log(url);

    const promotionsData = await prisma.home_banner.findMany({
      where: { url: url }
    })

    // console.log("promotionsData", promotionsData);

    if (promotionsData.length > 0) {
      res.status(200).json({ status: 200, data: promotionsData })
    } else {
      console.log("Error")
      res.status(200).json({ status: 201, data: [] })
    }
  } else {
    const promotionsData = await prisma.home_banner.findMany({
       where: { deleted_at: null },
      orderBy: { banner_id: "desc" }
    })
    if (promotionsData.length > 0) {
      res.status(200).json({ status: 200, data: promotionsData })
    } else {
      console.log("Error")
      res.status(200).json({ status: 201, data: [] })
    }
  }
}
