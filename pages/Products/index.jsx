import React, { useEffect } from "react"
import { useRouter } from "next/router"
import dynamic from "next/dynamic"
import useGetProducts from "~/hooks/useGetProducts"
import useProductGroup from "~/hooks/useProductGroup"
import { ToastContainer } from "react-toastify"
import { baseUrl } from "~/repositories/Repository"

const Container = dynamic(() => import("~/components/layouts/Container"), {
  loading: () => <p>Loading...</p>
})
const BreadCrumb = dynamic(() => import("~/components/elements/BreadCrumb"), {
  loading: () => <p>Loading...</p>
})
const Shop = dynamic(() => import("~/components/partials/shop/Shop"), {
  loading: () => <p>Loading...</p>
})
const SidebarShop = dynamic(
  () => import("~/components/shared/sidebar/SidebarShop"),
  { loading: () => <p>Loading...</p> }
)
const Subscribe = dynamic(
  () => import("~/components/shared/sections/Subscribe"),
  { loading: () => <p>Loading...</p> }
)
const BannerImage = dynamic(() => import("~/components/elements/BannerImage"), {
  loading: () => <p>Loading...</p>
})

const breadcrumb = [
  {
    id: 1,
    text: "Home",
    url: "/"
  },

  {
    id: 2,
    text: "Products"
  }
]

const ProductScreen = (ProductData) => {
  const { loading, productItems, getProducts } = useGetProducts()
  const { withGrid, withList } = useProductGroup()
  const router = useRouter()
  const { query } = router
  const { _limit, _orderBy, gender, Delivery_Type, pType } = router.query
  let products = ""

  var titleName = "Our Products "

  useEffect(() => {
    var queries = {
      _limit: 10
    }

    if (_limit || _orderBy) {
      queries = Object.assign(queries, query)
    }

    if (Delivery_Type) {
      queries = Object.assign(queries, query)
    }

    if (pType) {
      queries = Object.assign(queries, query)
    }

    if (gender) {
      queries = Object.assign(queries, query)
    }

    getProducts(queries)
  }, [query])

  if (Delivery_Type) {
    titleName = titleName + " - " + Delivery_Type
  }

  if (pType) {
    if (pType == 13) {
      titleName = titleName + " - Human"
    }
    if (pType == 14) {
      titleName = titleName + " - Animal"
    }
  }

  if (gender) {
    titleName = titleName + " - " + gender
  }

  if (productItems && productItems.length > 0) {
    if (query) {
      if (query.layout === "list") {
        products = withList(productItems, loading, 4)
      } else if (query.layout === "grid") {
        products = withGrid(productItems, loading, 4)
        switch (query.columns) {
          case "2":
            products = withGrid(productItems, loading, 2)
            break
          case "3":
            products = withGrid(productItems, loading, 3)
            break
          default:
            products = withGrid(productItems, loading, 4)
            break
        }
      } else {
        products = withGrid(productItems, loading, 4)
      }
    } else {
      products = withGrid(productItems, loading, 4)
    }
  }

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
      title={titleName + " | Your Drug Discovery Platform"}
      ogimg={ogImage}
      description={ogDesc}
    >
      <ToastContainer />
      <div className="ps-page ps-page--shopping">
        <div className="ps-page__header  breadcrumb-h  banner-breadcrumb-bg">
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
          <div className="ps-about">
            <div className="about-section">
              <div className="container">
                <div className="ps-page__content">
                  <div className="ps-layout--with-sidebar">
                    <div className="ps-layout__left p-3">
                      <SidebarShop />
                    </div>
                    <div className="ps-layout__right">
                      <Shop classes="ps-shop--grid">{products}</Shop>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Subscribe />
          </div>
        </div>
      </div>
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
      page_name: "Products"
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

export default ProductScreen
