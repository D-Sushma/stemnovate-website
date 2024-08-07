import React, { useState, useEffect, Fragment } from "react"
import { ToastContainer } from "react-toastify"
import { FaArrowCircleRight } from "react-icons/fa"
import Slider from "react-slick"
import Link from "next/link"
import dynamic from "next/dynamic"

const Container = dynamic(() => import("~/components/layouts/Container"), {
  loading: () => <p>Loading...</p>
})
const Image = dynamic(() => import("~/components/elements/Image"), {
  loading: () => <p>Loading...</p>
})
const NextArrow = dynamic(
  () => import("~/components/elements/carousel/NextArrow"),
  { loading: () => <p>Loading...</p> }
)
const PrevArrow = dynamic(
  () => import("~/components/elements/carousel/PrevArrow"),
  { loading: () => <p>Loading...</p> }
)
const Subscribe = dynamic(
  () => import("~/components/shared/sections/Subscribe"),
  { loading: () => <p>Loading...</p> }
)

import { baseUrl } from "~/repositories/Repository"

const ProductScreen = ({ promotionDetails, promid }) => {
  const [promotions, setPromotions] = useState([])

  useEffect(() => {
    if (promotionDetails.status === 200) {
      setPromotions(promotionDetails.data)
    }
  }, [])
  
  let home_banner_id = promid
  var ogImage = ""
  var initialSlide = 0;
  var banner_imag_data = promotionDetails?.data;
  if(banner_imag_data.length>0){
    var newArr = banner_imag_data.map(function(val, index){ 
        if(val.id==home_banner_id){
          initialSlide = index
          var bn_img = val.shareimage
          if(bn_img !== null){ 
              ogImage = `${process.env.AWS_S3BUCKET_URL}${bn_img}`
          }
        }
    })
  }

  const carouselSetting = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  autoplay: true,
  dots: false,
  initialSlide: initialSlide,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
}

  return (
    <Container
      title="Promotions Products"
      ogimg={ogImage}
      description="Stemnovate page on sales, discounts, promotions"
    >
      <ToastContainer />
      <main id="homepage-one">
        <div className="ps-page ps-page--shopping">
          <div className="ps-page__content">
            <div className="ps-about">
              <div className="ps-top-banners">
                <div className="ps-section--banner ps-banner--container">
                  <div className="ps-section__overlay">
                    <div className="ps-section__loading"></div>
                  </div>
                  <Slider {...carouselSetting} className="ps-carousel">
                    {promotions &&
                      promotions?.map((data, key) =>
                        data?.banner_type === "Carousel" ? (
                          <div className="carousel-item" key={key}>
                            <div
                              className="ps-banner"
                              style={{ background: "#103178" }}
                            >
                              <div className="container-no-round">
                                <div className="ps-banner__block">
                                  <div className="ps-banner__content d-flex  justify-content-between">
                                    <div className="d-flex flex-column ">
                                      <div
                                        className="ps-banner__title text-white"
                                        dangerouslySetInnerHTML={{
                                          __html: data?.promo_content
                                        }}
                                      ></div>
                                      <div>
                                        <Link
                                          href={`${
                                            data?.promo_type == "Promotions"
                                              ? "/promotions_offer/"
                                              : ""
                                          }${data.url}`}
                                          prefetch={false}
                                        >
                                          <button className="bg-warning ps-banner__shop">
                                            {data.btn_text}
                                          </button>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ps-banner__thumnail ps-banner__fluid">
                                    <Image
                                      className="ps-banner__image"
                                      src={`${process.env.AWS_S3BUCKET_URL}${data.image}`}
                                      alt="alt"
                                      layout="fill"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : null
                      )}
                  </Slider>
                </div>
              </div>
              <div className="blog-section py-5">
                <h3 className="ps-section__title text-uppercase text-center">
                  <span className="font-weight-bolder  ">Offers</span>
                </h3>

                <div className="container">
                  <div className="ps-section__content py-5">
                    <div className="container d-flex">
                      <div className=" row d-flex justify-content-center">
                        {promotions &&
                          promotions?.map((data, key) => (
                            <Fragment key={key}>
                              {data?.banner_type === "Card" ? (
                                <div className="col-md-6 col-sm-6 d-flex flex-grow-1 mb-3">
                                  <div className="card ">
                                    <Image
                                      src={`${process.env.AWS_S3BUCKET_URL}${data.image}`}
                                      alt="alt"
                                      width={1200}
                                      height={675}
                                    />
                                    <div className="card-body p-0 mb-3">
                                      <h2 className="card-title mt-3">
                                        {data.title}
                                      </h2>
                                      <p
                                        className="card-text mb-5"
                                        dangerouslySetInnerHTML={{
                                          __html: data?.promo_content
                                        }}
                                      ></p>
                                    </div>
                                    <Link
                                      href={`${
                                        data?.promo_type == "Promotions"
                                          ? "/promotions_offer/"
                                          : ""
                                      }${data.url}`}
                                      prefetch={false}
                                    >
                                      <div className="h3 text-right mt-2">
                                        <span className="button-link text-orange span-with-link">
                                          {data.btn_text}{" "}
                                          <FaArrowCircleRight className="mb-1" />
                                        </span>
                                      </div>
                                    </Link>
                                  </div>
                                </div>
                              ) : null}
                            </Fragment>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Subscribe />
            </div>
          </div>
        </div>
      </main>
    </Container>
  )
}

export async function getServerSideProps({ query }) {
  var promid = query.slug
  var promotionDetails = []
  var requestOptions = {
    method: "GET"
  }

  const res = await fetch(
    baseUrl + "/api/promotion/getAllpromotions",
    requestOptions
  )
  const myPromotionData = await res.json()
  if (myPromotionData.status == 200) {
    promotionDetails = myPromotionData
  } else {
    promotionDetails = []
  }

  return { props: { promotionDetails, promid } }
}

export default ProductScreen
