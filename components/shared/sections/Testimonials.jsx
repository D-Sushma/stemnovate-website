import React from "react"
import Slider from "react-slick"
import dynamic from "next/dynamic"
import Link from "next/link"

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
  var ratingList = [
    '<i className="fa fa-star"></i>',
    '<i className="fa fa-star"></i>',
    '<i className="fa fa-star"></i>',
    '<i className="fa fa-star"></i>',
    '<i className="fa fa-star"></i>'
  ]
  var count = 5
  var ratingArr = []
  for (let j = 0; j < props?.promotionOfferDetails.length; j++) {
    const element = props?.promotionOfferDetails[j];
    var newratingArr = []
    for (let i = 0; i < ratingList.length; i++) {
      if (i < element?.rating) {
        newratingArr.push(<i className="fa fa-star"></i>)
      }
      
    }
    ratingArr.push(newratingArr);
  }
  

  return (
    <div>
      <div className="about-section container">
        <div className="row row-testimonials">
          <div className="col-md-12 col-sm-12 text-center ps-section__content container">
            <Slider {...carouselSetting} className="ps-carousel">
              {props?.promotionOfferDetails?.map((data, key) => (
                <div key={key}>
                  <h3 className="ps-section__title text-uppercase px-4 py-2 heading-testimonials">
                    {data?.section_title}
                  </h3>
                  <div className="ps-review p-0 d-flex justify-content-center align-item-center">
                    <div className="container-testimonials">
                      <blockquote
                        className="ps-review__text mt-5 text-testimonials"
                        dangerouslySetInnerHTML={{
                          __html: data?.content
                        }}
                      ></blockquote>
                      <Link href="/contact-us">
                        <div className="ps-review__name mb-1 py-1 pl-3 pr-3 name-testimonials link-hover-thumb-shape ">
                          {data?.btn_text}
                        </div>
                      </Link>
                      <div className="ps-review__review">
                        <span className="ps-rating">{ratingArr[key]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
