import prisma from "~/lib/prisma"

export default async function handler(req, res) {
  if (req.method == "POST") {
    const { accessType } = req.body
    console.log("accessType", accessType)

    if (accessType !== undefined) {
      var ResourcesData = await prisma.resources_category.findMany({
        orderBy: {
          cat_access: "desc"
        },
        where: { deleted_at: null, cat_access: parseInt(accessType) },
        select: {
          cat_id: true,
          cat_name: true,
          cat_access: true,
          created_at: true,
          updated_at: true,
          deleted_at: true,
          created_by: true,
          category_image: true,
          category_content: true,
          master_id: true,
          short_description: true,
          other_resources_category: true,
          slug: true
        }
      })

      if (ResourcesData.length > 0) {
        res.status(200).json({ status: 200, data: ResourcesData })
      } else {
        console.log("Error")
        res.status(200).json({ status: 201, data: [] })
      }
    } else {
      var ResourcesCat = await prisma.resources_category.findMany({
        orderBy: {
          cat_access: "desc"
        },
        where: { deleted_at: null },
        select: {
          cat_id: true,
          cat_name: true,
          cat_access: true,
          created_at: true,
          updated_at: true,
          deleted_at: true,
          created_by: true,
          category_image: true,
          category_content: true,
          short_description: true,
          master_id: true,
          other_resources_category: true,
          slug: true
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
