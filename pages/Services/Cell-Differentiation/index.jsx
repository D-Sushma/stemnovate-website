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
import ReactPlayer from "react-player";

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
            text: "Cellular Differentiation",
        },
    ];

    return (
        <>
            <Container title="Cellular Differentiation" description={`We use mechanical and chemical stimuli to direct IPSC to the liver, heart, neurons, bone and muscle cells, to name a few`}>
                <main className="ps-page ps-page--inner">
                    <div className="ps-page__header  breadcrumb-h service-breadcrumb-bg">
                        <div className="container ">
                            <BreadCrumb breacrumb={breadcrumb} /> <h1 className="text-center  text-white ">Cellular Differentiation</h1>
                        </div>
                    </div>

                    <div className="ps-page__content ">
                        <div className="ps-about">
                            <div className=" about-section ">
                                <div className="container center-box">
                                    <p className=" vertical-center">Since 2016, Stemnovate has actively created cellular models for humans and animals. Our proprietary techniques are used to create different types of liver, neuronal and heart cells.</p>
                                </div>
                            </div>

                            <div className=" bg-02-section">
                                <div className="container">
                                    <section className="ps-section--block-grid py-5">
                                        <div className="ps-section__thumbnail">
                                            <a className="ps-section__image" href="#">
                                                <img src="/static/img/services/cellular-differentiation.jpg" alt="Cellular Differentiation" />
                                            </a>
                                        </div>
                                        <div className="ps-section__content ">
                                            <div className="ps-section__desc ">
                                                <h2 className="p-1 text-white font-weight-bold">Cellular Differentiation</h2>
                                                <p className="text-white ">
                                                    All cells are derived from stem cells and obtain their functions as they mature. Cell differentiation is how progenitor cells change their functional or phenotypical type.
                                                    <br />
                                                    <br />
                                                    Interestingly, the differentiation process alters the cell's shape, size, and energy requirements.
                                                    <br />
                                                    <br />
                                                    We use mechanical and chemical stimuli to direct IPSC to the liver, heart, neurons, bone and muscle cells, to name a few.
                                                </p>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>

                            <div className=" about-section ">
                                <div className="container ">
                                    <div className="center-box">
                                        {" "}
                                        <div className="vertical-center">
                                            <h2 className="p-1 text-center font-weight-bold">More Information</h2>
                                            <p>
                                                Our differentiation processes are guided by several years of research, in-depth understanding of principles of development, advanced gene and protein expression studies along with novel methods of microengineering and computational data analysis.
                                                <br />
                                                <br />
                                                Stemnovate has established protocols that have higher efficiency of differentiation as well as reproducibility. This saves effort reinventing the wheel and ensures efficiency for the application development. <br />
                                                <br />
                                                You can request a quote to learn more about our application development.
                                                {/* You can build your project here and request a quote to learn more about our application development. */}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" about-section ">
                                <div className="container ">
                                    <div className="center-box">
                                        {" "}
                                        <div className="vertical-center">
                                            <div className="overflow-hidden">
                                                <div className="ps-banner__image ml-auto mr-auto" style={{ width: "100%" }}>
                                                    <video src="/static/img/services/ReprogrammingDifferentiation.mp4" autoPlay loop muted playsInline width="100%" height="100%"></video>
                                                    {/* <ReactPlayer playing loop className="react-player" url="/static/img/services/ReprogrammingDifferentiation.mp4" width="100%" height="100%" />
                                                     */}
                                                </div>
                                                {/* <img className="ps-banner__image" src="/static/img/products/cell-culture/work-with-us-video-cell-culture-page.mp4" alt="alt" width="500px" /> */}
                                            </div>
                                            {/* <img src="/static/img/services/stemnovate-cell-differentiation.gif" alt="cell-differentiation-symetics" /> */}
                                        </div>
                                    </div>
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
