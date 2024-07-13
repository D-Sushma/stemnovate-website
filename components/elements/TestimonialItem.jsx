import React from "react"

const TestimonialItem = ({ source }) => {
  return (
    <>
      <h3 className="ps-section__title text-uppercase">
        <span className="font-weight-bolder px-4 py-2 heading-testimonials">
         {source?.section_title}
        </span>
      </h3>

      <div className="ps-review p-0 d-flex justify-content-center align-item-center">
        <div className="container-testimonials">
          <div className="ps-review__name mb-1 py-1 pl-3 pr-3 name-testimonials">
            {source.btn_text}
          </div>
          <div className="ps-review__text mt-5 text-testimonials">
            <blockquote 
             dangerouslySetInnerHTML={{
              __html: source?.content
            }}
            >
            </blockquote>
          </div>
        </div>
      </div>
    </>
  )
}

export default TestimonialItem
