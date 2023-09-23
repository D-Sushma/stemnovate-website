import React, { useEffect, useRef, useState } from "react";
import { baseUrl } from "~/repositories/Repository";
import { SwiperSlide } from "swiper/react";
import SwiperCarousel from "~/components/elements/carousel/SwiperCarousel";


const ModuleDetailThumbnailSingle = ({ product, vertical = true }) => {
    const galleryCarousel = useRef(null);
    const variantCarousel = useRef(null);
    const [gallery, setGallery] = useState(null);
    const [variant, setVariant] = useState(null);
    const [productImages, setProductImages] = useState([]);


    useEffect(() => {
        const images = [];
        if (product && product.images.length > 0) {
            product.images.map((item) => {
                images.push(`${baseUrl}${item.url}`);
            });
            setProductImages(images);
        }
        setGallery(galleryCarousel.current);
        setVariant(variantCarousel.current);
    }, [product]);

    //Views
    let carousel;
    const swiperParams = {
        slidesPerView: 1,
        navigation: true,
    };
    if (productImages.length > 0) {
        const items = productImages.map((item) => (
            <SwiperSlide key={item}>
                <img src={item} alt={item} />
            </SwiperSlide>
        ));

        carousel = (
            <SwiperCarousel setting={swiperParams}>{items}</SwiperCarousel>
        );
    }

    return (
        <div
            className="ps-product__thumbnail"
            data-vertical={vertical ? "true" : "false"}>
            <figure>
                <div className="ps-wrapper">{carousel}</div>
            </figure>
        </div>
    );
};

export default ModuleDetailThumbnailSingle;
