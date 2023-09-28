import React from "react"
import menu from "~/public/static/data/menu.json"
import dynamic from "next/dynamic"

const ModuleHeaderContactNumber = dynamic(
  () => import("~/components/shared/headers/modules/ModuleHeaderContactNumber"),
  { loading: () => <p>Loading...</p> }
)
const ModuleHeaderCategories = dynamic(
  () => import("~/components/shared/headers/modules/ModuleHeaderCategories"),
  { loading: () => <p>Loading...</p> }
)
const ModuleHeaderSupplies = dynamic(
  () => import("~/components/shared/headers/modules/ModuleHeaderSupplies"),
  { loading: () => <p>Loading...</p> }
)
const Menu = dynamic(() => import("~/components/elements/menu/Menu"), {
  loading: () => <p>Loading...</p>
})

const NavigationPrimary = () => {
  return (
    <nav className="navigation--primary">
      <div className="container">
        <div className="navigation__left">
          <ModuleHeaderCategories />
          <ModuleHeaderSupplies />
          <div className="navigation__menu">
            <Menu source={menu.main_menu} className="menu menu--desktop" />
          </div>
        </div>
        <div className="navigation__right">
          <ModuleHeaderContactNumber />
        </div>
      </div>
    </nav>
  )
}

export default NavigationPrimary
