/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { baseUrl } from "~/repositories/Repository"
import { connect } from "react-redux"
import { useSession } from "next-auth/react"
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
  FaRegArrowAltCircleDown,
  FaRegArrowAltCircleUp
} from "react-icons/fa"
import moment from "moment"
import AddToCartResources from "~/components/resources/AddToCartResources"
import { ToastContainer } from "react-toastify"
import Loader from "~/components/reuseable/Loader"
import { decode, encode } from "hex-encode-decode"

const ResourcesData = (props) => {
  const Router = useRouter()
  const { resources_Name } = Router.query
  const [breadCrumb, setBreadCrumb] = React.useState([])
  const { resourcesData } = props
  const [readMore, setReadMore] = useState(false)
  const [userData, setUserData] = React.useState(null)
  const [isActive, setIsActive] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [resourcesFiles, setResourcesFiles] = useState([])
  const [resources_structural, setResources_structural] = useState([])
  const [resources_sequence, setResources_sequence] = useState([])
  const [filePath, setFilePath] = useState(null)
  const { data: session } = useSession()
  var file_count = 0
  var seqfile_count = 0
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
      // console.log(session);
      getResourcesAccess()
      if (userData !== null) {
        getUserData()
      }
    } else {
      // console.log("Not Session");
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
            setIsLoading(true)
            getResourcesFiles()
          } else {
            setIsActive(false)
          }
          }
      })
  }

  const getResourcesFiles = async () => {
    var raw = JSON.stringify({
      UserId: session?.id,
      ResourcesID: resourcesData.data[0].id
    })
    console.log("newraw", raw)

    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    }

    await fetch("/api/resources/access/getResourcesFiles", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log("getResourcesFiles", data)
        setIsLoading(false)
        if (data.status == 200) {
          setResourcesFiles(data.data[0])
          setIsActive(true)
          console.log("resourcesFiles_new", data.data[0])
          const sv = JSON.parse(data.data[0].structural_variation)
          const seq = JSON.parse(data.data[0].sequencing)
          console.log("sv : ", data.data[0].structural_variation)
          file_count = sv.filter((item) => item.type !== "").length
          if (file_count > 0) {
            setResources_structural(sv)
          }
          seqfile_count = seq.filter((item) => item.sequence_id !== "").length
          if (seqfile_count > 0) {
            setResources_sequence(seq)
          }
          console.log("file_count", file_count)
          //  console.log("resources_structural", data.data[0].structural_variation)
          getURLLink(data.data[0].datasheet_files)
        }
      })
  }

  const getURLLink = async (val) => {
    console.log("val", val)
    var raw = JSON.stringify({
      key: encode(val)
    })
    console.log("raw", raw)
    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    }

    await fetch("/api/resources/access/getLink", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log("urlLink", data)
        if (data.code == 200) {
          setFilePath(decode(data.url))
        }
        setIsLoading(false)
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
    >
      {isLoading ? <Loader /> : null}
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
                    <img
                      src={`${process.env.AWS_S3BUCKET_URL}${resourcesData.data[0].resources_preview}`}
                      className="rounded"
                      alt={resourcesData.data[0].resources_name}
                    />
                  </div>

                  <div className="col-md-6 my-3">
                    <h2>{resourcesData.data[0].resources_name}</h2>
                    <div className="download-option ">
                      <p>
                        File type - {resourcesData.data[0].resourcesFileType}
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
                              href={`/resources/Download/${resourcesData.data[0].resources_category_resourcesToresources_category.slug}/${resourcesData.data[0].resources_id}/${resourcesData.data[0].access_type}`}
                              prefetch={false}
                            >
                              <div style={{cursor:"pointer"}}>
                                <button className="button button--green mr-2">
                                  View & Download PDF
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
                          <button className="button button--green mr-2">
                            Download
                          </button>
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
              {isActive ? (
                <div className="container">
                  <h3>{resourcesFiles.datasheet_name}</h3>
                  <p>{resourcesFiles.datasets_description}</p>
                  <div className="row">
                    <div className="col-md-10 my-4">
                      <div className="ps-table__name my-3">
                        Results per sequence
                      </div>
                      <table className="table ps-table ps-table--oriented">
                        <tbody>
                          <tr>
                            <th className="ps-table__th">Sequence ID</th>
                            <th className="ps-table__th">Alignment</th>
                          </tr>
                          
                          {seqfile_count > 0
                            ? seqfile_count
                            : resources_sequence.map((sq, k) => {
                                return (
                                  <tr key={k}>
                                    <th className="ps-table__th">
                                      {sq.sequence_id}
                                    </th>
                                    <th className="ps-table__th">
                                      {sq.alignment}
                                    </th>
                                  </tr>
                                )
                              })}
                        </tbody>
                      </table>
                    </div>
                    <div className="col-md-12 my-4">
                      <div className="ps-table__name my-3">
                        Structural variation calling
                      </div>
                      <table className="table ps-table ps-table--oriented">
                        <tbody>
                          <tr>
                            <th className="ps-table__th">ID</th>
                            <th className="ps-table__th">Type</th>
                            <th className="ps-table__th">Length</th>
                            <th className="ps-table__th">Location</th>
                            <th className="ps-table__th">Position</th>
                          </tr>
                          
                          {file_count > 0
                            ? file_count
                            : resources_structural.map((struct, k) => {
                                return (
                                  <tr key={k}>
                                    <th className="ps-table__th">{k + 1}</th>
                                    <th className="ps-table__th">
                                      {struct.type}
                                    </th>
                                    <th className="ps-table__th">
                                      {struct.length}
                                    </th>
                                    <th className="ps-table__th">
                                      {struct.location}
                                    </th>
                                    <th className="ps-table__th">
                                      {struct.position}
                                    </th>
                                  </tr>
                                )
                              })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              ) : null}
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
    console.log("resources_token", resources_token)
    console.log("tokenId", tokenId)
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
