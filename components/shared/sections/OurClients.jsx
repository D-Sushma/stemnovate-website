import React from "react"
import Image from "~/components/elements/Image"
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
import brand11 from "~/public/brand/11.jpg"
export default function OurClients() {
  return (
    <div className="about-section">
      <div className="container">
        <div className=" d-flex justify-content-center">
          <div className="d-flex flex-grow-1 flex-row flex-wrap justify-content-center">
            <div className="card card-h-min align-items-center p-1 justify-content-center ">
              <a
                href="https://www.rvc.ac.uk/"
                target={"_blank"}
                rel="noreferrer"
              >
                <div className="d-flex align-items-center our-client-images">
                  <Image src={brand1} alt="rvc" />
                </div>
              </a>
            </div>
            <div className="card card-h-min align-items-center p-1 justify-content-center ">
              <a
                href="https://www.cam.ac.uk/"
                target={"_blank"}
                rel="noreferrer"
              >
                <div className="d-flex align-items-center our-client-images">
                  <Image src={brand2} alt="cam" />
                </div>
              </a>
            </div>
            <div className="card card-h-min align-items-center p-1 justify-content-center ">
              <a
                href="https://www.babraham.ac.uk/"
                target={"_blank"}
                rel="noreferrer"
              >
                <div className="d-flex align-items-center our-client-images">
                  <Image src={brand3} alt="babraham" />
                </div>
              </a>
            </div>
            <div className="card card-h-min align-items-center p-1 justify-content-center ">
              <a
                href="https://www.ed.ac.uk/roslin"
                target={"_blank"}
                rel="noreferrer"
              >
                <div className="d-flex align-items-center our-client-images">
                  <Image src={brand4} alt="ed" />
                </div>
              </a>
            </div>
            <div className="card card-h-min align-items-center p-1 justify-content-center ">
              <a href="https://www.ed.ac.uk" target={"_blank"} rel="noreferrer">
                <div className="d-flex align-items-center our-client-images">
                  <Image src={brand5} alt="ed" />
                </div>
              </a>
            </div>
            <div className="card card-h-min align-items-center p-1 justify-content-center ">
              <a
                href="https://www.qkine.com/"
                target={"_blank"}
                rel="noreferrer"
              >
                <div className="d-flex align-items-center our-client-images">
                  <Image src={brand6} alt="qkine" />
                </div>
              </a>
            </div>
            <div className="card card-h-min align-items-center p-1 justify-content-center ">
              <a href="https://www.tcd.ie/" target={"_blank"} rel="noreferrer">
                {" "}
                <div className="d-flex align-items-center our-client-images">
                  <Image src={brand7} alt="tcd" />
                </div>
              </a>
            </div>
            <div className="card card-h-min align-items-center p-1 justify-content-center ">
              <a
                href="https://www.unibe.ch/"
                target={"_blank"}
                rel="noreferrer"
              >
                <div className="d-flex align-items-center our-client-images">
                  <Image src={brand8} alt="unibe" />
                </div>
              </a>
            </div>
            <div className="card card-h-min align-items-center p-1 justify-content-center ">
              <a
                href="https://www.cuh.nhs.uk/"
                target={"_blank"}
                rel="noreferrer"
              >
                <div className="d-flex align-items-center our-client-images">
                  <Image src={brand9} alt="nhs" />
                </div>
              </a>
            </div>
            <div className="card card-h-min align-items-center p-1 justify-content-center ">
              <a
                href="https://www.ox.ac.uk/"
                target={"_blank"}
                rel="noreferrer"
              >
                <div className="d-flex align-items-center our-client-images">
                  <Image src={brand10} alt="ox" />
                </div>
              </a>
            </div>
            {/* <div className="card card-h-min align-items-center p-1 justify-content-center ">
              <a
                href="https://www.ox.ac.uk/"
                target={"_blank"}
                rel="noreferrer"
              >
                <div className="d-flex align-items-center our-client-images">
                  <Image src={brand11} alt="ox" />
                </div>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
