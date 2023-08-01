import React from "react"
import Link from "next/link"
const AboutBanner = () => {
  return (
    <div className="plus-section">
      <section className="container-section d-flex justify-content-center flex-column align-items-center align-items-md-start">
        <div className="text-center text-md-left text-white font-weight-bolder ">
          Our mission is to accelerate drug discovery from decades to years and
          from months to days. Building the future, caring for both human and
          animal lives. We are Stemnovate<sup>TM</sup> .
        </div>
        {/* background: linear-gradient(315deg, #EF5F33 0%, #F49239 100%); */}
    
        <div>
          <Link href="/About-Us">
            <div className="button button-about-us">
              About Us
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default AboutBanner
