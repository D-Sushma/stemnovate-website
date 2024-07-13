import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Input, Button } from "antd"
import { connect, useDispatch } from "react-redux"
import { toggleDrawer } from "~/store/app/action"
import useEcomerce from "~/hooks/useEcomerce"
import useProduct from "~/hooks/useProduct"
import { useSession } from "next-auth/react"
import { ToastContainer, toast } from "react-toastify"
import { FaArrowRight } from "react-icons/fa"
import dynamic from "next/dynamic"

const Image = dynamic(() => import("~/components/elements/Image"), {
  loading: () => <p>Loading...</p>
})

const ProductList = ({ ecomerce, slug }) => {
  const { price } = useProduct()
  const [ProductData, setProductData] = useState("")
  const [AddtoCart, setAddtoCart] = useState([])
  const [isLoading, setisLoading] = React.useState(false)

  const dispatch = useDispatch()
  const { loading, addItem } = useEcomerce()
  const { data: session } = useSession()

  const handleAddItemToCart = (id, price, key) => {
    if (session) {
      console.log("handleAddItemToCart", AddtoCart[key])
      addItem(
        { id: id, quantity: AddtoCart[key], price: price },
        ecomerce.cartItems,
        "cart"
      )
      dispatch(toggleDrawer(true))
    } else {
      const CustomToastWithLink = () => (
        <div>
          <p className="text-white">
            Please{"  "}
            <Link href={"/auth/UserLogin"}>
              <u>
                <span
                  className="Toast-link font-weight-bolder"
                  style={{ cursor: "pointer" }}
                >
                  Login
                </span>
              </u>
            </Link>
            {"  "}/{"  "}
            <Link href={"/auth/UserReg"}>
              <u>
                <span
                  className="Toast-link font-weight-bolder"
                  style={{ cursor: "pointer" }}
                >
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
        autoClose: 30000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
      })
    }
  }

  const AddCart = (index) => {
    console.log("index", index)

    const NewCart = [...AddtoCart]
    const cartval = parseInt(AddtoCart[index])
    var newval = cartval + parseInt(1)
    NewCart[index] = newval
    setAddtoCart(NewCart)
    console.log(NewCart)
  }

  const RemoveCart = (index) => {
    if (AddtoCart[index]) {
      console.log("index", index)

      const NewCart = [...AddtoCart]
      const cartval = parseInt(AddtoCart[index])
      var newval = cartval - parseInt(1)
      NewCart[index] = newval
      setAddtoCart(NewCart)
      console.log(NewCart)
    }
  }

  useEffect(() => {
    getProductList()
  }, [])

  const getProductList = () => {
    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    var raw = JSON.stringify({
      slug: slug
    })

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    }

    fetch(process.env.NEXT_BASE_URL + "/api/products/catbyname", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("result_catbyname", result)
        if (result.status == 200) {
          const procount = result.ProductsList
          const NoofItem = AddtoCart.slice()
          for (let index = 0; index < procount.length; index++) {
            NoofItem.push(0)
          }
          setAddtoCart(NoofItem)
          setProductData(result)
          setisLoading(false)
        } else {
          setisLoading(false)
        }
      })
      .catch((error) => {
        console.log("error", error)
        setisLoading(false)
      })
  }

  return (
    <>
      {ProductData !== null ? (
          <div className="container">
            <ToastContainer position="top-right" />
            <div className=" row d-flex my-4 justify-content-center mx-2">
              {ProductData.Products &&
                ProductData.Products.map((post, key) => (
                  <div
                    className="col-md-3 col-sm-4 col-lg-3 mb-4 p-2 d-flex flex-column flex-grow-1"
                    key={key}
                  >
                    <div className=" card d-flex flex-column p-2 flex-grow-1 rounded-lg align-items-center">
                      <Image
                        src={
                          post.image == null
                            ? `/no-image.png`
                            : `${process.env.AWS_S3BUCKET_URL}${post.image}`
                        }
                        className="rounded"
                        alt={post.category_name}
                        // layout="fill"
                        // objectFit="cover"
                        // width="272"
                        // height="150"
                        width="386"
                        height="218"
                      />
                      <div className="card-body rounded-lg p-0 overlay-content-p">
                        <div className="p-5">
                          <Link href={`${slug}/${post.slug}`}>
                            <h2 className="h5 text-white span-with-link">
                              <b>{post.category_name}</b>
                            </h2>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                         <Link href={`${slug}/${post.slug}`}>
                            <span className="link-btn-c span-with-link">
                              <b>
                                Read More <FaArrowRight />
                              </b>
                            </span>
                          </Link>
                      </div>
                  </div>
                ))}
            </div>
         
          {/* ----------------------------- Product Section ---------------------------- */}
          {ProductData.ProductsList && ProductData.ProductsList.length > 0 ? (
            <div className="product-container">
              {/* for Mobile View */}
              <div className="forMobile">
                <div className=" mt-3 ">
                  <div className="d-flex bd-highlight">
                    <div className=" flex-grow-1 bd-highlight  fw-bold">
                      {/* --------------------------------- Item 2 ---------------------------------  */}
                      {ProductData.ProductsList.map((value, key) => (
                        <div key={key} className="card">
                          <Link
                            href={`/product/${value.product_slug}`}
                            as={`/product/${value.product_slug}`}
                          >
                            <div className="d-flex justify-content-center">
                              <Image
                                src={`${process.env.AWS_S3BUCKET_URL}${
                                  value?.product_image.split(",")[0]
                                }`}
                                alt={value?.product_slug}
                                width="386"
                                height="218"
                              />
                            </div>
                          </Link>

                          <div className="card-body">
                            <div className="d-flex flex-column justify-content-center">
                              <div className="d-flex justify-content-center py-3">
                                <Link
                                  href={`/product/${value.product_slug}`}
                                  as={`/product/${value.product_slug}`}
                                >
                                  <div
                                    className="reference-website"
                                    style={{ cursor: "pointer" }}
                                  >
                                    {value && value.CatalogueNumber}
                                  </div>
                                </Link>
                              </div>

                              <div
                                className="d-flex justify-content-center p-3"
                                dangerouslySetInnerHTML={{
                                  __html: value.short_description
                                }}
                              ></div>
                              <div className="d-flex justify-content-center py-3 ">
                                {price(value?.product_details)}
                              </div>
                              <div className="card-footer">
                                <div className="d-flex justify-content-center py-3 ">
                                  <Link
                                    href={`/product/${value.product_slug}`}
                                    as={`/product/${value.product_slug}`}
                                  >
                                    <div
                                      className=" reference-website"
                                      style={{ cursor: "pointer" }}
                                    >
                                      View Details
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* for Big Screen */}
              <div className="forDesktop">
                <div className=" mt-3 ">
                  <div className="d-flex bd-highlight">
                    <div className=" flex-grow-1 bd-highlight  fw-bold">
                      {/* --------------------------------- heading -------------------------------- */}
                      <div
                        className="d-flex border-bottom flex-row justify-content-between"
                        style={{
                          backgroundColor: "#5292A4",
                          color: "#fff"
                        }}
                      >
                        <div className="p-2  ">
                          <p className="text-white">Catalogue Number</p>
                        </div>
                        <div className="py-2   font-weight-bold">
                          <p className="text-white ">Product Description</p>
                        </div>
                        <div className="p-2  ">
                          <p className="text-white ">Pricing</p>
                        </div>
                      </div>
                      {/* --------------------------------- Items ---------------------------------  */}
                      {ProductData.ProductsList.map((value, key) => (
                        <div key={key}>
                          <div className="d-flex bd-highlight border-bottom ">
                            <div className="p-2 w-18 bd-highlight  ">
                              <Link
                                href={`/product/${value.product_slug}`}
                                as={`/product/${value.product_slug}`}
                              >
                                <span className="span-with-link">
                                  {value && value.CatalogueNumber}
                                </span>
                              </Link>
                            </div>
                            <div
                              className="p-2 w-72 bd-highlight  "
                              dangerouslySetInnerHTML={{
                                __html: value.short_description
                              }}
                            ></div>
                            <div className="p-2 w-10 bd-highlight  text-right font-weight-bold">
                              <div
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#expand${key}`}
                                className="collapsed "
                                aria-expanded="false"
                                aria-controls={`expand${key}`}
                              >
                                <h5>
                                  <span className="help">
                                    <span className="expander font-weight-bold"></span>
                                    <i
                                      className="fa font-weight-bold ml-1"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                </h5>
                              </div>
                            </div>
                          </div>
                          <div className="collapse" id={`expand${key}`}>
                            <div
                              className="card card-body p-0"
                              style={{
                                backgroundColor: "#f0f2f5"
                              }}
                            >
                              <div
                                className="d-flex justify-content-around p-0"
                                style={{
                                  backgroundColor: "#5292a4ab",
                                  color: "#fff"
                                }}
                              >
                                <div className="p-2 bd-highlight w-15  font-weight-bold">
                                  Catalogue Number
                                </div>
                                <div className="p-2 bd-highlight w-15  font-weight-bold">
                                  Product Unit
                                </div>
                                <div className="p-2 bd-highlight w-15  font-weight-bold">
                                  Deliver Type
                                </div>
                                <div className="p-2 bd-highlight w-15  font-weight-bold">
                                  Technical Documents
                                </div>
                                <div className="p-2 bd-highlight w-15  font-weight-bold">
                                  Availability
                                </div>
                                <div className="p-2 bd-highlight w-10  font-weight-bold">
                                  Price
                                </div>
                                <div className="p-2 bd-highlight w-15  font-weight-bold">
                                  Quantity
                                </div>
                              </div>
                              <div className="d-flex justify-content-around align-items-center">
                                <div className="p-2 bd-highlight w-15  ">
                                  <Link
                                    href={`/product/${value.product_slug}`}
                                    as={`/product/${value.product_slug}`}
                                  >
                                    <span className="span-with-link">
                                      {value && value.CatalogueNumber}
                                    </span>
                                  </Link>
                                </div>
                                <div className="p-2 bd-highlight w-15  ">
                                  {value.product_details &&
                                    value.product_details.product_unit}
                                </div>
                                <div className="p-2 bd-highlight w-15  ">
                                  {value.deliver_type}
                                </div>
                                <div className="p-2 bd-highlight w-15  ">
                                  {session ? (
                                    value.Product_details_pdf != "" ? (
                                      <Link
                                        href={
                                          session
                                            ? `${process.env.AWS_S3BUCKET_URL}${value.Product_details_pdf}`
                                            : "#"
                                        }
                                        passHref
                                      >
                                        <a
                                          target={session ? "_blank" : null}
                                          rel="noopener noreferrer"
                                        >
                                          <i
                                            className="fa fa-download font-weight-bold"
                                            aria-hidden="true"
                                          ></i>
                                        </a>
                                      </Link>
                                    ) : (
                                      "-"
                                    )
                                  ) : (
                                    <i
                                      className="fa fa-download font-weight-bold"
                                      onClick={() => {
                                        handleAddItemToCart()
                                      }}
                                      aria-hidden="true"
                                    ></i>
                                  )}
                                </div>
                                <div className="p-2 bd-highlight w-15  ">
                                  {value.stock}
                                </div>
                                <div className="p-2 bd-highlight w-10  ">
                                  £
                                  {value.product_details &&
                                    value.product_details.sale_price}
                                </div>
                                <div className=" bd-highlight w-15 align-items-center  ">
                                  <div
                                    className="d-flex bd-highlight justify-content-around align-items-center"
                                    style={{
                                      width: "75%"
                                    }}
                                  >
                                    <div className="p-2 bd-highlight ">
                                      <Input
                                        size="large"
                                        className="text-center"
                                        addonBefore={
                                          <span
                                            className="w-18"
                                            onClick={() => RemoveCart(key)}
                                          >
                                            <i
                                              className="fa fa-minus w-18 font-weight-bold"
                                              onClick={() => RemoveCart(key)}
                                              style={{
                                                cursor: "pointer"
                                              }}
                                              aria-hidden="true"
                                            ></i>
                                          </span>
                                        }
                                        addonAfter={
                                          <span
                                            className="w-18"
                                            onClick={() => AddCart(key)}
                                          >
                                            <i
                                              className="fa fa-plus w-18 font-weight-bold"
                                              onClick={() => AddCart(key)}
                                              style={{
                                                cursor: "pointer"
                                              }}
                                              aria-hidden="true"
                                            ></i>
                                          </span>
                                        }
                                        value={AddtoCart[key]}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="d-flex justify-content-end">
                                <div className="p-2  bd-highlight ">
                                  {AddtoCart[key] > 0 ? (
                                    <Button
                                      type="primary"
                                      onClick={() => {
                                        !loading
                                          ? handleAddItemToCart(
                                              value.id,
                                              value.product_details.sale_price,
                                              key
                                            )
                                          : null
                                      }}
                                    >
                                      Add To Cart
                                    </Button>
                                  ) : (
                                    <Button type="primary" disabled>
                                      Add To Cart
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}s
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  )
}

// export default categoryListScreen;
export default connect((state) => state)(ProductList)
