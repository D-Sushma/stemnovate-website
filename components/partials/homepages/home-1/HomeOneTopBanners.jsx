import React from "react";
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
const HomeOneTopBanners = () => {
    return (
        <section className="ps-section--banner ps-top-banners">
            <div className="ps-section__overlay">
                <div className="ps-section__loading"></div>
            </div>
            <Slider {...carouselSetting} className="ps-carousel ps-carousel--fullwidth ">
                <div>
                    <div
                        className="ps-banner"
                        style={{
                            backgroundImage: `url('/static/img/banners/1Banner.jpg')`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            width: "100%",

                            margin: "0 auto",
                        }}>
                        <div className="container container-initial">
                            <div className="ps-banner__block ml-3">
                                <div className="ps-banner__content">
                                    <h1 className="ps-banner__title text-white text-weight-bolder">REDEFINING</h1>
                                    <h1 className="ps-banner__desc text-white text-weight-bolder">DRUG DISCOVERY</h1>
                                </div>
                                <div className="ps-banner__thumnail"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className="ps-banner"
                        style={{
                            backgroundImage: `url('/static/img/banners/3Banner.jpg')`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            width: "100%",

                            margin: "0 auto",
                        }}>
                        <div className="container container-initial">
                            <div className="ps-banner__block ml-3">
                                <div className="ps-banner__content">
                                    <h2 className="ps-banner__title text-white text-weight-bolder">NEXT GENERATION</h2>
                                    <div className="ps-banner__desc text-white text-weight-bolder">TECHNOLOGY</div>
                                    <div className="ps-banner__btn-group"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className="ps-banner"
                        style={{
                            backgroundImage: `url('/static/img/banners/2Banner.jpg')`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            width: "100%",

                            margin: "0 auto",
                        }}>
                        <div className="container container-initial">
                            <div className="ps-banner__block ml-3">
                                <div className="ps-banner__content">
                                    <h2 className="ps-banner__title text-white text-weight-bolder">REDUCING</h2>
                                    <div className="ps-banner__desc text-white text-weight-bolder">ANIMAL TESTING</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </section>
    );
};

export default HomeOneTopBanners;
