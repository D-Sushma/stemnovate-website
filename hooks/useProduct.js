import React from "react";
import LazyLoad from "react-lazyload";
import { formatCurrency } from "~/utilities/product-helper";
import Link from "next/link";
import dynamic from 'next/dynamic'
const Image = dynamic(() => import("~/components/elements/Image"), {
    loading: () => <p>Loading...</p>
})

export default function useProduct() {
    return {
        thumbnailImages: (payload) => {
            if (payload) {
                if (payload.product_image) {
                    const images = payload.product_image.split(",");
                    return (
                        <div>
                            <LazyLoad>
                                <Image
                                    src={`${process.env.AWS_S3BUCKET_URL}${images[0]}`}
                                    alt={payload?.product_name}
                                    width={1000}
                                    height={758}
                                />
                            </LazyLoad>
                        </div>
                    );
                }
            }
        },
        price: (payload) => {
            let view;
            if (payload.sale_price) {
                view = (
                    <p className="ps-product__price sale">
                        <span>£</span>
                        {formatCurrency(payload.sale_price)}
                        {formatCurrency(payload.sale_price) < formatCurrency(payload.MRP) ? (
                            <del className="ml-2">
                                <span>£</span>
                                {formatCurrency(payload.MRP)}
                            </del>
                        ) : null}
                    </p>
                );
            } else {
                view = (
                    <p className="ps-product__price sale">
                        <span>£</span>
                        {formatCurrency(payload.price)}
                        {formatCurrency(payload.price) < formatCurrency(payload.product_details.sale_price) ? (
                            <del className="ml-2">
                                <span>£</span>
                                {formatCurrency(payload.product_details.sale_price)}
                            </del>
                        ) : null}
                    </p>
                );
            }
            return view;
        },
        badges: (payload) => {
            let view = null;
            if (payload.badges && payload.badges.length > 0) {
                const items = payload.badges.map((item) => {
                    if (item.value === "hot") {
                        return (
                            <span className="ps-product__badge hot" key={item.id}>
                                Hot
                            </span>
                        );
                    }
                    if (item.value === "new") {
                        return (
                            <span className="ps-product__badge new" key={item.id}>
                                New
                            </span>
                        );
                    }
                    if (item.value === "sale") {
                        return (
                            <span className="ps-product__badge sale" key={item.id}>
                                Sale
                            </span>
                        );
                    }
                });
                view = <div className="ps-product__badges">{items}</div>;
            }
            return view;
        },
        onSale: (payload) => {
            let view = null;
            if (payload.sale_price && payload.on_sale) {
                const discountPercent = (((payload.sale_price - payload.price) / payload.price) * 100).toFixed(0);
                view = <span className="ps-product__on-sale">-{discountPercent}%</span>;
            }
            return view;
        },
        brand: (payload) => {
            let view;
            if (payload.product_brands && payload.product_brands.length > 0) {
                view = (
                    <Link href="/shop">
                        <div className="text-capitalize">{payload.product_brands[0].name}</div>
                    </Link>
                );
            } else {
                view = (
                    <Link href="/shop">
                        <div className="text-capitalize">No Brand</div>
                    </Link>
                );
            }
            return view;
        },
    };
}
