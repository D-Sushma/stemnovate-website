import React, { useEffect, useState } from "react";
import Container from "~/components/layouts/Container";
import useGetProducts from "~/hooks/useGetProducts";
import useProductGroup from "~/hooks/useProductGroup";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import Slider from "react-slick";
import NextArrow from "~/components/elements/carousel/NextArrow";
import PrevArrow from "~/components/elements/carousel/PrevArrow";

const carouselSetting = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    lazyload: true,
    fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};

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
    const router = useRouter();

    return (
        <Container title="Promotions Products">
            <ToastContainer />
            <div className="ps-page ps-page--shopping">
                <div className="ps-page__content">
                    <div className="ps-about">
                        <div className="ps-top-banners">
                            <div className="ps-section--banner ps-banner--container">
                                <div className="ps-section__overlay">
                                    <div className="ps-section__loading"></div>
                                </div>
                                <Slider {...carouselSetting} className="ps-carousel">
                                    <div className="carousel-item">
                                        <div className="ps-banner" style={{ background: "#103178" }}>
                                            <div className="container-no-round">
                                                <div className="ps-banner__block">
                                                    <div className="ps-banner__content d-flex  justify-content-between">
                                                        <div className="d-flex flex-column ">
                                                            <div className="ps-banner__desc ">We have some fantastic promotions!</div>
                                                            <div className="ps-banner__desc "> Get up to 10% OFF on Live Human Fibroblasts!</div>
                                                            <div className="ps-banner__desc ">Don't miss out on these enormous savings!</div>
                                                        </div>
                                                        <div className="d-flex flex-column">
                                                            <div className="ps-banner__btn-group d-flex flex-column">
                                                                <div className="ps-banner__btn text-warning my-3 ">
                                                                    <img
                                                                        src="/static/img/icon/human.svg"
                                                                        alt="alt"
                                                                        style={{
                                                                            filter: "invert(60%) sepia(75%) saturate(1000%) hue-rotate(360deg) brightness(100%) contrast(100%)",
                                                                        }}
                                                                    />
                                                                    Human
                                                                </div>
                                                                <div className="ps-banner__btn text-warning my-3">
                                                                    <img
                                                                        src="/static/img/icon/animal.svg"
                                                                        alt="alt"
                                                                        style={{
                                                                            filter: "invert(60%) sepia(75%) saturate(1000%) hue-rotate(360deg) brightness(100%) contrast(100%)",
                                                                        }}
                                                                    />
                                                                    Animal
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <a className="bg-warning ps-banner__shop" href="/promotions-products/offers">
                                                                    Shop Now
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ps-banner__thumnail ps-banner__fluid">
                                                        <img className="ps-banner__image" src="/static/img/icon/promotion-one.webp" alt="alt" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div className="ps-banner" style={{ background: "#F0F2F5" }}>
                                            <div className="container-no-round">
                                                <div className="ps-banner__block">
                                                    <div className="ps-banner__content d-flex  justify-content-between">
                                                        <div className="d-flex flex-column gap-3">
                                                            <div className="ps-banner__desc ">You can win an Amazon voucher for sharing pictures of your work.</div>
                                                            <p className="h1"> Take a picture of your project using Stemnovate´s cells or media and join our competition to get the chance to win an Amazon voucher and a prime space on our website!</p>
                                                            <br /> <p className="h1">We have taken and shared incredible pictures of cells in our lab. Now, we would like to see yours!</p>
                                                            {/* </div>
                                        <div className="d-flex flex-column"> */}
                                                            <div className="ps-banner__btn-group ">
                                                                <a className="bg-warning ps-banner__shop" href="#">
                                                                    Enter now!
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ps-banner__thumnail ps-banner__fluid">
                                                        <img className="ps-banner__image" src="/static/img/icon/promo-bg.svg" alt="alt" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ProductScreen;
