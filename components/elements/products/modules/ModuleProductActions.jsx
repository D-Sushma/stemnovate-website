import React from "react"
import { Modal } from "antd"
import { useDispatch, connect } from "react-redux"
import useEcomerce from "~/hooks/useEcomerce"
import { toggleDrawer } from "~/store/app/action"
import { useSession } from "next-auth/react"
import { toast } from "react-toastify"
import Link from "next/link"

const ModuleProductActions = ({
  product,
  type = "vertical",
  ecomerce,
  userData
}) => {
  const dispatch = useDispatch()
  const { addItem } = useEcomerce()
  const { data: session } = useSession()

  const UserType = (userType) => {
    if (userType === 0) {
      return "All Users"
    }
    if (userType === 1) {
      return "Old Users"
    }
    if (userType === 2) {
      return "New Users"
    }
  }

  const checkDate = (date2) => {
    var date1 = new Date()
    date2 = new Date(date2)
    return parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10)
  }

  function handleAddItemToCart(e) {
    console.log(product)
    if (session) {
      if (product.offers_details) {
        const offerData = product?.offers_details
        if (checkDate(offerData.end_date) && offerData.status) {
          const userType = offerData?.customer_type
          if (offerData.customer_type === 0) {
            e.preventDefault()
            addItem(
              {
                id: product.id,
                quantity: parseInt("1"),
                price: parseFloat(product.product_details.sale_price)
              },
              ecomerce.cartItems,
              "cart"
            )
            dispatch(toggleDrawer(true))
          } else if (
            offerData.customer_type === 1 &&
            userData?.orders?.length >= 1
          ) {
            e.preventDefault()
            addItem(
              {
                id: product.id,
                quantity: parseInt("1"),
                price: parseFloat(product.product_details.sale_price)
              },
              ecomerce.cartItems,
              "cart"
            )
            dispatch(toggleDrawer(true))
          } else if (
            offerData.customer_type === 2 &&
            userData?.orders?.length === 0
          ) {
            e.preventDefault()
            addItem(
              {
                id: product.id,
                quantity: parseInt("1"),
                price: parseFloat(product.product_details.sale_price)
              },
              ecomerce.cartItems,
              "cart"
            )
            dispatch(toggleDrawer(true))
          } else {
            toast.error("Sorry ! this Offer is Not for " + UserType(userType))
          }
        } else {
          toast.error("sorry ! this offer has expaired")
        }
      } else {
        if (product.stock == "In Stock") {
          e.preventDefault()
          addItem(
            {
              id: product.id,
              quantity: parseInt("1"),
              price: parseFloat(product.product_details.sale_price)
            },
            ecomerce.cartItems,
            "cart"
          )
          dispatch(toggleDrawer(true))
        } else {
          toast.error("Product is Out Of Stock", {
            position: "top-right",
            autoClose: 15000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored"
          })
        }
      }
    } else {
      const CustomToastWithLink = () => (
        <div>
          <p className="text-white">
            Please{"  "}
            <Link href={"/auth/UserLogin"}>
              <u>
                <a href={"/auth/UserLogin"} className="Toast-link font-weight-bolder">Login</a>
              </u>
            </Link>
            {"  "}/{"  "}
            <Link href={"/auth/UserReg"}>
              <u>
                <a href={"/auth/UserReg"} className="Toast-link font-weight-bolder">Signup</a>
              </u>
            </Link>{" "}
            to proceed
          </p>
        </div>
      )
      toast(CustomToastWithLink, {
        position: "top-right",
        autoClose: 15000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
      })
    }
  }

  function handleAddItemToWishlist(e) {
    e.preventDefault()
    addItem({ id: product.id }, ecomerce.wishlistItems, "wishlist")
    const modal = Modal.success({
      centered: true,
      title: "Success!",
      content: `This item has been added to your wishlist`
    })
    modal.update
  }

  if (type === "vertical") {
    return (
      <>
        <div className="ps-product__actions">
          <a href="#"
            className="ps-product__action"
            title="Add to cart"
            onClick={(e) => handleAddItemToCart(e)}
          >
            <i className="fa fa-2x fa-cart-arrow-down"></i>
          </a>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="ps-product__actions-horizontal">
          <div className="ps-product__btn-add-cart">
            <a
              href="#"
              className="ps-btn"
              onClick={(e) => handleAddItemToCart(e)}
            >
              Add to cart
            </a>
          </div>
          <div className="ps-product__other-actions">
            <a href="#" onClick={(e) => handleAddItemToWishlist(e)}>
              <i className="icon-heart"></i>
            </a>
            <a href="#" onClick={(e) => handleAddItemToWishlist(e)}>
              <i className="icon-signal"></i>
            </a>
          </div>
        </div>
      </>
    )
  }
}
export default connect((state) => state)(ModuleProductActions)
