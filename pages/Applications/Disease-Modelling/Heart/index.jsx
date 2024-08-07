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
      text: "Heart"
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
        title="Heart | Your Drug Discovery Platform"
        ogimg={ogImage}
        description={ogDesc}
       >
        <main className="ps-page ps-page--inner">
          <div 
          className="ps-page__header  breadcrumb-h banner-breadcrumb-bg">
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
              <h1 className="text-center  text-white p-2">{ProductData?.ProductData?.data[0]?.banner_content}</h1>
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
                  <section className="ps-section--block-grid pt-3">
                    <div className="ps-section__thumbnail">
                      <Link href="#">
                        <div className="ps-section__image link-hover-thumb-shape image-box-container mx-2 image-box-container-mb">
                          <Image
                            src="/static/img/applications/Heart/01.svg"
                            alt="Heart"
                            width={640}
                            height={360}
                            quality={80}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content mt-0">
                      <div className="ps-section__desc mx-2 ">
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
                  <section className="ps-section--block- pt-3">
                    <div className="ps-section__thumbnail">
                      <Link href="#">
                        <div className="ps-section__image link-hover-thumb-shape image-box-container mx-2 image-box-container-mb">
                          <Image
                            src="/static/img/applications/Heart/02.svg"
                            alt="Heart-2"
                            width={640}
                            height={360}
                            quality={80}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content mt-0">
                      <div className="ps-section__desc mx-2">
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
                  <section className="ps-section--block-grid pt-3">
                    <div className="ps-section__thumbnail">
                      <Link href="#">
                        <div className="ps-section__image link-hover-thumb-shape image-box-container mx-2 image-box-container-mb">
                          <Image
                            src="/static/img/applications/Heart/03.svg"
                            alt="Heart-3"
                            width={640}
                            height={360}
                            quality={80}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content mt-0">
                      <div className="ps-section__desc mx-2">
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
      page_name: 'Heart'
    })
  }
  const res = await fetch(baseUrl + "/api/header_banners/getBanners",requestParam)
  const myProductData = await res.json()

  if (myProductData.status == 200) {
    ProductData = myProductData
  } else {
    ProductData = []
  }

  return { props: { ProductData } }
}

export default connect((state) => state)(texicologyScreen)
