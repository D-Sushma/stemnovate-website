import React, { useState } from "react"
import { useEffect } from "react"
import dynamic from "next/dynamic"
import { baseUrl } from "~/repositories/Repository"

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
const CareersGrid = dynamic(
  () => import("~/components/partials/careers/CareersGrid"),
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
    text: "Careers"
  }
]

const CareerScreen = (ProductData) => {
  const [postLists, setPostList] = useState([])
  const [internShip, setInternShip] = useState([])
  const [campaignList, setCampaignList] = useState([])

  useEffect(() => {
    getJobOpeningsList()
    getInternShipOpeningsList()
    getCampaignList()
  }, [])

  const getJobOpeningsList = async () => {
    var requestParam = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({})
    }
    const response = await fetch(`/api/careers/getJobList`, requestParam)
    const resData = await response.json()
    setPostList(resData.data)
  }

  const getInternShipOpeningsList = async () => {
    var requestParam = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({})
    }
    const response = await fetch(`/api/careers/getIntership`, requestParam)
    const resData = await response.json()
    setInternShip(resData.data)
  }
  const getCampaignList = async () => {
    var requestParam = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({})
    }
    const response = await fetch(`/api/careers/getCampaignData`, requestParam)
    const resData = await response.json()
    setCampaignList(resData.data)
  }

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

  return (
    <Container
      title="Careers"
      cronical={"/careers"}
      ogimg={ogImage}
      description={ogDesc}
    >
      <main className="ps-page ps-page--inner">
        <div
          style={{
            backgroundImage: `url(${process.env.AWS_S3BUCKET_URL}${ProductData?.ProductData?.data[0]?.banner_img})`
          }}
          className="ps-page__header breadcrumb-h application-breadcrumb-bg"
        >
          <div className="container ">
            <BreadCrumb breacrumb={breadcrumb} />
            <h1 className="text-center  text-white ">
              {ProductData?.ProductData?.data[0]?.banner_content}
            </h1>
          </div>
        </div>

        <div className="ps-page__content">
          <div className="ps-about">
            <CareersGrid
              postLists={postLists}
              internShip={internShip}
              campaignList={campaignList}
            />
            <Subscribe />
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
      page_name: "Careers"
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

  return {
    props: {
      ProductData
    }
  }
}

export default CareerScreen
