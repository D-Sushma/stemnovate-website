import React, { useEffect, useState } from "react"
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
import Image from '~/components/elements/Image'
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
      title="The creation of new scalable manufacturing process"
      ogimg="https://stemnovate.co.uk/static/img/Blog/2.jpg"
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
                          src="/static/img/Blog/2.jpg"
                          alt="The creation of new scalable manufacturing process"
                          width={1200}
                          height={675}
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="ps-section__content">
                    <div className="ps-section__desc">
                      <h1>
                        The creation of new scalable manufacturing process
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
                            "The creation of new scalable manufacturing process."
                          }
                          hashtag={"#Stemnovate"}
                        >
                          <FacebookIcon size={42} round />
                        </FacebookShareButton>
                        <TwitterShareButton
                          url={url}
                          quote={
                            "The creation of new scalable manufacturing process."
                          }
                          hashtag={"#Stemnovate"}
                        >
                          <TwitterIcon size={42} round />
                        </TwitterShareButton>
                        <LinkedinShareButton
                          url={url}
                          quote={
                            "The creation of new scalable manufacturing process."
                          }
                          hashtag={"#Stemnovate"}
                        >
                          <LinkedinIcon size={42} round />
                        </LinkedinShareButton>
                        <WhatsappShareButton
                          url={url}
                          quote={
                            "The creation of new scalable manufacturing process."
                          }
                          hashtag={"#Stemnovate"}
                        >
                          <WhatsappIcon size={42} round />
                        </WhatsappShareButton>
                      </div>
                      <div className="col-md-4">
                        <span className="text-right">May 05, 2020</span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="container">
                <div className="center-box">
                  <p className=" vertical-center">
                    In preclinical and clinical testing, drug-induced liver
                    injury (DILI) is the major cause of drug attrition, costing
                    pharmaceutical companies millions of dollars annually. It is
                    therefore essential to rapidly identify and remove drug
                    candidates that pose a risk, decreasing development costs
                    and improving post market success. Currently, primary human
                    hepatocytes are the most widely used cell type for
                    predicting DILI. However, when cultured in vitro, they do
                    not proliferate and rapidly lose their phenotype,
                    particularly drug metabolism. Furthermore, sources are
                    limited and usually isolated from diseased tissue, limiting
                    their utility. The cost-effective delivery of human tissue
                    from a renewable resource, such as pluripotent stem cells,
                    offers a solution to the issues associated with human
                    somatic cells for in vitro testing. Of note, stem
                    cell-derived hepatocytes have been shown to be as sensitive
                    as human hepatocytes (Szkolnicka et al. 2014, Stem Cells
                    Translational Medicine and Szkolnicka et al. 2016, Stem
                    Cells Translational Medicine). More recently, improvements
                    in culture methods and protocols have led to the automation
                    of these processes, leading to further improvements in
                    hepatocyte function and stability. We are currently using
                    those models to better understand fetal liver exposure to
                    environmental toxins and the role of the innate immune
                    system during virus infection of the liver. In the future,
                    our automated systems will be perfused, multiplexed and
                    combined with bank cell lines to study genetic variation in
                    the human population. These data will be composed of
                    standard biochemical and label-free real-time monitoring
                    measurements, generating multiparametric datasets of
                    significant value for the industry and, ultimately, the
                    patient.
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
