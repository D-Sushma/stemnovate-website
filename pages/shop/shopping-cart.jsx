import React, { useEffect } from "react"
import Link from "next/link"
import { connect } from "react-redux"
import { calculateCartQuantity } from "~/utilities/ecomerce-helpers"
import { Result } from "antd"
import dynamic from "next/dynamic"
// import Container from "~/components/layouts/Container";
// import BreadCrumb from "~/components/elements/BreadCrumb";
import useEcomerce from "~/hooks/useEcomerce";

const Container = dynamic(() => import("~/components/layouts/Container"), {
  loading: () => <p>Loading...</p>
})
const BreadCrumb = dynamic(() => import("~/components/elements/BreadCrumb"), {
  loading: () => <p>Loading...</p>
})
const ModuleEcomerceCartItems = dynamic(
  () => import("~/components/ecomerce/modules/ModuleEcomerceCartItems"),
  { loading: () => <p>Loading...</p> }
)
const ModuleEcomerceCartSummary = dynamic(
  () => import("~/components/ecomerce/modules/ModuleEcomerceCartSummary"),
  { loading: () => <p>Loading...</p> }
)
const SkeletonTable = dynamic(
  () => import("~/components/elements/skeletons/SkeletonTable"),
  { loading: () => <p>Loading...</p> }
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
    text: "Shopping cart"
  }
]

const ShoppingCart = ({ ecomerce }) => {
  const { loading, products, getProducts } = useEcomerce()

  useEffect(() => {
    if (ecomerce.cartItems) {
      getProducts(ecomerce.cartItems, "cart")
    }
  }, [ecomerce])

  // Views
  let cartContentView, totalView
  if (products && products.length > 0) {
    totalView = calculateCartQuantity(products)
    cartContentView = (
      <>
        <div className="ps-cart--primary">
          <div className="ps-cart__content">
            <div className="ps-cart__items">
              <ModuleEcomerceCartItems cartItems={products} />
            </div>
            <div className="ps-cart__actions">
              <div className="ps-cart__link my-4">
                <Link href="/Products" prefetch={false}>
                  <a className="ps-btn ps-btn--orange">Back to shop</a>
                </Link>
              </div>
              <div className="ps-cart__coupon"></div>
            </div>
          </div>
          <div className="ps-cart__order-summary">
            <ModuleEcomerceCartSummary cartItems={products} />
          </div>
        </div>
      </>
    )
  } else {
    if (loading) {
      cartContentView = (
        <div className="ps-cart--primary">
          <div className="ps-cart__content">
            <div className="ps-cart__items">
              <SkeletonTable rows={2} />
            </div>
          </div>
          <div className="ps-cart__order-summary">
            <ModuleEcomerceCartSummary />
          </div>
        </div>
      )
    } else {
      cartContentView = <Result status="warning" title="No product in cart." />
    }
  }

  return (
    <Container title="Shopping Cart">
      <div className="ps-page ps-page--shopping">
        <div className="container">
          <div className="ps-page__header">
            <BreadCrumb breacrumb={breadcrumb} />
            <h1 className="ps-page__heading">
              Shopping cart
              {totalView ? <sup>({totalView})</sup> : ""}
            </h1>
          </div>
          <div className="ps-page__content">{cartContentView}</div>
        </div>
      </div>
    </Container>
  )
}
export default connect((state) => state)(ShoppingCart)
