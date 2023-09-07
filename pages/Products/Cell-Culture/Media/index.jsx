import React from "react"
import BreadCrumb from "~/components/elements/BreadCrumb"
import Container from "~/components/layouts/Container"
import { baseUrl } from "~/repositories/Repository"
import { connect } from "react-redux"
// import ProductList from "~/components/productList/productList"
// import Subscribe from "~/components/shared/sections/Subscribe"
import Link from 'next/link'
import Image from '~/components/elements/Image'
import dynamic from 'next/dynamic'

const ProductList = dynamic(
    () => import("~/components/productList/productList"),
    {loading: ()=> <p>Loading...</p>}
  )
const Subscribe = dynamic(
    () => import("~/components/shared/sections/Subscribe"),
    {loading: ()=> <p>Loading...</p>}
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
      text: "Products",
      url: "/Products"
    },

    {
      id: 3,
      text: "Cell Culture",
      url: "/Products/Cell-Culture"
    },

    {
      id: 4,
      text: "Media"
    }
  ]

  return (
    <>
      <Container
        title="Media"
        description={`Choose from various formats of cell culture media chemically defined, animal component-free, and classical cell culture media`}
      >
        <main className="ps-page ps-page--inner">
          <div className="ps-page__header  breadcrumb-h product-breadcrumb-bg">
            <div className="container ">
              <BreadCrumb breacrumb={breadcrumb} />{" "}
              <h1 className="text-center  text-white p-2">Media</h1>
            </div>
          </div>

          <div className="ps-page__content">
            <div className="ps-about">
              <div className=" about-section ">
                <div className="container">
                  <div className="center-box">
                    <p className=" vertical-center">
                      We produce cell culture media in various formats, with or
                      without serum, and containing different types of
                      supplements to support several cell types and
                      applications. Choose from chemically-defined, animal
                      component-free, and classical cell culture media to
                      support the optimal growth of your cells.
                    </p>
                  </div>
                </div>
              </div>

              <div className=" bg-02-section">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 text-center">
                      <div>
                        <div className="overflow-hidden">
                          <Image
                            className="ps-banner__image"
                            src="/static/img/products/cell-culture/Chemically-Defined-Media.jpg"
                            alt="CHEMICALLY DEFINED MEDIA"
                            width={1200}
                            height={675}
                          />
                        </div>
                        <h2 className="m-4">CHEMICALLY DEFINED MEDIA</h2>
                        <p className="mx-4">
                          This media is for in vitro human or animal cell
                          culture. As we optimize all the chemical components
                          this type of media is suitable for industrial projects
                          where reproducibility is crucial.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 text-center">
                      <div>
                        <div className="overflow-hidden">
                          <Image
                            className="ps-banner__image"
                            src="/static/img/products/cell-culture/Animal-Component-Free-Media.jpg"
                            alt="ANIMAL COMPONENT FREE MEDIA"
                            width="500px"
                            height="285px"
                          />
                        </div>
                        <h2 className=" m-4">ANIMAL COMPONENT FREE MEDIA</h2>
                        <p className="mx-4  ">
                          The animal component free media is suitable for human
                          cell culture such as drug testing, mechanism of action
                          studies or cellular differentiation or for adapting
                          for therapeutic applications.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" about-section">
                <div className="container">
                  <section className="ps-section--block-grid ">
                    <div className="ps-section__thumbnail">
                      <Link href="#">
                        <div className="ps-section__image link-hover-thumb-shape">
                        <Image
                          src="/static/img/products/cell-culture/Classical-cell-culture-Media.jpg"
                          alt="CLASSICAL CELL CULTURE MEDIA"
                          width={1000}
                          height={563}
                        />
                        </div>
                      </Link>
                    </div>
                    <div className="ps-section__content">
                      <h2 className=" font-weight-bold">
                        CLASSICAL CELL CULTURE MEDIA
                      </h2>

                      <div className="ps-section__desc ">
                        <p className="">
                          The classical media composition may contain serum or
                          components to allow long term culture or for general
                          cell-based assays or vitro studies.
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>

              <div className="about-section">
                <div className="container">
                  <ProductList slug="Media" />
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

// export default categoryListScreen;
export default connect((state) => state)(categoryListScreen)
