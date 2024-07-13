import React from "react";
import { Button, Dropdown, Menu } from "antd";
import { useRouter } from "next/router";

const ModuleShopSortBy = () => {
  const router = useRouter();
  const { _orderBy, layout } = router.query;
  // const { _limit, columns } = router.query;

  const getUrl = (id) => {
    const searchParams = new URLSearchParams(router.query);

    searchParams.delete("_orderBy");

    if (id === 4) {
      searchParams.set("_orderBy", "asc");
    }
    if (id === 5) {
      searchParams.set("_orderBy", "desc");
    }
    if (!layout) {
      searchParams.set("layout", "grid");
    }

    const newUrl = `${router.pathname}?${searchParams.toString()}`;
    router.push(newUrl);
  };

  const sortByItems = [
    {
      id: 4,
      text: "Price: Low - High",
      //   url: `${pathname}?_orderBy=asc${
      //     layout ? "&layout=" + layout : "&layout=grid"
      //   }${columns ? "&columns=" + columns : "&columns=4"}${
      //     _limit ? "&_limit=" + _limit : "&_limit=10"
      //   }`
    },
    {
      id: 5,
      text: "Price: High - Low",
      //   url: `${pathname}?_orderBy=desc${
      //     layout ? "&layout=" + layout : "&layout=grid"
      //   }${columns ? "&columns=" + columns : "&columns=4"}${
      //     _limit ? "&_limit=" + _limit : "&_limit=10"
      //   }`
    },
  ];
  const viewItems = sortByItems.map((item) => (
    <Menu.Item key={item.id}>
      <div onClick={() => getUrl(item.id)}>
        <div>{item.text}</div>
      </div>
    </Menu.Item>
  ));
  const view = <Menu>{viewItems}</Menu>;

  return (
    <div className="ps-shop__sortby">
      <span>Sort by</span>
      <Dropdown
        overlay={view}
        placement="bottomLeft"
        className="ps-dropdown-toggle"
      >
        <Button>
          {_orderBy == "asc"
            ? "Price: Low - High"
            : _orderBy == "desc"
            ? "Price: High - Low"
            : "Please Select"}{" "}
          <i className="icon-chevron-down"></i>
        </Button>
      </Dropdown>
    </div>
  );
};

export default ModuleShopSortBy;
