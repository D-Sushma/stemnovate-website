import React, { useEffect } from "react";
import Link from "next/link";
import Container from "~/components/layouts/Container";
import BreadCrumb from "~/components/elements/BreadCrumb";
import { useRouter } from "next/router";

import LatestProducts from "~/components/partials/homepages/sections/LatestProducts";

const breadcrumb = [
    {
        id: 1,
        text: "Home",
        url: "/",
    },
    {
        id: 2,
        text: " 404",
    },
];

function Error({}) {
    const router = useRouter();

    useEffect(() => {
        router.push("/Products");
    }, []);

    return (
        <Container title="Page not found">
            <div id="imgDiv2">
                {/* <div class="d-flex justify-content-center"> */}
                <div className="text-center mx-3">
                    <img className="" width="400" src="/static/img/banners/stopper.svg" alt="stopper" />
                    <h2 className="h1 text-white">It looks like you’ve reached a URL that doesn’t exist.</h2>
                    <h2 className="h1 text-white">
                        Please use the navigation above to find your
                        <a href="/" className="text-white font-weight-bolder">
                            {" "}
                            way back to our website.
                        </a>
                    </h2>
                </div>
                {/* </div> */}
            </div>
            <div className="ps-page__content">
                <LatestProducts />
            </div>
        </Container>
    );
}

export default Error;
