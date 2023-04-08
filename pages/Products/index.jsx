import React, { useEffect, useState } from "react";
import Container from "~/components/layouts/Container";
import BreadCrumb from "~/components/elements/BreadCrumb";
import Shop from "~/components/partials/shop/Shop";
import SidebarShop from "~/components/shared/sidebar/SidebarShop";
import PromotionSecureInformation from "~/components/shared/sections/PromotionSecureInformation";
import useGetProducts from "~/hooks/useGetProducts";
import useProductGroup from "~/hooks/useProductGroup";
import ShopBestSellers from "~/components/partials/shop/ShopBestSellers";
import { useRouter } from "next/router";
import { baseUrl } from "~/repositories/Repository";
import Subscribe from "~/components/shared/sections/Subscribe";

import { ToastContainer, toast } from "react-toastify";

const breadcrumb = [
    {
        id: 1,
        text: "Home",
        url: "/",
    },

    {
        id: 2,
        text: "Products",
    },
];

const ProductScreen = () => {
    const { loading, productItems, getProducts } = useGetProducts();
    const { withGrid, withList } = useProductGroup();
    const router = useRouter();
    const { query } = router;
    const { _limit, _orderBy, gender, Delivery_Type, pType } = router.query;
    let products = "";

    const [productList, setProductList] = useState([]);
    var titleName = "Our Products ";
    var ogImg = "https://stemnovate.co.uk/static/img/products/Products_Image.jpeg";

    useEffect(() => {
        // console.log("myQuery", myQuery);
        console.log("query", query);

        // console.log("newQuery", asPath);

        var queries = {
            _limit: 10,
        };

        if (_limit || _orderBy) {
            queries = Object.assign(queries, query);
        }

        if (Delivery_Type) {
            queries = Object.assign(queries, query);
        }

        if (pType) {
            queries = Object.assign(queries, query);
        }

        if (gender) {
            queries = Object.assign(queries, query);
        }

        // const returnedTarget = Object.assign(queries, source);
        console.log(queries);
        console.log("titleName", titleName);
        getProducts(queries);
        // getAllProductList()
    }, [query]);

    if (Delivery_Type) {
        titleName = titleName + " - " + Delivery_Type;
    }

    if (pType) {
        if (pType == 13) {
            titleName = titleName + " - Human";
        }
        if (pType == 14) {
            titleName = titleName + " - Animal";
        }
    }

    if (gender) {
        titleName = titleName + " - " + gender;
    }

    // const getAllProductList = async () => {
    //     try {
    //         var raw = JSON.stringify({
    //             slug: "",
    //         });
    //         var myHeaders = new Headers();
    //         myHeaders.append("Content-Type", "application/json");

    //         var requestOptions = {
    //             method: "POST",
    //             headers: myHeaders,
    //             body: raw,
    //             redirect: "follow",
    //         };

    //         const res = await fetch(baseUrl + "/api/products/getAllProductList", requestOptions);
    //         const myProductData = await res.json();
    //         // console.log(myProductData);
    //         if (myProductData.status == 200) {
    //             setProductList(myProductData.ProductsList);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    if (productItems && productItems.length > 0) {
        // console.log("productItems", productItems);
        if (query) {
            if (query.layout === "list") {
                products = withList(productItems, loading, 4);
            } else if (query.layout === "grid") {
                products = withGrid(productItems, loading, 4);
                switch (query.columns) {
                    case "2":
                        products = withGrid(productItems, loading, 2);
                        break;
                    case "3":
                        products = withGrid(productItems, loading, 3);
                        break;
                    default:
                        products = withGrid(productItems, loading, 4);
                        break;
                }
            } else {
                products = withGrid(productItems, loading, 4);
            }
        } else {
            products = withGrid(productItems, loading, 4);
        }
    }

    return (
        <Container title={titleName} ogimg={ogImg}>
            <ToastContainer />
            <div className="ps-page ps-page--shopping">
                <div className="ps-page__header breadcrumb-h product-breadcrumb-bg">
                    <div className="container">
                        <BreadCrumb breacrumb={breadcrumb} />
                        <h1>Products</h1>
                    </div>
                    {/* <p className="text-center  text-white p-2 h1">Products</p> */}
                </div>
                <div className="ps-page__content">
                    <div className="ps-about">
                        <div className="about-section">
                            <div className="container">
                                <div className="ps-page__content">
                                    <div className="ps-layout--with-sidebar">
                                        <div className="ps-layout__left p-3">
                                            <SidebarShop />
                                        </div>
                                        <div className="ps-layout__right">
                                            {/* <ShopBestSellers /> */}
                                            <Shop classes="ps-shop--grid">{products}</Shop>
                                            {/* <PromotionSecureInformation /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Subscribe />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ProductScreen;
