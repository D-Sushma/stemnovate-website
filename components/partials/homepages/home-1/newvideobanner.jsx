import React, { useState, useEffect } from "react"
import { SetMainMenu } from "~/store/app/action"
import NextArrow from "~/components/elements/carousel/NextArrow"
import PrevArrow from "~/components/elements/carousel/PrevArrow"
import { baseUrl } from "~/repositories/Repository"
import Slider from "react-slick"

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
const NewVideoBanner = (props) => {
  const [details, setDetails] = useState([])
  console.log("props--->", props?.props[0])

  var const_url = "https://stemnovateimages.s3.us-east-2.amazonaws.com/"

  useEffect(() => {
    refreshData()
  }, [])

  const refreshData = async () => {
    var requestParam = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        promoId: props?.props[0]
      })
    }
    const response = await fetch(
      baseUrl + "api/homebanner/getVideoBanners",
      requestParam
    )
    const resData = await response.json()
    console.log("resData_getVideoBanners", resData)
    if (resData.status == 200) {
      // var url = resData.data[0];
      var url = resData.data
      console.log("url->", url)
      setDetails(url)
    }
  }

  return (
    <section className="ps-section--banner ps-top-banners">
      <main id="homepage-one">
        <div className="ps-section__overlay">
          <div className="ps-section__loading"></div>
        </div>
        <div className="ps-top-banners">
          <div className="ps-section--banner ps-banner--container mx-0">
            <div className="ps-section__overlay">
              <div className="ps-section__loading"></div>
            </div>
            <Slider {...carouselSettingVdo} className="ps-carousel">
              {details &&
                details?.map((data, key) => (
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
                                    className="banner-img-container"
                                    autoPlay
                                    loop
                                    muted
                                    width={505}
                                    height={505}
                                  >
                                    <source src={const_url + data?.video} />
                                  </video>
                                </div>

                                {data?.video_text_position == "Right" ? (
                                  <div
                                    style={{
                                      position: "absolute",
                                      right: data?.right_margin_text + "%",
                                      marginLeft: data?.left_margin_text + "%",
                                      marginTop: data?.top_margin_text + "%",
                                      marginBottom:
                                        data?.bottom_margin_text + "%"
                                    }}
                                    className={
                                      "d-none d-md-flex flex-column ps-banner__title text-white"
                                    }
                                    dangerouslySetInnerHTML={{
                                      __html: data?.video_text
                                    }}
                                  ></div>
                                ) : data?.video_text_position == "Top" ? (
                                  <div
                                    style={{
                                      position: "absolute",
                                      top: data?.top_margin_text + "%",
                                      marginBottom:
                                        data?.bottom_margin_text + "%",
                                      marginLeft: data?.left_margin_text + "%",
                                      marginRight: data?.right_margin_text + "%"
                                    }}
                                    className={
                                      "d-none d-md-flex flex-column ps-banner__title text-white"
                                    }
                                    dangerouslySetInnerHTML={{
                                      __html: data?.video_text
                                    }}
                                  ></div>
                                ) : data?.video_text_position == "Bottom" ? (
                                  <div
                                    style={{
                                      position: "absolute",
                                      bottom: data?.bottom_margin_text + "%",
                                      marginTop: data?.top_margin_text + "%",
                                      marginLeft: data?.left_margin_text + "%",
                                      marginRight: data?.right_margin_text + "%"
                                    }}
                                    className={
                                      "d-none d-md-flex flex-column ps-banner__title text-white"
                                    }
                                    dangerouslySetInnerHTML={{
                                      __html: data?.video_text
                                    }}
                                  ></div>
                                ) : data?.video_text_position == "Center" ? (
                                  <div
                                    style={{
                                      position: "absolute",
                                      marginBottom:
                                        data?.bottom_margin_text + "%",
                                      marginTop: data?.top_margin_text + "%",
                                      marginLeft: data?.left_margin_text + "%",
                                      marginRight: data?.right_margin_text + "%"
                                    }}
                                    className={
                                      "d-none d-md-flex flex-column ps-banner__title text-white"
                                    }
                                    dangerouslySetInnerHTML={{
                                      __html: data?.video_text
                                    }}
                                  ></div>
                                ) : (
                                  <div
                                    className={
                                      "d-none d-md-flex flex-column ps-banner__title text-white"
                                    }
                                    dangerouslySetInnerHTML={{
                                      __html: data?.video_text
                                    }}
                                  ></div>
                                )}

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
                              width={1000}
                              height={1000}
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
      </main>
    </section>
  )
}

export default NewVideoBanner
