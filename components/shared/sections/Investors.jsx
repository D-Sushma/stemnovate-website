import React from "react";
import NextArrow from "~/components/elements/carousel/NextArrow";
import PrevArrow from "~/components/elements/carousel/PrevArrow";
import Slider from "react-slick";
import investors from "~/public/static/data/investors.json";
import InvestorsItem from "~/components/elements/InvestorsItem";

const carouselSetting = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
            breakpoint: 1366,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
            },
        },
    ],
};

const Investors = () => {
    const items = investors.reviews.map((item, index) => (
        <div className="ps-carousel__item" key={index}>
            <InvestorsItem source={item} />
        </div>
    ));
    return (
        <div>
            <div className="investor-section">
                <section className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 text-center  mt-5">
                            <div className="ps-section__content py-5">
                                <div className="container">
                                    <Slider {...carouselSetting} className="ps-carousel">
                                        {items}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Investors;
