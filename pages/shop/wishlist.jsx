import React, { useEffect } from "react"
import Container from "~/components/layouts/Container"
import BreadCrumb from "~/components/elements/BreadCrumb"
import { connect } from "react-redux"
import { caculateArrayQuantity } from "~/utilities/ecomerce-helpers"
import useEcomerce from "~/hooks/useEcomerce"
// import ModuleEcomerceWishlist from "~/components/ecomerce/modules/ModuleEcomerceWishlist"
// import SkeletonTable from "~/components/elements/skeletons/SkeletonTable"
import { Result } from "antd"
import dynamic from 'next/dynamic'

const ModuleEcomerceWishlist = dynamic(
  () => import("~/components/ecomerce/modules/ModuleEcomerceWishlist"),
  {loading: ()=> <p>Loading...</p>}
)
const SkeletonTable = dynamic(
  () => import("~/components/elements/skeletons/SkeletonTable"),
  {loading: ()=> <p>Loading...</p>}
)

const breadcrumb = [
  {
    text: "Home",
    url: "/"
  },
  {
    text: "Shop",
    url: "/Products"
  },
  {
    text: "Wishlist"
  }
]

const WishlistScreen = ({ ecomerce }) => {
  const { loading, products, getProducts } = useEcomerce()

  useEffect(() => {
    if (ecomerce) {
      getProducts(ecomerce.wishlistItems)
    }
  }, [ecomerce])
  // view
  let totalView, wishListView
  if (products && products.length > 0) {
    totalView = caculateArrayQuantity(products)
    wishListView = <ModuleEcomerceWishlist source={products} />
  } else {
    if (loading) {
      wishListView = <SkeletonTable rows={1} />
    } else {
      wishListView = (
        <Result status="warning" title="No product in your wishlist." />
      )
    }
  }
  //view

  return (
    <Container title="Wishlist" description="remove this page">
      <div className="ps-page ps-page--inner">
        <div className="container">
          <div className="ps-page__header">
            <BreadCrumb breacrumb={breadcrumb} />
            <h1 className="ps-page__heading">
              Wishlist
              {totalView ? <sup>({totalView})</sup> : ""}
            </h1>
          </div>
          <div className="ps-page__content">{wishListView}</div>
        </div>
      </div>
    </Container>
  )
}
export default connect((state) => state)(WishlistScreen)
