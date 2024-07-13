import React from "react"
import HowitWorksmain from "~/public/static/img/how-it-work/how-it-works-white-main.svg"
import dynamic from "next/dynamic"

const Image = dynamic(() => import("~/components/elements/Image"), {
  loading: () => <p>Loading...</p>
})
const HowItsWork = () => {
  return (
      <div className="plus-section">
        <div
          className="container-how-work d-flex flex-column justify-content-center align-items-center"
          style={{
            boxSizing: "border-box",
            WebkitFontSmoothing: "antialiased"
          }}
        >
          <h2
            style={{
              boxSizing: "border-box",
              WebkitFontSmoothing: "antialiased",
              margin: "0px 0px 0.540791em",
              clear: "both",
              fontSize: "2em",
              lineHeight: 1.214,
              color: "#fff"
            }}
          >
            HOW IT WORKS
          </h2>
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
            <div className="hiw-wrapper" >
              <Image
                className="hiw-main-image"
                alt="How it works"
                src={HowitWorksmain}
              />
              <div
                className="hiw-hover-wrapper"
              >
                <div
                  className="hiw-hover-block hiw-hover-block-multiorgan-solution"
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased"
                  }}
                >
                  <div
                    className="hiw-image-block"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased"
                    }}
                  />
                  <div data-background-image="https.stemnovate.co.uk/public/static/img/how-it-work/how-it-works.png"
                    className="hiw-image-block-hover"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased"
                    }}
                  />
                  <div
                    className="hiwhb-popup"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased"
                    }}
                  >
                    <div
                      className="hiwbh-title"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased"
                      }}
                    >
                      Multiorgan solution
                    </div>
                    <div
                      className="hiwbh-desc"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased"
                      }}
                    >
                      <p
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px 0px 15px",
                          fontSize: "16px",
                          fontWeight: 300,
                          color: "#fff",
                          lineHeight: "28px"
                        }}
                      />
                      <p
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px 0px 15px",
                          fontSize: "16px",
                          fontWeight: 300,
                          color: "#fff",
                          lineHeight: "28px"
                        }}
                      >
                        In vitro Absorption, distribution, metabolism and
                        excretion studies can be conducted on tissues showing
                        multicellular interactions in microphysiological
                        systems.
                      </p>
                      <p
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px 0px 15px",
                          fontSize: "16px",
                          fontWeight: 300,
                          color: "#fff",
                          lineHeight: "28px"
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="hiw-hover-block hiw-hover-block-computation-data"
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased"
                  }}
                >
                  <div
                    className="hiw-image-block"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased"
                    }}
                  />
                  <div data-background-image="https.stemnovate.co.uk/public/static/img/how-it-work/how-it-works.png"
                    className="hiw-image-block-hover"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased"
                    }}
                  />
                  <div
                    className="hiwhb-popup"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased"
                    }}
                  >
                    <div
                      className="hiwbh-title"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased"
                      }}
                    >
                      Computational modelling & Big Data
                    </div>
                    <div
                      className="hiwbh-desc"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased"
                      }}
                    >
                      <p
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px 0px 15px",
                          fontSize: "16px",
                          fontWeight: 300,
                          color: "#fff",
                          lineHeight: "28px"
                        }}
                      />
                      <p
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px 0px 15px",
                          fontSize: "16px",
                          fontWeight: 300,
                          color: "#fff",
                          lineHeight: "28px"
                        }}
                      >
                        The multiparametric data obtained from cell studies,
                        assays, protein and gene expression and imaging is used
                        for data analysis and predictive modelling of drug
                        response.
                      </p>
                      <p
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px 0px 15px",
                          fontSize: "16px",
                          fontWeight: 300,
                          color: "#fff",
                          lineHeight: "28px"
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="hiw-hover-block hiw-hover-block-biosensing"
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased"
                  }}
                >
                  <div
                    className="hiw-image-block"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased"
                    }}
                  />
                  <div data-background-image="https.stemnovate.co.uk/public/static/img/how-it-work/how-it-works.png"
                    className="hiw-image-block-hover"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased"
                    }}
                  />
                  <div
                    className="hiwhb-popup"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased"
                    }}
                  >
                    <div
                      className="hiwbh-title"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased"
                      }}
                    >
                      Biosensing
                    </div>
                    <div
                      className="hiwbh-desc"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased"
                      }}
                    >
                      <p
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px 0px 15px",
                          fontSize: "16px",
                          fontWeight: 300,
                          color: "#fff",
                          lineHeight: "28px"
                        }}
                      />
                      <p
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px 0px 15px",
                          fontSize: "16px",
                          fontWeight: 300,
                          color: "#fff",
                          lineHeight: "28px"
                        }}
                      >
                        The quantitative data is obtained through biosensors for
                        microenvironment changes and physiological parameter
                        analysis.
                      </p>
                      <p
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px 0px 15px",
                          fontSize: "16px",
                          fontWeight: 300,
                          color: "#fff",
                          lineHeight: "28px"
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="hiw-hover-block hiw-hover-block-drugInteraction"
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased"
                  }}
                >
                  <div
                    className="hiw-image-block"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased"
                    }}
                  />
                  <div data-background-image="https.stemnovate.co.uk/public/static/img/how-it-work/how-it-works.png"
                    className="hiw-image-block-hover"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased"
                    }}
                  />
                  <div
                    className="hiwhb-popup"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased"
                    }}
                  >
                    <div
                      className="hiwbh-title"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased"
                      }}
                    >
                      Drug Interaction studies
                    </div>
                    <div
                      className="hiwbh-desc"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased"
                      }}
                    >
                      <p
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px 0px 15px",
                          fontSize: "16px",
                          fontWeight: 300,
                          color: "#fff",
                          lineHeight: "28px"
                        }}
                      />
                      <p
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px 0px 15px",
                          fontSize: "16px",
                          fontWeight: 300,
                          color: "#fff",
                          lineHeight: "28px"
                        }}
                      >
                        Cytochrome P450 studies are complimented with metabolism
                        assays, expression profiling and transcriptomic
                        analysis. A comprehensive data to understand the
                        mechanistic of action or toxicity.
                      </p>
                      <p
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px 0px 15px",
                          fontSize: "16px",
                          fontWeight: 300,
                          color: "#fff",
                          lineHeight: "28px"
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="hiw-hover-block hiw-hover-block-cellBasedAssays"
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased"
                  }}
                >
                  <div
                    className="hiw-image-block"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased"
                    }}
                  />
                  <div data-background-image="https.stemnovate.co.uk/public/static/img/how-it-work/how-it-works.png"
                    className="hiw-image-block-hover"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased"
                    }}
                  />
                  <div
                    className="hiwhb-popup"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased"
                    }}
                  >
                    <div
                      className="hiwbh-title"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased"
                      }}
                    >
                      Cell based assays
                    </div>
                    <div
                      className="hiwbh-desc"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased"
                      }}
                    >
                      <p
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px 0px 15px",
                          fontSize: "16px",
                          fontWeight: 300,
                          color: "#fff",
                          lineHeight: "28px"
                        }}
                      />
                      <p
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px 0px 15px",
                          fontSize: "16px",
                          fontWeight: 300,
                          color: "#fff",
                          lineHeight: "28px"
                        }}
                      >
                        In-depth studies for cell proliferation, apoptosis,
                        receptors & transporters.
                      </p>
                      <p
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px 0px 15px",
                          fontSize: "16px",
                          fontWeight: 300,
                          color: "#fff",
                          lineHeight: "28px"
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="hiw-hover-block hiw-hover-block-threedPrinting"
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased"
                  }}
                >
                  <div
                    className="hiw-image-block"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased"
                    }}
                  />
                  <div data-background-image="https.stemnovate.co.uk/public/static/img/how-it-work/how-it-works.png"
                    className="hiw-image-block-hover"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased"
                    }}
                  />
                  <div
                    className="hiwhb-popup"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased"
                    }}
                  >
                    <div
                      className="hiwbh-title"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased"
                      }}
                    >
                      3D printing prototyping manufacturing
                    </div>
                    <div
                      className="hiwbh-desc"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased"
                      }}
                    >
                      <p
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px 0px 15px",
                          fontSize: "16px",
                          fontWeight: 300,
                          color: "#fff",
                          lineHeight: "28px"
                        }}
                      />
                      <p
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px 0px 15px",
                          fontSize: "16px",
                          fontWeight: 300,
                          color: "#fff",
                          lineHeight: "28px"
                        }}
                      >
                        <b
                          style={{
                            boxSizing: "border-box",
                            WebkitFontSmoothing: "antialiased",
                            fontWeight: 600
                          }}
                        >
                          Microfluidic device development
                        </b>{" "}
                        involves CAD design, 3D printing, prototyping following
                        by application optimisation and manufacturing.
                      </p>
                      <p
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px 0px 15px",
                          fontSize: "16px",
                          fontWeight: 300,
                          color: "#fff",
                          lineHeight: "28px"
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="hiw-hover-block hiw-hover-block-pharmacogenetics"
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased"
                  }}
                >
                  <div
                    className="hiw-image-block"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased"
                    }}
                  />
                  <div data-background-image="https.stemnovate.co.uk/public/static/img/how-it-work/how-it-works.png"
                    className="hiw-image-block-hover"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased"
                    }}
                  />
                  <div
                    className="hiwhb-popup"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased"
                    }}
                  >
                    <div
                      className="hiwbh-title"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased"
                      }}
                    >
                      Pharmacogenetics
                    </div>
                    <div
                      className="hiwbh-desc"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased"
                      }}
                    >
                      <p
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px 0px 15px",
                          fontSize: "16px",
                          fontWeight: 300,
                          color: "#fff",
                          lineHeight: "28px"
                        }}
                      />
                      <p
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px 0px 15px",
                          fontSize: "16px",
                          fontWeight: 300,
                          color: "#fff",
                          lineHeight: "28px"
                        }}
                      >
                        Pharmacogenetics allows the study of the genetic
                        variation due to ethnicity and gender that affects their
                        response or adverse reaction to
                        <br
                          style={{
                            boxSizing: "border-box",
                            WebkitFontSmoothing: "antialiased"
                          }}
                        />
                        {"medicines or xenobiotics."}
                        <br
                          style={{
                            boxSizing: "border-box",
                            WebkitFontSmoothing: "antialiased"
                          }}
                        />
                        {
                          "Stemnovate has diverse bank of IPS lines that represent the human variability for pharmacogenetics studies."
                        }
                      </p>
                      <p
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px 0px 15px",
                          fontSize: "16px",
                          fontWeight: 300,
                          color: "#fff",
                          lineHeight: "28px"
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="hiw-hover-block hiw-hover-block-reducedAnimalTesting"
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased"
                  }}
                >
                  <div
                    className="hiw-image-block"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased"
                    }}
                  />
                  <div data-background-image="https.stemnovate.co.uk/public/static/img/how-it-work/how-it-works.png"
                    className="hiw-image-block-hover"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased"
                    }}
                  />
                  <div
                    className="hiwhb-popup"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased"
                    }}
                  >
                    <div
                      className="hiwbh-title"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased"
                      }}
                    >
                      Reduces Animal Testing Veterinary Research and Development
                    </div>
                    <div
                      className="hiwbh-desc"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased"
                      }}
                    >
                      <p
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px 0px 15px",
                          fontSize: "16px",
                          fontWeight: 300,
                          color: "#fff",
                          lineHeight: "28px"
                        }}
                      />
                      <p
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px 0px 15px",
                          fontSize: "16px",
                          fontWeight: 300,
                          color: "#fff",
                          lineHeight: "28px"
                        }}
                      >
                        Our multispecies cellular models allow in vitro studies
                        for mechanism of action, transporters and signalling
                        pathways. This reduced animal testing while the models
                        benefit veterinary drug development and disease
                        modelling.
                      </p>
                      <p
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px 0px 15px",
                          fontSize: "16px",
                          fontWeight: 300,
                          color: "#fff",
                          lineHeight: "28px"
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="hiw-hover-block hiw-hover-block-drugMetabolism"
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased"
                  }}
                >
                  <div
                    className="hiw-image-block"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased"
                    }}
                  />
                  <div data-background-image="https.stemnovate.co.uk/public/static/img/how-it-work/how-it-works.png"
                    className="hiw-image-block-hover"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased"
                    }}
                  />
                  <div
                    className="hiwhb-popup"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased"
                    }}
                  >
                    <div
                      className="hiwbh-title"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased"
                      }}
                    >
                      Drug metabolism Cytochrome P450 studies
                    </div>
                    <div
                      className="hiwbh-desc"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased"
                      }}
                    >
                      <p
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px 0px 15px",
                          fontSize: "16px",
                          fontWeight: 300,
                          color: "#fff",
                          lineHeight: "28px"
                        }}
                      />
                      <p
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px 0px 15px",
                          fontSize: "16px",
                          fontWeight: 300,
                          color: "#fff",
                          lineHeight: "28px"
                        }}
                      >
                        Cytochromes P450 (CYPs) are the main enzymes involved in
                        drug metabolism. These show huge expression variability
                        among humans. We study CYP inhibition, induction,
                        expression and polymorphism.
                      </p>
                      <p
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px 0px 15px",
                          fontSize: "16px",
                          fontWeight: 300,
                          color: "#fff",
                          lineHeight: "28px"
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="hiw-hover-block hiw-hover-block-multicellularModelling"
                  style={{
                    boxSizing: "border-box",
                    WebkitFontSmoothing: "antialiased"
                  }}
                >
                  <div
                    className="hiw-image-block"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased"
                    }}
                  />
                  <div data-background-image="https.stemnovate.co.uk/public/static/img/how-it-work/how-it-works.png"
                    className="hiw-image-block-hover"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased"
                    }}
                  />
                  <div
                    className="hiwhb-popup"
                    style={{
                      boxSizing: "border-box",
                      WebkitFontSmoothing: "antialiased"
                    }}
                  >
                    <div
                      className="hiwbh-title"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased"
                      }}
                    >
                      Multicellular Modelling Tissue engineering
                    </div>
                    <div
                      className="hiwbh-desc"
                      style={{
                        boxSizing: "border-box",
                        WebkitFontSmoothing: "antialiased"
                      }}
                    >
                      <p
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px 0px 15px",
                          fontSize: "16px",
                          fontWeight: 300,
                          color: "#fff",
                          lineHeight: "28px"
                        }}
                      />
                      <p
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px 0px 15px",
                          fontSize: "16px",
                          fontWeight: 300,
                          color: "#fff",
                          lineHeight: "28px"
                        }}
                      >
                        Tissue consists of specialised cells functioning while
                        uniquely organised. We simulate this organisation for
                        microphysiological studies. Eg, Liver tissue consists of
                        hepatocytes, stellate and Kupffer cells.
                      </p>
                      <p
                        style={{
                          boxSizing: "border-box",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px 0px 15px",
                          fontSize: "16px",
                          fontWeight: 300,
                          color: "#fff",
                          lineHeight: "28px"
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html: `
         html {
         box-sizing: border-box;
         -webkit-font-smoothing: antialiased;
         font-family: sans-serif;
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
  )
}

export default HowItsWork
