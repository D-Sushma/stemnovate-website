import React, { useState } from "react"
import Link from "next/link"
import { connect, useDispatch } from "react-redux"
import { toggleDrawer } from "~/store/app/action"
import useProduct from "~/hooks/useProduct"
import useEcomerce from "~/hooks/useEcomerce"
import { useSession } from "next-auth/react"
import { toast } from "react-toastify"
import dynamic from "next/dynamic"

const ModuleProductImages = dynamic(
  () => import("~/components/elements/products/modules/ModuleProductImages"),
  { loading: () => <p>Loading...</p> }
)

const ProductList = ({ product, ecomerce }) => {
  const { price, badges } = useProduct()
  const [AddtoCart, setAddtoCart] = useState(1)
  const dispatch = useDispatch()
  const { data: session } = useSession()

  const { addItem } = useEcomerce()

  const handleAddItemToCart = (id, price) => {
    if (session) {
      if (product.stock == "In Stock") {
        addItem(
          { id: id, quantity: AddtoCart, price: price },
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

  const AddCart = () => {
    var newval = AddtoCart + parseInt(1)
    setAddtoCart(newval)
  }

  const RemoveCart = () => {
    if (AddtoCart > 1) {
      var newval = AddtoCart - parseInt(1)
      setAddtoCart(newval)
    }
  }

  return (
    <div className="ps-product ps-product--horizontal">
      <div className="ps-product__thumbnail">
        <ModuleProductImages product={product} />
        {badges(product)}
      </div>
      <div className="ps-product__wrapper">
        <div className="ps-product__content">
          <h4 className="ps-product__title">
            <Link
              href={`/product/${product.product_slug}`}
              as={`/product/${product.product_slug}`}
            >
              <a>{product.product_name}</a>
            </Link>
          </h4>
          <div
            className="p-2 w-72 bd-highlight  "
            dangerouslySetInnerHTML={{
              __html: product.short_description
            }}
          ></div>
        </div>
        <div className="ps-product__right">
          {price(product.product_details)}
          <div className="ps-product__shopping">
            <div className="form-group--number">
              <button className="up" onClick={AddCart}></button>
              <button className="down" onClick={RemoveCart}></button>
              <input
                className="form-control"
                type="text"
                value={AddtoCart}
                placeholder={AddtoCart}
              />
            </div>
            <a
              className="ps-btn"
              onClick={() => {
                handleAddItemToCart(
                  product.id,
                  product.product_details.sale_price
                )
              }}
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect((state) => state)(ProductList)
