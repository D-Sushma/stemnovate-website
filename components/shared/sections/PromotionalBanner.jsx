import React from "react"
import { Carousel } from "react-responsive-carousel"
export default function PromotionalBanner() {
  http: return (
    <Carousel>
      <div>
        <img src="https://stemnovateimages.s3.us-east-2.amazonaws.com/jsgucywvcwye.jpg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="https://stemnovateimages.s3.us-east-2.amazonaws.com/hgvftygchwyuec.jpg" />
        <p className="legend">Legend 2</p>
      </div>
    </Carousel>
  )
}
