import React from "react"
import dynamic from "next/dynamic"
const Image = dynamic(() => import("~/components/elements/Image"), {
  loading: () => <p>Loading...</p>
})

export default function OurClients(props) {
  return (
    <div className="about-section">
      <div className="container container-our-clients">
        <div className=" d-flex justify-content-center">
          <div className="d-flex flex-grow-1 flex-row flex-wrap justify-content-center">
            {props?.clientDetails?.map((data, key) => (
              <div
                key={key}
                className="card align-items-center justify-content-center card-container"
              >
                <a
                  href={data?.image_url}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <div className="d-flex align-items-center our-client-images">
                    <Image
                      className="zoom-in"
                      src={`${process.env.AWS_S3BUCKET_URL}${data?.image}`}
                      alt="image"
                      width={386}
                      height={218}
                    />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
