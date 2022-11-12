import React, { useEffect, useState } from "react";
import ActiveLink from "~/components/elements/basic/ActiveLink";
import { Drawer } from "antd";
import { useRouter } from "next/router";
import MenuAccordion from "~/components/shared/menus/MenuAccordion";
import menu from "~/public/static/data/menu.json";
import { connect } from "react-redux";
import ModuleHeaderSwichers from "~/components/shared/headers/modules/ModuleHeaderSwitcher";
import ModuleHeaderContactNumber from "~/components/shared/headers/modules/ModuleHeaderContactNumber";
import FormSearchHeader from "~/components/shared/forms/FormSearchHeader";

import { Menu, Dropdown, Button, Divider, Space } from "antd";
import { useSession, signOut } from "next-auth/react";
import { AiOutlineLogin, AiOutlineLogout, AiOutlineUserSwitch, AiOutlineUserAdd } from "react-icons/ai";

import { FiBox } from "react-icons/fi";
import { FaUserEdit, FaWpforms } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
const { SubMenu } = Menu;
import Link from "next/link";
import { SetMainMenu } from "~/store/app/action";
import Loader from "~/components/reuseable/Loader";

const NavigationBottom = ({ ecomerce, app, classes, isActive = true }) => {
    const [isMenu, setIsMenu] = useState(false);

    const [availableModules, setavailableModules] = useState([]);
    const [isloading, setisloading] = useState(false);
    const Router = useRouter();
    const { pathname } = Router;

    function handleOpenMenu(e) {
        e.preventDefault();
        setIsMenu(true);
    }

    function handleCloseMenu(e) {
        e.preventDefault();
        setIsMenu(false);
    }

    useEffect(() => {
        setIsMenu(false);
    }, [pathname]);

    useEffect(() => {
        // console.log("APP DATA", app);
        if (app.ismainmenu == undefined || app.ismainmenu.length == 0) {
            // console.log("Get From API");
            getmenu();
        } else {
            // console.log("Set From Redux");
            setavailableModules(app.ismainmenu);
        }
    }, []);

    // This gets called on every request
    const getmenu = async () => {
        // Fetch data from external API
        setisloading(true);
        const res = await fetch(`${process.env.NEXT_BASE_URL}api/menu/getmenu`);
        const data = await res.json();
        // console.log(data);
        setavailableModules(data);
        SetMainMenu(data);
        setisloading(false);
    };

    const { data: session, status } = useSession();

    const UserMenu = (
        <Menu>
            {session ? (
                <div>
                    {/* dashboard */}
                    <p className="m-4 text-left">{`Hello ${session.user.name}`}</p>

                    <Divider className="m-1" />
                    <Menu.Item
                        key="1"
                        style={{
                            width: 200,
                            margin: "10px",
                            textAlign: "left",
                        }}>
                        <a href="/user/dashboard">
                            <AiOutlineUserSwitch className="site-form-item-icon mr-1 mb-1" />
                            Dashboard
                        </a>
                    </Menu.Item>
                    {/* orders */}

                    <Menu.Item
                        key="2"
                        style={{
                            width: 200,
                            margin: "10px",
                            textAlign: "left",
                        }}>
                        <a href="/user/Orders">
                            <FiBox className="site-form-item-icon mr-1 mb-1" />
                            Orders
                        </a>
                    </Menu.Item>
                    {/* Edit Account */}
                    <Menu.Item
                        key="3"
                        style={{
                            width: 200,
                            margin: "10px",
                            textAlign: "left",
                        }}>
                        <a href="/user/EditProfile">
                            <FaUserEdit className="site-form-item-icon mr-1 mb-1" />
                            Edit Account
                        </a>
                    </Menu.Item>
                    {/* Application Form */}
                    <Menu.Item
                        key="4"
                        style={{
                            width: 200,
                            margin: "10px",
                            textAlign: "left",
                        }}>
                        <a href="/user/MyApplication">
                            <FaWpforms className="site-form-item-icon mr-1 mb-1" />
                            Application Form
                        </a>
                    </Menu.Item>
                    <Menu.Item
                        key="5"
                        style={{
                            width: 200,
                            margin: "10px",
                            textAlign: "left",
                        }}>
                        <Button type="danger" size="large" onClick={() => signOut()} style={{ width: "100%", margin: "5" }}>
                            <AiOutlineLogout className="site-form-item-icon mr-1 mb-1" /> Log Out
                        </Button>
                    </Menu.Item>
                </div>
            ) : (
                <div>
                    <Menu.Item
                        key="6"
                        style={{
                            width: 200,
                            margin: "20px",
                            textAlign: "center",
                        }}>
                        <Link href="/auth/UserLogin">
                            <Button type="primary" size="large" style={{ width: "100%", margin: "5" }}>
                                Login
                                <AiOutlineLogin className="site-form-item-icon ml-1" />
                            </Button>
                        </Link>
                    </Menu.Item>

                    <Menu.Item
                        key="7"
                        style={{
                            width: 200,
                            margin: "20px",
                            textAlign: "center",
                        }}>
                        <p>Don't Have An Account?</p>
                        <Link href="/auth/UserReg">
                            <Button size="large" style={{ width: "100%", margin: "5" }}>
                                Register <AiOutlineUserAdd className="site-form-item-icon ml-2" />
                            </Button>
                        </Link>
                    </Menu.Item>
                </div>
            )}
        </Menu>
    );

    return (
        <div>
            <nav className={`navigation--bottom ${classes} ${isActive && "active"}`}>
                <div className="navigation__content">
                    <a className="navigation__item" onClick={(e) => handleOpenMenu(e)}>
                        <i className="icon-menu"></i>
                    </a>
                    <ActiveLink activeClassName="active" href="/">
                        <a className="navigation__item">
                            <i className="icon-home2"></i>
                        </a>
                    </ActiveLink>
                    <ActiveLink activeClassName="active" href="#">
                        <Dropdown overlay={UserMenu} trigger={["click"]} placement="top" arrow={{ pointAtCenter: true }}>
                            <a className="navigation__item ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                                <i className="icon-user"></i>
                            </a>
                        </Dropdown>
                    </ActiveLink>

                    <ActiveLink activeClassName="active" href="/shop/wishlist">
                        <a className="navigation__item">
                            <i className="icon-heart"></i>
                        </a>
                    </ActiveLink>
                    <ActiveLink activeClassName="active" href="/Products">
                        <a className="navigation__item cart">
                            <i className="icon-bag2"></i>
                            <span>{ecomerce.cartItems && ecomerce.cartItems.length > 0 ? ecomerce.cartItems.length : "0"}</span>
                        </a>
                    </ActiveLink>
                </div>
            </nav>
            <Drawer className="ps-panel--mobile" closable={false} placement="left" width={400} onClose={(e) => handleCloseMenu(e)} visible={isMenu}>
                <div className="ps-drawer ps-drawer--with-menu">
                    <div className="ps-drawer__header">
                        <a href="#" className="ps-drawer__close" onClick={(e) => handleCloseMenu(e)}>
                            <i className="icon-cross"></i>
                        </a>
                    </div>
                    <div className="ps-drawer__wrapper">
                        <div className="ps-drawer__menu">
                            <MenuAccordion data={availableModules} classes="menu--accordion" parent={""} />
                        </div>
                        <div className="ps-drawer__footer">
                            <figure>
                                <FormSearchHeader />
                            </figure>
                            <figure>
                                <ModuleHeaderSwichers />
                            </figure>
                            <figure>
                                <ModuleHeaderContactNumber />
                            </figure>
                        </div>
                    </div>
                </div>
            </Drawer>
        </div>
    );
};

export default connect((state) => state)(NavigationBottom);

// const mapStateToProps = state =>({
//     mainmenu:state.app.ismainmenu
// })
// const mapDispathToProps = dispatch =>
// ({
//     SetMainMenuhandler:data=>dispatch(SetMainMenu(data))
// })

// export default connect(mapStateToProps,mapDispathToProps)(NavigationBottom);
