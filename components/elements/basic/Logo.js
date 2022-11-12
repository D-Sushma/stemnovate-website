import React from "react";
import Link from "next/link";
const baseurl = "";

const Logo = ({ url = "/", type = "default" }) => {
    if (type == "white") {
        return (
            <Link href={url}>
                <a className="ps-logo" title="Stemnovate Limited">
                    {/* <img src={baseurl+"/static/image/final-logo.png"} alt="logo" /> */}
                    <img src={baseurl + "/static/image/LogoFINAL.svg"} style={{ width: "100%", height: "100%" }} alt="Stemnovate Limited" />
                </a>
            </Link>
        );
    } else if (type == "mobile") {
        return (
            <Link href={url}>
                <a className="ps-logo" title="Stemnovate Limited">
                    {/* <img src={baseurl+"/static/image/final-logo.png"} alt="logo" /> */}
                    <img src={baseurl + "/static/image/LogoFINAL.svg"} style={{ width: "100%", height: "100%" }} alt="Stemnovate Limited" />
                </a>
            </Link>
        );
    } else {
        return (
            <Link href={url}>
                <a className="ps-logo" title="Stemnovate Limited">
                    <img src={baseurl + "/static/img/logo.svg"} style={{ width: "100%", height: "100%" }} alt="Stemnovate Limited" />
                </a>
            </Link>
        );
    }
};

export default Logo;
