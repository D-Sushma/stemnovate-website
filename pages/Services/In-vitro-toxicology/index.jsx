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

const texicologyScreen = ({ ProductData, ecomerce }) => {
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
            text: "Services",
            url: "/Services",
        },
        {
            id: 3,
            text: "In-vitro toxicology",
        },
    ];

    return (
        <>
            <Container title="In-vitro toxicology">
                <main className="ps-page ps-page--inner">
                    <div className="ps-page__header  breadcrumb-h service-breadcrumb-bg">
                        <div className="container ">
                            <BreadCrumb breacrumb={breadcrumb} />
                            <h1 className="text-center  text-white p-2">In-vitro toxicology</h1>
                        </div>
                    </div>
                    <div className="ps-page__content ">
                        <div className="ps-about">
                            <div className=" about-section ">
                                <div className="container center-box">
                                    <p className=" vertical-center">
                                        Stemnovate in vitro testing platform simulates the liver, heart and neuronal cell response to evaluate predictable and unpredictable toxins over the breadth of the genetically diverse human population. The processes are highly data-driven with high-resolution images, genomic profiles, biological information, molecular and metabolite profiles. The computational modelling can correlate, assimilate and connect the data more rapidly to help discover patterns.
                                        <br />
                                        We aim to automate the prediction of toxicity and that will be a game-changing technology for precision drug discovery.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-02-section">
                                <div className="container">
                                    <section className="ps-section--block-grid">
                                        <div className="ps-section__thumbnail">
                                            <a className="ps-section__image" href="#">
                                                <img src="/static/img/services/In-vitro-toxicology-assay.jpg" alt="In-vitro toxicology" />
                                            </a>
                                        </div>
                                        <div className="ps-section__content ">
                                            <div className="ps-section__desc center-box">
                                                {/* <div className="">
                                                    <div className="vertical-center"> */}
                                                <h3 className="text-white font-weight-bold">Platform features</h3>
                                                <p className="text-white">
                                                    Stemnovate is capable of designing and manufacturing a bespoke fluidic component to enhance repeatability of complex cell culture.
                                                    <br />
                                                    As a company, we are able to quickly design, validate and manufacture prototypes and complex designs.
                                                    <br />
                                                    Once a methodology is optimised the process can be set for reproducibility and automation.
                                                    <br />
                                                    <br />
                                                    We support projects to achieve a higher standard of accuracy, evaluating biocompatibility and tolerance.
                                                </p>
                                                {/* </div>
                                                </div> */}
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                            <div className="about-section">
                                <div className="container">
                                    <div className="py-5">
                                        <section className="ps-section--block-grid">
                                            <div className="col-md-4">
                                                <a href="/Applications/Disease-Modelling/Liver">
                                                    <div className="ion-wrapper text-center">
                                                        <img width="100" className="mb-5" src="/static/img/services/Liver-Platform.jpg" alt="Liver Platform Hepatotoxicity" />
                                                        <h3>
                                                            Liver Platform <br />
                                                            Hepatotoxicity
                                                        </h3>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="col-md-4">
                                                <a href="/Applications/Disease-Modelling/Heart">
                                                    <div className="ion-wrapper text-center">
                                                        <img width="100" className="mb-5" src="/static/img/services/Heart-cell-Platform.jpg" alt="Heart cell Platform Cardiac toxicity" />
                                                        <h3>
                                                            Heart cell Platform <br />
                                                            Cardiac toxicity
                                                        </h3>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="col-md-4">
                                                <a href="/Applications/Disease-Modelling/Neuron">
                                                    <div className="ion-wrapper text-center">
                                                        <img width="100" className="mb-5" src="/static/img/services/Neuron.jpg" alt="Neuronal cell Platform Neurotoxicity" />
                                                        <h3>
                                                            Neuronal cell Platform <br />
                                                            Neurotoxicity
                                                        </h3>
                                                    </div>
                                                </a>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <div className=" bg-02-section">
                                <div className="container">
                                    <section className="ps-section--block-grid ">
                                        <div className="ps-section__thumbnail">
                                            <a className="ps-section__image" href="#">
                                                <img src="/static/img/services/in-vitro-tox-lab.jpg" alt="Stemnovate in vitro toxicology" />
                                            </a>
                                        </div>
                                        <div className="ps-section__content ">
                                            <div className="ps-section__desc">
                                                {/* <div className="center-box">
                                                    <div className="vertical-center"> */}
                                                <h3 className="p-1 text-white font-weight-bold">Stemnovate in vitro toxicology</h3>
                                                <p className="text-white ">
                                                    Stemnovate in vitro toxicology assays use primary cells or induced pluripotent stem cell-derived cells such as heart, liver and neurons in controlled laboratory conditions to examine the toxic properties of compounds and mixtures.
                                                    <br />
                                                    <br />
                                                    We develop assays to examine the toxicity of xenobiotics at the cellular level replacing animal testing, where species differences often fail to represent human physiological responses.
                                                </p>
                                                {/* </div>
                                                </div> */}
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                            <div className=" about-section ">
                                <div className="container">
                                    <h3 className="p-1  text-center font-weight-bold">Quality control</h3>
                                    <p className="">We provide various quality tests to evaluate the quality of cell products. The tests use advanced bioinformatics with gene and protein expression.</p>
                                    <ol>
                                        <li>Mycoplasma testing</li>
                                        <li>Human viruses (HIV-1, HIV-2, HBV, HCV)</li>
                                        <li>Animal species specific viruses</li>
                                        <li>Mycobacterium testing</li>
                                    </ol>
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
export default connect((state) => state)(texicologyScreen);
