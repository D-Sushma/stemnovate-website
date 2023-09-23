import React from "react"
import useProduct from "~/hooks/useProduct"
import dynamic from "next/dynamic"

const ModuleDetailTopInformation = dynamic(
  () =>
    import("~/components/elements/detail/modules/ModuleDetailTopInformation"),
  { loading: () => <p>Loading...</p> }
)
const ModuleProductDetailDescription = dynamic(
  () =>
    import("~/components/elements/detail/modules/ModuleDetailShoppingActions"),
  { loading: () => <p>Loading...</p> }
)
const ModuleDetailShoppingActions = dynamic(
  () =>
    import("~/components/elements/detail/modules/ModuleDetailShoppingActions"),
  { loading: () => <p>Loading...</p> }
)
const ModuleProductDetailSharing = dynamic(
  () =>
    import("~/components/elements/detail/modules/ModuleProductDetailSharing"),
  { loading: () => <p>Loading...</p> }
)
const ModuleDetailThumbnail = dynamic(
  () => import("~/components/elements/detail/modules/ModuleDetailThumbnail"),
  { loading: () => <p>Loading...</p> }
)
const ModuleDetailMeta = dynamic(
  () => import("~/components/elements/detail/modules/ModuleDetailMeta"),
  { loading: () => <p>Loading...</p> }
)
const ModuleDetailColors = dynamic(
  () => import("~/components/elements/detail/modules/ModuleDetailColors"),
  { loading: () => <p>Loading...</p> }
)
const ModuleDetailSizes = dynamic(
  () => import("~/components/elements/detail/modules/ModuleDetailSizes"),
  { loading: () => <p>Loading...</p> }
)
const ModuleDetailTabs = dynamic(() => import("./modules/ModuleDetailTabs"), {
  loading: () => <p>Loading...</p>
})
const FrequentlyBoughtTogether = dynamic(
  () => import("~/components/partials/products/FrequentlyBoughtTogether"),
  { loading: () => <p>Loading...</p> }
)

const DetailDefault = ({ product, status = "in-stock" }) => {
  const { price } = useProduct()
  let statusView
  if (status !== "out-stock") {
    statusView = <p className="ps-product__log-status">Only 3 left in stock</p>
  } else {
    statusView = <p className="ps-product__log-status outstock">Out of stock</p>
  }

  return (
    <div className="product--detail ps-product--detail">
      <div className="ps-product__header">
        <ModuleDetailThumbnail product={product} />
        <div className="ps-product__info">
          {statusView}
          <ModuleDetailTopInformation product={product} />
          <ModuleProductDetailDescription product={product} />
          {price(product)}
          <div className="ps-product__variants">
            <ModuleDetailColors />
            <ModuleDetailSizes />
          </div>
          {status !== "out-stock" && (
            <ModuleDetailShoppingActions product={product} />
          )}
          <ModuleDetailMeta />
          <ModuleProductDetailSharing />
        </div>
      </div>
      <div className="ps-product__content ">
        <FrequentlyBoughtTogether />
        <ModuleDetailTabs />
      </div>
    </div>
  )
}

export default DetailDefault
