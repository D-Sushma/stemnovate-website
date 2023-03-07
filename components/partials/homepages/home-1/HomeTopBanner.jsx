import React from "react"
import Slider from "react-slick"
import NextArrow from "~/components/elements/carousel/NextArrow"
import PrevArrow from "~/components/elements/carousel/PrevArrow"

const carouselSetting = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  lazyLoad: "progressive",
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ],
  // cssEase: "ease-in-out",
  easing: "linear",
  cssEase: "linear",
  touchThreshold: 100,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
}
const HomeOneTopBanners = () => {
  return (
    <section className="ps-section--banner ps-top-banners">
      <div className="ps-section__overlay">
        <div className="ps-section__loading"></div>
      </div>
      <Slider
        {...carouselSetting}
        className="ps-carousel ps-carousel--fullwidth "
      >
        <div>
          <div
            className="ps-banner"
            style={{
              backgroundImage: `url('/static/img/banners/home-banner-1.jpg')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",

              margin: "0 auto"
            }}
          >
            <div className="container container-initial">
              <div className="ps-banner__block ml-3">
                <div className="ps-banner__content">
                  <h1 className="ps-banner__title text-center text-weight-bolder mt-20">
                    Precision in drug discovery
                  </h1>
                  <div className="ps-banner__desc text-center">
                    {/* So why not include that for drug discovery? */}
                  </div>
                </div>
                {/* <div className="ps-banner__thumnail"></div> */}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="ps-banner"
            style={{
              backgroundImage: `url('/static/img/banners/homebanner-2.jpg')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",

              margin: "0 auto"
            }}
          >
            <div className="container container-initial">
              <div className="ps-banner__block ml-3">
                <div className="ps-banner__content">
                  <h1 className="ps-banner__title text-center text-weight-bolder">
                    Next-gen technology
                  </h1>
                  <div className="ps-banner__desc text-center">
                    Data reimagined
                  </div>
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
              backgroundImage: `url('/static/img/banners/homebanner-3.jpg')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",

              margin: "0 auto"
            }}
          >
            <div className="container container-initial">
              <div className="ps-banner__block ml-3">
                <div className="ps-banner__content">
                  <h1 className="ps-banner__title text-center text-weight-bolder">
                    Delivering kindness in science
                  </h1>
                  <div className="ps-banner__desc text-center">
                    Explore our animal platform
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  )
}

export default HomeOneTopBanners
