import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Lightbox from "react-image-lightbox";
import { baseUrlProduct } from "~/repositories/Repository";
import NextArrow from "~/components/elements/carousel/NextArrow";
import PrevArrow from "~/components/elements/carousel/PrevArrow";
const variantSetting = {
    slidesToShow: 6,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 6,
                dots: false,
                arrows: false,
                vertical: false,
                infinite: false,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 4,
                dots: false,
                arrows: false,
                vertical: false,
                infinite: false,
            },
        },
    ],
};

const gallerySetting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};

const ModuleDetailThumbnail = ({ product, vertical = true }) => {
    const galleryCarousel = useRef(null);
    const variantCarousel = useRef(null);
    const [gallery, setGallery] = useState(null);
    const [variant, setVariant] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [productImages, setProductImages] = useState([]);

    const handleOpenLightbox = (e, imageIndex) => {
        e.preventDefault();
        setPhotoIndex(imageIndex);
        setIsOpen(true);
    };

    useEffect(() => {
        console.log(product);

        let images = [];
        var products = product.product_image.split(",");
        if (products && products.length > 0) {
            products.map((item) => {
                images.push(`${process.env.AWS_S3BUCKET_URL}${item}`);
            });
            setProductImages(images);
        }
        setGallery(galleryCarousel.current);
        setVariant(variantCarousel.current);
    }, [product]);

    //Views
    let lightboxView, variantCarouselView, imagesView, galleryImagesView;
    if (productImages.length > 0) {
        imagesView = productImages.map((item, key) => (
            <div className="item" key={key}>
                <img src={item} alt={product?.product_name} />
            </div>
        ));
        galleryImagesView = productImages.map((item, index) => (
            <div className="item" key={index}>
                <a
                    href="#"
                    //  onClick={(e) => handleOpenLightbox(e, index)}
                >
                    <img src={item} className="hover-zoom" alt={product?.product_name} />
                </a>
            </div>
        ));
    }
    if (vertical) {
        variantCarouselView = (
            <Slider asNavFor={gallery} ref={(slider) => (variantCarousel.current = slider)} swipeToSlide={false} centered={true} arrows={true} slidesToShow={3} vertical={false} infinite={false} focusOnSelect={true} {...variantSetting} className="ps-product__variants">
                {imagesView}
            </Slider>
        );
    } else {
        variantCarouselView = (
            <Slider asNavFor={gallery} ref={(slider) => (variantCarousel.current = slider)} swipeToSlide={true} arrows={false} slidesToShow={6} vertical={false} centered={true} infinite={false} focusOnSelect={true} className="ps-product__variants">
                {imagesView}
            </Slider>
        );
    }
    if (isOpen) {
        lightboxView = (
            <Lightbox
                mainSrc={productImages[photoIndex]}
                nextSrc={productImages[(photoIndex + 1) % productImages.length]}
                prevSrc={productImages[(photoIndex + productImages.length - 1) % productImages.length]}
                onCloseRequest={() => {
                    setIsOpen(false);
                }}
                onMovePrevRequest={() => {
                    setPhotoIndex((photoIndex + productImages.length - 1) % productImages.length);
                }}
                onMoveNextRequest={() => {
                    setPhotoIndex((photoIndex + 1) % productImages.length);
                }}
            />
        );
    }

    return (
        <div className="ps-product__thumbnail" data-vertical={vertical ? "true" : "false"}>
            <figure>
                <div className="ps-wrapper">
                    <Slider {...gallerySetting} ref={(slider) => (galleryCarousel.current = slider)} asNavFor={variant} className="ps-product__gallery ps-carousel inside">
                        {galleryImagesView}
                    </Slider>
                </div>
            </figure>
            {variantCarouselView}
            {lightboxView}
        </div>
    );
};

export default ModuleDetailThumbnail;
