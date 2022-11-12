/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react"

export default function WomenHealth() {
  return (
    <div>
      {" "}
      <div className="womenHealth">
        <a className="ps-section__image" href="#">
          <div className="women-expander">
            <p className=" display-4 font-weight-bolder text-white">
              FOCUS - FEMALE HEALTH
            </p>
            <p className="text-white">
              <i className="decs-stemwomen">
                Stemnovate Drug Discovery Platform addresses the lack of gender
                diversity in research.
              </i>{" "}
            </p>
            <a
              className=" text-uppercase btn btn-lg bg-white text-orange m-4"
              href="/Products?gender=Female"
            >
              Find Out More
            </a>
          </div>

          <img
            src="/static/img/Home/focus-female-health-01-new.webp"
            width={"100%"}
            alt="focus-female-health"
          />
        </a>
      </div>
    </div>
  )
}
