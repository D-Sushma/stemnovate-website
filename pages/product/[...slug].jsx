import React, { useEffect } from "react"
import { useRouter } from "next/router"
import { baseUrl } from "~/repositories/Repository"
import dynamic from "next/dynamic"

const Container = dynamic(() => import("~/components/layouts/Container"), {
  loading: () => <p>Loading...</p>
})
const BreadCrumb = dynamic(() => import("~/components/elements/BreadCrumb"), {
  loading: () => <p>Loading...</p>
})
const SkeletonProductDetail = dynamic(
  () => import("~/components/elements/skeletons/SkeletonProductDetail"),
  { loading: () => <p>Loading...</p> }
)
const DetailThree = dynamic(
  () => import("~/components/elements/detail/DetailThree"),
  { loading: () => <p>Loading...</p> }
)

const DetailLayoutThree = ({ ProductData }) => {
  const router = useRouter()

  const htmlContent = ProductData?.ProductsList[0].short_description
  var stripedHtml = htmlContent.replace(/<[^>]+>/g, "")

  var ogImage = ""
  var images = []
  var products_img = ProductData?.ProductsList[0].product_image.split(",")
  if (products_img && products_img.length > 0) {
    products_img.map((item) => {
      images.push(`${process.env.AWS_S3BUCKET_URL}${item}`)
    })
    ogImage = images[0]
  }

  useEffect(() => {
    console.log("ProductData", ProductData)
    if (ProductData.status == undefined) {
      router.push("/Products")
    }
    console.log("stripedHtml", stripedHtml)
  }, [ProductData])

  // View area
  let productView
  if (ProductData?.status == 200) {
    if (ProductData.status != 200) {
      productView = (
        <div className="container">
          <SkeletonProductDetail />
        </div>
      )
    } else {
      productView = <DetailThree product={ProductData?.ProductsList[0]} />
    }
  }

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
      text: ProductData?.ProductsList[0]?.product_name
    }
  ]
  var myConical = router.asPath
  if (ProductData?.ProductsList[0]?.category.id == 13) {
    myConical = "/Products/Biobanking/Primary-Cells-Human"
  } else if (ProductData?.ProductsList[0]?.category.id == 14) {
    myConical = "/Products/Biobanking/Primary-Cells-Animal"
  } else if (ProductData?.ProductsList[0]?.category.id == 15) {
    myConical = "/Products/Biobanking/Induced-Pluripotent-Stem-Cells"
  } else if (ProductData?.ProductsList[0]?.category.id == 19) {
    myConical = "/Products/Cell-Culture/Media"
  } else if (ProductData?.ProductsList[0]?.category.id == 56) {
    myConical = "/Products/Diagnostics-products"
  }

  return (
    <Container
      title={ProductData?.ProductsList[0]?.product_name}
      ogimg={ogImage}
      description={stripedHtml}
      cronical={myConical}
    >
      <div className="ps-page ps-page--product layout-3">
        <div className="ps-page__header  products-breadcrumb-bg mb-4">
          <div className="container">
            <BreadCrumb breacrumb={breadcrumb} />
          </div>
        </div>
        <div className="container">
          <div className="ps-page__content">{productView}</div>
        </div>
      </div>
    </Container>
  )
}

export async function getServerSideProps({ query }) {
  var slug = query.slug
  console.log(slug)
  var ProductData = []
  if (slug != undefined) {
    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    var raw = JSON.stringify({
      slug: slug[0],
      promoId: slug[1]
    })

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    }

    const res = await fetch(
      baseUrl + "/api/products/productname",
      requestOptions
    )
    const myProductData = await res.json()

    if (myProductData.status == 200) {
      ProductData = myProductData
    } else {
      ProductData = []
    }
  }
  return { props: { ProductData } }
}

export default DetailLayoutThree
