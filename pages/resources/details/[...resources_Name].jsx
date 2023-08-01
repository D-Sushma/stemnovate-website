/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import BreadCrumb from "~/components/elements/BreadCrumb"
import Container from "~/components/layouts/Container"
import { baseUrl } from "~/repositories/Repository"
import { connect } from "react-redux"
import Subscribe from "~/components/shared/sections/Subscribe"
import { useSession } from "next-auth/react"
import Link from "next/link"
import Image from "~/components/elements/Image"
import PropTypes from "prop-types"
import ProductList from "~/components/productList/resourcesRecommendedProductList"

import {
  FaArrowRight,
  FaRegArrowAltCircleDown,
  FaRegArrowAltCircleUp
} from "react-icons/fa"
import moment from "moment"
import AddToCartResources from "~/components/resources/AddToCartResources"
import { ToastContainer } from "react-toastify"

const ResourcesData = (props) => {
  const Router = useRouter()
  const { resources_Name } = Router.query
  const [breadCrumb, setBreadCrumb] = React.useState([])
  const { resourcesData } = props
  console.log("resourcesData", resourcesData)
  const [resourcesFiles] = useState([])
  const [readMore, setReadMore] = useState(false)
  const [userData, setUserData] = React.useState(null)
  const [isActive, setIsActive] = useState(false)
  const { data: session } = useSession()
  useEffect(() => {
    var searchURL = "/resources"
    if (resources_Name != undefined) {
      for (let index = 0; index < resources_Name.length; index++) {
        const data = resources_Name[index]
        searchURL = searchURL + "/" + data
      }

      setPageBreadcrumb()
    }
  }, [resources_Name])

  React.useEffect(() => {
    if (session) {
      getResourcesAccess()
      if (userData !== null) {
        getUserData()
      }
    }
  }, [session, userData])

  const getResourcesAccess = async () => {
    var raw = JSON.stringify({
      UserId: session?.id,
      ResourcesID: JSON.stringify(resourcesData.data[0].id)
    })
    console.log("raw", raw)
    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    }

    await fetch("/api/resources/access/checkResourcesAccess", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log("checkResourcesAccess", data)
        if (data.status == 200) {
          if (data.data.length > 0) {
            setIsActive(true)
          } else {
            setIsActive(false)
          }
        }
      })
  }
  const getUserData = async () => {
    var raw = JSON.stringify({
      UserLoginId: session?.id
    })
    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    }

    await fetch("/api/user/UserDetails", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data.code == 200) {
          setUserData(data.result)
        }
      })
  }

  const setPageBreadcrumb = async () => {
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
    for (let index = 0; index < resources_Name.length; index++) {
      if (index === 0) {
        const element = resources_Name[index]
        if (index <= resources_Name.length) {
          uRLData = uRLData + "/r/" + element
        } else {
          uRLData = null
        }
        const new_last_elem = element.charAt(0).toUpperCase() + element.slice(1)
        var bdc = {
          id: 3 + index,
          text: new_last_elem
        }
        if (uRLData !== null) {
          bdc.url = uRLData
        }
        newBreadCrumb.push(bdc)
      }
    }
    setBreadCrumb(newBreadCrumb)
  }

  return (
    <Container
      title={
        resourcesData ? resourcesData.data[0].resources_name : resources_Name[0]
      }
      description="Stemnovate page is about new digital karyotyping to study chromsomal changes, mutaions, gender identity for human diseases and cell line authentication"
    >
      <ToastContainer />
      <main className="ps-page ps-page--inner">
        <div className="ps-page__header  breadcrumb-h application-breadcrumb-bg">
          <div className="container ">
            <BreadCrumb breacrumb={breadCrumb} />
            <h1 className="text-center  text-white p-2">
              {resourcesData.data[0].resources_name
                ? resourcesData.data[0].resources_name
                : resources_Name[0]}
            </h1>
          </div>
        </div>

        <div className="ps-page__content">
          <div className="ps-about">
            <div className=" about-section ">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 my-3">
                    <Image
                      src={`${process.env.AWS_S3BUCKET_URL}${resourcesData.data[0].resources_preview}`}
                      className="rounded"
                      alt={resourcesData.data[0].resources_name}
                      width={1200}
                      height={675}
                      placeholder="blur"
                      blurDataURL="/static/image/blurred.png"
                    />
                  </div>

                  <div className="col-md-6 my-3">
                    <h2>{resourcesData.data[0].resources_name}</h2>
                    <div className="download-option ">
                      <p>
                        File type - {resourcesData.data[0].resourcesFileType}
                      </p>
                      <p className="ps-product__price sale">
                        Price - <span>£</span>{" "}
                        {resourcesData.data[0].resources_price}
                      </p>
                      <p>
                        Published -{" "}
                        {moment(resourcesData.data[0].created_at).format(
                          "DD-MMM-YYYY"
                        )}
                      </p>
                      <div className="my-3">
                        {resourcesData.data[0].resources_price > 0 ? (
                          isActive ? (
                            <Link
                              href={`/resources/Access/${resourcesData.data[0].resources_category_resourcesToresources_category.slug}/${resourcesData.data[0].resources_id}/${resourcesData.data[0].access_type}`}
                            >
                              <div style={{ cursor: "pointer" }}>
                                <button className="button button--green mr-2">
                                  Access Data
                                </button>
                              </div>
                            </Link>
                          ) : (
                            <AddToCartResources
                              userData={userData}
                              product={resourcesData.data[0]}
                            />
                          )
                        ) : (
                          <Link
                            href={`/resources/Access/${resourcesData.data[0].resources_name}`}
                          >
                            <div style={{ cursor: "pointer" }}>
                              <button className="button button--green mr-2">
                                Access Data
                              </button>
                            </div>
                          </Link>
                        )}
                      </div>
                    </div>

                    <p className="text-dark">
                      {resourcesData.data[0].short_description}
                    </p>
                  </div>
                </div>
                <div>
                  {readMore ? (
                    <div
                      className="text-left"
                      dangerouslySetInnerHTML={{
                        __html: resourcesData.data[0].resources_content
                      }}
                    />
                  ) : (
                    <div
                      className="text-left"
                      dangerouslySetInnerHTML={{
                        __html:
                          resourcesData.data[0].resources_content.length > 500
                            ? resourcesData.data[0].resources_content.substring(
                                0,
                                500
                              ) + "..."
                            : resourcesData.data[0].resources_content
                      }}
                    />
                  )}
                </div>
                {resourcesData.data[0].resources_content &&
                resourcesData.data[0].resources_content.length > 499 ? (
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
                            width={1000}
                            height={563}
                          />
                          <div className="card-body p-0 container-fluid">
                            <div className="p-3">
                              <h3 className="h3 text-dark">
                                <b>{myRes.resources_name}</b>
                              </h3>
                              <p>{myRes.resourcesFileType}</p>
                              {myRes.resources_price > 0 ? (
                                <span className="badge badge-pill badge-primary">
                                  Member only
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
                                href={`/resources/r/${myRes.resources_name}`}
                              >
                                <div
                                  className="link-btn-b"
                                  style={{ cursor: "pointer" }}
                                >
                                  <b>
                                    Get Resources <FaArrowRight />
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

            <div className="about-section">
              <div className="container">
                <p className="base-bg-primary text-white p-2">
                  Products with {resourcesData.data[0].resources_name}
                </p>
                <ProductList slug={resourcesData.data[0].related_products} />
              </div>
            </div>

            <Subscribe />
          </div>
        </div>
      </main>
    </Container>
  )
}

export async function getServerSideProps({ query }) {
  const slug = query.resources_Name
  console.log("slug", slug)
  var resourcesData = []
  var tokenId = ""
  var resources_token = ""
  if (slug != undefined) {
    resources_token = slug[slug.length - slug.length + 1]
    tokenId = slug[slug.length - 1]
    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")
    var raw = JSON.stringify({
      resources_token: resources_token,
      tokenId: tokenId
    })

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    }

    const res = await fetch(
      baseUrl + "/api/resources/access/ResourcesData",
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
