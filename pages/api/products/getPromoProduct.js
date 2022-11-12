import prisma from "~/lib/prisma";
export default async (req, res) => {
    try {
        if (req.method == "GET") {
            var getProducts = await prisma.products.findMany({
                where: { is_promotions: true },
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
                    type: true,
                    category: {
                        select: {
                            category_name: true,
                        },
                    },
                },
            });

            res.status(200).json(getProducts);
        } else {
            res.status(400).json("Bad Request");
        }
    } catch (error) {
        // res.status(500).json({ status: 500, data: error });
        throw error;
    }
};
