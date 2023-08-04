import React from "react";
import { Button, Dropdown, Menu } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";

const ModuleShopSortBy = () => {
    const router = useRouter();
    const { _orderBy, _limit, layout, columns } = router.query;
    const pathname = router.pathname;

    React.useEffect(() => {
        console.log("sort by", router.query);
    }, [_orderBy]);

    const sortByItems = [
        {
            id: 4,
            text: "Price: Low - High",
            url: `${pathname}?_orderBy=asc${layout ? "&layout=" + layout : "&layout=grid"}${columns ? "&columns=" + columns : "&columns=4"}${_limit ? "&_limit=" + _limit : "&_limit=10"}`,
        },
        {
            id: 5,
            text: "Price: High - Low",
            url: `${pathname}?_orderBy=desc${layout ? "&layout=" + layout : "&layout=grid"}${columns ? "&columns=" + columns : "&columns=4"}${_limit ? "&_limit=" + _limit : "&_limit=10"}`,
        },
    ];
    const viewItems = sortByItems.map((item) => (
        <Menu.Item key={item.id}>
            <Link href={item.url}>
                <div>{item.text}</div>
            </Link>
        </Menu.Item>
    ));
    const view = <Menu>{viewItems}</Menu>;

    return (
        <div className="ps-shop__sortby">
            <span>Sort by</span>
            <Dropdown overlay={view} placement="bottomLeft" className="ps-dropdown-toggle">
                <Button>
                    {_orderBy == "asc" ? "Price: Low - High" : _orderBy == "desc" ? "Price: High - Low" : "Please Select"} <i className="icon-chevron-down"></i>
                </Button>
            </Dropdown>
        </div>
    );
};

export default ModuleShopSortBy;
