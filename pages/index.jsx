import dynamic from "next/dynamic"
import React, { useState, useEffect } from "react"
import { SetMainMenu } from "~/store/app/action"
import { connect } from "react-redux"
import { baseUrl } from "~/repositories/Repository"
import PropTypes from "prop-types"
import Slider from "react-slick"
// import { useRouter } from 'next/router'

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
  () => import("~/components/partials/blog/BlogGridNew"),
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
  dots: true,
  initialSlide:0,
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
  // const router = useRouter()
  // console.log("router", router)
  useEffect(() => {
    props.SetMainMenuhandler(props.menus)
  }, [])

  const [promotions, setPromotions] = useState([])

  useEffect(() => {
    if (props.promotionDetails.status === 200) {
      setPromotions(props.promotionDetails.data)
    }
  }, [])
  // console.log("promotions----------------",promotions)

  var ogImage = ""
  var banner_imag_data = props?.promotionDetails?.data;
  if(banner_imag_data.length>0){
    var newArr = banner_imag_data.map(function(val, index){ 
       if(val.share){
          var bn_img = val.shareimage
          console.log("bn_img",bn_img)
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
            <Slider {...carouselSetting} className="ps-carousel">
              {promotions &&
                promotions?.map((data, key) => (
                  <div className="carousel-item" key={key}>
                    <div
                      className="ps-banner"
                      style={{ background: "#103178", minHeight: 0 }}
                      >
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
                                      marginTop: "20px",
                                      marginBottom: "105px"
                                    }}
                                    dangerouslySetInnerHTML={{
                                      __html: data?.banner_content
                                    }}
                                  ></div>
                                  <div>
                                    {data.url == "" ? (
                                      ""
                                    ) : (
                                      <a
                                        className="bg-warning ps-banner__shop py-1 pl-30 pr-30 rounded-10"
                                        href={`${data?.url}`}
                                        rel="noreferrer"
                                      >
                                        {data?.btn_text}
                                      </a>
                                    )}
                                  </div>
                                </div>
                                <div className="d-md-none position-absolute top-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center ">
                                  <Image
                                    src={`${process.env.AWS_S3BUCKET_URL}${data.mobimage}`}
                                    alt={data?.title}
                                    width={405}
                                    height={255}
                                    placeholder="blur"
                                    blurDataURL="/static/image/blurred.png"
                                  />
                                </div>
                                <div
                                  className="d-none d-md-flex ps-banner__title text-white "
                                  dangerouslySetInnerHTML={{
                                    __html: data?.banner_content
                                  }}
                                ></div>
                                <div className="d-none d-md-flex">
                                  {data.url == "" ? (
                                    ""
                                  ) : (
                                    <a
                                      className="bg-warning ps-banner__shop"
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
                              </div>
                            </div>
                          </div>

                          <div className="ps-banner__thumnail ps-banner__fluid">
                            <Image
                              className="ps-banner__image"
                              src={`${process.env.AWS_S3BUCKET_URL}${data.image}`}
                              alt={data?.title}
                              width={1000}
                              height={1000}
                              layout="fill"
                              placeholder="blur"
                              blurDataURL="/static/image/blurred.png"
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
        <DynamicCaseStudy />
        <DynamicHowItsWork />
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
