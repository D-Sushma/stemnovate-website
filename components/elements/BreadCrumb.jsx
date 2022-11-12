import React from "react";
import Link from "next/link";

const BreadCrumb = ({ breacrumb }) => {
    return (
        <ul className="breadcrumb text-white">
            {breacrumb.map((item) => {
                if (!item.url) {
                    return (
                        <li className="text-white" key={item.id}>
                            {item.text}
                        </li>
                    );
                } else {
                    return (
                        <li className="text-white" key={item.text}>
                            <Link href={item.url}>
                                <a className="text-white">{item.text}</a>
                            </Link>
                        </li>
                    );
                }
            })}
        </ul>
    );
};

export default BreadCrumb;
