import prisma from "~/lib/prisma"

export default async function handler(req, res) {
  if (req.method == "POST") {
    const { UserId, ResourcesID } = req.body
    if (ResourcesID !== "") {
      if (UserId) {
        var ResourcesData = await prisma.resorces_purchese_details.findMany({
          where: {
            deleted_at: null,
            user_id: parseInt(UserId),
            resources_id: parseInt(ResourcesID)
          }
          
        })
        if (ResourcesData.length > 0) {
          res.status(200).json({ status: 200, data: ResourcesData })
        } else {
          console.log("Error")
          res.status(200).json({ status: 201, data: [] })
        }
      } else {
        res
          .status(200)
          .json({ status: 201, data: [], message: "Token Not given" })
      }
    } else {
      res
        .status(200)
        .json({ status: 201, data: [], message: "Token Not given" })
    }
  } else {
    res.status(200).json("unAuthorization Access ...")
  }
}
