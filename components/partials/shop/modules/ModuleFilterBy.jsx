import React, { useRef } from "react";
import { Button, Dropdown, Menu } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";
import { serializeQuery } from "~/repositories/Repository";

const ModuleFilterBy = () => {
    const router = useRouter();
    const { query } = router;
    const myQuery = query;
    const { _orderBy } = router.query;
    const pathname = router.pathname;
    const myFilter = useRef();

    React.useEffect(() => {
        console.log("sort by", router.query);
    }, [query]);

    const sortByItems = [
        // {
        //     id: 1,
        //     text: "age",
        //     url: "?_limit=10&_orderBy=desc",
        // },

        {
            id: 3,
            text: "Male",
            type: "gender",
            url: "Male",
        },
        {
            id: 4,
            text: "Female",
            type: "gender",
            url: "Female",
        },
        {
            id: 5,
            text: "Frozen",
            type: "Delivery_Type",
            url: "Frozen",
        },
        {
            id: 6,
            text: "Live",
            type: "Delivery_Type",
            url: "Live",
        },
        {
            id: 7,
            text: "Human",
            type: "pType",
            url: "13",
        },
        {
            id: 8,
            text: "Animal",
            type: "pType",
            url: "14",
        },
    ];
    const handleRedirect = (e) => {
        const myInputs = myFilter.current.querySelectorAll("input");
        let queryString = "?";
        myInputs.forEach((node) => {
            if (node.checked) {
                queryString += `${node.name}=${node.id}&`;
            }
        });
        console.log(queryString);
        router.push(`${pathname}${queryString}`);
        //e.target.checked ? router.push(item.url) : null;
    };

    return (
        <div>
            <h3>Filter By</h3>
            <div className="ps-shop__sortby" ref={myFilter}>
                {sortByItems.map((item) => (
                    <div style={{ width: "45%" }} key={item.id}>
                        <input className="m-2" onClick={handleRedirect} type="radio" id={item.url} name={item.type} />
                        <label htmlFor={item.url}>{item.text} </label>
                    </div>
                ))}

                {/* <span>Filter By</span>
            <Dropdown overlay={view} placement="bottomLeft" className="ps-dropdown-toggle">
                <Button>
                    Popularity <i className="icon-chevron-down"></i>
                </Button>
            </Dropdown> */}
            </div>
        </div>
    );
};

export default ModuleFilterBy;
