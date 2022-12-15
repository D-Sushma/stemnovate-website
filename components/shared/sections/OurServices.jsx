import React, { useState, useRef, useEffect } from "react"
import Image from "~/components/elements/Image"
import bioImg from "~/public/static/img/landing/bio-banking.gif"
import Reprogramming from "~/public/static/img/landing/Reprogramming-and-Differentiation.jpg"
import chipTechnology from "~/public/static/img/landing/Chip-Technology.webp"
import automation from "~/public/static/img/landing/Automation-for-drug-discovery.jpg"
import Discovery from "~/public/static/img/landing/Drug-Discovery.jpg"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"

const OurService = ({ title = "OUR SERVICES" }) => {
  return (
    <section className="ps-section--standard ps-featured-products ">
      <div className="plus-section ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center">
              <div>
                <div className="row">
                  <a href="/Applications/Drug-Discovery-Platform">
                    <div className="overflow-hidden mx-4">
                      <Image
                        className="ps-banner__image"
                        src={Discovery}
                        alt="Drug Discovery Platform"
                        width="500px"
                        height="281px"
                      />
                    </div>

                    <h3 className="text-white m-4">Drug Discovery Platform</h3>
                    <p className="text-left  text-white">
                      We use novel multi-organ modelling to evaluate drug
                      molecule metabolism and toxicity, ensuring better clinical
                      trials and patient safety outcomes. Our projects include
                      Hepatitis research and many more.
                    </p>
                  </a>
                </div>
                <div className="row">
                  <div className="col-md-12 text-center">
                    <div className="button button--yellow">
                      <a href="/Applications/Drug-Discovery-Platform">
                        READ MORE <FaArrowRight />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div>
                <div className="row">
                  <a href="/Products">
                    <div className="overflow-hidden mx-4">
                      <Image
                        className="ps-banner__image"
                        src={bioImg}
                        alt="Bio Banking"
                        width={"500px"}
                        height="281px"
                      />
                    </div>
                    <h3 className="text-white m-4">Bio Banking</h3>
                    <p className="mx-4 text-left text-white">
                      Ethical sourcing is core to our biobank, reflecting human
                      diversity in age, gender & ethnicities. In addition, we
                      offer a multispecies cell platform ensuring quality
                      through advanced profiling & bioinformatics.
                    </p>
                  </a>
                </div>

                {/* <a className=" text-uppercase btn btn-lg button-orange text-white m-4" href="/Products">
                                    View Products
                                </a> */}
                <div className="row">
                  <div className="col-md-12 text-center">
                    <div className="button button--yellow">
                      <a href="/Products">
                        VIEW PRODUCTS <FaArrowRight />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center">
              <div>
                <div className="row">
                  <a href="/Services">
                    <div className="overflow-hidden mx-4">
                      <Image
                        className="ps-banner__image"
                        src={Reprogramming}
                        alt="Reprogramming and Differentiation"
                        width={"500px"}
                        height="281px"
                      />
                    </div>
                    <h3 className="text-black m-4">
                      Reprogramming and Differentiation
                    </h3>
                    <p className="mx-4 text-left text-black">
                      We are experts in cellular reprogramming and one of the
                      only companies globally with the capability for human and
                      animal reprogramming. We design vectors with an industrial
                      process to generate induced pluripotent stem cells. For
                      industry and academia, we routinely differentiate stem
                      cells into the liver, heart, and neuronal cells.
                    </p>
                  </a>
                </div>
                <div className="row">
                  <div className="col-md-12 text-center">
                    <div className="button button--yellow">
                      <a href="/Services">
                        READ MORE <FaArrowRight />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div>
                <div className="row">
                  <a href="/Products">
                    <div className="overflow-hidden mx-4">
                      <Image
                        className="ps-banner__image"
                        src={chipTechnology}
                        alt="Chip Technology"
                        width={"500px"}
                        height="281px"
                      />
                    </div>
                    <h3 className="text-black m-4">Chip Technology</h3>
                    <p className="mx-4 text-left text-black">
                      We are innovating organs-on-chip platforms to provide a
                      physiological alternative to cancer lines and animal
                      models for advanced drug discovery. From 2017 to 2019, our
                      research was co-funded by Innovate UK to develop a liver
                      on chip platform. This million-pound funding resulted in
                      patenting innovation that we aim to launch to market soon.
                    </p>
                  </a>
                </div>
                <div className="row">
                  <div className="col-md-12 text-center">
                    <div className="button button--yellow">
                      <a href="/Products">
                        VIEW PRODUCTS <FaArrowRight />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="plus-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-5">
              <div>
                <a href="/Applications/Drug-Discovery-Platform">
                  <div className="overflow-hidden">
                    <Image
                      className="ps-banner__image"
                      src={automation}
                      alt="Automation for drug discovery"
                      width={"500px"}
                      height="281px"
                    />
                  </div>
                  <h3 className="text-white m-4">
                    Automation for drug discovery
                  </h3>
                  <p className="mx-4  text-white">
                    The drug discovery data often cannot be reproduced with
                    conventional techniques. Therefore, we integrate
                    computational modelling and microengineering to enable
                    next-gen drug development. Automation for preclinical
                    research and development will save cost and time and
                    revolutionize the pharmaceutical industry.
                  </p>
                </a>
                <div className="button button--yellow">
                  <a href="/Applications/Drug-Discovery-Platform">
                    READ MORE <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurService
