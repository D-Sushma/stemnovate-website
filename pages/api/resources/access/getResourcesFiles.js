import prisma from "~/lib/prisma"

export default async function handler(req, res) {
  if (req.method == "POST") {
    const { UserId, ResourcesID } = req.body
    console.log("req.body", req.body)
    if (ResourcesID !== "") {
      if (UserId !== "") {
        var ResourcesData = await prisma.resources_data.findMany({
          where: {
            deleted_at: null,
            resources_id: ResourcesID
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
            pdf_po: true,
            pdf_company: true,
            pdf_reportno: true,
            pdf_catalogue_no: true,
            pdf_desc: true,
            pdf_result: true,
            pdf_bottom_name: true,
            pdf_bottom_sign: true  
            // resources_human_alignment: true,
            // resources_structural_analysis: true
          }
        })
        console.log("ResourcesData", ResourcesData)
        if (ResourcesData.length > 0) {
          res.status(200).json({ status: 200, data: ResourcesData })
        } else {
          console.log("Error")
          res.status(200).json({ status: 202, data: [] })
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
