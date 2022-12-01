import React, { useEffect } from "react"
import Container from "~/components/layouts/Container"
import Subscribe from "~/components/shared/sections/Subscribe"
import Testimonials from "~/components/shared/sections/Testimonials"
import HeaderDefault from "~/components/shared/headers/HeaderDefault"
import OurService from "~/components/shared/sections/OurServices"
import { SetMainMenu } from "~/store/app/action"
import { connect } from "react-redux"
import { baseUrl } from "~/repositories/Repository"
import HowItsWork from "~/components/shared/sections/HowItWorks"
import CaseStudy from "~/components/shared/sections/CaseStudy"
import AboutBanner from "~/components/partials/pages/about-us/AboutBanner"
import VideoBanner from "~/components/partials/homepages/home-1/videobanner"
import OurClients from "~/components/shared/sections/OurClients"
import PropTypes from "prop-types"
import BlogGrid from "~/components/partials/blog/BlogGrid"
import WomenHealth from "~/components/shared/sections/WomenHealth"
import HomeOneTopBanners from "~/components/partials/homepages/home-1/HomeOneTopBanners"
// import PromotionalBanner from "~/components/shared/sections/PromotionalBanner"

// import { Modal } from "antd";

const HomeDefaultPage = (props) => {
  // const [visible, setVisible] = useState(false);
  useEffect(() => {
    // setVisible(true);
    props.SetMainMenuhandler(props.menus)
  }, [])

  return (
    <Container
      title="Your Drug Discovery Partner"
      menus={props.menus}
      header={<HeaderDefault classes="without-border" menus={props.menus} />}
    >
      <main id="homepage-one">
        <VideoBanner />
        {/* <HomeOneTopBanners /> */}
        <AboutBanner />
        <OurService />
        {/* <PromotionalBanner /> */}
        <HowItsWork />
        <WomenHealth />
        <CaseStudy />
        <Testimonials />
        <OurClients />
        <BlogGrid />
        <Subscribe />
      </main>
    </Container>
  )
}

export async function getServerSideProps() {
  const res = await fetch(baseUrl + "/api/menu/getmenu")
  const menus = await res.json()
  return {
    props: { menus } // will be passed to the page component as props
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
