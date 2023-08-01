import React, { useState } from "react";
import Router from "next/router";
import Link from 'next/link'

const FormSearchHeader = () => {
    const [keyword, setKeyword] = useState(null);

    function handleSetKeyword(e) {
        e.preventDefault();
        if (e.target.value !== "") {
            setKeyword(e.target.value);
        } else {
            setKeyword(e.target.value);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (keyword !== "") {
            Router.push(`${process.env.NEXT_BASE_URL}search?keyword=${keyword}`);
        }
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="header__search-form">
            <div className="ps-search-table">
                <div className="input-group">
                    <input className="form-control ps-input" type="text" placeholder="Search for products" onChange={(e) => handleSetKeyword(e)} />
                    <div className="input-group-append">
                        <Link href="#">
                            <div onClick={(e) => handleSubmit(e)} style={{cursor:"pointer"}}>
                                <i className="fa fa-search"></i>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default FormSearchHeader;
