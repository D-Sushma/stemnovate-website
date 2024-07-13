import { Prisma } from "@prisma/client";
import prisma from "~/lib/prisma";

export default async (req, res) => {
     res.setHeader('Cache-Control', 's-maxage=86400')
    try {
        if (req.method === "POST") {
            const { slug } = req.body;
            const categorie = await prisma.category.findMany({
                where: {
                    slug,
                    status: 1,
                    deleted_at: null,
                },
                select: {
                    id: true,
                    category_name: true,
                    short_description: true,
                    urllink: true,
                    slug: true,
                },
            });
            if (categorie.length > 0) {
                const categories = await prisma.category.findMany({
                    where: {
                        parentcategory: categorie[0].id,
                        status: 1,
                        deleted_at: null,
                        is_perent: 0,
                    },
                    select: {
                        id: true,
                        category_name: true,
                        parentcategory: true,
                        image: true,
                        short_description: true,
                        status: true,
                        created_date: true,
                        updated_date: true,
                        is_perent: true,
                        urllink: true,
                        slug: true,
                        category: {
                            select: {
                                category_name: true,
                            },
                        },
                    },
                });
                const getProducts = await prisma.products.findMany({
                    where: {
                        category_id: parseInt(categorie[0].id),
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
                        resources_id: true,
                        type: true,
                        category: {
                            select: {
                                category_name: true,
                            },
                        },
                    },
                });
                var response = {
                    status: 200,
                    category_name: categorie[0].category_name,
                    short_description: categorie[0].short_description,
                    Products: categories,
                    ProductsList: getProducts,
                };

                res.status(200).json(response);
            } else {
                var response = {
                    status: 501,
                    category_name: "",
                    short_description: "",
                    Products: [],
                    ProductsList: [],
                };
                res.status(501).json(response);
            }
        } else {
            res.status(400).json("Bad Request");
        }
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            if (e.code === "P2002") {
             
            }
        }
        throw e;
    }
};
