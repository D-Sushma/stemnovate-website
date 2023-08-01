import Image from "~/components/elements/Image"
import React from "react"
import Link from "next/link"
import Partnership from "~/public/static/home-images/Partnerships.jpg"
import TaleOfTwinCities from "~/public/static/home-images/Featured-Blog.jpg"
const CaseStudy = () => {
  return (
    <section className="about-section">
      <div className="container container-services">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <Link href="/Services">
                <div>
                  <h2 className="heading-services text-left m-4 font-weight-bolder">
                    Partnerships
                  </h2>
                  <p className=" mx-4 text-left font-weight-bolder">
                    Our global partnerships include top-tier pharmaceutical
                    companies and world-renowned academia. We often partner with
                    institutes for industrial PhD studentships, such as the
                  </p>
                  <div className="mx-4 d-flex flex-column mt-2 flex-md-row-reverse">
                    <div className="overflow-hidden link-hover-thumb-shape">
                      <Image
                        // className="ps-banner__image"
                        className="zoom-in"
                        src={Partnership}
                        alt="Partnership"
                        width={386}
                        height={218}
                      />
                    </div>
                    <p className="text-left font-weight-bolder content-services">
                      National Physical Laboratory, the University of Edinburgh,
                      the University of Northumbria, and the Babraham Institute,
                      to name a few.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="row">
              <div className="mx-4 button button-services">
                <Link href="/Services">Our Projects</Link>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row">
              <Link href="/Services">
                <div>
                  <h2 className="heading-services text-left m-4 font-weight-bolder">
                    Featured Blog
                  </h2>
                  <p className=" mx-4 text-left font-weight-bolder">
                    TALE OF TWIN CITIES: CAMBRIDGE FOR STEM CELL RESEARCH
                  </p>
                  <p className="mx-4 text-left font-weight-bolder">
                    Cambridge has an excellent ecosystem for biotech,
                    espaicially working in the stem cell research space to
                    thrive.
                  </p>
                  <div className="mx-4 d-flex flex-column mt-2 flex-md-row-reverse">
                    <div className="overflow-hidden  link-hover-thumb-shape">
                      <Image
                        // className="ps-banner__image"
                        className="zoom-in"
                        src={TaleOfTwinCities}
                        alt="Tale of twin cities"
                        width={386}
                        height={218}
                      />
                    </div>
                    <p className=" text-left font-weight-bolder content-services">
                      Please read our latest blog and be part of community.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="row">
              <div className="mx-4 button button-services">
                <Link href="/Services">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudy
