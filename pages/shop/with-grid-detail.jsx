import React, { useEffect } from "react"
import dynamic from "next/dynamic"
// import Container from "~/components/layouts/Container";
// import BreadCrumb from "~/components/elements/BreadCrumb";
import useGetProducts from "~/hooks/useGetProducts"
import useProductGroup from "~/hooks/useProductGroup"
// import SidebarShop from "~/components/shared/sidebar/SidebarShop";
// import Shop from "~/components/partials/shop/Shop";
// import PromotionSecureInformation from "~/components/shared/sections/PromotionSecureInformation";
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
const ShopWithGridDetailScreen = () => {
  const { loading, productItems, getProducts } = useGetProducts()
  const { withGridDetail } = useProductGroup()

  useEffect(() => {
    const queries = {
      _limit: 12
    }
    getProducts(queries)
  }, [])

  let products
  if (productItems && productItems.length > 0) {
    products = withGridDetail(productItems, loading, 3)
  } else {
    products = withGridDetail([], loading, 3)
  }

  return (
    <Container title="Shop">
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

export default ShopWithGridDetailScreen
