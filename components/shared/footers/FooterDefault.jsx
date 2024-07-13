/* eslint-disable @next/next/no-img-element */
import React from "react"
import FooterLinks from "~/public/static/data/footer.json"
import Link from "next/link"
import dynamic from "next/dynamic"

const ModuleFooterAddress = dynamic(
  () => import("~/components/shared/footers/modules/ModuleFooterAddress"),
  { loading: () => <p>Loading...</p> }
)
const WidgetFooterLinks = dynamic(
  () => import("~/components/shared/widgets/footer/WidgetFooterLinks"),
  { loading: () => <p>Loading...</p> }
)
const ModuleFooterBottom = dynamic(
  () => import("~/components/shared/footers/modules/ModuleFooterBottom"),
  { loading: () => <p>Loading...</p> }
)

const Image = dynamic(() => import("~/components/elements/Image"), {
  loading: () => <p>Loading...</p>
})

const FooterDefault = () => {
  return (
    <footer className="ps-footer ps-footer--1 bg-black mb-5">
      <div className="ps-footer__middle">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-7 my-4">
              <div className="row ps-footer__information">
                <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                  <ModuleFooterAddress />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-5 my-4">
              <div className=" flex-row d-flex justify-content-around">
                <div className="d-flex ">
                  <WidgetFooterLinks source={FooterLinks.information} />
                </div>
                <div className="d-flex flex-column">
                  <Image
                    src="/static/image/QMS_new.svg"
                    alt="QMS"
                    width={1000}
                    height={500}
                  />
                  <Image
                    src="/static/image/HTA.svg"
                    alt="HTA"
                    width={1000}
                    height={500}
                  />
                </div>
                <div className="d-flex">
                  <p className="text-white p-4">
                    <span>Secure Payments</span>
                    <Image
                      src="/static/image/securepayments.svg"
                      alt="secure"
                      width={1000}
                      height={500}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-orange">
          <div className="container">
            <div className="col-md-12 m-0 p-0 text-white">
              <div className="d-flex flex-row justify-content-between align-items-center">
                <div className=" d-flex flex-column">
                  <p className="text-white">
                    <span>Contact us on - </span>{" "}
                    <b>
                      <Link href="tel:+44 (0)1223830192">
                        <span className="ps-footer__email">
                          <span className="text-white font-weight-bold">
                            +44&nbsp;(0)1223830192
                          </span>
                        </span>
                      </Link>
                    </b>
                  </p>
                  <p className="text-white">
                    <span>Email us on - </span>{" "}
                    <b>
                      {" "}
                      <Link href="mailto:info@stemnovate.co.uk">
                        <span className="ps-footer__email">
                          <span className="text-white font-weight-bold">
                            info@stemnovate.co.uk
                          </span>
                        </span>
                      </Link>
                    </b>
                  </p>
                </div>

                <div className="d-flex">
                  <ul className="ps-social">
                    <li>
                      <a
                        target="_blank"
                        className="ps-social__link facebook"
                        href="https://www.facebook.com/profile.php?id=100088444964661"
                        rel="noreferrer"
                      >
                        <i className="fa fa-facebook text-white"> </i>
                        <span className="ps-tooltip">Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        className="ps-social__link instagram"
                        href="https://www.instagram.com/stemnovateltd/"
                        rel="noreferrer"
                      >
                        <i className="fa fa-instagram text-white"></i>
                        <span className="ps-tooltip">Instagram</span>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        className="ps-social__link facebook"
                        href="https://twitter.com/StemnovateL"
                        rel="noreferrer"
                      >
                        <i className="fa fa-twitter text-white"></i>
                        <span className="ps-tooltip">Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        className="ps-social__link pinterest"
                        href="https://www.pinterest.co.uk/Stemnovate"
                        rel="noreferrer"
                      >
                        <i className="fa fa-pinterest-p text-white"></i>
                        <span className="ps-tooltip">Pinterest</span>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        className="ps-social__link linkedin"
                        href="https://www.linkedin.com/company/stemnovate-limited"
                        rel="noreferrer"
                      >
                        <i className="fa fa-linkedin text-white"></i>
                        <span className="ps-tooltip">Linkedin</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModuleFooterBottom />
    </footer>
  )
}

export default FooterDefault
