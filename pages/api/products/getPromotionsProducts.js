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

    return getProducts;
};
export default async (req, res) => {
    res.setHeader('Cache-Control', 's-maxage=86400')
    try {
        if (req.method == "GET") {
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
                    const delivery_type = promotionsData[0].delivery_type;
                    const gender = promotionsData[0].gender;
                    const ethnicity = promotionsData[0].ethnicity;

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

                    var getProducts = await prisma.products.findMany({
                        where: newQuery,
                        select: {
                            id: true,
                            product_name: true,
                            product_slug: true,
                            product_description: true,
                            short_description: true,
                            product_image: true,
                            primary_product_image: true,
                            product_details: true,
                            category: {
                                select: {
                                    category_name: true,
                                },
                            },
                        },
                    });
                    var mydata = await addPrice(getProducts, promotionsData);
                    res.status(200).json(mydata);

                } else {
                    res.status(200).json({ status: 201, data: [] });
                }
            }
        } else {
            res.status(400).json("Bad Request");
        }
    } catch (error) {
        throw error;
    }
};
