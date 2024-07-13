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
    text: "Resources"
  }
]

function Resources({ resourcesList, ProductData }) {
  var ogImage = ""
  var images1 = []
  var products_img1 = ProductData?.data[0]?.og_img?.split(",")
  var ogDesc = ProductData?.data[0]?.og_desc
  if (products_img1 && products_img1.length > 0) {
    products_img1.map((item) => {
      images1.push(`${process.env.AWS_S3BUCKET_URL}${item}`)
    })
    ogImage = images1[0]
  }

  const bgImage = `${process.env.AWS_S3BUCKET_URL}${ProductData?.data[0]?.banner_img}`

  return (
    <Container
      title="Resources | Your Drug Discovery Platform"
      ogimg={ogImage}
      description={ogDesc}
    >
      <main className="ps-page ps-page--inner">
        <div className="ps-page__header  breadcrumb-h  banner-breadcrumb-bg">
          <BannerImage
            alt={'resources-banner-image'}
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
            <h1 className="text-center h1 text-white p-2 ">
              {ProductData?.data[0]?.banner_content}
            </h1>
          </div>
        </div>

        <div className="ps-page__content">
          <div className="ps-about">
            <div className="category-section">
              <div className="container">
                <div className="about-section py-0 mb-5">
                  <div className="row mt-5" data-columns="4">
                    <div className="col-md-6  mb-3 p-2 d-flex flex-column flex-grow-1">
                      <div className="card rounded-lg align-items-center p-0 ">
                        <Image
                          src="/static/img/resources/Karyotyping.svg"
                          alt="Stemnovate Karyotyping"
                          width={558}
                          height={314}
                          quality={80}
                          priority={true}
                        />
                        <div className="card-body  rounded-lg p-0 overlay-content">
                          <div className="p-2 p-md-5 card-resource">
                            <h2 className="h1 text-white">
                              <b className="gradient-heading">
                                Subscription Access
                              </b>
                            </h2>
                            <p className="text-white">
                              Stemnovate core value is to advance science for
                              the benefit of humanity. The subscription to our
                              platform creates a unique partnership between the
                              customers and us, where they benefit from services
                              tailored to their needs. Here you have access to
                              karyotyping, genotyping and R&D platforms.
                            </p>
                            <Link
                              href="/resources/private-resources"
                              prefetch={false}
                            >
                              <div className="link-btn">
                                <b>
                                  Get Resources <FaArrowRight />
                                </b>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6  mb-3 p-2 d-flex flex-column flex-grow-1">
                      <div className="card rounded-lg align-items-center p-0 ">
                        <Image
                          src="/static/img/resources/LearningResources.svg"
                          alt="Stemnovate Public Resources"
                          width={558}
                          height={314}
                          quality={80}
                        />
                        <div className="card-body rounded-lg p-0 overlay-content">
                          <div className="p-2 p-md-5 card-resource">
                            <h2 className="h1 text-white">
                              <b>Open Access</b>
                            </h2>
                            <p className="text-white">
                              Stemnovate has dedicated open-access educational
                              resources to improve the quality and costs of
                              information and knowledge over the internet,
                              providing content and learning material related to
                              stem cells and advanced sciences such as cellular
                              reprogramming, bioengineering and computational
                              modelling.
                            </p>
                            <Link
                              href="/resources/public-resources"
                              prefetch={false}
                            >
                              <div className="link-btn">
                                <b>
                                  Get Resources <FaArrowRight />
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

              <div className="container">
                <div className="about-section2 pt-0.5">
                  <div className="row mt-5 mx-1">
                    {resourcesList.data.map((myCat, index) => (
                      <div
                        className="col-md-4 col-lg-4 col-sm-12 my-2 d-flex flex-column flex-grow-1 p-2"
                        key={index}
                      >
                        <div className="card p-0 d-flex flex-column flex-grow-1  rounded-lg">
                          <Image
                            src={`${process.env.AWS_S3BUCKET_URL}${myCat.category_image}`}
                            className="rounded-lg"
                            alt={myCat.cat_name}
                            width={369}
                            height={207}
                            quality={80}
                          />
                          <div className="card-body align-items-center d-flex flex-column flex-grow-1 p-2 container-fluid ">
                            <div className="p-3">
                              <h3 className="h3 text-dark">
                                <b>{myCat.cat_name}</b>
                              </h3>
                              {myCat.cat_access ? (
                                <span className="badge badge-pill badge-primary">
                                  Subscription Access
                                </span>
                              ) : (
                                <span className="badge badge-pill badge-success">
                                  Open Access
                                </span>
                              )}
                              <div
                                dangerouslySetInnerHTML={{
                                  __html:
                                    myCat.short_description &&
                                    myCat.short_description.substring(0, 100) +
                                      "....."
                                }}
                              />
                            </div>
                          </div>
                          <div className="mx-4">
                            <Link
                              href={`/resources/r/${myCat.slug}`}
                              prefetch={false}
                            >
                              <div className="link-btn-b">
                                <b>
                                  Get Resources <FaArrowRight />
                                </b>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
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
  const myHeaders = new Headers()
  myHeaders.append("Content-Type", "application/json")

  const raw = JSON.stringify({})

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw
  }

  const response = await fetch(
    `${baseUrl}/api/resources/getResources`,
    requestOptions
  )
  const resourcesList = await response.json()

  var ProductData = []
  var requestParam = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      page_name: "Resources"
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

  return { props: { resourcesList, ProductData } }
}

export default connect((state) => state)(Resources)
Resources.propTypes = {
  resourcesList: PropTypes.any
}
