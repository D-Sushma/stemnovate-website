import prismaConnect from "lib/prisma"

export default async function handler(req, res) {
  try {
      const promotionsData = await prismaConnect.home_about_section.findMany({
        where: { published: true }
      })
      const serviceData = await prismaConnect.home_services.findMany({
        where: { published: true },
        orderBy: {
          id: "asc",
      },
      })

      const promotionOfferData = await prismaConnect.home_promotion_reviews.findMany({
        where: { section_type: 'Promotion', published: true },
        orderBy: {
          id: "asc",
      },
      })
      const reviewsData = await prismaConnect.home_promotion_reviews.findMany({
        where: { section_type: 'Review', published: true },
        orderBy: {
          id: "asc",
      },
      })
      const clientsData = await prismaConnect.home_clients.findMany({
        where: { published: true },
        orderBy: {
          id: "asc",
      },
      })
      if (promotionsData.length > 0) {
        res.status(200).json({ status: 200, data: promotionsData, serviceData: serviceData, promotionOfferData: promotionOfferData, reviewsData: reviewsData, clientsData: clientsData })
      } else {
        // console.log("Error")
        res.status(200).json({ status: 201, data: [], serviceData:[], promotionOfferData:[], reviewsData:[], clientsData: [] })
      }
  } catch (e) {
    // console.log("e", e)
    res
      .status(200)
      .json({ status: 500, data: [], massage: "something Went to wrong" })
  }
}
