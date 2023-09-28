import React from "react"
import { useDispatch, connect } from "react-redux"
import useEcomerce from "~/hooks/useEcomerce"
import { toggleDrawer } from "~/store/app/action"
import { useSession } from "next-auth/react"
import { toast } from "react-toastify"
import Link from "next/link"
import { TbShoppingCartPlus } from "react-icons/tb"

const AddToCartResources = ({ product, ecomerce, userData }) => {
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
        if (product.resources_status) {
          e.preventDefault()
          addItem(
            {
              id: product.id,
              quantity: parseInt("1"),
              price: parseFloat(product.resources_price),
              isService: true
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

  return (
    <>
      <button onClick={(e) => handleAddItemToCart(e)} className=" button">
        <TbShoppingCartPlus /> Add To Cart
      </button>
    </>
  )
}

export default connect((state) => state)(AddToCartResources)
