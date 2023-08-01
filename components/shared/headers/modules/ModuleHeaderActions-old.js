import React, { useEffect, useState } from "react";
import { toggleDrawer } from "~/store/app/action";
import { useDispatch, connect } from "react-redux";
import Link from "next/link";
import { Menu, Dropdown, Button, Divider } from "antd";
import { useSession, signOut } from "next-auth/react";
import { AiOutlineLogin, AiOutlineLogout, AiOutlineUserSwitch, AiOutlineUserAdd } from "react-icons/ai";

import { FiBox } from "react-icons/fi";
import { FaUserEdit, FaWpforms } from "react-icons/fa";
import { CgUser, CgShoppingCart } from "react-icons/cg";
import { RiHeartAddLine } from "react-icons/ri";
const { SubMenu } = Menu;

import { caculateArrayQuantity, calculateCartQuantity } from "~/utilities/ecomerce-helpers";
import { baseUrl } from "~/repositories/Repository";

const ModuleHeaderActions = ({ reffrals, ecomerce, search = false }) => {
    const dispatch = useDispatch();
    const [cartTotal, setCartTotal] = useState(0);
    const [wishlistTotal, setWishlistTotal] = useState(0);

    function handleOpenDrawer(e) {
        e.preventDefault();
        dispatch(toggleDrawer(true));
    }

    useEffect(() => {
        if (ecomerce.cartItems) {
            setCartTotal(calculateCartQuantity(ecomerce.cartItems));
        }
        if (ecomerce.wishlistItems) {
            setWishlistTotal(caculateArrayQuantity(ecomerce.wishlistItems));
        }
    }, [ecomerce]);
    const { data: session, status } = useSession();
    // console.log(session);

    // view
    let searchBtnView;
    if (search) {
        searchBtnView = (
            <li>
                <a className="header__action" href="#">
                    <i className="icon-magnifier"></i>
                </a>
            </li>
        );
    }

    const menu = (
        <Menu>
            {session ? (
                <div>
                    {/* dashboard */}
                    <p className="m-4 text-left">{`Hello ${session.user.name}`}</p>

                    <Divider className="m-1" />
                    <a href="/user/dashboard">
                        <Menu.Item
                            key="1"
                            // onClick={() => Router.push(process.env.NEXT_BASE_URL + "/user/dashboard")}
                            style={{
                                width: 200,
                                margin: "0 10px",
                                textAlign: "left",
                            }}>
                            <p>
                                <AiOutlineUserSwitch className="site-form-item-icon mr-2 mb-1" />
                                Dashboard
                            </p>
                        </Menu.Item>
                    </a>

                    {/* orders */}
                    <a href="/user/Orders">
                        <Menu.Item
                            key="2"
                            // onClick={() => Router.push(process.env.NEXT_BASE_URL + "/user/Orders")}
                            style={{
                                width: 200,
                                margin: "0 10px",
                                textAlign: "left",
                            }}>
                            <p>
                                <FiBox className="site-form-item-icon mr-2 mb-1" />
                                Orders
                            </p>
                        </Menu.Item>
                    </a>
                    
                        <Menu.Item
                            key="2"
                            style={{
                                width: 200,
                                margin: "0 10px",
                                textAlign: "left",
                                cursor:"pointer",
                            }}>
                                <Link href="/user/Orders">
                            <p>
                                <FiBox className="site-form-item-icon mr-2 mb-1" />
                                Orders
                            </p>
                            </Link>
                        </Menu.Item>
                    

                    {/* Edit Account */}
                    <a href="/user/EditProfile">
                        <Menu.Item
                            key="3"
                            // onClick={() => Router.push(process.env.NEXT_BASE_URL + )}
                            style={{
                                width: 200,
                                margin: "0 10px",
                                textAlign: "left",
                            }}>
                            <p>
                                {" "}
                                <FaUserEdit className="site-form-item-icon mr-2 mb-1" />
                                Edit Profile
                            </p>
                        </Menu.Item>
                    </a>

                    {/* Application Form */}
                    <a href="/user/MyApplication">
                        <Menu.Item
                            key="4"
                            // onClick={() => {
                            //     Router.push(process.env.NEXT_BASE_URL + "");
                            // }}
                            style={{
                                width: 200,
                                margin: "0 10px",
                                marginBottom: "10px",
                                textAlign: "left",
                            }}>
                            <p>
                                <FaWpforms className="site-form-item-icon mr-2 mb-1" />
                                Organization Profile
                            </p>
                        </Menu.Item>
                    </a>
                    
                    <Menu.Item
                        key="5"
                        style={{
                            width: 200,
                            margin: "0 10px",
                            textAlign: "left",
                        }}>
                        <Button
                            type="danger"
                            size="large"
                            onClick={() =>
                                signOut({
                                    callbackUrl: reffrals,
                                })
                            }
                            style={{ width: "100%", margin: "5" }}>
                            <AiOutlineLogout className="site-form-item-icon mr-2 mb-1" /> Log Out
                        </Button>
                    </Menu.Item>
                </div>
            ) : (
                <div>
                    <Menu.Item
                        style={{
                            width: 200,
                            margin: "0 20px",
                            textAlign: "center",
                        }}>
                        <Link href="/auth/UserLogin">
                            <Button type="primary" size="large" style={{ width: "100%", margin: "5" }}>
                                Login
                                <AiOutlineLogin className="site-form-item-icon ml-2" />
                            </Button>
                        </Link>
                    </Menu.Item>

                    <Menu.Item
                        style={{
                            width: 200,
                            margin: "0 20px",
                            textAlign: "center",
                        }}>
                        <p>Don&apos;t Have An Account?</p>
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
        <ul className="header__actions">
            {searchBtnView}
            <li>
                <Link href="#">
                    <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                            <a className="header__action">
                                <CgUser
                                // className="site-form-item-icon ml-1"
                                // size={"1.2em"}
                                />
                            </a>
                        </a>
                    </Dropdown>
                </Link>
            </li>
            <li>
                <Link href="/shop/wishlist">
                    <a className="header__action">
                        <RiHeartAddLine
                        // className="site-form-item-icon ml-1"
                        // size={"1.2em"}
                        />

                        <span className="header__action-badge">{wishlistTotal ? wishlistTotal : 0}</span>
                    </a>
                </Link>
            </li>
            <li>
                <a className="header__action" href="#" id="cart-mini" onClick={(e) => handleOpenDrawer(e)}>
                    <CgShoppingCart
                    // className="site-form-item-icon ml-1"
                    // size={"1.2em"}
                    />

                    <span className="header__action-badge">{cartTotal ? cartTotal : 0}</span>
                </a>
            </li>
        </ul>
    );
};

export async function getServerSideProps(context) {
    // console.log(context.req.headers.referer);
    var reffrals = context.req.headers.referer;
    return { props: { reffrals } };
}

export default connect((state) => state)(ModuleHeaderActions);
