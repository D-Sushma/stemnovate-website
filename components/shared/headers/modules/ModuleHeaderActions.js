import React, { useEffect, useState } from "react";
import { toggleDrawer } from "~/store/app/action";
import { useDispatch, connect } from "react-redux";
import Link from "next/link";
import { Menu, Dropdown, Button } from "antd";
import { useSession, signOut } from "next-auth/react";
import { AiOutlineLogin, AiOutlineLogout, AiOutlineUserSwitch, AiOutlineUserAdd } from "react-icons/ai";
import { FiBox } from "react-icons/fi";
import { FaUserEdit, FaWpforms } from "react-icons/fa";
import { CgUser, CgShoppingCart } from "react-icons/cg";
import { RiHeartAddLine } from "react-icons/ri";
import { caculateArrayQuantity, calculateCartQuantity } from "~/utilities/ecomerce-helpers";

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
    const { data: session } = useSession();

    // view
    let searchBtnView;
    if (search) {
        searchBtnView = (
            <li>
                <Link href="#">
                    <div className="header__action link-hover-thumb-shape">
                        <i className="icon-magnifier"></i>
                    </div>
                </Link>
            </li>
        );
    }

    const menu = (
        <Menu>
            {session ? (
                <div>
                    {/* dashboard */}
                    <p className="m-4 text-left">{`Hello ${session.user.name}`}</p>

                    <Menu.Item
                        key="1"
                        style={{
                            width: 200,
                            margin: "0 10px",
                            textAlign: "left",
                            cursor: "pointer",
                        }}>
                        <Link href="/user/dashboard">
                            <p>
                                <AiOutlineUserSwitch className="site-form-item-icon mr-2 mb-1" />
                                Dashboard
                            </p>
                        </Link>
                    </Menu.Item>

                    {/* orders */}
                    <Menu.Item
                        key="2"
                        style={{
                            width: 200,
                            margin: "0 10px",
                            textAlign: "left",
                            cursor: "pointer",
                        }}>
                        <Link href="/user/Orders">
                            <p>
                                <FiBox className="site-form-item-icon mr-2 mb-1" />
                                Orders
                            </p>
                        </Link>
                    </Menu.Item>

                    {/* Edit Account */}
                    <Menu.Item
                        key="3"
                        style={{
                            width: 200,
                            margin: "0 10px",
                            textAlign: "left",
                            cursor: "pointer",
                        }}>
                        <Link href="/user/EditProfile">
                            <p>
                                {" "}
                                <FaUserEdit className="site-form-item-icon mr-2 mb-1" />
                                Edit Profile
                            </p>
                        </Link>
                    </Menu.Item>

                    {/* Application Form */}
                    <Menu.Item
                        key="4"
                        style={{
                            width: 200,
                            margin: "0 10px",
                            marginBottom: "10px",
                            textAlign: "left",
                            cursor: "pointer",
                        }}>
                        <Link href="/user/MyApplication">
                            <p>
                                <FaWpforms className="site-form-item-icon mr-2 mb-1" />
                                Organization Profile
                            </p>
                        </Link>

                    </Menu.Item>

                    {/* MTA */}
                    <Menu.Item
                        key="5"
                        style={{
                            width: 200,
                            margin: "0 10px",
                            marginBottom: "10px",
                            textAlign: "left",
                            cursor: "pointer",
                        }}>
                        <Link href="/user/Mta">
                            <p>
                                <FaWpforms className="site-form-item-icon mr-2 mb-1" />
                                MTA
                            </p>
                        </Link>

                    </Menu.Item>

                    <Menu.Item
                        key="6"
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
                            <Button type="primary" size="large" className="link-hover-thumb-shape m-2 w-100">
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
                            <Button size="large" className="link-hover-thumb-shape m-2 w-100">
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
                        <div className="ant- dropdown-link link-hover-thumb-shape" onClick={(e) => e.preventDefault()}>
                            <div className="header__action ">
                                <CgUser />
                            </div>
                        </div>
                    </Dropdown>
                </Link>

            </li>
            {/* <li>
                <Link href="/shop/wishlist">
                    <div className="header__action link-hover-thumb-shape">
                        <RiHeartAddLine />
                        <span className="header__action-badge">{wishlistTotal ? wishlistTotal : 0}</span>
                    </div>
                </Link>
            </li> */}
            <li>
                <Link href="#">
                    <div id="cart-mini" onClick={(e) => handleOpenDrawer(e)}>
                        <div className="header__action link-hover-thumb-shape" >
                            <CgShoppingCart />
                            <span className="header__action-badge">{cartTotal ? cartTotal : 0}</span>
                        </div>
                    </div>
                </Link>
            </li>
        </ul>
    );
};

export async function getServerSideProps(context) {
    var reffrals = context.req.headers.referer;
    return { props: { reffrals } };
}

export default connect((state) => state)(ModuleHeaderActions);
