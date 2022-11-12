import { parseInt } from "lodash"
import prisma from "~/lib/prisma"
import { Prisma } from "@prisma/client"
export default async function handle(req, res) {
  try {
    if (req.method == "GET") {
      if (req.query.prod_id !== "") {
        var getProducts = []
        var array = req.query.prod_id
        for (let index = 0; index < array.length; index++) {
          const element = array[index]
          if (element.includes("S")) {
            console.log("first", element)
            const res = element.split("~")
            console.log("res[1] :>> ", res[1])
            var ResourcesData = await prisma.resources.findMany({
              where: {
                deleted_at: null,
                resources_status: 1,
                id: parseInt(res[1])
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
                // resources_content: true,
                resourcesFileType: true,
                short_description: true,
                downloads: true,
                resources_status: true,
                resources_category_resourcesToresources_category: true
              }
            })
            var myData = ResourcesData[0]
            myData.product_image = ResourcesData[0].resources_preview
            myData.product_details = {}
            myData.product_details.sale_price = ResourcesData[0].resources_price
            myData.product_details.shipping_cost = 0
            myData.product_name = ResourcesData[0].resources_name
            getProducts.push(myData)
          } else {
            var myProduct = await prisma.products.findUnique({
              where: { id: parseInt(element) },
              select: {
                id: true,
                product_name: true,
                product_slug: true,
                LotNumber: true,
                short_description: true,
                category_id: true,
                stock: true,
                product_image: true,
                product_details: true,
                type: true,
                category: {
                  select: {
                    category_name: true
                  }
                }
              }
            })
            getProducts.push(myProduct)
          }
        }
        var response = {
          status: 200,
          data: getProducts
        }

        res.status(200).json(response)
      }

      //   res.status(400).json(req.query.prod_id);
    } else {
      res.status(400).json("Bad Request")
    }
  } catch (e) {
    // res.status(500).json({ status: 500, data: error });
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      // The .code property can be accessed in a type-safe manner
      if (e.code === "P2002") {
        console.log(
          "There is a unique constraint violation, a new user cannot be created with this email"
        )
      }
    }
    throw e
  }
}
