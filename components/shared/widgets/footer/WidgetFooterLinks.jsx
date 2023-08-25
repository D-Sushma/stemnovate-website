import React from "react"
import Link from "next/link"

const WidgetFooterLinks = ({ source, classes = "" }) => {
  const linksView = source.items.map((item, index) => (
    <li key={index}>
      <div className="text-white">
      <Link href={item.url}>
        <span className="span-with-link">{item.text}</span>
      </Link>
      </div>
    </li>
  ))
  return (
    <>
      <div
        className={`ps-footer--block widget--footer widget--footer-links ${classes}`}
      >
        <ul className="ps-block__list">{linksView}</ul>
      </div>
    </>
  )
}

export default WidgetFooterLinks
