import React from "react"
import Link from "next/link"
import Image from "~/components/elements/Image"
import vector from "~/public/static/img/Home/vector.png"
// import Container from "~/components/layouts/Container"
// import BreadCrumb from "~/components/elements/BreadCrumb"
import { FiPhone, FiMail } from "react-icons/fi"
import dynamic from "next/dynamic"

const Container = dynamic(() => import("~/components/layouts/Container"), {
  loading: () => <p>Loading...</p>
})
const BreadCrumb = dynamic(() => import("~/components/elements/BreadCrumb"), {
  loading: () => <p>Loading...</p>
})
const FooterAddress = dynamic(
  () => import("~/components/shared/footers/modules/addresscontact"),
  { loading: () => <p>Loading...</p> }
)
const HubspotContactForm = dynamic(
  () => import("~/components/shared/forms/HubspotContactForm"),
  { loading: () => <p>Loading...</p> }
)

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
    <Container
      title={mytitile ? mytitile : "Contact Us"}
      description="Stemnovate page to contact for information, enquire about company, product and services"
    >
      <div className="ps-page ps-page--inner">
        <div className="container">
          <div className="ps-page__header">
            <BreadCrumb breacrumb={breadcrumb} />
          </div>
          <div className="ps-page__content">
            <h2 className="text-center  h1">Contact Us</h2>
            <div className="container text-center mb-5 contact-img">
              <Image
                src={vector}
                alt="stemnovate-Contact Us"
                // style={{ width: "80%", height: "auto" }}
                width={1588}
                height={960}
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
                      <Link href="telto:+44 (0)1223830192">
                        <span className="ps-footer__email span-with-link">
                          <FiPhone /> +44 (0)1223830192
                        </span>
                      </Link>
                      <br />
                      <Link href="mailto:info@stemnovate.co.uk">
                        <span className="ps-footer__email span-with-link">
                          <FiMail /> info@stemnovate.co.uk
                        </span>
                      </Link>
                    </div>
                    <ul className="ps-social ">
                      <li>
                        <Link href="https://www.facebook.com/StemnovateL">
                          <div className="ps-social__link facebook">
                            <i className="fa fa-facebook"> </i>
                            <span className="ps-tooltip">Facebook</span>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.instagram.com/stemnovate">
                          <div className="ps-social__link instagram">
                            <i className="fa fa-instagram"></i>
                            <span className="ps-tooltip">Instagram</span>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://twitter.com/StemnovateL">
                          <div className="ps-social__link facebook">
                            <i className="fa fa-twitter"></i>
                            <span className="ps-tooltip">Twitter</span>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.pinterest.co.uk/Stemnovate">
                          <div className="ps-social__link pinterest">
                            <i className="fa fa-pinterest-p"></i>
                            <span className="ps-tooltip">Pinterest</span>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.linkedin.com/company/stemnovate-limited">
                          <div className="ps-social__link linkedin">
                            <i className="fa fa-linkedin"></i>
                            <span className="ps-tooltip">Linkedin</span>
                          </div>
                        </Link>
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
