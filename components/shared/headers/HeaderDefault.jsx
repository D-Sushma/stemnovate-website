import React, { useEffect, useState } from "react"
import FormSearchHeader from "~/components/shared/forms/FormSearchHeader"
import ModuleHeaderActions from "~/components/shared/headers/modules/ModuleHeaderActions"
import Logo from "~/components/elements/basic/Logo"
import Menu from "./Menu"
import fetch from "node-fetch"
import { SetMainMenu } from "~/store/app/action"
import { connect } from "react-redux"
import Loader from "~/components/reuseable/Loader"
import ModuleHeaderNotice from "./modules/ModuleHeaderNotice"

const HeaderDefault = (props, { classes = "" }) => {
  var type = "white"

  useEffect(() => {
    // console.log("FromRedux", props.mainmenu);
    // console.log("FromProps", props.menus);
    if (props.menus !== undefined) {
      props.SetMainMenuhandler(props.menus)
    }
  }, [])

  const [showNav, setShowNav] = useState(true)
  const [availableModules, setavailableModules] = useState([])
  const [isloading, setisloading] = useState(false)

  function handleShownav(e) {
    e.preventDefault()
    if (showNav) {
      setShowNav(false)
    } else {
      setShowNav(true)
    }
  }

  function handleStickyHeader() {
    const number =
      window.pageXOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0
    const header = document.getElementById("header-sticky")
    if (header !== null) {
      if (number >= 40) {
        header.classList.add("header--sticky")
        setShowNav(false)
      } else {
        header.classList.remove("header--sticky")
        setShowNav(true)
      }
    }
  }

  useEffect(() => {
    // if (typeof window === "undefined") {
    window.addEventListener("scroll", handleStickyHeader)
    // }
    if (props.menus == undefined && props.mainmenu.length == 0) {
      if (availableModules.length == 0) {
        getmenu()
      }
    }
  }, [])
  // This gets called on every request
  const getmenu = async () => {
    // Fetch data from external API
    setisloading(true)
    const res = await fetch(`${process.env.NEXT_BASE_URL}api/menu/getmenu`)
    const data = await res.json()
    setavailableModules(data)
    props.SetMainMenuhandler(data)
    setisloading(false)
  }

  return (
    <header
      className={`header--desktop header--one ${classes}`}
      id="header-sticky"
    >
      <ModuleHeaderNotice />
      {isloading ? <Loader /> : null}
      <div className="header__top">
        <div className="container">
          <div className="header__left">
            <Logo type={type} />
            <a
              href="#"
              className="header__top-toggle"
              onClick={(e) => handleShownav(e)}
            >
              <i className="fa fa-bars"></i>
            </a>
          </div>
          <div className="header__center">
            <div className="ps-header__search">
              <FormSearchHeader />
            </div>
          </div>
          <div className="header__right justify-content-center">
            {/* <ModuleHeaderSwichers /> */}
            <ModuleHeaderActions />
          </div>
        </div>
      </div>
      <div className={`header__bottom ${showNav ? "active" : ""}`}>
        <div className="container">
          <Menu
            availableModules={
              props.menus !== undefined
                ? props.mainmenu
                : props.mainmenu.length > 0
                ? props.mainmenu
                : availableModules
            }
          />
        </div>
      </div>
    </header>
  )
}

const mapStateToProps = (state) => ({
  mainmenu: state.app.ismainmenu
})
const mapDispathToProps = (dispatch) => ({
  SetMainMenuhandler: (data) => dispatch(SetMainMenu(data))
})

export default connect(mapStateToProps, mapDispathToProps)(HeaderDefault)
// export default HeaderDefault;
