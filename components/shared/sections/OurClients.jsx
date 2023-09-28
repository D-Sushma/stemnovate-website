import React from "react"
import brand1 from "~/public/brand/1.png"
import brand2 from "~/public/brand/2.png"
import brand3 from "~/public/brand/3.png"
import brand4 from "~/public/brand/4.png"
import brand5 from "~/public/brand/5.png"
import brand6 from "~/public/brand/6.png"
import brand7 from "~/public/brand/7.png"
import brand8 from "~/public/brand/8.png"
import brand9 from "~/public/brand/9.png"
import brand10 from "~/public/brand/10.png"
import dynamic from "next/dynamic"
const Image = dynamic(() => import("~/components/elements/Image"), {
  loading: () => <p>Loading...</p>
})

export default function OurClients() {
  return (
    <>
      <div className="about-section">
        <div className="container container-our-clients">
          <div className=" d-flex justify-content-center">
            <div className="d-flex flex-grow-1 flex-row flex-wrap justify-content-center">
              <div className="card card-h-min align-items-center justify-content-center card-container">
                <a
                  href="https://www.rvc.ac.uk/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <div className="d-flex align-items-center our-client-images px-3">
                    <Image
                      className="zoom-in"
                      src={brand1}
                      alt="rvc"
                      placeholder="blur"
                      blurDataURL="/static/image/blurred.png"
                    />
                  </div>
                </a>
              </div>
              <div className="card card-h-min align-items-center p-1 justify-content-center card-container">
                <a
                  href="https://www.cam.ac.uk/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <div className="d-flex align-items-center our-client-images px-3">
                    <Image
                      className="zoom-in"
                      src={brand2}
                      alt="cam"
                      placeholder="blur"
                      blurDataURL="/static/image/blurred.png"
                    />
                  </div>
                </a>
              </div>
              <div className="card card-h-min align-items-center p-1 justify-content-center card-container">
                <a
                  href="https://www.babraham.ac.uk/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <div className="d-flex align-items-center our-client-images px-3">
                    <Image
                      className="zoom-in"
                      src={brand3}
                      alt="babraham"
                      placeholder="blur"
                      blurDataURL="/static/image/blurred.png"
                    />
                  </div>
                </a>
              </div>
              <div className="card card-h-min align-items-center p-1 justify-content-center card-container">
                <a
                  href="https://www.ed.ac.uk/roslin"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <div className="d-flex align-items-center our-client-images px-3">
                    <Image
                      className="zoom-in"
                      src={brand4}
                      alt="ed"
                      placeholder="blur"
                      blurDataURL="/static/image/blurred.png"
                    />
                  </div>
                </a>
              </div>
              <div className="card card-h-min align-items-center p-1 justify-content-center card-container">
                <a
                  href="https://www.ed.ac.uk"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <div className="d-flex align-items-center our-client-images px-3">
                    <Image
                      className="zoom-in"
                      src={brand5}
                      alt="ed"
                      placeholder="blur"
                      blurDataURL="/static/image/blurred.png"
                    />
                  </div>
                </a>
              </div>
              <div className="card card-h-min align-items-center p-1 justify-content-center card-container">
                <a
                  href="https://www.qkine.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <div className="d-flex align-items-center our-client-images px-3">
                    <Image
                      className="zoom-in"
                      src={brand6}
                      alt="qkine"
                      placeholder="blur"
                      blurDataURL="/static/image/blurred.png"
                    />
                  </div>
                </a>
              </div>
              <div className="card card-h-min align-items-center p-1 justify-content-center card-container">
                <a
                  href="https://www.tcd.ie/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  {" "}
                  <div className="d-flex align-items-center our-client-images px-3">
                    <Image
                      className="zoom-in"
                      src={brand7}
                      alt="tcd"
                      placeholder="blur"
                      blurDataURL="/static/image/blurred.png"
                    />
                  </div>
                </a>
              </div>
              <div className="card card-h-min align-items-center p-1 justify-content-center card-container">
                <a
                  href="https://www.unibe.ch/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <div className="d-flex align-items-center our-client-images px-3">
                    <Image
                      className="zoom-in"
                      src={brand8}
                      alt="unibe"
                      placeholder="blur"
                      blurDataURL="/static/image/blurred.png"
                    />
                  </div>
                </a>
              </div>
              <div className="card card-h-min align-items-center p-1 justify-content-center card-container">
                <a
                  href="https://www.cuh.nhs.uk/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <div className="d-flex align-items-center our-client-images px-3">
                    <Image
                      className="zoom-in"
                      src={brand9}
                      alt="nhs"
                      placeholder="blur"
                      blurDataURL="/static/image/blurred.png"
                    />
                  </div>
                </a>
              </div>
              <div className="card card-h-min align-items-center p-1 justify-content-center card-container">
                <a
                  href="https://www.ox.ac.uk/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <div className="d-flex align-items-center our-client-images px-3">
                    <Image
                      className="zoom-in"
                      src={brand10}
                      alt="ox"
                      placeholder="blur"
                      blurDataURL="/static/image/blurred.png"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
