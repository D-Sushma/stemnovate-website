import React from "react"
import Link from "next/link"
import ModuleProductActions from "~/components/elements/products/modules/ModuleProductActions"
import useProduct from "~/hooks/useProduct"
import ModuleProductImages from "~/components/elements/products/modules/ModuleProductImages"

const Product = ({ product, userData }) => {
  const { price, badges } = useProduct()
  // console.log(product.offers_details.id);
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
          <a className="ps-product__overlay"></a>
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
            <a>{product.product_name}</a>
          </Link>
        </h4>
        {price(product.product_details)}
        {/* <ModuleProductRating /> */}
      </div>
    </div>
  )
}

export default Product
