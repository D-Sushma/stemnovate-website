/* eslint-disable @next/next/no-img-element */
import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { HiArrowSmRight } from "react-icons/hi"
import Link from "next/link"
import dynamic from "next/dynamic"

const Image = dynamic(() => import("~/components/elements/Image"), {
  loading: () => <p>Loading...</p>
})

const EventsList = ({ resources }) => {
  return (
    <div >
      {resources &&
        resources.map((data, key) => (
          <div className="resources-list " key={key}>
            <div className="container">
              <section className="ps-section--block-grid pt-3">
                <div className="ps-section__thumbnail">
                    <div className="ps-section__image link-hover-thumb-shape image-box-container mr-4 image-box-container-mb">
                      <Image
                        src={`${process.env.AWS_S3BUCKET_URL}${data.image}`}
                        alt={data.title}
                        width={1200}
                        height={675}
                      />
                    </div>
                </div>
                <div className="ps-section__content">
                  <h2 className="font-weight-bold">{data.title}</h2>
                  <div className="ps-section__desc ">
                    <p
                      className=""
                      dangerouslySetInnerHTML={{
                        __html: data.content
                      }}
                    ></p>
                    <Link href={`/events/details/${data.slug}`}>
                      <button className="btn btn-lg button-orange text-white m-4 m-5">
                        Get More details <HiArrowSmRight size={25} />
                      </button>
                    </Link>
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
