import React from "react"
import Link from "next/link"
import { baseUrl } from "~/repositories/Repository"
import { connect } from "react-redux"
import { Tooltip } from "antd"
import dynamic from "next/dynamic"

const Container = dynamic(() => import("~/components/layouts/Container"), {
  loading: () => <p>Loading...</p>
})
const BreadCrumb = dynamic(() => import("~/components/elements/BreadCrumb"), {
  loading: () => <p>Loading...</p>
})
const Image = dynamic(() => import("~/components/elements/Image"), {
  loading: () => <p>Loading...</p>
})
const Subscribe = dynamic(
  () => import("~/components/shared/sections/Subscribe"),
  { loading: () => <p>Loading...</p> }
)

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
      text: "Drug Discovery Platform"
    }
  ]

  return (
    <>
      <Container
        title="Drug-Discovery-Platform"
        description="Stemnovate page for information on R&D for cell based assays and preclinical research"
      >
        <main className="ps-page ps-page--inner">
          <div className="ps-page__header  breadcrumb-h application-breadcrumb-bg">
            <div className="container ">
              <BreadCrumb breacrumb={breadcrumb} />
              <h1 className="text-center  text-white ">
                Drug Discovery Platform
              </h1>
            </div>
          </div>

          <div className="ps-page__content">
            <div className="ps-about">
              <div className=" about-section ">
                <div className="container">
                  <div className="center-box">
                    <p className=" vertical-center">
                      <Tooltip title="(PDF) Exploring different approaches to improve the success of drug discovery and development projects: a review (researchgate.net)">
                        <a
                          rel="noreferrer"
                          href="https://www.researchgate.net/publication/342407447_Exploring_different_approaches_to_improve_the_success_of_drug_discovery_and_development_projects_a_review"
                          className="reference-website"
                          target={"_blank"}
                        >
                          Only less than one in 10,000 potential drug compounds
                          reach the clinic.
                        </a>
                      </Tooltip>{" "}
                      As a result, drug discovery remains a complicated process.
                      We provide phenotypic screening that evaluates the effects
                      of potential drugs in vitro on the cultured cell lines. In
                      addition, we efficiently analyze multiparametric data sets
                      to predict drug response much earlier in the drug
                      discovery process.
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
                            src="/static/img/applications/02.jpg"
                            alt="advanced molecular techniques"
                            width={1200}
                            height={675}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content">
                      <div className="ps-section__desc ">
                        <p className="text-white">
                          We apply advanced molecular techniques to identify and
                          validate drug targets. The drug metabolism and
                          mechanism of action studies at early stages can
                          potentially deliver safer drugs to market.
                        </p>
                        <p className="p-3">
                          <Link href="/contact-us" prefetch={false}>
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
                            src="/static/img/applications/Drug-Discovery.jpg"
                            alt="Cell-based approaches"
                            width={1200}
                            height={675}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content">
                      <div className="ps-section__desc">
                        <p>
                          Cell-based approaches allow a direct way to determine
                          the mode of action of drugs at the fundamental level.
                          In addition, we have a multispecies platform to
                          investigate species differences to ensure better
                          safety in clinical trials.
                        </p>
                        <p className="p-3">
                          <Link href="/contact-us" prefetch={false}>
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
                            src="/static/img/applications/01.jpg"
                            alt="iPSC-derived liver"
                            width={1200}
                            height={675}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content">
                      <div className="ps-section__desc">
                        <p className="text-white">
                          The iPSC-derived liver, cardiac and neurons are useful
                          for predicting clinical pharmacokinetics and
                          pharmacodynamics. We use samples from different ages,
                          genders and ethnicities to represent the
                          safety/toxicity risk in a population.
                        </p>
                        <p className="p-3">
                          <Link href="/contact-us" prefetch={false}>
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
                            src="/static/img/applications/05.jpg"
                            alt="highly data-driven with high-resolution images"
                            width={1200}
                            height={675}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content">
                      <div className="ps-section__desc">
                        <p>
                          The processes are highly data-driven with
                          high-resolution images, genomic and biological
                          information, and molecular and metabolite profiles.
                          Our approach for computational modelling allows data
                          exploration to identify key features and create
                          cognitive networks to automate toxicity prediction. It
                          is a game-changing technology for precise drug
                          discovery.
                        </p>
                        <p className="p-3">
                          <Link href="/contact-us" prefetch={false}>
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
    ProductData = myProductData
  }

  // // Pass data to the page via props
  return { props: { ProductData } }
}

// export default texicologyScreen;
export default connect((state) => state)(texicologyScreen)
