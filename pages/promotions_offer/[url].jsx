import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { baseUrl } from "~/repositories/Repository"
import { ToastContainer } from "react-toastify"
import dynamic from "next/dynamic"
// import Container from "~/components/layouts/Container"
// import BreadCrumb from "~/components/elements/BreadCrumb"
import useGetProducts from "~/hooks/useGetProducts"
import useProductGroup from "~/hooks/useProductGroup"

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

const breadcrumb = [
  {
    id: 1,
    text: "Home",
    url: "/"
  },

  {
    id: 2,
    text: "Offers"
  }
]

function promotionOffer({ ProductData }) {
  const router = useRouter()
  const query = router.query
  console.log("ProductData", ProductData.data[0].title)
  const { loading, productItems, getPromotionalProducts } = useGetProducts()
  const { withGrid, withList } = useProductGroup()
  let products = ""

  useEffect(() => {
    var queries = {}

    if (ProductData?.data[0].id) {
      var myquery = {
        promoId: ProductData?.data[0].id
      }
      queries = Object.assign(queries, myquery)
    }
    getPromotionalProducts(queries)
    // console.log("productItems", productItems);
  }, [query])

  if (productItems && productItems.length > 0) {
    // console.log("productItems", productItems);
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

  return (
    <Container
      title={ProductData?.data[0]?.title}
      description="Stemnovate promotion is for new sales offers, discounts and multibuy savings. Subject to change so check regularly"
    >
      <ToastContainer />
      <div className="ps-page ps-page--shopping">
        <div className="ps-page__header breadcrumb-h product-breadcrumb-bg">
          <div className="container">
            <BreadCrumb breacrumb={breadcrumb} />
            <h1>Offers</h1>
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

export async function getServerSideProps({ query }) {
  var url = query.url
  var ProductData = []
  if (url) {
    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    var raw = JSON.stringify({
      url: url
    })

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    }

    const res = await fetch(
      baseUrl + "/api/promotion/getAllpromotions",
      requestOptions
    )
    const myProductData = await res.json()

    if (myProductData.status == 200) {
      ProductData = myProductData
    } else {
      ProductData = []
    }
  }

  // // Pass data to the page via props
  return { props: { ProductData } }
}

export default promotionOffer
