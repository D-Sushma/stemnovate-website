/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react"
import { Alert } from "antd"
import { scroller } from "react-scroll"
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
      {/* <div className="container">
        <p className="m-0">
          Due to the <strong>COVID 19 </strong>epidemic, orders may be processed
          with a slight delay
        </p>
      </div>
      <a className="ps-noti__close">
        <i className="icon-cross"></i>
      </a> */}
      <Alert
        className="text-center"
        message={
          <div className="d-flex flex-row justify-content-around">
            <div className="d-flex flex-row justify-content-start">
              <span className="mr-2">
                <img
                  src="/static/img/new_blink.gif"
                  style={{ width: "30px" }}
                  alt="new"
                />
              </span>
              <h3 className="text-dark font-weight-bolder h3">
                Stemnovate leading the way in building animal models for Pharma
                drug discovery and animal health industry{" "}
                <a
                  href="/#My-Announcements"
                  className="button-link text-primary"
                  style={{ cursor: "pointer" }}
                >
                  Read more
                </a>
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
