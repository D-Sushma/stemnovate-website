import React, { useEffect } from "react"
import Link from "next/link"
import Container from "~/components/layouts/Container"
import BreadCrumb from "~/components/elements/BreadCrumb"
import Subscribe from "~/components/shared/sections/Subscribe"
import { baseUrl } from "~/repositories/Repository"
import Image from "~/components/elements/Image"
import NextArrow from "~/components/elements/carousel/NextArrow"
import PrevArrow from "~/components/elements/carousel/PrevArrow"
import Slider from "react-slick"

const carouselreviewSetting = {
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

const carouselSetting = {
  infinite: true,
  autoplay: true,
  speed: 500,
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

const breadcrumb = [
  {
    id: 1,
    text: "Home",
    url: "/"
  },

  {
    id: 2,
    text: "About us"
  }
]

const AboutUsScreen = ({
  ProductData,
  HistoryData,
  PartnerData,
  TeamData,
  ReviewData,
  AnnounceData
}) => {
  useEffect(() => {
    console.log("ProductData", ProductData)
    console.log("HistoryData", HistoryData)
    console.log("PartnerData", PartnerData)
    console.log("ReviewData", ReviewData)
  }, [])

  return (
    <Container title="About Us">
      <main className="ps-page ps-page--inner">
        <div className="ps-page__header  breadcrumb-h application-breadcrumb-bg">
          <div className="container ">
            <BreadCrumb breacrumb={breadcrumb} />
          </div>
          <h2 className="text-center text-white p-2">
            <div
              className="center-box text-white"
              dangerouslySetInnerHTML={{
                __html: ProductData.data[0].banner_title
              }}
            ></div>
          </h2>
        </div>
        <div className="ps-page__content">
          <div className="ps-about">
            <div className="about-section">
              <section className="container">
                <div className="center-box">
                  <div className="vertical-center">
                    <div
                      className="center-box"
                      dangerouslySetInnerHTML={{
                        __html: ProductData.data[0].intro
                      }}
                    ></div>
                  </div>
                </div>
              </section>
            </div>

            <div className="bg-02-section">
              <div className="container">
                <Slider {...carouselSetting} className="ps-carousel">
                  {TeamData.data.map((data, key) => (
                    <div className="ps-carousel__item" key={key}>
                      <section className="ps-section--block-grid ">
                        <div className="ps-section__thumbnail">
                          <Link href="#">
                            <div className="ps-section__image">
                              <Image
                                src={`${process.env.AWS_S3BUCKET_URL}${data.image}`}
                                alt={key}
                                width={1000}
                                height={580}
                              />
                            </div>
                          </Link>
                        </div>
                        <div className="ps-section__content">
                          <div className="ps-section__desc ">
                            <div
                              className="center-box"
                              dangerouslySetInnerHTML={{
                                __html: data.team_content
                              }}
                            ></div>
                          </div>
                        </div>
                      </section>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>

            <div className="about-section">
              <div className="container">
                <div className=" row d-flex justify-content-center">
                  {/* /* ---------------------------------- first --------------------------------- */}
                  {HistoryData.data.map((data, key) => (
                    <div
                      key={key}
                      className="col-md-2 col-sm-6 d-flex flex-grow-1"
                    >
                      <div className="card mt-3  align-items-center p-1">
                        <div className="card card-h-min-about-us align-items-center p-1 justify-content-center ">
                          <a
                            href={`${data.url}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <div className="d-flex align-items-center our-client-images">
                              <Image
                                src={`${process.env.AWS_S3BUCKET_URL}${data.image}`}
                                alt={data.title}
                                width={1000}
                                height={250}
                                />
                            </div>
                          </a>
                        </div>
                        <div className="card-body  p-0 ps-btn-about-bottom">
                          <a
                            href={`${data.url}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <h4 className="card-title text-center pt-2 px-2">
                              {data.title}
                            </h4>
                            <h6
                              className="card-title  px-2"
                              style={{ height: "50%" }}
                            >
                              {data.history_content}
                            </h6>
                          </a>
                          <a
                            href={`${data.url}`}
                            target="_blank"
                            rel="noreferrer"
                            className="h3 py-4 float-right "
                          >
                            <span className="button-link">{data.btn_text}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="container">
              <section className="ps-section__desc my-5 text-center ">
                <h2 className="p-2">Our Partners</h2>
              </section>
            </div>

            {PartnerData.data.map((data, key) => (
              <>
                <div className={key % 2 ? "about-section" : "bg-02-section"}>
                  <div className="container">
                    {data.is_feature ? (
                      <Slider {...carouselSetting} className="ps-carousel">
                        <div className="ps-carousel__item">
                          <section className="ps-section--block-grid ">
                            <div className="ps-section__thumbnail">
                              <Link href="#">
                                <div className="ps-section__image">
                                  <Image
                                    style={{ cursor: "pointer" }}
                                    src={`${process.env.AWS_S3BUCKET_URL}${data.image}`}
                                    alt={data.title}
                                    width={1000}
                                    height={550}
                                  />
                                </div>
                              </Link>
                            </div>
                            <div className="ps-section__content">
                              <h2 className="">
                                <u>
                                  <a
                                    href={`${data.url}`}
                                    target={"_blank"}
                                    rel="noreferrer"
                                    className="font-weight-bold"
                                  >
                                    {data.title}
                                  </a>
                                </u>{" "}
                              </h2>
                              <div className="ps-section__desc">
                                <div
                                  className="center-box"
                                  dangerouslySetInnerHTML={{
                                    __html: data.partners_content
                                  }}
                                ></div>
                              </div>
                            </div>
                          </section>
                        </div>

                        <div className="ps-carousel__item">
                          <section className="ps-section__desc my-2 text-left ">
                            <h1 className={key % 2 ? "p-2" : "p-2 text-white"}>
                              Featured Project
                            </h1>
                          </section>
                          <section className="ps-section--block-grid ">
                            <div className="ps-section__thumbnail">
                              <Link href="#">
                                <div className="ps-section__image">
                                  <Image
                                    style={{ cursor: "pointer" }}
                                    width={1000}
                                    height={550}
                                    src={`${process.env.AWS_S3BUCKET_URL}${data.feature_image}`}
                                    alt={data.feature_title}
                                  />
                                </div>
                              </Link>
                            </div>
                            <div className="ps-section__content">
                              <h2 className="">
                                <u>
                                  <a
                                    href={`${data.feature_url}`}
                                    target={"_blank"}
                                    rel="noreferrer"
                                    className="font-weight-bold"
                                  >
                                    {data.feature_title}
                                  </a>
                                </u>{" "}
                              </h2>
                              <div
                                className="center-box"
                                dangerouslySetInnerHTML={{
                                  __html: data.feature_content
                                }}
                              ></div>
                            </div>
                          </section>
                        </div>
                      </Slider>
                    ) : (
                      <section
                        className={
                          key % 2
                            ? "ps-section--block-grid flex-wrap"
                            : "ps-section--block-grid"
                        }
                      >
                        <div className="ps-section__thumbnail">
                          <Link href="#">
                            <div className="ps-section__image">
                              <Image
                                src={`${process.env.AWS_S3BUCKET_URL}${data.image}`}
                                alt={data.title}
                                width={1000}
                                height={600}
                                style={{ cursor: "pointer" }}
                              />
                            </div>
                          </Link>
                        </div>
                        <div className="ps-section__content">
                          <h2 className="">
                            <u>
                              <a
                                href={`${data.url}`}
                                target={"_blank"}
                                rel="noreferrer"
                                className="font-weight-bold"
                              >
                                {data.title}
                              </a>
                            </u>{" "}
                          </h2>
                          <div className="ps-section__desc">
                            <div
                              className="center-box"
                              dangerouslySetInnerHTML={{
                                __html: data.partners_content
                              }}
                            ></div>
                          </div>
                        </div>
                      </section>
                    )}
                  </div>
                </div>
              </>
            ))}

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
                          <Slider
                            {...carouselreviewSetting}
                            className="ps-carousel"
                          >
                            {ReviewData.data.map((data, key) => (
                              <div className="ps-carousel__item" key={key}>
                                <div className="ps-review">
                                  <div className="ps-review__name">
                                    {data.title}
                                  </div>
                                  <div className="ps-review__text mt-2">
                                    <blockquote>
                                      <i>
                                        <div
                                          className="center-box"
                                          dangerouslySetInnerHTML={{
                                            __html: data.review_content
                                          }}
                                        ></div>
                                      </i>
                                    </blockquote>
                                  </div>
                                  <div className="ps-review__review">
                                    {/* <Rating /> */}
                                    <span className="ps-rating">
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            ))}
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
                            {AnnounceData.data.map((data, key) => (
                              <div
                                key={key}
                                className="col-md-3 col-sm-6 d-flex flex-grow-1"
                              >
                                <div className="card mt-3  align-items-center p-1">
                                  <a
                                    href={`${data.url}`}
                                    target={"_blank"}
                                    rel="noreferrer"
                                  >
                                    <Image
                                      className="font-weight-bold"
                                      style={{ cursor: "pointer" }}
                                      src={`${process.env.AWS_S3BUCKET_URL}${data.image}`}
                                      alt={data.title}
                                      width={1000}
                                      height={1000}
                                    />
                                  </a>

                                  <div className="card-body  p-0 ps-btn-link-bottom">
                                    <a
                                      href={`${data.url}`}
                                      target={"_blank"}
                                      rel="noreferrer"
                                    >
                                      <h5 className="card-title  pt-2 px-2">
                                        {data.title}
                                      </h5>
                                    </a>

                                    <a
                                      href={`${data.url}`}
                                      target={"_blank"}
                                      rel="noreferrer"
                                      className="h5"
                                    >
                                      <span className="button-link">
                                        READ MORE
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <Subscribe />
          </div>
        </div>
      </main>
    </Container>
  )
}

export async function getServerSideProps() {
  var ProductData = []

  const res = await fetch(baseUrl + "/api/aboutus/getdetails")
  console.log(res)
  const myProductData = await res.json()

  if (myProductData.status == 200) {
    ProductData = myProductData
  } else {
    ProductData = []
  }

  var HistoryData = []

  const resHistory = await fetch(baseUrl + "/api/aboutus/gethistorydetails")

  const aboutHistoryData = await resHistory.json()

  if (aboutHistoryData.status == 200) {
    HistoryData = aboutHistoryData
  } else {
    HistoryData = []
  }

  var PartnerData = []

  const resPartner = await fetch(baseUrl + "/api/aboutus/getpartnerdetails")

  const aboutPartnerData = await resPartner.json()

  if (aboutPartnerData.status == 200) {
    PartnerData = aboutPartnerData
  } else {
    PartnerData = []
  }

  var TeamData = []

  const resTeam = await fetch(baseUrl + "/api/aboutus/getTeamdetails")

  const aboutTeamData = await resTeam.json()

  if (aboutTeamData.status == 200) {
    TeamData = aboutTeamData
  } else {
    TeamData = []
  }

  var ReviewData = []

  const resReview = await fetch(baseUrl + "/api/aboutus/getReviewdetails")

  const aboutReviewData = await resReview.json()

  if (aboutReviewData.status == 200) {
    ReviewData = aboutReviewData
  } else {
    ReviewData = []
  }

  var AnnounceData = []

  const resAnnounce = await fetch(baseUrl + "/api/aboutus/getAnnouncedetails")

  const aboutAnnounceData = await resAnnounce.json()

  if (aboutAnnounceData.status == 200) {
    AnnounceData = aboutAnnounceData
  } else {
    AnnounceData = []
  }

  // // Pass data to the page via props
  return {
    props: {
      ProductData,
      HistoryData,
      PartnerData,
      TeamData,
      ReviewData,
      AnnounceData
    }
  }
}

export default AboutUsScreen
