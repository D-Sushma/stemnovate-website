import React, { useEffect } from "react"
import useEcomerce from "~/hooks/useEcomerce"
import { connect } from "react-redux"
import { caculateArrayQuantity } from "~/utilities/ecomerce-helpers"
import { Result } from "antd"
import dynamic from "next/dynamic"

const Container = dynamic(() => import("~/components/layouts/Container"), {
  loading: () => <p>Loading...</p>
})
const BreadCrumb = dynamic(() => import("~/components/elements/BreadCrumb"), {
  loading: () => <p>Loading...</p>
})
const SkeletonTable = dynamic(
  () => import("~/components/elements/skeletons/SkeletonTable"),
  { loading: () => <p>Loading...</p> }
)
const EcomerceCompareTables = dynamic(
  () => import("~/components/ecomerce/EcomerceCompareTables"),
  { loading: () => <p>Loading...</p> }
)

const breadcrumb = [
  {
    text: "Home",
    url: "/"
  },
  {
    text: "Shop",
    url: "/shop"
  },
  {
    text: "Compare"
  }
]
const CompareScreen = ({ ecomerce }) => {
  const { loading, products, getProducts } = useEcomerce()

  useEffect(() => {
    if (ecomerce) {
      getProducts(ecomerce.compareItems)
    }
  }, [ecomerce])

  let totalView, wishListView

  if (products && products.length > 0) {
    totalView = caculateArrayQuantity(products)
    wishListView = <EcomerceCompareTables products={products} />
  } else {
    if (loading) {
      wishListView = <SkeletonTable rows={2} />
    } else {
      wishListView = (
        <Result status="warning" title="No product in your compare listing." />
      )
    }
  }

  return (
    <Container title="Compare">
      <div className="ps-page ps-page--inner">
        <div className="container">
          <div className="ps-page__header">
            <BreadCrumb breacrumb={breadcrumb} />
            <h1 className="ps-page__heading">
              Compare
              {totalView ? <sup>({totalView})</sup> : ""}
            </h1>
          </div>
          <div className="ps-page__content">{wishListView}</div>
        </div>
      </div>
    </Container>
  )
}
export default connect((state) => state)(CompareScreen)
