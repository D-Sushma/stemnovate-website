import React, { useEffect } from "react";
import { useRouter } from "next/router";
import useGetProducts from "~/hooks/useGetProducts";
import useProductGroup from "~/hooks/useProductGroup";
import BreadCrumb from "~/components/elements/BreadCrumb";
import SidebarShop from "~/components/shared/sidebar/SidebarShop";
import Shop from "~/components/partials/shop/Shop";
import PromotionSecureInformation from "~/components/shared/sections/PromotionSecureInformation";
import Container from "~/components/layouts/Container";
import { ToastContainer, toast } from "react-toastify";

const CategoryScreen = () => {
    const Router = useRouter();
    const { query } = Router;
    const { slug } = Router.query;
    const { loading, category, getCategoryBySlug } = useGetProducts();
    const { withGrid } = useProductGroup();

    useEffect(() => {
        console.log(slug);
        slug && getCategoryBySlug(slug);
    }, [slug]);

    let products;
    if (category) {
        if (category.ProductsList.length > 0) {
            if (query) {
                if (query.layout === "list") {
                    products = withList(category.ProductsList, loading, 4);
                } else if (query.layout === "grid") {
                    products = withGrid(category.ProductsList, loading, 4);
                    switch (query.columns) {
                        case "2":
                            products = withGrid(category.ProductsList, loading, 2);
                            break;
                        case "3":
                            products = withGrid(category.ProductsList, loading, 3);
                            break;
                        default:
                            products = withGrid(category.ProductsList, loading, 4);
                            break;
                    }
                } else {
                    products = withGrid(category.ProductsList, loading, 4);
                }
            } else {
                products = withGrid(category.ProductsList, loading, 4);
            }
        } else {
            products = <p>No product found.</p>;
        }
    }

    const breadcrumb = [
        {
            id: 1,
            text: "Home",
            url: "/",
        },
        {
            id: 2,
            text: "Products",
            url: "/Products",
        },

        {
            id: 3,
            text: category ? category.category_name : "Category",
        },
    ];

    return (
        <>
            <Container title="Shop">
                <ToastContainer />
                <div className="ps-page ps-page--shopping">
                    <div className="ps-page__header breadcrumb-h product-breadcrumb-bg">
                        <div className="container">
                            <BreadCrumb breacrumb={breadcrumb} />
                            <h1 className="ps-page__heading text-white">
                                {category ? category.category_name : "Category"}
                                <sup>({category && category.ProductsList.length > 0 ? category.ProductsList.length : 0})</sup>
                            </h1>
                        </div>
                    </div>
                    <div className="about-section">
                        <div className="container">
                            <div className="ps-page__content">
                                <div className="ps-layout--with-sidebar">
                                    <div className="ps-layout__left">
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
                </div>
            </Container>
            {/* <Container title={category ? category.category_name : "Category"}>
                <ToastContainer />
                <div className="ps-page ps-page--shopping">
                    <div className="ps-page__header breadcrumb-h product-breadcrumb-bg">
                        <div className="container">
                            <BreadCrumb breacrumb={breadcrumb} />
                            <h1 className="ps-page__heading text-white">
                                {category ? category.category_name : "Category"}
                                <sup>({category && category.ProductsList.length > 0 ? category.ProductsList.length : 0})</sup>
                            </h1>
                        </div>
                    </div>
                    <div className="container">
                        <div className="ps-page__content mt-3">
                            <Shop classes="ps-shop--grid" actions={false}>
                                {products}
                            </Shop>
                        </div>
                    </div>
                </div>
            </Container> */}
        </>
    );
};

export default CategoryScreen;
