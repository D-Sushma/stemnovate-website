import React from "react";
import { Button, Dropdown, Menu } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";

const ModuleShopPaginationRange = () => {
    const router = useRouter();
    const { query } = router;
    const { _limit, layout, _orderBy, columns } = query;

    const pathname = router.pathname;

    React.useEffect(() => {
        console.log("shopping range", router.query);
    }, [router]);
    let ranges = [10, 20, 50, 100];
    const paginationRangeItems = ranges.map((item) => (
        <Menu.Item key={item}>
            <Link href={`${pathname}?_limit=${item}${layout ? "&layout=" + layout : ""}${columns ? "&columns=" + columns : "&columns=4"}${_orderBy ? "&_orderBy=" + _orderBy : ""}`}>
                <a>{item}</a>
            </Link>
        </Menu.Item>
    ));
    const view = <Menu>{paginationRangeItems}</Menu>;
    return (
        <div className="ps-shop__sortby">
            <span>Show</span>
            <Dropdown overlay={view} placement="bottomLeft" className="ps-dropdown-toggle">
                <Button>
                    <strong>{_limit ? _limit : 10}</strong> <i className="icon-chevron-down"></i>
                </Button>
            </Dropdown>
        </div>
    );
};

export default ModuleShopPaginationRange;
