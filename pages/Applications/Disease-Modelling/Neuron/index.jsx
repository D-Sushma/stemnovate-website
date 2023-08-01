import React from "react"
import BreadCrumb from "~/components/elements/BreadCrumb"
import Container from "~/components/layouts/Container"
import Image from "~/components/elements/Image"
import Link from "next/link"
import { baseUrl } from "~/repositories/Repository"
import { connect } from "react-redux"
import Subscribe from "~/components/shared/sections/Subscribe"
import { Tooltip } from "antd"

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
      text: "Disease Modelling",
      url: "/Applications/Disease-Modelling"
    },
    {
      id: 4,
      text: "Neuron"
    }
  ]

  return (
    <>
      <Container title="Neuron">
        <main className="ps-page ps-page--inner">
          <div className="ps-page__header  breadcrumb-h application-breadcrumb-bg">
            <div className="container ">
              <BreadCrumb breacrumb={breadcrumb} />
              <h1 className="text-center  text-white p-2">Neuron</h1>
            </div>
          </div>

          <div className="ps-page__content">
            <div className="ps-about">
              <div className=" about-section ">
                <div className="container">
                  <div className="center-box">
                    <p className=" vertical-center">
                      At Stemnovate, we generate different neuronal and glial
                      cell types from induced pluripotent stem cells (iPSC).
                      Somatic cells that have been reprogrammed to a pluripotent
                      state (PS) are of great interest due to their ability to
                      function like embryonic stem (ES) cells while avoiding the
                      ethical concerns arising from the use of ES cells. iPSC
                      have great potential in research and industry as they are
                      self-renewing and pluripotent, with the ability to be
                      converted (differentiated) in any cell type.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-02-section">
                <div className="py-5 text-white">
                  <div className="container">
                    <h2>Applications</h2>
                    <ul>
                      <li>
                        <p>In-vitro toxicology studies</p>
                      </li>
                      <li>
                        <p>Drug discovery</p>
                      </li>
                      <li>
                        <p>Tissue engineering and cellular therapies</p>
                      </li>
                      <li>
                        <p>
                          Disease-modifying therapies for neurodegenerative,
                          neurological and neuro-inflammatory diseases (e.g.,
                          Alzheimer’s, Parkinson’s, multiple sclerosis)
                        </p>
                      </li>
                      <li>
                        <p>Novel blood brain-barrier delivery technologies</p>
                      </li>
                      <li>
                        <p>Diagnostic</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="about-section">
                <div className="container">
                  <section className="ps-section--block-grid">
                    <div className="ps-section__thumbnail">
                      <Link href="#">
                      <div className="ps-section__image link-hover-thumb-shape">
                        <Image
                          src="/static/img/applications/Neuron/01.jpg"
                          alt="HUMAN iPSC-DERIVED SENSORY NEURONS FOR HEARING LOSS"
                          width={1200}
                          height={675}
                        />
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content">
                      <div className="ps-section__desc">
                        <h2 className="  font-weight-bold">
                          Human IPSC-Derived Sensory Neurons For Hearing Loss
                        </h2>
                        <p>
                          <Tooltip title="WHO: 1 in 4 people projected to have hearing problems by 2050">
                            <a
                              rel="noreferrer"
                              href="https://www.who.int/news/item/02-03-2021-who-1-in-4-people-projected-to-have-hearing-problems-by-2050#:~:text=Nearly%202.5%20billion%20people%20worldwide%20%E2%94%80%20or%201,and%20other%20rehabilitation%20services%20unless%20action%20is%20taken"
                              className="reference-website"
                              target={"_blank"}
                            >
                              According to WHO, by 2050, nearly 2.5 billion
                              people are projected to have some degree of
                              hearing loss, and at least 700 million will
                              require hearing rehabilitation.
                            </a>
                          </Tooltip>
                          The sensory system responsible for hearing in the
                          inner ear can be affected by ageing, genetic
                          mutations, infectious diseases, noise exposure, and
                          ototoxic drugs. Unfortunately, there are currently no
                          approved medications specifically targeting sensory
                          recovery. As a result, hearing aids or cochlear
                          implants can manage but not cure severe hearing loss.
                          Sensory neurons generated from iPSCs at Stemnovate
                          have enormous potential for gene therapies and screen
                          for compounds to regenerate sensory cells and study
                          ototoxic degeneration. Moreover, our bioinformatics
                          approach further allows deep insight into gene
                          expression and cellular pathways mapping.
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <div className="bg-02-section">
                <div className="container">
                  <section className="ps-section--block-grid">
                    <div className="ps-section__thumbnail">
                      <Link href="#">
                        <div className="ps-section__image link-hover-thumb-shape">
                        <Image
                          src="/static/img/applications/Neuron/02.jpg"
                          alt="HUMAN iPSC-DERIVED SENSORY NEURONS"
                          width={1200}
                          height={675}
                        />
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content">
                      <div className="ps-section__desc">
                       <h2 className="  font-weight-bold">
                          Human IPSC-Derived Sensory Neurons For Neuropathic
                          Pain
                        </h2>
                        <p>
                          Dorsal root ganglia (DRG) neurons are critical
                          structures in sensory transduction and pain
                          modulation, allowing the discrimination between
                          various types of sensations.{" "}
                          <Tooltip title="Pain as a global public health priority - PubMed (nih.gov)">
                            <a
                              rel="noreferrer"
                              href="https://pubmed.ncbi.nlm.nih.gov/21978149/"
                              className="reference-website"
                              target={"_blank"}
                            >
                              Chronic pain affects 20% of the worldwide
                              population.
                            </a>
                          </Tooltip>{" "}
                          It arises from multiple aetiologies, including injury
                          or dysfunction of the nervous system, tissue damage,
                          inflammation or invasion. Nevertheless, It can also
                          occur with no apparent aetiology (e.g., fibromyalgia).
                          The mechanisms underlying these various pathologies
                          are still incompletely understood. However, changes in
                          the plasticity and modality of DRG neurons seem to be
                          a hallmark of chronic pain, focusing attention on
                          these cells as targets for therapeutic interventions.
                          DRGs generated at Stemnovate can be used to support
                          preclinical drug discovery for investigating disorders
                          such as chronic pain as well.
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <div className="about-section">
                <div className="container">
                  <section className="ps-section--block-grid">
                    <div className="ps-section__thumbnail">
                      <Link href="#">
                      <div className="ps-section__image link-hover-thumb-shape">
                        <Image
                          src="/static/img/applications/Neuron/03.jpg"
                          alt="HUMAN iPSC-DERIVED MICROGLIA"
                          width={1200}
                          height={675}
                        />
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content">
                      <div className="ps-section__desc">
                        <h2 className="  font-weight-bold">
                          Human IPSC-Derived Microglia For Neurological Diseases
                        </h2>
                        <p>
                          Microglia are a specialised type of macrophage-like
                          cells in the central nervous system that participate
                          in numerous brain functions, including the control of
                          neuronal excitability, the support of neurons during
                          development and brain protection/ repair. Our
                          microglia cells derived from iPSCs contribute to the
                          study and treatment of neuropsychiatric,
                          neurodevelopmental and neurodegenerative diseases,
                          including bipolar disorder, depression, Alzheimer’s
                          disease, and Parkinson’s disease.
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

export async function getServerSideProps({ query }) {
  const slug = query.slug
  var ProductData = []
  var data = ""
  if (slug != undefined) {
    data = slug[slug.length - 1]
    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    var raw = JSON.stringify({
      slug: data
    })

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    }

    const res = await fetch(baseUrl + "/api/products/catbyname", requestOptions)
    const myProductData = await res.json()
    ;(ProductData = myProductData)
  }

  // // Pass data to the page via props
  return { props: { ProductData } }
}

// export default texicologyScreen;
export default connect((state) => state)(texicologyScreen)
