import React from "react"
import Link from "next/link"
import Partnership from "~/public/static/home-images/Partnerships.jpg"
import TaleOfTwinCities from "~/public/static/home-images/Featured-Blog.svg"
import dynamic from "next/dynamic"

const Image = dynamic(() => import("~/components/elements/Image"), {
  loading: () => <p>Loading...</p>
})
const CaseStudy = () => {
  return (
    <div className="about-section container">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <Link href="/Services" prefetch={false}>
                <div>
                  <h2 className="heading-services m-4">
                    Partnerships
                  </h2>
                  <p className=" mx-4 font-weight-bolder">
                    Our global partnerships include top-tier pharmaceutical
                    companies and world-renowned academia. We often partner with
                    institutes for industrial PhD studentships.
                  </p>
                  <div className="mx-4 d-flex flex-column mt-5 flex-md-row-reverse">
                    <div className="overflow-hidden link-hover-thumb-shape image-box-containerP">
                      <Image
                        // className="ps-banner__image"
                        className="zoom-in"
                        width={386}
                        height={218}
                        src={Partnership}
                        alt="Partnership"
                      />
                    </div>
                    <p className="font-weight-bolder content-servicesP">
                    Our partnerships include National Physical Laboratory, the University of Edinburgh,
                      the University of Northumbria, and the Babraham Institute,
                      to name a few.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
              <div className="row mx-2 button button-services">
                <Link href="/About-Us" prefetch={false}>
                  <div>
                    Learn More{" "}
                    <span className="visually-hidden">Learn More About Us</span>
                  </div>
                </Link>
              </div>
          </div>

          <div className="col-md-6">
            <div className="row">
              <Link href="/Services" prefetch={false}>
                <div>
                  <h2 className="heading-services m-4">
                    Featured Blog
                  </h2>
                  <p className=" mx-4 font-weight-bolder">
                    ONE MEDICINE PLATFORM FOR HUMANS AND ANIMALS GETS AN EDGE: Stemnovate's revolutionary 'One Medicine' platform now offers a significant advantage for both humans and animals.
                  </p>
                  <div className="mx-4 d-flex flex-column mt-5 flex-md-row-reverse">
                    <div className="overflow-hidden  link-hover-thumb-shape image-box-container">
                      <Image
                        // className="ps-banner__image"
                        className="zoom-in"
                        width={386}
                        height={218}
                        src={TaleOfTwinCities}
                        alt="Tale of twin cities"
                      />
                    </div>
                    <p className="font-weight-bolder content-services">
                      Don't miss the opportunity to experience this cutting-edge technology. Please read our latest blog and be part of community.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
              <div className="row mx-2 button button-services">
                <Link href="/blog-news" prefetch={false}>
                  <div>
                    Read More
                    <span className="visually-hidden">
                      Read More About Blog News
                    </span>
                  </div>
                </Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CaseStudy
