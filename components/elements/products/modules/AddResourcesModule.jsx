import React from "react"
import { useDispatch, connect } from "react-redux"
import useEcomerce from "~/hooks/useEcomerce"
import { toggleDrawer } from "~/store/app/action"
import { useSession } from "next-auth/react"
import { toast } from "react-toastify"
import Link from "next/link"
import { TbShoppingCartPlus } from "react-icons/tb"
import { FcViewDetails } from "react-icons/fc"

const AddResourcesModule = ({
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
            // toast.error("this Offer is for " + UserType(userType));
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
                <span className="Toast-link font-weight-bolder span-with-link">Login</span>
              </u>
            </Link>
            {"  "}/{"  "}
            <Link href={"/auth/UserReg"}>
              <u>
                <span className="Toast-link font-weight-bolder span-with-link">Signup</span>
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

  if (type === "vertical") {
    return (
      <>
        <div className="ps-product__actions">
          {product.access_type ? (
            <button
              onClick={(e) => handleAddItemToCart(e)}
              className=" resources-btn button d-none"
            >
              <TbShoppingCartPlus /> Add To Cart
            </button>
          ) : (
            <a
              href={`/resources/details/${product.resources_category_resourcesToresources_category.slug}/${product.resources_id}/${product.access_type}`}
              className=" resources-btn button button--green "
              target={"_blank"}
              rel="noreferrer"
            >
              <FcViewDetails /> View
            </a>
          )}
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="ps-product__actions-horizontal">
          <div className="ps-product__btn-add-cart">
            <button
              onClick={(e) => handleAddItemToCart(e)}
              className=" resources-btn button d-none"
            >
              <TbShoppingCartPlus /> Add To Cart
            </button>
          </div>
        </div>
      </>
    )
  }
}
export default connect((state) => state)(AddResourcesModule)
