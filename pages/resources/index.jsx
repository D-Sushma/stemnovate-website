import React from "react"

import { connect } from "react-redux"
import PropTypes from "prop-types"
import { FaArrowRight } from "react-icons/fa"
import Link from "next/link"
import Image from "~/components/elements/Image"
import { baseUrl } from "~/repositories/Repository"
// import Subscribe from "~/components/shared/sections/Subscribe"
import BreadCrumb from "~/components/elements/BreadCrumb"
import Container from "~/components/layouts/Container"
import dynamic from 'next/dynamic'

const Subscribe = dynamic(
    () => import("~/components/shared/sections/Subscribe"),
    {loading: ()=> <p>Loading...</p>}
  )

const breadcrumb = [
  {
    id: 1,
    text: "Home",
    url: "/"
  },

  {
    id: 2,
    text: "Resources"
  }
]

function Resources({ resourcesList }) {
  return (
    <Container
      title="Resources"
      description="Stemnovate page on resources for scientists, PhD students. Follow up for trainings, webinars and create progrressive scientific community"
    >
      <main className="ps-page ps-page--inner">
        <div className="ps-page__header  breadcrumb-h application-breadcrumb-bg">
          <div className="container ">
            <BreadCrumb breacrumb={breadcrumb} />
            <h1 className="text-center  text-white p-2">Resources</h1>
          </div>
        </div>
        <div className="ps-page__content">
          <div className="ps-about">
            <div className="category-section">
              <div className="container">
                <div className="about-section py-0">
                  <div className="row mt-5" data-columns="4">
                    <div className="col-md-6  mb-3 p-2 d-flex flex-column flex-grow-1">
                      <div className="card rounded-lg align-items-center p-0 ">
                        <Image
                          src="https://stemnovateimages.s3.us-east-2.amazonaws.com/learn1662019838689.jpg"
                          className="rounded-lg"
                          alt=""
                          width={1000}
                          height={563}
                        />
                        <div className="card-body  rounded-lg p-0 overlay-content">
                          <div className="p-5">
                            <h2 className="h1 text-white">
                              <b className="gradient-heading">
                                Subscription Access
                              </b>
                            </h2>
                            <p className="text-white">
                              Stemnovate core value is to advance science for
                              the benefit of humanity. The subscription to our
                              platform creates a unique partnership between the
                              customers and us, where they benefit from services
                              tailored to their needs. Here you have access to
                              karyotyping, genotyping and R&D platforms.
                            </p>
                            <Link href="/resources/private-resources">
                              <div className="link-btn">
                                <b>
                                  Get Resources <FaArrowRight />
                                </b>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6  mb-3 p-2 d-flex flex-column flex-grow-1">
                      <div className="card rounded-lg align-items-center p-0 ">
                        <Image
                          src="https://stemnovateimages.s3.us-east-2.amazonaws.com/test-public1662015244812.jpg"
                          className="rounded-lg"
                          alt=""
                          width={1000}
                          height={563}
                        />
                        <div className="card-body  rounded-lg p-0 overlay-content">
                          <div className="p-5">
                            <h2 className="h1 text-white">
                              <b>Open Access</b>
                            </h2>
                            <p className="text-white">
                              Stemnovate has dedicated open-access educational
                              resources to improve the quality and costs of
                              information and knowledge over the internet,
                              providing content and learning material related to
                              stem cells and advanced sciences such as cellular
                              reprogramming, bioengineering and computational
                              modelling.
                            </p>
                            <Link href="/resources/public-resources">
                              <div className="link-btn">
                                <b>
                                  Get Resources <FaArrowRight />
                                </b>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-section pt-0">
                  <div className="row mt-5">
                    {resourcesList.data.map((myCat, index) => (
                      <div
                        className="col-md-4 col-sm-6 my-2 col-6 d-flex flex-column flex-grow-1 p-2"
                        key={index}
                      >
                        <div className="card align-items-center p-0 d-flex flex-column flex-grow-1  rounded-lg">
                          <Image
                            src={`${process.env.AWS_S3BUCKET_URL}${myCat.category_image}`}
                            className="rounded-lg"
                            alt={myCat.cat_name}
                            width={1000}
                            height={563}
                            placeholder="blur"
                            blurDataURL="/static/image/blurred.png"
                          />
                          <div className="card-body d-flex flex-column flex-grow-1 p-2 container-fluid ">
                            <div className="p-3">
                              <h3 className="h3 text-dark">
                                <b>{myCat.cat_name}</b>
                              </h3>
                              {myCat.cat_access ? (
                                <span className="badge badge-pill badge-primary">
                                  Subscription Access
                                </span>
                              ) : (
                                <span className="badge badge-pill badge-success">
                                  Open Access
                                </span>
                              )}
                              <p>
                                {myCat.short_description &&
                                  myCat.short_description.substring(0, 90)}
                              </p>
                              <Link href={`/resources/r/${myCat.slug}`}>
                                <div className="link-btn-b">
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

              <Subscribe />
            </div>
          </div>
        </div>
      </main>
    </Container>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API

  const myHeaders = new Headers()
  myHeaders.append("Content-Type", "application/json")

  const raw = JSON.stringify({})

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw
  }

  const response = await fetch(
    `${baseUrl}/api/resources/getResources`,
    requestOptions
  )
  const resourcesList = await response.json()
  // Pass data to the page via props
  return { props: { resourcesList } }
}

export default connect((state) => state)(Resources)
Resources.propTypes = {
  resourcesList: PropTypes.any
}
