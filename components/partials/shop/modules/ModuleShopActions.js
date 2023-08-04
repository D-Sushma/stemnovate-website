import React, { useState } from "react";
import Image from '~/components/elements/Image'
import ModuleShopSortBy from "~/components/partials/shop/modules/ModuleShopSortBy";
import ModuleShopPaginationRange from "~/components/partials/shop/modules/ModuleShopPaginationRange";
import { useRouter } from "next/router";

const ModuleShopActions = () => {
    const router = useRouter();
    const { layout, _orderBy, _limit } = router.query;
    const pathname = router.pathname;

    React.useEffect(() => {
        console.log("layout ", router.query);
    }, [layout]);

    const layoutItems = [
        {
            id: 1,
            url: `${pathname}?layout=list${_orderBy ? "&_orderBy=" + _orderBy : ""}${_limit ? "&_limit=" + _limit : "&_limit=10"}`,
            image: "/static/img/icon/bars.svg",
            imageActive: "/static/img/icon/bars.svg",
        },
        {
            id: 2,
            url: `${pathname}?layout=grid&columns=2${_orderBy ? "&_orderBy=" + _orderBy : ""}${_limit ? "&_limit=" + _limit : "&_limit=10"}`,
            image: "/static/img/icon/gird2.svg",
            imageActive: "/static/img/icon/gird2.svg",
        },
        {
            id: 3,
            url: `${pathname}?layout=grid&columns=3${_orderBy ? "&_orderBy=" + _orderBy : ""}${_limit ? "&_limit=" + _limit : "&_limit=10"}`,
            image: "/static/img/icon/gird3.svg",
            imageActive: "/static/img/icon/gird3.svg",
        },
        {
            id: 4,
            url: `${pathname}?layout=grid&columns=4${_orderBy ? "&_orderBy=" + _orderBy : ""}${_limit ? "&_limit=" + _limit : "&_limit=10"}`,
            image: "/static/img/icon/gird4.svg",
            imageActive: "/static/img/icon/gird4.svg",
        },
    ];

    const [selectedLayout, setSelectedLayout] = useState(layoutItems[3]);

    function handleSelecteLayout(e, layout) {
        e.preventDefault();
        setSelectedLayout(layout);
        router.push(process.env.NEXT_BASE_URL + "" + layout.url, undefined, { scroll: false });
    }

    // Views

    const swichersItemsView = layoutItems.map((item) => (
        <div className={`div-shop__layout-switcher ${item.id === selectedLayout.id ? "active" : ""}`} onClick={(e) => handleSelecteLayout(e, item)} key={item.id}>
            <Image
                src={item.image}
                alt={item.image}
                width={1000}
                height={800}
            />
        </div>
    ));

    return (
        <div className="ps-shop__actions">
            <div className="ps-shop__actions-left">
                <div className="ps-shop__layout-switchers">{swichersItemsView}</div>
            </div>
            <div className="ps-shop__actions-right">
                <ModuleShopSortBy />
                <ModuleShopPaginationRange />
            </div>
        </div>
    );
};

export default ModuleShopActions;
