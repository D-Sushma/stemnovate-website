import React from "react"
import Rating from "~/components/elements/Rating"

const TestimonialItem = ({ source }) => {
  return (
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
  )
}

export default TestimonialItem
