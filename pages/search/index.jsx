import React, { useEffect } from "react"
import { useRouter } from "next/router"
import { ToastContainer } from "react-toastify"
import dynamic from "next/dynamic"
import useGetProducts from "~/hooks/useGetProducts"
import useProductGroup from "~/hooks/useProductGroup"

const Container = dynamic(() => import("~/components/layouts/Container"), {
  loading: () => <p>Loading...</p>
})
const BreadCrumb = dynamic(() => import("~/components/elements/BreadCrumb"), {
  loading: () => <p>Loading...</p>
})
const SidebarShop = dynamic(
  () => import("~/components/shared/sidebar/SidebarShop"),
  { loading: () => <p>Loading...</p> }
)
const Shop = dynamic(() => import("~/components/partials/shop/Shop"), {
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
    text: "Shop",
    url: "/shop"
  },
  {
    id: 3,
    text: "Search result"
  }
]

const SearchResultScreen = () => {
  const Router = useRouter()
  const { keyword } = Router.query
  const { loading, productItems, getProducts } = useGetProducts()
  const { withGrid } = useProductGroup()

  useEffect(() => {
    const queries = {
      name_contains: keyword
    }
    getProducts(queries)
  }, [keyword])

  let products
  if (productItems && productItems.length > 0) {
    products = withGrid(productItems, loading, 4)
  } else {
    products = <p>No product found.</p>
  }

  return (
    <Container title={`Search result for: ${keyword}`}>
      <ToastContainer />
      <div className="ps-page ps-page--shopping">
        <div className="container">
          <div className="ps-page__header">
            <BreadCrumb breacrumb={breadcrumb} />
            <h1 className="ps-page__heading">Search result: “{keyword}”</h1>
          </div>
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
    </Container>
  )
}

export default SearchResultScreen
