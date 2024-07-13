import React, { useEffect, useRef } from "react"
import { wrapper } from "../store/store"
import { CookiesProvider } from "react-cookie"
import "swiper/swiper-bundle.min.css"
import "antd/dist/antd.compact.min.css"
import "~/public/static/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import "react-date-picker/dist/DatePicker.css"
import "react-calendar/dist/Calendar.css"
import "~/public/static/fonts/feather-font/css/iconfont.css"
import "~/public/static/fonts/Linearicons/Font/demo-files/demo.css"
import "~/public/static/fonts/font-awesome/css/font-awesome.min.css"
import "~/public/static/css/style.min.css"
import "~/public/static/css/slick.min.css"
import "~/styles/scss/home-1.scss"
import "~/styles/platform/custom.scss"
import "~/styles/platform/themes/home-one.scss"
import "~/public/static/css/header.css"
import { ErrorBoundary } from "react-error-boundary"
import { SessionProvider } from "next-auth/react"
import NextNProgress from "nextjs-progressbar"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import dynamic from "next/dynamic"
import { baseUrl } from "~/repositories/Repository"

const MasterLayout = dynamic(
  () => import("~/components/layouts/MasterLayout"),
  { loading: () => <p>Loading...</p> }
)

function App({ Component, pageProps: { ...pageProps } }) {
  const [details, setDetails] = React.useState("");
  const btnRef = useRef(null);

  useEffect(() => {
    setTimeout(function () {
      document.getElementById("__next").classList.add("ps-loaded")
    }, 100)
  })

  useEffect(() => {
    getFooterImage();
    import("bootstrap/dist/js/bootstrap")
  }, [])

  const getFooterImage = async () => {
    var requestParam = {
      method: "GET"
    }
    const response = await fetch(
      baseUrl + "api/footer/getFooterImage",
      requestParam
    )
    const resData = await response.json()

    if (resData.status == 200) {
      var url = resData?.data
      setDetails(url)
    }
  }

  function ErrorFallback({ error, resetErrorBoundary }) {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    )
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <SessionProvider session={pageProps.session}>
        <NextNProgress
          color="#f31540"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        <CookiesProvider>
          <MasterLayout ref={btnRef} details={details}>
            <Component {...pageProps} />
          </MasterLayout>
        </CookiesProvider>
      </SessionProvider>
    </ErrorBoundary>
  )
}

export default wrapper.withRedux(App)
