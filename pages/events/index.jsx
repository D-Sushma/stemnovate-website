import React from "react"
import Container from "~/components/layouts/Container"
import BreadCrumb from "~/components/elements/BreadCrumb"
import Subscribe from "~/components/shared/sections/Subscribe"
import { connect } from "react-redux"
import { baseUrl } from "~/repositories/Repository"
import PropTypes from "prop-types"
import EventsList from "~/components/elements/events/EventsList"

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
  return (
    <Container title="Events">
      <main className="ps-page ps-page--inner">
        <div className="ps-page__header  breadcrumb-h application-breadcrumb-bg">
          <div className="container ">
            <BreadCrumb breacrumb={breadcrumb} />
            <h1 className="text-center  text-white p-2">Events</h1>
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
  // Fetch data from external API

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
  // Pass data to the page via props
  return { props: { resourcesList } }
}

export default connect((state) => state)(Events)
Events.propTypes = {
  resourcesList: PropTypes.any
}
