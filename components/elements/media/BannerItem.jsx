import React from "react"
import Link from "next/link"
import { baseUrl } from "~/repositories/Repository"

const BannerItem = ({ source }) => {
  if (source) {
    return (
      <Link href="/shop">
        <a
          className="ps-banner-item--default bg--cover"
          style={{
            backgroundImage: `url('${baseUrl}${source.image.url}')`
          }}
        ></a>
      </Link>
    )
  } else {
    return (
      <Link href="/shop">
        <a>
          <a className="ps-collection">
            <img src="/static/img/not-found.jpg" alt="martfury" />
          </a>
        </a>
      </Link>
    )
  }
}

export default BannerItem
