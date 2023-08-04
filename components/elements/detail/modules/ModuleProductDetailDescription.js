import React from "react";

const ModuleProductDetailDescription = ({ product }) => (
  <ul className="ps-product__short-desc">
    <div className="p-2 w-72 bd-highlight  " dangerouslySetInnerHTML={{
      __html: product.short_description
    }}>
    </div>
  </ul>
);

export default ModuleProductDetailDescription;
