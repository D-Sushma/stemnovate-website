import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import useGetProducts from "~/hooks/useGetProducts"
import useProductGroup from "~/hooks/useProductGroup"
import BreadCrumb from "~/components/elements/BreadCrumb"
import SidebarShop from "~/components/shared/sidebar/SidebarShop"
import Shop from "~/components/partials/shop/Shop"
import PromotionSecureInformation from "~/components/shared/sections/PromotionSecureInformation"
import Container from "~/components/layouts/Container"
import Loader from "~/components/reuseable/Loader"
import Image from "~/components/elements/Image"
import { API } from "~/lib/constant"
import Link from "next/link"
import { Input, Button } from "antd"
import { baseUrl } from "~/repositories/Repository"
import { connect, useDispatch } from "react-redux"
import { toggleDrawer } from "~/store/app/action"
import useEcomerce from "~/hooks/useEcomerce"
import { Modal } from "antd"
import ReactHtmlParser from "react-html-parser"
import ProductList from "~/components/productList/productList"
import { ParallaxBanner } from "react-scroll-parallax"
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
      text: "Services",
      url: "/Services"
    },
    {
      id: 3,
      text: "Molecular Analysis"
    }
  ]

  return (
    <>
      <Container title="Molecular Analysis">
        <main className="ps-page ps-page--inner">
          <div className="ps-page__header  breadcrumb-h service-breadcrumb-bg">
            <div className="container ">
              <BreadCrumb breacrumb={breadcrumb} />
              <h1 className="text-center  text-white ">Molecular Analysis</h1>
            </div>
          </div>

          <div className="ps-page__content ">
            <div className="ps-about">
              <div className=" about-section ">
                <div className="container center-box">
                  <p className="vertical-center">
                    Stemnovate provides whole genome transcriptomics as a
                    service. This invaluable tool provides an unprecedented
                    coverage and depth into the transcriptional regulation of
                    cells. The platform utilises high accuracy for both long and
                    short reads. We provide bioinformatics to reveal gene
                    signalling networks and novel transcript signalling
                    pathways.
                  </p>
                </div>
              </div>

              <div className=" bg-02-section">
                <div className="container">
                  <section className="ps-section--block-grid ">
                    <div className="ps-section__thumbnail">
                      <a className="ps-section__image" href="#">
                        <img
                          className="ps-banner__image"
                          src="/static/img/services/Sequencing.webp"
                          alt="Whole transcriptomics"
                        />
                      </a>
                    </div>
                    <div className="ps-section__content ">
                      <div className="ps-section__desc ">
                        <div className="center-box">
                          <div className="vertical-center">
                            <h2 className="p-1 text-white font-weight-bold">
                              Whole transcriptomics
                            </h2>
                            <p className="text-white ">
                              RNA-seq is a powerful tool that can be utilized to
                              analyze and provide an unbiased transcriptome
                              profile. This tool ultimately empowers researchers
                              with the ability to determine cellular
                              functionality and gene expression during or after
                              an experimental study.
                              <br />
                              Stemnovates WTS features;
                              <ol>
                                <li>
                                  <p>
                                    1. Exome analysis for nucleotide sequence
                                    capture and quantitative gene expression.
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    2. Metatranscriptomics study for species
                                    identification and taxonomic classification
                                    and microbe quantification.
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    3. Discovery of novel Biomarkers inferred
                                    from in-depth bioinformatic analysis and
                                    computational modeling.
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    4. Chromosomal -loci gene expression report
                                    and human gender identification.
                                  </p>
                                </li>
                              </ol>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>

              <div className=" about-section">
                <div className="container">
                  <section className="ps-section--block-grid ">
                    <div className="ps-section__thumbnail">
                      <a className="ps-section__image" href="#">
                        <img
                          className="ps-banner__image"
                          src="/static/img/services/Bioinformatics.jpg"
                          alt="BIOINFORMATICS"
                        />
                      </a>
                    </div>
                    <div className="ps-section__content ">
                      <div className="ps-section__desc ">
                        <div className="center-box">
                          <div className="vertical-center">
                            <h2 className="p-1 font-weight-bold">
                              Bioinformatics
                            </h2>
                            <p className=" ">
                              Stemnovate's Bioinformatic platform provides a
                              robust computational analysis of biological data.
                              Stemnovate harnesses an interdisciplinary approach
                              integrating biological data sets with advanced
                              mathematical analysis and computational science to
                              capture and interpret complex data. Our platform
                              is already being used by industry and academia for
                              new drug discovery and understanding diseases of
                              the heart, liver and sensory systems in the body.
                              <br />
                              Some bioinformatic workflow include :
                              <ol>
                                <li>
                                  <p>
                                    1. Computational modeling for co-expression
                                    and fusion -fission events.
                                  </p>
                                </li>
                                <li>
                                  <p>2. Gene signaling network.</p>
                                </li>
                                <li>
                                  <p>3. Protein-protein interaction network</p>
                                </li>
                                <li>
                                  <p>4. Phylogenetic profile occurrence.</p>
                                </li>
                              </ol>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <div className=" bg-02-section ">
                <div className="container">
                  <h2 className="p-1  text-center font-weight-bold">
                    Genotyping
                  </h2>
                  <p className="my-4">
                    The genotype is the genetic makeup of a cell, organism or
                    individual with reference to a particular characteristic.
                    The DNA variants are shown to modulate protein function, and
                    hence drug response, through multiple mechanisms. Genetic
                    polymorphism for cytochrome 450 (P450) enzymes leads to
                    interindividual variability in the plasma concentrations of
                    many drugs. In some cases, P450 genotype results in
                    decreased enzyme activity and an increased risk for adverse
                    drug effects. In other cases, P450 genotype may influence
                    the dose of a drug required to achieve a desired effect.
                  </p>
                </div>
              </div>

              <div className=" about-section">
                <div className="container">
                  <section className="ps-section--block-grid ">
                    <div className="ps-section__thumbnail">
                      <a className="ps-section__image" href="#">
                        <img
                          src="/static/img/services/Genotyping.jpg"
                          alt="Genotyping"
                        />
                      </a>
                    </div>
                    <div className="ps-section__content ">
                      <div className="ps-section__desc ">
                        <div className="center-box">
                          <div className="vertical-center">
                            <h3 className=" font-weight-bold">
                              How Genotyping influences Drug Discovery?
                            </h3>
                            <p className="">
                              Human population reveals differences in drug
                              metabolism and response.
                              <br />
                              <br />
                              <Tooltip title="Cytochrome P450 2D6: overview and update on pharmacology, genetics, biochemistry - PubMed (nih.gov)">
                                <a
                                  rel="noreferrer"
                                  className="reference-website"
                                  target={"_blank"}
                                  href="https://pubmed.ncbi.nlm.nih.gov/14618296/"
                                >
                                  The poor metabolizers with absent cytochrome
                                  P450CYP2D6 are found in 5–10% of European and
                                  African populations, but are less common in
                                  Asian subjects.
                                </a>
                              </Tooltip>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <Subscribe />
            </div>
          </div>
        </main>
        {/* <ProductList slug="Biobanking" /> */}
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
