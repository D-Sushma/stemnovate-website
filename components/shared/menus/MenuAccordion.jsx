import React, { useState } from "react";
import Link from "next/link";
// import Collapse from "~/components/elements/basic/Collapse";
import dynamic from "next/dynamic"

const Collapse = dynamic(
  () => import("~/components/elements/basic/Collapse"),
  { loading: () => <p>Loading...</p> }
)

const MenuAccordion = ({ data, classes = "menu", parent, is_page }) => {
    const [isOpen, setIsOpen] = useState(null);
    const handleToggleAccordion = (index) => {
        if (index !== isOpen) {
            setIsOpen(index);
        } else {
            setIsOpen(null);
        }
    };

    return (
        <ul className={classes}>
            {data.map((item) => {
                if (item.modules) {
                    return (
                        <li className={`menu__item menu__item--has-children ${isOpen === item.key || item.key === true ? "active" : ""}`} key={item.key}>
                            <a href="#" className="menu__toggle" onClick={(e) => handleToggleAccordion(item.key)}>
                                <a href={item.is_page ? `${item.url}` : `${parent}${item.url}`}>
                                    <span className="menu__text">{item.name}</span>
                                </a>
                                <i className="icon-chevron-down menu__icon--down" />
                            </a>
                            <Collapse elementType="div" isOpen={item.key === isOpen || item.key === true ? true : false} aria-hidden="true" className="sub-menu-wrapper">
                                <MenuAccordion data={item.modules} classes="sub-menu" parent={`${parent}${item.url}`} is_page={item.is_page} />
                            </Collapse>
                        </li>
                    );
                } else if (item.megaContent) {
                    return (
                        <li className={`menu__item menu__item--has-children has-mega-menu ${isOpen === item.id || item.active === true ? "active" : ""}`} key={item.id}>
                            <a href="#" className="menu__toggle" onClick={(e) => handleToggleAccordion(item.id)}>
                                <span className="menu__text">{item.text}</span>
                                <i className="icon-chevron-down menu__icon--down" />
                            </a>
                            <Collapse elementType="div" isOpen={item.id === isOpen || item.active === true ? true : false} aria-hidden={isOpen ? "false" : "true"} className="sub-menu-wrapper">
                                <MenuAccordion data={item.megaContent} classes="sub-menu" />
                            </Collapse>
                        </li>
                    );
                } else if (item.megaItems) {
                    return (
                        <li className={`menu__item menu__item--has-children ${isOpen === item.id || item.active === true ? "active" : ""}`} key={item.id}>
                            <a href="#" className="menu__toggle" onClick={(e) => handleToggleAccordion(item.id)}>
                                <span className="menu__text">{item.heading}</span>
                                <i className="icon-chevron-down menu__icon--down" />
                            </a>
                            <Collapse elementType="div" isOpen={item.id === isOpen || item.active === true ? true : false} aria-hidden={isOpen ? "false" : "true"} className="sub-menu-wrapper">
                                <MenuAccordion data={item.megaItems} classes="sub-menu" />
                            </Collapse>
                        </li>
                    );
                } else {
                    if (item.title) {
                        return (
                            <li className="menu__title" key={item.id}>
                                <span>{item.text}</span>
                            </li>
                        );
                    } else {
                        return (
                            <li key={item.text} className="menu__item">
                                <Link href={item.url}>
                                    <a>
                                        <span className="menu__text">{item.text}</span>
                                    </a>
                                </Link>
                            </li>
                        );
                    }
                }
            })}
        </ul>
    );
};

export default MenuAccordion;
