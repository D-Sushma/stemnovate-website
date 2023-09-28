/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react"
import Link from "next/link"
import dynamic from "next/dynamic"
import FemaleHealth from "~/public/static/img/Home/focus-female-health-01-new.jpg"
const Image = dynamic(() => import("~/components/elements/Image"), {
  loading: () => <p>Loading...</p>
})

export default function WomenHealth() {
  return (
    <div>
      {" "}
      <div className="womenHealth">
        <div className="ps-section__image link-hover-thumb-shape">
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
            <Link href="/Products?gender=Female">
              <button className=" text-uppercase btn btn-lg bg-white text-orange m-4">
                Find Out More
              </button>
            </Link>
          </div>
          <Image
            src={FemaleHealth}
            alt="focus-female-health"
            layout="responsive"
            width={1000}
            height={658}
          />
        </div>
      </div>
    </div>
  )
}
