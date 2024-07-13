import React from "react"
import { connect } from "react-redux"
import { baseUrl } from "~/repositories/Repository"
import PropTypes from "prop-types"
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
const EventsList = dynamic(
  () => import("~/components/elements/events/EventsList"),
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
    text: "Events"
  }
]

const Events = ({ resourcesList }) => {

  var ogImage = ""
  var images1 = []
  var products_img1 = resourcesList.data[0]?.shareimage?.split(",")
  if (products_img1 && products_img1.length > 0) {
    products_img1.map((item) => {
      images1.push(`${process.env.AWS_S3BUCKET_URL}${item}`)
    })
    ogImage = images1[0]
  }
  var bgImage = `${process.env.AWS_S3BUCKET_URL}${resourcesList.data[0]?.banner}`

  return (
    <Container
      title="Events"
      description="Stemnovate page on events, conferrences, meeting and partnering opportunities. Keep up with new events by following and sign up on our website"
      ogimg={ogImage}
    >
      <main className="ps-page ps-page--inner">
        <div className="ps-page__header  breadcrumb-h  banner-breadcrumb-bg">
          <BannerImage
            alt="events-image"
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
            <h1 className="text-center h1 text-white p-2 ">Events</h1>
          </div>
        </div>

        <div className="ps-page__content">
          <div className="ps-about">
            <EventsList resources={resourcesList && resourcesList.data} />
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

  var raw = JSON.stringify({})

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw
  }

  const response = await fetch(
    baseUrl + "/api/events/getEvents",
    requestOptions
  )
  const resourcesList = await response.json()
  return { props: { resourcesList } }
}

export default connect((state) => state)(Events)
Events.propTypes = {
  resourcesList: PropTypes.any
}
