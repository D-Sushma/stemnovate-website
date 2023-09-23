import React, { useEffect } from "react";
import useGetProducts from "~/hooks/useGetProducts";
import { generateTempArray } from "~/utilities/common-helpers";
// import Product from "~/components/elements/products/Product";
// import SkeletonProduct from "~/components/elements/skeletons/SkeletonProduct";
import dynamic from 'next/dynamic'

const Product = dynamic(
    () => import("~/components/elements/products/Product"),
    {loading: ()=> <p>Loading...</p>}
)
const SkeletonProduct = dynamic(
    () => import("~/components/elements/skeletons/SkeletonProduct"),
    {loading: ()=> <p>Loading...</p>}
)

const WidgetShopRelatedProducts = () => {
    const { loading, productItems, getProducts } = useGetProducts();

    useEffect(() => {
        getProducts({ _limit: 2 });
    }, []);

    let productsView;
    if (productItems && productItems.length > 0) {
        productsView = productItems.map((item) => (
            <Product product={item} key={item.id} />
        ));
    } else {
        if (loading) {
            const items = generateTempArray(4).map((item) => (
                <SkeletonProduct key={item} />
            ));
            productsView = (
                <div className="ps-shop-items with-skeleton">{items}</div>
            );
        } else {
            productsView = <p>No product found.</p>;
        }
    }
    return (
        <div className="widget widget--shop widget--shop-related-products">
            <h4 className="widget__heading">Related products</h4>
            <div className="widget__content">{productsView}</div>
        </div>
    );
};

export default WidgetShopRelatedProducts;
