import React from "react"
// import Container from "~/components/layouts/Container"
// import BreadCrumb from "~/components/elements/BreadCrumb"
import dynamic from "next/dynamic"

const Container = dynamic(() => import("~/components/layouts/Container"), {
  loading: () => <p>Loading...</p>
})
const BreadCrumb = dynamic(() => import("~/components/elements/BreadCrumb"), {
  loading: () => <p>Loading...</p>
})

import { AiFillStar } from "react-icons/ai"

const breadcrumb = [
  {
    id: 1,
    text: "Home",
    url: "/"
  },

  {
    id: 2,
    text: "FAQ"
  }
]

const AboutUsScreen = () => {
  return (
    <Container
      title="FAQ"
      description="Stemnovate frequently asked questions on stem cells, cell reprogramming, prroducts and services."
    >
      <main className="ps-page ps-page--inner">
        <div className="ps-page__header pb-0">
          <div className="container">
            <BreadCrumb breacrumb={breadcrumb} />
          </div>
        </div>
        <div className="ps-page__content">
          <div className="ps-about">
            <div
              className="container"
              style={{
                boxSizing: "border-box",
                WebkitFontSmoothing: "antialiased",
                padding: "0px 20px",
                margin: "0px auto",
                maxWidth: "1105px"
              }}
            >
              <h1
                style={{
                  boxSizing: "border-box",
                  WebkitFontSmoothing: "antialiased",
                  margin: "0px 0px 0.540791em",
                  clear: "both",
                  fontWeight: 600,
                  fontSize: "2.61792em",
                  lineHeight: 1.214,
                  letterSpacing: "-1px",
                  color: "rgb(51, 51, 51)"
                }}
              >
                Frequently Asked Questions
              </h1>
              <h4
                style={{
                  boxSizing: "border-box",
                  WebkitFontSmoothing: "antialiased",
                  margin: "0px 0px 0.540791em",
                  clear: "both",
                  fontWeight: 600,
                  fontSize: "1.41575em",
                  color: "rgb(51, 51, 51)"
                }}
              >
                <b
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased",
                    fontWeight: 600
                  }}
                >
                  <AiFillStar size={30} className="text-color-first" /> How do I
                  order from Stemnovate?
                </b>
              </h4>
              <p
                style={{
                  boxSizing: "border-box",
                  WebkitFontSmoothing: "antialiased",
                  margin: "0px 0px 15px",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "rgb(51, 51, 51)",
                  lineHeight: "28px"
                }}
              >
                Products can be ordered directly from our website. Customers
                will be required to be registered in order to checkout their
                purchases. Customers who have ordered from us previously will
                have access to a list of their previous purchases to allow them
                to quickly & easily place repeat orders if required.
                <br
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased"
                  }}
                />{" "}
                Alternatively, please enquire{" "}
                <a
                  href="/contact-us"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased",
                    backgroundColor: "transparent",
                    textDecoration: "none",
                    color: "rgb(61, 149, 165)"
                  }}
                >
                  <span className="visually-hidden">Contact us for more information:</span>
                  <b
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased",
                      fontWeight: 600
                    }}
                  >
                    HERE
                  </b>
                </a>{" "}
                and we will be happy to discuss your requirements and provide
                you with a personalized quotation.
              </p>
              <h4
                style={{
                  boxSizing: "border-box",
                  WebkitFontSmoothing: "antialiased",
                  margin: "0px 0px 0.540791em",
                  clear: "both",
                  fontWeight: 600,
                  fontSize: "1.41575em",
                  color: "rgb(51, 51, 51)",
                  marginTop: "2.29068em"
                }}
              >
                <b
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased",
                    fontWeight: 600
                  }}
                >
                  <AiFillStar size={30} className="text-color-first" /> I have
                  specialist requirements for a proposed R&D project in my lab,
                  who should I talk to?
                </b>
              </h4>
              <p
                style={{
                  boxSizing: "border-box",
                  WebkitFontSmoothing: "antialiased",
                  margin: "0px 0px 15px",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "rgb(51, 51, 51)",
                  lineHeight: "28px"
                }}
              >
                Please enquire{" "}
                <a
                  href="/contact-us"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased",
                    backgroundColor: "transparent",
                    textDecoration: "none",
                    color: "rgb(61, 149, 165)"
                  }}
                >
                  <span className="visually-hidden">Contact us to discuss your requirements and get a personalized quotation. Click here.</span>
                  <b
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased",
                      fontWeight: 600
                    }}
                  >
                    HERE
                  </b>
                </a>{" "}
                and we will be happy to discuss your requirements and provide
                you with a personalized quotation.
              </p>
              <h4
                style={{
                  boxSizing: "border-box",
                  WebkitFontSmoothing: "antialiased",
                  margin: "0px 0px 0.540791em",
                  clear: "both",
                  fontWeight: 600,
                  fontSize: "1.41575em",
                  color: "rgb(51, 51, 51)",
                  marginTop: "2.29068em"
                }}
              >
                <b
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased",
                    fontWeight: 600
                  }}
                >
                  <AiFillStar size={30} className="text-color-first" /> What
                  types of cells can you provide?
                </b>
              </h4>
              <p
                style={{
                  boxSizing: "border-box",
                  WebkitFontSmoothing: "antialiased",
                  margin: "0px 0px 15px",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "rgb(51, 51, 51)",
                  lineHeight: "28px"
                }}
              >
                Stemnovate can provide primary cell lines, fibroblasts, iPSCs
                and differentiated iPSCs from both human and animal sources.
                <br
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased"
                  }}
                />{" "}
                Please enquire{" "}
                <a
                  href="/contact-us"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased",
                    backgroundColor: "transparent",
                    textDecoration: "none",
                    color: "rgb(61, 149, 165)"
                  }}
                >
                  <span className="visually-hidden">Learn more about our contact options</span>
                  <b
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased",
                      fontWeight: 600
                    }}
                  >
                    HERE
                  </b>
                </a>{" "}
                for more details
              </p>
              <h4
                style={{
                  boxSizing: "border-box",
                  WebkitFontSmoothing: "antialiased",
                  margin: "0px 0px 0.540791em",
                  clear: "both",
                  fontWeight: 600,
                  fontSize: "1.41575em",
                  color: "rgb(51, 51, 51)",
                  marginTop: "2.29068em"
                }}
              >
                <b
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased",
                    fontWeight: 600
                  }}
                >
                  <AiFillStar size={30} className="text-color-first" /> Can we
                  buy either frozen or live cells?
                </b>
              </h4>
              <p
                style={{
                  boxSizing: "border-box",
                  WebkitFontSmoothing: "antialiased",
                  margin: "0px 0px 15px",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "rgb(51, 51, 51)",
                  lineHeight: "28px"
                }}
              >
                Yes, all of our cells be provided as either frozen vials or
                cultured living cells. Frozen cells can be shipped next day.
                Please allow 1-2 weeks for the culture and shipping of live
                cells. Cultured cells are provided with a small amount of
                conditioned media. We also keep a stock of the customer’s chosen
                cells cultured in-house for a short period following shipping to
                allow for any issues around shipping or culturing on receipt by
                the customer.
              </p>
              <h4
                style={{
                  boxSizing: "border-box",
                  WebkitFontSmoothing: "antialiased",
                  margin: "0px 0px 0.540791em",
                  clear: "both",
                  fontWeight: 600,
                  fontSize: "1.41575em",
                  color: "rgb(51, 51, 51)",
                  marginTop: "2.29068em"
                }}
              >
                <b
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased",
                    fontWeight: 600
                  }}
                >
                  <AiFillStar size={30} className="text-color-first" /> What do
                  your customers use Stemnovate fibroblasts for?
                </b>
              </h4>
              <p
                style={{
                  boxSizing: "border-box",
                  WebkitFontSmoothing: "antialiased",
                  margin: "0px 0px 15px",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "rgb(51, 51, 51)",
                  lineHeight: "28px"
                }}
              >
                Stemnovate’s Human Primary Dermal Fibroblasts have many
                applications, for example:
              </p>
              <ul
                style={{
                  boxSizing: "border-box",
                  WebkitFontSmoothing: "antialiased",
                  margin: "0px 0px 1.41575em 3em",
                  padding: "0px",
                  listStyle: "disc"
                }}
              >
                <li
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased"
                  }}
                >
                  In the assay of cell-cell interaction, adhesion, PCR, laminin,
                  and fibronectin production.
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased"
                  }}
                >
                  Studying fibroblasts growth factor response.
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased"
                  }}
                >
                  In immunofluorescent flow cytometry.
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased"
                  }}
                >
                  Generating cell derivatives for desired research applications.
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased"
                  }}
                >
                  Ideal for 2D and 3D cultures, microfluidic devices,
                  co-cultures, tissue engineering, and skin models
                </li>
              </ul>
              <p
                style={{
                  boxSizing: "border-box",
                  WebkitFontSmoothing: "antialiased",
                  margin: "0px 0px 15px",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "rgb(51, 51, 51)",
                  lineHeight: "28px"
                }}
              >
                Human Dermal Fibroblasts (HDFs) have been responsible for
                producing the extracellular matrix forming the connective tissue
                of the skin and play a crucial role during wound healing. For
                instance, they play an important role in the progression of
                inflammation by secreting various factors that define the tissue
                microenvironment and modulate immune cell functions.
                <br
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased"
                  }}
                />{" "}
                HDFs provide an excellent model system to study many aspects of
                cell physiology. For instance, they are remarkable for their
                utilization in dozens of research publications related to skin
                biology and reprogramming/induced pluripotency studies.
                <br
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased"
                  }}
                />{" "}
                Dr. Shinya Yamanaka was awarded the Nobel Prize in 2012
                (Takanashi, 2007; 2009) for using Human Dermal Fibroblasts in
                order to create induced pluripotent stem cells (iPSC) by using
                Oct3/4, Sox2, Klf4, and c-Myc.
              </p>
              <h4
                style={{
                  boxSizing: "border-box",
                  WebkitFontSmoothing: "antialiased",
                  margin: "0px 0px 0.540791em",
                  clear: "both",
                  fontWeight: 600,
                  fontSize: "1.41575em",
                  color: "rgb(51, 51, 51)",
                  marginTop: "2.29068em"
                }}
              >
                <b
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased",
                    fontWeight: 600
                  }}
                >
                  <AiFillStar size={30} className="text-color-first" /> What are
                  induced stem cells (iPSCs)?
                </b>
              </h4>
              <p
                style={{
                  boxSizing: "border-box",
                  WebkitFontSmoothing: "antialiased",
                  margin: "0px 0px 15px",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "rgb(51, 51, 51)",
                  lineHeight: "28px"
                }}
              >
                Stemnovate’s Induced pluripotent stem cells (iPSCs) are formed
                by reprogramming somatic cells such as skin (fibroblast,
                keratinocytes) or blood (PBMNCs, peripheral blood mononuclear
                cells).
              </p>
              <h4
                style={{
                  boxSizing: "border-box",
                  WebkitFontSmoothing: "antialiased",
                  margin: "0px 0px 0.540791em",
                  clear: "both",
                  fontWeight: 600,
                  fontSize: "1.41575em",
                  color: "rgb(51, 51, 51)",
                  marginTop: "2.29068em"
                }}
              >
                <b
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased",
                    fontWeight: 600
                  }}
                >
                  <AiFillStar size={30} className="text-color-first" /> What are
                  iPSCs used for?
                </b>
              </h4>
              <p
                style={{
                  boxSizing: "border-box",
                  WebkitFontSmoothing: "antialiased",
                  margin: "0px 0px 15px",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "rgb(51, 51, 51)",
                  lineHeight: "28px"
                }}
              >
                iPSCs represent a unique and ethical tool for modelling disease
                and organ toxicity, with enormous potential for drug discovery
                and cellular therapies.
              </p>
              <h4
                style={{
                  boxSizing: "border-box",
                  WebkitFontSmoothing: "antialiased",
                  margin: "0px 0px 0.540791em",
                  clear: "both",
                  fontWeight: 600,
                  fontSize: "1.41575em",
                  color: "rgb(51, 51, 51)",
                  marginTop: "2.29068em"
                }}
              >
                <b
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased",
                    fontWeight: 600
                  }}
                >
                  <AiFillStar size={30} className="text-color-first" /> What
                  types of cells can iPSCs be differentiated into?
                </b>
              </h4>
              <p
                style={{
                  boxSizing: "border-box",
                  WebkitFontSmoothing: "antialiased",
                  margin: "0px 0px 15px",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "rgb(51, 51, 51)",
                  lineHeight: "28px"
                }}
              >
                Stemnovate IPSC lines are capable of differentiating into any
                organ cells. For instance, functional liver cells (Hepatocytes),
                heart cells (Cardiomyocytes showing key cardiac markers and
                beating behaviour), and sensory neurons (showing neuronal marker
                expression and action potential generation on microelectrode
                arrays). The non-integrating method Stemnovate uses results in
                stable IPS line generation with high efficiency and
                reproducibility compared to other viral reprogramming methods.
                The ability to expand pluripotent cells in vitro and subject
                them to direct differentiation to produce specific cell types is
                crucial to developing cell-based therapies to replace or restore
                tissue.
                <br
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased"
                  }}
                />{" "}
                Please enquire{" "}
                <a
                  href="/contact-us"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased",
                    backgroundColor: "transparent",
                    textDecoration: "none",
                    color: "rgb(61, 149, 165)"
                  }}
                >
                  <span className="visually-hidden">Contact us for more details: </span>
                  <b
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased",
                      fontWeight: 600
                    }}
                  >
                    HERE
                  </b>
                </a>{" "}
                for more details
              </p>
              <h4
                style={{
                  boxSizing: "border-box",
                  WebkitFontSmoothing: "antialiased",
                  margin: "0px 0px 0.540791em",
                  clear: "both",
                  fontWeight: 600,
                  fontSize: "1.41575em",
                  color: "rgb(51, 51, 51)",
                  marginTop: "2.29068em"
                }}
              >
                <b
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased",
                    fontWeight: 600
                  }}
                >
                  <AiFillStar size={30} className="text-color-first" /> Are
                  Stemnovate cells tested for mycoplasma before they are shipped
                  to customers?
                </b>
              </h4>
              <p
                style={{
                  boxSizing: "border-box",
                  WebkitFontSmoothing: "antialiased",
                  margin: "0px 0px 15px",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "rgb(51, 51, 51)",
                  lineHeight: "28px"
                }}
              >
                Yes, cells are tested for HIV-1, HIV-2, HepA, HepB, HepC and
                mycoplasma, and are also shown to be negative for
                microbiological growth before shipping to customers.
              </p>
              <h4
                style={{
                  boxSizing: "border-box",
                  WebkitFontSmoothing: "antialiased",
                  margin: "0px 0px 0.540791em",
                  clear: "both",
                  fontWeight: 600,
                  fontSize: "1.41575em",
                  color: "rgb(51, 51, 51)",
                  marginTop: "2.29068em"
                }}
              >
                <b
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased",
                    fontWeight: 600
                  }}
                >
                  <AiFillStar size={30} className="text-color-first" /> Are
                  Stemnovate compliant?
                </b>
              </h4>
              <p
                style={{
                  boxSizing: "border-box",
                  WebkitFontSmoothing: "antialiased",
                  margin: "0px 0px 15px",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "rgb(51, 51, 51)",
                  lineHeight: "28px"
                }}
              >
                Stemnovate holds a commercial license from IPS Academia Japan
                for which Prof. Yamanaka and Prof Gurdon received the Nobel
                prize in 2012 for reprogramming technology.
                <br
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased"
                  }}
                />{" "}
                Stemnovate also holds a Human Tissue Authority license (HTA)
                which permits us to ethically source cells under consent for
                commercial use.
              </p>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html: `
html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  text-size-adjust: 100%;
}

body {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  margin: 0px;
  overflow-wrap: break-word;
  line-height: 1.618;
  text-rendering: optimizelegibility;
  font-weight: 400;
  font-family: Montserrat, sans-serif;
  background-color: rgb(255, 255, 255);
  overflow-x: hidden;
  color: rgb(109, 109, 109);
}
`
              }}
            />
          </div>
        </div>
      </main>
    </Container>
  )
}

export default AboutUsScreen
