import React from "react"
import Link from "next/link"
import { baseUrl } from "~/repositories/Repository"
import { connect } from "react-redux"
import dynamic from "next/dynamic"

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
const Subscribe = dynamic(
  () => import("~/components/shared/sections/Subscribe"),
  { loading: () => <p>Loading...</p> }
)

const texicologyScreen = (ProductData) => {
  const breadcrumb = [
    {
      id: 1,
      text: "Home",
      url: "/"
    },

    {
      id: 2,
      text: "Services",
      url: "/Services"
    },
    {
      id: 3,
      text: "In-vitro toxicology"
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
        title="In-vitro toxicology | Your Drug Discovery Platform"
        ogimg={ogImage}
        description={ogDesc}
      >
        <main className="ps-page ps-page--inner">
          <div
            className="ps-page__header breadcrumb-h banner-breadcrumb-bg"
          >
            <BannerImage
              alt="In-vitro toxicology-image"
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
              <h1 className="text-center  text-white p-2">
                {ProductData?.ProductData?.data[0]?.banner_content}
              </h1>
            </div>
          </div>

          <div className="ps-page__content ">
            <div className="ps-about">
              <div className=" about-section ">
                <div className="container center-box">
                  <p className=" vertical-center">
                    Stemnovate in vitro testing platform simulates the liver,
                    heart and neuronal cell response to evaluate predictable and
                    unpredictable toxins over the breadth of the genetically
                    diverse human population. The processes are highly
                    data-driven with high-resolution images, genomic profiles,
                    biological information, molecular and metabolite profiles.
                    The computational modelling can correlate, assimilate and
                    connect the data more rapidly to help discover patterns.
                  </p>
                  <p className=" vertical-center">
                    We aim to automate the prediction of toxicity and that will
                    be a game-changing technology for precision drug discovery.
                  </p>
                </div>
              </div>
              <div className="plus-section">
                <div className="container">
                  <section className="ps-section--block-grid pt-3">
                    <div className="ps-section__thumbnail">
                      <Link href="#">
                        <div className="ps-section__image link-hover-thumb-shape image-box-container mx-2 image-box-container-mb">
                          <Image
                            src="/static/img/services/In-vitro-toxicology-assay.svg"
                            alt="In-vitro toxicology"
                            height={360}
                          width={640}
                          quality={80}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content mt-0">
                      <div className="ps-section__desc center-box">
                        <h3 className="text-white font-weight-bold">
                          Platform features
                        </h3>
                        <p className="text-white">
                          Stemnovate is capable of designing and manufacturing a
                          bespoke fluidic component to enhance repeatability of
                          complex cell culture.
                          <br />
                          As a company, we are able to quickly design, validate
                          and manufacture prototypes and complex designs.
                          <br />
                          Once a methodology is optimised the process can be set
                          for reproducibility and automation.
                          <br />
                          <br />
                          We support projects to achieve a higher standard of
                          accuracy, evaluating biocompatibility and tolerance.
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <div className="about-section">
                <div className="container">
                  <div className="pt-5">
                    <section className="ps-section--block-grid">
                      <div className="col-md-4">
                        <Link
                          href="/Applications/Disease-Modelling/Liver"
                          prefetch={false}
                        >
                          <div className="ion-wrapper text-center span-with-link image-box-container  mx-2">
                            <Image
                              width="100"
                              height="100"
                              src="/static/img/services/Liver-Platform.svg"
                              alt="Liver Platform Hepatotoxicity"
                            />
                            <h3>
                              Liver Platform <br />
                              Hepatotoxicity
                            </h3>
                          </div>
                        </Link>
                      </div>
                      <div className="col-md-4">
                        <Link
                          href="/Applications/Disease-Modelling/Heart"
                          prefetch={false}
                        >
                          <div className="ion-wrapper text-center span-with-link image-box-container mx-2">
                            <Image
                              width="100"
                              height="100"
                              src="/static/img/services/Heart-cell-Platform.svg"
                              alt="Heart cell Platform Cardiac toxicity"
                            />
                            <h3>
                              Heart cell Platform <br />
                              Cardiac toxicity
                            </h3>
                          </div>
                        </Link>
                      </div>
                      <div className="col-md-4">
                        <Link
                          href="/Applications/Disease-Modelling/Neuron"
                          prefetch={false}
                        >
                          <div className="ion-wrapper text-center span-with-link image-box-container mx-2">
                            <Image
                              width="100"
                              height="100"
                              src="/static/img/services/Neuron.svg"
                              alt="Neuronal cell Platform Neurotoxicity"
                            />
                            <h3>
                              Neuronal cell Platform <br />
                              Neurotoxicity
                            </h3>
                          </div>
                        </Link>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
              <div className="plus-section">
                <div className="container">
                  <section className="ps-section--block-grid pt-3">
                    <div className="ps-section__thumbnail">
                      <Link href="#">
                        <div className="ps-section__image link-hover-thumb-shape image-box-container mx-2 image-box-container-mb">
                          <Image
                            src="/static/img/services/Stemnovate-in-vitro-toxicology.svg"
                            alt="Stemnovate in vitro toxicology"
                            height={360}
                            width={640}
                            quality={80}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content mt-0">
                      <div className="ps-section__desc">
                        <h3 className="p-1 text-white font-weight-bold">
                          Stemnovate in vitro toxicology
                        </h3>
                        <p className="text-white ">
                          Stemnovate in vitro toxicology assays use primary
                          cells or induced pluripotent stem cell-derived cells
                          such as heart, liver and neurons in controlled
                          laboratory conditions to examine the toxic properties
                          of compounds and mixtures.
                          <br />
                          <br />
                          We develop assays to examine the toxicity of
                          xenobiotics at the cellular level replacing animal
                          testing, where species differences often fail to
                          represent human physiological responses.
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <div className=" about-section ">
                <div className="container">
                  <h3 className="p-1  text-center font-weight-bold">
                    Quality control
                  </h3>
                  <p className="">
                    We provide various quality tests to evaluate the quality of
                    cell products. The tests use advanced bioinformatics with
                    gene and protein expression.
                  </p>
                  <ol>
                    <li>Mycoplasma testing</li>
                    <li>Human viruses (HIV-1, HIV-2, HBV, HCV)</li>
                    <li>Animal species specific viruses</li>
                    <li>Mycobacterium testing</li>
                  </ol>
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
    ProductData1 = myProductData
  }

  var ProductData = []
  var requestParam = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      page_name: "In-vitro toxicology"
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

  return { props: { ProductData } }
}

export default connect((state) => state)(texicologyScreen)
