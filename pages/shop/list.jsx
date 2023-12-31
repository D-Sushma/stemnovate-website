import React, { useEffect } from "react"
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
const PromotionSecureInformation = dynamic(
  () => import("~/components/shared/sections/PromotionSecureInformation"),
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
    text: "Shop",
    url: "/shop"
  },
  {
    id: 3,
    text: " Face Masks - protective"
  }
]
const ShopProductList = () => {
  const { loading, productItems, getProducts } = useGetProducts()
  const { withList } = useProductGroup()

  useEffect(() => {
    const queries = {
      _limit: 12
    }
    getProducts(queries)
  }, [])

  let products
  if (productItems && productItems.length > 0) {
    products = withList(productItems, loading, 3)
  } else {
    products = withList([], loading, 4)
  }

  return (
    <Container title="Shop List">
      <div className="ps-page ps-page--shopping">
        <div className="container">
          <div className="ps-page__header">
            <BreadCrumb breacrumb={breadcrumb} />
            <h1 className="ps-page__heading">
              Face Masks - protective
              <sup>(150)</sup>
            </h1>
          </div>
          <div className="ps-page__content">
            <div className="ps-layout--with-sidebar">
              <div className="ps-layout__left">
                <SidebarShop />
              </div>
              <div className="ps-layout__right">
                <Shop>{products}</Shop>
                <PromotionSecureInformation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ShopProductList
