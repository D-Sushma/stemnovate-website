import React from "react"
import menu from "~/public/static/data/menu.json"
import dynamic from "next/dynamic"

const Menu = dynamic(() => import("~/components/elements/menu/Menu"), {
  loading: () => <p>Loading...</p>
})
const ModuleHeaderSocialLinks = dynamic(
  () => import("~/components/shared/headers/modules/ModuleHeaderSocialLinks"),
  { loading: () => <p>Loading...</p> }
)
const ModuleHeaderSwichers = dynamic(
  () => import("~/components/shared/headers/modules/ModuleHeaderSwitcher"),
  { loading: () => <p>Loading...</p> }
)

const ModuleHeaderTopBar = ({ type = "primary" }) => {
  if (type === "second") {
    return (
      <div className="header__topbar type--second">
        <div className="container">
          <div className="header__topbar-right">
            <p>Need help? 0020 500 - MYMEDI - 000</p>
            <Menu source={menu.header_topbar_menu} className="menu--topbar" />
            <ModuleHeaderSocialLinks />
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="header__topbar">
        <div className="container">
          <div className="header__topbar-left">
            <p>
              <strong>100% Secure delivery</strong> without contacting the
              courier
            </p>
          </div>
          <div className="header__topbar-right">
            <Menu source={menu.header_topbar_menu} className="menu--topbar" />
            <ModuleHeaderSocialLinks />
            <ModuleHeaderSwichers />
          </div>
        </div>
      </div>
    )
  }
}

export default ModuleHeaderTopBar
