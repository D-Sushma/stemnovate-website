import { decode } from "hex-encode-decode";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { baseUrl } from "~/repositories/Repository";
import Container from "~/components/layouts/Container";
import BreadCrumb from "~/components/elements/BreadCrumb";
import Shop from "~/components/partials/shop/Shop";
import SidebarShop from "~/components/shared/sidebar/SidebarShop";
import PromotionSecureInformation from "~/components/shared/sections/PromotionSecureInformation";
import useGetProducts from "~/hooks/useGetProducts";
import useProductGroup from "~/hooks/useProductGroup";
import ShopBestSellers from "~/components/partials/shop/ShopBestSellers";
import { ToastContainer } from "react-toastify";
import Subscribe from "~/components/shared/sections/Subscribe";

const breadcrumb = [
    {
        id: 1,
        text: "Home",
        url: "/",
    },

    {
        id: 2,
        text: "offers",
    },
];

function promotionOffer({ ProductData }) {
    const router = useRouter();
    const query = router.query;
    const { promoId } = router.query;
    console.log("ProductData", ProductData.data[0].title);
    const { loading, productItems, getPromotionalProducts } = useGetProducts();
    const { withGrid, withList } = useProductGroup();
    let products = "";

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        var queries = {};

        if (ProductData?.data[0].id) {
            var myquery = {
                promoId: ProductData?.data[0].id,
            };
            queries = Object.assign(queries, myquery);
        }
        getPromotionalProducts(queries);
        // console.log("productItems", productItems);
    }, [query]);

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
        <Container title={ProductData?.data[0]?.title}>
            <ToastContainer />
            <div className="ps-page ps-page--shopping">
                <div className="ps-page__header breadcrumb-h product-breadcrumb-bg">
                    <div className="container">
                        <BreadCrumb breacrumb={breadcrumb} />
                        <h1>Offers</h1>
                    </div>
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
}

export async function getServerSideProps({ query }) {
    var url = query.url;
    var ProductData = [];
    var categoryListList = [];
    // console.log(url, "promoId");
    if (url) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            url: url,
        });

        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
        };

        const res = await fetch(baseUrl + "/api/promotion/getAllpromotions", requestOptions);
        const myProductData = await res.json();

        if (myProductData.status == 200) {
            ProductData = myProductData;
        } else {
            ProductData = [];
        }
    }

    // // Pass data to the page via props
    return { props: { ProductData } };
}

export default promotionOffer;
