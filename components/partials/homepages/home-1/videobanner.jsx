import React from "react"
import NextArrow from "~/components/elements/carousel/NextArrow"
import PrevArrow from "~/components/elements/carousel/PrevArrow"

const carouselSetting = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  autoplay: true,
  dots: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
}
const VideoBanner = () => {
  return (
    <section className="ps-section--banner ps-top-banners">
      <div className="ps-section__overlay">
        <div className="ps-section__loading"></div>
      </div>

      <div className="player-wrapper">
        <video
          src="https://stemnovateimages.s3.us-east-2.amazonaws.com/Home-Video-Banner-New-One.mp4"
          autoPlay
          loop
          muted
          playsInline
          width="100%"
          height="100%"
        ></video>
      </div>
    </section>
  )
}

export default VideoBanner
