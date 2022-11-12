import React from "react"
import Container from "~/components/layouts/Container"
import BreadCrumb from "~/components/elements/BreadCrumb"
import { FiPhone, FiMail } from "react-icons/fi"
import FooterAddress from "~/components/shared/footers/modules/addresscontact"
import HubspotContactForm from "~/components/shared/forms/HubspotContactForm"

const breadcrumb = [
  {
    id: 1,
    text: "Home",
    url: "/"
  },
  {
    id: 2,
    text: "Contact Us"
  }
]

const ContactUsScreen = ({ mytitile }) => {
  return (
    <Container title={mytitile ? mytitile : "Contact Us"}>
      <div className="ps-page ps-page--inner">
        <div className="container">
          <div className="ps-page__header">
            <BreadCrumb breacrumb={breadcrumb} />
          </div>
          <div className="ps-page__content">
            <h1 className="text-center  h1">Contact Us</h1>
            <div className="container text-center mb-5 contact-img">
              <img
                src="/static/img/Home/vector.png"
                alt="stemnovate-Contact Us"
                style={{ width: "80%", height: "auto" }}
              />
            </div>
            <div className="ps-contact mt-5">
              <h1 className=" text-center m-3">GET IN TOUCH</h1>
              <p className="text-center mb-5">
                “Our business is to provide you with the best services and
                solutions to share with us your experiences and expectations”
              </p>

              <HubspotContactForm />
              <div className="section-about">
                <div className="row">
                  <div className="col-md-12">
                    <h2 className="text-center mb-4 m-2">
                      CONTACT INFORMATION
                    </h2>
                  </div>
                  <div
                    className="col-12 col-lg-6"
                    style={{
                      borderRight: "5px solid gray"
                    }}
                  >
                    <div className="ps-contact__info">
                      <div className="row ps-footer__information">
                        <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                          <FooterAddress />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 text-center">
                    <div className="m-2 h3">
                      <a
                        className="ps-footer__email"
                        href="telto:+44 (0)1223830192"
                      >
                        <FiPhone /> +44 (0)1223830192
                      </a>
                      <br />
                      <a
                        className="ps-footer__email"
                        href="mailto:info@stemnovate.co.uk"
                      >
                        <FiMail /> info@stemnovate.co.uk
                      </a>
                    </div>
                    <ul className="ps-social ">
                      <li>
                        <a
                          className="ps-social__link facebook"
                          href="https://www.facebook.com/StemnovateL"
                        >
                          <i className="fa fa-facebook"> </i>
                          <span className="ps-tooltip">Facebook</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="ps-social__link instagram"
                          href="https://www.instagram.com/stemnovate"
                        >
                          <i className="fa fa-instagram"></i>
                          <span className="ps-tooltip">Instagram</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="ps-social__link facebook"
                          href="https://twitter.com/StemnovateL"
                        >
                          <i className="fa fa-twitter"></i>
                          <span className="ps-tooltip">Twitter</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="ps-social__link pinterest"
                          href="https://www.pinterest.co.uk/Stemnovate"
                        >
                          <i className="fa fa-pinterest-p"></i>
                          <span className="ps-tooltip">Pinterest</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="ps-social__link linkedin"
                          href="https://www.linkedin.com/company/stemnovate-limited"
                        >
                          <i className="fa fa-linkedin"></i>
                          <span className="ps-tooltip">Linkedin</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-lg-12 mt-5">
                    <div className="ps-contact__map">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2449.145415040379!2d0.2059292154407564!3d52.13167627974247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8659d4aac2ba3%3A0x12ca6a2021fc411a!2sStemnovate%20Limited!5e0!3m2!1sen!2sin!4v1650268128355!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ContactUsScreen
