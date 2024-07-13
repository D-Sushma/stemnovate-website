import React from "react"
import Link from "next/link"
import useProduct from "~/hooks/useProduct"
import dynamic from "next/dynamic"

const ModuleProductActions = dynamic(
  () => import("~/components/elements/products/modules/ModuleProductActions"),
  { loading: () => <p>Loading...</p> }
)
const ModuleProductRating = dynamic(
  () => import("~/components/elements/products/modules/ModuleProductRating"),
  { loading: () => <p>Loading...</p> }
)
const ModuleProductImages = dynamic(
  () => import("~/components/elements/products/modules/ModuleProductImages"),
  { loading: () => <p>Loading...</p> }
)

const ProductGridWithDetail = ({ product }) => {
  const { price, badges } = useProduct()

  return (
    <div className="ps-product ps-product--standard ps-product--grid-with-detail">
      <div className="ps-product__thumbnail">
        <ModuleProductImages product={product} />
        {badges(product)}
      </div>
      <div className="ps-product__content">
        <div className="ps-product__categories">
          <Link href="/shop">
            <a href="/shop">Thermometer Brand</a>
          </Link>
        </div>
        <h4 className="ps-product__title">
          <Link href="/product/[pid]" as={`/product/${product.id}`}>
            <a href="/product/[pid]">{product.name}</a>
          </Link>
        </h4>
        {price(product)}
        <ModuleProductRating />
        <ul className="ps-product__short-desc">
          <li>Study history up to 30 days</li>
          <li>Up to 5 users simultaneously</li>
          <li>Has HEALTH certificate</li>
        </ul>
        <ModuleProductActions product={product} type="horizontal" />
      </div>
    </div>
  )
}

export default ProductGridWithDetail
