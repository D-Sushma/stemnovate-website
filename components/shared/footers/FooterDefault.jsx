/* eslint-disable @next/next/no-img-element */
import React from "react"
import ModuleFooterAddress from "~/components/shared/footers/modules/ModuleFooterAddress"
import WidgetFooterLinks from "~/components/shared/widgets/footer/WidgetFooterLinks"
import ModuleFooterBottom from "~/components/shared/footers/modules/ModuleFooterBottom"
import FooterLinks from "~/public/static/data/footer.json"

const FooterDefault = () => {
  return (
    <footer className="ps-footer ps-footer--1 bg-black mb-5">
      {/* <ModuleFooterTop /> */}

      <div className="ps-footer__middle">
        <div className="container">
          <div className="row">
            {/* <div className="container">
              <div style={{ width: "345px" }}>
                <Logo type="white" style={{ width: "200px" }} />
              </div>
            </div> */}
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
                  {/* <WidgetFooterLinks source={FooterLinks.account} /> */}
                  <img
                    src="/static/image/QMS.png"
                    alt="QMS"
                    style={{
                      width: "150px",
                      // height: "22%",
                      // height: "fit-content",
                      marginBottom: "10px"
                    }}
                  />
                  <img
                    src="/static/image/HTA.png"
                    alt="HTA"
                    style={{
                      width: "150px"
                      // height: "22%"
                      // height: "fit-content"
                    }}
                  />
                </div>
                <div className="d-flex">
                  {/* <WidgetFooterLinks source={FooterLinks.store} /> */}
                  <p className="text-white p-4">
                    <span>Secure Payments</span>
                    <img
                      src="/static/image/secure-payments.png"
                      alt="secure"
                      style={{
                        width: "150px",
                        // height: "fit-content",
                        marginBottom: "10px"
                      }}
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
                      <a
                        className="ps-footer__email"
                        href="tel:+44 (0)1223830192"
                      >
                        <span className="text-white font-weight-bold">
                          +44&nbsp;(0)1223830192
                        </span>
                      </a>
                    </b>
                  </p>
                  <p className="text-white">
                    <span>Email us on - </span>{" "}
                    <b>
                      {" "}
                      <a
                        className="ps-footer__email"
                        href="mailto:info@stemnovate.co.uk"
                      >
                        {/* <FiMail />  */}

                        <span className="text-white font-weight-bold">
                          info@stemnovate.co.uk
                        </span>
                      </a>
                    </b>
                  </p>
                </div>

                <div className="d-flex">
                  <ul className="ps-social">
                    <li>
                      <a
                        target="_blank"
                        className="ps-social__link facebook"
                        href="https://www.facebook.com/StemnovateL"
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
                        href="https://www.instagram.com/stemnovate"
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
