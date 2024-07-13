import prisma from "~/lib/prisma";
export default async function getAllProductList(req, res) {
  res.setHeader("Cache-Control", "s-maxage=86400");
  // eslint-disable-next-line no-useless-catch
  try {
    if (req.method == "GET") {
      var is_promotions = 0;
      const {
        is_promotion,
        _limit,
        _orderBy,
        name_contains,
        Delivery_Type,
        pType,
        gender,
      } = req.query;
      console.log("gender-----------", gender);
      console.log("Delivery_Type-----------", Delivery_Type);
      console.log("pType-----------", pType);
      const newQuery = {};
      if (Delivery_Type) {
        const deliveryTypeArray = Delivery_Type.split(",");
        newQuery["deliver_type"] = {
          in: deliveryTypeArray,
        };
      }
      if (pType) {
        // newQuery["category_id"] = parseInt(pType)
        const pTypeArray = pType?.split(",")?.map((ele) => {
          return parseInt(ele);
        });
        newQuery["category_id"] = {
          in: pTypeArray,
        };
      }
      if (gender) {
        const genderArray = gender.split(",");
        newQuery["productspecification"] = {
          // Sex: gender
          Sex: {
            in: genderArray,
          },
        };
      }
      console.log("newQuery", newQuery);

      let getProducts = {};
      if (is_promotion) {
        is_promotions = is_promotion;
        getProducts = await prisma.products.findMany({
          where: { is_promotions: JSON.parse(is_promotions) },
          select: {
            id: true,
            product_name: true,
            product_slug: true,
            product_description: true,
            CatalogueNumber: true,
            LotNumber: true,
            short_description: true,
            category_id: true,
            stock: true,
            deliver_type: true,
            product_image: true,
            primary_product_image: true,
            Product_details_pdf: true,
            description_tab: true,
            specification_tab: true,
            ViralScreening_tab: true,
            Pluripotency_tab: true,
            Differentiation_tab: true,
            microbiology_viralscreening: true,
            productdescription: true,
            productspecification: true,
            product_details: true,
            category: {
              select: {
                category_name: true,
              },
            },
          },
        });
      } else if (name_contains) {
        getProducts = await prisma.products.findMany({
          where: {
            product_name: {
              contains: name_contains,
            },
          },
          select: {
            id: true,
            product_name: true,
            product_slug: true,
            product_description: true,
            CatalogueNumber: true,
            LotNumber: true,
            short_description: true,
            category_id: true,
            stock: true,
            deliver_type: true,
            product_image: true,
            primary_product_image: true,
            Product_details_pdf: true,
            description_tab: true,
            specification_tab: true,
            ViralScreening_tab: true,
            Pluripotency_tab: true,
            Differentiation_tab: true,
            microbiology_viralscreening: true,
            productdescription: true,
            productspecification: true,
            product_details: true,
            category: {
              select: {
                category_name: true,
              },
            },
          },
        });
      } else if (Delivery_Type || pType || gender) {
        getProducts = await prisma.products.findMany({
          where: newQuery,
          select: {
            id: true,
            product_name: true,
            product_slug: true,
            product_description: true,
            CatalogueNumber: true,
            LotNumber: true,
            short_description: true,
            category_id: true,
            stock: true,
            deliver_type: true,
            product_image: true,
            primary_product_image: true,
            Product_details_pdf: true,
            description_tab: true,
            specification_tab: true,
            ViralScreening_tab: true,
            Pluripotency_tab: true,
            Differentiation_tab: true,
            microbiology_viralscreening: true,
            productdescription: true,
            productspecification: true,
            product_details: true,
            type: true,
            category: {
              select: {
                category_name: true,
              },
            },
          },
          take: parseInt(_limit),
          orderBy: {
            product_details: {
              sale_price: _orderBy,
            },
          },
        });
      } else {
        getProducts = await prisma.products.findMany({
          select: {
            id: true,
            product_name: true,
            product_slug: true,
            product_description: true,
            CatalogueNumber: true,
            LotNumber: true,
            short_description: true,
            category_id: true,
            stock: true,
            deliver_type: true,
            product_image: true,
            primary_product_image: true,
            Product_details_pdf: true,
            description_tab: true,
            specification_tab: true,
            ViralScreening_tab: true,
            Pluripotency_tab: true,
            Differentiation_tab: true,
            microbiology_viralscreening: true,
            productdescription: true,
            productspecification: true,
            product_details: true,
            category: {
              select: {
                category_name: true,
              },
            },
          },
          take: parseInt(_limit),
          orderBy: {
            product_details: {
              sale_price: _orderBy,
            },
          },
        });
      }
      res.status(200).json(getProducts);
    } else {
      res.status(400).json("Bad Request");
    }
  } catch (error) {
    throw error;
  }
}
