import React from "react";
import Link from "next/link";
import dynamic from 'next/dynamic'

const Image = dynamic(() => import("~/components/elements/Image"), {
    loading: () => <p>Loading...</p>
})

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
                    <img
                        src={baseurl + "/static/image/LogoFINAL.svg"}
                        alt="Stemnovate Limited"
                        style={{ width: "150px", height: "auto", objectFit: "cover" }}
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
                    />
                </dic>
            </Link>
        );
    }
};

export default Logo;
