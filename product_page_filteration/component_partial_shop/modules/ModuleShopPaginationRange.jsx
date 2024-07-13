import React from "react";
import { Button, Dropdown, Menu } from "antd";
import { useRouter } from "next/router";

const ModuleShopPaginationRange = () => {
  const router = useRouter();
  const { query } = router;
  const { _limit, layout, _orderBy, columns } = query;

  const getUrl = (limit) => {
    const searchParams = new URLSearchParams(query);

    searchParams.set("_limit", limit);
    if (layout) {
      searchParams.set("layout", layout);
    }
    if (columns) {
      searchParams.set("columns", columns);
    } else {
      if(layout !== "list"){
        searchParams.set("columns", 4);
      }
    }
    if (_orderBy) {
      searchParams.set("_orderBy", _orderBy);
    }

    const newUrl = `${router.pathname}?${searchParams.toString()}`;
    router.push(newUrl);
  };

  const ranges = [10, 20, 50, 100];
  const paginationRangeItems = ranges.map((item) => (
    <Menu.Item key={item}>
      <div onClick={() => getUrl(item)}>
        <div>{item}</div>
      </div>
    </Menu.Item>
  ));
  const view = <Menu>{paginationRangeItems}</Menu>;
  return (
    <div className="ps-shop__sortby">
      <span>Show</span>
      <Dropdown
        overlay={view}
        placement="bottomLeft"
        className="ps-dropdown-toggle"
      >
        <Button>
          <strong>{_limit ? _limit : 10}</strong>{" "}
          <i className="icon-chevron-down"></i>
        </Button>
      </Dropdown>
    </div>
  );
};

export default ModuleShopPaginationRange;
