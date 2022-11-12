import prisma from "~/lib/prisma"

export default async function handler(req, res) {
  if (req.method == "POST") {
    const { UserId, ResourcesID } = req.body
    console.log("req.body", req.body)
    if (ResourcesID !== "") {
      if (UserId) {
        var ResourcesData = await prisma.resources_data.findMany({
          where: {
            deleted_at: null,
            id: ResourcesID
          },
          select: {
            id: true,
            resources_id: true,
            datasheet_name: true,
            datasets_description: true,
            created_date: true,
            updated_date: true,
            sequencing: true,
            structural_variation: true,
            deleted_at: true,
            datasheet_files: true,
            resources_human_alignment: true,
            resources_structural_analysis: true
          }
        })
        console.log("ResourcesData", ResourcesData)
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
