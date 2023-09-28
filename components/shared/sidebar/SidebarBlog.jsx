import React from "react"
import dynamic from "next/dynamic"

const WidgetShopPromotion = dynamic(
  () => import("~/components/shared/widgets/WidgetShopPromotion"),
  { loading: () => <p>Loading...</p> }
)
const WidgetBlogCategories = dynamic(
  () => import("~/components/shared/widgets/WidgetBlogCategories"),
  { loading: () => <p>Loading...</p> }
)
const WidgetShopRelatedProducts = dynamic(
  () => import("~/components/shared/widgets/WidgetShopRelatedProducts"),
  { loading: () => <p>Loading...</p> }
)

const SidebarBlog = () => {
  return (
    <div className="ps-sidebar--shop">
      <WidgetBlogCategories />
      <WidgetShopRelatedProducts />
      <WidgetShopPromotion />
    </div>
  )
}

export default SidebarBlog
