import React from "react";
import useProduct from "~/hooks/useProduct";
import Link from "next/link";

const ModuleProductImages = ({ product }) => {
    const offerData = product?.offers_details?.id;
    const { thumbnailImages } = useProduct();
    return (
        <div className="ps-product__images image-box-container2">
            <Link href={`/product/${product.product_slug}/${offerData ? offerData : ""}`} as={`/product/${product.product_slug}/${offerData ? offerData : ""}`}>
                <a href={`/product/${product.product_slug}/${offerData ? offerData : ""}`}  className="ps-product__overlay"></a>
            </Link>
            {thumbnailImages(product)}
        </div>
    );
};

export default ModuleProductImages;
