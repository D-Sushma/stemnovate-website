import React, { useState } from "react"
import { connect, useDispatch } from "react-redux"
import { toggleDrawer } from "~/store/app/action"
import useEcomerce from "~/hooks/useEcomerce"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { toast } from "react-toastify"

const ModuleDetailShoppingActions = ({ product, ecomerce }) => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)
  const { loading, addItem } = useEcomerce()
  const { data: session } = useSession()

  const handleAddItemToCart = (e) => {
    e.preventDefault()
    if (session) {
      if (product.stock == "In Stock") {
        addItem(
          {
            id: product.id,
            quantity: quantity,
            price: product.product_details.sale_price
          },
          ecomerce.cartItems,
          "cart"
        )
        dispatch(toggleDrawer(true))
        console.log("cartItems", product.product_details.sale_price)
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
    } else {
      const CustomToastWithLink = () => (
        <div>
          <p className="text-white">
            Please{"  "}
            <Link href={"/auth/UserLogin"}>
              <u>
                <span className="Toast-link font-weight-bolder link-hover-thumb-shape">Login</span>
              </u>
            </Link>
            {"  "}/{"  "}
            <Link href={"/auth/UserReg"}>
              <u>
                <span className="Toast-link font-weight-bolder link-hover-thumb-shape">Signup</span>
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

  const handleIncreaseItemQty = (e) => {
    e.preventDefault()
    setQuantity(quantity + 1)
  }

  const handleDecreaseItemQty = (e) => {
    e.preventDefault()
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className="ps-product__shopping">
      <div className="ps-product__add-cart">
        <label className="ps-product__label">Quantity</label>
        <figure>
          <div>
            <div className="form-group--number">
              <button
                className="up"
                onClick={(e) => handleIncreaseItemQty(e)}
              ></button>
              <button
                className="down"
                onClick={(e) => handleDecreaseItemQty(e)}
              ></button>
              <input
                className="form-control"
                type="text"
                placeholder={quantity}
                disabled
              />
            </div>
          </div>
          <div>
            <div
              className="ps-btn"
              onClick={(e) => handleAddItemToCart(e)}
            >
              {!loading ? "Add to cart" : "loading"}
            </div>
          </div>
        </figure>
      </div>
    </div>
  )
}
export default connect((state) => state)(ModuleDetailShoppingActions)
