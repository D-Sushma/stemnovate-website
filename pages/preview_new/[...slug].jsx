import dynamic from "next/dynamic"
import React, { useState, useEffect, useRef } from "react"
import { SetMainMenu } from "~/store/app/action"
import { connect } from "react-redux"
import { baseUrl } from "~/repositories/Repository"
import PropTypes from "prop-types"
import Slider from "react-slick"

const Container = dynamic(() => import("~/components/layouts/Container"), {
  loading: () => <p>Loading...</p>
})
const Image = dynamic(() => import("~/components/elements/Image"), {
  loading: () => <p>Loading...</p>
})
const HeaderDefault = dynamic(
  () => import("~/components/shared/headers/HeaderDefault"),
  { loading: () => <p>Loading...</p> }
)
const DynamicAboutBanner = dynamic(
  () => import("~/components/partials/pages/about-us/AboutBanner"),
  { loading: () => <p>Loading...</p> }
)
const DynamicOurService = dynamic(
  () => import("~/components/shared/sections/OurServices"),
  {
    loading: () => <p>Loading...</p>
  }
)
const DynamicHowItsWork = dynamic(
  () => import("~/components/shared/sections/HowItWorks"),
  {
    loading: () => <p>Loading...</p>
  }
)
const DynamicTestimonials = dynamic(
  () => import("~/components/shared/sections/Testimonials"),
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
const DynamicOurClients = dynamic(
  () => import("~/components/shared/sections/OurClients"),
  {
    loading: () => <p>Loading...</p>
  }
)
const DynamicBlogGrid = dynamic(
  () => import("~/components/partials/blog/BlogGrid"),
  {
    loading: () => <p>Loading...</p>
  }
)
const DynamicAnnouncementGrid = dynamic(
  () => import("~/components/partials/blog/AnnouncementGrid"),
  {
    loading: () => <p>Loading...</p>
  }
)
const DynamicSubscribe = dynamic(
  () => import("~/components/shared/sections/Subscribe"),
  {
    loading: () => <p>Loading...</p>
  }
)
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
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  autoplay: true,
  dots: false,
  initialSlide: 0,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}
const carouselSettingVdo = {
  infinite: false,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  autoplay: false,
  dots: false,
  initialSlide: 0,
  nextArrow: "",
  prevArrow: "",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

const HomeDefaultPage = (props) => {
  const [promotions, setPromotions] = useState([])
  const [details, setDetails] = useState([])
  var const_url = "https://stemnovateimages.s3.us-east-2.amazonaws.com/"
  useEffect(() => {
    props.SetMainMenuhandler(props.menus)
    if (props.promotionDetails.status === 200) {
      setPromotions(props.promotionDetails.data)
    }
    if (props.vdoDetails.status === 200) {
      setDetails(props.vdoDetails.data)
    }
  }, [])
  const imgRef = useRef(null)
  var ogImage = ""
  var banner_imag_data = props?.promotionDetails?.data
  if (banner_imag_data.length > 0) {
    var newArr = banner_imag_data.map(function (val, index) {
      if (val.share) {
        var bn_img = val.shareimage
        ogImage = `${process.env.AWS_S3BUCKET_URL}${bn_img}`
      }
    })
  }

  return (
    <Container
      title="Your Drug Discovery Partner"
      ogimg={ogImage}
      menus={props.menus}
      header={<HeaderDefault classes="without-border" menus={props.menus} />}
      description="Stemnovate page on drug discovery. The platforms provide solutions for next gen liver, heart and brain cell modelling. "
    >
      <main id="homepage-one">
        <div className="ps-top-banners">
          <div className="ps-section--banner ps-banner--container mx-0">
            <div className="ps-section__overlay">
              <div className="ps-section__loading"></div>
            </div>
            <Slider {...carouselSettingVdo} className="ps-carousel">
              {details &&
                details?.map((data, key) => (
                  <div className="carousel-item" key={key}>
                    <div className="ps-banner">
                      <div className="container-no-round">
                        <div className="ps-banner__block">
                          <div className="ps-banner__content">
                            <div className=" d-flex justify-content-between ">
                              <div className="d-flex flex-column content-section">
                                <div
                                  className="d-md-none position-relative"
                                  style={{ zIndex: "1" }}
                                >
                                  <div
                                    className="ps-banner__title text-white"
                                    style={{
                                      marginTop: "18%",
                                      height: "100px"
                                    }}
                                    dangerouslySetInnerHTML={{
                                      __html: data?.video_text
                                    }}
                                  ></div>
                                  <div>
                                    {data.url == "" ? (
                                      ""
                                    ) : (
                                      <a
                                        className={
                                          data?.btn_text
                                            ? "bg-warning ps-banner__shop "
                                            : ""
                                        }
                                        style={{
                                          fontSize: "large",
                                          marginTop: "3%"
                                        }}
                                        href={`${data?.url}`}
                                        rel="noreferrer"
                                      >
                                        {data?.btn_text}
                                      </a>
                                    )}
                                  </div>
                                </div>
                                <div className="d-md-none position-absolute top-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center banner-img-container">
                                  <video
                                    autoPlay
                                    loop
                                    muted
                                    width={505}
                                    height={505}
                                  >
                                    <source src={const_url + data?.video} />
                                  </video>
                                </div>

                                <div
                                  style={{
                                    position:
                                      data?.video_text_position !== "null" &&
                                      data?.video_text_position !== "Left"
                                        ? "absolute"
                                        : "",
                                    right:
                                      data?.video_text_position == "Right" &&
                                      data?.video_text_position !== "null" &&
                                      data?.video_text_position !== "Center"
                                        ? data?.right_margin_text + "%"
                                        : "0%",
                                    top:
                                      data?.video_text_position == "Top" &&
                                      data?.video_text_position !== "null" &&
                                      data?.video_text_position !== "Center"
                                        ? data?.top_margin_text + "%"
                                        : "0%",
                                    bottom:
                                      data?.video_text_position == "Bottom" &&
                                      data?.video_text_position !== "null" &&
                                      data?.video_text_position !== "Center"
                                        ? data?.bottom_margin_text + "%"
                                        : "0%",
                                    marginLeft:
                                      data?.video_text_position == "Left" &&
                                      data?.video_text_position !== "null"
                                        ? "0%"
                                        : data?.left_margin_text + "%",
                                    marginTop:
                                      data?.video_text_position == "Top" &&
                                      data?.video_text_position !== "null"
                                        ? "0%"
                                        : data?.top_margin_text + "%",
                                    marginBottom:
                                      data?.video_text_position == "Bottom" &&
                                      data?.video_text_position !== "null"
                                        ? "0%"
                                        : data?.bottom_margin_text + "%",
                                    marginRight:
                                      data?.video_text_position == "Right" &&
                                      data?.video_text_position !== "null"
                                        ? "0%"
                                        : data?.right_margin_text + "%",
                                    zIndex: "1"
                                  }}
                                  className={
                                    "d-none d-md-flex flex-column ps-banner__title text-white css-typing"
                                  }
                                  dangerouslySetInnerHTML={{
                                    __html: data?.video_text
                                  }}
                                ></div>

                                {data?.btn_position == "Right" ? (
                                  <div
                                    style={{
                                      position: "absolute",
                                      right: data?.right_margin_btn + "%",
                                      marginLeft: data?.left_margin_btn + "%",
                                      marginTop: data?.top_margin_btn + "%",
                                      marginBottom:
                                        data?.bottom_margin_btn + "%"
                                    }}
                                    className="d-none d-md-flex"
                                  >
                                    {data.url == "" ? (
                                      ""
                                    ) : (
                                      <a
                                        className={
                                          data?.btn_text
                                            ? "bg-warning ps-banner__shop"
                                            : ""
                                        }
                                        style={{
                                          marginLeft: "197px",
                                          marginTop: "51px"
                                        }}
                                        href={`${data?.url}`}
                                        rel="noreferrer"
                                      >
                                        {data?.btn_text}
                                      </a>
                                    )}
                                  </div>
                                ) : data?.btn_position == "Top" ? (
                                  <div
                                    style={{
                                      position: "absolute",
                                      top: data?.top_margin_btn + "%",
                                      marginLeft: data?.left_margin_btn + "%",
                                      marginRight: data?.right_margin_btn + "%",
                                      marginBottom:
                                        data?.bottom_margin_btn + "%"
                                    }}
                                    className="d-none d-md-flex"
                                  >
                                    {data.url == "" ? (
                                      ""
                                    ) : (
                                      <a
                                        className={
                                          data?.btn_text
                                            ? "bg-warning ps-banner__shop"
                                            : ""
                                        }
                                        style={{
                                          marginLeft: "197px",
                                          marginTop: "51px"
                                        }}
                                        href={`${data?.url}`}
                                        rel="noreferrer"
                                      >
                                        {data?.btn_text}
                                      </a>
                                    )}
                                  </div>
                                ) : data?.btn_position == "Bottom" ? (
                                  <div
                                    style={{
                                      position: "absolute",
                                      bottom: data?.bottom_margin_btn + "%",
                                      marginLeft: data?.left_margin_btn + "%",
                                      marginRight: data?.right_margin_btn + "%",
                                      marginTop: data?.top_margin_btn + "%"
                                    }}
                                    className="d-none d-md-flex"
                                  >
                                    {data.url == "" ? (
                                      ""
                                    ) : (
                                      <a
                                        className={
                                          data?.btn_text
                                            ? "bg-warning ps-banner__shop"
                                            : ""
                                        }
                                        style={{
                                          marginLeft: "197px",
                                          marginTop: "51px"
                                        }}
                                        href={`${data?.url}`}
                                        rel="noreferrer"
                                      >
                                        {data?.btn_text}
                                      </a>
                                    )}
                                  </div>
                                ) : data?.btn_position == "Center" ? (
                                  <div
                                    style={{
                                      position: "absolute",
                                      marginBottom:
                                        data?.bottom_margin_btn + "%",
                                      marginLeft: data?.left_margin_btn + "%",
                                      marginRight: data?.right_margin_btn + "%",
                                      marginTop: data?.top_margin_btn + "%"
                                    }}
                                    className="d-none d-md-flex"
                                  >
                                    {data.url == "" ? (
                                      ""
                                    ) : (
                                      <a
                                        className={
                                          data?.btn_text
                                            ? "bg-warning ps-banner__shop"
                                            : ""
                                        }
                                        style={{
                                          marginLeft: "197px",
                                          marginTop: "51px"
                                        }}
                                        href={`${data?.url}`}
                                        rel="noreferrer"
                                      >
                                        {data?.btn_text}
                                      </a>
                                    )}
                                  </div>
                                ) : (
                                  <div className="d-none d-md-flex">
                                    {data.url == "" ? (
                                      ""
                                    ) : (
                                      <a
                                        className={
                                          data?.btn_text
                                            ? "bg-warning ps-banner__shop"
                                            : ""
                                        }
                                        style={{
                                          marginLeft: "197px",
                                          marginTop: "51px"
                                        }}
                                        href={`${data?.url}`}
                                        rel="noreferrer"
                                      >
                                        {data?.btn_text}
                                      </a>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="ps-banner__thumnail ps-banner__fluid banner-img-container1">
                            <video
                              className="ps-banner__image"
                              autoPlay
                              loop
                              muted
                              layout="fill"
                              objectFit="cover"
                            >
                              <source src={const_url + data?.video} />
                            </video>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
        <DynamicAboutBanner sectionDetails={props?.sectionDetails} />
        <DynamicOurService serviceDetails={props?.serviceDetails} />
        <DynamicHowItsWork />
        <DynamicTestimonials
          promotionOfferDetails={props?.promotionOfferDetails}
        />
        <DynamicAnnouncementGrid />
        <DynamicOurClients clientDetails={props?.clientDetails} />
        <DynamicBlogGrid />
        <DynamicTestimonials_review reviewsDetails={props?.reviewsDetails} />
        <DynamicSubscribe />
      </main>
    </Container>
  )
}

export async function getServerSideProps() {
  const res = await fetch(baseUrl + "/api/menu/getmenu")
  const menus = await res?.json()

  var promotionDetails = []
  var vdoDetails = []
  var requestOptions = {
    method: "GET"
  }

  const res1 = await fetch(
    baseUrl + "/api/homebanner/getAllbanner",
    requestOptions
  )
  const myPromotionData = await res1.json()
  if (myPromotionData.status == 200) {
    promotionDetails = myPromotionData
  } else {
    promotionDetails = []
  }

  const response = await fetch(
    baseUrl + "api/homebanner/getVideoBanners_DateWise",
    requestOptions
  )
  const resData = await response.json()
  if (resData.status == 200) {
    var url = resData
    vdoDetails = url
  } else {
    vdoDetails = []
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
      menus,
      promotionDetails,
      vdoDetails,
      sectionDetails,
      serviceDetails,
      promotionOfferDetails,
      reviewsDetails,
      clientDetails
    }
  }
}
const mapStateToProps = (state) => ({
  mainmenu: state.app.ismainmenu
})
const mapDispathToProps = (dispatch) => ({
  SetMainMenuhandler: (data) => dispatch(SetMainMenu(data))
})

export default connect(mapStateToProps, mapDispathToProps)(HomeDefaultPage)
HomeDefaultPage.propTypes = {
  SetMainMenuhandler: PropTypes.any,
  menus: PropTypes.array
}
