import { Prisma } from "@prisma/client";
import prisma from "~/lib/prisma";

export default async (req, res) => {
    try {
        if (req.method === "POST") {
            const { slug } = req.body;
            var related_products = []
           
            if (slug !='') {
                var slug1 = JSON.parse(slug)
                var ans = Array.isArray(slug1);
                
                if(slug1.length>0){
                    for(var i=0;i<slug1.length;i++){
                        related_products.push(slug1[i].id)
                    }
                    
                }else{
                    const getProducts = []
                }
              
                const getProducts = await prisma.products.findMany({
                                        where: {
                                            id: { in: related_products },
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
                    ProductsList: getProducts,
                };

                res.status(200).json(response);
            } else {
                var response = {
                    status: 501,
                    ProductsList: [],
                };
                res.status(501).json(response);
            }
        } else {
            res.status(400).json("Bad Request");
        }
    } catch (e) {
        // res.status(500).json({ status: 500, data: error });
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            // The .code property can be accessed in a type-safe manner
            if (e.code === "P2002") {
                console.log("There is a unique constraint violation, a new user cannot be created with this email");
            }
        }
        throw e;
    }
};
