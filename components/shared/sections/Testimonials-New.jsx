/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react"
import NextArrow from "~/components/elements/carousel/NextArrow"
import PrevArrow from "~/components/elements/carousel/PrevArrow"
import Slider from "react-slick"
import testimonials from "~/public/static/data/testimonials.json"
import TestimonialItem from "~/components/elements/TestimonialItem"
import Image from "~/components/elements/Image"
// import newcambridge from "~/public/static/image/newcambridge.jpg"
// import Cambridge from "~/public/static/img/blog/Cambridge-Independent.jpg"
// import discoverymatters from "~/public/static/image/News.png"
// import announcementimg from "~/public/static/image/announcement.png"
import newcambridge from "~/public/static/home-images/newcambridge.jpg"
import Cambridge from "~/public/static/home-images/Cambridge-Independent.jpg"
import discoverymatters from "~/public/static/home-images/discoverymatters.jpg"
import announcementimg from "~/public/static/home-images/announcement.jpg"

const carouselSetting = {
  infinite: true,
  autoplay: false,
  speed: 700,
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
        arrows: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true
      }
    }
  ]
}

const Testimonials = () => {
  const items = testimonials.reviews.map((item, index) => (
    <div className="ps-carousel__item" key={index}>
      <TestimonialItem source={item} />
    </div>
  ))
  return (
    <div>
      <div className="about-section">
        <section className="container">
          <div className="row row-testimonials">
            <div className="col-md-12 col-sm-12 text-center">
              <h3 className="ps-section__title text-uppercase">
                <span className="font-weight-bolder px-4 py-2 heading-testimonials">
                  Latest reviews
                </span>
              </h3>
              {/* py-5 */}
              <div className="ps-section__content">
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

      <div className="plus-section My-Announcements">
        <section className="container">
          <div className="row row-testimonials">
            <div className="col-md-12 col-sm-12 text-center">
              <h3 className="ps-section__title text-uppercase heading-testimonials">
                <span className="font-weight-bolder text-white  px-4 py-2">
                  Announcements
                </span>
              </h3>
              <div className="ps-section__content py-0">
                <div className="container d-flex justify-content-center align-items-center">
                  <div className=" row d-flex justify-content-center">
                    <div className="col-md-3 col-sm-6 d-flex flex-grow-1">
                      <div className="card mt-3 align-items-center px-5">
                        <a
                          target={"_blank"}
                          rel="noreferrer"
                          href="https://www.cambridgeindependent.co.uk/business/stemnovate-partners-with-babraham-institute-on-alzheimer-s-d-9296332/"
                        >
                          <Image
                            className="zoom-in"
                            src={newcambridge}
                            alt="Our 3Rs mission: Zero animal testing"
                            width={383}
                            height={310}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 d-flex flex-grow-1">
                      <div className="card mt-3  align-items-center px-5 ">
                        <a
                          target={"_blank"}
                          rel="noreferrer"
                          href="/Applications/Animal-Health"
                        >
                          <Image
                            className="zoom-in"
                            src={Cambridge}
                            alt="Stemnovate leading the way in building animal models for Pharma
                drug discovery and animal health industry"
                            width={383}
                            height={310}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 d-flex flex-grow-1">
                      <div className="card mt-3  align-items-center px-5">
                        <a
                          target={"_blank"}
                          rel="noreferrer"
                          href="https://podcasts.apple.com/gb/podcast/discovery-matters/id1466149440"
                        >
                          <Image
                            className="zoom-in"
                            src={discoverymatters}
                            alt="Ruchi Sharma-Women in Stem"
                            width={383}
                            height={310}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 d-flex flex-grow-1">
                      <div className="card mt-3  align-items-center px-5">
                        <a
                          target={"_blank"}
                          rel="noreferrer"
                          href="/Products/Biobanking"
                        >
                          <Image
                            className="zoom-in"
                            src={announcementimg}
                            alt="Our 3Rs mission: Zero animal testing"
                            width={383}
                            height={310}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Testimonials
