/* eslint-disable @next/next/no-img-element */
import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { HiArrowSmRight } from "react-icons/hi"

const EventsList = ({ resources }) => {
  return (
    <div className="">
      {resources &&
        resources.map((data, key) => (
          <div className="resources-list " key={key}>
            <div className="container">
              <section className="ps-section--block-grid ">
                <div className="ps-section__thumbnail">
                  <a className="ps-section__image" href="#">
                    <img
                      src={`${process.env.AWS_S3BUCKET_URL}${data.image}`}
                      alt={data.title}
                    />
                  </a>
                </div>
                <div className="ps-section__content">
                  <h2 className="font-weight-bold">{data.title}</h2>
                  <div className="ps-section__desc ">
                    <p
                      className=""
                      dangerouslySetInnerHTML={{
                        __html: data.campaign_description
                      }}
                    ></p>
                    <a
                      href={`/campaign/${data.slug}`}
                      className="btn btn-lg button-orange text-white m-4 m-5"
                    >
                      Get More details <HiArrowSmRight size={25} />
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        ))}
    </div>
  )
}

export default connect((state) => state)(EventsList)
EventsList.propTypes = {
  resources: PropTypes.array
}
