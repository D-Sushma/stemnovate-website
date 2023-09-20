import Image from '~/components/elements/Image'
import DataPlatform from "~/public/static/home-images/Data-Platform.jpg"
import StemCells from "~/public/static/home-images/Stem-Cells-Cellular-Reprogramming.jpg"
import Molecular from "~/public/static/home-images/Molecular-&-Microengineering.jpg"
import Discovery from "~/public/static/home-images/Drug-Discovery-Platform.jpg"
import Link from "next/link"

const OurService = () => {
  return (
    <>
      <section className="about-section">
        <div className="container container-services">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <Link href="/Applications/Drug-Discovery-Platform" prefetch={false}>
                  <div>
                    <h2 className="heading-services text-left m-4 font-weight-bolder">
                      Drug Discovery Platform
                    </h2>
                    <p className="mx-4 text-left font-weight-bolder">
                      We use novel multi-organ modelling to evaluate drug
                      molecule metabolism and toxicity, ensuring better clinical
                      trials and patient safety outcomes. Our projects include
                      Hepatitis research and many more.
                    </p>
                    <div className="mx-4 d-flex flex-column mt-2 flex-md-row-reverse">
                      <div className="overflow-hidden link-hover-thumb-shape">
                        <Image
                          // className="ps-banner__image"
                          className="zoom-in"
                          src={Discovery}
                          alt="Drug Discovery Platform"
                          width={386}
                          height={218}
                          placeholder="blur"
                          blurDataURL="/static/image/blurred.png"
                          priority 
                        />
                      </div>
                      <p className="text-left font-weight-bolder content-services">
                        Our work on automation for cell based assays save cost
                        and time and revolutionize the pharmaceutical industry.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="row">
                <div className="mx-4 button button-services">
                  <Link href="/Applications/Drug-Discovery-Platform" prefetch={false}>
                    Discover More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <Link href="/Products" prefetch={false}>
                  <div>
                    <h2 className="heading-services text-left m-4 font-weight-bolder">
                      Bio Banking
                    </h2>
                    <p className="mx-4 text-left font-weight-bolder">
                      Ethical sourcing is core to our biobank, reflecting human
                      diversity in age, gender & ethnicities. We are experts in
                      cellular reprogramming with the capability for human and
                      animal reprogramming.
                    </p>
                    <div className="mx-4 d-flex flex-column mt-2 flex-md-row-reverse">
                      <div className="overflow-hidden link-hover-thumb-shape">
                        <Image
                          // className="ps-banner__image"
                          className="zoom-in"
                          src={StemCells}
                          alt="Stem Cells Cellular Reprogramming"
                          width={386}
                          height={218}
                          placeholder="blur"
                          blurDataURL="/static/image/blurred.png"
                          priority 
                        />
                      </div>
                      <p className="text-left font-weight-bolder content-services">
                        For industry and academia, we routinely differentiate
                        stem cells into the liver, heart, and neuronal cells.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="row">
                <div className="mx-4 button button-services">
                  <Link href="/Products" prefetch={false}>View Product</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="plus-section">
        <div className="container container-services">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <Link href="/Services" prefetch={false}>
                  <div>
                    <h2 className="text-white m-4 text-left font-weight-bolder">
                      Molecular & Microengineering
                    </h2>
                    <p className=" mx-4 text-left text-white font-weight-bolder">
                      We design vectors with an industrial process to generate
                      induced pluripotent stem cell In addition, we offer a
                      multispecies cell platform ensuring quality through
                      advanced profiling and bioinformatics.
                    </p>
                    <div className="mx-4 d-flex flex-column mt-2 flex-md-row-reverse">
                      <div className="overflow-hidden link-hover-thumb-shape">
                        <Image
                          // className="ps-banner__image"
                          className="zoom-in"
                          src={Molecular}
                          alt="Molecular and Microengineering"
                          width={386}
                          height={218}
                          placeholder="blur"
                          blurDataURL="/static/image/blurred.png"
                          priority 
                        />
                      </div>
                      <p className="text-left text-white font-weight-bolder content-services">
                        We provide digital{" "}
                        <Link href="/resources/r/karyotyping" prefetch={false}>
                          <span className="font-weight-bold content-services--link">
                            karyotyping
                          </span>
                        </Link>{" "}
                        and{" "}
                        <Link href="/resources/r/genotyping" prefetch={false}>
                          <span className="font-weight-bold content-services--link">
                            genotyping
                          </span>
                        </Link>{" "}
                        for disease profiling and understanding drug metabolism
                        response.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="row">
                <div className="mx-4 button button-services">
                  <Link href="/Services" prefetch={false}>Resources</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <div className="row">
                  <Link href="/Services" prefetch={false}>
                    <div>
                      <h2 className="text-white m-4 text-left font-weight-bolder">
                        Data Platform
                      </h2>
                      <p className=" mx-4 text-left text-white font-weight-bolder">
                        The drug discovery data often cannot be reproduced with
                        conventional techniques. Therefore, we integrate
                        computational modelling and microengineering to enable
                        next-gen drug development.
                      </p>
                      <div className="mx-4 d-flex flex-column mt-2 flex-md-row-reverse">
                        <div className="overflow-hidden link-hover-thumb-shape">
                          <Image
                            // className="ps-banner__image"
                            className="zoom-in"
                            src={DataPlatform}
                            alt="Data Platform"
                            width={386}
                            height={218}
                            placeholder="blur"
                            blurDataURL="/static/image/blurred.png"
                            priority 
                          />
                        </div>
                        <p className=" text-left text-white font-weight-bolder content-services">
                          Stemnovate aims to make precision medicine a global
                          reality through unique data platforms and novel
                          devices.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="row">
                  <div className="mx-4 button button-services">
                    <Link href="/Services" prefetch={false} aria-label="Learn More about Services">Learn More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurService
