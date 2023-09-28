import React, { useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import dynamic from "next/dynamic"

const Container = dynamic(() => import("~/components/layouts/Container"), {
  loading: () => <p>Loading...</p>
})
const Image = dynamic(() => import("~/components/elements/Image"), {
  loading: () => <p>Loading...</p>
})
const LatestProducts = dynamic(
  () => import("~/components/partials/homepages/sections/LatestProducts"),
  { loading: () => <p>Loading...</p> }
)

function Error() {
  const router = useRouter()

  useEffect(() => {
    router.push("/Products")
  }, [])

  return (
    <Container title="Page not found">
      <div id="imgDiv2">
        <div className="text-center mx-3">
          <Image
            width="400"
            height="400"
            src="/static/img/banners/stopper.svg"
            alt="stopper"
          />
          <h2 className="h1 text-white">
            It looks like you’ve reached a URL that doesn’t exist.
          </h2>
          <h2 className="h1 text-white">
            Please use the navigation above to find your
            <Link href="/">
              <div className="text-white font-weight-bolder">
                {" "}
                way back to our website.
              </div>
            </Link>
          </h2>
        </div>
      </div>
      <div className="ps-page__content">
        <LatestProducts />
      </div>
    </Container>
  )
}

export default Error
