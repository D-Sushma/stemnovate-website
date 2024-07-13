import prisma from "~/lib/prisma"

export default async function handler(req, res) {
  try {
    res.setHeader('Cache-Control', 'max-age=3600');

  if (req.method == "POST") {
    const { url } = req.body
    const promotionsData = await prisma.home_banner.findMany({
      where: { url: url }
    })
    if (promotionsData.length > 0) {
      res.status(200).json({ status: 200, data: promotionsData })
    } else {
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
      res.status(200).json({ status: 201, data: [] })
    }
  }
} catch (error) {
  res.status(500).json({ error: "Internal Server Error" });
}
}
