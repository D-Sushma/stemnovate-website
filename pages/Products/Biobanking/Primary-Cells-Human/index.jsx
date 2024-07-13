import React from "react"
import { Collapse } from "antd"
import { connect } from "react-redux"
import Link from "next/link"
import FibroplastLiveCulture from "~/public/static/img/products/primary-human-fibroblasts/primary-Human-Fibroplast-Live-Culture.svg"
import FrozenFibroblasts from "~/public/static/img/products/human-fibroblast/Frozen-Fibroblasts.svg"
import dynamic from "next/dynamic"
import { baseUrl } from "~/repositories/Repository"
const Container = dynamic(() => import("~/components/layouts/Container"), {
  loading: () => <p>Loading...</p>
})
const BreadCrumb = dynamic(() => import("~/components/elements/BreadCrumb"), {
  loading: () => <p>Loading...</p>
})
const Image = dynamic(() => import("~/components/elements/Image"), {
  loading: () => <p>Loading...</p>
})
const BannerImage = dynamic(() => import("~/components/elements/BannerImage"), {
  loading: () => <p>Loading...</p>
})
const ProductList = dynamic(
  () => import("~/components/productList/productList"),
  { loading: () => <p>Loading...</p> }
)
const Subscribe = dynamic(
  () => import("~/components/shared/sections/Subscribe"),
  { loading: () => <p>Loading...</p> }
)
const categoryListScreen = (ProductData) => {
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
      text: "Biobanking",
      url: "/Products/Biobanking"
    },
    {
      id: 4,
      text: "Primary Human Fibroblasts"
    }
  ]

  var ogImage = ""
  var images1 = []
  var products_img1 = ProductData?.ProductData?.data[0]?.og_img?.split(",")
  var ogDesc = ProductData?.ProductData?.data[0]?.og_desc
  if (products_img1 && products_img1.length > 0) {
    products_img1.map((item) => {
      images1.push(`${process.env.AWS_S3BUCKET_URL}${item}`)
    })
    ogImage = images1[0]
  }
  var bgImage = `${process.env.AWS_S3BUCKET_URL}${ProductData?.ProductData?.data[0]?.banner_img}`
  return (
    <>
      <Container
        title={"Primary Human Fibroblasts | Your Drug Discovery Platform"}
        ogimg={ogImage}
        description={ogDesc}
      >
        <main className="ps-page ps-page--inner">
          <div className="ps-page__header breadcrumb-h banner-breadcrumb-bg">
            <BannerImage
              alt="primary-human-banner"
              src={bgImage}
              layout="fill"
              objectFit="cover"
              priority={true}
              style={{
                zIndex: -1
              }}
            />
            <div className="container ">
              <BreadCrumb breacrumb={breadcrumb} />
            </div>
            <h1 className="text-center text-white p-2">
              {ProductData?.ProductData?.data[0]?.banner_content}
            </h1>
          </div>

          <div className="ps-about ps-page__content">
            <div className=" about-section my-2 mx-2 ">
              <div className="container">
                <div>
                  Primary cells, like fibroblasts and blood cells, are the
                  foundation material of cellular studies. But often commercial
                  products lack information about derivation, sourcing, and
                  characterisation. This can impact not only research output but
                  also downstream applications. Cell authentication is becoming
                  an important requirement for publishing in high impact
                  journals and acquiring regulatory approval. Our cells are
                  unique as they have the genotype information available for
                  major drug-metabolizing enzymes such as Cytochrome P450.
                </div>
              </div>
            </div>

            <div className="bg-02-section">
              <div className="container">
                <div className="ps-section--block-grid pt-3">
                  <div className="ps-section__thumbnail">
                      <div className="ps-section__image link-hover-thumb-shape image-box-container mx-2">
                        <Image
                          src={FibroplastLiveCulture}
                          alt="Live Culture Fibroblasts"
                          width={640}
                          height={360}
                          quality={80}
                        />
                      </div>
                  </div>
                  <div className="ps-section__content rm_m customStyles">
                    <div className="ps-section__desc mx-2 ">
                      <h2 className="text-white">Live Culture Fibroblasts</h2>
                      <p className="text-white">
                        Stemnovate&rsquo;s Live Primary Cells are delivered the
                        same day in culture, ensuring the cells are viable and
                        ready to be used, worry-free, for your next experiment.
                        <br /> Our live cells are available in T-25 flasks
                        (~400,000 Cells)
                      </p>
                      <Link
                        href="/Products?Delivery_Type=Live&pType=13"
                        prefetch={false}
                      >
                        <div className="btn btn-lg button-orange text-white m-4 m-5">
                          View Products
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-section">
              <div className="container">
                <div className="ps-section--block-grid pt-3">
                  <div className="ps-section__thumbnail">
                      <div className="ps-section__image link-hover-thumb-shape image-box-container mx-2">
                        <Image
                          src={FrozenFibroblasts}
                          alt="Frozen Fibroblasts"
                          width={640}
                          height={360}
                          quality={80}
                        />
                      </div>
                  </div>
                  <div className="ps-section__content rm_m mx-2 customStyles">
                    <div className="ps-section__desc mx-2">
                      <h2>Frozen Fibroblasts</h2>
                      <p>
                        Stemnovate’s Primary Human Fibroblasts are created by
                        isolating, plating, and expanding in culture before
                        being harvested for cryopreservation resulting in the
                        highest purity, viability, and plating efficiency.
                        <br />
                        Our Frozen cells have high cell counts (~0.5 million
                        cells per vial) and are available as single vials or
                        reserved lot.
                      </p>
                      <Link
                        href="/Products?Delivery_Type=Frozen&pType=13"
                        prefetch={false}
                      >
                        <div className="btn btn-lg button-orange text-white m-4 m-5">
                          View Products
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="about-section">
              <div className="container">
                <p className="p-1">
                  We are flexible in the service we can provide so if you are
                  curious how else we can support your project please{" "}
                  <Link href="/contact-us" prefetch={false}>
                    <span className="text-orange span-with-link">
                      contact us.
                    </span>
                  </Link>{" "}
                </p>
                <p className="base-bg-primary text-white p-2">
                  Stemnovate cell production follows compliance and regulations
                  in the UK. We hold the Human Tissue Act License, and all cells
                  are sourced under complete consent for commercial use.
                </p>
                <ProductList slug="Primary-Cells-Human" />
              </div>
            </div>
            <div className="about-section">
              <div className="container">
                <h2 className="h1">FAQ (Frequently Ask questions)</h2>
                <p className="base-bg-primary text-white p-2 pl-5">
                  If you have any doubts or any questions please see followings
                </p>
                <Collapse accordion>
                  <Panel
                    header={
                      "What are primary cells, and where do they come from?"
                    }
                    key="1"
                  >
                    <p>
                      &apos;Primary cells&apos; refer to cells isolated directly
                      from a human or animal donor and grown in vitro. They can
                      be obtained directly from multicellular organisms (human
                      or animal), usually during preoperative or intraoperative
                      management via minimally invasive surgery and sometimes
                      during open excisional surgery.
                    </p>
                  </Panel>
                  <Panel
                    header={`What is the difference between primary cells, immortalized cell lines and stem cells?`}
                    key="2"
                  >
                    <p className="mb-3">
                      <b>Primary cells</b> are cells directly isolated from
                      parental tissue, whereas a cell line involves the culture
                      of cells originating from primary cell culture. A{" "}
                      <b>Primary cells</b> has undergone very limited
                      manipulation, so it reflects the main functional component
                      of the tissue it comes from.
                    </p>
                    <p className="mb-3">
                      <b>Immortalized cell</b> lines are passaged or modified to
                      proliferate indefinitely. A virus may be used to
                      immortalize them intentionally, or they may be isolated
                      from tumours. As they have been in culture for decades and
                      are often genetically and phenotypically different from
                      their tissue origin, nevertheless, they provide consistent
                      experimental results.
                    </p>
                    <p className="mb-3">
                      <b>Stem cells,</b> however, have the potential to develop
                      into many different types of cells in the body and to
                      become specialized cells, such as muscle, blood and brain
                      cells. There are two main types of stem cells: embryonic
                      and adult. Both of them can be directly isolated from a
                      parental donor or originate from primary cell culture.
                      Therefore, depending on their origin, there are primary
                      stem cells and stem cell lines.
                    </p>
                  </Panel>
                  <Panel
                    header={`What are the different types of primary cells?`}
                    key="3"
                  >
                    <p>
                      The most popular types of primary cells used in research
                      are epithelial cells, fibroblasts, keratinocytes,
                      melanocytes, endothelial cells, muscle cells,
                      hematopoietic cells and mesenchymal stem cells. However,
                      there are as many different types of primary cells in the
                      lab as there are in vivo.
                    </p>
                  </Panel>
                  <Panel
                    header={`How are primary cells used in biotechnology and what are their advantages?`}
                    key="4"
                  >
                    <p>
                      The functional and genetic fidelity of primary cells makes
                      them an excellent model for studying cell physiology,
                      toxicity, metabolism, and carcinogenesis. Furthermore,
                      they can also be used for the screening of drugs as well
                      as the development of biological compounds, such as
                      vaccines and therapeutic proteins.
                    </p>
                  </Panel>
                  <Panel
                    header={`What are some examples of cell lines?`}
                    key="5"
                  >
                    <p className="mb-5">
                      There are now a wide variety of cell lines available. They
                      come from a variety of organisms:
                    </p>
                    <p className="mb-5">
                      Sf9 insect epithelial cells: Derived from the ovaries of
                      the fall armyworm moth (Spodoptera frugiperda).
                    </p>
                    <p className="mb-5">
                      CHOs: Derived from Chinese hamster ovary cells.
                    </p>
                    <p className="mb-5">
                      HEK293: These cells originate from human embryonic kidneys
                      and are one of the most widely used in cell biology
                      research.
                    </p>
                    <p className="mb-5">
                      HeLa: It is named after an American woman, Henrietta
                      Lacks. It is the first immortal human cell line
                      established and the most widely used in research labs too.
                    </p>
                  </Panel>
                  <Panel
                    header={`Is it possible to immortalize primary cells?`}
                    key="6"
                  >
                    <p className="mb-5">
                      Yes, there are several methods for immortalizing mammalian
                      cells in culture conditions. Overriding the cell cycle
                      with a viral gene is one of the most common methods. Virus
                      genes can affect cell proliferation by deregulating
                      biological brakes controlling proliferative control. The
                      expression of Telomerase Reverse Transcriptase protein
                      (TERT) is another method, particularly for human cells,
                      which are highly affected by shortened telomeres. The TERT
                      gene is inactive in most somatic cells, but it can be
                      expressed exogenously to prevent replicative senescence.
                    </p>
                  </Panel>
                  <Panel header={`What is a primary cell biobank?`} key="7">
                    <p className="mb-5">
                      Primary cell biobanks consist of isolated cells from
                      several different species&apos; tissues and organs. As
                      part of Stemnovate&apos;s quality control process, all
                      cell types in its primary cell biobank are subjected to
                      tests to determine their quality, purity, and identity.
                    </p>
                  </Panel>
                </Collapse>
              </div>
            </div>
            <Subscribe />
          </div>
        </main>
      </Container>
    </>
  )
}

export async function getServerSideProps() {
  var ProductData = []
  var requestParam = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      page_name: "Primary Human fibroblast"
    })
  }
  const res = await fetch(
    baseUrl + "/api/header_banners/getBanners",
    requestParam
  )
  const myProductData = await res.json()

  if (myProductData.status == 200) {
    ProductData = myProductData
  } else {
    ProductData = []
  }

  return {
    props: {
      ProductData
    }
  }
}

export default connect((state) => state)(categoryListScreen)
