import React from "react"
import { useRouter } from "next/router"
import dynamic from 'next/dynamic'

const WidgetShopCategories = dynamic(
  () => import("~/components/shared/widgets/WidgetShopCategories"),
  {loading: ()=> <p>Loading...</p>}
)
const ModuleFilterBy = dynamic(
  () => import("~/components/partials/shop/modules/ModuleFilterBy"),
  {loading: ()=> <p>Loading...</p>}
)

const SidebarShop = () => {
  const Router = useRouter()
  const str = Router.asPath
  var res = str.split("/")
  React.useEffect(() => {
    console.log("Router", res)
  }, [])

  return (
    <div className="ps-sidebar--shop">
      <WidgetShopCategories />
      {res[1] !== "category" && <ModuleFilterBy />}
    </div>
  )
}

export default SidebarShop
