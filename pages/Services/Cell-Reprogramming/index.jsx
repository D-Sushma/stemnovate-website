import React from "react"
import { connect } from "react-redux"
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
      text: "Cellular Reprogramming"
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
    <Container
      title="Cellular Reprogramming | Your Drug Discovery Platform"
      ogimg={ogImage}
      description={ogDesc}
    >
      <main className="ps-page ps-page--inner">
        <div className="ps-page__header breadcrumb-h banner-breadcrumb-bg">
          <BannerImage
            alt="cell-reprogramming-banner"
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
            <h1 className="text-center  text-white ">
              {ProductData?.ProductData?.data[0]?.banner_content}
            </h1>
          </div>
        </div>

        <div className="ps-page__content ">
          <div className="ps-about">
            <div className=" about-section ">
              <div className="container">
                <div>
                  <p>
                    We provide the best human cell models for drug discovery and
                    disease modelling using cellular reprogramming. The ethical
                    method uses adult skin or blood cells donated by volunteers
                    and is core to our biobank, reflecting human diversity in
                    age, gender, and ethnicity.
                  </p>
                </div>
              </div>
            </div>

            <div className="plus-section">
              <div className="container">
                <section className="ps-section--block-grid pt-3">
                  <div className="ps-section__thumbnail mr-5">
                    <Link href="#">
                      <div className="ps-section__image link-hover-thumb-shape image-box-container-cell-programming  mx-2">
                        <Image
                          src="/static/img/services/Cell-Reprogramming.svg"
                          alt="Cell Reprogramming"
                          // width={518}
                          // height={292}
                          height={360}
                          width={640}
                          quality={80}
                          priority={true}
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="ps-section__content ps-section__content__cell">
                    <div className="ps-section__desc ">
                      <h2 className="p-1 text-white font-weight-bold">
                        Cell Reprogramming
                      </h2>
                      <div>
                        <p className="text-white">
                          Cellular reprogramming unleashes endless possibilities
                          within drug development and research. It directs
                          cellular identity to produce a therapeutically
                          valuable cell type. </p>
                        <p className="text-white">
                          The potential to grow and maintain
                          any cell type of interest has excellent clinical
                          value, creating the opportunity to develop a scalable
                          and functional cell source for ex vivo cell therapy
                          development, and explore novel therapeutic modalities.</p>
                        <p className="text-white">
                          Unfortunately, generating induced pluripotent stem
                          cells can often be a costly and time-consuming
                          process.
                        </p>
                        <p className="text-white">
                          Stemnovate offers custom reprogramming services,
                          saving you the time which can be better spent
                          performing valuable research experiments.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <div className=" about-section ">
              <div className="container center-box">
                <div className="vertical-center">
                  <h2 className="p-1 text-center font-weight-bold">
                    More Information
                  </h2>
                  <p>
                    Cellular reprogramming involves transient expression of
                    inducible genes to generate stable lines. The stable IPSC
                    lines are selected through stringent pluripotency
                    characterisation and the ability of cells to differentiate
                    into derivatives of three germ layers.
                  </p>
                  <p>
                    Cell fates during development are neither restrictive nor
                    irreversible. Pluripotent cells can form all somatic
                    lineages.
                  </p>
                  <p>
                    Cellular reprogramming has multiple applications: we can now
                    convert a patient's blood cells to study any organ's disease
                    process; cellular reprogramming could also be used to
                    evaluate the efficacy and safety of newly developed drugs on
                    human patient cells, or test drugs that might have side
                    effects in only a small subpopulation of patients in a
                    personalised manner before administration.
                  </p>
                  <p>
                    Stemnovate has a commercial license for IPS technology, and
                    with that, we have molecular design and analysis capability
                    for efficient reprogramming.
                  </p>
                </div>
              </div>
            </div>
            <div className=" about-section ">
              <div className="container ">
                <div className="center-box">
                  <div className="vertical-center">
                    <div className="overflow-hidden">
                      <div
                        className="ps-banner__image ml-auto mr-auto"
                        style={{ width: "100%" }}
                      >
                        <video
                          src="/static/img/services/ReprogrammingDifferentiation.mp4"
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
              </div>
            </div>
            <Subscribe />
          </div>
        </div>
      </main>
    </Container>
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
      page_name: "Cell Reprogramming"
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

export default connect((state) => state)(texicologyScreen)
