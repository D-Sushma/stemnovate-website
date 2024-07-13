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

const texicologyScreen = (ProductData1) => {
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
      text: "DNA Synthesis"
    }
  ]

  var ogImage = ""
  var images1 = []
  var products_img1 = ProductData1?.ProductData1?.data[0]?.og_img?.split(",")
  var ogDesc = ProductData1?.ProductData1?.data[0]?.og_desc
  if (products_img1 && products_img1.length > 0) {
    products_img1.map((item) => {
      images1.push(`${process.env.AWS_S3BUCKET_URL}${item}`)
    })
    ogImage = images1[0]
  }

  var bgImage = `${process.env.AWS_S3BUCKET_URL}${ProductData1?.ProductData1?.data[0]?.banner_img}`

  return (
    <>
      <Container
        title="DNA-Synthesis | Your Drug Discovery Platform"
        ogimg={ogImage}
        description={ogDesc}
      >
        <main className="ps-page ps-page--inner">
          <div className="ps-page__header breadcrumb-h banner-breadcrumb-bg">
            <BannerImage
              alt="dna-synthesis-banner"
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
              <h1 className="text-center  text-white ">
                {ProductData1?.ProductData1?.data[0]?.banner_content}
              </h1>
            </div>
          </div>

          <div className="ps-page__content">
            <div className="ps-about">
              <div className=" about-section ">
                <div className="container">
                  <div className="center-box">
                    <p className=" vertical-center">
                      Stemnovate is soon introducing a microfluidic platform for
                      DNA synthesis. This disruptive technology allows template
                      free DNA/RNA synthesis that can potentially accelerate the
                      development of new therapeutics in the pharmaceutical
                      sector, e.g. antibody research, drug bio-production and
                      RNAi based therapeutics. This microfluidic platform
                      technology overcomes the current limitations of DNA
                      synthetic technology.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-02-section">
                <div className="container ">
                  <section className="ps-section--block-grid pt-3">
                    <div className="ps-section__thumbnail">
                        <div className="ps-section__image link-hover-thumb-shape image-box-container mx-2 image-box-container-mb">
                          <Image
                            src="/static/img/applications/DNA-synthesis-update.svg"
                            alt="Applications"
                            height={275}
                            width={488}
                            // height={360}
                            // width={640}
                            quality={75}
                            
                          />
                        </div>
                    </div>
                    <div className="ps-section__content mt-0">
                      <h2 className="text-white font-weight-bold">
                        Applications
                      </h2>

                      <div className="ps-section__desc  mx-2">
                        <p className="text-white">
                          DNA synthesis has the potential to revolutionise the
                          field of drug discovery, biotechnology, nanotechnology
                          and oligonucleotides synthesis.
                        </p>
                        <h3 className="text-white mt-4">Drug Discovery</h3>
                        <p className="text-white">
                          The applications are varied, such as RNA therapy,
                          antibody research and vaccine development.
                        </p>
                        <h3 className="text-white mt-4">Biotechnology</h3>
                        <p className="text-white">
                          DNA synthesis helps facilitate drug bio-production,
                          biofuel research, crop production and research for
                          food security.
                        </p>
                        <h3 className="text-white mt-4">Nanotechnology</h3>
                        <p className="text-white">
                          DNA synthesis is being explored for novel DNA data
                          storage and nano-material discoveries.
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <div className="about-section">
                <div className="container">
                  <h2 className="text-center p-1 font-weight-bold">
                    Platform Features
                  </h2>
                  <section className="ps-section--block-grid">
                    <div className="col-md-3">
                      <div className="ion-wrapper text-center">
                        <Image
                          width="75"
                          height="75"
                          src="/static/img/applications/accuracy.svg"
                          alt="Accuracy"
                        />
                        <h3>Accuracy</h3>
                        <p>
                          Precision DNA synthesis and high yield with purity
                          harnessing novel enzymatic methodology.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="ion-wrapper text-center">
                        <Image
                          width="75"
                          height="75"
                          src="/static/img/applications/scalability.svg"
                          alt="Scalability"
                        />
                        <h3>Scalability</h3>
                        <p>
                          The faster synthesis method surpasses conventional
                          technology for achieving longer product size.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="ion-wrapper text-center">
                        <Image
                          width="75"
                          height="75"
                          src="/static/img/applications/ecofriendly.svg"
                          alt="Eco-Friendly"
                        />
                        <h3>Eco-Friendly</h3>
                        <p>
                          The technology is environmentally friendly with no
                          impact from any harmful reagents.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="ion-wrapper text-center">
                        <Image
                          width="75"
                          height="75"
                          src="/static/img/applications/speed.svg"
                          alt="Speed"
                        />
                        <h3>Speed</h3>
                        <p>
                          Rapid template free-Enzymatic DNA Synthesis for short
                          and long oligos.
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <div className="about-section">
                <div className="container">
                  <h2 className="text-center p-1 font-weight-bold">
                    How It Works
                  </h2>
                  <div className="overflow-hidden">
                    <div
                      className="ps-banner__image ml-auto mr-auto"
                      style={{ width: "100%" }}
                    >
                      <video
                        src="/static/img/applications/DNA synthesis_1.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        width="100%"
                        height="100%"
                      ></video>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-section">
                <div className="container">
                  <h2 className="text-center mb-5 p-1 font-weight-bold">
                    Advantages Of Stemnovate’s ETFDS
                  </h2>
                  <div
                    className="mb-5"
                    style={{
                      overflow: "auto"
                    }}
                  >
                    <table id="products">
                      <thead>
                        <tr>
                          <th>Parameters</th>
                          <th>
                            Stemnovate’s enzymatic DNA synthesis platform.
                          </th>
                          <th>
                            Chemical DNA synthesis and Centralized services.
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Length</td>
                          <td>
                            ETFDS is capable of generating short to long to
                            ultra-long DNA.
                          </td>
                          <td>
                            Phosphoramidite synthetic DNA is limited to &lt;
                            150mers for a polynucleotide strand.
                          </td>
                        </tr>
                        <tr>
                          <td>Quality</td>
                          <td>High quality with low impurities.</td>
                          <td>
                            Level of impurities increases as DNA length exceeds
                            &gt;150mers.
                          </td>
                        </tr>
                        <tr>
                          <td>Synthesis Method</td>
                          <td>Uses natural enzymes in aqueous solution.</td>
                          <td>
                            Uses harsh environmentally unfriendly chemicals.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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
    ProductData = myProductData
  }

  var ProductData1 = []
  var requestParam = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      page_name: "DNA Synthesis"
    })
  }
  const res = await fetch(
    baseUrl + "/api/header_banners/getBanners",
    requestParam
  )
  const myProductData = await res.json()

  if (myProductData.status == 200) {
    ProductData1 = myProductData
  } else {
    ProductData1 = []
  }

  return { props: { ProductData, ProductData1 } }
}

export default connect((state) => state)(texicologyScreen)
