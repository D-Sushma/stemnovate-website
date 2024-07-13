import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import React from "react";
class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <script>
                    {`
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-5B3PKF42');
                    `}
                    </script>
                    <meta name="application-name" content="Stemnovate Limited" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                    <meta name="apple-mobile-web-app-title" content="Stemnovate Limited" />
                    <meta name="format-detection" content="telephone=no" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="apple-touch-icon" href="/icon.png"></link>
                    <meta name="theme-color" content="#fff" />
                    <link prefetch="false" rel="preconnect" href="https://fonts.googleapis.com" />
                    <link prefetch="false" rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-FMDRW8XRWZ">
                    </script>
                    <script>
                        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-FMDRW8XRWZ');
                    `}
                    </script>  
                </Head>
                <body>
                    <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5B3PKF42"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
                    <Main />
                    <NextScript />
                       {/* <Script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/5456750.js"></Script> */}
                    {/* <script type="text/javascript" id="hs-script-loader" defer src="//js.hs-scripts.com/5456750.js"></script> */}
                    {/* <Script type="text/javascript" id="hs-script-loader" defer src="//js.hs-scripts.com/5456750.js"></Script> */}
                    <Script strategy="beforeInteractive" type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/5456750.js"></Script>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
