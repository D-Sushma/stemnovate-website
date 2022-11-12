import React from "react"
import {
  calculateAmount,
  calculateShipping,
  calculatePercentage
} from "~/utilities/ecomerce-helpers"
import Link from "next/link"
import { useSession } from "next-auth/react"

const ModuleEcomerceCartSummary = ({ cartItems }) => {
  // view
  let totalView, maxShippingCost, withVAT, percentage, allTotal
  const { data: session } = useSession()

  if (cartItems) {
    if (cartItems && cartItems.length > 0) {
      totalView = calculateAmount(cartItems)
      maxShippingCost = calculateShipping(cartItems)
      allTotal = parseFloat(totalView) + parseFloat(maxShippingCost)
      percentage = calculatePercentage(20, allTotal)
      withVAT = parseFloat(allTotal) + parseFloat(percentage)
    } else {
      totalView = "0.00"
      maxShippingCost = "0.00"
      allTotal = "0.00"
      percentage = "0.00"
      withVAT = "0.00"
    }
  }

  return (
    <div className="ps-block--cart-summary">
      <div className="ps-block__header">
        <h4>Cart Total</h4>
      </div>
      <div className="ps-block__content">
        <div className="ps-block__records">
          <p>
            <span>Subtotal</span>
            <strong>£{totalView}</strong>
          </p>
          <p>
            <span>Shipping</span>
            <span>
              £ {maxShippingCost !== "NaN" ? maxShippingCost : "0.00"}
            </span>
          </p>
          <p>
            <span>VAT (20%)</span>
            <span>
              £ {percentage !== "NaN" ? percentage : "0.00"}
            </span>
          </p>
          <p className="total">
            <span>Total</span>
            <strong>£{withVAT}</strong>
          </p>
        </div>
        {session !== null ? (
          <div className="ps-block__bottom">
            <Link href="/shop/checkout">
              <a className="ps-btn ps-btn--orange">Proceed to checkout</a>
            </Link>
          </div>
        ) : (
          <div className="ps-block__bottom">
            <Link href="/auth/UserLogin">
              <a className="ps-btn ps-btn--orange">Login</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default ModuleEcomerceCartSummary
