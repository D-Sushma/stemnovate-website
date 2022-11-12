import React from "react";
import Slider from "react-slick";
import NextArrow from "~/components/elements/carousel/NextArrow";
import PrevArrow from "~/components/elements/carousel/PrevArrow";

import PropTypes from "prop-types";

const carouselSetting = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    dots: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};
const FeaturedBlog = ({ List }) => {
    return List && List.length > 0 ? (
        <section className="ps-section--banner ps-top-banners">
            <div className="ps-section__overlay">
                <div className="ps-section__loading"></div>
            </div>
            <Slider {...carouselSetting} className="ps-carousel ps-carousel--fullwidth ">
                {List.map((data, key) => (
                    <div key={key}>
                        <div className="ps-banner" style={{ backgroundImage: `url(${process.env.AWS_S3BUCKET_URL}${data.thumbnail})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", width: "100%", maxWidth: "1440px", margin: "0 auto" }}>
                            <div className="container container-initial">
                                <div className="ps-banner__block">
                                    <div className="ps-banner__content">
                                        <h1 className="ps-banner__title text-white">{data.tag}</h1>
                                        <div className="ps-banner__desc text-white">{data.name}</div>
                                        <div className="ps-banner__btn-group"></div>
                                        <a className="bg-warning ps-banner__shop" href={`/blogs/${data.slug}`}>
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    ) : null;
};

export default FeaturedBlog;
FeaturedBlog.propTypes = {
    List: PropTypes.any,
};
