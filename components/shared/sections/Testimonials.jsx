/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react"
import NextArrow from "~/components/elements/carousel/NextArrow"
import PrevArrow from "~/components/elements/carousel/PrevArrow"
import Slider from "react-slick"
import testimonials from "~/public/static/data/testimonials.json"
import TestimonialItem from "~/components/elements/TestimonialItem"
import Image from "~/components/elements/Image"
import discoverymatters from "~/public/static/image/News.png"
import announcementimg from "~/public/static/image/announcement.png"
import Cambridge from "~/public/static/img/blog/Cambridge-Independent.jpg"
const carouselSetting = {
  infinite: true,
  autoplay: true,
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
          <div className="row">
            <div className="col-md-12 col-sm-12 text-center  mt-5">
              <h3 className="ps-section__title text-uppercase">
                <span className="font-weight-bolder  px-4 py-2">
                  Latest reviews
                </span>
              </h3>
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

      <div className="plus-section My-Announcements">
        <section className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 text-center mt-5">
              <h3 className="ps-section__title text-uppercase ">
                <span className="font-weight-bolder text-white  px-4 py-2">
                  Announcements
                </span>
              </h3>
              <div className="ps-section__content py-5">
                <div className="container">
                  <div className=" row d-flex justify-content-center">
                    <div className="col-md-3 col-sm-6 d-flex flex-grow-1">
                      <div className="card mt-3  align-items-center p-0 ">
                        <a
                          target={"_blank"}
                          rel="noreferrer"
                          href="/Applications/Animal-Health"
                        >
                          <Image
                            src={Cambridge}
                            alt="Stemnovate leading the way in building animal models for Pharma
                drug discovery and animal health industry"
                          />
                        </a>
                        <div className="card-body p-0 ps-btn-link-bottom">
                          <a
                            target={"_blank"}
                            rel="noreferrer"
                            href="/Applications/Animal-Health"
                          >
                            <h5 className="card-title  pt-2 px-2">
                              Stemnovate leading the way in building animal
                              models for Pharma drug discovery and animal health
                              industry
                            </h5>
                          </a>
                          <a
                            target={"_blank"}
                            rel="noreferrer"
                            href="/Applications/Animal-Health"
                            className="h5 "
                          >
                            <span className="button-link">READ MORE</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 d-flex flex-grow-1">
                      <div className="card mt-3  align-items-center p-0 ">
                        <a
                          target={"_blank"}
                          rel="noreferrer"
                          href="https://podcasts.apple.com/gb/podcast/discovery-matters/id1466149440"
                        >
                          <Image
                            src={discoverymatters}
                            alt="Ruchi Sharma-Women in Stem"
                          />
                        </a>
                        <div className="card-body p-0 ps-btn-link-bottom">
                          <a
                            target={"_blank"}
                            rel="noreferrer"
                            href="https://podcasts.apple.com/gb/podcast/discovery-matters/id1466149440"
                          >
                            <h5 className="card-title  pt-2 px-2">
                              Listen to our CEO Dr Ruchi Sharma on the podcast
                              Discovery Matters: Women in Stem.
                            </h5>
                          </a>
                          <a
                            target={"_blank"}
                            rel="noreferrer"
                            href="https://podcasts.apple.com/gb/podcast/discovery-matters/id1466149440"
                            className="h5 "
                          >
                            <span className="button-link">READ MORE</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 d-flex flex-grow-1">
                      <div className="card mt-3  align-items-center p-1">
                        <a href="/Products/Biobanking">
                          <Image
                            src={announcementimg}
                            alt="Our 3Rs mission: Zero animal testing"
                          />
                        </a>
                        <div className="card-body  p-0 ps-btn-link-bottom">
                          <a href="/Products/Biobanking">
                            <h5 className="card-title  pt-2 px-2">
                              Our 3Rs mission: Zero animal testing. We innovate
                              technology for reducing, refining ...
                            </h5>
                          </a>

                          <a href="/Products/Biobanking" className="h5">
                            <span className="button-link">READ MORE</span>
                          </a>
                        </div>
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
