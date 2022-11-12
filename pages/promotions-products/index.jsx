import React, { useState, useEffect, Fragment } from "react";
import Container from "~/components/layouts/Container";
import useGetProducts from "~/hooks/useGetProducts";
import useProductGroup from "~/hooks/useProductGroup";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import Subscribe from "~/components/shared/sections/Subscribe";
import PromotionsBanner from "~/components/partials/promotions-banner";
import { FaArrowCircleRight } from "react-icons/fa";
import Slider from "react-slick";
import NextArrow from "~/components/elements/carousel/NextArrow";
import PrevArrow from "~/components/elements/carousel/PrevArrow";

const carouselSetting = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    autoplay: true,
    dots: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};

import { baseUrl } from "~/repositories/Repository";

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

const ProductScreen = ({ promotionDetails }) => {
    const { loading, productItems, getProducts } = useGetProducts();
    const { withGrid, withList } = useProductGroup();
    const router = useRouter();
    const { query } = router;
    const { _limit, _orderBy, gender, Delivery_Type, pType } = router.query;
    let products = "";

    const [promotions, setPromotions] = useState([]);

    useEffect(() => {
        // console.log("promotionDetails", promotionDetails);
        if (promotionDetails.status === 200) {
            setPromotions(promotionDetails.data);
        }
    }, []);
    const boxStyle = {
        forP: { lineHeight: 1.3 },
    };

    return (
        <Container title="Promotions Products">
            <ToastContainer />
            <main id="homepage-one">
                <div className="ps-page ps-page--shopping">
                    <div className="ps-page__content">
                        <div className="ps-about">
                            <div className="ps-top-banners">
                                <div className="ps-section--banner ps-banner--container">
                                    <div className="ps-section__overlay">
                                        <div className="ps-section__loading"></div>
                                    </div>
                                    <Slider {...carouselSetting} className="ps-carousel">
                                        {promotions &&
                                            promotions?.map((data, key) =>
                                                data?.banner_type === "Carousel" ? (
                                                    <div className="carousel-item" key={key}>
                                                        <div className="ps-banner" style={{ background: "#103178" }}>
                                                            <div className="container-no-round">
                                                                <div className="ps-banner__block">
                                                                    <div className="ps-banner__content d-flex  justify-content-between">
                                                                        <div className="d-flex flex-column ">
                                                                            <div
                                                                                className="ps-banner__title text-white"
                                                                                dangerouslySetInnerHTML={{
                                                                                    __html: data?.promo_content,
                                                                                }}></div>
                                                                            <div>
                                                                                <a className="bg-warning ps-banner__shop" href={`${data?.promo_type == "Promotions" ? "/promotions_offer/" : ""}${data.url}`}>
                                                                                    {data.btn_text}
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="ps-banner__thumnail ps-banner__fluid">
                                                                        <img className="ps-banner__image" src={`${process.env.AWS_S3BUCKET_URL}${data.image}`} alt="alt" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : null
                                            )}
                                    </Slider>
                                </div>
                            </div>
                            <div className="blog-section py-5">
                                <h3 className="ps-section__title text-uppercase text-center">
                                    <span className="font-weight-bolder  ">Offers</span>
                                </h3>

                                <div className="container">
                                    <div className="ps-section__content py-5">
                                        <div className="container">
                                            <div className=" row d-flex justify-content-center">
                                                {promotions &&
                                                    promotions?.map((data, key) => (
                                                        <Fragment key={key}>
                                                            {data?.banner_type === "Card" ? (
                                                                <div className="col-md-6 col-sm-6 d-flex flex-grow-1 mb-3">
                                                                    <div className="card ">
                                                                        <img className="" style={{ width: "100%" }} src={`${process.env.AWS_S3BUCKET_URL}${data.image}`} alt="alt" />
                                                                        <div className="card-body p-0 mb-3">
                                                                            <h2 className="card-title mt-3">{data.title}</h2>
                                                                            <p
                                                                                className="card-text mb-5"
                                                                                dangerouslySetInnerHTML={{
                                                                                    __html: data?.promo_content,
                                                                                }}></p>
                                                                        </div>
                                                                        <a href={`${data?.promo_type == "Promotions" ? "/promotions_offer/" : ""}${data.url}`} className="h3 text-right mt-2">
                                                                            <span className="button-link text-orange">
                                                                                {data.btn_text} <FaArrowCircleRight className="mb-1" />
                                                                            </span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            ) : null}
                                                        </Fragment>
                                                    ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Subscribe />
                        </div>
                    </div>
                </div>
            </main>
        </Container>
    );
};

export async function getServerSideProps({ query }) {
    var promotionDetails = [];
    var requestOptions = {
        method: "GET",
    };

    const res = await fetch(baseUrl + "/api/promotion/getAllpromotions", requestOptions);
    const myPromotionData = await res.json();
    // console.log("myPromotionData", myPromotionData);
    if (myPromotionData.status == 200) {
        promotionDetails = myPromotionData;
    } else {
        promotionDetails = [];
    }

    // Pass data to the page via props
    return { props: { promotionDetails } };
}

export default ProductScreen;
