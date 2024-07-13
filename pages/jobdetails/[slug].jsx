import React, { useEffect, useState } from "react"
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
import { useRouter } from "next/router"
import { baseUrl } from "~/repositories/Repository"
import PropTypes from "prop-types"
import { TbCalendarTime, TbBuildingCommunity, TbLiveView } from "react-icons/tb"
import moment from "moment"
import { Divider } from "antd"
import dynamic from "next/dynamic"
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
const CareerForm = dynamic(
  () => import("~/components/shared/forms/CareerForm"),
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
    text: "Careers",
    url: "/careers"
  }
]

const CareersList = (props) => {
  const [url, setUrl] = useState("")
  const router = useRouter()
  const { PostList } = props
  const [JobsList] = useState(PostList.data[0])

  useEffect(() => {
    const host = window.location.host
    const baseUrl = `https://${host}/jobdetails/${JobsList.job_id}`
    setUrl(baseUrl)
    breadcrumb.push({
      id: 3,
      text: JobsList.position_name
    })
    if (!PostList.data[0].status) {
      router.push("/careers")
    }
  }, [router.pathname])

  // console.log('JobsList',JobsList)

  const bgImage = `${process.env.AWS_S3BUCKET_URL}${JobsList?.banner_img}`

  return (
    <Container
      title={JobsList?.position_name}
      description="Stemnovate page on volunteering opportunities, apprenticeships, trainings and learning"
      cronical={"/careers"}
      ogimg={JobsList?.shareimage}
    >
      <main className="ps-page ps-page--inner">
      <div className="ps-page__header  breadcrumb-h  banner-breadcrumb-bg">
          <BannerImage
            alt={`${JobsList?.position_name} 'banner-image'`}
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
              {JobsList?.position_name}
            </h1>
          </div>
        </div>

        <div className="ps-page__content">
          <div className="ps-about">
            <div className="container">
              <div className="card my-5 p-2">
                <div className="card-body">
                  <div className="row px-5">
                    <div className="col-md-12 ">
                      <h2>{JobsList?.position_name}</h2>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: JobsList?.job_description
                        }}
                      ></p>
                    </div>
                    <div className="col-md-8 my-3">
                      <p className="text-left">
                        <TbBuildingCommunity className="mr-3 mb-1" />
                        {JobsList?.company}
                      </p>
                      <p>
                        <TbLiveView className="mr-3 mb-1" />
                        {JobsList?.location}
                      </p>
                      <p className="text-left">
                        <TbCalendarTime className="mr-3" />
                        {moment(JobsList?.created_at).format("DD-MM-YYYY")}
                      </p>
                    </div>

                    <div className="col-md-4 my-3">
                      <FacebookShareButton
                        url={url}
                        className="m-3"
                        quote={JobsList.position_name}
                        hashtag={"#Stemnovate"}
                      >
                        <FacebookIcon size={42} round />
                      </FacebookShareButton>
                      <TwitterShareButton
                        url={url}
                        className="m-3"
                        quote={JobsList.position_name}
                        hashtag={"#Stemnovate"}
                      >
                        <TwitterIcon size={42} round />
                      </TwitterShareButton>
                      <LinkedinShareButton
                        url={url}
                        className="m-3"
                        quote={JobsList.position_name}
                        hashtag={"#Stemnovate"}
                      >
                        <LinkedinIcon size={42} round />
                      </LinkedinShareButton>
                      <WhatsappShareButton
                        url={url}
                        className="m-3"
                        quote={JobsList.position_name}
                        hashtag={"#Stemnovate"}
                      >
                        <WhatsappIcon size={42} round />
                      </WhatsappShareButton>
                    </div>
                  </div>
                  <div className="px-5">
                    <div
                      className="center-box h3"
                      dangerouslySetInnerHTML={{
                        __html: JobsList.job_details
                      }}
                    ></div>
                  </div>
                  <Divider />
                  <div className="m-5">
                    <CareerForm portal_id={JobsList.portal_id} form_id={JobsList.form_id} />
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

export async function getServerSideProps({ query }) {
  const slug = query.slug

  var myHeaders = new Headers()
  myHeaders.append("Content-Type", "application/json")

  var raw = JSON.stringify({
    JobID: slug
  })

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw
  }

  const response = await fetch(
    baseUrl + "/api/careers/getJobList",
    requestOptions
  )
  const PostList = await response.json()
  return { props: { PostList } }
}

export default CareersList
CareersList.propTypes = {
  PostList: PropTypes.any
}
