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
import Subscribe from "~/components/shared/sections/Subscribe";
import { Tooltip } from "antd";
const categoryListScreen = ({ ProductData, ecomerce }) => {
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

    const handleAddItemToCart = (id, price, key) => {
        console.log("handleAddItemToCart", AddtoCart[key]);
        addItem({ id: id, quantity: AddtoCart[key], price: price }, ecomerce.cartItems, "cart");
        dispatch(toggleDrawer(true));
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const AddCart = (index) => {
        console.log("index", index);

        const NewCart = [...AddtoCart];
        let cartval = parseInt(AddtoCart[index]);
        var newval = cartval + parseInt(1);
        NewCart[index] = newval;
        setAddtoCart(NewCart);
        console.log(NewCart);
    };

    const RemoveCart = (index) => {
        if (AddtoCart) {
            console.log("index", index);

            const NewCart = [...AddtoCart];
            let cartval = parseInt(AddtoCart[index]);
            var newval = cartval - parseInt(1);
            NewCart[index] = newval;
            setAddtoCart(NewCart);
            console.log(NewCart);
        }
    };

    const getcategoryListBySlug = async (params) => {
        const newbreadcrumb = [
            {
                id: 1,
                text: "Home",
                url: "/",
            },
            {
                id: 2,
                text: "Product",
                url: "/Products",
            },
            {
                id: 3,
                text: "Biobanking",
            },
        ];
        var urldata = "/Products";
        for (let index = 0; index < slug.length; index++) {
            const element = slug[index];
            if (index <= slug.length) {
                var urldata = urldata + "/" + element;
            } else {
                var urldata = urldata + "/#";
            }
            var bdc = {
                id: 3 + index,
                text: element,
                url: urldata,
            };
            newbreadcrumb.push(bdc);
        }
        setbreadcrumb(newbreadcrumb);
    };

    const myLoader = ({ src }) => {
        return src;
    };

    const breadcrumb = [
        {
            id: 1,
            text: "Home",
            url: "/",
        },

        {
            id: 2,
            text: "Biobanking",
            url: "/Products/Biobanking",
        },
        {
            id: 3,
            text: "Primary Cells Animal",
        },
    ];

    return (
        <>
            <Container title="Primary Cells Animal" description={`We have animal fibroblasts frozen and live primary dermal cells derived from dogs of different types like`}>
                <main className="ps-page ps-page--inner">
                    <div className="ps-page__header  breadcrumb-h product-breadcrumb-bg">
                        <div className="container ">
                            <BreadCrumb breacrumb={breadcrumb} />
                        </div>
                        <h1 className="text-center  text-white p-2">Primary Cells Animal</h1>
                    </div>

                    <div className="ps-page__content">
                        <div className="ps-about">
                            <div className=" about-section ">
                                <div className="container">
                                    <div className="center-box">
                                        <p className=" vertical-center">Primary cells, like fibroblasts and blood cells, are the foundation material of cellular studies. But often commercial products lack information about derivation, sourcing, and characterisation. This can impact not only research output but also downstream applications. Cell authentication is becoming an important requirement for publishing in high impact journals and acquiring regulatory approval. Our cells are unique as they have the genotype information available for major drug-metabolizing enzymes such as Cytochrome P450.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-02-section-new">
                                <div className="bg-02-section-animal"></div>
                                <div className="container">
                                    <section className="ps-section--block-grid ">
                                        <div className="ps-section__thumbnail">
                                            <a className="ps-section__image" href="#">
                                                <img src="/static/img/products/Primary-Cells-Animal/Animal-Primary-Dermal-cells.jpg" alt="ANIMAL PRIMARY DERMAL CELLS" />
                                            </a>
                                        </div>
                                        <div className="ps-section__content">
                                            <div className="ps-section__desc ">
                                                <h2 className="text-white">ANIMAL PRIMARY DERMAL CELLS</h2>
                                                <p className="text-white">
                                                    Dermal Fibroblasts are responsible for producing the extracellular matrix forming the connective tissue of the skin and they provide an excellent model to study many aspects of cell physiology such as skin aging, wound healing, skin diseases and pathogen responses. Primary dermal cells can also be used for{" "}
                                                    <Tooltip title="Reprogramming of human somatic cells to pluripotency with defined factors - PubMed (nih.gov)">
                                                        <a rel="noreferrer" className="reference-website" target={"_blank"} href="https://pubmed.ncbi.nlm.nih.gov/18157115">
                                                            reprogramming
                                                        </a>
                                                    </Tooltip>{" "}
                                                    and induced pluripotency studies.{" "}
                                                    <Tooltip title="Efficient and rapid generation of induced pluripotent stem cells from human keratinocytes - PubMed (nih.gov)">
                                                        <a rel="noreferrer" className="reference-website" target={"_blank"} href="https://pubmed.ncbi.nlm.nih.gov/18931654/">
                                                            Our Animal cells are ethically sourced and certified
                                                        </a>
                                                    </Tooltip>
                                                    , with tissues obtained during routine surgeries to support our commitment to Replacement, Refinement and Reduction of animal testing. These tissues are then processed, plated, and expanded in culture where they are monitored for purity and quality, as well as undergoing viral and mycoplasma testing. Our cells can be sold live in culture to the UK or as frozen vials:
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
                                                <img src="/static/img/products/Primary-Cells-Animal/Live-primary-Dermal-cells.webp" alt="LIVE PRIMARY DERMAL CELLS" />
                                            </a>
                                        </div>
                                        <div className="ps-section__content">
                                            <div className="ps-section__desc">
                                                <h2>LIVE PRIMARY DERMAL CELLS</h2>
                                                <p>These Fibroblasts are freshly plated 24 hours before delivery and as such there is no need to worry about plating viability, just change the media and you’re ready to go! The key features of the live primary animal dermal cells are:</p>
                                                <ol>
                                                    <li>
                                                        <p>1. Highly proliferative and healthy, sent live in culture</p>
                                                    </li>
                                                    <li>
                                                        <p>2. High cell counts (~0.5 million cells per flask)</p>
                                                    </li>
                                                    <li>
                                                        <p>3. Ideal for 2D and 3D cultures, microfluidic devices, co-cultures, tissue engineering, and skin models</p>
                                                    </li>
                                                    <li>
                                                        <p>4. Available as single vials or reserved lots</p>
                                                    </li>
                                                </ol>
                                                <a href="/Products?Delivery_Type=Live&pType=14" className="btn btn-lg button-orange text-white m-4 m-5">
                                                    View Products
                                                </a>
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
                                                <img src="/static/img/products/Primary-Cells-Animal/Frozen-Primary-Dermal-cells.jpg" alt="FROZEN PRIMARY DERMAL CELLS" />
                                            </a>
                                        </div>
                                        <div className="ps-section__content">
                                            <div className="ps-section__desc">
                                                <h2>FROZEN PRIMARY DERMAL CELLS</h2>
                                                <p>These fibroblasts have been isolated, plated and expanded in culture before being harvested for cryopreservation to ensure the highest purity, viability, and plating efficiency.</p>
                                                <ol>
                                                    <li>
                                                        <p>1. Highly proliferative and healthy (~90% viability)</p>
                                                    </li>
                                                    <li>
                                                        <p>2. High cell counts (~0.5 million cells per vial)</p>
                                                    </li>
                                                    <li>
                                                        <p>3. Available as single vials or reserved lots</p>
                                                    </li>
                                                    <li>
                                                        <p>4. Ideal for 2D and 3D cultures, microfluidic devices, co-cultures, tissue engineering, and skin models.</p>
                                                    </li>
                                                </ol>
                                                <a href="/Products?Delivery_Type=Frozen&pType=14" className="btn btn-lg button-orange text-white m-4 m-5">
                                                    View Products
                                                </a>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>

                            <div className="about-section">
                                <div className="container">
                                    <p className="p-1">
                                        We are flexible in the service we can provide so if you are curious how else we can support your project please{" "}
                                        <a href="mailto:info@stemnovate.co.uk" className="text-orange">
                                            contact us.
                                        </a>{" "}
                                    </p>
                                    <p className="base-bg-primary text-white p-2">Stemnovate cell production follows compliance and regulations in the UK. We hold the Human Tissue Act License, and all cells are sourced under complete consent for commercial use.</p>
                                    <ProductList slug="Primary-Cells-Animal" />
                                </div>
                            </div>

                            <Subscribe />
                        </div>
                    </div>
                </main>
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

// export default categoryListScreen;
export default connect((state) => state)(categoryListScreen);
