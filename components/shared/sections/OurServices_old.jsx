import Image from "~/components/elements/Image"
import bioImg from "~/public/static/img/landing/bio-banking.gif"
import Reprogramming from "~/public/static/img/landing/Reprogramming-and-Differentiation.jpg"
import chipTechnology from "~/public/static/img/landing/Chip-Technology.webp"
import automation from "~/public/static/img/landing/Automation-for-drug-discovery.jpg"
import Discovery from "~/public/static/img/landing/Drug-Discovery.jpg"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"

const OurService = () => {
  return (
    <section className="ps-section--standard ps-featured-products ">
      <div className="plus-section ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center">
              <div>
                <div className="row">
                  <Link href="/Applications/Drug-Discovery-Platform">
                    <div>
                      <div className="overflow-hidden mx-4 link-hover-thumb-shape">
                          <Image
                            className="ps-banner__image"
                            src={Discovery}
                            alt="Drug Discovery Platform"
                            width="1000px"
                            height="563px"
                          />
                        </div>
                        <h3 className="text-white m-4">
                        Drug Discovery Platform
                      </h3>
                      <p className="text-left  text-white">
                        We use novel multi-organ modelling to evaluate drug
                        molecule metabolism and toxicity, ensuring better
                        clinical trials and patient safety outcomes. Our
                        projects include Hepatitis research and many more.
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="row">
                  <div className="col-md-12 text-center">
                    <div className="button button--yellow">
                      <Link href="/Applications/Drug-Discovery-Platform">
                        <div>
                          READ MORE <FaArrowRight />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div>
                <div className="row">
                  <Link href="/Products">
                    <div>
                      <div className="overflow-hidden mx-4 link-hover-thumb-shape">
                        <Image
                          className="ps-banner__image"
                          src={bioImg}
                          alt="Bio Banking"
                          width={1000}
                          height={563}
                        />
                      </div>
                      <h3 className="text-white m-4">Bio Banking</h3>
                      <p className="mx-4 text-left text-white">
                        Ethical sourcing is core to our biobank, reflecting
                        human diversity in age, gender & ethnicities. In
                        addition, we offer a multispecies cell platform ensuring
                        quality through advanced profiling & bioinformatics.
                      </p>
                    </div>
                  </Link>
                </div>

                <div className="row">
                  <div className="col-md-12 text-center">
                    <div className="button button--yellow">
                      <Link href="/Products">
                        <div>
                          VIEW PRODUCTS <FaArrowRight />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center">
              <div>
                <div className="row">
                  <Link href="/Services">
                    <div>
                      <div className="overflow-hidden mx-4 link-hover-thumb-shape">
                        <Image
                          className="ps-banner__image"
                          src={Reprogramming}
                          alt="Reprogramming and Differentiation"
                          width={"500px"}
                          height="281px"
                        />
                      </div>
                      <h3 className="text-black m-4">
                        Reprogramming and Differentiation
                      </h3>
                      <p className="mx-4 text-left text-black">
                        We are experts in cellular reprogramming and one of the
                        only companies globally with the capability for human
                        and animal reprogramming. We design vectors with an
                        industrial process to generate induced pluripotent stem
                        cells. For industry and academia, we routinely
                        differentiate stem cells into the liver, heart, and
                        neuronal cells.
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="row">
                  <div className="col-md-12 text-center">
                    <div className="button button--yellow">
                      <Link href="/Services">
                        <div>
                          READ MORE <FaArrowRight />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div>
                <div className="row">
                  <Link href="/Products">
                    <div>
                      <div className="overflow-hidden mx-4 link-hover-thumb-shape">
                        <Image
                          className="ps-banner__image"
                          src={chipTechnology}
                          alt="Chip Technology"
                          width={"500px"}
                          height="281px"
                        />
                      </div>
                      <h3 className="text-black m-4">Chip Technology</h3>
                      <p className="mx-4 text-left text-black">
                        We are innovating organs-on-chip platforms to provide a
                        physiological alternative to cancer lines and animal
                        models for advanced drug discovery. From 2017 to 2019,
                        our research was co-funded by Innovate UK to develop a
                        liver on chip platform. This million-pound funding
                        resulted in patenting innovation that we aim to launch
                        to market soon.
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="row">
                  <div className="col-md-12 text-center">
                    <div className="button button--yellow">
                      <Link href="/Products">
                        <div>
                          VIEW PRODUCTS <FaArrowRight />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="plus-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-5">
              <div>
                <Link href="/Applications/Drug-Discovery-Platform">
                  <div>
                    <div className="overflow-hidden link-hover-thumb-shape">
                      <Image
                        className="ps-banner__image"
                        src={automation}
                        alt="Automation for drug discovery"
                        width={"500px"}
                        height="281px"
                      />
                    </div>
                    <h3 className="text-white m-4">
                      Automation for drug discovery
                    </h3>
                    <p className="mx-4 text-white">
                      The drug discovery data often cannot be reproduced with
                      conventional techniques. Therefore, we integrate
                      computational modelling and microengineering to enable
                      next-gen drug development. Automation for preclinical
                      research and development will save cost and time and
                      revolutionize the pharmaceutical industry.
                    </p>
                  </div>
                </Link>
                <div className="button button--yellow">
                  <Link href="/Applications/Drug-Discovery-Platform">
                    <div>
                      READ MORE <FaArrowRight />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurService
