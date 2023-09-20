import React from "react"
import Image from '~/components/elements/Image'
import Link from 'next/link'
import { baseUrl } from "~/repositories/Repository"
import { connect } from "react-redux"
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
      text: "DNA Synthesis"
    }
  ]

  return (
    <>
      <Container 
        title="DNA-Synthesis"
        description="Stemnovate page is for new developments and innovation in field of DNA synthesis."  
      >
        <main className="ps-page ps-page--inner">
          <div className="ps-page__header  breadcrumb-h application-breadcrumb-bg">
            <div className="container ">
              <BreadCrumb breacrumb={breadcrumb} />
              <h1 className="text-center  text-white ">DNA Synthesis</h1>
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
                  <section className="ps-section--block-grid ">
                    <div className="ps-section__thumbnail">
                      <Link href="#">
                        <div className="ps-section__image link-hover-thumb-shape">
                        <Image
                          src="/static/img/applications/DNA-synthesis-update.jpg"
                          alt="Applications"
                          width={1200}
                          height={675}
                        />
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content">
                      <h2 className="text-white font-weight-bold">
                        Applications
                      </h2>

                      <div className="ps-section__desc ">
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
                          // className="mb-5"
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
                          // className="mb-5"
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
                          // className="mb-5"
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
                          // className="mb-5"
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
    ;(ProductData = myProductData)
  }

  // // Pass data to the page via props
  return { props: { ProductData } }
}

// export default texicologyScreen;
export default connect((state) => state)(texicologyScreen)
