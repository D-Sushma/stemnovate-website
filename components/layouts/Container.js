import React from "react";
import Head from "next/head";
import HeaderDefault from "~/components/shared/headers/HeaderDefault";
import FooterDefault from "~/components/shared/footers/FooterDefault";
import HeaderMobile from "~/components/shared/mobiles/HeaderMobile";
import { useRouter } from "next/router";

const Container = ({ children, ogimg, description, cronical, title = "Your Drug Discovery Partner", header = <HeaderDefault />, footer = <FooterDefault />, menus }) => {
    let titleView;
    if (title) {
        titleView = title;
    } else {
        titleView = process.env.titleDescription;
    }

    const site = "https://stemnovate.co.uk";

    const canonicalURL = site + useRouter().asPath;
    const defaultDescription = `Our mission is to accelerate drug discovery from decades to years and from months to days.
Building the future, caring for both human and animal lives. We are StemnovateTM.`;
    return (
        <div className="ps-root">
            <Head>
                {/* HTML Meta Tags  */}
                <title>{titleView}</title>
                <link rel="shortcut icon" href="/static/img/favicon.png" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="description" content={description ? description : defaultDescription} />
                <meta name="keywords" content="Stemnovate Limited,drug discovery and development,drug discovery,drug development,drug research and development,drug research,drug development" />
                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content={canonicalURL} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={titleView} />
                <meta property="og:image" content={ogimg ? ogimg : "https://stemnovate.co.uk/static/img/Home/new-web-site.jpg"} />
                <meta property="og:image:secure_url" content={ogimg ? ogimg : "https://stemnovate.co.uk/static/img/Home/new-web-site.jpg"} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="675" />
                {/* <!-- Twitter Meta Tags --> */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="stemnovate.co.uk" />
                <meta name="twitter:title" content={titleView} />
                <meta name="twitter:description" content={description ? description : defaultDescription} />
                <meta name="twitter:image" content={ogimg ? ogimg : "https://stemnovate.co.uk/static/img/Home/new-web-site.jpg"} />
                {/* canonical */}
                <link rel="canonical" href={cronical ? site + cronical : canonicalURL} />
            </Head>
            {header}
            <HeaderMobile menus={menus} />
            {children}
            {footer}
        </div>
    );
};

export default Container;
