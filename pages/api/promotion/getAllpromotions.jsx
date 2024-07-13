import prisma from "~/lib/prisma"
import moment from "moment"
export default async function handler(req, res) {
  if (req.method == "POST") {
    const { url } = req.body
    var t_date = new Date().toJSON()

    var d = new Date("2015-03-04T00:00:00.000Z")
    console.log("1", d.getUTCHours().toString()) // Hours
    console.log("2", d.getUTCMinutes().toString())
    console.log("3", d.getUTCSeconds().toString())

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
    let d1 = moment().format("YYYY-MM-DD")
    let d2 = "T00:00:00.000Z"
    let d3 = d1 + d2
    const promotionsData = await prisma.promotions_offer.findMany({
      where: {
        status: 1,
        published: true,

        start_date: {
          lte: d3 // Earliest date
        },
        end_date: {
          gte: d3 // Latest  date
        }
      },
      orderBy: { promo_id: "desc" }
    })
    if (promotionsData?.length > 0) {
      var corousel = 0
      promotionsData.forEach((element) => {
        if (element?.banner_type === "Carousel") {
          corousel = 1
        }
      })

      if (corousel == 1) {
        res.status(200).json({ status: 200, data: promotionsData })
      } else {
        const promotionsData2 = await prisma.promotions_offer.findMany({
          where: {
            status: 1,
            published: true
          },
          take: 5,
          orderBy: { promo_id: "desc" }
        })

        var arr = promotionsData?.concat(promotionsData2)

        const ids = arr.map(({ id }) => id)
        const filtered = arr.filter(
          ({ id }, index) => !ids.includes(id, index + 1)
        )

        res.status(200).json({ status: 200, data: filtered })
      }
    } else {
      const promotionsData1 = await prisma.promotions_offer.findMany({
        where: {
          status: 1,
          published: true
        },
        take: 5,
        orderBy: { promo_id: "desc" }
      })

      console.log("Error_promotionsData", promotionsData1)
      res.status(200).json({ status: 200, data: promotionsData1 })
    }
  }
}
