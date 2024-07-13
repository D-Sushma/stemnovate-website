import React from "react"
import Image from "next/image"
import { baseUrlProduct } from "~/repositories/Repository"

const ModuleDetailDifferentiation = ({ Differentiation }) => {
  const images = Differentiation.Differentiationimages.split(",")
  const myLoader = ({ src, width, quality }) => {
    return `${baseUrlProduct}${src}?w=${width}&q=${quality || 75}`
  }
  return (
    <div
      className="tab-pane fade active show"
      id="specification-content"
      role="tabpanel"
      aria-labelledby="specification-tab"
    >
      <div className="col-12 col-md-12">
        {Differentiation.Differentiationimages &&
          images.map((data, key) => (
            <div key={key} className="col-12 col-md-4">
              <Image
                loader={myLoader}
                src={data}
                alt="Differentiation"
                width={500}
                height={500}
              />
            </div>
          ))}
        {Differentiation.Differentiation != "" && (
          <>
            <h2 className="ps-title mt-5">Differentiation</h2>
            <div
              className="mt-5"
              dangerouslySetInnerHTML={{
                __html: Differentiation.Differentiation
              }}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default ModuleDetailDifferentiation
