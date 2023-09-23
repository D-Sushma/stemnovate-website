import React, { useRef } from "react"
import { IoIosArrowDown } from "react-icons/io"
import { Tooltip } from "antd"
import Link from "next/link"
import Image from '~/components/elements/Image'
import dynamic from "next/dynamic"

const Container = dynamic(() => import("~/components/layouts/Container"), {
  loading: () => <p>Loading...</p>
})
const BreadCrumb = dynamic(() => import("~/components/elements/BreadCrumb"), {
  loading: () => <p>Loading...</p>
})
const Investors = dynamic(
  () => import("~/components/shared/sections/Investors"),
  { loading: () => <p>Loading...</p> }
)
const BlogGrid = dynamic(
  () => import("~/components/partials/blog/BlogGrid-New-1"),
  {
    loading: () => <p>Loading...</p>
  }
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

const InvestorRelationScreen = () => {
  const investorRef = useRef(null)
  const gotoInvestor = () => {
    console.log(investorRef.current)
    if (investorRef && investorRef.current) {
      console.log("first", investorRef.current.offsetTop)
      window.scrollTo({
        behavior: "smooth",
        top: investorRef.current.offsetTop
      })
    }
  }
  return (
    <Container
      title={"Investor Relations"}
      description="Stemnovate page is about company vision, new announcements and information relevant for investors, partners and collaborators."
    >
      <main className="ps-page ps-page--inner">
        <div className="ps-page__header  breadcrumb-h investor-relations-breadcrumb-bg">
          <div className="container ">
            <BreadCrumb breacrumb={breadcrumb} />
          </div>
          <h1 className="text-center  text-white ">Investor Relations</h1>
        </div>

        <div className="ps-page__content">
          <div className="ps-about">
            <div className="investor-relations-section">
              <section className="container">
                <div className="center-box">
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

                {/* </Reveal> */}
              </section>
              <div className="d-flex mt-5 justify-content-center">
                <IoIosArrowDown
                  className="myArrow"
                  onClick={gotoInvestor}
                  size={30}
                  color={"#c3bfbf"}
                />
              </div>
            </div>

            <div ref={investorRef}>
              <Investors />
            </div>

            <div className="container pt-5">
              <h2 className="text-center base-text-secondary p-2 pt-3 font-weight text-uppercase">
                Stemnovate Timeline
                <Link href="#">
                  <div className="ps-section__image link-hover-thumb-shape">
                    <Image
                      src="/static/img/investors/Info-Graphics.jpg"
                      alt="Stemnovate Timeline"
                      width={1920}
                      height={988}
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
                      src="/static/img/investors/vision-update.jpg"
                      alt="vision-stemnovate"
                      width={1920}
                      height={988}
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
                      src="/static/img/investors/mission-update.jpg"
                      alt="mission-stemnovate"
                      width={1920}
                      height={988}
                    />
                  </div>
                </Link>
              </h2>
            </div>

            <div className=" bg-02-section">
              <div className="container text-center">
                <section className="ps-section--block-grid">
                  <div className="ps-section__thumbnail">
                    <Link href="#">
                      <div className="ps-section__image link-hover-thumb-shape">
                        <Image
                          className="rounded"
                          src="/static/img/investors/STEM-EDUCATION.jpg"
                          // style={{ height: "342px", width: "auto" }}
                          alt="Stem Education"
                          width={270}
                          height={350}
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
                <section className="ps-section--block-grid">
                  <div className="ps-section__thumbnail">
                    <Link href="#">
                      <div className="ps-section__image link-hover-thumb-shape">
                        <Image
                          src="/static/img/investors/WOMEN-IN-SCIENCE.jpg"
                          alt="WOMEN IN SCIENCE"
                          width={1200}
                          height={675}
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
                        within the science sector? All too often, women’s
                        contributions in science and technology are ignored,
                        overlooked, or devalued. There can be little doubt that,
                        today, there is still a gap in female leadership within
                        our industry, a gap that is reflected by the gender pay
                        gap. Here at Stemnovate, we’re proud to be a female-led
                        company and we’re committed to supporting and actively
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
                        src="/static/img/mission/bg-01.jpg"
                        alt="DIVERSITY & INCLUSION"
                        width={1920}
                        height={593}
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

export default InvestorRelationScreen
