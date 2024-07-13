import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { ToastContainer, toast } from "react-toastify"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "next-share"
import { baseUrl } from "~/repositories/Repository"
import Image from "next/image"
import Loader from "~/components/reuseable/Loader"
import dayjs from "dayjs"
import { useSession } from "next-auth/react"
import {
  TbChecks,
  TbPlugOff,
  TbInfoCircle,
  TbAccessPointOff
} from "react-icons/tb"
import PropTypes from "prop-types"
import Link from "next/link"
import dynamic from "next/dynamic"
import { Divider } from "antd"

const Container = dynamic(() => import("~/components/layouts/Container"), {
  loading: () => <p>Loading...</p>
})
const BreadCrumb = dynamic(() => import("~/components/elements/BreadCrumb"), {
  loading: () => <p>Loading...</p>
})
const Subscribe = dynamic(
  () => import("~/components/shared/sections/Subscribe"),
  { loading: () => <p>Loading...</p> }
)
const CampaignForm = dynamic(
  () => import("~/components/shared/forms/CampaignForm"),
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
    text: "Campaign",
    url: "#"
  }
]
const CampaignPage = (props) => {
  const { productData } = props
  const [isLoading, setIsLoading] = useState(false)
  const [showForm, setShowForm] = useState(true)
  const [showCard, setShowCard] = useState(false)
  const [status, setstatus] = useState("info")
  const campaignId = JSON.parse(productData.data[0].campaign_id)
  const { data: session } = useSession()
  const [url, setUrl] = useState("")
  const router = useRouter()
  const [formValues, setFormValues] = useState([])
  const [uploadFiles, setUploadFiles] = useState([])

  useEffect(() => {
    const host = window.location.host
    const baseUrl = `https://${host}${router.asPath}`
    setUrl(baseUrl)
    breadcrumb.push({
      id: 3,
      text: productData.data[0].title.toLowerCase()
    })
  }, [router.pathname])

  useEffect(() => {
    const myformInputs = []
    if (productData?.data[0]?.form_type == "Normal") {
      var InputForm = JSON.parse(productData.data[0].form_details)
    }
    InputForm?.forEach((element) => {
      var mydata = {}
      const inputName = element.name.replace(/\s+/g, "_")
      mydata["value"] = ""
      mydata["file"] = ""
      mydata["name"] = inputName
      mydata["formtype"] = element.formtype
      mydata["filetype"] = element.filetype
      mydata["Required"] = element.Required
      mydata["helpingText"] = element.helpingText
      myformInputs.push(mydata)
    })
    setFormValues(myformInputs)
    setUploadFiles([])
  }, [])

  const SubmitForm = async (event) => {
    event.preventDefault()
    if (session) {
      try {
        setIsLoading(true)
        var error = 0

        var formdata = new FormData()

        formdata.append("campaignId", campaignId)
        formdata.append("UserId", session.id)

        formValues.forEach((element) => {
          if (element.formtype == "file") {
            if (
              element.file == "" ||
              (element.file == undefined && element.Required)
            ) {
              error = 1
            }
            formdata.append(element.name, element.file)
            formdata.append(`fileType[${element.name}]`, element.formtype)
          } else {
            if (
              element.value == "" ||
              (element.value == undefined && element.Required)
            ) {
              error = 1
            }
            formdata.append(element.name, element.value)
            formdata.append(`fileType[${element.name}]`, element.formtype)
          }
        })

        if (error == 0) {
          var requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow"
          }

          await fetch("/api/campaign/addcampaignform", requestOptions)
            .then((response) => response.json())
            .then((json) => {
              if (json.code == "200") {
                setIsLoading(false)
                setShowForm(false)
                setShowCard(true)
                setstatus("success")
                window.scroll({ top: 0, behavior: "smooth" })
                toast.success(json.message, {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined
                })

                sendVerifyLink(json.userData.name, json.userData.email)
              } else if (json.code == "201") {
                toast.info(json.message, {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined
                })
                setShowCard(true)
                setIsLoading(false)
                setstatus("info")
              } else {
                toast.error(json.message, {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined
                })
                setIsLoading(false)
                setShowCard(true)
                setstatus("error")
              }
            })
            .catch((error) => {
              setIsLoading(false)
            })
        } else {
          toast.warning("Please fill required Field..", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          })
          setIsLoading(false)
        }
      } catch (error) {
        setIsLoading(false)
      }
    } else {
      const CustomToastWithLink = () => (
        <div>
          <p className="">
            Please{" "}
            <Link href={"/auth/UserLogin"} prefetch={false}>
              <u>
                <div className="text-primary font-weight-bolder link-hover-thumb-shape">
                  Login
                </div>
              </u>
            </Link>{" "}
            before submitting. If you don&apos;t have an account. Create one{" "}
            <Link href={"/auth/UserReg"} prefetch={false}>
              <u>
                <div className="text-primary font-weight-bolder link-hover-thumb-shape">
                  here
                </div>
              </u>
            </Link>
          </p>
        </div>
      )
      toast.info(CustomToastWithLink, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    }
  }

  const sendVerifyLink = async (name, email) => {
    setIsLoading(true)
    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    var raw = JSON.stringify({
      name: name,
      email: email
    })

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    }

    await fetch(
      process.env.NEXT_BASE_URL + "/api/Email/promotionEmail",
      requestOptions
    )
      .then((response) => response.json())
      .then(async (result) => {
        setIsLoading(false)
      })
      .catch((error) => console.log("error", error))
  }

  let handleChange = (i, e) => {
    const notCheck = ["image/jpeg", "image/jpg", "image/webp", "image/png"]
    const restrictInput = new Set(notCheck)
    if (e.target.type == "file") {
      var imgData = []
      if (e.target.files && e.target.files.length > 0) {
        var imgDataURL = []
        var files = e.target.files
        for (let index = 0; index < files.length; index++) {
          const file = files[index]
          const size = file.size
          const type = file.type
          if (restrictInput.has(type)) {
            if (size <= 3145728) {
              imgData.push(file)
              imgDataURL.push(URL.createObjectURL(file))
              let newFormValues = [...formValues]
              newFormValues[i]["file"] = imgData[0]
              setFormValues(newFormValues)
              setUploadFiles(imgDataURL)
            } else {
              toast.error("Uploaded image should be in under 3MB file size", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
              })
              setIsLoading(false)
            }
          } else {
            toast.error("Uploaded image should be in jpeg format", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined
            })
            setIsLoading(false)
          }
        }
      }
    } else if (e.target.type == "checkbox") {
      let newFormValues = [...formValues]
      newFormValues[i]["value"] = e.target.checked
      setFormValues(newFormValues)
    } else {
      let newFormValues = [...formValues]
      newFormValues[i]["value"] = e.target.value
      setFormValues(newFormValues)
    }
  }

  var bgImage = `${process.env.AWS_S3BUCKET_URL}${productData?.data[0]?.banner_img}`

  return (
    <Container
      title="Campaign | Your Drug Discovery Platform"
      description="Stemnovate Shine through your research is for community building for early stage reserachers and scientists. See notifications and terms of use."
      ogimg={ `${process.env.AWS_S3BUCKET_URL}${productData?.data[0]?.shareimage}`}
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <main className="ps-page ps-page--inner">
        {isLoading ? <Loader /> : null}
        <div className="ps-page__header  breadcrumb-h banner-breadcrumb-bg">
            <BannerImage
              alt="campaign-Banner"
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
              <h1 className="text-center  text-white ">
                 {productData.data[0].title}
              </h1>
            </div>
          </div>

        <div className="ps-page__content">
          <div className="ps-about">
            <div className="container">
              <div className="card my-5 p-2">
                <div className="card-body">
                  {productData.data[0].status ? (
                    <div className="">
                      <div className="container">
                        <section className="ps-section--block-grid ">
                          <div className="ps-section__thumbnail">
                            <Link href="#">
                              <div className="ps-section__image link-hover-thumb-shape">
                                <img
                                  src={`${process.env.AWS_S3BUCKET_URL}${productData.data[0].image}`}
                                  alt={productData.data[0].title}
                                />
                              </div>
                            </Link>
                          </div>
                          <div className="ps-section__content">
                            <div className="ps-section__desc">
                              <h2 className="h1">
                                {productData.data[0].campaign_description}
                              </h2>
                            </div>
                            <div className="row">
                              <div className="col-md-5">
                                <FacebookShareButton
                                  url={url}
                                  quote={
                                    "Enhanced microfluidic devices for biomedical applications: from imulations to the laboratory."
                                  }
                                  hashtag={"#Stemnovate"}
                                >
                                  <FacebookIcon size={42} round />
                                </FacebookShareButton>
                                <TwitterShareButton
                                  url={url}
                                  quote={
                                    "Enhanced microfluidic devices for biomedical applications: from imulations to the laboratory."
                                  }
                                  hashtag={"#Stemnovate"}
                                >
                                  <TwitterIcon size={42} round />
                                </TwitterShareButton>
                                <LinkedinShareButton
                                  url={url}
                                  quote={
                                    "Enhanced microfluidic devices for biomedical applications: from imulations to the laboratory."
                                  }
                                  hashtag={"#Stemnovate"}
                                >
                                  <LinkedinIcon size={42} round />
                                </LinkedinShareButton>
                                <WhatsappShareButton
                                  url={url}
                                  quote={
                                    "Enhanced microfluidic devices for biomedical applications: from imulations to the laboratory."
                                  }
                                  hashtag={"#Stemnovate"}
                                >
                                  <WhatsappIcon size={42} round />
                                </WhatsappShareButton>
                              </div>
                              <div className="col-md-4">
                                <span className="text-right">
                                  {dayjs(productData.data[0].posted_at).format(
                                    "MMM D, YYYY"
                                  )}
                                </span>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                      <div className="container">
                        <div
                          className="center-box"
                          dangerouslySetInnerHTML={{
                            __html: productData.data[0].content
                          }}
                        ></div>
                        {showCard ? (
                          status == "success" ? (
                            <div
                              className="alert alert-success my-5"
                              role="alert"
                            >
                              <h4 className="alert-heading">
                                <TbChecks size="25" /> Thank you for your
                                participation
                              </h4>
                              <p>
                                Monthly from 1st September 2022, Stemnovate will
                                hold a free photo contest that requires prior
                                purchase from its website. This contest is named
                                `&quot;`Monthly shine through your
                                research`&quot;` and is on the theme of cell
                                culture. Every month, the contest will be
                                available from the first to the 25th of the
                                month.
                              </p>
                              <hr />
                              <p className="mb-0">
                                The contest consists of creating a picture
                                concerning cell culturing using
                                Stemnovate`&apos;`s products. The winners will
                                be featured on our social media and website and
                                will win a small prize.
                              </p>
                            </div>
                          ) : status == "error" ? (
                            <div
                              className="alert alert-danger my-5"
                              role="alert"
                            >
                              <h4 className="alert-heading">
                                <TbPlugOff size="25" /> Something went to wrong!
                              </h4>
                              <p>
                                Monthly from 1st September 2022, Stemnovate will
                                hold a free photo contest that requires prior
                                purchase from its website. This contest is named
                                `&quot;`Monthly shine through your
                                research`&quot;` and is on the theme of cell
                                culture. Every month, the contest will be
                                available from the first to the 25th of the
                                month.
                              </p>
                              <hr />
                              <p className="mb-0">
                                The contest consists of creating a picture
                                concerning cell culturing using
                                Stemnovate`&apos;`s products. The winners will
                                be featured on our social media and website and
                                will win a small prize.
                              </p>
                            </div>
                          ) : status == "info" ? (
                            <div className="alert alert-info my-5" role="alert">
                              <h4 className="alert-heading">
                                <TbInfoCircle size="25" /> Something details are
                                missing!
                              </h4>
                              <p>
                                Monthly from 1st September 2022, Stemnovate will
                                hold a free photo contest that requires prior
                                purchase from its website. This contest is named
                                `&quot;`Monthly shine through your
                                research`&quot;` and is on the theme of cell
                                culture. Every month, the contest will be
                                available from the first to the 25th of the
                                month.
                              </p>
                              <hr />
                              <p className="mb-0">
                                The contest consists of creating a picture
                                concerning cell culturing using
                                Stemnovate`&apos;`s products. The winners will
                                be featured on our social media and website and
                                will win a small prize.
                              </p>
                            </div>
                          ) : null
                        ) : null}

                        {productData?.data[0]?.form_type == "Normal" ? (
                          <>
                            {showForm ? (
                              formValues?.length > 0 ? (
                                <div className="card my-5">
                                  <div className="card-header">Form</div>
                                  <div className="card-body">
                                    <form onSubmit={SubmitForm}>
                                      <div className="row">
                                        {formValues.map((val, key) => (
                                          <div
                                            key={key}
                                            className="col-md-6 col-sm-6 col-xs-1 form-group"
                                          >
                                            {val.formtype == "textarea" ? (
                                              <div className="">
                                                <label htmlFor="inputPassword5">
                                                  {val.name.replace(/_/g, " ")}
                                                </label>
                                                <textarea
                                                  name={val.name}
                                                  placeholder={val.helpingText}
                                                  onChange={(e) =>
                                                    handleChange(key, e)
                                                  }
                                                  required={val.Required}
                                                  className="form-control"
                                                >
                                                  {val.value}
                                                </textarea>
                                              </div>
                                            ) : val.formtype == "checkbox" ? (
                                              <div className="form-check">
                                                <input
                                                  className="form-check-input form-control"
                                                  type="checkbox"
                                                  required={val.Required}
                                                  name={val.name}
                                                  onChange={(e) =>
                                                    handleChange(key, e, true)
                                                  }
                                                  id={"checkbox_" + key}
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor={"checkbox_" + key}
                                                >
                                                  <Link
                                                    href="/campaign-terms-and-condition"
                                                    target={"_blank"}
                                                    prefetch={false}
                                                  >
                                                    <div className="btn btn-link btn-lg link-hover-thumb-shape">
                                                      <u> {val.helpingText} </u>
                                                    </div>
                                                  </Link>
                                                </label>
                                              </div>
                                            ) : (
                                              <div className="">
                                                <label htmlFor="inputPassword5">
                                                  {val.name.replace(/_/g, " ")}
                                                </label>
                                                <input
                                                  type={val.formtype}
                                                  name={val.name}
                                                  placeholder={val.helpingText}
                                                  value={val.value}
                                                  onChange={(e) =>
                                                    handleChange(key, e)
                                                  }
                                                  required={
                                                    val.formtype == "file"
                                                      ? false
                                                      : val.Required
                                                  }
                                                  accept={
                                                    val.formtype == "file"
                                                      ? val.filetype
                                                      : "/*"
                                                  }
                                                  className="form-control"
                                                />
                                              </div>
                                            )}
                                          </div>
                                        ))}
                                        {uploadFiles.map((file, index) => {
                                          return (
                                            <div
                                              key={index}
                                              className="col-md-12 col-sm-12 col-xs-12 form-group border"
                                            >
                                              <Image
                                                src={file}
                                                width="150px"
                                                height={"150px"}
                                                alt="Product Image"
                                              />
                                            </div>
                                          )
                                        })}
                                        <div className="col-md-12 form-group">
                                          <button
                                            type="submit"
                                            className="btn btn-danger btn-lg"
                                          >
                                            Submit
                                          </button>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              ) : null
                            ) : null}
                          </>
                        ) : null}
                      </div>
                    </div>
                  ) : (
                    <div className="container">
                      <div className="alert alert-info my-5" role="alert">
                        <h4 className="alert-heading">
                          <TbAccessPointOff size="25" /> This campaign currently
                          not active
                        </h4>
                        <p>This Campaign is now offline </p>
                        <hr />
                        <p className="mb-0">
                          For more information. please contact our support Team{" "}
                        </p>
                      </div>
                    </div>
                  )}

                  {productData?.data[0]?.form_type == "Hubspot" ? (
                    <>
                      <Divider />
                      <div className="m-5">
                        <CampaignForm
                          portal_id={productData?.data[0]?.portal_id}
                          form_id={productData?.data[0]?.form_id}
                        />
                      </div>
                    </>
                  ) : null}
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

export async function getServerSideProps({ query }) {
  var slug = query.slug
  var productData = []
  if (slug != undefined) {
    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    var raw = JSON.stringify({
      slug: slug
    })

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    }

    const res = await fetch(
      baseUrl + "/api/campaign/getallcampaign",
      requestOptions
    )
    const myProductData = await res.json()

    if (myProductData.status == 200) {
      productData = myProductData
    } else {
      productData = []
    }
  }

  return { props: { productData } }
}

export default CampaignPage

CampaignPage.propTypes = {
  productData: PropTypes.any
}
