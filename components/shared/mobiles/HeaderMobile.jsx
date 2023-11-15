import React, { useEffect, useState } from "react"
import { stickyHeaderModile } from "~/utilities/common-helpers"
import { SetMainMenu } from "~/store/app/action"
import { connect } from "react-redux"
import dynamic from "next/dynamic"
import { useSession } from "next-auth/react";

const Logo = dynamic(() => import("~/components/elements/basic/Logo"), {
  loading: () => <p>Loading...</p>
})
const FormSearchHeader = dynamic(
  () => import("~/components/shared/forms/FormSearchHeader"),
  { loading: () => <p>Loading...</p> }
)

const HeaderMobile = () => {
  const [search, setSearch] = useState(false)

  function handleToggleSearch(e) {
    e.preventDefault()
    setSearch(!search)
  }

  useEffect(() => {
    window.addEventListener("scroll", stickyHeaderModile)
  }, [])

  let searchView
  if (search) {
    searchView = (
      <div className="header__searchbox">
        <FormSearchHeader />
      </div>
    )
  }
  const { data: session } = useSession();
  return (
    <header
      className="header header--mobile"
      data-sticky="true"
      id="header-sticky-mobile"
    >
      <div className="header__left">
        <Logo type="mobile" />
      </div>
      <div className="header__right">
        <span className="text-white">{session ? `Hello ${session.user.name}`:null}</span>
        <span>
          <a
            className="header__search"
            href="#"
            onClick={(e) => handleToggleSearch(e)}
          >
            <i className="icon-magnifier text-white"></i>
          </a>
        </span>
      </div>
      {searchView}
    </header>
  )
}

const mapStateToProps = (state) => ({
  mainmenu: state.app.ismainmenu
})
const mapDispathToProps = (dispatch) => ({
  SetMainMenuhandler: (data) => dispatch(SetMainMenu(data))
})

export default connect(mapStateToProps, mapDispathToProps)(HeaderMobile)
