import dynamic from "next/dynamic"
import React, { useState, useEffect } from "react"
import { SetMainMenu } from "~/store/app/action"
import { connect } from "react-redux"
import { baseUrl } from "~/repositories/Repository"
import PropTypes from "prop-types"

const Container = dynamic(() => import("~/components/layouts/Container"), {
  loading: () => <p>Loading...</p>
})
const Image = dynamic(() => import("~/components/elements/Image"), {
  loading: () => <p>Loading...</p>
})
const HeaderDefault = dynamic(
  () => import("~/components/shared/headers/HeaderDefault"),
  { loading: () => <p>Loading...</p> }
)
const DynamicAboutBanner = dynamic(
  () => import("~/components/partials/pages/about-us/AboutBanner"),
  { loading: () => <p>Loading...</p> }
)
const DynamicVideoBanner = dynamic(
  () => import("~/components/partials/homepages/home-1/newvideobanner"),
  { loading: () => <p>Loading...</p> }
)
const DynamicOurService = dynamic(
  () => import("~/components/shared/sections/OurServices"),
  {
    loading: () => <p>Loading...</p>
  }
)
const DynamicHowItsWork = dynamic(
  () => import("~/components/shared/sections/HowItWorks"),
  {
    loading: () => <p>Loading...</p>
  }
)
const DynamicCaseStudy = dynamic(
  () => import("~/components/shared/sections/CaseStudy"),
  {
    loading: () => <p>Loading...</p>
  }
)
const DynamicTestimonials = dynamic(
  () => import("~/components/shared/sections/Testimonials"),
  {
    loading: () => <p>Loading...</p>
  }
)
const DynamicOurClients = dynamic(
  () => import("~/components/shared/sections/OurClients"),
  {
    loading: () => <p>Loading...</p>
  }
)
const DynamicBlogGrid = dynamic(
  () => import("~/components/partials/blog/BlogGrid"),
  {
    loading: () => <p>Loading...</p>
  }
)
const DynamicSubscribe = dynamic(
  () => import("~/components/shared/sections/Subscribe"),
  {
    loading: () => <p>Loading...</p>
  }
)
const NextArrow = dynamic(
  () => import("~/components/elements/carousel/NextArrow"),
  { loading: () => <p>Loading...</p> }
)
const PrevArrow = dynamic(
  () => import("~/components/elements/carousel/PrevArrow"),
  { loading: () => <p>Loading...</p> }
)

const HomeDefaultPage = (props) => {
  useEffect(() => {
    props.SetMainMenuhandler(props.menus)
  }, [])

  const [promotions, setPromotions] = useState([])

  useEffect(() => {
    if (props.promotionDetails.status === 200) {
      setPromotions(props.promotionDetails.data)
    }
  }, [])

  let home_banner_id = props.id
  var ogImage = ""
  var initialSlide = 0
  var banner_imag_data = props?.promotionDetails?.data
  if (banner_imag_data.length > 0) {
    var newArr = banner_imag_data.map(function (val, index) {
      if (val.id == home_banner_id[0]) {
        initialSlide = index
        var bn_img = val.shareimage
        if (bn_img !== null) {
          ogImage = `${process.env.AWS_S3BUCKET_URL}${bn_img}`
        }
      }
    })
  }

  return (
    <Container
      title="Your Drug Discovery Partner"
      ogimg={ogImage}
      menus={props.menus}
      header={<HeaderDefault classes="without-border" menus={props.menus} />}
      description="Stemnovate page on drug discovery. The platforms provide solutions for next gen liver, heart and brain cell modelling. "
    >
      <main id="homepage-one">
        <DynamicVideoBanner props={props.id} />

        <DynamicAboutBanner />
        <DynamicOurService />
        <DynamicCaseStudy />
        <DynamicHowItsWork />
        <DynamicTestimonials />
        <DynamicOurClients />
        <DynamicBlogGrid />
        <DynamicSubscribe />
      </main>
    </Container>
  )
}

export async function getServerSideProps({ query }) {
  var id = query.slug
  const res = await fetch(baseUrl + "/api/menu/getmenu")
  const menus = await res.json()

  var promotionDetails = []
  var requestOptions = {
    method: "GET"
  }

  const res1 = await fetch(
    baseUrl + "/api/homebanner/getAllbanner",
    requestOptions
  )
  const myPromotionData = await res1.json()
  if (myPromotionData.status == 200) {
    promotionDetails = myPromotionData
  } else {
    promotionDetails = []
  }

  return {
    props: { menus, promotionDetails, id }
  }
}
const mapStateToProps = (state) => ({
  mainmenu: state.app.ismainmenu
})
const mapDispathToProps = (dispatch) => ({
  SetMainMenuhandler: (data) => dispatch(SetMainMenu(data))
})

export default connect(mapStateToProps, mapDispathToProps)(HomeDefaultPage)
HomeDefaultPage.propTypes = {
  SetMainMenuhandler: PropTypes.any,
  menus: PropTypes.array
}
