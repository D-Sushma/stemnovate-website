import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { FaArrowRight } from "react-icons/fa"
import Link from "next/link"
import { baseUrl } from "~/repositories/Repository"
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
const BannerImage = dynamic(() => import("~/components/elements/BannerImage"), {
  loading: () => <p>Loading...</p>
})

const breadcrumb = [
  {
    id: 1,
    text: "Home",
    url: "/"
  },

  {
    id: 2,
    text: "Application"
  }
]

function Applications(ProductData) {
  var text_human =
    "Stemnovate core value is to advance science for the benefit of humanity. The subscription to our platform creates a unique partnership between the customers and us, where they benefit from services tailored to their needs. Here you have access to karyotyping, genotyping and R&D platforms."

  var text_animal =
    "Our team has over ten years of experience creating unique stem cell models that can reduce animal testing. In 2014 the first functional neurons were reported from horses by Sharma et al. Now, our CEO Dr Ruchi leads an industrial partnership creating multi-species neuronal models."

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
    <Container
      title="Applications | Your Drug Discovery Platform"
      ogimg={ogImage}
      description={ogDesc}
    >
      <main className="ps-page ps-page--inner">
        <div className="ps-page__header  breadcrumb-h banner-breadcrumb-bg">
          <BannerImage
            alt="application-banner-image"
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
            <h1 className="text-center  text-white p-2">
              {" "}
              {ProductData?.ProductData?.data[0]?.banner_content}
            </h1>
          </div>
        </div>

        <div className="ps-page__content">
          <div className="ps-about">
            <div className="category-section p-4">
              <div className="container">
                <div className="about-section py-0">
                  <div className="row d-flex justify-content-around align-self-center mt-5">
                    <div className="col-md-5 col-sm-5 col-12 d-flex flex-column flex-grow-1 p-4 image-box-container-application ">
                      <div className="align-items-center d-flex flex-column flex-grow-1 rounded-lg ">
                        <Image
                          src="/static/img/applications/Drug-Discovery.svg"
                          className="rounded-lg zoom-in"
                          alt="Drug Discovery Platform"
                          // width={1000}
                          // height={563}
                          width={540}
                          height={304}
                          priority={true}
                          quality={80}
                        />
                        <div className="card-body d-flex flex-column flex-grow-1 p-2 container-fluid ">
                          <div className="pt-3">
                            <h3 className="h3 text-dark">
                              <b>Human</b>
                            </h3>
                            <p>{text_human?.substring(0, 150) + "..."}</p>

                            <Link
                              href="/Applications/Drug-Discovery-Platform"
                              prefetch={false}
                            >
                              <div className="link-btn-b">
                                <b>
                                  Get More Details <FaArrowRight />
                                </b>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className=" col-md-5 col-sm-5 col-12 d-flex flex-column p-4 flex-grow-1 image-box-container-application ">
                      <div className="rounded-lg align-items-center  rounded-lg">
                        <Image
                          src="/static/img/animal-health/Refine-section.svg"
                          className="rounded-lg zoom-in"
                          alt="Animal"
                          // width={1000}
                          // height={563}
                          width={540}
                          height={304}
                          priority={true}
                          quality={80}
                        />
                        <div className="card-body  rounded-lg ">
                          <div>
                            <h3 className="h3 text-dark">
                              <b>Animal</b>
                            </h3>
                            <p>{text_animal?.substring(0, 150) + "..."}</p>

                            <Link
                              href="/Applications/animal-application"
                              prefetch={false}
                            >
                              <div className="link-btn-b">
                                <b>
                                  Get More Details <FaArrowRight />
                                </b>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-section pt-0">
                  <div className="row mt-5">
                    <div className=" col-md-4 col-sm-6 my-2 col-6 d-flex flex-column flex-grow-1 p-2">
                      <div className="card align-items-center p-0 d-flex flex-column flex-grow-1 rounded-lg image-box-container2">
                        <Image
                          src={`/static/img/applications/Drug-Discovery.svg`}
                          className="rounded-lg"
                          alt={"img"}
                          width={1000}
                          height={563}
                          quality={80}
                        />
                        <div className="card-body d-flex flex-column flex-grow-1 p-2 container-fluid ">
                          <div className="p-3">
                            <h3 className="h3 text-dark">
                              <b>Drug Discovery Platform</b>
                            </h3>
                            <span className="badge badge-pill badge-primary">
                              Human
                            </span>
                            <p>
                              Only less than one in 10,000 potential drug
                              compounds reach the clinic. As a result, drug
                              discovery remains a complicated process. We
                              provide phenotypic screening
                            </p>

                            <Link
                              href="/Applications/Drug-Discovery-Platform"
                              prefetch={false}
                            >
                              <div className="link-btn-b">
                                <b>
                                  Get More Details <FaArrowRight />
                                </b>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" col-md-4 col-sm-6 my-2 col-6 d-flex flex-column flex-grow-1 p-2">
                      <div className="card align-items-center p-0 d-flex flex-column flex-grow-1 image-box-container2 rounded-lg">
                        <Image
                          src={`/static/img/applications/Disease-modelling.svg`}
                          className="rounded-lg"
                          alt={"img"}
                          width={1000}
                          height={563}
                          quality={80}
                        />
                        <div className="card-body d-flex flex-column flex-grow-1 p-2 container-fluid ">
                          <div className="p-3">
                            <h3 className="h3 text-dark">
                              <b>Disease Modelling</b>
                            </h3>
                            <span className="badge badge-pill badge-primary">
                              Human
                            </span>
                            <p>
                              According to the FDA, Drug-Induced Liver Injury
                              has been the most frequent single cause of
                              safety-related drug marketing withdrawals for the
                              past 50 years.
                            </p>
                            <Link
                              href="/Applications/Disease-Modelling"
                              prefetch={false}
                            >
                              <div className="link-btn-b">
                                <b>
                                  Get More Details <FaArrowRight />
                                </b>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" col-md-4 col-sm-6 my-2 col-6 d-flex flex-column flex-grow-1 p-2">
                      <div className="card align-items-center p-0 d-flex flex-column flex-grow-1 image-box-container2 rounded-lg">
                        <Image
                          src={`/static/img/applications/DNA-synthesis.svg`}
                          className="rounded-lg"
                          alt={"img"}
                          width={1000}
                          height={563}
                          quality={80}
                        />
                        <div className="card-body d-flex flex-column flex-grow-1 p-2 container-fluid ">
                          <div className="p-3">
                            <h3 className="h3 text-dark">
                              <b>DNA Synthesis</b>
                            </h3>
                            <span className="badge badge-pill badge-primary">
                              Human
                            </span>
                            <p>
                              Stemnovate is soon introducing a microfluidic
                              platform for DNA synthesis. This disruptive
                              technology allows template free DNA/RNA synthesis.
                            </p>

                            <Link
                              href="/Applications/DNA-Synthesis"
                              prefetch={false}
                            >
                              <div className="link-btn-b">
                                <b>
                                  Get More Details <FaArrowRight />
                                </b>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" col-md-4 col-sm-6 my-2 col-6 d-flex flex-column flex-grow-1 p-2">
                      <div className="card align-items-center p-0 d-flex flex-column flex-grow-1 image-box-container2 rounded-lg">
                        <Image
                          src={`/static/img/animal-health/Multispecies-stem.svg`}
                          className="rounded-lg"
                          alt={"img"}
                          width={1000}
                          height={563}
                          quality={80}
                        />
                        <div className="card-body d-flex flex-column flex-grow-1 p-2 container-fluid ">
                          <div className="p-3">
                            <h3 className="h3 text-dark">
                              <b>Animal Health</b>
                            </h3>
                            <span className="badge badge-pill badge-primary">
                              Animal
                            </span>
                            <p>
                              Our team has over ten years of experience creating
                              unique stem cell models that can reduce animal
                              testing.
                            </p>
                            <Link
                              href="/Applications/Animal-Health"
                              prefetch={false}
                            >
                              <div className="link-btn-b">
                                <b>
                                  Get More Details <FaArrowRight />
                                </b>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Subscribe />
            </div>
          </div>
        </div>
      </main>
    </Container>
  )
}

export async function getServerSideProps() {
  var ProductData = []
  var requestParam = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      page_name: "Applications"
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

export default connect((state) => state)(Applications)
Applications.propTypes = {
  resourcesList: PropTypes.any
}
