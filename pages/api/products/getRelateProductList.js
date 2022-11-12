import prisma from "~/lib/prisma";
export default async (req, res) => {
    if (req.method == "GET") {
        const { _limit, _orderBy, pType, type } = req.query;

        console.log("pType", pType);

        var getProducts = await prisma.products.findMany({
            where: {
                NOT: [
                    {
                        type: type,
                    },
                    {
                        type: "Diagnostic",
                    },
                ],
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

        // console.log(getProducts);
        res.status(200).json(getProducts);
    } else {
        res.status(400).json("Bad Request");
    }
};
