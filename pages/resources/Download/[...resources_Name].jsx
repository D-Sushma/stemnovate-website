import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { baseUrl } from "~/repositories/Repository"
import { connect } from "react-redux"
import { useSession } from "next-auth/react"
import PropTypes from "prop-types"
import dynamic from 'next/dynamic'

const Container = dynamic(
  () => import("~/components/layouts/Container"),
  {loading: ()=> <p>Loading...</p>}
)
const Subscribe = dynamic(
    () => import("~/components/shared/sections/Subscribe"),
    {loading: ()=> <p>Loading...</p>}
  )
  
import jsPDF from "jspdf"
import html2canvas from "html2canvas"
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
          // setUserData(data.result)
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
          getURLLink(data.data[0].pdf_bottom_sign)
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

  /*  generate PDF */
  let handlePdf = () => {
    const input = document.getElementById('page');

    html2canvas(input)
      .then((canvas) => {
       const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'portrait',
        });
        const imgProps= pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      //  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('download.pdf');
      });
  };
    
  return (
    <Container
      title={
        resourcesData ? resourcesData.data[0].resources_name : resources_Name[0]
      }
    >
      <div className="row">
        <div className="col-md-12 text-center my-5">
             <div>
              <button className="ps-btn ps-btn--warning ps-btn--curve" onClick={handlePdf}>Download PDF</button>
            </div>
        </div>
      </div>
      
      
      <div className="ps-page ps-page--shopping">
        <div className="ps-page__content">
          <div className="ps-about">
            <div className="about-section" id="page">
              <div className="container-fluid">
                <div className="ps-page__content">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div
                          className="col-md-12 mb-3"
                          style={{ borderBottom: "1px solid black" }}
                        >
                          <img src="/static/img/pdf_logo.png" alt="Stemnovate Limited" style={{width:"40%"}} />
                          
                        </div>
                        <div className="col-md-12 ">

                          <div
                            className="row mb-4"
                            style={{ borderBottom: "1px solid black" }}
                          >
                            <div className="col-md-6">
                              <h2>{resourcesData.data[0].resources_name}</h2>
                              <p>
                                {resourcesData.data[0].short_description}
                              </p>

                            </div>
                            <div className="col-md-6">
                              <p>PO : {" "}
                                {resourcesFiles.pdf_po}
                              </p>
                              <p>Company : {" "}
                                {resourcesFiles.pdf_company}
                              </p>
                              <p>Report Number : {" "}
                                {resourcesFiles.pdf_reportno}
                              </p>
                              <p>Catalogue Number : {" "}
                                {resourcesFiles.pdf_catalogue_no}
                              </p>
                            </div>
                            
                          </div>
                          <div
                            className="row"
                            style={{ borderBottom: "1px solid black" }}
                          >
                            <h4 className="my-3">{resourcesFiles.datasets_description}</h4>
                            <div className="col-md-12">
                              <h4 className="my-3">Sequencing Details</h4>
                              <table className="table" width="100%">
                                <tr>
                                  <th width="40%">Sequencing ID</th>
                                  <th width="45%">Alignment</th>
                                  
                                </tr>
                                <tbody>
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
                             <div className="col-md-12">
                              <h4 className="my-3">Structural Variation</h4>
                              <table className="table" width="100%">
                                <tr>
                                  <th width="40%">Type</th>
                                  <th width="30%">Location</th>
                                  <th width="30%">Position</th>
                                </tr>
                                <tbody>
                                  {file_count > 0
                            ? file_count
                            : resources_structural.map((struct, k) => {
                                return (
                                  <tr key={k}>
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
                        <div className="col-md-12 ">

                          <div
                            className="row my-4"
                            style={{ borderBottom: "1px solid black" }}
                          >
                              <div className="col-md-12">
                                <h2>Result</h2>
                                <p>
                                  {resourcesFiles.pdf_result}
                                </p>

                              </div>
                            </div>
                          </div>

                          <div className="col-md-12 ">

                          <div
                            className="row my-4"
                            style={{ borderBottom: "1px solid black" }}
                          >
                            <div className="col-md-9"></div>
                              <div className="col-md-3">
                                <h2>{resourcesFiles.pdf_bottom_name}</h2>
                                <p>
                                  <img
                            src={`${filePath}`}
                            className="rounded-lg"
                            alt="Bottom_Sign"
                          />
                                  
                                </p>

                              </div>
                            </div>
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
    </Container>
  )
}

export async function getServerSideProps({ req, res,query }) {
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
  return { props: { resourcesData } }
}

// export default ResourcesData;
export default connect((state) => state)(ResourcesData)
ResourcesData.propTypes = {
  resourcesData: PropTypes.array
}
