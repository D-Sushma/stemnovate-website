import React, { useEffect, useState, useRef, forwardRef } from "react"
import { BackTop } from "antd"
import { connect, useDispatch } from "react-redux"
import { BsArrowUp } from "react-icons/bs"
import { useRouter } from "next/router"
import { useCookies } from "react-cookie"
import Link from "next/link"
import { toggleDrawer } from "~/store/app/action"
import {
  setCartItems,
  setCompareItems,
  setWishlistTtems
} from "~/store/ecomerce/action"
import dynamic from "next/dynamic"

const Image = dynamic(() => import("~/components/elements/Image"), {
  loading: () => <p>Loading...</p>
})

const DrawerPrimary = dynamic(
  () => import("~/components/shared/drawers/DrawerPrimary"),
  { ssr: false }
)
const ModuleDrawerOverlay = dynamic(
  () => import("~/components/shared/drawers/modules/ModuleDrawerOverlay"),
  { ssr: false }
)
const NavigationBottom = dynamic(
  () => import("~/components/shared/navigations/NavigationBottom"),
  { loading: () => <p>Loading...</p> }
)
const ModuleCustomHead = dynamic(
  () => import("~/components/layouts/modules/ModuleCustomHead"),
  { ssr: false }
)

const MasterLayout = forwardRef((props, ref) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [cookies] = useCookies(["cart", "compare", "wishlist"])
  const btnRef = useRef(null)

  function handleSetEcomercerParameters() {
    if (cookies) {
      if (cookies.cart) {
        dispatch(setCartItems(cookies.cart))
      }
      if (cookies.wishlist) {
        dispatch(setWishlistTtems(cookies.wishlist))
      }
      if (cookies.compare) {
        dispatch(setCompareItems(cookies.compare))
      }
    }
  }

  useEffect(() => {
    handleSetEcomercerParameters()
    const handleComplete = () => {
      dispatch(toggleDrawer(false))
    }

    setTimeout(() => {
      document.getElementById("__next").classList.add("loaded")
    }, 100)

    router.events.on("routeChangeStart", handleComplete)
    setTimeout(() => {
      document.getElementById("__next").classList.add("ps-loaded")
    }, 100)

    return () => {
      router.events.off("routeChangeStart", handleComplete)
    }
  }, [])

  const isWindowClient = typeof window === "object"

  const [windowSize, setWindowSize] = useState(
    isWindowClient ? window.innerWidth : undefined
  )

  useEffect(() => {
    function setSize() {
      setWindowSize(window.innerWidth)
    }
    setSize()
    if (isWindowClient) {
      window.addEventListener("resize", setSize)

      return () => window.removeEventListener("resize", setSize)
    }
  }, [isWindowClient, setWindowSize])

  var const_url = "https://stemnovateimages.s3.us-east-2.amazonaws.com/"

  var footer_img = const_url + props?.details[0]?.bottom_img;

  return (
    <div>
      <ModuleCustomHead />

      <div className="ps-page">
        <div className="offer-section">
          {props?.details[0]?.bottom_img && (
            <div
              className="fluid-container text-center"
            >
              <Link ref={ref} href="/contact-us">
                <Image
                  src={footer_img}
                  alt="FixedBottom"
                  height={70}
                  width={windowSize}
                  objectFit="contain"
                  layout="responsive"
                  priority={true}
                />
              </Link>
            </div>
          )}
        </div>
        {props?.children}
        <NavigationBottom ref={btnRef} classes={""} />
        <ModuleDrawerOverlay />
        <DrawerPrimary />
        <div id="loader-wrapper">
          <div className="loader-section section-left" />
          <div className="loader-section section-right" />
        </div>
        <BackTop>
          <button className="ps-btn--backtop">
            <BsArrowUp size={30} />
          </button>
        </BackTop>
      </div>
    </div>
  )
})

export default connect()(MasterLayout)
