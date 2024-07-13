import React, { useEffect } from "react"
import Link from "next/link"
import { baseUrl } from "~/repositories/Repository"
import Slider from "react-slick"
import blurredimg from "~/public/static/image/blurred.png"
import dynamic from "next/dynamic"

const NextArrow = dynamic(
  () => import("~/components/elements/carousel/NextArrow"),
  { loading: () => <p>Loading...</p> }
)
const PrevArrow = dynamic(
  () => import("~/components/elements/carousel/PrevArrow"),
  { loading: () => <p>Loading...</p> }
)
const Container = dynamic(() => import("~/components/layouts/Container"), {
  loading: () => <p>Loading...</p>
})
const BreadCrumb = dynamic(() => import("~/components/elements/BreadCrumb"), {
  loading: () => <p>Loading...</p>
})
const Image = dynamic(() => import("~/components/elements/Image"), {
  loading: () => <p>Loading...</p>
})
const Subscribe = dynamic(
  () => import("~/components/shared/sections/Subscribe"),
  { loading: () => <p>Loading...</p> }
)
const DynamicAnnouncementGrid = dynamic(
  () => import("~/components/partials/blog/AnnouncementGrid"),
  {
    loading: () => <p>Loading...</p>
  }
)
const DynamicTestimonials_review = dynamic(
  () => import("~/components/shared/sections/Testimonials_review"),
  {
    loading: () => <p>Loading...</p>
  }
)
const BannerImage = dynamic(() => import("~/components/elements/BannerImage"), {
  loading: () => <p>Loading...</p>
})

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
  AnnounceData,
  BannerData,
  reviewsDetails
}) => {
  useEffect(() => {}, [])

  var ogImage = ""
  var images1 = []
  var products_img1 = BannerData?.data[0]?.og_img?.split(",")
  var ogDesc = BannerData?.data[0]?.og_desc
  if (products_img1 && products_img1.length > 0) {
    products_img1.map((item) => {
      images1.push(`${process.env.AWS_S3BUCKET_URL}${item}`)
    })
    ogImage = images1[0]
  }
  var bgImage = `${process.env.AWS_S3BUCKET_URL}${BannerData?.data[0]?.banner_img}`
  return (
    <Container
      title="About Us | Your Drug Discovery Platform"
      ogimg={ogImage}
      description={ogDesc}
    >
      <main className="ps-page ps-page--inner">
        <div className="ps-page__header  breadcrumb-h  banner-breadcrumb-bg">
          <BannerImage
            alt="about-us-banner-image"
            src={bgImage}
            layout="fill"
            objectFit="cover"
            priority={true}
            style={{
              zIndex: -1
            }}
          />
          <div className="container ">
            <BreadCrumb breacrumb={breadcrumb} />
            <h1 className="text-center h1 text-white p-2 ">
              {BannerData?.data[0]?.banner_content}
            </h1>
          </div>
        </div>

        <div className="ps-page__content">
          <div className="ps-about">
            <div className="about-section">
              {/* <h1 className="text-center m-4 font-weight-bolder">
                Our People - Our Story
              </h1> */}

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
                      <section className="ps-section--block-grid mt-3">
                        <div className="ps-section__thumbnail">
                          <Link href="#">
                            <div
                              className="ps-section__image link-hover-thumb-shape mr-5"
                              style={{ width: "100%", height: "auto" }}
                            >
                              <Image
                                src={`${process.env.AWS_S3BUCKET_URL}${data.image}`}
                                alt={key}
                                width={1200}
                                height={675}
                                layout="responsive"
                              />
                            </div>
                          </Link>
                        </div>
                        <div className="ps-section__content mt-0">
                          <div className="ps-section__desc ">
                            <div
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
                <div className=" row d-flex justify-content-center mx-2">
                  {HistoryData.data.map((data, key) => (
                    <div
                      key={key}
                      className="col-md-3 col-lg-2 col-sm-4 d-flex flex-grow-1"
                    >
                      <div className="card mt-3  align-items-center p-1">
                        <div className="card-h-min-about-us align-items-center p-1 justify-content-center ">
                          <a
                            href={`${data.url}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <div
                              className="card-body d-flex align-items-center our-client-images "
                              style={{ width: "100%", height: "auto" }}
                            >
                              <Image
                                src={`${process.env.AWS_S3BUCKET_URL}${data.image}`}
                                alt={data.title}
                                width={1000}
                                height={245}
                              />
                            </div>
                          </a>
                        </div>
                        <div className="p-0 ps-btn-about-bottom">
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
                              style={{ height: "36%" }}
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
                            <span className="visually-hidden">
                              {data.history_content}
                            </span>
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
                          <section className="ps-section--block-grid mt-3">
                            <div className="ps-section__thumbnail">
                              <div
                                className="ps-section__image link-hover-thumb-shape mr-5"
                                style={{ width: "100%", height: "auto" }}
                              >
                                <Image
                                  src={`${process.env.AWS_S3BUCKET_URL}${data.image}`}
                                  alt={data.title}
                                  width={1200}
                                  height={675}
                                  layout="responsive"
                                />
                              </div>
                            </div>
                            <div className="ps-section__content mt-0">
                              <h2>
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
                          <section className="ps-section__desc text-left ">
                            <h2 className={key % 2 ? "p-2" : "p-2 text-white"}>
                              Featured Project
                            </h2>
                          </section>
                          <section className="ps-section--block-grid mt-3">
                            <div className="ps-section__thumbnail">
                              <div
                                className="ps-section__image link-hover-thumb-shape mr-5"
                                style={{ width: "100%", height: "auto" }}
                              >
                                <Image
                                  src={`${process.env.AWS_S3BUCKET_URL}${data.feature_image}`}
                                  alt={data.feature_title}
                                  width={1200}
                                  height={675}
                                  layout="responsive"
                                />
                              </div>
                            </div>
                            <div className="ps-section__content mt-0">
                              <h2>
                                <u>
                                  <a
                                    href={`${data.url}`}
                                    target={"_blank"}
                                    rel="noreferrer"
                                    className="font-weight-bold"
                                  >
                                    {data.feature_title}
                                  </a>
                                </u>{" "}
                              </h2>
                              <div className="ps-section__desc">
                                <div
                                  className="center-box"
                                  dangerouslySetInnerHTML={{
                                    __html: data.feature_content
                                  }}
                                ></div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </Slider>
                    ) : (
                      <section
                        className={
                          key % 2
                            ? "ps-section--block-grid flex-wrap mt-3"
                            : "ps-section--block-grid mt-3"
                        }
                      >
                        <div className="ps-section__thumbnail">
                          <div
                            className="ps-section__image link-hover-thumb-shape image-box-container mr-5"
                            style={{ width: "100%", height: "auto" }}
                          >
                            <Image
                              src={`${process.env.AWS_S3BUCKET_URL}${data.image}`}
                              alt={data.title}
                              width={1200}
                              height={675}
                              layout="responsive"
                            />
                          </div>
                        </div>
                        <div className="ps-section__content mt-0">
                          <h2>
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

            <DynamicTestimonials_review reviewsDetails={reviewsDetails} />

            <DynamicAnnouncementGrid />
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

  var BannerData = []
  var requestParam = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      page_name: "About Us"
    })
  }
  const res_banner = await fetch(
    baseUrl + "/api/header_banners/getBanners",
    requestParam
  )
  const myProductDataBanner = await res_banner.json()

  if (myProductDataBanner.status == 200) {
    BannerData = myProductDataBanner
  } else {
    BannerData = []
  }

  var sectionDetails = []
  var serviceDetails = []
  var promotionOfferDetails = []
  var reviewsDetails = []
  var clientDetails = []
  const res_section = await fetch(baseUrl + "/api/home_sections/getDetails")
  const sectionData = await res_section.json()
  if (sectionData.status == 200) {
    sectionDetails = sectionData?.data
    serviceDetails = sectionData?.serviceData
    promotionOfferDetails = sectionData?.promotionOfferData
    reviewsDetails = sectionData?.reviewsData
    clientDetails = sectionData?.clientsData
  } else {
    sectionDetails = []
    serviceDetails = []
    promotionOfferDetails = []
    reviewsDetails = []
    clientDetails = []
  }

  return {
    props: {
      ProductData,
      HistoryData,
      PartnerData,
      TeamData,
      ReviewData,
      AnnounceData,
      BannerData,
      reviewsDetails
    }
  }
}

export default AboutUsScreen
