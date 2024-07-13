import React from "react"
import { baseUrl } from "~/repositories/Repository"
import { connect } from "react-redux"
import { Tooltip } from "antd"
import Link from "next/link"
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
const BannerImage = dynamic(() => import("~/components/elements/BannerImage"), {
  loading: () => <p>Loading...</p>
})
const Subscribe = dynamic(
  () => import("~/components/shared/sections/Subscribe"),
  { loading: () => <p>Loading...</p> }
)

const texicologyScreen = (ProductData) => {
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

  var ogImage = ""
  var images1 = []
  var products_img1 = ProductData?.ProductData?.data[0]?.og_img?.split(",")
  var ogDesc = ProductData?.ProductData?.data[0]?.og_desc
  if (products_img1 && products_img1.length > 0) {
    products_img1.map((item) => {
      images1.push(`${process.env.AWS_S3BUCKET_URL}${item}`)
    })
    ogImage = images1[0]
  }
  var bgImage = `${process.env.AWS_S3BUCKET_URL}${ProductData?.ProductData?.data[0]?.banner_img}`
  return (
    <>
      <Container
        title="Stemnovate | Liver | Your Drug Discovery Platform"
        ogimg={ogImage}
        description={ogDesc}
      >
        <main className="ps-page ps-page--inner">
          <div className="ps-page__header  breadcrumb-h banner-breadcrumb-bg">
            <BannerImage
              alt="heart-Banner"
              src={bgImage}
              layout="fill"
              priority={true}
              objectFit="cover"
              style={{
                zIndex: -1
              }}
            />
            <div className="container ">
              <BreadCrumb breacrumb={breadcrumb} />
              <h1 className="text-center  text-white p-2">
                {ProductData?.ProductData?.data[0]?.banner_content}
              </h1>
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
                  <section className="ps-section--block-grid pt-3">
                    <div className="ps-section__thumbnail">
                      <Link href="#">
                        <div className="ps-section__image link-hover-thumb-shape image-box-container mx-2 image-box-container-mb">
                          <Image
                            src="/static/img/applications/Liver/PLATFORM-FEATURES.svg"
                            alt="PLATFORM FEATURES"
                            width={640}
                            height={360}
                            quality={80}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content mt-0">
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
                  <section className="ps-section--block-grid pt-3">
                    <div className="ps-section__thumbnail">
                      <Link href="#">
                        <div className="ps-section__image link-hover-thumb-shape image-box-container mx-2 image-box-container-mb">
                          <Image
                            src="/static/img/applications/Rapid-01.svg"
                            alt="Hepatitis C"
                            width={640}
                            height={360}
                            quality={80}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content mt-0">
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
                  <section className="ps-section--block-grid pt-3">
                    <div className="ps-section__thumbnail">
                      <Link href="#">
                        <div className="ps-section__image link-hover-thumb-shape image-box-container mx-2 image-box-container-mb">
                          <Image
                            src="/static/img/applications/Liver/Diagnostics.svg"
                            alt="NASH"
                            width={640}
                            height={360}
                            quality={80}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content mt-0">
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
                  <section className="ps-section--block-grid pt-3">
                    <div className="ps-section__thumbnail">
                      <Link href="#">
                        <div className="ps-section__image link-hover-thumb-shape image-box-container mx-2 image-box-container-mb">
                          <Image
                            src="/static/img/applications/Liver/Grants-for-liver-platform.svg"
                            alt="Stemnovate won an NC3R Grant"
                            width={640}
                            height={360}
                            quality={80}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content mt-0">
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
  var ProductData1 = []
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
    ProductData1 = myProductData
  }

  var ProductData = []
  var requestParam = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      page_name: "Liver"
    })
  }
  const res = await fetch(
    baseUrl + "/api/header_banners/getBanners",
    requestParam
  )
  const myProductData = await res.json()

  if (myProductData.status == 200) {
    ProductData = myProductData
  } else {
    ProductData = []
  }

  return { props: { ProductData } }
}

export default connect((state) => state)(texicologyScreen)
