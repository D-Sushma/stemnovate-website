import React from "react"
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
      text: "Services",
      url: "/Services"
    },
    {
      id: 3,
      text: "Cellular Differentiation"
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
        title="Cellular Differentiation | Your Drug Discovery Platform"
        ogimg={ogImage}
        description={ogDesc}
      >
        <main className="ps-page ps-page--inner">
          <div className="ps-page__header breadcrumb-h banner-breadcrumb-bg">
            <BannerImage
              alt="cell-differentiation-banner"
              src={bgImage}
              layout="fill"
              objectFit="cover"
              priority={true}
              style={{
                zIndex: -1
              }}
            />
            <div className="container ">
              <BreadCrumb breacrumb={breadcrumb} />{" "}
              <h1 className="text-center  text-white ">
                {ProductData?.ProductData?.data[0]?.banner_content}
              </h1>
            </div>
          </div>

          <div className="ps-page__content ">
            <div className="ps-about">
              <div className=" about-section ">
                <div className="container">
                  <div>
                    <p>
                      Cell differentiation is known as a process in which cells
                      become specialized. Stem cells have the potential to
                      become any cell type at the beginning, but this capability
                      is slowly lost as the cell differentiates and gains unique
                      functions. The differentiation process also changes shape,
                      size, and energy requirements. Interestingly,
                      reprogramming can manipulate cells back to stemness.
                    </p>
                    <p>
                      We differentiate cells through the integration of
                      different stimuli that can be both mechanical and
                      chemical.
                    </p>
                  </div>
                </div>
              </div>

              <div className="plus-section">
                <div className="container">
                  <section className="ps-section--block-grid pt-3">
                    <div className="ps-section__thumbnail">
                      <Link href="#">
                        <div className="ps-section__image link-hover-thumb-shape image-box-container mx-2 image-box-container-mb">
                          <Image
                            src="/static/img/services/cellular-differentiation.svg"
                            alt="Cellular Differentiation"
                            width={488}
                            height={275}
                            quality={80}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content mt-0">
                      <div className="ps-section__desc ">
                        <h2 className="p-1 text-white font-weight-bold">
                          Cellular Differentiation
                        </h2>
                        <div>
                          <p className="text-white ">
                            All cells are derived from stem cells and obtain
                            their functions as they mature. Cell differentiation
                            is how progenitor cells change their functional or
                            phenotypical type.
                          </p>
                          <p className="text-white ">
                            Interestingly, the differentiation process alters
                            the cell's shape, size, and energy requirements.
                          </p>
                          <p className="text-white ">
                            We use mechanical and chemical stimuli to direct
                            IPSC to the liver, heart, neurons, bone and muscle
                            cells, to name a few.
                          </p>
                        </div>
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
                      <div>
                        <p style={{ fontSize: 17 }}>
                          Our differentiation processes are guided by several
                          years of research, in-depth understanding of
                          principles of development, advanced gene and protein
                          expression studies along with novel methods of
                          microengineering and computational data analysis.
                        </p>
                        <br />
                        <p>
                          Stemnovate has established protocols that have higher
                          efficiency of differentiation as well as
                          reproducibility. This saves effort reinventing the
                          wheel and ensures efficiency for the application
                          development.{" "}
                        </p>
                        <br />
                        <p>
                          You can request a quote to learn more about our
                          application development.
                        </p>
                      </div>
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
      page_name: "Cell Differentiation"
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
