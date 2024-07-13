// ActionTypes -----------------------------
export const actionTypes = {
    SET_COUPON_DISCOUNT : "SET_COUPON_DISCOUNT",
    SET_MAX_SHIPPING_COST : "SET_MAX_SHIPPING_COST",
    SET_CUSTOMER_COUNTRY : "SET_CUSTOMER_COUNTRY",
    SET_COUPON_PRODUCT_PRICE : " SET_COUPON_PRODUCT_PRICE",
    SET_COUPON_PRODUCT_NAME : "SET_COUPON_PRODUCT_NAME",
    SET_DISCOUNT : "SET_DISCOUNT",
    SET_COUPON_DISCOUNT_TYPE : "SET_COUPON_DISCOUNT_TYPE",
    SET_COUPON_CODE : "SET_COUPON_CODE"
}

// Action creators ---------------------------------
export const setCouponDiscount = (payload) =>{
    return {type: actionTypes.SET_COUPON_DISCOUNT, payload};
}
export const setMaxShippingCost = (payload) =>{
    return {type: actionTypes.SET_MAX_SHIPPING_COST, payload};
}
export const setCustomerCountry = (payload) =>{
    return {type: actionTypes.SET_CUSTOMER_COUNTRY, payload};
}
export const setCouponProductPrice = (payload) =>{
    return {type: actionTypes.SET_COUPON_PRODUCT_PRICE, payload};
}
export const setCouponProductName = (payload) =>{
    return {type: actionTypes.SET_COUPON_PRODUCT_NAME, payload};
}
export const setDiscount = (payload) =>{
    return {type: actionTypes.SET_DISCOUNT, payload};
}
export const setCouponDiscountType = (payload) =>{
    return {type: actionTypes.SET_COUPON_DISCOUNT_TYPE, payload};
}
export const setCouponCode = (payload) =>{
    return {type: actionTypes.SET_COUPON_CODE, payload};
}