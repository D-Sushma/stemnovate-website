import React from "react";
import WidgetShopCategories from "~/components/shared/widgets/WidgetShopCategories";
import ModuleFilterBy from "~/components/partials/shop/modules/ModuleFilterBy";
import { useRouter } from "next/router";
const SidebarShop = () => {
    const Router = useRouter();
    const str = Router.asPath;
    var res = str.split("/");
    React.useEffect(() => {
        console.log("Router", res);
    }, []);

    return (
        <div className="ps-sidebar--shop">
            <WidgetShopCategories />
            {res[1] !== "category" && <ModuleFilterBy />}

            {/* <WidgetShopFilterByPriceRange />
            <WidgetShopFilterByColor />
            <WidgetShopFilterByBrands />
            <WidgetShopByRating />
            <WidgetShopPromotion /> */}
        </div>
    );
};

export default SidebarShop;
