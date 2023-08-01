import React from "react"
import BreadCrumb from "~/components/elements/BreadCrumb"
import Container from "~/components/layouts/Container"
import Image from "~/components/elements/Image"
import Link from "next/link"
import { baseUrl } from "~/repositories/Repository"
import { connect } from "react-redux"
import ProductList from "~/components/productList/productList"
import Subscribe from "~/components/shared/sections/Subscribe"
import { Tooltip } from "antd"

const diseaseScreen = () => {
  const breadcrumb = [
    {
      id: 1,
      text: "Home",
      url: "/"
    },

    {
      id: 2,
      text: "Applications",
      url: "/Applications"
    },
    {
      id: 3,
      text: "Disease Modelling"
    }
  ]

  return (
    <>
      <Container title="Disease-Modelling">
        <main className="ps-page ps-page--inner">
          <div className="ps-page__header  breadcrumb-h application-breadcrumb-bg">
            <div className="container ">
              <BreadCrumb breacrumb={breadcrumb} />
              <h1 className="text-center  text-white ">Disease Modelling</h1>
            </div>
          </div>

          <div className="ps-page__content">
            <div className="ps-about">
              <div className=" about-section ">
                <div className="container">
                  <div className="center-box">
                    <p className=" vertical-center">
                      According to the FDA, Drug-Induced Liver Injury has been
                      the most frequent single cause of safety-related drug
                      marketing withdrawals for the past 50 years. It is often
                      associated with acute liver failures.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-02-section">
                <div className="container">
                  <section className="ps-section--block-grid ">
                    <div className="ps-section__thumbnail">
                      <Link href="#">
                        <div className="ps-section__image link-hover-thumb-shape">
                        <Image
                          src="/static/img/applications/Liver.jpg"
                          alt="LIVER"
                          width={1200}
                          height={675}
                        />
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content">
                      <div className="ps-section__desc ">
                        <h2 className="text-white font-weight-bold">Liver</h2>

                        <p className="text-white">
                          Drug-Induced Liver Injury is often associated with
                          acute liver failures. Modelling drug metabolism and
                          transport in the liver is central for drug development
                          due to its contribution to drug clearance and
                          bioavailability.
                        </p>
                        <p className="p-3">
                          <Link href="/contact-us" >
                            <button className="btn btn-lg button-orange text-white m-4 m-5">Request A Quote</button>
                         </Link>
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>

              <div className="about-section">
                <div className="container">
                  <section className="ps-section--block-grid ">
                    <div className="ps-section__thumbnail">
                      <Link href="#">
                        <div className="ps-section__image link-hover-thumb-shape">
                        <Image
                          src="/static/img/applications/Heart.jpg"
                          alt="HEART"
                          width={1200}
                          height={675}
                        />
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content">
                      <div className="ps-section__desc">
                        <h2 className=" font-weight-bold">Heart</h2>
                        <p>
                          Heart disease is a leading cause of death across the
                          world. However, there are only a few ongoing clinical
                          trials. One of the main challenges is the use of
                          traditional testing models.
                        </p>
                        <p className="p-3">
                          <Link href="/contact-us" >
                            <button className="btn btn-lg button-orange text-white m-4 m-5">Request A Quote</button>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>

              <div className="bg-02-section">
                <div className="container">
                  <section className="ps-section--block-grid ">
                    <div className="ps-section__thumbnail">
                      <Link href="#">
                      <div className="ps-section__image link-hover-thumb-shape">
                        <Image
                          src="/static/img/applications/Neurons.jpg"
                          alt="NEURONS"
                          width={1200}
                          height={675}
                        />
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content">
                      <div className="ps-section__desc">
                        <h2 className="text-white font-weight-bold">Neurons</h2>

                        <p className="text-white">
                          At Stemnovate, we generate different neuronal and
                          glial cell types from induced pluripotent stem cells
                          (iPSC). Our sensory neurons (PSNs) help advance pain
                          research and hearing loss. Stemnovate neuronal cells
                          are an alternative to animal testing with great
                          potential for new drug screening.
                        </p>
                        <p className="p-3">
                          <Link href="/contact-us" >
                            <button className="btn btn-lg button-orange text-white m-4 m-5">Request A Quote</button>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <div className="about-section">
                <div className="container">
                  <section className="ps-section--block-grid ">
                    <div className="ps-section__thumbnail">
                      <Link href="#">
                      <div className="ps-section__image link-hover-thumb-shape">
                        <Image
                          src="/static/img/applications/Multispecies-Platform.webp"
                          alt="Multispecies Platform"
                          width={1200}
                          height={675}
                        />
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content">
                      <div className="ps-section__desc">
                        <h2 className=" font-weight-bold">
                          Multispecies Platform
                        </h2>
                        <p>
                          We reduce animal testing by offering multispecies
                          cells to model disease and accelerate discoveries in
                          the animal health industry.{" "}
                          <Tooltip title="Research: Stem Cell Study Creates Functional Neurons (equimanagement.com)">
                            <a
                              rel="noreferrer"
                              href="https://equimanagement.com/news/research-stem-cell-study-creates-functional-neurons-14811/"
                              className="reference-website"
                              target={"_blank"}
                            >
                              In 2015, our CEO Dr Ruchi announced the first in
                              the world functional neurons from equine iPSCs.
                            </a>
                          </Tooltip>{" "}
                          Since then, we have created models for several other
                          animal species for industry and academia usage.
                        </p>
                        <p className="p-3">
                          <Link href="/contact-us" >
                            <button className="btn btn-lg button-orange text-white m-4 m-5">Request A Quote</button>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <div className="about-section">
                <div className="container">
                  <ProductList slug="Disease-Modelling" />
                </div>
              </div>

              <Subscribe />
            </div>
          </div>
        </main>
        </Container>
    </>
  )
}

export async function getServerSideProps({ query }) {
  const slug = query.slug
  var ProductData = []
  var data = ""
  if (slug != undefined) {
    data = slug[slug.length - 1]
    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    var raw = JSON.stringify({
      slug: data
    })

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    }

    const res = await fetch(baseUrl + "/api/products/catbyname", requestOptions)
    const myProductData = await res.json()
    ;(ProductData = myProductData)
  }

  // // Pass data to the page via props
  return { props: { ProductData } }
}

// export default texicologyScreen;
export default connect((state) => state)(diseaseScreen)
