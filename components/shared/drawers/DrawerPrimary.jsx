import React from "react";
import { Drawer } from "antd";
import { connect, useDispatch } from "react-redux";
import { toggleDrawer } from "~/store/app/action";
import dynamic from "next/dynamic"

const EcomerceMiniCart = dynamic(
  () => import("~/components/ecomerce/EcomerceMiniCart"),
  { loading: () => <p>Loading...</p> }
)

const DrawerPrimary = ({
    placement = "right",
    isDrawerShow,
}) => {
    const dispatch = useDispatch();

    function handleCloseDrawer(e) {
        e.preventDefault();
        dispatch(toggleDrawer(false));
    }

    return (
        <Drawer
            className="ps-panel--mobile"
            placement="right"
            closable={false}
            placement={placement}
            width={400}
            onClose={(e) => handleCloseDrawer(e)}
            visible={isDrawerShow}>
            <div className="ps-drawer">
                <div className="ps-drawer__header">
                    <a
                        href="#"
                        className="ps-drawer__close"
                        onClick={(e) => handleCloseDrawer(e)}>
                        <i className="icon-cross"></i>
                    </a>
                </div>
                <div className="ps-drawer__wrapper">
                    <EcomerceMiniCart />
                </div>
            </div>
        </Drawer>
    );
};
export default connect((state) => state.app)(DrawerPrimary);
