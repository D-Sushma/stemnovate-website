import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import React from "react";
class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta name="application-name" content="Stemnovate Limited" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                    <meta name="apple-mobile-web-app-title" content="Stemnovate Limited" />
                    <meta name="format-detection" content="telephone=no" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="apple-touch-icon" href="/icon.png"></link>
                    <meta name="theme-color" content="#fff" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link rel="preload" as="image" href="/static/home-images/Bg01.jpg" />
                    <link rel="preload" as="image" href="/static/home-images/bg-02.jpg" />
                    {/* <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"></link> */}
                    <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-10846076758" strategy="afterInteractive" />
                    <Script async id="google-analytics" strategy="afterInteractive">
                        {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', 'AW-10846076758');
                        `}
                    </Script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    {/* beforeInteractive afterInteractive lazyOnload worker*/}
                    <Script strategy="lazyOnload" type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/5456750.js"></Script>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
