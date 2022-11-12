import prisma from "~/lib/prisma";
function getDiscountedAmaount(price, discount) {
    var numVal1 = parseFloat(price);
    var numVal2 = parseFloat(discount) / 100;
    var totalValue = numVal1 - numVal1 * numVal2;
    return totalValue.toFixed(2);
}

const addPrice = (getProducts, promotionsData) => {
    for (let index = 0; index < getProducts.length; index++) {
        const element = getProducts[index];
        getProducts[index]["product_details"]["MRP"] = parseFloat(element.product_details.sale_price);
        getProducts[index]["product_details"]["sale_price"] = parseFloat(getDiscountedAmaount(element.product_details.sale_price, promotionsData[0].discount_percent));
        getProducts[index]["offers_details"] = promotionsData[0];
    }

    // for (const element of getProducts) {
    //     // const element = getProducts[index];
    //     getProducts["price"] = getDiscountedAmaount(element.product_details.sale_price, promotionsData[0].discount_percent);
    // }
    return getProducts;
};
export default async (req, res) => {
    try {
        if (req.method == "GET") {
            var is_promotions = 0;
            const { promoId } = req.query;
            const newQuery = {};
            if (promoId) {
                const promotionsData = await prisma.promotions_offer.findMany({
                    where: { id: promoId },
                });

                if (promotionsData.length > 0) {
                    const element = promotionsData[0].product_category;
                    var str_array = JSON.parse(element);
                    var category_id = [];
                    for (let index = 0; index < str_array.length; index++) {
                        const element = str_array[index];
                        category_id.push(parseInt(element.id));
                    }
                    var product_id = [];

                    const products_id = promotionsData[0].product_id;
                    if (products_id !== "") {
                        var prods_array = JSON.parse(products_id);

                        for (let index = 0; index < prods_array.length; index++) {
                            const element = prods_array[index];
                            product_id.push(parseInt(element.id));
                        }
                    }

                    // newQuery["in"] = category_id;

                    const delivery_type = promotionsData[0].delivery_type;
                    const gender = promotionsData[0].gender;
                    const ethnicity = promotionsData[0].ethnicity;
                    const discount_percent = promotionsData[0].discount_percent;

                    // const newQuery = {};

                    if (product_id.length > 0) {
                        newQuery["id"] = { in: product_id };
                    } else {
                        if (category_id !== "null") {
                            newQuery["category_id"] = { in: category_id };
                        }

                        if (delivery_type !== "null" && delivery_type !== "") {
                            newQuery["deliver_type"] = delivery_type;
                        }

                        if (gender !== "null" && gender !== "") {
                            newQuery["productspecification"] = {
                                Sex: gender,
                            };
                        }

                        if (ethnicity && ethnicity !== "null" && ethnicity !== "") {
                            newQuery["productspecification"] = {
                                Ethnicity: ethnicity,
                            };
                        }
                    }

                    console.log("newQuery", newQuery);

                    var getProducts = await prisma.products.findMany({
                        where: newQuery,
                        select: {
                            id: true,
                            product_name: true,
                            product_slug: true,
                            product_description: true,
                            // CatalogueNumber: true,
                            // LotNumber: true,
                            short_description: true,
                            // category_id: true,
                            // stock: true,
                            // deliver_type: true,
                            product_image: true,
                            // Product_details_pdf: true,
                            // description_tab: true,
                            // specification_tab: true,
                            // ViralScreening_tab: true,
                            // Pluripotency_tab: true,
                            // Differentiation_tab: true,
                            // microbiology_viralscreening: true,
                            // productdescription: true,
                            // productspecification: true,
                            product_details: true,
                            category: {
                                select: {
                                    category_name: true,
                                },
                            },
                        },
                    });
                    // if (discount_percent > 0) {
                    var mydata = await addPrice(getProducts, promotionsData);
                    res.status(200).json(mydata);
                    // } else {
                    //     res.status(200).json(getProducts);
                    // }

                    // console.log("PROMOPRO", mydata);
                } else {
                    console.log("Error");
                    res.status(200).json({ status: 201, data: [] });
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
