import React from "react"
// import BreadCrumb from "~/components/elements/BreadCrumb"
// import Container from "~/components/layouts/Container"
import { Collapse } from "antd"
import { connect } from "react-redux"
import Link from 'next/link'
import Image from '~/components/elements/Image'
import dynamic from 'next/dynamic'

const Container = dynamic(
  () => import("~/components/layouts/Container"),
  {loading: ()=> <p>Loading...</p>}
)
const BreadCrumb = dynamic(
  () => import("~/components/elements/BreadCrumb"),
  {loading: ()=> <p>Loading...</p>}
)
const ProductList = dynamic(
    () => import("~/components/productList/productList"),
    {loading: ()=> <p>Loading...</p>}
  )
const Subscribe = dynamic(
    () => import("~/components/shared/sections/Subscribe"),
    {loading: ()=> <p>Loading...</p>}
  )
const IPSCellsScreen = () => {
  const { Panel } = Collapse
  const breadcrumb = [
    {
      id: 1,
      text: "Home",
      url: "/"
    },
    {
      id: 2,
      text: "Products",
      url: "/Products"
    },
    {
      id: 3,
      text: "Bio-Banking",
      url: "/Products/Biobanking"
    },
    {
      id: 4,
      text: "Induced Pluripotent Stem-Cells"
    }
  ]
  return (
    <>
      <Container
        title="Induced Pluripotent Stem-Cells"
        description={`We provide the best quality human Induced Pluripotent Stem Cells (iPSC), Dermal (skin) derived`}
      >
        <main className="ps-page ps-page--inner">
          <div className="ps-page__header  breadcrumb-h product-breadcrumb-bg">
            <div className="container ">
              <BreadCrumb breacrumb={breadcrumb} />
              <h1>Induced Pluripotent Stem-Cells</h1>
            </div>
          </div>
          <div className="ps-page__content ">
            <div className="ps-about">
              <div className=" about-section ">
                <div className="container">
                  <div className="center-box">
                    <p className=" vertical-center">
                      We provide the best human cell models for drug discovery
                      and disease modelling using cellular reprogramming. The
                      ethical method uses adult skin or blood cells donated by
                      volunteers and is core to our biobank, reflecting human
                      diversity in age, gender, and ethnicity.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" bg-02-section">
                <div className="container">
                  <section className="ps-section--block-grid py-5">
                    <div className="ps-section__thumbnail">
                      <Link href="#">
                        <div className="ps-section__image link-hover-thumb-shape">
                        <Image
                          src="/static/img/services/Cell-Reprogramming.jpg"
                          alt="Cell Reprogramming"
                          width={1200}
                          height={675}
                        />
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content ">
                      <div className="ps-section__desc ">
                        <h2 className="p-1 text-white font-weight-bold">
                          Cell Reprogramming
                        </h2>
                        <p className="text-white ">
                          Cellular reprogramming unleashes endless possibilities
                          within drug development and research. Generating
                          induced pluripotent stem cells can often be a costly
                          and time-consuming process.
                          <br />
                          Stemnovate offers custom reprogramming services,
                          saving you the time which can be better spent
                          performing valuable research.
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <div className="about-section">
                <div className="container">
                  <p className="p-1">
                    We are flexible in the service we can provide so if you are
                    curious how else we can support your project please{" "}
                    <Link href="mailto:info@stemnovate.co.uk" prefetch={false}>
                      <span className="text-orange span-with-link">contact us.</span>
                    </Link>
                  </p>
                  <p className="base-bg-primary text-white p-2">
                    Stemnovate cell production follows compliance and
                    regulations in the UK. We hold the Human Tissue Act License,
                    and all cells are sourced under complete consent for
                    commercial use.
                  </p>
                  <ProductList slug="Induced-Pluripotent-Stem-Cells" />
                </div>
              </div>
              <div className="about-section">
                <div className="container">
                  <h2 className="h1">FAQ (Frequently Ask questions)</h2>
                  <p className="base-bg-primary text-white p-2 pl-5">
                    If you have any doubts or any questions please see
                    followings
                  </p>
                  <Collapse accordion>
                    <Panel
                      header={"What are iPSCs and how are they generated?"}
                      key="1"
                    >
                      <p>
                        Induced pluripotent stem cells (iPS cells or iPSCs) are
                        developed by reprogramming adult somatic cells (such as
                        fibroblasts or blood cells) with defined embryonic
                        transcription factors to become pluripotent stem cells.
                        In most cases, four factors (c-Myc, Oct-3/4, SOX2, and
                        KLF4) are used, although Oct-3/4, SOX2, Nanog, and
                        LIN-28 have also been used successfully.
                      </p>
                    </Panel>
                    <Panel header={`What are the advantages of iPSCs?`} key="2">
                      <p className="mb-3">
                        iPSCs have proven to be a powerful tool for scientific
                        modelling of disease and the development of treatments
                        for human illnesses. iPSCs can, for example, be
                        manipulated to become beta islet cells to treat
                        diabetes, blood cells to create new blood free of cancer
                        cells for a leukaemia patient, or neurons to treat
                        neurological disorders. Moreover, iPSCs are not derived
                        from human embryos (unlike embryonic stem cells, ESCs),
                        so their use does not pose ethical concerns.
                      </p>
                    </Panel>
                    <Panel
                      header={`Is it possible to generate iPSCs without using genome
viral integration?`}
                      key="3"
                    >
                      <p>
                        A major limitation of iPSC generation is the use of
                        potentially harmful genome-integrating viruses that can
                        cause insertional mutagenesis and unpredictable genetic
                        abnormalities. Therefore, several reprogramming
                        technologies without viral integration have been
                        developed for hiPSC production. To reprogram our cells,
                        Stemnovate only uses non-integrating viruses (episomal
                        viruses).
                      </p>
                    </Panel>
                    <Panel
                      header={`What is the iPSC differentiation process?`}
                      key="4"
                    >
                      <p>
                        Due to their pluripotent nature, iPSCs are capable of
                        differentiating into any type of cell in the body.
                        Differentiation of the iPSCs of humans allows them to be
                        transformed into a variety of different types of cells,
                        such as liver cells, adipocytes, cardiomyocytes,
                        primitive hematopoietic cells, beta-cells of the
                        pancreas, and neurons.
                      </p>
                    </Panel>
                    <Panel
                      header={`How can iPSCs be used to model disease ?`}
                      key="5"
                    >
                      <p className="mb-5">
                        Patient-specific iPSCs can provide unlimited
                        disease-relevant cells in a personalized way, providing
                        access to previously inaccessible cell types, such as
                        cardiomyocytes and neurons. For instance, Dopaminergic
                        neurons derived from iPSCs of Parkinson&apos;s disease
                        (PD) patients have been used in studies that illustrate
                        PD pathophysiology. Similarly, hepatocytes derived from
                        iPSCs from patients with inherited metabolic diseases,
                        like familial hypercholesterolemia mimic the
                        pathological phenotypes of those diseases.
                      </p>
                    </Panel>
                    <Panel
                      header={`Is it possible to generate iPSCs from highly endangered
animal species?`}
                      key="6"
                    >
                      <p className="mb-5">
                        There are now IPSCs available for a wide variety of
                        species, including rodents, primates, wild cats,
                        bovines, equines, and birds. The cell lines have been
                        used by researchers for the conservation of wildlife and
                        environmental resources. Researchers are also exploring
                        ways to grow animal products without harming animals,
                        offering unorthodox options for producing meat, leather,
                        and fur using iPSCs.
                      </p>
                    </Panel>
                  </Collapse>
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
export default connect((state) => state)(IPSCellsScreen)
