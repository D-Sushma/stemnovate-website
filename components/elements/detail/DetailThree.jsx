import React from "react"

import ModuleDetailTopInformation from "~/components/elements/detail/modules/ModuleDetailTopInformation"
import ModuleProductDetailDescription from "~/components/elements/detail/modules/ModuleProductDetailDescription"
import ModuleDetailShoppingActions from "~/components/elements/detail/modules/ModuleDetailShoppingActions"
import ModuleDetailThumbnail from "~/components/elements/detail/modules/ModuleDetailThumbnail"
import useProduct from "~/hooks/useProduct"
import ModuleDetailTabs from "./modules/ModuleDetailTabs"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { ToastContainer, toast } from "react-toastify"
import FrequentlyBoughtTogether from "~/components/partials/products/FrequentlyBoughtTogether"
import { Tooltip } from "antd"
import { HiDownload } from "react-icons/hi"

const DetailThree = ({ product }) => {
  const { price } = useProduct()
  const { data: session } = useSession()

  const showEmail = () => {
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

  return (
    <div className="product--detail ps-product--detail ps-product--detail-two ps-product--detail-three">
      <ToastContainer />
      <div className="ps-product__header">
        <ModuleDetailThumbnail product={product} />
        <div className="ps-product__info">
          <div className="ps-product__left">
            <ModuleDetailTopInformation product={product} />
            <ModuleProductDetailDescription product={product} />
            <div className="ps-product__ecomerce-actions">
              <strong>SDS</strong>
              <br />
              {session ? (
                <Link
                  href={
                    product.Product_details_pdf != ""
                      ? `${process.env.AWS_S3BUCKET_URL}${product.Product_details_pdf}`
                      : "#"
                  }
                  passHref
                >
                  <a
                    target={
                      product.Product_details_pdf != "" ? `_blank` : "_self"
                    }
                    rel="noopener noreferrer"
                  >
                    <Tooltip title="SDS" placement="bottom">
                      <HiDownload size={30} />
                    </Tooltip>
                  </a>
                </Link>
              ) : (
                <a
                  onClick={() => {
                    showEmail()
                  }}
                >
                  <Tooltip title="SDS" placement="bottom">
                    <HiDownload size={30} />
                  </Tooltip>
                </a>
              )}
            </div>
          </div>
          <div className="ps-product__right">
            <div className="ps-product__shopping-wrapper">
              {price(product.product_details)}
              <ModuleDetailShoppingActions product={product} />
            </div>
          </div>
        </div>
      </div>

      <div className="ps-product__content ">
        <FrequentlyBoughtTogether
          resources_id={product.resources_id}
          pType={product?.productspecification?.Sex}
          type={product?.type}
        />
        <ModuleDetailTabs product={product} />
      </div>
    </div>
  )
}

export default DetailThree
