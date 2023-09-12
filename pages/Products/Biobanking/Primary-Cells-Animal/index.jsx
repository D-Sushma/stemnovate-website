import React from "react"
// import BreadCrumb from "~/components/elements/BreadCrumb"
// import Container from "~/components/layouts/Container"
import Link from "next/link"
import Image from "~/components/elements/Image"
import EthicalTissueSourcing from "~/public/static/img/products/Primary-Cells-Animal/Ethical-Tissue-sourcing.jpg"
import OurAnimalCellPlatform from "~/public/static/img/products/Primary-Cells-Animal/Our-animal-cell-platform.gif"
import InternationalShipping from "~/public/static/img/products/Primary-Cells-Animal/International-Shipping.jpg"
import AnimalCellCultureMedium from "~/public/static/img/products/Primary-Cells-Animal/Animal-Cell-Culture-Medium-and-reagents.jpg"
import AnimalWelfare from "~/public/static/img/products/Primary-Cells-Animal/Animal-welfare.jpg"
import { baseUrl } from "~/repositories/Repository"
import { connect } from "react-redux"
import dynamic from "next/dynamic"

const Container = dynamic(() => import("~/components/layouts/Container"), {
  loading: () => <p>Loading...</p>
})
const BreadCrumb = dynamic(() => import("~/components/elements/BreadCrumb"), {
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
const categoryListScreen = () => {
  const breadcrumb = [
    {
      id: 1,
      text: "Home",
      url: "/"
    },

    {
      id: 2,
      text: "Biobanking",
      url: "/Products/Biobanking"
    },
    {
      id: 3,
      text: "Primary Cells Animal"
    }
  ]

  return (
    <>
      <Container
        title="Primary Cells Animal"
        description={`We have animal fibroblasts frozen and live primary dermal cells derived from dogs of different types like`}
      >
        <main className="ps-page ps-page--inner">
          <div className="ps-page__header  breadcrumb-h product-primary-animal-breadcrumb-bg">
            <div className="container ">
              <BreadCrumb breacrumb={breadcrumb} />
            </div>
            <h1 className="text-center  text-white p-2">
              Primary Cells Animals
            </h1>
          </div>

          <div className="ps-page__content">
            <div className="ps-about">
              <div className=" about-section ">
                <div className="container">
                  <div className="center-box">
                    <p className=" vertical-center">
                      Primary cell culture provides an alternative to in vivo
                      animal studies, a regulated sector. The advantage of in
                      vitro, i.e. culturing cells in the laboratory, is that
                      scientists can study cellular properties. At the same
                      time, novel tissue engineering techniques allow users to
                      create tissue-specific models. However, due to vast
                      differences in the physiology between humans and other
                      animal species, human cell culture protocols adapted for
                      animal cells remain suboptimal. At Stemnovate, we are
                      creating cell-based in vitro systems for drug discovery.
                      In addition, our work includes defining species-specific
                      characteristics, biomarkers and cell culture media to
                      mimic aspects of the specific tissues precisely to the
                      animal species. As primary cells have limited capacity to
                      grow in the laboratory, we have built an excellent new
                      insights platform where we have reprogrammed animal cells
                      from feline, canine, equine and bovine. These stem cells
                      are an ethical way of creating multiple cell types in the
                      laboratoryand pave the way for reducing, replacing and
                      refining animal testing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-02-section-new">
                <div className="bg-02-section-animal"></div>
                <div className="container">
                  <section className="ps-section--block-grid ">
                    <div className="ps-section__thumbnail">
                      <Link href="#">
                        <div className="ps-section__image link-hover-thumb-shape">
                          <Image
                            src={EthicalTissueSourcing}
                            alt="ANIMAL PRIMARY DERMAL CELLS"
                            width={1200}
                            height={675}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content">
                      <div className="ps-section__desc ">
                        <h2 className="text-white">ETHICAL TISSUE SOURCING</h2>
                        <p className="text-white">
                          We have established an ethical tissue donation process
                          for animal tissues. We work with veterinary clinics
                          and institutions, and owners make an informed decision
                          about donating tissues for our work during routine
                          surgical procedures. In addition, we are innovating to
                          reduce animal testing by creating multiple cell types
                          through cellular reprogramming. It is in our ethos to
                          work for animal welfare. Therefore our team is
                          dedicated to providing the best of technology and
                          scientific know-how for cell-based assays, thereby
                          reducing the need for testing on laboratory animals.
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
                            src={OurAnimalCellPlatform}
                            alt="LIVE PRIMARY DERMAL CELLS"
                            width={400}
                            height={220}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content">
                      <div className="ps-section__desc">
                        <h2>ANIMAL CELL PLATFORM</h2>
                        <p>
                          All animal tissues sourced ethically and without
                          harming animals are quality assured for microbial
                          contamination and notifiable diseases. Cells are
                          cultured in a species-specific media and used for
                          creating cell models or becoming part of our biobank
                          on being cryopreserved. You can order cells from
                          multiple species through e-commerce on our website.
                        </p>
                      </div>

                      <div className="ps-section__desc">
                        <h2>QUALITY ASSURANCE</h2>
                        <p>
                          Animal primary cells are tested negative for
                          species-specific notifiable diseases. The cells tested
                          negative for Mycoplasma and other microbial
                          contaminations, such as Mycobacterium, among other
                          species-specific diseases. The certificate of analysis
                          is available with all products
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="container">
                  <h2>APPLICATIONS</h2>
                  <p>
                    Our animal cell products are for cell-based assays for
                    industry and academia. We routinely reprogram cells from
                    different species and differentiate them into multiple
                    types. These have enormous potential for replacing animal
                    testing for drug discovery. We are modelling through
                    organoid and organotypic and novel tissue engineering
                    techniques. Our interest areas include
                    <ol>
                      <li>
                        <p>Skin, wound healing, and atopic dermatitis</p>
                      </li>
                      <li>
                        <p>Bone and muscle repair and regeneration</p>
                      </li>
                      <li>
                        <p>Molecular mechanisms of pain</p>
                      </li>
                      <li>
                        <p>Cell models for infectious diseases</p>
                      </li>
                    </ol>
                    <Link href="/Applications/Animal-Health">
                      <button className="btn btn-lg button-orange text-white m-4 m-5">
                        Find Out More
                      </button>
                    </Link>
                  </p>
                </div>
              </div>

              <div className="bg-02-section">
                <div className="container">
                  <section className="ps-section--block-grid ">
                    <div className="ps-section__thumbnail">
                      <Link href="#">
                        <div className="ps-section__image link-hover-thumb-shape">
                          <Image
                            src={InternationalShipping}
                            alt="INTERNATIONAL SHIPPING"
                            width={1200}
                            height={675}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content">
                      <div className="ps-section__desc">
                        <h2>INTERNATIONAL SHIPPING</h2>
                        <p>
                          We are based in the United Kingdom and routinely ship
                          cells across the European Union and the USA. In
                          addition, we have processes to ship to any other part
                          of the world, but following country-specific
                          regulations. We ship cells in a live format or
                          cryopreserved cells with dry ice.
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
                            src={AnimalCellCultureMedium}
                            alt="ANIMAL CELL CULTURE MEDIUM AND REAGENTS"
                            width={1200}
                            height={675}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content">
                      <div className="ps-section__desc">
                        <h2>ANIMAL CELL CULTURE MEDIUM AND REAGENTS</h2>
                        <p>
                          We provide species-specific cell culture medium. In
                          addition, we can tailor-make media to meet specific
                          project requirements.
                        </p>
                        <p>
                          You can contact us for customization, training and
                          consultation.
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
                            src={AnimalWelfare}
                            alt="ANIMAL WELFARE"
                            width={1200}
                            height={675}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content">
                      <div className="ps-section__desc">
                        <h2>ANIMAL WELFARE</h2>
                        <p>
                          We provide alternatives to animal testing while our
                          team actively promotes animal welfare by raising
                          awareness and supporting charities dedicated to caring
                          for abandoned and sick animals.
                        </p>
                        <p>
                          Join our team of scientists and help create a better
                          world through scientific aptitude and discoveries for
                          our furry friends.
                        </p>
                        <Link href="/Applications/Animal-Health">
                          <button className="btn btn-lg button-orange text-white m-4 m-5">
                            Find Out More
                          </button>
                        </Link>
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
                    <Link href="mailto:info@stemnovate.co.uk">
                      <span className="text-orange span-with-link">
                        contact us.
                      </span>
                    </Link>{" "}
                  </p>
                  <p className="base-bg-primary text-white p-2">
                    Stemnovate cell production follows compliance and
                    regulations in the UK. We hold the Human Tissue Act License,
                    and all cells are sourced under complete consent for
                    commercial use.
                  </p>
                  <ProductList slug="Primary-Cells-Animal" />
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

  // // Pass data to the page via props
  return { props: { ProductData } }
}

// export default categoryListScreen;
export default connect((state) => state)(categoryListScreen)
