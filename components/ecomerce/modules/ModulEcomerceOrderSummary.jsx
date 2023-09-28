import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import {
  calculateAmount,
  calculateShipping,
  calculatePercentage
} from "~/utilities/ecomerce-helpers"
import useEcomerce from "~/hooks/useEcomerce"
import axios from "axios"
import { loadStripe } from "@stripe/stripe-js"
import { toast } from "react-toastify"
import Link from "next/link"

const ModulEcomerceOrderSummary = ({ ecomerce, userStatus, UserData }) => {
  const { products, getProducts } = useEcomerce()

  useEffect(() => {
    console.log("Products", products)
    console.log("userStatus", userStatus)
  }, [])

  const [loading, setLoading] = useState(false)
  const [checkTnC, setCheckTnC] = useState(false)
  useEffect(() => {
    getProducts(ecomerce.cartItems, "cart")
  }, [ecomerce])

  // Views
  let cartItemsView,
    maxShippingCost,
    allTotal,
    percentage,
    withVAT,
    amountView = "0.00"
  if (products && products.length > 0) {
    amountView = calculateAmount(products)
    maxShippingCost = calculateShipping(products)
    allTotal = parseFloat(amountView) + parseFloat(maxShippingCost)
    percentage = calculatePercentage(20, allTotal)
    withVAT = parseFloat(allTotal) + parseFloat(percentage)

    cartItemsView = products.map((item) => (
      <div className="ps-checkout__row ps-product" key={item.id}>
        <div className="ps-product__name">
          <span>{item.product_name}</span> x <span>{item.quantity}</span>
        </div>
        <div className="ps-product__price">£{item.price}</div>
      </div>
    ))
  } else {
    amountView = "0.00"
    maxShippingCost = "0.00"
    allTotal = "0.00"
    percentage = "0.00"
    withVAT = "0.00"
  }

  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  const stripePromise = loadStripe(publishableKey)
  const createCheckOutSession = async () => {
    try {
      if (!checkTnC) {
        toast.warning(
          "Please accept our terms and conditions before proceeding.",
          {
            position: "top-right",
            autoClose: 30000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored"
          }
        )
      } else {
        setLoading(true)
        const stripe = await stripePromise
        const checkoutSession = await axios.post(
          "/api/payments/checkout_sessions",
          {
            item: products
          }
        )
        console.log("return", checkoutSession.data)
        const result = await stripe.redirectToCheckout({
          sessionId: checkoutSession.data.id
        })
        if (result.error) {
          setLoading(false)
        }
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="ps-checkout__order">
        <h3 className="ps-checkout__heading">Your order</h3>
        <div className="ps-checkout__row">
          <div className="ps-title">Product</div>
          <div className="ps-title">Subtotal</div>
        </div>
        {cartItemsView}

        <div className="ps-checkout__row">
          <div className="ps-title">Cart Total</div>
          <div className="ps-product__price">£ {amountView}</div>
        </div>
        <div className="ps-checkout__row">
          <div className="ps-title">Shipping</div>
          <span>
            <div className="ps-product__price">£ {maxShippingCost}</div>
          </span>
        </div>
        <div className="ps-checkout__row">
          <div className="ps-title">Total</div>
          <div className="ps-product__price">£ {allTotal}</div>
        </div>
        <div className="ps-checkout__row">
          <div className="ps-title">VAT (20%)</div>
          <div className="ps-product__price">£ {percentage}</div>
        </div>

        <div className="ps-checkout__row">
          <div className="ps-title">Subtotal</div>
          <div className="ps-product__price">£ {withVAT}</div>
        </div>
        <div className="ps-checkout__payment">
          <div className="check-faq">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                onClick={(e) => setCheckTnC(e.target.checked)}
                checked={checkTnC}
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                {" "}
                I have read and agree to the website{" "}
                <Link target={"_blank"} href="/terms-of-use">
                  <u className="text-info">terms and conditions</u>
                </Link>{" "}
                *
              </label>
            </div>
          </div>

          <button
            disabled={
              userStatus
                ? products.length === 0 || loading
                  ? true
                  : false
                : true
            }
            onClick={createCheckOutSession}
            className="ps-btn ps-btn--warning"
          >
            {loading ? "Processing..." : "Buy"}
          </button>
          {UserData && UserData.result.status ? null : (
            <div className="my-3">
              {UserData &&
              UserData.result.is_verified &&
              UserData.result.customer_address_details == null ? (
                <div className="alert alert-info" role="alert">
                  Welcome to Stemnovate! Please complete your profile to get
                  custom pricing.
                </div>
              ) : null}

              {UserData && UserData.result.is_verified == 0 ? (
                <div className="alert alert-info" role="alert">
                  Welcome to Stemnovate! Please verify your email.
                </div>
              ) : null}

              {UserData &&
              UserData.result.customer_address_details !== null &&
              UserData.result.status == 0 ? (
                <div className="alert alert-info" role="alert">
                  We are reviewing your profile and we will be in touch with you
                  soon.
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default connect((state) => state)(ModulEcomerceOrderSummary)
