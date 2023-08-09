import React from "react"
import BreadCrumb from "~/components/elements/BreadCrumb"
import Container from "~/components/layouts/Container"
import { connect } from "react-redux"
import ProductList from "~/components/productList/productList"
import Subscribe from "~/components/shared/sections/Subscribe"
import Link from "next/link"
import Image from "~/components/elements/Image"

const texicologyScreen = () => {
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
      text: "Diagnostics"
    }
  ]

  return (
    <>
      <Container
        title="Diagnostics"
        description="Stemnovate page for  diagnostic products and reserach and development."
      >
        <main className="ps-page ps-page--inner">
          <div className="ps-page__header  breadcrumb-h application-breadcrumb-bg">
            <div className="container ">
              <BreadCrumb breacrumb={breadcrumb} />
              <h1 className="text-center  text-white ">Diagnostics</h1>
            </div>
          </div>

          <div className="ps-page__content">
            <div className="ps-about">
              <div className=" about-section ">
                <div className="container">
                  <div className="center-box">
                    <p className=" vertical-center">
                      At Stemnovate, we integrate advanced bioinformatics{" "}
                      <b>within</b> our cellular platform to identify biomarkers
                      that can help diagnose{" "}
                      <b>liver, heart and neurodegenerative diseases early.</b>
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
                            src="/static/img/applications/Rapid--Diagnostics.jpg"
                            alt="RAPID DIAGNOSTICS"
                            width={1200}
                            height={675}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content">
                      <div className="ps-section__desc ">
                        <h2 className="text-white font-weight-bold">
                          RAPID DIAGNOSTICS
                        </h2>

                        <p className="text-white">
                          Stemnovate developed a revolutionary High Fidelity
                          Isothermal Nucleic Acid Amplification technology on a
                          chip. It promises rapid, sensitive and specific
                          diagnosis of infectious, inherited and genetic
                          diseases with the potential to overcome the drawbacks
                          identified in conventional PCR for field application
                          and mass testing. It has greater amplification
                          efficiency and produces higher DNA yields than PCR
                          owing to its undisrupted and sustained enzyme
                          activity.
                        </p>
                        <p className="p-3">
                          <Link href="/contact-us">
                            <button className="btn btn-lg button-orange text-white m-4 m-5">
                              Request A Quote
                            </button>
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
                            src="/static/img/applications/Early-Diagnosis-of-heart-conditions.jpg"
                            alt="EARLY DIAGNOSIS OF HEART CONDITIONS<"
                            width={1200}
                            height={675}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content">
                      <div className="ps-section__desc">
                        <h2 className=" font-weight-bold">
                          EARLY DIAGNOSIS OF HEART CONDITIONS
                        </h2>
                        <p>
                          The diagnosis of heart failure is difficult in the
                          early stages or before a constellation of physical
                          signs and symptoms associated with the process appear.
                          This leads to delayed diagnosis and increases the risk
                          of complications. Heart failure is becoming a
                          significant non-communicable disease leading to death
                          in ageing and young individuals globally.
                          <br />
                          <br />
                          We have dedicated ourselves to finding biomarkers to
                          characterise and understand heart disease and other
                          research that can contribute to early diagnosis.
                        </p>
                        <p className="p-3">
                          <Link href="/contact-us">
                            <button className="btn btn-lg button-orange text-white m-4 m-5">
                              Request A Quote
                            </button>
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
                            src="/static/img/applications/New-Diagnostics-Assays.jpg"
                            alt="NEW DIAGNOSTICS ASSAYS"
                            width={1200}
                            height={675}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content">
                      <div className="ps-section__desc">
                        <h2 className="text-white font-weight-bold">
                          NEW DIAGNOSTICS ASSAYS
                        </h2>

                        <p className="text-white">
                          Our strength is in molecular sciences and
                          bioinformatics. We develop novel technology and
                          partner with companies to improve stringency for
                          existence assays and better controls, saving cost and
                          time. Our lab follows rigorous screening protocols to
                          make sure you obtain reliable diagnostic results.
                        </p>
                        <p className="p-3">
                          <Link href="/contact-us">
                            <button className="btn btn-lg button-orange text-white m-4 m-5">
                              Request A Quote
                            </button>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <div className="about-section">
                <div className="container">
                  <h2>OUR PARTNERSHIPS</h2>
                  <section className="ps-section--block-grid ">
                    <div className="ps-section__thumbnail">
                      <a
                        rel="noopener noreferrer"
                        target={"_blank"}
                        title="Click here to read more"
                        href="https://www.npl.co.uk/news/m4r-supports-development-of-rapid-covid-test"
                      >
                        <Image
                          src="/static/img/applications/our-partner.jpeg"
                          alt="m4r-supports-development-of-rapid-covid-test"
                          width={1000}
                          height={290}
                        />
                      </a>
                    </div>
                    <div className="ps-section__thumbnail">
                      <a
                        rel="noopener noreferrer"
                        target={"_blank"}
                        title="Click here to read more"
                        href="https://www.npl.co.uk/news/m4r-supports-development-of-rapid-covid-test"
                      >
                        <Image
                          src="/static/img/applications/our-partner-2.jpeg"
                          alt="m4r-supports-development-of-rapid-covid-test"
                          width={1000}
                          height={290}
                        />
                      </a>
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

// export default texicologyScreen;
export default connect((state) => state)(texicologyScreen)
