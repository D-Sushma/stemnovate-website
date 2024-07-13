import React,{useEffect, useState} from "react"
import Link from "next/link"

const AboutBanner = (sectionDetails) => {

  return (
    <div className="plus-section">
         <h1 className="text-center m-4 text-white font-weight-bolder">
        {sectionDetails?.sectionDetails[0]?.section_title}
      </h1>
      <section className="container-section d-flex justify-content-center flex-column align-items-center align-items-md-start">
        <div
        className="text-center text-md-left text-white font-weight-bolder " 
        dangerouslySetInnerHTML={{
          __html: sectionDetails?.sectionDetails[0]?.content
        }}
        >
       </div>
        <div>
          <Link href={sectionDetails?.sectionDetails[0]?.btn_url} prefetch={false}>
            <div className="button button-about-us">
             {sectionDetails?.sectionDetails[0]?.btn_text} <span className="visually-hidden">Learn More About Us</span>
            </div>
          </Link>
        </div>
      </section>
     
    </div>
  )
}
export default AboutBanner
