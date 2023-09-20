import React from "react";
import Link from "next/link";
import Image from '~/components/elements/Image'
const baseurl = "";

const Logo = ({ url = "/", type = "default" }) => {
    if (type == "white") {
        return (
            <Link href={url} prefetch={false}>
                <div className="ps-logo link-hover-thumb-shape" title="Stemnovate Limited">
                    <Image
                        src={baseurl + "/static/image/LogoFINAL.svg"}
                        alt="Stemnovate Limited"
                        width={1000}
                        height={300}
                    />
                </div>
            </Link>
        );
    } else if (type == "mobile") {
        return (
            <Link href={url} prefetch={false}>
                <div className="ps-logo" title="Stemnovate Limited" style={{ width: "150px", height: "auto" }}>
                    {/* <Image
                        src={baseurl + "/static/image/LogoFINAL.svg"}
                        alt="Stemnovate Limited"
                        width={300}
                        height={88}
                        // style={{ width: "150px", height: "auto", objectFit: "cover" }}
                    /> */}
                    <img
                        src={baseurl + "/static/image/LogoFINAL.svg"}
                        alt="Stemnovate Limited"
                        style={{ width:"150px",height:"auto", objectFit: "cover" }}
                    />
                </div>
            </Link>
        );
    } else {
        return (
            <Link href={url} prefetch={false}>
                <dic className="ps-logo" title="Stemnovate Limited">
                    <Image
                        src={baseurl + "/static/img/logo.svg"}
                        alt="Stemnovate Limited"
                        width={1000}
                        height={300}
                    // style={{ width: "100%", height: "100%" }} 
                    />
                </dic>
            </Link>
        );
    }
};

export default Logo;
