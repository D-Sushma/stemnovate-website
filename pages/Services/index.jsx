import React, { useState } from "react"
import Container from "~/components/layouts/Container"
import BreadCrumb from "~/components/elements/BreadCrumb"
import { Modal } from "antd"
// import Subscribe from "~/components/shared/sections/Subscribe"
// import ProductList from "~/components/productList/productList"
import Link from "next/link"
import Image from "~/components/elements/Image"
import dynamic from 'next/dynamic'

const ProductList = dynamic(
    () => import("~/components/productList/productList"),
    {loading: ()=> <p>Loading...</p>}
  )
const Subscribe = dynamic(
    () => import("~/components/shared/sections/Subscribe"),
    {loading: ()=> <p>Loading...</p>}
  )

const breadcrumb = [
  {
    id: 1,
    text: "Home",
    url: "/"
  },

  {
    id: 2,
    text: "Services"
  }
]

const ServicesScreen = () => {
  const [visible, setvisible] = useState(false)
  const [visible1, setvisible1] = useState(false)
  return (
    <Container
      title="Services"
      description={`Stemnovate provides cellular reprogramming and differentiation methods that can be adapted for diverse applications`}
    >
      <main className="ps-page ps-page--inner">
        <div className="ps-page__header pb-0 breadcrumb-h service-breadcrumb-bg">
          <div className="container ">
            <BreadCrumb breacrumb={breadcrumb} />
            <h1>Services</h1>
          </div>
        </div>
        <div className="ps-page__content my-5">
          <div className="ps-about">
            <div className=" about-section ">
              <div className="container">
                <div className="center-box">
                  <p className="vertical-center">
                    Stemnovate provides cellular reprogramming and
                    differentiation methods that can be adapted for diverse
                    applications such as in vitro toxicology, disease modelling,
                    cellular assays, drug discovery (PKPD, mechanistic studies)
                    and vaccination development.
                  </p>
                </div>
              </div>
            </div>
            <div className=" bg-02-section">
              <div className="container">
                <section className="ps-section--block-grid ">
                  <div className="ps-section__thumbnail">
                    <Link href="#">
                      <div className="ps-section__image link-hover-thumb-shape">
                        <Image
                          src="/static/img/services/main/CELL-REPROGRAMMING-IPSCS.jpg"
                          alt="CELL REPROGRAMMING-IPSCS"
                          width={1200}
                          height={675}
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="ps-section__content">
                    <div className="ps-section__desc ">
                      <h2 className="p-1 text-white font-weight-bold">
                        CELL REPROGRAMMING-IPSCS
                      </h2>
                      <p className="text-white">
                        We can generate induced pluripotent stem cells from a
                        small pinch of adult skin. This unique technology has
                        the potential for testing drugs and developing
                        treatments for currently incurable diseases affecting
                        the liver, heart and brain, and even diabetes...{" "}
                        <Link href="/Services/Cell-Reprogramming">
                          <span className="text-white font-weight-bold span-with-link">
                            {" "}
                            Read More
                          </span>
                        </Link>
                      </p>
                      <p className="p-3">
                        <Link href="/contact-us">
                          <button className="btn btn-lg button-orange text-white m-4 m-5">
                            Request A Quote
                          </button>
                        </Link>
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className=" about-section ">
              <div className="container">
                <section className="ps-section--block-grid ">
                  <div className="ps-section__thumbnail">
                    <Link href="#">
                      <div className="ps-section__image link-hover-thumb-shape">
                        <Image
                          src="/static/img/services/main/Cell-DIFFERENTIATION.jpg"
                          alt="CELL DIFFERENTIATION"
                          width={1200}
                          height={675}
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="ps-section__content">
                    <div className="ps-section__desc">
                      <h2 className="p-1 blue-text base-text-secondary font-weight-bold">
                        CELL DIFFERENTIATION
                      </h2>
                      <p>
                        It is challenging to obtain liver, heart, or brain cells
                        for testing drugs or for research. Hence, the animal
                        testing requirement remains.
                        <br />
                        Instead, we use skin cells through cellular
                        reprogramming to form liver, heart and brain cells.
                        Interestingly, the differentiation process in our
                        laboratory reveals some of the development ...{" "}
                        <Link href="/Services/Cell-Differentiation">
                          <span className=" font-weight-bold span-with-link">
                            {" "}
                            Read More
                          </span>
                        </Link>
                      </p>
                      <p className="">
                        <Link href="/contact-us">
                          <button className="btn btn-lg button-orange text-white m-4 m-5">
                            Request A Quote
                          </button>
                        </Link>
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <div className="bg-02-section">
              <div className="container">
                <section className="ps-section--block-grid ">
                  <div className="ps-section__thumbnail">
                    <Link href="#">
                      <div className="ps-section__image link-hover-thumb-shape">
                        <Image
                          src="/static/img/services/main/Molecular-Biology-And-Bioinformatics.jpg"
                          alt="MOLECULAR BIOLOGY AND BIOINFORMATICS"
                          width={1200}
                          height={675}
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="ps-section__content">
                    <div className="ps-section__desc">
                      <h2 className="p-1 text-white font-weight-bold">
                        MOLECULAR BIOLOGY AND BIOINFORMATICS
                      </h2>
                      <p className="text-white">
                        The advancements in sequencing helped progress our
                        understanding of the genetic basis of our physiological
                        variability. However, the challenges remain in
                        translating this vast biological information for
                        clinical applications. We use bioinformatics and
                        molecular technology for disease modelling for early
                        diagnosis and to help develop better treatments...
                        <Link href="/Services/Molecular-Analysis">
                          <span className="text-white font-weight-bold span-with-link">
                            {" "}
                            Read More
                          </span>
                        </Link>
                      </p>
                      <p className="">
                        <Link href="/contact-us">
                          <button className="btn btn-lg button-orange text-white m-4 m-5">
                            Request A Quote
                          </button>
                        </Link>
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="about-section">
              <div className="container">
                <section className="ps-section--block-grid ">
                  <div className="ps-section__thumbnail">
                    <Link href="#">
                      <div className="ps-section__image link-hover-thumb-shape">
                        <Image
                          src="/static/img/services/main/GENOTYPING.jpg"
                          alt="IN-VITRO-TOXICOLOGY"
                          width={1200}
                          height={675}
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="ps-section__content">
                    <div className="ps-section__desc">
                      <h2 className="p-1 y font-weight-bold">
                        IN-VITRO-TOXICOLOGY
                      </h2>
                      <p>
                        Drug discovery is a lengthy and expensive process. In
                        addition, several potential medicines fail in clinical
                        trials as human drug response varies. We provide
                        genotyping services to understand the role of cytochrome
                        P450s and predict human drug response from the early
                        stages of drug development...
                        <Link href="/Services/In-vitro-toxicology">
                          <span className="font-weight-bold span-with-link">
                            {" "}
                            Read More
                          </span>
                        </Link>
                      </p>
                      <p className="">
                        <Link href="/contact-us">
                          <button className="btn btn-lg button-orange text-white m-4 m-5">
                            Request A Quote
                          </button>
                        </Link>
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="about-section">
              <div className="container">
                <ProductList slug="Services" />
              </div>
            </div>

            <Subscribe />
          </div>
        </div>
      </main>
      <Modal
        title="Customise your project"
        style={{ top: 20 }}
        visible={visible}
        onOk={() => setvisible(false)}
        onCancel={() => setvisible(false)}
      >
        <div className="row mb-3">
          <div className="col-md-6">
            <label>Cell Differentiation</label>
            <select
              name=""
              className="custom-select"
              aria-label="Cell Differentiation"
            >
              <option value="">Select</option>
              <option value="Liver">Liver</option>
              <option value="Cardiomyocytes">Cardiomyocytes</option>
              <option value="Neurons">Neurons</option>
            </select>
          </div>
          <div className="col-md-6">
            <label>Mitochondrial Toxicity</label>
            <select
              name=""
              className="custom-select"
              aria-label="Mitochondrial Toxicity"
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label>Tissue Engineering</label>
            <select
              name=""
              className="custom-select"
              aria-label="Tissue Engineering"
            >
              <option value="">Select</option>
              <option value="2D culture">2D culture</option>
              <option value="3D culture">3D culture</option>
              <option value="Organoid">Organoid</option>
              <option value="Organotypic">Organotypic</option>
              <option value="Microfluidic">Microfluidic</option>
            </select>
          </div>
          <div className="col-md-6">
            <label>Oxidative Stress</label>
            <select
              name=""
              className="custom-select"
              aria-label="Oxidative Stress"
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label>Plate Assay</label>
            <select name="" className="custom-select" aria-label="Plate Assay">
              <option value="">Select</option>
              <option value="96">96</option>
              <option value="384">384</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="col-md-6">
            <label>Reference Drugs</label>
            <select
              name=""
              className="custom-select"
              aria-label="Reference Drugs"
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label>Liver Research</label>
            <select
              name=""
              className="custom-select"
              aria-label="Liver Research"
            >
              <option value="">Select</option>
              <option value="NASH">NASH</option>
              <option value="Liver toxicity">Liver toxicity</option>
              <option value="Liver Cancer">Liver Cancer</option>
              <option value="Vaccination development">
                Vaccination development
              </option>
            </select>
          </div>
          <div className="col-md-6">
            <label>Multicellular Modelling</label>
            <select
              name=""
              className="custom-select"
              aria-label="Multicellular Modelling"
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label>Number Of Lines</label>
            <select
              name=""
              className="custom-select"
              aria-label="Number Of Lines"
            >
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="1-5">1-5</option>
              <option value="more">more</option>
            </select>
          </div>
          <div className="col-md-6">
            <label>Toxicity Studies</label>
            <select
              name=""
              className="custom-select"
              aria-label="Toxicity Studies"
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label>Animal Hepatocytes</label>
            <select
              name=""
              className="custom-select"
              aria-label="Animal Hepatocytes"
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="col-md-6">
            <label>Controls</label>
            <select name="" className="custom-select" aria-label="Controls">
              <option value="">Select</option>
              <option value="Primary hepatocyte">Primary hepatocyte</option>
              <option value="HepG2">HepG2</option>
              <option value="HepRG">HepRG</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label>Protein Expression</label>
            <select
              name=""
              className="custom-select"
              aria-label="Protein Expression"
            >
              <option value="Immunofluorescence">Immunofluorescence</option>
              <option value="ELISA">ELISA</option>
              <option value="Western blotting">Western blotting</option>
              <option value="Proteomics">Proteomics</option>
            </select>
          </div>
          <div className="col-md-6">
            <label>Signalling Pathway</label>
            <select
              name=""
              className="custom-select"
              aria-label="Signalling Pathway"
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label>Cytochrome P450 Analysis</label>
            <select
              name=""
              className="custom-select"
              aria-label="Cytochrome P450 Analysis"
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="col-md-6">
            <label>Transporters</label>
            <select name="" className="custom-select" aria-label="Transporters">
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label>Genotyping</label>
            <select name="" className="custom-select" aria-label="Genotyping">
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="col-md-6">
            <label>Cell lines</label>
            <select name="" className="custom-select" aria-label="Cell lines">
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label>Functional Assessment Gene Expression</label>
            <select
              name=""
              className="custom-select"
              aria-label="Functional Assessment Gene Expression"
            >
              <option value="RT PCR">RT PCR</option>
              <option value="Q PCR">Q PCR</option>
              <option value="Transcriptomics">Transcriptomics</option>
            </select>
          </div>
        </div>
      </Modal>
      <Modal
        title="Customise your project"
        style={{ top: 20 }}
        visible={visible1}
        onOk={() => setvisible1(false)}
        onCancel={() => setvisible1(false)}
      >
        <div className="row mb-3">
          <div className="col-md-6">
            <label>Species</label>
            <select
              name=""
              className="custom-select"
              aria-label="Cell Differentiation"
            >
              <option value="">Select</option>
              <option value="Human">Human</option>
              <option value="Mouse">Mouse</option>
              <option value="Dog">Dog</option>
              <option value="Horse">Horse</option>
              <option value="Pig">Pig</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="col-md-6">
            <label>Cell clones</label>
            <select
              name=""
              className="custom-select"
              aria-label="Mitochondrial Toxicity"
            >
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="More">More</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label>Cell type</label>
            <select
              name=""
              className="custom-select"
              aria-label="Tissue Engineering"
            >
              <option value="">Select</option>
              <option value="Fibroblast">Fibroblast</option>
              <option value="Keratinocytes">Keratinocytes</option>
              <option value="PBMNC">PBMNC</option>
              <option value="MSC">MSC</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="col-md-6">
            <label>Differentiation</label>
            <select
              name=""
              className="custom-select"
              aria-label="Oxidative Stress"
            >
              <option value="Spontaneous">Spontaneous</option>
              <option value="Directed">Directed</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label>Number of cell lines</label>
            <select name="" className="custom-select" aria-label="Plate Assay">
              <option value="">Select</option>
              <option value="1 to 5">1 to 5</option>
              <option value="5 to 10">5 to 10</option>
              <option value="More than 10">More than 10</option>
            </select>
          </div>
          <div className="col-md-6">
            <label>Characterisation</label>
            <select
              name=""
              className="custom-select"
              aria-label="Reference Drugs"
            >
              <option value="">Select</option>
              <option value="Immunofluorescence">Immunofluorescence</option>
              <option value="Confocal microscopy">Confocal microscopy</option>
              <option value="FACS">FACS</option>
              <option value="RT PCR">RT PCR</option>
              <option value="QPCR">QPCR</option>
              <option value="Transcriptomics">Transcriptomics</option>
              <option value="Metabolomics">Metabolomics</option>
              <option value="Electron microscopy">Electron microscopy</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label>Primary cell sourcing required</label>
            <select
              name=""
              className="custom-select"
              aria-label="Liver Research"
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="col-md-6">
            <label>Cell lines from same sample</label>
            <select
              name=""
              className="custom-select"
              aria-label="Multicellular Modelling"
            >
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="More">More</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-12">
            <label>Quality testing</label>
            <select
              name=""
              className="custom-select"
              aria-label="Number Of Lines"
            >
              <option value="">Select</option>
              <option value="Mycoplasma">Mycoplasma</option>
              <option value="Cell authentication">Cell authentication</option>
              <option value="Microbial testing">Microbial testing</option>
              <option value="HEP B">HEP B</option>
              <option value="HIV1 and 2">HIV1 and 2</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
      </Modal>
    </Container>
  )
}

export default ServicesScreen
