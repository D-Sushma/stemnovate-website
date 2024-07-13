import React, { useState } from "react";
import { useRouter } from "next/router";
import dynamic from 'next/dynamic'

const Image = dynamic(() => import("~/components/elements/Image"), {
    loading: () => <p>Loading...</p>
})
const ModuleShopSortBy = dynamic(
    () => import("~/components/partials/shop/modules/ModuleShopSortBy"),
    { loading: () => <p>Loading...</p> }
)
const ModuleShopPaginationRange = dynamic(
    () => import("~/components/partials/shop/modules/ModuleShopPaginationRange"),
    { loading: () => <p>Loading...</p> }
)

const ModuleShopActions = () => {
    const router = useRouter();
    const {_orderBy, _limit } = router.query;
    // const { layout, _orderBy, _limit } = router.query;
    const pathname = router.pathname;

    // React.useEffect(() => {
    //     console.log("layout ", router.query);
    // }, [layout]);

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

    function handleSelectLayout(e, layout) {
        e.preventDefault()
        setSelectedLayout(layout)
        const searchParams = new URLSearchParams(router.query)

        searchParams.delete("layout")
        searchParams.delete("columns")

        if (layout.id === 1) {
            searchParams.set("layout", "list")
        } else {
            searchParams.set("layout", "grid")
            searchParams.set("columns", layout.id)
        }

        if (!_limit) {
            searchParams.set("_limit", 10)
        }

        const newUrl = `${router.pathname}?${searchParams.toString()}`;
        router.push(newUrl)
    }

    // Views
    const swichersItemsView = layoutItems.map((item) => (
        <div className={`div-shop__layout-switcher ${item.id === selectedLayout.id ? "active" : ""
            }`}
            onClick={(e) => handleSelectLayout(e, item)}
            key={item.id}
        >
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
