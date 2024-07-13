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
      description="Stemnovate page on trainings, webinars, techniques, newsletters. Subject to change and review"
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
            <h1 className="text-center  text-white p-2">Open Resources</h1>
          </div>
        </div>
        <div className="ps-page__content">
          <div className="ps-about">
            <div className="category-section mb-5">
              <div className="container">
                <div className="about-section py-0 mb-4">
                  <div className="row mt-5" data-columns="4">
                    {privateList.map((myCat, index) => (
                      <div
                        key={index}
                        className="card col-md-6 col-sm-12 mb-3 p-2 d-flex flex-column flex-grow-1"
                      >
                        <div className="rounded-lg align-items-center p-0 ">
                          <Image
                            src={`${process.env.AWS_S3BUCKET_URL}${myCat.category_image}`}
                            alt={myCat.cat_name}
                            width={1200}
                            height={675}
                            quality={80}
                          />
                          <div className="card-body rounded-lg p-0 overlay-content">
                            <div className="p-2 p-md-5 card-resource">
                              <h2 className="h1 text-white">
                                <b>{myCat.cat_name}</b>
                              </h2>
                              {myCat.cat_access ? (
                                <span className="badge badge-pill badge-primary">
                                  Member only
                                </span>
                              ) : (
                                <span className="badge badge-pill badge-success">
                                  Open Access
                                </span>
                              )}
                              <div
                                className="text-white"
                                dangerouslySetInnerHTML={{
                                  __html:
                                    myCat.short_description &&
                                    myCat.short_description.substring(0, 120) +
                                      "....."
                                }}
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
    accessType: 0
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
