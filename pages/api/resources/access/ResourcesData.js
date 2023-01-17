import prisma from "~/lib/prisma"

export default async function handler(req, res) {
  if (req.method == "POST") {
    const { tokenId, resources_token } = req.body
    console.log(" req.body", req.body)
    if (resources_token !== "") {
      if (tokenId !== "") {
        var ResourcesData = await prisma.resources.findMany({
          orderBy: {
            id: "asc"
          },
          where: {
            deleted_at: null,
            resources_status: parseInt(1),
            access_type: parseInt(tokenId),
            resources_id: resources_token
          },
          select: {
            id: true,
            resources_id: true,
            access_type: true,
            resources_name: true,
            resources_category: true,
            resources_price: true,
            resources_preview: true,
            created_at: true,
            resources_content: true,
            resourcesFileType: true,
            short_description: true,
            downloads: true,
            resources_status: true,
            resources_category_resourcesToresources_category: true,
            related_products: true
          }
        })

        if (ResourcesData.length > 0) {
          var ResourcesFilesData = []
          var resource_id = ResourcesData[0].id
          if (resource_id > 0) {
            ResourcesFilesData = await prisma.resources_data.findMany({
              orderBy: {
                id: "asc"
              },
              where: {
                resources_id: resource_id
              },
              select: {
                id: true,
                resources_id: true,
                datasheet_name: true,
                datasets_description: true,
                sequencing: true,
                structural_variation: true,
                datasheet_files: true,
                created_date: true
              }
            })
          }
          res.status(200).json({
            status: 200,
            data: ResourcesData,
            filedata: ResourcesFilesData
          })
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
