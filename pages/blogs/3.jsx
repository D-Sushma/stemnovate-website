import React, { useEffect, useState } from "react"
// import Container from "~/components/layouts/Container"
// import BreadCrumb from "~/components/elements/BreadCrumb"
// import Subscribe from "~/components/shared/sections/Subscribe"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "next-share"
import { useRouter } from "next/router"
import Image from "~/components/elements/Image"
import Link from "next/link"
import dynamic from 'next/dynamic'

const Container = dynamic(
  () => import("~/components/layouts/Container"),
  {loading: ()=> <p>Loading...</p>}
)
const BreadCrumb = dynamic(
  () => import("~/components/elements/BreadCrumb"),
  {loading: ()=> <p>Loading...</p>}
)
const Subscribe = dynamic(
    () => import("~/components/shared/sections/Subscribe"),
    {loading: ()=> <p>Loading...</p>}
  )

const breadcrumb = [
  {
    id: 1,
    text: "Home",
    url: "/"
  },

  {
    id: 2,
    text: "Blog-News",
    url: "/blog-news"
  }
]

const Blogs = () => {
  const [url, setUrl] = useState("")
  const router = useRouter()

  useEffect(() => {
    const host = window.location.host
    const baseUrl = `https://${host}${router.pathname}`
    setUrl(baseUrl)
  }, [router.pathname])
  return (
    <Container
      title="Stemnovate will change with liver-on-a-chip technology."
      ogimg="https://stemnovate.co.uk/static/img/Blog/3.jpg"
    >
      <main className="ps-page ps-page--inner">
        <div className="ps-page__header  breadcrumb-h application-breadcrumb-bg">
          <div className="container ">
            <BreadCrumb breacrumb={breadcrumb} />
            <h1 className="text-center  text-white p-2">Featured Blog</h1>
          </div>
        </div>
        <div className="ps-page__content">
          <div className="ps-about">
            <div className="">
              <div className="container">
                <section className="ps-section--block-grid ">
                  <div className="ps-section__thumbnail">
                    <Link href="#">
                      <div className="ps-section__image link-hover-thumb-shape">
                        <Image
                          src="/static/img/Blog/3.jpg"
                          alt="Stemnovate with its liver-on-a-chip technology"
                          width={1200}
                          height={675}
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="ps-section__content">
                    <div className="ps-section__desc">
                      <h1>
                        How Stemnovate will change drug development with its
                        liver-on-a-chip technology.
                      </h1>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <span className="text-left">Ruchi Sharma</span>
                      </div>
                      <div className="col-md-5">
                        <FacebookShareButton
                          url={url}
                          quote={
                            "How Stemnovate will change drug development with its liver-on-a-chip technology."
                          }
                          hashtag={"#Stemnovate"}
                        >
                          <FacebookIcon size={42} round />
                        </FacebookShareButton>
                        <TwitterShareButton
                          url={url}
                          quote={
                            "How Stemnovate will change drug development with its liver-on-a-chip technology."
                          }
                          hashtag={"#Stemnovate"}
                        >
                          <TwitterIcon size={42} round />
                        </TwitterShareButton>
                        <LinkedinShareButton
                          url={url}
                          quote={
                            "How Stemnovate will change drug development with its liver-on-a-chip technology."
                          }
                          hashtag={"#Stemnovate"}
                        >
                          <LinkedinIcon size={42} round />
                        </LinkedinShareButton>
                        <WhatsappShareButton
                          url={url}
                          quote={
                            "How Stemnovate will change drug development with its liver-on-a-chip technology."
                          }
                          hashtag={"#Stemnovate"}
                        >
                          <WhatsappIcon size={42} round />
                        </WhatsappShareButton>
                      </div>
                      <div className="col-md-4">
                        <span className="text-right">Aug 24, 2019</span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="container">
                <div className="center-box">
                  <p className=" vertical-center">
                    Cambridge Independent features Stemnovate in their latest
                    article:
                  </p>
                  <br />
                  <p className=" vertical-center">
                    It takes, on average, about 12 years for a new medicine to
                    reach the market – and the typical cost is an eye-watering
                    £1.2billion.
                  </p>
                  <br />
                  <p className=" vertical-center">
                    Only one in 5,000 drugs ever makes it that far. Most of
                    those that reach preclinical testing fail at that stage –
                    99.9 per cent of them. Of the few that go forward to human
                    testing, only one in five is eventually approved.
                  </p>
                  <br />
                  <p className=" vertical-center">
                    Little wonder, then, that there is a huge demand for
                    improvements to the drug discovery process.
                  </p>
                  <br />
                  <p className=" vertical-center">
                    Find out more about how Stemnovate will change drug
                    development with its liver-on-a-chip technology here.
                  </p>
                  <br />
                </div>
              </div>
            </div>

            <Subscribe />
          </div>
        </div>
      </main>
    </Container>
  )
}

export default Blogs
