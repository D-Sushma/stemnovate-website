import prisma from "~/lib/prisma"
import moment from "moment"

export default async function handler(req, res) {
  try {
    if (req.method == "POST") {
      const { promoId } = req.body
      let d1 = moment().format("YYYY-MM-DD")
      let d2 = "T00:00:00.000Z"
      let d3 = d1 + d2
      const promotionsData = await prisma.home_video_banner.findMany({
        where: {
          id: promoId,
          published: true,

          start_date: {
            lte: d3 // Earliest date
          },
          end_date: {
            gte: d3 // Latest  date
          }
        }
      })
      if (promotionsData.length > 0) {
        res.status(200).json({ status: 200, data: promotionsData })
      } else {
        res.status(200).json({ status: 201, data: [] })
      }
    } else {
      let d1 = moment().format("YYYY-MM-DD")
      let d2 = "T00:00:00.000Z"
      let d3 = d1 + d2
      const promotionsData = await prisma.home_video_banner.findMany({
        where: {
          published: true,

          start_date: {
            lte: d3 // Earliest date
          },
          end_date: {
            gte: d3 // Latest  date
          }
        }
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
