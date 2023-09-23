import { useState } from "react"
import ProductRepository from "~/repositories/ProductRepository"
import { useCookies } from "react-cookie"
import { useDispatch } from "react-redux"
import {
  setCompareItems,
  setWishlistTtems,
  setCartItems
} from "~/store/ecomerce/action"

export default function useEcomerce() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [cartItemsOnCookie] = useState(null)
  const [cookies, setCookie] = useCookies(["cart"])
  const [products, setProducts] = useState([])
  return {
    loading,
    cartItemsOnCookie,
    products,
    getProducts: async (payload, group = "") => {
      setLoading(true)
      if (payload && payload.length > 0) {
        let queries = ""
        payload.forEach((item) => {
          if (item.isService) {
            if (queries === "") {
              queries = `S~${item.id}`
            } else {
              queries = queries + `/S~${item.id}`
            }
          } else {
            if (queries === "") {
              queries = `${item.id}`
            } else {
              queries = queries + `/${item.id}`
            }
          }
        })
        const responseData = await ProductRepository.getProductsByIds(queries)
        if (responseData && responseData.length > 0) {
          if (group === "cart") {
            const cartItems = responseData
            payload.forEach((item, index) => {
              if (item.id === cartItems[index].id) {
                cartItems[index].quantity = parseInt(item.quantity)
                cartItems[index].price = parseFloat(item.price)
              }
            })
            setProducts(cartItems)
          } else {
            setProducts(responseData)
          }
          setTimeout(
            function () {
              setLoading(false)
            }.bind(this),
            250
          )
        }
      } else {
        setLoading(false)
        setProducts([])
      }
    },

    increaseQty: (payload, currentCart) => {
      let cart = []
      if (currentCart) {
        cart = currentCart
        const existItem = cart.find((item) => item.id === payload.id)
        if (existItem) {
          existItem.quantity = existItem.quantity + 1
        }
        setCookie("cart", cart, { path: "/" })
        dispatch(setCartItems(cart))
      }
      return cart
    },

    decreaseQty: (payload, currentCart) => {
      let cart = []
      if (currentCart) {
        cart = currentCart
        const existItem = cart.find((item) => item.id === payload.id)
        if (existItem) {
          if (existItem.quantity > 1) {
            existItem.quantity = existItem.quantity - 1
          }
        }
        setCookie("cart", cart, { path: "/" })
        dispatch(setCartItems(cart))
      }
      return cart
    },

    addItem: (newItem, items, group) => {
      let newItems = []
      if (items) {
        newItems = items
        const existItem = items.find((item) => item.id === newItem.id)
        if (existItem) {
          if (group === "cart") {
            existItem.quantity += parseInt(newItem.quantity)
            existItem.price = parseFloat(newItem.price)
          }
        } else {
          console.log("newItem", newItem)
          newItems.push(newItem)
        }
      } else {
        console.log("No Item", newItem)
        newItems.push(newItem)
      }
      if (group === "cart") {
        setCookie("cart", newItems, { path: "/" })
        dispatch(setCartItems(newItems))
      }
      if (group === "wishlist") {
        setCookie("wishlist", newItems, { path: "/" })
        dispatch(setWishlistTtems(newItems))
      }

      if (group === "compare") {
        setCookie("compare", newItems, { path: "/" })
        dispatch(setCompareItems(newItems))
      }
      return newItems
    },

    removeItem: (selectedItem, items, group) => {
      const currentItems = items
      if (currentItems.length > 0) {
        const index = currentItems.findIndex(
          (item) => item.id === selectedItem.id
        )
        currentItems.splice(index, 1)
      }
      if (group === "cart") {
        setCookie("cart", currentItems, { path: "/" })
        dispatch(setCartItems(currentItems))
      }

      if (group === "wishlist") {
        setCookie("wishlist", currentItems, { path: "/" })
        dispatch(setWishlistTtems(currentItems))
      }

      if (group === "compare") {
        setCookie("compare", currentItems, { path: "/" })
      }
    },

    removeItems: (group) => {
      if (group === "wishlist") {
        setCookie("wishlist", [], { path: "/" })
        dispatch(setWishlistTtems([]))
      }
      if (group === "compare") {
        setCookie("compare", [], { path: "/" })
        dispatch(setCompareItems([]))
      }
      if (group === "cart") {
        setCookie("cart", [], { path: "/" })
        dispatch(setCartItems([]))
      }
    }
  }
}
