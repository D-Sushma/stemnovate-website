import React from "react"
import Link from "next/link"
const AboutBanner = () => {
  return (
    <div className="plus-section">
      <h1 className="text-center m-4 text-white font-weight-bolder">
        Stemnovate Next-Gen Platforms
      </h1>
      <section className="container-section d-flex justify-content-center flex-column align-items-center align-items-md-start">
        <div className="text-center text-md-left text-white font-weight-bolder ">
          Our mission is to accelerate drug discovery from decades to years and
          from months to days. Building the future, caring for both human and
          animal lives. We are Stemnovate<sup>TM</sup> .
        </div>
       
        <div>
          <Link href="/About-Us">
            <div className="button button-about-us" aria-label="Learn More About Us">Learn More</div>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default AboutBanner
