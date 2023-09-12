/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useEffect, useState } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { baseUrl } from "~/repositories/Repository"
import moment from "moment"
import { HiArrowSmRight } from "react-icons/hi"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"
import { Divider } from "antd"
import dynamic from 'next/dynamic'
// import Container from "~/components/layouts/Container"
// import UpcomingEvents from "~/components/elements/events/UpcomingEvents"
// import BreadCrumb from "~/components/elements/BreadCrumb"
// import Subscribe from "~/components/shared/sections/Subscribe"
// import ProductList from "~/components/eventDetailList/productList"

const Container = dynamic(
  () => import("~/components/layouts/Container"),
  {loading: ()=> <p>Loading...</p>}
)
const BreadCrumb = dynamic(
  () => import("~/components/elements/BreadCrumb"),
  {loading: ()=> <p>Loading...</p>}
)
const UpcomingEvents = dynamic(
  () => import("~/components/elements/events/UpcomingEvents"),
  {loading: ()=> <p>Loading...</p>}
)
const Subscribe = dynamic(
    () => import("~/components/shared/sections/Subscribe"),
    {loading: ()=> <p>Loading...</p>}
  )

const ProductList = dynamic(
    () => import("~/components/eventDetailList/productList"),
    {loading: ()=> <p>Loading...</p>}
  )

const EventsDetails = ({ EventsData }) => {
  console.log("EventsData", EventsData)
  var sponsor = JSON.parse(EventsData.data[0].Sponsor)
  var galleryPhotos =
    EventsData.data[0].gallery && EventsData.data[0].gallery.split(",")

  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)
  const [galleryIMG, setGalleryIMG] = useState([])

  const openLightbox = useCallback((event, { galleryIMG, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  const breadcrumb = [
    {
      id: 1,
      text: "Home",
      url: "/"
    },

    {
      id: 2,
      text: "Events",
      url: "/events"
    }
  ]
  useEffect(() => {
    if (EventsData) {
      breadcrumb.push({ id: 3, text: EventsData.data[0].title })
    }
    if (galleryPhotos && galleryPhotos.length > 0) {
      var constMyImg = []
      galleryPhotos.forEach((element) => {
        constMyImg.push({
          src: `${process.env.AWS_S3BUCKET_URL}${element}`,
          sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,33.3vw"],
          width: 1,
          height: 1
        })
      })
      setGalleryIMG(constMyImg)
    }
    return () => {
      setGalleryIMG([])
    }
  }, [EventsData])

  return (
    <Container
      title={EventsData.data[0].title}
      cronical={"/events"}
      ogimg={`${process.env.AWS_S3BUCKET_URL}${EventsData.data[0].image}`}
    >
      <main className="ps-page ps-page--inner">
        <div className="">
          {EventsData &&
            EventsData.data.map((data, key) => (
              <div key={key}>
                {/* <div
                  className="ps-page__header  breadcrumb-h2 breadcrumb-bg"
                  style={{
                    backgroundImage: `url(${process.env.AWS_S3BUCKET_URL}${data?.banner})`,
                    backgroundSize: "cover"
                  }}
                >
                  <div className="container ">
                    <BreadCrumb breacrumb={breadcrumb} />
                    <h1 className="text-center h1  text-white p-2">
                      <strong>{data.title}</strong>
                    </h1>
                  </div>
                </div> */}
                <div className="position-relative text-center">
                  <img
                    src={`${process.env.AWS_S3BUCKET_URL}${data?.banner}`}
                    alt="IMG"
                    style={{ width: "100%", height: "10em" }}
                  />
                  <div className="container">
                    <div className="top-left-event-details">
                      <BreadCrumb breacrumb={breadcrumb} />
                    </div>

                    <div className="centered">
                      <h1 className="text-center h1  text-white p-2">
                        <strong>{data.title}</strong>
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="about-section " key={key}>
                  <div className="container">
                    <div className="row my-5">
                      <div className="col-md-6">
                        <div className="ps-section__content">
                          <div className="d-flex justify-content-center flex-col">
                            <div style={{ width: "100%" }}>
                              <h1 className="font-weight-bold ">
                                {data.title}
                              </h1>
                              <div className="ps-section__desc ">
                                <p
                                  className=""
                                  dangerouslySetInnerHTML={{
                                    __html: data.content
                                  }}
                                ></p>
                                {data.meetup_link &&
                                moment().unix() < moment(data.date).unix() ? (
                                  <a
                                    href={`${data.meetup_link}`}
                                    target={"_blank"}
                                    rel="noreferrer"
                                    className="btn btn-lg button-meetup text-white rounded m-4 m-5"
                                  >
                                    Register here <HiArrowSmRight size={25} />
                                  </a>
                                ) : null}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="ps-section__content text-center">
                          {/* <h2 className="font-weight-bold">{data.title}</h2> */}
                          <div className="d-flex justify-content-center ">
                            {moment().unix() < moment(data.date).unix() ? (
                              <div className="card" style={{ width: "100%" }}>
                                <h3 className="py-1">We have a date on</h3>
                                <div className="d-flex justify-content-start flex-row my-2">
                                  <div className="card-body">
                                    <h4 className="text-orange">
                                      {moment(data.date).format(
                                        "dddd, DD-MM-YYYY"
                                      )}{" "}
                                      {moment(data.date).format("MMMM")}@{" "}
                                      {data.timing}
                                    </h4>
                                  </div>
                                </div>
                                <h3>{data.location}</h3>

                                {sponsor.length > 0 ? (
                                  <div className="d-flex justify-content-center flex-row my-4">
                                    {sponsor.length > 0 ? (
                                      <div>
                                        <Divider />
                                        <h4 className="m-3">Organizers</h4>
                                        <div className="d-inline-flex ">
                                          {sponsor.map((data, keys) => (
                                            <div key={keys} className="m-2">
                                              <a
                                                href={data.url}
                                                target={"_blank"}
                                                rel="noreferrer"
                                                title={data.name}
                                              >
                                                <img
                                                  src={data.file}
                                                  alt={data.name}
                                                  width="300px"
                                                />
                                              </a>
                                              {/* <p className=" mr-3">{data.name}</p> */}
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    ) : null}
                                  </div>
                                ) : null}
                              </div>
                            ) : (
                              <div className="card" style={{ width: "100%" }}>
                                <p className="py-1">Event details</p>
                                <p>
                                  <strong>
                                    {moment(data.date).format(
                                      "dddd, DD-MM-YYYY"
                                    )}{" "}
                                    {moment(data.date).format("MMMM")}@{" "}
                                    {data.timing}
                                  </strong>
                                </p>

                                <p className="py-1">
                                  <strong>{data.location}</strong>
                                </p>

                                {sponsor.length > 0 ? (
                                  <div className="mt-4">
                                    <Divider />
                                    <h3>Organizers</h3>
                                    <div className="d-inline-flex ">
                                      {sponsor.map((data, keys) => (
                                        <div key={keys} className="m-2">
                                          <a
                                            href={data.url}
                                            target={"_blank"}
                                            rel="noreferrer"
                                            title={data.name}
                                          >
                                            <img
                                              src={data.file}
                                              alt={data.name}
                                              width="300px"
                                            />
                                          </a>
                                          {/* <p className=" mr-3">{data.name}</p> */}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                ) : null}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {galleryIMG.length > 0 ? (
                        <div className="col-md-12 mt-5">
                          <h2 className="py-3">Gallery</h2>
                          <Gallery
                            photos={galleryIMG}
                            originalClass="image-gallery"
                            onClick={openLightbox}
                          />
                          <ModalGateway>
                            {viewerIsOpen ? (
                              <Modal onClose={closeLightbox}>
                                <Carousel
                                  currentIndex={currentImage}
                                  views={galleryIMG.map((x) => ({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.title
                                  }))}
                                />
                              </Modal>
                            ) : null}
                          </ModalGateway>
                        </div>
                      ) : null}
                    </div>
                    <div className="row my-5">
                      <div className="col-md-12">
                        <div className="ps-section__content">
                          <div className="d-flex justify-content-center flex-col">
                              <div style={{ width: "100%" }}>
                                <div className="ps-section__desc ">
                                  <p
                                    className=""
                                    dangerouslySetInnerHTML={{
                                      __html: data.longcontent
                                    }}
                                  ></p>
                                </div>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          <div className="container">
            <UpcomingEvents currentEvent={EventsData.data[0]?.id} />
          </div>
          <div className="about-section">
            <div className="container">
               <ProductList slug="Applications" />
              {/* { EventsData.data[0]?.id !== 7 ?
              ( <ProductList slug="Applications" /> ) : null

              } */}
            </div>
          </div>
          <Subscribe />
        </div>
      </main>
    </Container>
  )
}
export async function getServerSideProps({ query }) {
  var slug = query.slug
  var EventsData = []
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

    const res = await fetch(baseUrl + "/api/events/getEvents", requestOptions)
    EventsData = await res.json()
    console.log("Events : ",EventsData)
  }

  // // Pass data to the page via props
  return { props: { EventsData } }
}
export default connect((state) => state)(EventsDetails)
EventsDetails.propTypes = {
  EventsData: PropTypes.array
}
