import React from "react"
import Slider from "react-slick"
import Link from "next/link"
import dynamic from "next/dynamic"

const NextArrow = dynamic(
  () => import("~/components/elements/carousel/NextArrow"),
  { loading: () => <p>Loading...</p> }
)
const PrevArrow = dynamic(
  () => import("~/components/elements/carousel/PrevArrow"),
  { loading: () => <p>Loading...</p> }
)

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
  prevArrow: <PrevArrow />
}
const PromotionsBanner = () => {
  return (
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
                      <div className="ps-banner__title text-white">
                        We have some fantastic offers!
                      </div>
                      <div className="ps-banner__title  text-white">
                        Get up to 10% OFF on <br /> live primary cells!
                      </div>
                      <div className="ps-banner__desc  text-white">
                        Don´t miss out on these enormous savings in human and
                        animal fibroblasts.
                      </div>
                      <div>
                        <Link href="/promotions-products/offers">
                          <div className="bg-warning ps-banner__shop">
                            Shop Now
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="ps-banner__thumnail ps-banner__fluid">
                    <img
                      className="ps-banner__image"
                      src="/static/img/icon/promotion-one.jpg"
                      alt="alt"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="ps-banner" style={{ background: "#103178" }}>
              <div className="container-no-round">
                <div className="ps-banner__block">
                  <div className="ps-banner__content d-flex  justify-content-between">
                    <div className="d-flex flex-column ">
                      <div className="ps-banner__title text-white">
                        We have some fantastic offers!
                      </div>
                      <div className="ps-banner__title  text-white">
                        Get 10% OFF on live primary cells
                        <br /> when you sign up to our website!
                      </div>
                      <div className="ps-banner__desc  text-white">
                        Don´t miss out on these enormous savings in human and
                        animal fibroblasts.
                      </div>
                      <div>
                        <Link href="/auth/UserReg">
                          <div className="bg-warning ps-banner__shop">
                            Signup Now
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="ps-banner__thumnail ps-banner__fluid">
                    <img
                      className="ps-banner__image"
                      src="/static/img/icon/promotion-one.jpg"
                      alt="alt"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default PromotionsBanner
