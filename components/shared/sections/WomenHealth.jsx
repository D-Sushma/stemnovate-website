/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react"
import Image from "~/components/elements/Image"
import FemaleHealth from "~/public/static/img/Home/focus-female-health-01-new.jpg"

export default function WomenHealth() {
  return (
    <div>
      {" "}
      <div className="womenHealth">
        <a className="ps-section__image" href="#">
          <div className="women-expander" >
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
          {/* <Image
            src={FemaleHealth}
            alt="focus-female-health"
            // style={{ display:"none"}}
            layout="responsive"
            width={1000}
            height={500}
          /> */}
          <img
            src="/static/img/Home/focus-female-health-01-new.jpg"
            // src="/static/img/Home/focus-female-health-01-new.webp"
            width={"100%"}
            alt="focus-female-health"
          />
        </a>
      </div>
    </div>
  )
}
