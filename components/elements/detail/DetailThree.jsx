import React from "react"
import useProduct from "~/hooks/useProduct"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { ToastContainer, toast } from "react-toastify"
import { Tooltip } from "antd"
import { HiDownload } from "react-icons/hi"
import dynamic from "next/dynamic"

const ModuleDetailTopInformation = dynamic(
  () =>
    import("~/components/elements/detail/modules/ModuleDetailTopInformation"),
  { loading: () => <p>Loading...</p> }
)
const ModuleProductDetailDescription = dynamic(
  () =>
    import("~/components/elements/detail/modules/ModuleDetailShoppingActions"),
  { loading: () => <p>Loading...</p> }
)
const ModuleDetailShoppingActions = dynamic(
  () =>
    import("~/components/elements/detail/modules/ModuleDetailShoppingActions"),
  { loading: () => <p>Loading...</p> }
)
const ModuleDetailThumbnail = dynamic(
  () => import("~/components/elements/detail/modules/ModuleDetailThumbnail"),
  { loading: () => <p>Loading...</p> }
)
const ModuleDetailTabs = dynamic(() => import("./modules/ModuleDetailTabs"), {
  loading: () => <p>Loading...</p>
})
const FrequentlyBoughtTogether = dynamic(
  () => import("~/components/partials/products/FrequentlyBoughtTogether"),
  { loading: () => <p>Loading...</p> }
)

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
              <span className="Toast-link font-weight-bolder link-hover-thumb-shape">
                Login
              </span>
            </u>
          </Link>
          {"  "}/{"  "}
          <Link href={"/auth/UserReg"}>
            <u>
              <span className="Toast-link font-weight-bolder link-hover-thumb-shape">
                Signup
              </span>
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
            <div className="d-flex justify-content-between">
              <div className="ps-product__ecomerce-actions">
                <strong>SDS</strong>
                <br />
                {session ? (
                  <Link
                    href={
                      product?.Product_details_pdf != ""
                        ? `${process.env.AWS_S3BUCKET_URL}${product?.Product_details_pdf}`
                        : "#"
                    }
                    passHref
                  >
                    <a
                      target={
                        product?.Product_details_pdf != "" ? `_blank` : "_self"
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
                    href="#"
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
              <div className="ps-product__ecomerce-actions">
                <strong>Privacy Policy Doc</strong>
                <br />
                {session ? (
                  <Link
                    href={
                      product?.privacy_policy_pdf != "" && product?.privacy_policy_pdf != null
                        ? `${process.env.AWS_S3BUCKET_URL}${product?.privacy_policy_pdf}`
                        : "#"
                    }
                    passHref
                  >
                    <a
                      target={
                        product?.privacy_policy_pdf != "" && product?.privacy_policy_pdf != null ? `_blank` : "_self"
                      }
                      rel="noopener noreferrer"
                    >
                      <Tooltip title="Privacy Policy Doc" placement="bottom">
                        <HiDownload size={30} />
                      </Tooltip>
                    </a>
                  </Link>
                ) : (
                  <a
                    href="#"
                    onClick={() => {
                      showEmail()
                    }}
                  >
                    <Tooltip title="Privacy Policy Doc" placement="bottom">
                      <HiDownload size={30} />
                    </Tooltip>
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="ps-product__right">
            {/* <div className="ps-product__coupon_r"> */}
            <div className="ps-product__shopping-wrapper">
              {price(product.product_details)}
              <ModuleDetailShoppingActions product={product} />
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>

      <div className="ps-product__content ">
        <FrequentlyBoughtTogether
          resources_id={product.resources_id}
          pType={product?.productspecification?.Sex}
          type={product?.type}
          imp_notes={product?.important_notes}
          share_img={product?.shareimage}
        />
        <ModuleDetailTabs product={product} />
      </div>
    </div>
  )
}

export default DetailThree
