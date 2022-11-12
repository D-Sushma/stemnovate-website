import React from "react"
import Link from "next/link"
import useProduct from "~/hooks/useProduct"
const ProductOnCart = ({ product, children, simple = false }) => {
  const { price } = useProduct()
  const images = product.product_image.split(",")
  if (simple) {
    return (
      <div className="ps-product--on-cart simple">
        <div className="ps-product__thumbnail">
          {product.resources_category ? (
            <Link
              href={`/resources/details/${product.resources_category_resourcesToresources_category.slug}/${product.resources_id}/${product.access_type}`}
              as={`/resources/details/${product.resources_category_resourcesToresources_category.slug}/${product.resources_id}/${product.access_type}`}
            >
              <a className="ps-product__overlay"></a>
            </Link>
          ) : (
            <Link
              href={`/product/${product.product_slug}`}
              as={`/product/${product.product_slug}`}
            >
              <a className="ps-product__overlay"></a>
            </Link>
          )}

          <img
            src={`${process.env.AWS_S3BUCKET_URL}${images[0]}`}
            alt={product?.product_name}
          />
        </div>
        <div className="ps-product__content">
          <h4 className="ps-product__title">
            {product.resources_category ? (
              <Link
                href={`/resources/details/${product.resources_category_resourcesToresources_category.slug}/${product.resources_id}/${product.access_type}`}
                as={`/resources/details/${product.resources_category_resourcesToresources_category.slug}/${product.resources_id}/${product.access_type}`}
              >
                <a>{product.product_name}</a>
              </Link>
            ) : (
              <Link
                href={`/product/${product.product_slug}`}
                as={`/product/${product.product_slug}`}
              >
                <a>{product.product_name}</a>
              </Link>
            )}
          </h4>
        </div>
      </div>
    )
  } else {
    return (
      <div className="ps-product--on-cart">
        <div className="ps-product__thumbnail">
          {product.resources_category ? (
            <Link
              href={`/resources/details/${product.resources_category_resourcesToresources_category.slug}/${product.resources_id}/${product.access_type}`}
              as={`/resources/details/${product.resources_category_resourcesToresources_category.slug}/${product.resources_id}/${product.access_type}`}
            >
              <a className="ps-product__overlay"></a>
            </Link>
          ) : (
            <Link
              href={`/product/${product.product_slug}`}
              as={`/product/${product.product_slug}`}
            >
              <a className="ps-product__overlay"></a>
            </Link>
          )}

          <img
            src={`${process.env.AWS_S3BUCKET_URL}${images[0]}`}
            alt={product?.product_name}
          />
        </div>
        <div className="ps-product__content">
          <h4 className="ps-product__title">
            {product.resources_category ? (
              <Link
                href={`/resources/details/${product.resources_category_resourcesToresources_category.slug}/${product.resources_id}/${product.access_type}`}
                as={`/resources/details/${product.resources_category_resourcesToresources_category.slug}/${product.resources_id}/${product.access_type}`}
              >
                <a>{product.product_name}</a>
              </Link>
            ) : (
              <Link
                href={`/product/${product.product_slug}`}
                as={`/product/${product.product_slug}`}
              >
                <a>{product.product_name}</a>
              </Link>
            )}
          </h4>
          {price(product)}
          {children}
        </div>
      </div>
    )
  }
}

export default ProductOnCart
