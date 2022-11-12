import moment from "moment"
import prisma from "~/lib/prisma"

export default async function handler(req, res) {
  if (req.method == "POST") {
    const { slug, currentEvent } = req.body

    if (slug) {
      var EventsData = await prisma.events_details.findMany({
        orderBy: {
          date: "desc"
        },
        where: { deleted_at: null, slug: slug }
      })

      if (EventsData.length > 0) {
        res.status(200).json({ status: 200, data: EventsData })
      } else {
        console.log("Error")
        res.status(200).json({ status: 201, data: [] })
      }
    } else if (currentEvent) {
      var ResourcesCat = await prisma.events_details.findMany({
        orderBy: {
          date: "desc"
        },
        where: {
          deleted_at: null,
          NOT: {
            id: parseInt(currentEvent)
          },
          date: {
            gte: moment().format()
          }
        }
      })

      if (ResourcesCat.length > 0) {
        res.status(200).json({ status: 200, data: ResourcesCat })
      } else {
        console.log("Error")
        res.status(200).json({ status: 201, data: [] })
      }
    } else {
      ResourcesCat = await prisma.events_details.findMany({
        orderBy: {
          date: "desc"
        },
        where: {
          deleted_at: null,
          date: {
            gte: moment().format()
          }
        }
      })

      if (ResourcesCat.length > 0) {
        res.status(200).json({ status: 200, data: ResourcesCat })
      } else {
        console.log("Error")
        res.status(200).json({ status: 201, data: [] })
      }
    }
  }
}
