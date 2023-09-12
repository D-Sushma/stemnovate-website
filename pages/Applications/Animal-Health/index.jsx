/* eslint-disable @next/next/no-img-element */
import React from "react"
import { connect } from "react-redux"
import Image from "~/components/elements/Image"
import Link from "next/link"
import dynamic from 'next/dynamic'

const Container = dynamic(
  () => import("~/components/layouts/Container"),
  {loading: ()=> <p>Loading...</p>}
)
const BreadCrumb = dynamic(
  () => import("~/components/elements/BreadCrumb"),
  {loading: ()=> <p>Loading...</p>}
)
const Subscribe = dynamic(
  () => import("~/components/shared/sections/Subscribe"),
  {loading: ()=> <p>Loading...</p>}
)

const texicologyScreen = () => {
  const breadcrumb = [
    {
      id: 1,
      text: "Home",
      url: "/"
    },

    {
      id: 2,
      text: "Applications",
      url: "/Applications"
    },
    {
      id: 3,
      text: "Animal Health"
    }
  ]

  return (
    <>
      <Container
        title="Animal-Health"
        description="Stemnovate page on animal drug discovery, research and development. In vitro solution reducing animal testing."
      >
        <main className="ps-page ps-page--inner">
          <div className="ps-page__header  breadcrumb-h application-breadcrumb-bg">
            <div className="container ">
              <BreadCrumb breacrumb={breadcrumb} />
              <h1 className="text-center  text-white ">
                NEW INSIGHTS PLATFORM - ANIMAL HEALTH
              </h1>
            </div>
          </div>

          <div className="ps-page__content">
            <div className="ps-about">
              <div className=" about-section ">
                <div className="container">
                  <div className="about-section">
                    <div className="container">
                      <section className="ps-section--block-grid ">
                        <div className="ps-section__thumbnail ">
                          <Link href="#">
                            <div className="ps-section__image">
                              <Image
                                className="p-4 link-hover-thumb-shape"
                                src="/static/img/applications/Neurons.jpg"
                                alt="MULTISPECIES STEM CELL DIFFERENTIATION TO NEURONS, LIVER & HEART CELLS"
                                width={1200}
                                height={675}
                              />
                            </div>
                          </Link>
                        </div>
                        <div className="ps-section__content">
                          <div className="ps-section__desc ">
                            <h2>PIONEERING ANIMAL STEM CELL TECHNOLOGY</h2>
                            <h2>
                              We are creating first in class models for dogs,
                              cats, cows, horses and pigs.
                            </h2>
                            <p className=" " style={{ fontSize: "1.17em" }}>
                              Animal research has been an essential contributor
                              to improved human health. We owe several
                              vaccinations and understanding of diseases and
                              treatments to animal sacrifices. But there is an
                              urgent need to reconsider and reduce animal
                              testing.
                            </p>
                          </div>
                        </div>
                      </section>
                    </div>
                    <div className="container">
                      <Link href="https://www.cambridgeindependent.co.uk/business/stemnovate-creates-neurons-from-skin-cells-of-dogs-cats-and-9283791/">
                        <div className="ps-section__image">
                          <Image
                            className="p-3 link-hover-thumb-shape"
                            src="/static/img/applications/news.jpg"
                            alt="REDUCE"
                            width={1302}
                            height={722}
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="ps-section__thumbnail plus-section-new">
                        <Link href="#">
                          <div className="ps-section__image">
                            <Image
                              className="p-3 link-hover-thumb-shape"
                              src="/static/img/animal-health/Reduce.jpg"
                              alt="REDUCE"
                              width={1200}
                              height={675}
                            />

                            <div style={{ width: "100%" }}>
                              <h2 className="text-white text-center link-hover-thumb-shape">
                                REDUCE
                              </h2>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="ps-section__thumbnail plus-section-new">
                        <Link href="#">
                          <div className="ps-section__image">
                            <Image
                              className="p-3 link-hover-thumb-shape"
                              src="/static/img/animal-health/Replace.jpg"
                              alt="REPLACE"
                              width={1200}
                              height={675}
                            />

                            <div style={{ width: "100%" }}>
                              <h2 className="text-white text-center link-hover-thumb-shape">
                                REPLACE
                              </h2>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="ps-section__thumbnail plus-section-new">
                        <Link href="#">
                          <div className="ps-section__image">
                            <Image
                              className="p-3 link-hover-thumb-shape"
                              src="/static/img/animal-health/Refine.jpg"
                              alt="REFINE"
                              width={1200}
                              height={675}
                            />

                            <div style={{ width: "100%" }}>
                              <h2 className="text-white text-center link-hover-thumb-shape">
                                REFINE
                              </h2>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="center-box">
                    <div className="vertical-center mt-5">
                      <p className=" " style={{ fontSize: "1.17em" }}>
                        <b>
                          IN 2020 IN GREAT BRITAIN, 2.88 MILLION PROCEDURES
                          INVOLVED LIVING ANIMALS.
                        </b>{" "}
                        But over half, 53% of experimental testing, was for
                        basic research focusing on the immune system, nervous
                        system and cancers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about-section">
                <div className="container">
                  <section className="ps-section--block-grid ">
                    <div className="ps-section__thumbnail plus-section-new">
                      <Link href="#">
                        <div className="ps-section__image">
                          <Image
                            className="p-4 link-hover-thumb-shape"
                            src="/static/img/animal-health/Multispecies-stem.jpg"
                            alt="MULTISPECIES STEM CELL DIFFERENTIATION TO NEURONS, LIVER & HEART CELLS"
                            width={1200}
                            height={675}
                          />
                          <div style={{ width: "100%" }}>
                            <h2 className="text-white text-center link-hover-thumb-shape">
                              MULTISPECIES STEM CELL DIFFERENTIATION TO NEURONS,
                              LIVER & HEART CELLS
                            </h2>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content">
                      <div className="ps-section__desc ">
                        <h2>REDUCE</h2>
                        <p className="">
                          Our team has over ten years of experience creating
                          unique stem cell models that can reduce animal
                          testing. In 2014 the first functional neurons were
                          reported from horses by Sharma et al. Now, our CEO Dr
                          Ruchi leads an industrial partnership creating
                          multi-species neuronal models. These are significant
                          as they provide an alternative to animal testing and
                          would be game-changing for pain management and finding
                          new anaesthetics for veterinary applications. However,
                          the method used for reprogramming stem cells from
                          animal species needs optimisation for cellular
                          therapies, differentiation, and veterinary
                          applications.
                          <br />
                          <a
                            target={"_blank"}
                            href="https://www.sciencedaily.com/releases/2014/03/140304125833.htm"
                            className="font-weight-bold"
                            rel="noreferrer"
                          >
                            Read More
                          </a>
                        </p>
                        <p className="mt-2">
                          The industrial applications include novel modelling of
                          the brain, liver, and heart for multi-species
                          modelling, replacing in vivo animal testing
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <div className="about-section">
                <div className="container">
                  <section className="ps-section--block-grid ">
                    <div className="ps-section__content">
                      <div className="ps-section__desc ">
                        <h2>REFINE</h2>
                        <p className="">
                          Stem cells hold great potential for cellular
                          therapies, drug discovery and disease modelling.
                          However, It requires a laboratory assay that consists
                          of injecting cells under mice&apos;s skin, allowing
                          cells to differentiate spontaneously and is a
                          determinant of stemness and capability to form
                          multiple cell types. We have integrated stem cell
                          research with tissue engineering, advanced imaging,
                          and molecular analysis, allowing similar data to be
                          generated in the laboratory without animal
                          experiments. This technology further allows fast
                          turnaround, saving costs and unnecessary
                          experimentation.
                        </p>
                      </div>
                    </div>
                    <div className="ps-section__thumbnail plus-section-new">
                      <Link href="#">
                        <div className="ps-section__image">
                          <Image
                            className="p-4 link-hover-thumb-shape"
                            src="/static/img/animal-health/Refine-section.jpg"
                            alt="BIOINFORMATICS AND ANALYSIS OF PLURIPOTENCY-ASSOCIATED BIOMARKERS"
                            width={1200}
                            height={675}
                          />

                          <div style={{ width: "100%" }}>
                            <h2 className="text-white text-center link-hover-thumb-shape">
                              BIOINFORMATICS AND ANALYSIS OF
                              PLURIPOTENCY-ASSOCIATED BIOMARKERS
                            </h2>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </section>
                </div>
              </div>
              <div className="about-section">
                <div className="container">
                  <section className="ps-section--block-grid ">
                    <div className="ps-section__thumbnail plus-section-new">
                      <Link href="#">
                        <div className="ps-section__image">
                          <Image
                            className="p-4 link-hover-thumb-shape"
                            src="/static/img/animal-health/Functionality-assessment-through.jpg"
                            alt="FUNCTIONALITY ASSESSMENT THROUGH MICROELECTRODE ARRAY OR CHIP STUDY"
                            width={1200}
                            height={675}
                          />

                          <div style={{ width: "100%" }}>
                            <h2 className="text-white text-center link-hover-thumb-shape">
                              FUNCTIONALITY ASSESSMENT THROUGH MICROELECTRODE
                              ARRAY OR CHIP STUDY
                            </h2>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content">
                      <div className="ps-section__desc ">
                        <h2>REPLACE</h2>
                        <p className="">
                          Animal models often fail to predict human responses
                          due to interspecies differences. However, as there is
                          little alternative, animal testing continues.{" "}
                        </p>
                        <p className="mt-2">
                          We are creating new laboratory models to study complex
                          diseases for which it is difficult to obtain human
                          cells, for instance, new treatment development for
                          hearing loss. Neurodegeneration is a common cause of
                          hearing loss. Nevertheless, there are no treatments
                          available. That is why research should focus on novel
                          therapies. Traditionally, foetal mice are sacrificed
                          to obtain the necessary sensory neurons to investigate
                          the disease mechanism.
                        </p>
                        <p className="mt-2">
                          We are actively working on creating sensory neurons to
                          model hearing loss and encourage research. We
                          initially partnered with Prof Bence at the University
                          of Cambridge to develop a proof of principle, followed
                          by a multinational partnership to explore new methods
                          to create sensory neurons. This first of its kind
                          project can benefit not only patients but could also
                          replace foetal mice usage for research.
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>

              <Subscribe />
            </div>
          </div>
        </main>
      </Container>
    </>
  )
}

// export default texicologyScreen;
export default connect((state) => state)(texicologyScreen)
