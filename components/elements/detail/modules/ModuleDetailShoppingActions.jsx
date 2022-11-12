import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { toggleDrawer } from "~/store/app/action";
import useEcomerce from "~/hooks/useEcomerce";
import { Modal } from "antd";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";

const ModuleDetailShoppingActions = ({ product, cart, ecomerce }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const { loading, addItem } = useEcomerce();
    const { data: session, status } = useSession();

    const handleAddItemToCart = (e) => {
        e.preventDefault();
        if (session) {
            if (product.stock == "In Stock") {
                addItem(
                    {
                        id: product.id,
                        quantity: quantity,
                        price: product.product_details.sale_price,
                    },
                    ecomerce.cartItems,
                    "cart"
                );
                dispatch(toggleDrawer(true));
                console.log("cartItems", product.product_details.sale_price);
            } else {
                toast.error("Product is Out Of Stock", {
                    position: "top-right",
                    autoClose: 15000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        } else {
            const CustomToastWithLink = () => (
                <div>
                    <p className="text-white">
                        Please{"  "}
                        <Link href={"/auth/UserLogin"}>
                            <u>
                                <a className="Toast-link font-weight-bolder">Login</a>
                            </u>
                        </Link>
                        {"  "}/{"  "}
                        <Link href={"/auth/UserReg"}>
                            <u>
                                <a className="Toast-link font-weight-bolder">Signup</a>
                            </u>
                        </Link>{" "}
                        to proceed
                    </p>
                </div>
            );
            toast(CustomToastWithLink, {
                position: "top-right",
                autoClose: 15000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    };

    // const handleAddItemToCompare = (e) => {
    //     e.preventDefault();
    //     addItem({ id: product.id }, ecomerce.compareItems, "compare");
    //     const modal = Modal.success({
    //         centered: true,
    //         title: "Success!",
    //         content: `This product has been added to your compare listing!`,
    //     });
    //     modal.update;
    // };

    // const handleAddItemToWishlist = (e) => {
    //     e.preventDefault();
    //     const { product } = this.props;
    //     addItem({ id: product.id }, ecomerce.wishlistItems, "wishlist");
    //     const modal = Modal.success({
    //         centered: true,
    //         title: "Success!",
    //         content: `This item has been added to your wishlist`,
    //     });
    //     modal.update;
    // };

    const handleIncreaseItemQty = (e) => {
        e.preventDefault();
        setQuantity(quantity + 1);
    };

    const handleDecreaseItemQty = (e) => {
        e.preventDefault();
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="ps-product__shopping">
            {/* <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover /> */}
            <div className="ps-product__add-cart">
                <label className="ps-product__label">Quantity</label>
                <figure>
                    <div>
                        <div className="form-group--number">
                            <button className="up" onClick={(e) => handleIncreaseItemQty(e)}></button>
                            <button className="down" onClick={(e) => handleDecreaseItemQty(e)}></button>
                            <input className="form-control" type="text" placeholder={quantity} disabled />
                        </div>
                    </div>
                    <div>
                        <a className="ps-btn" href="#" onClick={(e) => handleAddItemToCart(e)}>
                            {!loading ? "Add to cart" : "loading"}
                        </a>
                    </div>
                </figure>

                {/* <div className="ps-product__ecomerce-actions">
                    <a href="#" onClick={(e) => handleAddItemToWishlist(e)}>
                        Add to wishlist
                    </a>
                    <a href="#" onClick={(e) => handleAddItemToCompare(e)}>
                        Add to compare
                    </a>
                </div> */}
            </div>
        </div>
    );
};
export default connect((state) => state)(ModuleDetailShoppingActions);
