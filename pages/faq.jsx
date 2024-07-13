import React from "react"
import dynamic from "next/dynamic"
import { AiFillStar } from "react-icons/ai"

const Container = dynamic(() => import("~/components/layouts/Container"), {
  loading: () => <p>Loading...</p>
})
const BreadCrumb = dynamic(() => import("~/components/elements/BreadCrumb"), {
  loading: () => <p>Loading...</p>
})

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
      title="FAQ | Your Drug Discovery Platform"
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
            <div className=" about-section ">
              <div className="container">
                <div className="faq-container">
                  <h1>Frequently Asked Questions</h1>
                  <div>
                    <h4>
                      <AiFillStar size={30} className="text-color-first" />
                      How do I order from Stemnovate? 
                    </h4>    
                  </div>
                   
                  <div>
                    <p className="faq-text">
                      Products can be ordered directly from our website.
                      Customers will be required to be registered in order to
                      checkout their purchases.</p>
                    <p className="faq-text">
                      Customers who have ordered from
                      us previously will have access to a list of their previous
                      purchases to allow them to quickly & easily place repeat
                      orders if required.
                    </p>
                    <p className="faq-text">
                      Alternatively, please enquire{" "}
                      <a
                        href="/contact-us"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                      <span className="visually-hidden">
                        Contact us for more information:
                      </span>
                      <b>HERE</b>
                      </a>{" "}
                      and we will be happy to discuss your requirements and
                      provide you with a personalized quotation.
                    </p>
                  </div>
                  <h4>
                    <AiFillStar size={30} className="text-color-first" /> I have
                    specialist requirements for a proposed R&D project in my
                    lab, who should I talk to?
                  </h4>
                  <div>
                    <p className="faq-text">Please enquire </p>
                    <a
                      href="/contact-us"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="visually-hidden">
                        Contact us to discuss your requirements and get a
                        personalized quotation. Click here.
                      </span>
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
                    <p>
                      and we will be happy to discuss your requirements and
                      provide you with a personalized quotation.
                    </p>
                  </div>
                  <h4>
                    <AiFillStar size={30} className="text-color-first" /> What
                    types of cells can you provide?
                  </h4>
                  <div>
                    <p className="faq-text">
                      Stemnovate can provide primary cell lines, fibroblasts,
                      iPSCs and differentiated iPSCs from both human and animal
                      sources.
                    </p>
                    <p className="faq-text">
                      {" "}
                      Please enquire{" "}
                      <a
                        href="/contact-us"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="visually-hidden">
                          Learn more about our contact options
                        </span>
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
                  </div>
                  <h4>
                    <AiFillStar size={30} className="text-color-first" /> Can we
                    buy either frozen or live cells?
                  </h4>
                  <div>
                    <p className="faq-text">
                      Yes, all of our cells be provided as either frozen vials
                      or cultured living cells. Frozen cells can be shipped next
                      day. Please allow 1-2 weeks for the culture and shipping
                      of live cells.</p> 
                    <p className="faq-text">  
                      Cultured cells are provided with a small
                      amount of conditioned media. We also keep a stock of the
                      customer's chosen cells cultured in-house for a short
                      period following shipping to allow for any issues around
                      shipping or culturing on receipt by the customer.
                    </p>
                  </div>

                  <h4>
                    <AiFillStar size={30} className="text-color-first" /> What
                    do your customers use Stemnovate fibroblasts for?
                  </h4>
                  <div>
                    <p className="faq-text">
                      Stemnovate's Human Primary Dermal Fibroblasts have many
                      applications, for example:
                    </p>
                    <ul>
                      <li>
                        In the assay of cell-cell interaction, adhesion, PCR,
                        laminin, and fibronectin production.
                      </li>
                      <li>Studying fibroblasts growth factor response.</li>
                      <li>In immunofluorescent flow cytometry.</li>
                      <li>
                        Generating cell derivatives for desired research
                        applications.
                      </li>
                      <li>
                        Ideal for 2D and 3D cultures, microfluidic devices,
                        co-cultures, tissue engineering, and skin models
                      </li>
                    </ul>
                    <p className="faq-text">
                      Human Dermal Fibroblasts (HDFs) have been responsible for
                      producing the extracellular matrix forming the connective
                      tissue of the skin and play a crucial role during wound
                      healing. </p>
                    <p className="faq-text">
                      For instance, they play an important role in the
                      progression of inflammation by secreting various factors
                      that define the tissue microenvironment and modulate
                      immune cell functions.
                    </p>
                    <p className="faq-text">
                      HDFs provide an excellent model system to study many
                      aspects of cell physiology. For instance, they are
                      remarkable for their utilization in dozens of research
                      publications related to skin biology and
                      reprogramming/induced pluripotency studies.
                    </p>
                    <p className="faq-text">
                      Dr. Shinya Yamanaka was awarded the Nobel Prize in 2012
                      (Takanashi, 2007; 2009) for using Human Dermal Fibroblasts
                      in order to create induced pluripotent stem cells (iPSC)
                      by using Oct3/4, Sox2, Klf4, and c-Myc.
                    </p>
                  </div>

                  <h4>
                    <AiFillStar size={30} className="text-color-first" /> What
                    are induced stem cells (iPSCs)?
                  </h4>
                  <p className="faq-text">
                    Stemnovate's Induced pluripotent stem cells (iPSCs) are
                    formed by reprogramming somatic cells such as skin
                    (fibroblast, keratinocytes) or blood (PBMNCs, peripheral
                    blood mononuclear cells).
                  </p>
                  <h4>
                    <AiFillStar size={30} className="text-color-first" /> What
                    are iPSCs used for?
                  </h4>
                  <p className="faq-text">
                    iPSCs represent a unique and ethical tool for modelling
                    disease and organ toxicity, with enormous potential for drug
                    discovery and cellular therapies.
                  </p>
                  <h4>
                    <AiFillStar size={30} className="text-color-first" /> What
                    types of cells can iPSCs be differentiated into?
                  </h4>
                  <div>
                    <p className="faq-text">
                      Stemnovate IPSC lines are capable of differentiating into
                      any organ cells. For instance, functional liver cells
                      (Hepatocytes), heart cells (Cardiomyocytes showing key
                      cardiac markers and beating behaviour), and sensory
                      neurons (showing neuronal marker expression and action
                      potential generation on microelectrode arrays).</p> 
                    <p className="faq-text">  
                      The non-integrating method Stemnovate uses results in stable
                      IPS line generation with high efficiency and
                      reproducibility compared to other viral reprogramming
                      methods.</p>
                    <p className="faq-text">  
                      The ability to expand pluripotent cells in vitro
                      and subject them to direct differentiation to produce
                      specific cell types is crucial to developing cell-based
                      therapies to replace or restore tissue.
                    </p>
                    <p className="faq-text">
                      {" "}
                      Please enquire{" "}
                      <a
                        href="/contact-us"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="visually-hidden">
                          Contact us for more details:{" "}
                        </span>
                        <b>HERE</b>
                      </a>{" "}
                      for more details
                    </p>
                  </div>

                  <h4>
                    <AiFillStar size={30} className="text-color-first" /> Are
                    Stemnovate cells tested for mycoplasma before they are
                    shipped to customers?
                  </h4>
                  <p className="faq-text">
                    Yes, cells are tested for HIV-1, HIV-2, HepA, HepB, HepC and
                    mycoplasma, and are also shown to be negative for
                    microbiological growth before shipping to customers.
                  </p>
                  <h4>
                    <AiFillStar size={30} className="text-color-first" /> Are
                    Stemnovate compliant?
                  </h4>
                  <div>
                    <p className="faq-text">
                      Stemnovate holds a commercial license from IPS Academia
                      Japan for which Prof. Yamanaka and Prof Gurdon received
                      the Nobel prize in 2012 for reprogramming technology.
                    </p>
                    <p className="faq-text">
                      Stemnovate also holds a Human Tissue Authority license
                      (HTA) which permits us to ethically source cells under
                      consent for commercial use.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Container>
  )
}

export default AboutUsScreen
