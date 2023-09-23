import React, { useEffect } from "react";
import { BackTop } from "antd";
import { connect, useDispatch } from "react-redux";
import { BsArrowUp } from "react-icons/bs";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import Link from "next/link";
import { toggleDrawer } from "~/store/app/action";
import { setCartItems, setCompareItems, setWishlistTtems } from "~/store/ecomerce/action";
import dynamic from 'next/dynamic'

const DrawerPrimary = dynamic(
    () => import('~/components/shared/drawers/DrawerPrimary'),
    {loading: ()=> <p>Loading...</p>}
)
const ModuleDrawerOverlay = dynamic(
  () => import("~/components/shared/drawers/modules/ModuleDrawerOverlay"),
  { loading: () => <p>Loading...</p> }
)
const NavigationBottom = dynamic(
  () => import("~/components/shared/navigations/NavigationBottom"),
  { loading: () => <p>Loading...</p> }
)
const ModuleCustomHead = dynamic(
  () => import("~/components/layouts/modules/ModuleCustomHead"),
  { loading: () => <p>Loading...</p> }
)

function MasterLayout({ children }) {
    const dispatch = useDispatch();
    const router = useRouter();
    const [cookies] = useCookies(["cart", "compare", "wishlist"]);

    function handleSetEcomercerParameters() {
        if (cookies) {
            if (cookies.cart) {
                dispatch(setCartItems(cookies.cart));
            }
            if (cookies.wishlist) {
                dispatch(setWishlistTtems(cookies.wishlist));
            }
            if (cookies.compare) {
                dispatch(setCompareItems(cookies.compare));
            }
        }
    }

    useEffect(() => {
        handleSetEcomercerParameters();
        const handleComplete = () => {
            dispatch(toggleDrawer(false));
        };

        setTimeout(() => {
            document.getElementById("__next").classList.add("loaded");
        }, 100);

        router.events.on("routeChangeStart", handleComplete);
        setTimeout(() => {
            document.getElementById("__next").classList.add("ps-loaded");
        }, 100);

        return () => {
            router.events.off("routeChangeStart", handleComplete);
        };
    }, []);

    return (
        <div>
            <ModuleCustomHead />

            <div className="ps-page">
                <div className="offer-section">
                    <div className="fluid-container p-3  text-center">
                        <h2 className="text-white m-0 p-0 h2">
                            <Link href="/auth/UserReg">
                                <a className="offer-highlight">Sign up</a>
                            </Link>{" "}
                            to Stemnovate & get <span className="offer-highlight">10% off</span> your first order
                        </h2>
                    </div>
                </div>
                {children}
                <NavigationBottom />
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
    );
}

export default connect()(MasterLayout);
