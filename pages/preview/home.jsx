import React, { useState, useEffect } from "react"
import Container from "~/components/layouts/Container"
import Subscribe from "~/components/shared/sections/Subscribe"
import Testimonials from "~/components/shared/sections/Testimonials"
import HeaderDefault from "~/components/shared/headers/HeaderDefault"
import OurService from "~/components/shared/sections/OurServices"
import { SetMainMenu } from "~/store/app/action"
import { connect } from "react-redux"
import { baseUrl } from "~/repositories/Repository"
import HowItsWork from "~/components/shared/sections/HowItWorks"
import CaseStudy from "~/components/shared/sections/CaseStudy"
import AboutBanner from "~/components/partials/pages/about-us/AboutBanner"
import VideoBanner from "~/components/partials/homepages/home-1/videobanner"
import OurClients from "~/components/shared/sections/OurClients"
import PropTypes from "prop-types"
import BlogGrid from "~/components/partials/blog/BlogGrid"
import WomenHealth from "~/components/shared/sections/WomenHealth"
import HomeOneTopBanners from "~/components/partials/homepages/home-1/HomeOneTopBanners"
import AnnouncementsPopup from "~/components/partials/homepages/home-1/AnnouncementsPopup"
import HomeTopBanner from "~/components/partials/homepages/home-1/HomeTopBanner"
// import PromotionalBanner from "~/components/shared/sections/PromotionalBanner"

// import { Modal } from "antd";
import SubscribePopup from "~/components/shared/SubscribePopup"

import { FaArrowCircleRight } from "react-icons/fa";
import Slider from "react-slick";
import NextArrow from "~/components/elements/carousel/NextArrow";
import PrevArrow from "~/components/elements/carousel/PrevArrow";

const HomeDefaultPage = (props) => {
  // const [visible, setVisible] = useState(false);
  useEffect(() => {
    // setVisible(true);
    props.SetMainMenuhandler(props.menus)
  }, [])

  let products = "";

    const [promotions, setPromotions] = useState([]);

    useEffect(() => {
        // console.log("promotionDetails", promotionDetails);
        if (props.promotionDetails.status === 200) {
            setPromotions(props.promotionDetails.data);
        }
    }, []);
    const boxStyle = {
        forP: { lineHeight: 1.3 },
    };

    const carouselSetting = {
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        autoplay: true,
        dots: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

  return (
    <Container
      title="Your Drug Discovery Partner"
      menus={props.menus}
      header={<HeaderDefault classes="without-border" menus={props.menus} />}
    >
      <main id="homepage-one">
        {/* <VideoBanner /> */}
        {/* <HomeOneTopBanners /> */}
        <div className="ps-top-banners">
            <div className="ps-section--banner ps-banner--container">
                <div className="ps-section__overlay">
                    <div className="ps-section__loading"></div>
                </div>
                <Slider {...carouselSetting} className="ps-carousel">
                    {promotions &&
                        promotions?.map((data, key) =>
                           
                                <div className="carousel-item" key={key}>
                                    <div className="ps-banner" style={{ background: "#103178" }}>
                                        <div className="container-no-round">
                                            <div className="ps-banner__block">
                                                <div className="ps-banner__content d-flex  justify-content-between">
                                                    <div className="d-flex flex-column ">
                                                        <div
                                                            className="ps-banner__title text-white"
                                                            dangerouslySetInnerHTML={{
                                                                __html: data?.banner_content,
                                                            }}></div>
                                                        <div>
                                                            <a className="bg-warning ps-banner__shop" href={`${data.url}`}>
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
                            
                        )}
                </Slider>
            </div>
        </div>
        {/* <HomeTopBanner /> */}
        <AboutBanner />
        <OurService />
        {/* <PromotionalBanner /> */}
        <HowItsWork />
        <WomenHealth />
        <CaseStudy />
        <Testimonials />
        <OurClients />
        <BlogGrid />
        <Subscribe />
        {/* <AnnouncementsPopup /> */}
      </main>
    </Container>
  )
}

export async function getServerSideProps() {
  const res = await fetch(baseUrl + "/api/menu/getmenu")
  const menus = await res.json()

   var promotionDetails = [];
    var requestOptions = {
        method: "GET",
    };

    const res1 = await fetch(baseUrl + "/api/homebanner/getAllPreviewbanner", requestOptions);
    const myPromotionData = await res1.json();
    console.log("myPromotionData", myPromotionData);
    if (myPromotionData.status == 200) {
        promotionDetails = myPromotionData;
    } else {
        promotionDetails = [];
    }

  return {
    props: { menus, promotionDetails } // will be passed to the page component as props
  }
}
const mapStateToProps = (state) => ({
  mainmenu: state.app.ismainmenu
})
const mapDispathToProps = (dispatch) => ({
  SetMainMenuhandler: (data) => dispatch(SetMainMenu(data))
})

export default connect(mapStateToProps, mapDispathToProps)(HomeDefaultPage)
HomeDefaultPage.propTypes = {
  SetMainMenuhandler: PropTypes.any,
  menus: PropTypes.array
}
