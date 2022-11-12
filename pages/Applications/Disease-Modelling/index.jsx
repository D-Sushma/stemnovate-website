import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useGetProducts from "~/hooks/useGetProducts";
import useProductGroup from "~/hooks/useProductGroup";
import BreadCrumb from "~/components/elements/BreadCrumb";
import SidebarShop from "~/components/shared/sidebar/SidebarShop";
import Shop from "~/components/partials/shop/Shop";
import PromotionSecureInformation from "~/components/shared/sections/PromotionSecureInformation";
import Container from "~/components/layouts/Container";
import Loader from "~/components/reuseable/Loader";
import Image from "~/components/elements/Image";
import { API } from "~/lib/constant";
import Link from "next/link";
import { Input, Button } from "antd";
import { baseUrl } from "~/repositories/Repository";
import { connect, useDispatch } from "react-redux";
import { toggleDrawer } from "~/store/app/action";
import useEcomerce from "~/hooks/useEcomerce";
import { Modal } from "antd";
import ReactHtmlParser from "react-html-parser";
import ProductList from "~/components/productList/productList";
import { ParallaxBanner } from "react-scroll-parallax";
import Subscribe from "~/components/shared/sections/Subscribe";
import { Tooltip } from "antd";

const diseaseScreen = ({ ProductData, ecomerce }) => {
    const Router = useRouter();
    const { slug } = Router.query;
    const { proload, product, getProductById } = useGetProducts();
    const [isLoading, setisLoading] = React.useState(false);
    const [searchterms, setsearchterms] = React.useState("");
    const [searchUrl, setsearchUrl] = React.useState("");
    const { withGrid } = useProductGroup();
    const [AddtoCart, setAddtoCart] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const { loading, addItem } = useEcomerce();
    const breadcrumb = [
        {
            id: 1,
            text: "Home",
            url: "/",
        },

        {
            id: 2,
            text: "Applications",
            url: "/Applications",
        },
        {
            id: 3,
            text: "Disease-Modelling",
        },
    ];

    return (
        <>
            <Container title="Disease-Modelling">
                <main className="ps-page ps-page--inner">
                    <div className="ps-page__header  breadcrumb-h application-breadcrumb-bg">
                        <div className="container ">
                            <BreadCrumb breacrumb={breadcrumb} />
                            <h1 className="text-center  text-white ">Disease Modelling</h1>
                        </div>
                    </div>

                    <div className="ps-page__content">
                        <div className="ps-about">
                            <div className=" about-section ">
                                <div className="container">
                                    <div className="center-box">
                                        <p className=" vertical-center">According to the FDA, Drug-Induced Liver Injury has been the most frequent single cause of safety-related drug marketing withdrawals for the past 50 years. It is often associated with acute liver failures.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-02-section">
                                <div className="container">
                                    <section className="ps-section--block-grid ">
                                        <div className="ps-section__thumbnail">
                                            <a className="ps-section__image" href="#">
                                                <img src="/static/img/applications/Liver.jpg" alt="LIVER" />
                                            </a>
                                        </div>
                                        <div className="ps-section__content">
                                            <div className="ps-section__desc ">
                                                <h2 className="text-white font-weight-bold">LIVER</h2>

                                                <p className="text-white">Drug-Induced Liver Injury is often associated with acute liver failures. Modelling drug metabolism and transport in the liver is central for drug development due to its contribution to drug clearance and bioavailability.</p>
                                                <p className="p-3">
                                                    {/* <button type="button" className="btn btn-lg button-orange text-white m-4 m-5">
                                                        Build Your Project
                                                    </button> */}
                                                    <a href="/contact-us" className="btn btn-lg button-orange text-white m-4 m-5">
                                                        Request A Quote
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>

                            <div className="about-section">
                                <div className="container">
                                    <section className="ps-section--block-grid ">
                                        <div className="ps-section__thumbnail">
                                            <a className="ps-section__image" href="#">
                                                <img src="/static/img/applications/Heart.jpg" alt="HEART" />
                                            </a>
                                        </div>
                                        <div className="ps-section__content">
                                            <div className="ps-section__desc">
                                                <h2 className=" font-weight-bold">HEART</h2>
                                                <p>Heart disease is a leading cause of death across the world. However, there are only a few ongoing clinical trials. One of the main challenges is the use of traditional testing models.</p>
                                                <p className="p-3">
                                                    {/* <button type="button" className="btn btn-lg button-orange text-white m-4 m-5">
                                                        Build Your Project
                                                    </button> */}
                                                    <a href="/contact-us" className="btn btn-lg button-orange text-white m-4 m-5">
                                                        Request A Quote
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>

                            <div className="bg-02-section">
                                <div className="container">
                                    <section className="ps-section--block-grid ">
                                        <div className="ps-section__thumbnail">
                                            <a className="ps-section__image" href="#">
                                                <img src="/static/img/applications/Neurons.jpg" alt="NEURONS" />
                                            </a>
                                        </div>
                                        <div className="ps-section__content">
                                            <div className="ps-section__desc">
                                                <h2 className="text-white font-weight-bold">NEURONS</h2>

                                                <p className="text-white">At Stemnovate, we generate different neuronal and glial cell types from induced pluripotent stem cells (iPSC). Our sensory neurons (PSNs) help advance pain research and hearing loss. Stemnovate neuronal cells are an alternative to animal testing with great potential for new drug screening.</p>
                                                <p className="p-3">
                                                    {/* <button type="button" className="btn btn-lg button-orange text-white m-4 m-5">
                                                        Build Your Project
                                                    </button> */}
                                                    <a href="/contact-us" className="btn btn-lg button-orange text-white m-4 m-5">
                                                        Request A Quote
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                            <div className="about-section">
                                <div className="container">
                                    <section className="ps-section--block-grid ">
                                        <div className="ps-section__thumbnail">
                                            <a className="ps-section__image" href="#">
                                                <img src="/static/img/applications/Multispecies-Platform.webp" alt="Multispecies Platform" />
                                            </a>
                                        </div>
                                        <div className="ps-section__content">
                                            <div className="ps-section__desc">
                                                <h2 className=" font-weight-bold">Multispecies Platform</h2>
                                                <p>
                                                    We reduce animal testing by offering multispecies cells to model disease and accelerate discoveries in the animal health industry.{" "}
                                                    <Tooltip title="Research: Stem Cell Study Creates Functional Neurons (equimanagement.com)">
                                                        <a rel="noreferrer" href="https://equimanagement.com/news/research-stem-cell-study-creates-functional-neurons-14811/" className="reference-website" target={"_blank"}>
                                                            In 2015, our CEO Dr Ruchi announced the first in the world functional neurons from equine iPSCs.
                                                        </a>
                                                    </Tooltip>{" "}
                                                    Since then, we have created models for several other animal species for industry and academia usage.
                                                </p>
                                                <p className="p-3">
                                                    {/* <button type="button" className="btn btn-lg button-orange text-white m-4 m-5">
                                                        Build Your Project
                                                    </button> */}
                                                    <a href="/contact-us" className="btn btn-lg button-orange text-white m-4 m-5">
                                                        Request A Quote
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                            <div className="about-section">
                                <div className="container">
                                    <ProductList slug="Disease-Modelling" />
                                </div>
                            </div>

                            <Subscribe />
                        </div>
                    </div>
                </main>
                {/* <ProductList slug="Biobanking" /> */}
            </Container>
        </>
    );
};

export async function getServerSideProps({ query }) {
    const slug = query.slug;
    var ProductData = [];
    var categoryListList = [];
    var data = "";
    if (slug != undefined) {
        data = slug[slug.length - 1];
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            slug: data,
        });

        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };

        const res = await fetch(baseUrl + "/api/products/catbyname", requestOptions);
        const myProductData = await res.json();
        (ProductData = myProductData), (categoryListList = myProductData.Products);
    }

    // // Pass data to the page via props
    return { props: { ProductData } };
}

// export default texicologyScreen;
export default connect((state) => state)(diseaseScreen);
