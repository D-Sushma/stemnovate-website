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

const ProductWithAvailable = ({ product }) => {
  const { price, onSale } = useProduct()

  return (
    <div className="ps-product ps-product--grid">
      <div className="ps-product__thumbnail">
        <Link href="/product/[id]" as={`/product/${product.id}`}>
          <a className="ps-product__overlay"></a>
        </Link>
        <ModuleProductImages product={product} />
        <ModuleProductActions product={product} />
        {onSale(product)}
      </div>
      <div className="ps-product__content">
        <h4 className="ps-product__title">
          <Link href="/product/[id]" as={`/product/${product.id}`}>
            <a>{product.name}</a>
          </Link>
        </h4>
        {price(product)}
        <ModuleProductRating />
        <div className="ps-product__number-available">
          <span>
            No of pcs <br /> available
          </span>
          <strong>24</strong>
        </div>
      </div>
    </div>
  )
}

export default ProductWithAvailable
