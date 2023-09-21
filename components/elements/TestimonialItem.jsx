import React from "react"
// import Rating from "~/components/elements/Rating"
import dynamic from "next/dynamic"

const Rating = dynamic(() => import("~/components/elements/Rating"), {
  loading: () => <p>Loading...</p>
})

const TestimonialItem = ({ source }) => {
  return (
    <>
      <h3 className="ps-section__title text-uppercase">
        <span className="font-weight-bolder px-4 py-2 heading-testimonials">
          Latest reviews
        </span>
      </h3>

      <div className="ps-review p-0 d-flex justify-content-center align-item-center">
        <div className="container-testimonials">
          <div className="ps-review__name mb-1 py-1 pl-3 pr-3 name-testimonials">
            {source.name}
          </div>
          <div className="ps-review__text mt-5 text-testimonials">
            <blockquote>
              <i>{source.text}</i>
            </blockquote>
          </div>
          <div className="ps-review__review">
            <Rating />
          </div>
        </div>
      </div>
    </>
  )
}

export default TestimonialItem
