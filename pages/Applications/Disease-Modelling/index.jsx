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
const BannerImage = dynamic(() => import("~/components/elements/BannerImage"), {
  loading: () => <p>Loading...</p>
})
const ProductList = dynamic(
  () => import("~/components/productList/productList"),
  { loading: () => <p>Loading...</p> }
)
const Subscribe = dynamic(
  () => import("~/components/shared/sections/Subscribe"),
  { loading: () => <p>Loading...</p> }
)

const diseaseScreen = (ProductData) => {
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
      text: "Disease Modelling"
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
        title="Disease-Modelling | Your Drug Discovery Platform"
        ogimg={ogImage}
        description={ogDesc}
      >
        <main className="ps-page ps-page--inner">
          <div className="ps-page__header  breadcrumb-h banner-breadcrumb-bg">
            <BannerImage
              alt="disease-modelling-banner-image"
              src={bgImage}
              layout="fill"
              objectFit="cover"
              priority={true}
              style={{
                zIndex: -1
              }}
            />
            <div className="container ">
              <BreadCrumb breacrumb={breadcrumb} />
              <h1 className="text-center  text-white ">
                {ProductData?.ProductData?.data[0]?.banner_content}
              </h1>
            </div>
          </div>

          <div className="ps-page__content">
            <div className="ps-about">
              <div className=" about-section ">
                <div className="container">
                  <div className="center-box">
                    <p className=" vertical-center">
                      According to the FDA, Drug-Induced Liver Injury has been
                      the most frequent single cause of safety-related drug
                      marketing withdrawals for the past 50 years. It is often
                      associated with acute liver failures.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-02-section">
                <div className="container">
                  <section className="ps-section--block-grid pt-3">
                    <div className="ps-section__thumbnail">
                      <Link href="#">
                        <div className="ps-section__image link-hover-thumb-shape image-box-container mx-2 image-box-container-mb">
                          <Image
                            src="/static/img/applications/Liver.svg"
                            alt="LIVER"
                            width={640}
                            height={360}
                            quality={80}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content mt-0">
                      <div className="ps-section__desc mx-2 ">
                        <h2 className="text-white font-weight-bold">Liver</h2>

                        <p className="text-white">
                          Drug-Induced Liver Injury is often associated with
                          acute liver failures. Modelling drug metabolism and
                          transport in the liver is central for drug development
                          due to its contribution to drug clearance and
                          bioavailability.
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
                  <section className="ps-section--block-grid pt-3">
                    <div className="ps-section__thumbnail">
                      <Link href="#">
                        <div className="ps-section__image link-hover-thumb-shape image-box-container mx-2 image-box-container-mb">
                          <Image
                            src="/static/img/applications/Heart/02.svg"
                            alt="HEART"
                            width={640}
                            height={360}
                            quality={80}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content mt-0">
                      <div className="ps-section__desc mx-2">
                        <h2 className=" font-weight-bold">Heart</h2>
                        <p>
                          Heart disease is a leading cause of death across the
                          world. However, there are only a few ongoing clinical
                          trials. One of the main challenges is the use of
                          traditional testing models.
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
                  <section className="ps-section--block-grid pt-3">
                    <div className="ps-section__thumbnail">
                      <Link href="#">
                        <div className="ps-section__image link-hover-thumb-shape image-box-container mx-2 image-box-container-mb">
                          <Image
                            src="/static/img/applications/Neurons.svg"
                            alt="NEURONS"
                            width={640}
                            height={360}
                            quality={80}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content mt-0">
                      <div className="ps-section__desc mx-2">
                        <h2 className="text-white font-weight-bold">Neurons</h2>

                        <p className="text-white">
                          At Stemnovate, we generate different neuronal and
                          glial cell types from induced pluripotent stem cells
                          (iPSC). Our sensory neurons (PSNs) help advance pain
                          research and hearing loss. Stemnovate neuronal cells
                          are an alternative to animal testing with great
                          potential for new drug screening.
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
                  <section className="ps-section--block-grid pt-3">
                    <div className="ps-section__thumbnail">
                      <Link href="#">
                        <div className="ps-section__image link-hover-thumb-shape image-box-container mx-2 image-box-container-mb">
                          <Image
                            src="/static/img/applications/Multispecies-Platform.webp"
                            alt="Multispecies Platform"
                            width={640}
                            height={360}
                            quality={80}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content mt-0">
                      <div className="ps-section__desc mx-2">
                        <h2 className=" font-weight-bold">
                          Multispecies Platform
                        </h2>
                        <p>
                          We reduce animal testing by offering multispecies
                          cells to model disease and accelerate discoveries in
                          the animal health industry.{" "}
                          <Tooltip title="Research: Stem Cell Study Creates Functional Neurons (equimanagement.com)">
                            <a
                              rel="noreferrer"
                              href="https://equimanagement.com/news/research-stem-cell-study-creates-functional-neurons-14811/"
                              className="reference-website"
                              target={"_blank"}
                            >
                              In 2015, our CEO Dr Ruchi announced the first in
                              the world functional neurons from equine iPSCs.
                            </a>
                          </Tooltip>{" "}
                          Since then, we have created models for several other
                          animal species for industry and academia usage.
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
      page_name: "Disease Modelling"
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

export default connect((state) => state)(diseaseScreen)
