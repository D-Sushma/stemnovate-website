import React from "react"
import Slider from "react-slick"
// import NextArrow from "~/components/elements/carousel/NextArrow"
// import PrevArrow from "~/components/elements/carousel/PrevArrow"
import Link from "next/link"
import dynamic from 'next/dynamic'

const NextArrow = dynamic(
    () => import("~/components/elements/carousel/NextArrow"),
    {loading: ()=> <p>Loading..</p>}
)
const PrevArrow = dynamic(
    () => import("~/components/elements/carousel/PrevArrow"),
    {loading: ()=> <p>Loading..</p>}
)

const carouselSetting = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  dots: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
}
const BlogSlider = () => {
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
              backgroundImage: `url('/static/img/Blog/blog5.jpg')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              maxWidth: "1440px",
              margin: "0 auto"
            }}
          >
            <div className="container container-initial">
              <div className="ps-banner__block">
                <div className="ps-banner__content">
                  <h1 className="ps-banner__title text-white">STEMNOVATE</h1>
                  <div className="ps-banner__desc text-white">
                    Anglia Ruskin university
                  </div>
                  <div className="ps-banner__btn-group"></div>
                  <Link href="/blogs/5">
                    <span className="bg-warning ps-banner__shop link-hover-thumb-shape">
                      Read More
                    </span>
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="ps-banner"
            style={{
              backgroundImage: `url('/static/img/Blog/4.jpg')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              maxWidth: "1440px",
              margin: "0 auto"
            }}
          >
            <div className="container container-initial">
              <div className="ps-banner__block">
                <div className="ps-banner__content">
                  <h2 className="ps-banner__title text-white">Stemnovate</h2>
                  <div className="ps-banner__desc text-white">
                    {" "}
                    HOW A ‘CYP OF COFFEE’ CAN HELP US TO UNDERSTAND....
                  </div>
                  <div className="ps-banner__btn-group"></div>
                  <Link href="/blogs/4">
                    <span className="bg-warning ps-banner__shop link-hover-thumb-shape">
                      Read More
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  )
}

export default BlogSlider
