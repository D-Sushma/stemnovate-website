import React, { useEffect } from "react"
import { useRouter } from "next/router"
import dynamic from "next/dynamic"
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

import { ToastContainer } from "react-toastify"

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

const ProductScreen = () => {
  const { loading, productItems, getProducts } = useGetProducts()
  const { withGrid, withList } = useProductGroup()
  const router = useRouter()
  const { query } = router
  const { _limit, _orderBy, gender, Delivery_Type, pType } = router.query
  let products = ""

  useEffect(() => {
    console.log("query", query)

    var queries = {
      _limit: 10
    }

    if (_limit || _orderBy) {
      queries = Object.assign(queries, query)
    }

    if (gender) {
      queries = Object.assign(queries, query)
    }

    if (Delivery_Type) {
      queries = Object.assign(queries, query)
    }

    if (pType) {
      queries = Object.assign(queries, query)
    }

    console.log(queries)
    getProducts(queries)
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
    <Container title="Shop">
      <ToastContainer />
      <div className="ps-page ps-page--shopping">
        <div className="ps-page__header breadcrumb-h product-breadcrumb-bg">
          <div className="container">
            <BreadCrumb breacrumb={breadcrumb} />
            <h1>Products</h1>
          </div>
        </div>
        <div className="ps-page__content">
          <div className="ps-about">
            <div className="about-section">
              <div className="container">
                <div className="ps-page__content">
                  <div className="ps-layout--with-sidebar">
                    <div className="ps-layout__left">
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

export default ProductScreen
