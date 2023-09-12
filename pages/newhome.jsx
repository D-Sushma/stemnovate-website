import dynamic from "next/dynamic"
import React, { useState, useEffect } from "react"
// import Container from "~/components/layouts/Container"
// import HeaderDefault from "~/components/shared/headers/HeaderDefault"
import { SetMainMenu } from "~/store/app/action"
import { connect } from "react-redux"
import { baseUrl } from "~/repositories/Repository"
import PropTypes from "prop-types"
import Slider from "react-slick"
// import NextArrow from "~/components/elements/carousel/NextArrow"
// import PrevArrow from "~/components/elements/carousel/PrevArrow"

const HeaderDefault = dynamic(
  () => import("~/components/shared/headers/HeaderDefault"),
  { loading: () => <p>Loading...</p> }
)
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
const DynamicAboutBanner = dynamic(
  () => import("~/components/partials/pages/about-us/AboutBanner-old"),
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
const DynamicWomenHealth = dynamic(
  () => import("~/components/shared/sections/WomenHealth"),
  {
    loading: () => <p>Loading...</p>
  }
)
const DynamicCaseStudy = dynamic(
  () => import("~/components/shared/sections/CaseStudy"),
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
const DynamicSubscribe = dynamic(
  () => import("~/components/shared/sections/Subscribe"),
  {
    loading: () => <p>Loading...</p>
  }
)

const carouselSetting = {
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  autoplay: true,
  dots: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
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

const HomeDefaultPage = (props) => {
  useEffect(() => {
    props.SetMainMenuhandler(props.menus)
  }, [])

  const [promotions, setPromotions] = useState([])

  useEffect(() => {
    if (props.promotionDetails.status === 200) {
      setPromotions(props.promotionDetails.data)
    }
  }, [])

  return (
    <Container
      title="Your Drug Discovery Partner"
      menus={props.menus}
      header={<HeaderDefault classes="without-border" menus={props.menus} />}
    >
      <main id="homepage-one">
        <div className="ps-top-banners">
          <div className="ps-section--banner ps-banner--container">
            <div className="ps-section__overlay">
              <div className="ps-section__loading"></div>
            </div>
            <Slider {...carouselSetting} className="ps-carousel">
              {promotions &&
                promotions?.map((data, key) => (
                  <div className="carousel-item" key={key}>
                    <div
                      className="ps-banner"
                      style={{ background: "#103178" }}
                    >
                      <div className="container-no-round">
                        <div className="ps-banner__block">
                          <div className="ps-banner__content">
                            <div className=" d-flex justify-content-between ">
                              <div className="d-flex flex-column content-section">
                                <div className="d-md-none w-100 h-100 d-flex flex-column justify-content-center align-items-center mt-10">
                                  <img
                                    // style={{minWidth:"60%",maxWidth:"60%", minHeight:"200px",maxHeight:"200px"}}
                                    // src="/static/image/Partnership.png"
                                    src={`${process.env.AWS_S3BUCKET_URL}${data.mobimage}`}
                                    alt="alt"
                                  />
                                </div>
                                <div
                                  className="ps-banner__title text-white mt-40"
                                  dangerouslySetInnerHTML={{
                                    __html: data?.banner_content
                                  }}
                                ></div>
                                <div>
                                  {data.url == "" ? (
                                    ""
                                  ) : (
                                    <a
                                      className="bg-warning ps-banner__shop"
                                      href={`${data?.url}`}
                                    >
                                      {data?.btn_text}
                                    </a>
                                  )}
                                </div>
                                {/* <div className="d-md-none w-100 h-100 d-flex flex-column justify-content-center align-items-center mt-10">
                                  <img
                                    // style={{minWidth:"60%",maxWidth:"60%", minHeight:"200px",maxHeight:"200px"}}
                                    // src="/static/image/Partnership.png"
                                    src={`${process.env.AWS_S3BUCKET_URL}${data.mobimage}`}
                                    alt="alt"
                                  />
                                </div> */}
                              </div>
                            </div>
                          </div>

                          <div className="ps-banner__thumnail ps-banner__fluid">
                            <img
                              className="ps-banner__image"
                              src={`${process.env.AWS_S3BUCKET_URL}${data.image}`}
                              alt="alt"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>

        <DynamicAboutBanner />
        <DynamicOurService />
        <DynamicHowItsWork />
        <DynamicWomenHealth />
        <DynamicCaseStudy />
        <DynamicTestimonials />
        <DynamicOurClients />
        <DynamicBlogGrid />
        <DynamicSubscribe />
      </main>
    </Container>
  )
}

export async function getServerSideProps() {
  const res = await fetch(baseUrl + "/api/menu/getmenu")
  const menus = await res.json()

  var promotionDetails = []
  var requestOptions = {
    method: "GET"
  }

  const res1 = await fetch(
    baseUrl + "/api/homebanner/getAllbanner",
    requestOptions
  )
  const myPromotionData = await res1.json()
  console.log("myPromotionData", myPromotionData)
  if (myPromotionData.status == 200) {
    promotionDetails = myPromotionData
  } else {
    promotionDetails = []
  }

  return {
    props: { menus, promotionDetails } // will be passed to the page component as props
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
