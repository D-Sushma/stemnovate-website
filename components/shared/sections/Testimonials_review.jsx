import React from "react"
import Slider from "react-slick"
import dynamic from "next/dynamic"

const NextArrow = dynamic(
  () => import("~/components/elements/carousel/NextArrow"),
  { loading: () => <p>Loading...</p> }
)
const PrevArrow = dynamic(
  () => import("~/components/elements/carousel/PrevArrow"),
  { loading: () => <p>Loading...</p> }
)
const TestimonialItem = dynamic(
  () => import("~/components/elements/TestimonialItem"),
  { loading: () => <p>Loading...</p> }
)

const carouselSetting = {
  infinite: true,
  autoplay: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true
      }
    }
  ]
}

const Testimonials = (props) => {
  const items = props?.reviewsDetails.map((item, index) => (
    <div className="ps-carousel__item" key={index}>
      <TestimonialItem source={item} />
    </div>
  ))

  var ratingList = [
    '<i className="fa fa-star"></i>',
    '<i className="fa fa-star"></i>',
    '<i className="fa fa-star"></i>',
    '<i className="fa fa-star"></i>',
    '<i className="fa fa-star"></i>'
  ]
  var count = 5
  var ratingArr = []
  for (let j = 0; j < props?.reviewsDetails.length; j++) {
    const element = props?.reviewsDetails[j]
    var newratingArr = []
    for (let i = 0; i < ratingList.length; i++) {
      if (i < element?.rating) {
        newratingArr.push(<i className="fa fa-star"></i>)
      }
    }
    ratingArr.push(newratingArr)
  }

  return (
    <div className="about-section container">
      <div className="row row-testimonials">
        <div className="col-md-12 col-sm-12 text-center ps-section__content container">
          <Slider {...carouselSetting} className="ps-carousel">
            {items.map((item, index) => (
              <div key={index}>
                {item}
                <div className="ps-review__review">
                  <span className="ps-rating">{ratingArr[index]}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
