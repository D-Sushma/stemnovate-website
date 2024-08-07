import React from "react"
import useEcomerce from "~/hooks/useEcomerce"
import { connect, useDispatch } from "react-redux"
import { toggleDrawer } from "~/store/app/action"
import dynamic from "next/dynamic"

const ProductOnCart = dynamic(
  () => import("~/components/elements/products/ProductOnCart"),
  { loading: () => <p>Loading...</p> }
)

const ModuleEcomerceWishlist = ({ ecomerce, source }) => {
  const { addItem, removeItem } = useEcomerce()
  const dispatch = useDispatch()

  function handleRemoveItem(e, productId) {
    e.preventDefault()
    removeItem({ id: productId }, ecomerce.wishlistItems, "wishlist")
  }

  function handleAddItemToCart(e, product) {
    e.preventDefault()
    addItem({ id: product.id, quantity: 1 }, ecomerce.cartItems, "cart")
    dispatch(toggleDrawer(true))
  }

  // View
  let wishlistItemsViews
  if (source && source.length > 0) {
    const items = source.map((item) => (
      <tr key={item.id}>
        <td>
          <a
            className="ps-icon ps-cart-item__remove"
            href="#"
            onClick={(e) => handleRemoveItem(e, item.id)}
          >
            <i className="icon-cross mr-2"></i>
          </a>
        </td>
        <td>
          <ProductOnCart product={item} simple={true} />
        </td>
        <td>
          <strong>${item.price}</strong>
        </td>
        <td>
          <div className="ps-status instock">
            <i className="fa fa-check mr-2"></i>
            In Stock
          </div>
        </td>
        <td>
          <a
            className="ps-btn ps-btn--orange ps-btn--sm"
            href="#"
            onClick={(e) => handleAddItemToCart(e, item)}
          >
            Add to cart
          </a>
        </td>
      </tr>
    ))
    wishlistItemsViews = <tbody>{items}</tbody>
  } else {
    wishlistItemsViews = (
      <tbody>
          <td colSpan={5} >
            No product found.
          </td>
      </tbody>
    )
  }

  return (
    <table
      className="table ps-table ps-table--with-border ps-table--resonsive"
      id="table-wishlist"
    >
      <thead>
        <tr>
          <th></th>
          <th>Product</th>
          <th>Price</th>
          <th>Stock status</th>
          <th></th>
        </tr>
      </thead>
      {wishlistItemsViews}
    </table>
  )
}

export default connect((state) => state)(ModuleEcomerceWishlist)
