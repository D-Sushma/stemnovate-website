import React from "react"
import { Carousel } from "react-responsive-carousel"
export default function PromotionalBanner() {
  //react-responsive-carousel.js.org/storybook/?path=/story/01-basic--base&knob-showArrows_Toggles=true&knob-showStatus_Toggles=&knob-showIndicators_Toggles=true&knob-infiniteLoop_Toggles=true&knob-showThumbs_Toggles=&knob-useKeyboardArrows_Toggles=true&knob-autoPlay_Toggles=true&knob-stopOnHover_Toggles=true&knob-swipeable_Toggles=true&knob-dynamicHeight_Toggles=true&knob-emulateTouch_Toggles=true&knob-autoFocus_Toggles=&knob-thumbWidth_Values=100&knob-selectedItem_Values=0&knob-interval_Values=2000&knob-transitionTime_Values=500&knob-swipeScrollTolerance_Values=5
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
