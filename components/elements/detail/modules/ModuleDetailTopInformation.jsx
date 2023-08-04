import React from "react"

const ModuleDetailTopInformation = ({ product }) => {
  // Views
  return (
    <header className="ps-product__top-info">
      <h1 className="ps-product__title">{product.product_name}</h1>
    </header>
  )
}

export default ModuleDetailTopInformation
