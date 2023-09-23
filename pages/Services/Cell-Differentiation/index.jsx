import React from "react"
import Image from '~/components/elements/Image'
import Link from "next/link"
import { baseUrl } from "~/repositories/Repository"
import { connect } from "react-redux"
import dynamic from "next/dynamic"

const Container = dynamic(() => import("~/components/layouts/Container"), {
  loading: () => <p>Loading...</p>
})
const BreadCrumb = dynamic(() => import("~/components/elements/BreadCrumb"), {
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
      text: "Services",
      url: "/Services"
    },
    {
      id: 3,
      text: "Cellular Differentiation"
    }
  ]

  return (
    <>
      <Container
        title="Cellular Differentiation"
        description={`We use mechanical and chemical stimuli to direct IPSC to the liver, heart, neurons, bone and muscle cells, to name a few`}
      >
        <main className="ps-page ps-page--inner">
          <div className="ps-page__header  breadcrumb-h service-breadcrumb-bg">
            <div className="container ">
              <BreadCrumb breacrumb={breadcrumb} />{" "}
              <h1 className="text-center  text-white ">
                Cellular Differentiation
              </h1>
            </div>
          </div>

          <div className="ps-page__content ">
            <div className="ps-about">
              <div className=" about-section ">
                <div className="container center-box">
                  <p className=" vertical-center">
                    Cell differentiation is known as a process in which cells
                    become specialized. Stem cells have the potential to become
                    any cell type at the beginning, but this capability is
                    slowly lost as the cell differentiates and gains unique
                    functions. The differentiation process also changes shape,
                    size, and energy requirements. Interestingly, reprogramming
                    can manipulate cells back to stemness.
                    <br />
                    We differentiate cells through the integration of different
                    stimuli that can be both mechanical and chemical.
                  </p>
                </div>
              </div>

              <div className=" bg-02-section">
                <div className="container">
                  <section className="ps-section--block-grid py-5">
                    <div className="ps-section__thumbnail">
                      <Link href="#">
                        <div className="ps-section__image link-hover-thumb-shape">
                          <Image
                            src="/static/img/services/cellular-differentiation.jpg"
                            alt="Cellular Differentiation"
                            width={1200}
                            height={675}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content ">
                      <div className="ps-section__desc ">
                        <h2 className="p-1 text-white font-weight-bold">
                          Cellular Differentiation
                        </h2>
                        <p className="text-white ">
                          All cells are derived from stem cells and obtain their
                          functions as they mature. Cell differentiation is how
                          progenitor cells change their functional or
                          phenotypical type.
                          <br />
                          <br />
                          Interestingly, the differentiation process alters the
                          cell&apos;s shape, size, and energy requirements.
                          <br />
                          <br />
                          We use mechanical and chemical stimuli to direct IPSC
                          to the liver, heart, neurons, bone and muscle cells,
                          to name a few.
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>

              <div className=" about-section ">
                <div className="container ">
                  <div className="center-box">
                    {" "}
                    <div className="vertical-center">
                      <h2 className="p-1 text-center font-weight-bold">
                        More Information
                      </h2>
                      <p>
                        Our differentiation processes are guided by several
                        years of research, in-depth understanding of principles
                        of development, advanced gene and protein expression
                        studies along with novel methods of microengineering and
                        computational data analysis.
                        <br />
                        <br />
                        Stemnovate has established protocols that have higher
                        efficiency of differentiation as well as
                        reproducibility. This saves effort reinventing the wheel
                        and ensures efficiency for the application development.{" "}
                        <br />
                        <br />
                        You can request a quote to learn more about our
                        application development.
                        {/* You can build your project here and request a quote to learn more about our application development. */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" about-section ">
                <div className="container ">
                  <div className="center-box">
                    {" "}
                    <div className="vertical-center">
                      <div className="overflow-hidden">
                        <div
                          className="ps-banner__image ml-auto mr-auto"
                          style={{ width: "100%" }}
                        >
                          <video
                            src="/static/img/services/ReprogrammingDifferentiation.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            width="100%"
                            height="100%"
                          ></video>
                        </div>
                      </div>
                    </div>
                  </div>
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
