import prisma from "~/lib/prisma";
export default async (req, res) => {
    try {
        if (req.method == "GET") {
            var is_promotions = 0;
            const { is_promotion, _limit, _orderBy, name_contains, Delivery_Type, pType, gender } = req.query;
            console.log("given-query", req.query);
            const newQuery = {};
            if (Delivery_Type) {
                newQuery["deliver_type"] = Delivery_Type;
                // newQuery.push({
                //     deliver_type: Delivery_Type,
                // });
            }
            if (pType) {
                // newQuery.push({
                //     category_id: parseInt(pType),
                // });
                newQuery["category_id"] = parseInt(pType);
            }

            if (gender) {
                newQuery["productspecification"] = {
                    Sex: gender,
                };
                // newQuery.push({
                //     productspecification: {
                //         Sex: gender,
                //     },
                // });
            }

            console.log("newQuery", newQuery);

            if (is_promotion) {
                is_promotions = is_promotion;
                var getProducts = await prisma.products.findMany({
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
                    // take: parseInt(_limit),
                    // orderBy: {
                    //     product_details: {
                    //         sale_price: _orderBy,
                    //     },
                    // },
                });
            } else if (name_contains) {
                var getProducts = await prisma.products.findMany({
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
                    // take: parseInt(_limit),
                    // orderBy: {
                    //     product_details: {
                    //         sale_price: _orderBy,
                    //     },
                    // },
                });
            } else if (Delivery_Type || pType || gender) {
                // console.log("newQuery", newQuery);
                var getProducts = await prisma.products.findMany({
                    // where: {
                    //     category_id: parseInt(pType),
                    //     deliver_type: Delivery_Type,
                    //     productspecification: {
                    //         Sex: gender,
                    //     },
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
                var getProducts = await prisma.products.findMany({
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
            }
            // console.log(getProducts);
            res.status(200).json(getProducts);
        } else {
            res.status(400).json("Bad Request");
        }
    } catch (error) {
        // res.status(500).json({ status: 500, data: error });
        throw error;
    }
};
