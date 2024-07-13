import React from "react"
import { baseUrl } from "~/repositories/Repository"
import { connect } from "react-redux"
import Link from "next/link"
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
      text: "Cell Culture",
      url: "/Products/Cell-Culture"
    },

    {
      id: 4,
      text: "Media"
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
        title="Media | Your Drug Discovery Platform"
        ogimg={ogImage}
        description={ogDesc}
      >
        <main className="ps-page ps-page--inner">
          <div
            className="ps-page__header  breadcrumb-h banner-breadcrumb-bg"
          >
            <BannerImage
            alt="media-banner"
            src={bgImage}
            layout="fill"
            objectFit="cover"
            priority={true}
            style={{
              zIndex: -1
            }}
          />
            <div className="container ">
              <BreadCrumb breacrumb={breadcrumb} />{" "}
              <h1 className="text-center  text-white p-2">
                {ProductData?.ProductData?.data[0]?.banner_content}
              </h1>
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
                  <div className="row pt-3">
                    <div className="col-md-6 text-center mb-15">
                      <div>
                        <div className="overflow-hidden ps-banner__image image-box-container mx-2 image-box-container-mb">
                          <Image
                            src="/static/img/products/cell-culture/Chemically-Defined-Media.svg"
                            alt="CHEMICALLY DEFINED MEDIA"
                            width={640}
                            height={360}
                            quality={80}
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
                        <div className="overflow-hidden ps-banner__image image-box-container mx-2 image-box-container-mb">
                          <Image
                            // className="ps-banner__image"
                            src="/static/img/products/cell-culture/Animal-Component-Free-Media.svg"
                            alt="ANIMAL COMPONENT FREE MEDIA"
                            width={640}
                            height={360}
                            quality={80}
                          />
                        </div>
                        <h2 className="m-4">ANIMAL COMPONENT FREE MEDIA</h2>
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
                  <section className="ps-section--block-grid pt-3">
                    <div className="ps-section__thumbnail">
                      <Link href="#">
                        <div className="ps-section__image link-hover-thumb-shape image-box-container mx-2 image-box-container-mb">
                          <Image
                            src="/static/img/products/cell-culture/Classical-cell-culture-Media.jpg"
                            alt="CLASSICAL CELL CULTURE MEDIA"
                            width={640}
                            height={360}
                            quality={80}
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
      page_name: "Media"
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

export default connect((state) => state)(categoryListScreen)
