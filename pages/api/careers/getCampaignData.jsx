import prisma from "~/lib/prisma"

export default async function handler(req, res) {
  if (req.method == "POST") {
    const { slug } = req.body

    if (slug) {
      var JobList = await prisma.campaign_data.findMany({
        orderBy: {
          date: "desc"
        },
        where: { deleted_at: null, slug: slug, status: 1 }
      })

      if (JobList.length > 0) {
        res.status(200).json({ status: 200, data: JobList })
      } else {
        console.log("Error")
        res.status(200).json({ status: 201, data: [] })
      }
    } else {
      var JobList = await prisma.campaign_data.findMany({
            // take: 1,
            orderBy: {
                id: "desc",
            },
            where: { deleted_at: null, status: 1,},
      })

      if (JobList.length > 0) {
        res.status(200).json({ status: 200, data: JobList })
      } else {
        console.log("Error")
        res.status(200).json({ status: 201, data: [] })
      }
    }
  }
}

