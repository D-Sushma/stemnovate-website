import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import useGetProducts from "~/hooks/useGetProducts"
import useProductGroup from "~/hooks/useProductGroup"
import BreadCrumb from "~/components/elements/BreadCrumb"
import Container from "~/components/layouts/Container"
import { baseUrl } from "~/repositories/Repository"
import { connect, useDispatch } from "react-redux"
import useEcomerce from "~/hooks/useEcomerce"
import Subscribe from "~/components/shared/sections/Subscribe"
import { Tooltip } from "antd"

const texicologyScreen = ({ ProductData, ecomerce }) => {
  const Router = useRouter()
  const { slug } = Router.query
  const { proload, product, getProductById } = useGetProducts()
  const [isLoading, setisLoading] = React.useState(false)
  const [searchterms, setsearchterms] = React.useState("")
  const [searchUrl, setsearchUrl] = React.useState("")
  const { withGrid } = useProductGroup()
  const [AddtoCart, setAddtoCart] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)

  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)
  const { loading, addItem } = useEcomerce()
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
      text: "Liver"
    }
  ]

  return (
    <>
      <Container title="Liver">
        <main className="ps-page ps-page--inner">
          <div className="ps-page__header  breadcrumb-h application-breadcrumb-bg">
            <div className="container ">
              <BreadCrumb breacrumb={breadcrumb} />
              <h1 className="text-center  text-white p-2">Liver</h1>
            </div>
          </div>

          <div className="ps-page__content">
            <div className="ps-about">
              <div className="about-section">
                <div className="container">
                  <p className="text-left">
                    The absolute number of Chronic Liver Disease cases is
                    estimated at 1.5 billion worldwide. According to the FDA,
                    Drug-Induced Liver Injury has been the most frequent single
                    cause of safety-related drug marketing withdrawals for the
                    past 50 years and is often associated with acute liver
                    failures.
                  </p>
                </div>
              </div>
              <div className="bg-02-section">
                <div className="container">
                  <section className="ps-section--block-grid ">
                    <div className="ps-section__thumbnail">
                      <a className="ps-section__image" href="#">
                        <img
                          src="/static/img/applications/Liver/PLATFORM-FEATURES.jpg"
                          alt="PLATFORM FEATURES"
                        />
                      </a>
                    </div>
                    <div className="ps-section__content">
                      <div className="ps-section__desc ">
                        <h2 className="text-white font-weight-bold">
                          Platform Features
                        </h2>
                        <p className="text-white">
                          World’s first commercial biobank for renewable liver
                          cells from induced pluripotent stem cells.
                          <br />
                          Multicellular modelling with three major types of
                          liver cells (stellates, Kupffer cells, and endothelial
                          cells) to mimic liver microarchitecture.
                          <br />
                          Robust data platform powered by transcriptomics and
                          genotyping for biomarker discovery.
                          <br />
                          “On a chip” technology for microphysiological
                          modelling. Patient-derived samples for studying
                          genetic predisposition and treatment response
                          variability.
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
                          src="/static/img/applications/Liver/Hepatitis-C.jpg"
                          alt="Hepatitis C"
                        />
                      </a>
                    </div>
                    <div className="ps-section__content">
                      <div className="ps-section__desc">
                        {" "}
                        <h2 className="  font-weight-bold">Hepatitis C</h2>
                        <p>
                          Stemnovate is working with{" "}
                          <Tooltip title="Liver Immunology: Hepatitis C - School of Biochemistry and Immunology - Trinity College Dublin (tcd.ie)">
                            <a
                              rel="noreferrer"
                              className="reference-website"
                              target={"_blank"}
                              href="https://www.tcd.ie/Biochemistry/research/ofarrelly/hepatitisc/"
                            >
                              Prof Cliona O’Farrelly at Trinity College, Ireland
                            </a>
                          </Tooltip>
                          , to find out why some people can block infection by
                          hepatitis C in a bid to improve treatment.
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
                          alt="NASH"
                        />
                      </a>
                    </div>
                    <div className="ps-section__content">
                      <div className="ps-section__desc ">
                        <h2 className="text-white font-weight-bold">
                          <Tooltip title="Modeling NASH and NASH-Induced Hepatocellular Carcinoma: Faster and Better - PubMed (nih.gov)">
                            <a
                              rel="noreferrer"
                              className="reference-website"
                              target={"_blank"}
                              href="https://pubmed.ncbi.nlm.nih.gov/34115994/"
                            >
                              Nash
                            </a>
                          </Tooltip>
                        </h2>

                        <p className="text-white">
                          Non-alcoholic steatohepatitis (NASH) is a form of
                          fatty liver disease (steatosis) that, untreated, can
                          progress to fibrosis, cirrhosis and hepatocellular
                          cancer.
                          <br />
                          We help reduce diagnostic invasive liver biopsies and
                          improve treatment response by providing technology for
                          early detection and severity assessment.
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
                          src="/static/img/applications/Liver/Grants-for-liver-platform.jpg"
                          alt="Stemnovate won an NC3R Grant"
                        />
                      </a>
                    </div>
                    <div className="ps-section__content">
                      <div className="ps-section__desc">
                        <p>
                          There is an urgent need for technology for early
                          detection and assessment of the severity of Liver
                          diseases . Stemnovate brings to market liver platform
                          that can help the scientific community, clinicians and
                          pharma develop better diagnosis and novel treatments
                        </p>
                        <h2 className="mx-2 mt-4 font-weight-bold">
                          Grants for research and innovation
                        </h2>
                        <p>
                          <Tooltip title="Stemnovate Wins NC3R Grant to Develop Liver Model for Yellow Fever Vaccine Development - CMOCRO">
                            <a
                              rel="noreferrer"
                              className="reference-website"
                              target={"_blank"}
                              href="https://www.cmocro.com/news_detail/Stemnovate+Wins+NC3R+Grant+to+Develop+Liver+Model+for+Yellow/432021/index.html"
                            >
                              Stemnovate won an NC3R Grant
                            </a>
                          </Tooltip>{" "}
                          to develop a liver model alternative to animal testing
                          for yellow fever vaccine development. The challenge
                          was sponsored by the pharmaceutical company Sanofi.
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
  var categoryListList = []
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
    ;(ProductData = myProductData), (categoryListList = myProductData.Products)
  }

  // // Pass data to the page via props
  return { props: { ProductData } }
}

// export default texicologyScreen;
export default connect((state) => state)(texicologyScreen)
