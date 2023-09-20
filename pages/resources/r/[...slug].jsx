import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
// import BreadCrumb from "~/components/elements/BreadCrumb"
// import Container from "~/components/layouts/Container"
import { baseUrl } from "~/repositories/Repository"
import { connect } from "react-redux"
import Image from '~/components/elements/Image'
import dynamic from 'next/dynamic'

const Container = dynamic(
  () => import("~/components/layouts/Container"),
  {loading: ()=> <p>Loading...</p>}
)
const BreadCrumb = dynamic(
  () => import("~/components/elements/BreadCrumb"),
  {loading: ()=> <p>Loading...</p>}
)
const Subscribe = dynamic(
    () => import("~/components/shared/sections/Subscribe"),
    {loading: ()=> <p>Loading...</p>}
  )

import PropTypes from "prop-types"
import Link from "next/link"
import {
  FaArrowRight,
  FaRegArrowAltCircleDown,
  FaRegArrowAltCircleUp
} from "react-icons/fa"

const ResourcesData = (props) => {
  const Router = useRouter()
  const { slug } = Router.query
  const [breadCrumb, setBreadCrumb] = React.useState([])
  const { resourcesData } = props
  const [resourcesFiles, setResourcesFiles] = useState([])
  const [readMore, setReadMore] = useState(false)

  useEffect(() => {
    var searchData = ""
    var searchURL = "/resources"
    if (slug != undefined) {
      for (let index = 0; index < slug.length; index++) {
        const data = slug[index]
        if (index == slug.length - 1) {
          searchData = data
        }
        searchURL = searchURL + "/" + data
      }
      getRelatedResources()

      slug && getcategoryListBySlug(searchData)
    }
    return () => {
      setReadMore(false)
    }
  }, [slug])

  const getcategoryListBySlug = async () => {
    const newBreadCrumb = [
      {
        id: 1,
        text: "Home",
        url: "/"
      },
      {
        id: 2,
        text: "Resources",
        url: "/resources"
      }
    ]
    var uRLData = "/resources"
    for (let index = 0; index < slug.length; index++) {
      const element = slug[index]
      if (index === slug.length - 1) {
        uRLData = null
      } else {
        uRLData = uRLData + "/" + element
      }
      var new_last_elem = element.charAt(0).toUpperCase() + element.slice(1)
      new_last_elem = new_last_elem.replace("-", " ")
      var bdc = {
        id: 3 + index,
        text: new_last_elem
      }
      if (uRLData !== null) {
        bdc.url = uRLData
      }
      newBreadCrumb.push(bdc)
    }
    setBreadCrumb(newBreadCrumb)
  }

  const getRelatedResources = async () => {
    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    var raw = JSON.stringify({
      tokenId: resourcesData.data[0].cat_access,
      category_token: resourcesData.data[0].cat_id
    })

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    }

    const res = await fetch(
      baseUrl + "/api/resources/access/getRelatedResources",
      requestOptions
    )
    const resourcesFilesData = await res.json()
    if (resourcesFilesData.status === 200) {
      setResourcesFiles(resourcesFilesData.data)
    }
  }

  return (
    <Container title={resourcesData ? resourcesData.data[0].cat_name : slug}>
      <main className="ps-page ps-page--inner">
        <div className="ps-page__header  breadcrumb-h application-breadcrumb-bg">
          <div className="container ">
            <BreadCrumb breacrumb={breadCrumb} />
            <h1 className="text-center  text-white p-2">
              {resourcesData.data[0].cat_name
                ? resourcesData.data[0].cat_name
                : slug}
            </h1>
          </div>
        </div>

        <div className="ps-page__content">
          <div className="ps-about">
            <div className=" about-section ">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 my-2">
                    <Image
                      src={`${process.env.AWS_S3BUCKET_URL}${resourcesData.data[0].category_image}`}
                      className="rounded"
                      alt={resourcesData.data[0].cat_name}
                      width={1200}
                      height={675}
                      placeholder="blur"
                      blurDataURL="/static/image/blurred.png"
                    />
                  </div>

                  <div className="col-md-6 my-2">
                    <h2>{resourcesData.data[0].cat_name}</h2>
                    <div className="download-option d-none">
                      <p>Image type - JPG</p>
                      <p>Resolution - 7819×5213</p>
                      <p>Published - Sept. 10,2022</p>
                      <p>Views - 2852</p>
                      <p>Downloads - 2681</p>
                      <div className="my-3">
                        <button className="button button--green mr-2">
                          Download
                        </button>
                        <button className="button button--yellow ">
                          Go Premium
                        </button>
                      </div>
                    </div>
                    <p>{resourcesData.data[0].short_description}</p>
                  </div>
                </div>
                <div>
                  {readMore ? (
                    <div
                      className="text-left"
                      dangerouslySetInnerHTML={{
                        __html: resourcesData.data[0].category_content
                      }}
                    />
                  ) : (
                    <div
                      className="text-left"
                      dangerouslySetInnerHTML={{
                        __html:
                          resourcesData.data[0].category_content.length > 500
                            ? resourcesData.data[0].category_content.substring(
                                0,
                                500
                              ) + "..."
                            : resourcesData.data[0].category_content
                      }}
                    />
                  )}
                  {resourcesData.data[0].category_content &&
                  resourcesData.data[0].category_content.length > 499 ? (
                    <div className="text-center m-3">
                      <button>
                        <p
                          className="text-orange"
                          onClick={() => setReadMore(!readMore)}
                        >
                          {!readMore ? (
                            <FaRegArrowAltCircleDown />
                          ) : (
                            <FaRegArrowAltCircleUp />
                          )}{" "}
                          {readMore ? "Show less" : "Show More"}
                        </p>
                      </button>
                    </div>
                  ) : null}
                </div>
                {/* Resources Details Section */}
              </div>
            </div>

            {resourcesFiles && resourcesFiles.length > 0 ? (
              <div className="about-section pt-3">
                <div className="container">
                  <div className="row ">
                    <div className="col-md-12">
                      <div className="d-flex rounded justify-content-between align-items-center px-4 bg-dull-white py-4 mb-3">
                        <h2>
                          <b>Resources</b>
                        </h2>
                      </div>
                    </div>
                    {resourcesFiles.map((myRes, index) => (
                      <div
                        className="col-md-3 my-6 col-sm-3 col-6 d-flex flex-column flex-grow-1"
                        key={index}
                      >
                        <div className="card  d-flex flex-column flex-grow-1 rounded-lg align-items-center p-0 ">
                          <Image
                            src={`${process.env.AWS_S3BUCKET_URL}${myRes.resources_preview}`}
                            className="rounded"
                            alt={myRes.resources_name}
                            width={1200}
                            height={675}
                            placeholder="blur"
                            blurDataURL="/static/image/blurred.png"
                          />
                          <div className="card-body p-0 container-fluid">
                            <div className="p-3">
                              <h3 className="h3 text-dark">
                                <b>{myRes.resources_name}</b>
                              </h3>
                              <p>{myRes.resourcesFileType}</p>
                              {myRes.resources_price > 0 ? (
                                <span className="badge badge-pill badge-primary">
                                  Subscription Access
                                </span>
                              ) : (
                                <span className="badge badge-pill badge-success">
                                  Free
                                </span>
                              )}
                              {myRes.resources_content !== "null" ? (
                                <p
                                  className=" bd-highlight mt-3 "
                                  style={{ minHeight: "50px" }}
                                  dangerouslySetInnerHTML={{
                                    __html: myRes.resources_content.substr(
                                      0,
                                      100
                                    )
                                  }}
                                ></p>
                              ) : null}
                              <Link
                                href={`/resources/details/${resourcesData.data[0].slug}/${myRes.resources_id}/${myRes.access_type}`}
                                prefetch={false}
                              >
                                <div className="link-btn-b">
                                  <b>
                                    Buy Now <FaArrowRight />
                                  </b>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}

            {resourcesData.data[0] &&
            resourcesData.data[0].other_resources_category.length > 0 ? (
              <div className="about-section pt-3">
                <div className="container">
                  <div className="row ">
                    <div className="col-md-12">
                      <div className="d-flex rounded justify-content-between align-items-center px-4 bg-dull-white py-4 mb-3">
                        <h2>
                          <b>Related Category</b>
                        </h2>
                      </div>
                    </div>
                    {resourcesData.data[0].other_resources_category.map(
                      (myCat, index) => (
                        <div
                          className="col-md-3 my-6 col-sm-3 col-6 d-flex flex-column flex-grow-1"
                          key={index}
                        >
                          <Link href={`/resources/r/${myCat.slug}`} prefetch={false}>
                            <div className="card  d-flex flex-column flex-grow-1 rounded-lg align-items-center p-0 ">
                              <Image
                                src={`${process.env.AWS_S3BUCKET_URL}${myCat.category_image}`}
                                className="rounded"
                                alt={myCat.cat_name}
                                width={1200}
                                height={675}
                                placeholder="blur"
                                blurDataURL="/static/image/blurred.png"
                              />
                              <div className="card-body p-0 container-fluid">
                                <div className="p-3">
                                  <h3 className="h3 text-dark">
                                    <b>{myCat.cat_name}</b>
                                  </h3>
                                  {myCat.cat_access ? (
                                    <span className="badge badge-pill badge-primary">
                                      Member only
                                    </span>
                                  ) : (
                                    <span className="badge badge-pill badge-success">
                                      Free
                                    </span>
                                  )}
                                  <p>
                                    {myCat.short_description &&
                                      myCat.short_description.substring(0, 90)}
                                  </p>
                                  <Link href={`/resources/r/${myCat.slug}`} prefetch={false}>
                                    <div className="link-btn-b">
                                      <b>
                                        Get Resources <FaArrowRight />
                                      </b>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            ) : null}

            <Subscribe />
          </div>
        </div>
      </main>
    </Container>
  )
}

export async function getServerSideProps({ query }) {
  const slug = query.slug
  var resourcesData = []
  var data = ""
  if (slug != undefined) {
    data = slug[slug.length - 1]
    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    var raw = JSON.stringify({
      resourcesSlug: data
    })

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    }

    const res = await fetch(
      baseUrl + "/api/resources/getResourcesBySlug",
      requestOptions
    )
    const myProductData = await res.json()
    if (myProductData.status === 200) {
      resourcesData = myProductData
    }
  }

  // // Pass data to the page via props
  return { props: { resourcesData } }
}

// export default ResourcesData;
export default connect((state) => state)(ResourcesData)
ResourcesData.propTypes = {
  resourcesData: PropTypes.array
}
