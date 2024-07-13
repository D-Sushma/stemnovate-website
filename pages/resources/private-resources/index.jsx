import React, { useEffect } from "react"
import { connect } from "react-redux"
import { baseUrl } from "~/repositories/Repository"
import PropTypes from "prop-types"
import { FaArrowRight } from "react-icons/fa"
import Link from "next/link"
import { useState } from "react"
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

const Resources = ({ resourcesList, ProductData }) => {
  const [privateList, setPrivateList] = useState([])

  useEffect(() => {
    setPrivateList(resourcesList.data)
  }, [])

  return (
    <Container
      title="Resources"
      description="Stemnovate resources page is for information on techniques, learning materials, updates, blogs and newsletters."
    >
      <main className="ps-page ps-page--inner">
        <div
          style={{
            backgroundImage: `url(${process.env.AWS_S3BUCKET_URL}${ProductData?.data[0]?.banner_img})`
          }}
          className="ps-page__header  breadcrumb-h application-breadcrumb-bg"
        >
          <div className="container ">
            <BreadCrumb breacrumb={breadcrumb} />
            <h1 className="text-center  text-white p-2">Subscription Access</h1>
          </div>
        </div>
        <div className="ps-page__content">
          <div className="ps-about">
            <div className="category-section mb-5">
              <div className="container">
                <div className="about-section py-0">
                  <div className="row mt-5" data-columns="4">
                    {privateList.map((myCat, index) => (
                      <div
                        className="card col-md-6 col-lg-6 col-sm-6 mb-3 p-2 flex-column flex-grow-1"
                        key={index}
                      >
                        <div className="align-items-center p-0 ">
                          <Image
                            src={`${process.env.AWS_S3BUCKET_URL}${myCat.category_image}`}
                            alt={myCat.cat_name}
                            width={558}
                            height={314}
                            priority={true}
                          />
                          <div className="card-body rounded-lg p-0 overlay-content">
                            <div className="p-5">
                              <h2 className="h3 text-white">
                                <b>{myCat.cat_name}</b>
                              </h2>
                              {myCat.cat_access ? (
                                <span className="badge badge-pill badge-primary">
                                  Subscription Access
                                </span>
                              ) : (
                                <span className="badge badge-pill badge-success">
                                  Free
                                </span>
                              )}
                              <div
                                dangerouslySetInnerHTML={{
                                  __html:
                                    myCat.short_description &&
                                    myCat.short_description.substring(0, 120) +
                                      "....."
                                }}
                                className="text-white"
                              ></div>
                            </div>
                          </div>
                          <div>
                            <Link
                              href={`/resources/r/${myCat.slug}`}
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
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Subscribe />
          </div>
        </div>
      </main>
    </Container>
  )
}

export async function getServerSideProps() {
  var myHeaders = new Headers()
  myHeaders.append("Content-Type", "application/json")

  var raw = JSON.stringify({
    accessType: 1,
    accessCode: "=65nvgv_hgygjaxbcgrwesfcy"
  })

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw
  }

  const response = await fetch(
    baseUrl + "/api/resources/getResources",
    requestOptions
  )

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

  const resourcesList = await response.json()
  return { props: { resourcesList, ProductData } }
}

export default connect((state) => state)(Resources)
Resources.propTypes = {
  resourcesList: PropTypes.any
}
