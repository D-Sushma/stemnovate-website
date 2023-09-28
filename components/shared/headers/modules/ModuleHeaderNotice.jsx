/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react"
import { Alert } from "antd"
import { scroller } from "react-scroll"
import Link from "next/link"
import dynamic from "next/dynamic"

const Image = dynamic(() => import("~/components/elements/Image"), {
  loading: () => <p>Loading...</p>
})

const ModuleHeaderNotice = ({ classes }) => {
  useEffect(() => {
    window.addEventListener("hashchange", onHashChanged)

    return () => {
      window.removeEventListener("hashchange", onHashChanged)
    }
  }, [])

  const onHashChanged = () => {
    const hash = window.location.hash.substring(1)
    scroller.scrollTo(hash, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -100
    })
  }

  return (
    <div className={`ps-noti header__notice ${classes}`}>
      <Alert
        className="text-center"
        message={
          <div className="d-flex flex-row justify-content-around">
            <div className="d-flex flex-row justify-content-start">
              <span className="mr-2">
                <Image
                  src="/static/img/new_blink.svg"
                  alt="new"
                  width={30}
                  height={30}
                />
              </span>
              <h3 className="text-dark font-weight-bolder h3">
                Stemnovate leading the way in building animal models for Pharma
                drug discovery and animal health industry{" "}
                <Link href="/#My-Announcements" prefetch={false}>
                  <span className="button-link text-primary span-with-link">
                    Read more
                  </span>
                </Link>
              </h3>
            </div>
          </div>
        }
        type="info"
        closable
      />
    </div>
  )
}

export default ModuleHeaderNotice
