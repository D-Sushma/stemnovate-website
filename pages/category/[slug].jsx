import React, { useEffect } from "react"
import { useRouter } from "next/router"
import useGetProducts from "~/hooks/useGetProducts"
import useProductGroup from "~/hooks/useProductGroup"
import { ToastContainer } from "react-toastify"
import dynamic from "next/dynamic"

const Container = dynamic(() => import("~/components/layouts/Container"), {
  loading: () => <p>Loading...</p>
})
const BreadCrumb = dynamic(() => import("~/components/elements/BreadCrumb"), {
  loading: () => <p>Loading...</p>
})
const SidebarShop = dynamic(
  () => import("~/components/shared/sidebar/SidebarShop"),
  { loading: () => <p>Loading...</p> }
)
const Shop = dynamic(() => import("~/components/partials/shop/Shop"), {
  loading: () => <p>Loading...</p>
})

const CategoryScreen = () => {
  const Router = useRouter()
  const { query } = Router
  const { slug } = Router.query
  const { loading, category, getCategoryBySlug } = useGetProducts()
  const { withGrid } = useProductGroup()

  useEffect(() => {
    slug && getCategoryBySlug(slug)
  }, [slug])

  let products
  if (category) {
    if (category.ProductsList.length > 0) {
      if (query) {
        if (query.layout === "list") {
          products = withList(category.ProductsList, loading, 4)
        } else if (query.layout === "grid") {
          products = withGrid(category.ProductsList, loading, 4)
          switch (query.columns) {
            case "2":
              products = withGrid(category.ProductsList, loading, 2)
              break
            case "3":
              products = withGrid(category.ProductsList, loading, 3)
              break
            default:
              products = withGrid(category.ProductsList, loading, 4)
              break
          }
        } else {
          products = withGrid(category.ProductsList, loading, 4)
        }
      } else {
        products = withGrid(category.ProductsList, loading, 4)
      }
    } else {
      products = <p>No product found.</p>
    }
  }

  const breadcrumb = [
    {
      id: 1,
      text: "Home",
      url: "/"
    },
    {
      id: 2,
      text: "Products",
      url: "/Products"
    },

    {
      id: 3,
      text: category ? category.category_name : "Category"
    }
  ]

  return (
    <>
      <Container title="Shop">
        <ToastContainer />
        <div className="ps-page ps-page--shopping">
          <div className="ps-page__header breadcrumb-h product-breadcrumb-bg">
            <div className="container">
              <BreadCrumb breacrumb={breadcrumb} />
              <h1 className="ps-page__heading text-white">
                {category ? category.category_name : "Category"}
              </h1>
            </div>
          </div>
          <div className="about-section">
            <div className="container">
              <div className="ps-page__content">
                <div className="ps-layout--with-sidebar">
                  <div className="ps-layout__left">
                    <SidebarShop />
                  </div>
                  <div className="ps-layout__right">
                    <Shop classes="ps-shop--grid">{products}</Shop>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default CategoryScreen