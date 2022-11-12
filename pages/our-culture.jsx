import React from "react"
import Container from "~/components/layouts/Container"
import BreadCrumb from "~/components/elements/BreadCrumb"
import { RiHandHeartLine } from "react-icons/ri"
import Subscribe from "~/components/shared/sections/Subscribe"
import Link from "next/link"

const breadcrumb = [
  {
    id: 1,
    text: "Home",
    url: "/"
  },

  {
    id: 2,
    text: "Our Culture"
  }
]

const OurCulture = () => {
  return (
    <Container title="Culture">
      <main className="ps-page ps-page--inner">
        <div className="ps-page__header  breadcrumb-h application-breadcrumb-bg">
          <div className="container ">
            <BreadCrumb breacrumb={breadcrumb} />
            <h1 className="text-center  text-white ">Our Culture</h1>
          </div>
        </div>
        <div className="ps-page__content">
          <div className="ps-about">
            <div className=" about-section ">
              <div className="container">
                <div className="center-box">
                  <p className=" vertical-center">
                    At Stemnovate we aim to bring high-quality and needed
                    innovative products to as many people as possible,
                    preventing and treating disease and keeping people well with
                    our scientific and technical experts. At the heart of this
                    is our R&D focus on science and our skilled team.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-02-section">
              <div className="container">
                <section className="ps-section--block-grid ">
                  <div className="ps-section__thumbnail">
                    <a className="ps-section__image" href="#">
                      <img
                        src="/static/img/our-culture/our-culture-1.jpg"
                        alt="our-culture"
                      />
                    </a>
                  </div>
                  <div className="ps-section__content">
                    <div className="ps-section__desc ">
                      <p className="text-white">
                        At Stemnovate, our culture revolves around our people.
                        Our company’s core value is equality and inclusion. We
                        understand that by building a diverse and skilled team,
                        we have the best chance of achieving our mission
                      </p>
                      <Link href="/investor-relations">
                        <a className=" btn btn-lg button-orange text-white m-4">
                          Read More
                        </a>
                      </Link>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <div className="about-section">
              <div className="container">
                <section className="ps-section--block-grid ">
                  <div className="ps-section__thumbnail">
                    <a className="ps-section__image" href="#">
                      <img
                        src="/static/img/our-culture/02.png"
                        alt="our-culture-2"
                      />
                    </a>
                  </div>
                  <div className="ps-section__content">
                    <div className="ps-section__desc">
                      <p>
                        We encourage our staff always to keep learning through
                        training courses and collaborations inside and outside
                        the company. We work with some of the industry's best,
                        most fascinating people and institutions.
                      </p>
                      <Link href="/About-Us">
                        <a className=" btn btn-lg button-orange text-white m-4">
                          Read More
                        </a>
                      </Link>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <div className="bg-02-section">
              <div className="container">
                <section className="ps-section--block-grid ">
                  <div className="ps-section__thumbnail">
                    <a className="ps-section__image" href="#">
                      <img
                        src="/static/img/our-culture/04.png"
                        alt="our-culture 4"
                      />
                    </a>
                  </div>
                  <div className="ps-section__content">
                    <div className="ps-section__desc">
                      <p className="text-white">
                        In addition, we support our staff through any challenges
                        that life throws at them. We proved private healthcare,
                        mental health training, and flexible working to all
                        employees and encouraged everyone to come forward if
                        they feel they have an issue or want to chat over some
                        cake and a coffee.
                      </p>
                      <Link href="/About-Us">
                        <a className=" btn btn-lg button-orange text-white m-4">
                          Read More
                        </a>
                      </Link>
                      {/* <p className="p-3">
                                                <button type="button" className="btn btn-lg button-orange text-white m-4 m-5">
                                                    Build Your Project
                                                </button>
                                            </p> */}
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="about-section">
              <div className="container">
                <section className="ps-section--block-grid ">
                  <div className="ps-section__thumbnail">
                    <a className="ps-section__image" href="#">
                      <img
                        src="/static/img/our-culture/03.png"
                        alt="our-culture 3"
                      />
                    </a>
                  </div>
                  <div className="ps-section__content">
                    <div className="ps-section__desc">
                      <p>
                        We strive to create an environment where all staff can
                        innovate and thrive if this is something that you would
                        like to be a part of, visit our careers page.
                      </p>
                      <Link href="/careers">
                        <a className=" btn btn-lg button-orange text-white m-4">
                          Read More
                        </a>
                      </Link>
                      {/* <p className="p-3">
                                                <button type="button" className="btn btn-lg button-orange text-white m-4 m-5">
                                                    Build Your Project
                                                </button>
                                            </p> */}
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <div className="bg-02-section">
              <div className="container">
                <section className="ps-section--block-grid ">
                  <div className="ps-section__thumbnail">
                    <a className="ps-section__image" href="#">
                      <img
                        src="/static/img/women-in-stem/JACOB.png"
                        alt="Equality and Opportunity-Stemnovate"
                      />
                    </a>
                  </div>
                  <div className="ps-section__content">
                    <h3 className="text-white">Equality and Opportunity</h3>
                    <div className="ps-section__desc">
                      <p className="text-white">
                        For society to grow, we must create equality and
                        opportunity for all, and at Stemnovate, we believe that
                        the diversity of our team helps us advance science.
                      </p>
                      <p className="text-white">
                        Instead of forgetting and excusing the past, we should
                        learn about the people who were denied opportunities but
                        still managed to create impactful discoveries. One such
                        person was Rosalind Franklin, who, against all
                        adversaries, discovered one of the most significant
                        findings of the 20th century. The discovery she made was
                        of the double helix structure of DNA, which changed the
                        course of science
                      </p>
                      <Link href="/blogs/women-in-stemnovate">
                        <a className=" btn btn-lg button-orange text-white m-4">
                          Read More
                        </a>
                      </Link>
                      {/* <p className="p-3">
                                                <button type="button" className="btn btn-lg button-orange text-white m-4 m-5">
                                                    Build Your Project
                                                </button>
                                            </p> */}
                    </div>
                  </div>
                </section>
              </div>
            </div>
            {/* <div className="about-section">
                            <div className="container">
                                <ProductList slug="Drug-Discovery-Platform" />
                            </div>
                        </div> */}

            <Subscribe />
          </div>
        </div>
      </main>
    </Container>
  )
}

export default OurCulture
