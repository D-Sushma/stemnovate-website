import React from "react"
import BreadCrumb from "~/components/elements/BreadCrumb"
import Container from "~/components/layouts/Container"
import { baseUrl } from "~/repositories/Repository"
import { connect } from "react-redux"
// import Subscribe from "~/components/shared/sections/Subscribe"
import { Tooltip } from "antd"
import Link from 'next/link'
import Image from '~/components/elements/Image'
import dynamic from 'next/dynamic';

const Subscribe = dynamic(
  () => import("~/components/shared/sections/Subscribe"),
  {loading: ()=> <p>Loading...</p>}
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
      text: "Disease Modelling",
      url: "/Applications/Disease-Modelling"
    },
    {
      id: 4,
      text: "Heart"
    }
  ]

  return (
    <>
      <Container 
      title="Heart"
      description="Stemnovate page on cardiac modelling, IPSC differentiation, and cardiac cell functional assays and use for drug discovery"
      >
        <main className="ps-page ps-page--inner">
          <div className="ps-page__header  breadcrumb-h application-breadcrumb-bg">
            <div className="container ">
              <BreadCrumb breacrumb={breadcrumb} />
              <h1 className="text-center  text-white p-2">Heart</h1>
            </div>
          </div>

          <div className="ps-page__content">
            <div className="ps-about">
              <div className="about-section">
                <div className="container">
                  <p className="text-left">
                    Heart disease is a leading cause of death across the world.
                    However, there are only a few ongoing clinical trials. One
                    of the main challenges is the use of traditional testing
                    models. Our differentiation method allows us to generate
                    high quality and high purity cardiomyocytes that target the
                    need for better alternative models.
                  </p>
                </div>
              </div>
              <div className="bg-02-section">
                <div className="container">
                  <section className="ps-section--block-grid ">
                    <div className="ps-section__thumbnail">
                      <Link href="#">
                        <div className="ps-section__image link-hover-thumb-shape">
                        <Image
                          src="/static/img/applications/Heart/01.jpg"
                          alt="Heart"
                          width={1200}
                          height={675}
                        />
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content">
                      <div className="ps-section__desc ">
                        <p className="text-white">
                          We offer differentiated cardiomyocytes from our
                          biobank. However, we can also reprogram
                          patient-derived samples.
                          <br />
                          <br />
                          Our iPSC-CMs have multiple applications, such as in
                          vitro drug metabolism studies, safety screening in
                          drug discovery, toxicology studies, and cellular
                          therapy development.
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
                      <Link href="#">
                      <div className="ps-section__image link-hover-thumb-shape">
                      <Image
                          src="/static/img/applications/Heart/02.jpg"
                          alt="Heart-2"
                          width={1200}
                          height={675}
                        />
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content">
                      <div className="ps-section__desc">
                        <p>
                          Many{" "}
                          <Tooltip title="Genetics of inherited cardiomyopathy - PMC (nih.gov)">
                            <a
                              className="reference-website"
                              target={"_blank"}
                              href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3270042/"
                              rel="noreferrer"
                            >
                              non-ischemic cardiomyopathies are caused by
                              genetic mutations
                            </a>
                          </Tooltip>{" "}
                          that affect cellular ion channels and heart
                          contraction.{" "}
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <div className="bg-02-section">
                <div className="container">
                  <h3 className="text-white">
                    Stemnovate offers iPSC-CMs to model disease. We offer an
                    ideal model for better identification and management of
                    cardiology patients susceptible to sudden cardiac death,
                    drug screening and research.
                  </h3>
                  <h3 className="text-white">
                    Our cardiomyocytes generated from iPSCs offer an alternative
                    to in vivo animal testing. We are committed to reducing the
                    use of animals in research.
                  </h3>
                </div>
              </div>
              <div className="about-section">
                <div className="container">
                  <section className="ps-section--block-grid ">
                    <div className="ps-section__thumbnail">
                      <Link href="#">
                      <div className="ps-section__image link-hover-thumb-shape">
                        <Image
                          src="/static/img/applications/Heart/03.jpg"
                          alt="Heart-3"
                          width={1200}
                          height={675}
                        />
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content">
                      <div className="ps-section__desc">
                        <p>
                          We help overcome the challenge of treating congenital
                          disease (genetic variants pathogenicity).
                        </p>
                        <p>
                          Our patient-derived iPSC cardiomyocytes allow
                          researchers to understand disease mechanisms at a
                          personalised level.
                        </p>
                        <p>
                          We offer an ideal model for better identification and
                          management of cardiology patients susceptible to
                          sudden cardiac death.
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
    ;(ProductData = myProductData)
  }

  // // Pass data to the page via props
  return { props: { ProductData } }
}

// export default texicologyScreen;
export default connect((state) => state)(texicologyScreen)
