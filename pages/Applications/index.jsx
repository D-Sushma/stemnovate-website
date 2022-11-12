/* eslint-disable @next/next/no-img-element */
import React from "react"
import Container from "~/components/layouts/Container"
import BreadCrumb from "~/components/elements/BreadCrumb"
import Subscribe from "~/components/shared/sections/Subscribe"
import ProductList from "~/components/productList/productList"

const breadcrumb = [
  {
    id: 1,
    text: "Home",
    url: "/"
  },

  {
    id: 2,
    text: "Application"
  }
]

const Applications = () => {
  return (
    <Container title="Applications">
      <main className="ps-page ps-page--inner">
        <div className="ps-page__header  breadcrumb-h application-breadcrumb-bg">
          <div className="container ">
            <BreadCrumb breacrumb={breadcrumb} />
            <h1 className="text-center  text-white p-2">Applications</h1>
          </div>
        </div>
        <div className="ps-page__content">
          <div className="ps-about">
            <div className="about-section">
              <div className="container">
                <p className="text-center">
                  Stemnovate aims to fast translate research to clinical
                  applications. Our iPSCs represent valuable tools for drug
                  discovery, disease modeling, and investigation into the
                  underlying biology of cells. Differentiated PSCs can be used
                  to assess cardiac and hepatic toxicity, two major causes of
                  pharmaceutical-associated morbidity and mortality leading to
                  loss of productivity in the drug development pipeline.
                </p>
              </div>
            </div>
            <div className="bg-02-section">
              <div className="container">
                <section className="ps-section--block-grid ">
                  <div className="ps-section__thumbnail">
                    <a className="ps-section__image" href="#">
                      <img
                        src="/static/img/applications/Drug-Discovery.jpg"
                        alt="Drug Discovery Platform"
                      />
                    </a>
                  </div>
                  <div className="ps-section__content">
                    <div className="ps-section__desc ">
                      <h2 className="text-white font-weight-bold">
                        Drug Discovery Platform
                      </h2>
                      <p className="text-white">
                        Drug-induced liver injury is the leading cause of acute
                        liver failure and is an important safety issue when new
                        drugs undergo clinical trials. Liver cells do not
                        proliferate outside the body and are a limited resource.
                        <br />
                        We provide liver modelling for drug discovery, and with
                        that, we are creating heart and brain cells in the
                        laboratory. These novel models have the potential to
                        predict human drug response and ensure patient safety...{" "}
                        <a
                          href="/Applications/Drug-Discovery-Platform"
                          className="text-white font-weight-bold"
                        >
                          Read More
                        </a>
                      </p>
                      <p className="">
                        {/* <button type="button" className="btn btn-lg button-orange text-white m-4 m-5">
                                                    Build Your Project
                                                </button> */}
                        <a
                          href="/contact-us"
                          className="btn btn-lg button-orange text-white m-4 m-5"
                        >
                          Request A Quote
                        </a>
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="about-section">
              <div className="container">
                <section className="ps-section--block-grid">
                  <div className="ps-section__thumbnail">
                    <a className="ps-section__image" href="#">
                      <img
                        src="/static/img/applications/Disease-modelling.jpg"
                        alt="Disease Modelling"
                      />
                    </a>
                  </div>
                  <div className="ps-section__content">
                    <div className="ps-section__desc">
                      {" "}
                      <h2 className="  font-weight-bold">Disease Modelling</h2>
                      <p>
                        Non-communicable diseases such as liver and
                        cardiovascular diseases, neuronal degeneration, and
                        cancer kill 41 million people each year; this reflects
                        71% of all deaths worldwide. We provide innovative
                        solutions for discovering new medicines and therapies
                        for non-communicable diseases....{" "}
                        <a
                          href="/Applications/Disease-Modelling"
                          className=" font-weight-bold"
                        >
                          Read More
                        </a>
                      </p>
                      <p className="">
                        {/* <button type="button" className="btn btn-lg button-orange text-white m-4 m-5">
                                                    Build Your Project
                                                </button> */}
                        <a
                          href="/contact-us"
                          className="btn btn-lg button-orange text-white m-4 m-5"
                        >
                          Request A Quote
                        </a>
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="bg-02-section">
              <div className="container">
                <section className="ps-section--block-grid">
                  <div className="ps-section__thumbnail">
                    <a className="ps-section__image" href="#">
                      <img
                        src="/static/img/applications/Diagnostics.jpg"
                        alt="Diagnostics"
                      />
                    </a>
                  </div>
                  <div className="ps-section__content">
                    <div className="ps-section__desc ">
                      <h2 className="text-white font-weight-bold">
                        Diagnostics
                      </h2>

                      <p className="text-white">
                        At Stemnovate, we integrate advanced bioinformatics with
                        our cellular platform to identify biomarkers that help
                        diagnose liver and heart diseases early. During COVID,
                        we also developed new technology and assays for rapid
                        diagnostic ....{" "}
                        <a
                          href="/Applications/Diagnostics"
                          className="text-white font-weight-bold"
                        >
                          Read More
                        </a>
                      </p>
                      <p className="">
                        {/* <button type="button" className="btn btn-lg button-orange text-white m-4 m-5">
                                                    Build Your Project
                                                </button> */}
                        <a
                          href="/contact-us"
                          className="btn btn-lg button-orange text-white m-4 m-5"
                        >
                          Request A Quote
                        </a>
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
                    <a className="ps-section__image" href="#">
                      <img
                        src="/static/img/applications/DNA-synthesis.jpg"
                        alt="DNA Synthesis"
                      />
                    </a>
                  </div>
                  <div className="ps-section__content">
                    <div className="ps-section__desc">
                      {" "}
                      <h2 className="  font-weight-bold">DNA Synthesis</h2>
                      <p>
                        Stemnovate´s novel enzymatic DNA synthesis technology
                        improves productivity and costs to enable numerous novel
                        and exciting applications. This game-changing technology
                        has the potential for DNA data storage and new
                        therapeutics developing in the pharmaceutical sector,
                        e.g. antibody research, drug bio-production and RNAi
                        based therapeutics.....{" "}
                        <a
                          href="/Applications/DNA-Synthesis"
                          className=" font-weight-bold"
                        >
                          Read More
                        </a>
                      </p>
                      <p className="">
                        {/* <button type="button" className="btn btn-lg button-orange text-white m-4 m-5">
                                                    Build Your Project
                                                </button> */}
                        <a
                          href="/contact-us"
                          className="btn btn-lg button-orange text-white m-4 m-5"
                        >
                          Request A Quote
                        </a>
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="about-section">
              <div className="container">
                <ProductList slug="Applications" />
              </div>
            </div>

            <Subscribe />
          </div>
        </div>
      </main>
    </Container>
  )
}

export default Applications
