import React from "react"
import { connect } from "react-redux"
import { Tooltip } from "antd"
import Link from "next/link"
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
      text: "Biobanking"
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
        title="Biobanking | Your Drug Discovery Platform"
        ogimg={ogImage}
        description={ogDesc}
      >
        <main className="ps-page ps-page--inner">
          <div className="ps-page__header  breadcrumb-h banner-breadcrumb-bg">
            <BannerImage
              alt="products-image"
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
              <h1 className="text-center h1 text-white p-2 ">
                {ProductData?.ProductData?.data[0]?.banner_content}
              </h1>
            </div>
          </div>

          <div className="ps-page__content">
            <div className="ps-about ">
              <div className="container">
                <div className="center-box mt-2">
                  <p className=" vertical-center">
                    Stemnovate has the world's first commercial biobank for
                    human iPS cells with complete genotype information. We pride
                    ourselves in supplying high quality cells but that's not all
                    we offer. Our research and development technology can save
                    precious time and cost ensuring success and our partnerships
                    with top tier pharmaceutical companies and world's top
                    research institutes allows for new technologies and
                    applications development at a pace not imagined before.
                  </p>
                </div>
              </div>
              <ProductList slug="Biobanking" />

              <div className="bg-02-section">
                <div className="container">
                  <section className="ps-section--block-grid pt-3">
                    <div className="ps-section__thumbnail">
                        <div className="ps-section__image link-hover-thumb-shape image-box-container mx-2 ">
                          <Image
                            src="/static/img/products/bio-banking/Compliant-_-Ethical-biobanking.svg"
                            alt="Compliant & Ethical biobanking"
                            width={488}
                            height={275}
                          />
                        </div>
                    </div>
                    <div className="ps-section__content rm_m customStyles">
                      <h2 className="p-1 text-white font-weight-bold">
                        Compliant & Ethical biobanking
                      </h2>
                      <div className="ps-section__desc mx-2">
                        <p className="text-white">
                          Through commercial brokers, cells could be coming from
                          anywhere - In a recent survey, the{" "}
                          <Tooltip title="Helping UK SMEs access tissue samples - Medicines Discovery Catapult">
                            <a
                              rel="noopener noreferrer"
                              className="reference-website"
                              target={"_blank"}
                              href="https://md.catapult.org.uk/success-stories/helping-uk-smes-access-tissue-samples/"
                            >
                              Medicines Discovery Catapult
                            </a>
                          </Tooltip>{" "}
                          found that diagnostics small and medium enterprises
                          (SMEs) in the UK obtained 75% of their samples from
                          other countries where there is less concern around the
                          ethics of the trade of human tissues. At Stemnovate,
                          we source all our cells from living donors with
                          complete informed consent, the ethical concerns around
                          biobanking are important to us and we are dedicated to
                          having a high-quality ethical biobank. We hold a Human
                          Tissue Act License and follow compliance and
                          regulations in the UK
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              
              <div className="about-section">
                <div className="container">
                  <div className="row py-5">
                    <div style={{marginBottom:'10%'}} className="col-md-6 text-center">
                      <div>
                        <div  className="overflow-hidden ps-banner__image image-box-container mx-2">
                          <Image
                            src="/static/img/products/bio-banking/Quality-Assured.svg"
                            alt="Quality Assured"
                            width={518}
                            height={292}
                          />
                        </div>
                        <h3 className="rm_m">Quality Assured</h3>
                        <p className="mx-4 text-left">
                          With Stemnovate you can be sure of the quality of our
                          cells, we have a dedicated team growing and testing
                          our cells and all cells will have tested negative for
                          HIV-1, HIV-2, Hepatitis-A, Hepatitis-B, bacteria, and
                          mycoplasma. Our cells are cultured in defined
                          conditions and are profiled for cell growth and the
                          expression of key biomarkers. We also offer profiling
                          and bioinformatics to analyse the cells and offer more
                          information, such as genotype information for major
                          drug-metabolizing enzymes such as Cytochrome P450.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6 text-center">
                      <div>
                        <div className="overflow-hidden ps-banner__image image-box-container mx-2">
                          <Image
                            src="/static/img/products/bio-banking/Gender-_-Ethnic-Diversity.svg"
                            alt="Gender & Ethnic Diversity"
                            width={518}
                            height={292}
                          />
                        </div>
                        <h3 className="rm_m">Gender & Ethnic Diversity</h3>
                        <p className="mx-4 text-left ">
                          According to a{" "}
                          <Tooltip title="Gender-based differences in the toxicity of pharmaceuticals--the Food and Drug Administration's perspective - PubMed (nih.gov)">
                            <a
                              rel=" noopener noreferrer"
                              className="reference-website"
                              target={"_blank"}
                              href="https://pubmed.ncbi.nlm.nih.gov/11488556/"
                            >
                              2001 article by Margaret Ann Miller
                            </a>
                          </Tooltip>{" "}
                          from the Office of women's health (OWH), Food and Drug
                          Administration (FDA), women experience more adverse
                          reactions to treatment with therapeutic drugs than men
                          because of differences in drug metabolism. Stemnovate
                          biobank addresses the lack of gender diversity with a
                          robust collection of female primary cells and induced
                          pluripotent stem cell lines. Using cells from a more
                          diverse sample selection can help to see the
                          differences in drug metabolism and individual
                          variability in clinical response.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-02-section">
                <div className="container">
                  <section className="ps-section--block-grid pt-3">
                    <div className="ps-section__thumbnail">
                        <div className="ps-section__image link-hover-thumb-shape image-box-container mx-2">
                          <Image
                            src="/static/img/products/bio-banking/Reducing-Animal-Testing.svg"
                            alt="Reducing Animal Testing"
                            width={488}
                            height={275}
                          />
                        </div>
                    </div>
                    <div className="ps-section__content rm_m customStyles">
                      <h2 className="p-1 text-white font-weight-bold">
                        Reducing Animal Testing
                      </h2>
                      <div className="ps-section__desc mx-2">
                        <p className=" text-white">
                          In 2020,{" "}
                          <span className="font-weight-bolder">
                            2.88 million
                          </span>{" "}
                          procedures were carried out in Great Britain involving
                          living animals (Annual Statistics of Scientific
                          Procedures on Living Animals, Great Britain, 2020), we
                          are committed to helping contribute to reducing this:
                          Since the start of our company in 2016, we have not
                          sacrificed any animals and built alternative
                          technologies for human and animal studies. Our work
                          helps to make alternative drug models to animal models
                          using our high-quality cells. By using cell cultures
                          to investigate the drug activity, metabolism, and
                          toxicity of any possible drug candidates you can
                          establish if the compound is viable for further
                          development without the use of live animals. This
                          reduces the number of non-viable drugs used in further
                          animal studies, reducing animal testing and its
                          associated costs.{" "}
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

export async function getServerSideProps() {
  var ProductData = []
  var requestParam = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      page_name: "Biobanking"
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
