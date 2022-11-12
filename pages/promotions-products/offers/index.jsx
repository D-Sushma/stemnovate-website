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

const offers = () => {
    const { loading, productItems, getProducts } = useGetProducts();
    const { withGrid, withList } = useProductGroup();
    const router = useRouter();
    const { query } = router;
    const { _limit, _orderBy, gender, Delivery_Type, pType } = router.query;
    let products = "";

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        var queries = {
            _limit: 10,
            is_promotion: true,
        };

        if (_limit || _orderBy) {
            // queries = {
            //     _limit: _limit,
            //     _orderBy: _orderBy,
            // };
            queries = Object.assign(queries, query);
        }

        // if (_limit) {
        //     queries = {
        //         _limit: _limit,
        //     };
        // }

        if (gender) {
            // queries = {
            //     gender: gender,
            // };
            queries = Object.assign(queries, query);
        }

        if (Delivery_Type) {
            // queries = {
            //     Delivery_Type: Delivery_Type,
            // };
            queries = Object.assign(queries, query);
        }

        if (pType) {
            // queries = {
            //     pType: pType,
            // };
            queries = Object.assign(queries, query);
        }

        getProducts(queries);
        // getAllProductList()
    }, [query]);

    if (productItems && productItems.length > 0) {
        console.log("productItems", productItems);
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
        <Container title="Offers Product">
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
};

export default offers;
