import React, { useEffect, useRef, useState } from "react"
import Slider from "react-slick"
import Lightbox from "react-image-lightbox"
import Link from "next/link"
import dynamic from "next/dynamic"

const NextArrow = dynamic(
  () => import("~/components/elements/carousel/NextArrow"),
  { loading: () => <p>Loading...</p> }
)
const PrevArrow = dynamic(
  () => import("~/components/elements/carousel/PrevArrow"),
  { loading: () => <p>Loading...</p> }
)
const Image = dynamic(() => import("~/components/elements/Image"), {
  loading: () => <p>Loading...</p>
})

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
        infinite: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 4,
        dots: false,
        arrows: false,
        vertical: false,
        infinite: false
      }
    }
  ]
}

const gallerySetting = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
}

const ModuleDetailThumbnail = ({ product, vertical = true }) => {
  const galleryCarousel = useRef(null)
  const variantCarousel = useRef(null)
  const [gallery, setGallery] = useState(null)
  const [variant, setVariant] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const [productImages, setProductImages] = useState([])

  useEffect(() => {
    console.log("Detail Thumbnail : ",product)

    const images = []
    var prod_primary_img = product?.primary_product_image?.split(",")
    var prod_img = product?.product_image?.split(",")
    var Array = prod_primary_img?.concat(prod_img);
    var products = Array;
    if (products && products.length > 0) {
      products.map((item) => {
        images.push(`${process.env.AWS_S3BUCKET_URL}${item}`)
      })
      setProductImages(images)
    }
    setGallery(galleryCarousel.current)
    setVariant(variantCarousel.current)
  }, [product])

  //Views
  let lightboxView, variantCarouselView, imagesView, galleryImagesView
  if (productImages.length > 0) {
    imagesView = productImages.map((item, key) => (
      <div style={{marginLeft:2,marginRight:2}} className="item" key={key}>
        <div className="image-box-container2">
           <Image
          src={item}
          alt={product?.product_name}
          width={"386"}
          height={"218"}
        />
        </div>
       
      </div>
    ))
    galleryImagesView = productImages.map((item, index) => (
      <div className="item" key={index}>
        <Link href="#">
          <div className="link-hover-thumb-shape ">
            <Image
              src={item}
              className="hover-zoom "
              alt={product?.product_name}
              width={576}
              height={432}
              priority={true}
              // width={1000}
              // height={750}
            />
          </div>
        </Link>
      </div>
    ))
  }
  if (vertical) {
    variantCarouselView = (
      <Slider
        asNavFor={gallery}
        ref={(slider) => (variantCarousel.current = slider)}
        swipeToSlide={false}
        centered={true}
        arrows={true}
        slidesToShow={3}
        vertical={false}
        infinite={false}
        focusOnSelect={true}
        {...variantSetting}
        className="ps-product__variants mt-5 "
      >
        {imagesView}
      </Slider>
    )
  } else {
    variantCarouselView = (
      <Slider
        asNavFor={gallery}
        ref={(slider) => (variantCarousel.current = slider)}
        swipeToSlide={true}
        arrows={false}
        slidesToShow={6}
        vertical={false}
        centered={true}
        infinite={false}
        focusOnSelect={true}
        className="ps-product__variants "
      >
        {imagesView}
      </Slider>
    )
  }
  if (isOpen) {
    lightboxView = (
      <Lightbox
        mainSrc={productImages[photoIndex]}
        nextSrc={productImages[(photoIndex + 1) % productImages.length]}
        prevSrc={
          productImages[
            (photoIndex + productImages.length - 1) % productImages.length
          ]
        }
        onCloseRequest={() => {
          setIsOpen(false)
        }}
        onMovePrevRequest={() => {
          setPhotoIndex(
            (photoIndex + productImages.length - 1) % productImages.length
          )
        }}
        onMoveNextRequest={() => {
          setPhotoIndex((photoIndex + 1) % productImages.length)
        }}
      />
    )
  }

  return (
    <div
      className="ps-product__thumbnail"
      data-vertical={vertical ? "true" : "false"}
    >
      <figure>
        <div className="ps-wrapper image-box-container">
          <Slider
            {...gallerySetting}
            ref={(slider) => (galleryCarousel.current = slider)}
            asNavFor={variant}
            className="ps-product__gallery ps-carousel inside"
          >
            {galleryImagesView}
          </Slider>
        </div>
      </figure>
      {variantCarouselView}
      {lightboxView}
    </div>
  )
}

export default ModuleDetailThumbnail
