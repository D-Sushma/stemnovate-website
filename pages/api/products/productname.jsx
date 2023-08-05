import prisma from "~/lib/prisma";

function getDiscountedAmaount(price, discount) {
    const numVal1 = parseFloat(price);
    const numVal2 = parseFloat(discount) / 100;
    const totalValue = numVal1 - numVal1 * numVal2;
    return totalValue.toFixed(2);
}

const addPrice = (getProducts, promotionsData) => {
    for (let index = 0; index < getProducts.length; index++) {
        const element = getProducts[index];
        getProducts[index].product_details.MRP = parseFloat(element.product_details.sale_price);
        getProducts[index].product_details.sale_price = parseFloat(getDiscountedAmaount(element.product_details.sale_price, promotionsData[0].discount_percent));
        // eslint-disable-next-line prefer-destructuring
        getProducts[index].offers_details = promotionsData[0];
    }

    return getProducts;
};
export default async (req, res) => {
    try {
        if (req.method == "POST") {
            const { slug, promoId } = req.body;

            if (promoId) {
                const promotionsData = await prisma.promotions_offer.findMany({
                    where: { id: promoId },
                });
                if (promotionsData.length > 0) {
                    const element = promotionsData[0].product_category;
                    const str_array = JSON.parse(element);
                    const category_id = [];

                    var getProducts = await prisma.products.findMany({
                        where: {
                            product_slug: slug,
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
                            type: true,
                            category: {
                                select: {
                                    category_name: true,
                                    slug: true,
                                    id: true,
                                },
                            },
                        },
                    });
                    if (getProducts.length > 0) {
                        const mydata = await addPrice(getProducts, promotionsData);
                        // console.log("PROMOPRO", mydata);

                        var response = {
                            status: 200,
                            slug: slug.replace(/-/g, " "),
                            ProductsList: mydata,
                        };

                        res.status(200).json(response);
                    } else {
                        var response = {
                            status: 501,
                            slug: slug.replace(/-/g, " "),
                            ProductsList: [],
                        };

                        res.status(501).json(response);
                    }
                } else {
                    console.log("Error");
                    res.status(200).json({ status: 201, data: [] });
                }
            } else {
                var getProducts = await prisma.products.findMany({
                    where: {
                        product_slug: slug,
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
                                slug: true,
                                id: true,
                            },
                        },
                    },
                });
                if (getProducts.length > 0) {
                    var response = {
                        status: 200,
                        slug: slug.replace(/-/g, " "),
                        ProductsList: getProducts,
                    };

                    res.status(200).json(response);
                } else {
                    var response = {
                        status: 501,
                        slug: slug.replace(/-/g, " "),
                        ProductsList: [],
                    };

                    res.status(501).json(response);
                }
            }
        } else {
            res.status(400).json("Bad Request");
        }
    } catch (error) {
        // res.status(500).json({ status: 500, data: error });
        throw error;
    }
};
