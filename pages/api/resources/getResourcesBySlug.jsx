import prisma from "~/lib/prisma"

export default async function handler(req, res) {
  if (req.method == "POST") {
    const { resourcesSlug } = req.body

    if (resourcesSlug) {
      var ResourcesData = await prisma.resources_category.findMany({
        orderBy: {
          cat_id: "asc"
        },
        where: { deleted_at: null, slug: resourcesSlug },
        select: {
          cat_id: true,
          slug: true,
          cat_name: true,
          cat_access: true,
          created_at: true,
          updated_at: true,
          deleted_at: true,
          created_by: true,
          category_image: true,
          short_description: true,
          category_content: true,
          master_id: true,
          other_resources_category: true,
          shareimage: true
        }
      })

      if (ResourcesData.length > 0) {
        res.status(200).json({ status: 200, data: ResourcesData })
      } else {
        console.log("Error")
        res.status(200).json({ status: 201, data: [] })
      }
    } else {
      res.status(200).json("unAuthenticated Access")
    }
  }
}
