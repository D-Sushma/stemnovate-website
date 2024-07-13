import React from "react"
import Link from "next/link"
import useProduct from "~/hooks/useProduct"
import dynamic from "next/dynamic"

const ModuleProductActions = dynamic(
  () => import("~/components/elements/products/modules/ModuleProductActions"),
  { loading: () => <p>Loading...</p> }
)
const ModuleProductImages = dynamic(
  () => import("~/components/elements/products/modules/ModuleProductImages"),
  { loading: () => <p>Loading...</p> }
)

const Product = ({ product, userData }) => {
  const { price, badges } = useProduct()
  const offerData = product?.offers_details?.id

  return (
    <div className="ps-product ps-product--grid">
      <div className="ps-product__thumbnail">
        <Link
          href={`/product/${product.product_slug}/${
            offerData ? offerData : ""
          }`}
          as={`/product/${product.product_slug}/${offerData ? offerData : ""}`}
        >
          <a  href={`/product/${product.product_slug}/${
            offerData ? offerData : ""
          }`}
           className="ps-product__overlay"></a>
        </Link>
        <ModuleProductImages product={product} />
        <ModuleProductActions userData={userData} product={product} />
        {badges(product.product_details)}
      </div>
      <div className="ps-product__content">
        <h4 className="ps-product__title">
          <Link
            href={`/product/${product.product_slug}/${
              offerData ? offerData : ""
            }`}
            as={`/product/${product.product_slug}/${
              offerData ? offerData : ""
            }`}
          >
            <a  href={`/product/${product.product_slug}/${
              offerData ? offerData : ""
            }`}>{product.product_name}</a>
          </Link>
        </h4>
        {price(product.product_details)}
        {/* <ModuleProductRating /> */}
      </div>
    </div>
  )
}

export default Product
