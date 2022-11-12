import React from "react";

export function calculateAmount(obj) {
    return Object.values(obj)
        .reduce((acc, { quantity, price }) => acc + quantity * price, 0)
        .toFixed(2);
}
export function calculateShipping(obj) {
    console.log("obj", obj);
    return Object.values(obj)
        .reduce((acc, { quantity, product_details }) => acc + quantity * product_details.shipping_cost, 0)
        .toFixed(2);
}

export function calculateCartQuantity(obj) {
    return Object.values(obj).reduce((acc, { quantity }) => acc + quantity, 0);
}

export function caculateArrayQuantity(obj) {
    return Object.values(obj).reduce((acc) => acc + 1, 0);
}

export function calculatePercentage(percent, total) {
    return ((percent / 100) * total).toFixed(2);
}
