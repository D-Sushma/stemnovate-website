import React, { useRef } from "react"
import { IoIosArrowDown } from "react-icons/io"
import { Tooltip } from "antd"
import Link from "next/link"
import dynamic from "next/dynamic"
import InvestorRelation from "~/public/static/image/Investor-Relations-Header.svg"
import Slider from "react-slick"
import { baseUrl } from "~/repositories/Repository"

const Container = dynamic(() => import("~/components/layouts/Container"), {
  loading: () => <p>Loading...</p>
})
const BreadCrumb = dynamic(() => import("~/components/elements/BreadCrumb"), {
  loading: () => <p>Loading...</p>
})
const Image = dynamic(() => import("~/components/elements/Image"), {
  loading: () => <p>Loading...</p>
})
const BannerImage = dynamic(() => import("~/components/elements/BannerImage"), {
  loading: () => <p>Loading...</p>
})
const BlogGrid = dynamic(() => import("~/components/partials/blog/BlogGrid"), {
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

const breadcrumb = [
  {
    id: 1,
    text: "Home",
    url: "/"
  },

  {
    id: 2,
    text: "Investor Relations"
  }
]

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

const InvestorRelationScreen = (props) => {
  const investorRef = useRef(null)
  const gotoInvestor = () => {
    if (investorRef && investorRef.current) {
      window.scrollTo({
        behavior: "smooth",
        top: investorRef.current.offsetTop
      })
    }
  }

  var ogImage = ""
  var images1 = []
  var products_img1 = props?.ProductData?.data[0]?.og_img?.split(",")
  var ogDesc = props?.ProductData?.data[0]?.og_desc
  if (products_img1 && products_img1.length > 0) {
    products_img1.map((item) => {
      images1.push(`${process.env.AWS_S3BUCKET_URL}${item}`)
    })
    ogImage = images1[0]
  }
  var bgImage = `${process.env.AWS_S3BUCKET_URL}${props?.ProductData?.data[0]?.banner_img}`

  return (
    <Container
      title={"Investor Relations | Your Drug Discovery Platform"}
      ogimg={ogImage}
      description={ogDesc}
    >
      <main className="ps-page ps-page--inner">
        <div className="ps-page__header  breadcrumb-h  banner-breadcrumb-bg">
          <BannerImage
            alt="investor-banner-image"
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
              Investor Relations
            </h1>
          </div>
        </div>

        <div className="ps-page__content">
          <div className="ps-about">
            <div
              className="breadcrumb-investor investor-bg-breadcrumb-bg"
              // className="investor-relations-section"
            >
              <BannerImage
                alt="cell-culture-banner"
                src={InvestorRelation}
                layout="fill"
                objectFit="cover"
                priority={true}
                quality={80}
                style={{
                  zIndex: -1
                }}
              />
              <div className="container">
                <div className="investor-align center-box">
                  <div className="vertical-center">
                    <h2 className="text-white">
                      STEMNOVATE IS PIONEERING INNOVATIVE <br />
                      PLATFORMS FOR DRUG DISCOVERY AND DIAGNOSTICS.
                    </h2>
                    <p className="text-white" style={{ fontSize: "1.17em" }}>
                      The company is{" "}
                      <Tooltip title="Britain’s Most Exciting Human Health Companies (o2h.com)">
                        <a
                          rel="noopener noreferrer"
                          href="https://o2h.com/chaitimepost/britains-most-exciting-human-health-companies/"
                          className="reference-website text-white"
                          target={"_blank"}
                        >
                          recognized among the most innovative companies in the
                          UK
                        </a>
                      </Tooltip>
                      , <br /> is the recipient of several prestigious grants
                      and is fast growing globally.
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex mt-5 justify-content-center">
                <a href={gotoInvestor}>
                  <IoIosArrowDown
                    className="myArrow"
                    onClick={gotoInvestor}
                    size={30}
                    color={"#c3bfbf"}
                  />
                </a>
              </div>
            </div>

            <div ref={investorRef}>
              <div className="bg-02-section">
                <div className="container">
                  <Slider {...carouselSetting} className="ps-carousel">
                    {props?.TeamData?.data?.map((data, key) => (
                      <div className="ps-carousel__item" key={key}>
                        <section className="ps-section--block-grid pt-3">
                          <div className="ps-section__thumbnail d-flex justify-content-center align-items-center">
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
            </div>

            <div className="container pt-5">
              <h2 className="text-center base-text-secondary p-2 pt-3 font-weight text-uppercase">
                Stemnovate Timeline
                <Link href="#">
                  <div className="ps-section__image link-hover-thumb-shape">
                    <Image
                      src="/static/img/investors/Info-Graphics.svg"
                      alt="Stemnovate Timeline"
                      width={1920}
                      height={988}
                      quality={80}
                    />
                  </div>
                </Link>
              </h2>
            </div>

            <div className="vision">
              <h2 className="text-center base-text-secondary font-weight text-uppercase">
                <Link href="#">
                  <div className="ps-section__image link-hover-thumb-shape">
                    <Image
                      src="/static/img/investors/vision-update.svg"
                      alt="vision-stemnovate"
                      width={1920}
                      height={988}
                      quality={80}
                    />
                  </div>
                </Link>
              </h2>
            </div>

            <div className="about-section">
              <div className="container">
                <blockquote className="text-center p-5">
                  <h2 style={{ Color: "#0a939b", fontSize: "27px" }}>
                    &quot;To define is to limit&quot;-{" "}
                    <small>Oscar Wilde</small>
                  </h2>
                </blockquote>
              </div>
            </div>

            <div className="mission">
              <h2 className="text-center base-text-secondary font-weight text-uppercase">
                <Link href="#">
                  <div className="ps-section__image link-hover-thumb-shape">
                    <Image
                      src="/static/img/investors/mission-update.svg"
                      alt="mission-stemnovate"
                      width={1920}
                      height={988}
                      quality={80}
                    />
                  </div>
                </Link>
              </h2>
            </div>

            <div className=" bg-02-section">
              <div className="container">
                <section className="ps-section--block-grid pt-3">
                  <div className="ps-section__thumbnail d-flex justify-content-center align-items-center">
                    <Link href="#">
                      <div className="ps-section__image h-100 w-50 mb-0 link-hover-thumb-shape resize-container image-box-container mx-2" >
                        <Image
                          className="rounded"
                          src="/static/img/investors/STEM-EDUCATION.svg"
                          alt="Stem Education"
                          width={270}
                          height={380}
                          // height={350}
                          quality={80}

                        />
                      </div>
                    </Link>
                  </div>
                  <div className="ps-section__content ">
                    <div className="ps-section__desc ">
                      <h2 className=" base-text-secondary text-uppercase">
                        Stem Education
                      </h2>
                      <p className="text-white ">
                        Knowledge, skill, and experience within STEM is
                        incredibly powerful. In fact, it’s proven that STEM
                        education offers a path to upward mobility. However, for
                        a number of reasons, so many young people don’t choose,
                        or have the option to, pursue this exciting and valuable
                        pathway. This is particularly true of women and those
                        from disadvantaged backgrounds. We’re proud to support
                        Science, Technology, Engineering and Mathematics
                        initiatives that benefit, support, and inspire the
                        younger generation around the world. Get in touch for
                        more information!
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <div className="about-section my-3">
              <div className="container">
                <h2 className="text-center base-text-secondary text-uppercase ">
                  3R-REDUCTION, REPLACEMENT, REFINEMENT
                </h2>
                <p className=" text-center ">
                  We can categorically state that we do not utilise animal
                  testing as part of our work. This is an area of our ethos that{" "}
                  <br />
                  we refuse to compromise on.
                </p>
              </div>
            </div>

            <div className=" bg-02-section">
              <div className="container">
                <section className="ps-section--block-grid pt-3">
                  <div className="ps-section__thumbnail d-flex justify-content-center align-items-center">
                    <Link href="#">
                      <div  className="ps-section__image link-hover-thumb-shape image-box-container mx-2 image-box-container-mb">
                        <Image
                          src="/static/img/investors/WOMEN-IN-SCIENCE.svg"
                          alt="WOMEN IN SCIENCE"
                          width={1200}
                          height={675}
                          quality={80}
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="ps-section__content ">
                    <div className="ps-section__desc ">
                      <h2 className="base-text-secondary text-uppercase">
                        WOMEN IN SCIENCE
                      </h2>
                      <p className="text-white ">
                        Did you know that women make up half of the workforce
                        within the science sector? All too often, women's
                        contributions in science and technology are ignored,
                        overlooked, or devalued. There can be little doubt that,
                        today, there is still a gap in female leadership within
                        our industry, a gap that is reflected by the gender pay
                        gap. Here at Stemnovate, we're proud to be a female-led
                        company and we're committed to supporting and actively
                        promoting women in science, as well as the valuable
                        contributions they make.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="container px-0">
              <div className="MissionSection">
                <div className="ps-section__thumbnail">
                  <Link href="#">
                    <div className="ps-section__image link-hover-thumb-shape">
                      <Image
                        src="/static/img/mission/bg-01.svg"
                        alt="DIVERSITY & INCLUSION"
                        width={1920}
                        height={593}
                        quality={80}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-mission">
              <div className="container">
                <h2 className=" text-uppercase">DIVERSITY & INCLUSION</h2>
                <p className="">
                  We have built an open, supportive, and positive working
                  environment where our team can perform <br /> to the highest
                  standard and achieve their very best.
                </p>

                <p className=" ">
                  We are committed to providing equal opportunities and
                  prospects for growth and development <br /> within the
                  company. We also have a strict, equal pay policy. This is
                  something we are incredibly
                  <br /> proud of, and an area of our business operations we
                  refuse to compromise on
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <BlogGrid />
    </Container>
  )
}

export async function getServerSideProps() {
  var TeamData = []

  const resTeam = await fetch(baseUrl + "/api/aboutus/getTeamdetails")

  const aboutTeamData = await resTeam.json()

  if (aboutTeamData.status == 200) {
    TeamData = aboutTeamData
  } else {
    TeamData = []
  }

  var ProductData = []
  var requestParam = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      page_name: "Investor Relations"
    })
  }
  const res = await fetch(
    baseUrl + "/api/header_banners/getBanners",
    requestParam
  )
  const myProductData = await res.json()

  if (myProductData.status == 200) {
    ProductData = myProductData
  } else {
    ProductData = []
  }

  return {
    props: {
      TeamData,
      ProductData
    }
  }
}

export default InvestorRelationScreen
