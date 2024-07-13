import React from "react"
import Link from "next/link"
import dynamic from "next/dynamic"

const Image = dynamic(() => import("~/components/elements/Image"), {
  loading: () => <p>Loading...</p>
})

const InvestorsItem = ({ source }) => {
  return (
    <section className="ps-section--block-grid ">
      <div className="ps-section__thumbnail">
        <Link href="#">
          <div className="ps-section__image">
            <div className="overflow-hidden link-hover-thumb-shape"
              style={{
                      width: "400px",
                      height: "250px"
                    }}
            >
              <Image
                src={source.avatar}
                alt={source?.name}
                width={400}
                height={250}
              />
            </div>

            <div
              style={{ width: "100%", backgroundColor: "#fff", marginTop: -6 }}
            >
              <h2>{source.name}</h2>
              <h3>{source.rate}</h3>
            </div>
          </div>
        </Link>
      </div>
      <div className="ps-section__content">
        <div className="ps-section__desc">
          <div
            className="p-2 bd-highlight text-left  text-white"
            dangerouslySetInnerHTML={{
              __html: source.text
            }}
          ></div>
        </div>
      </div>
    </section>
  )
}

export default InvestorsItem
