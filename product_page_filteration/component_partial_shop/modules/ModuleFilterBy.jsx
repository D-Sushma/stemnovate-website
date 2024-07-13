import React, { useRef } from "react";
import { useRouter } from "next/router";

const ModuleFilterBy = () => {
  const router = useRouter();
  const { query } = router;
  const pathname = router.pathname;
  const myFilter = useRef();

  const sortByItems = [
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

  const handleRedirect = () => {
    const searchParams = new URLSearchParams(query);
    searchParams.delete("gender");
    searchParams.delete("Delivery_Type");
    searchParams.delete("pType");
    const existingParam = searchParams.toString();
    const myInputs = myFilter.current.querySelectorAll("input");
    let queryString = "?";
    myInputs.forEach((node) => {
      if (node.checked) {
        queryString += `${node.name}=${node.id}&`;
      }
    });
    // console.log(queryString);
    router.push(`${pathname}${queryString}${existingParam}`);
  };

  return (
    <div>
      <h3>Filter By</h3>
      <div className="ps-shop__sortby" ref={myFilter}>
        {sortByItems.map((item) => (
          <div style={{ width: "45%" }} key={item.id}>
            <input
              className="m-2"
              onChange={handleRedirect}
              type="checkbox"
              id={item.url}
              name={item.type}
              checked={!!query[item.type]?.includes(item.url)}
            />
            <label htmlFor={item.url}>{item.text} </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModuleFilterBy;
