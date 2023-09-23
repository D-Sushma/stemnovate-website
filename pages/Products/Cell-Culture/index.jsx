import React from "react"
import { connect } from "react-redux"
import ReactPlayer from "react-player"
import Link from 'next/link'
import Image from '~/components/elements/Image'
import dynamic from 'next/dynamic'

const Container = dynamic(
  () => import("~/components/layouts/Container"),
  {loading: ()=> <p>Loading...</p>}
)
const BreadCrumb = dynamic(
  () => import("~/components/elements/BreadCrumb"),
  {loading: ()=> <p>Loading...</p>}
)
const ProductList = dynamic(
    () => import("~/components/productList/productList"),
    {loading: ()=> <p>Loading...</p>}
  )
const Subscribe = dynamic(
    () => import("~/components/shared/sections/Subscribe"),
    {loading: ()=> <p>Loading...</p>}
  )

const categoryListScreen = () => {
  const breadcrumb = [
    {
      id: 1,
      text: "Home",
      url: "/"
    },
    {
      id: 2,
      text: "Products",
      url: "/Products"
    },

    {
      id: 3,
      text: "Cell Culture"
    }
  ]

  return (
    <Container
      title="Cell Culture"
      description={`Stemnovate cell culture media are customized for skin, liver, keratinocytes, heart and brain in vitro modelling`}
    >
      <main className="ps-page ps-page--inner">
        <div className="ps-page__header  breadcrumb-h product-breadcrumb-bg">
          <div className="container ">
            <BreadCrumb breacrumb={breadcrumb} />{" "}
            <h1 className="text-center  text-white p-2">Cell Culture</h1>
          </div>
        </div>

        <div className="ps-page__content">
          <div className="ps-about">
            <div className=" about-section ">
              <div className="container">
                <div className="center-box">
                  <p className=" vertical-center">
                    We produce cell culture media in various formats, with or
                    without serum, and containing different types of supplements
                    to support several cell types and applications. Choose from
                    chemically-defined, animal component-free, and classical
                    cell culture media to support the optimal growth of your
                    cells.
                  </p>
                </div>
              </div>
            </div>

            <div className=" bg-02-section">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 text-center">
                    <div>
                      <div className="overflow-hidden">
                        <Image
                          className="ps-banner__image"
                          src="/static/img/products/cell-culture/Chemically-Defined-Media.jpg"
                          alt="CHEMICALLY DEFINED MEDIA"
                          width={1200}
                          height={675}
                        />
                        </div>
                      <h2 className="m-4">Chemically Defined Media</h2>
                      <p className="mx-4">
                        This media is for in vitro human or animal cell culture.
                        As we optimize all the chemical components this type of
                        media is suitable for industrial projects where
                        reproducibility is crucial.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 text-center">
                    <div>
                      <div className="overflow-hidden">
                        <Image
                          className="ps-banner__image"
                          src="/static/img/products/cell-culture/Animal-Component-Free-Media.jpg"
                          alt="ANIMAL COMPONENT FREE MEDIA"
                          width={1200}
                          height={675}
                        />
                      </div>
                      <h2 className=" m-4">Animal Component Free Media</h2>
                      <p className="mx-4  ">
                        The animal component media is suitable for human cell
                        culture such as drug testing, mechanism of action
                        studies or cellular differentiation or for adapting for
                        therapeutic applications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" about-section">
              <div className="container">
                <section className="ps-section--block-grid ">
                  <div className="ps-section__thumbnail">
                    <Link href="#">
                      <div className="ps-section__image link-hover-thumb-shape">
                      <Image
                        src="/static/img/products/cell-culture/Classical-cell-culture-Media.jpg"
                        alt="CLASSICAL CELL CULTURE MEDIA"
                        width={1200}
                        height={675}
                      />
                      </div>
                    </Link>
                  </div>
                  <div className="ps-section__content">
                    <h2 className=" font-weight-bold">
                      Classical Cell Culture Media
                    </h2>

                    <div className="ps-section__desc ">
                      <p className="">
                        The classical media composition may contain serum or
                        components to allow long term culture or for general
                        cell-based assays or vitro studies.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="about-section">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-left">
                    <div>
                      <div className="overflow-hidden">
                        </div>
                      <h2>Cell Culture Handbook</h2>
                      <p>
                        Cell culture is a method used in biological research to
                        isolate fragments of cells or tissues from an organism
                        and subsequently grow them in a favourable artificial
                        environment. Cell culture laboratories present several
                        specific hazards associated with cell and tissue
                        manipulation, as well as toxic, corrosive, or mutagenic
                        solvents and reagents. To ensure an appropriate
                        biosafety level, it is necessary to strictly adhere to
                        standard microbiological practices and techniques.
                      </p>
                      <p>
                        Every cell culture laboratory, regardless of the type of
                        samples handled, requires it to be free from pathogenic
                        microorganisms (i.e., asepsis) and share some of the
                        same basic equipment that is essential for culturing
                        cells. Laminar flow hoods are ventilation devices used
                        within cell culture labs to provide an aseptic work area
                        that helps protect both the personnel and the materials
                        they are working with. Cell culture hoods are used to
                        create a sterile environment and to protect the samples
                        from contamination. Essential in any cell culture lab is
                        the incubator, a piece of equipment that allows cells
                        and tissues to be protected in a sealed chamber with
                        strictly regulated conditions, including temperature,
                        humidity, CO2 and O2. Equally important are the pipettes
                        and tools used to dispense accurate and measured volumes
                        of liquids. They can be categorised as micropipettes
                        (that dispense between 1 and 1000µl) and macro pipettes
                        (that dispense a volume greater than 1000µl). Pipettes
                        come in several designs, including manual and
                        electronic, as well as single-channel or multi-channel
                        pipettes. Finally, another essential component is the
                        microscope, needed to examine cell growth (confluency
                        and morphology), and cell proliferation, as well as to
                        ensure that the culture is free from contamination.
                      </p>
                      <p>
                        One of the most important components of the cell culture
                        environment is the <b>cell medium</b> that provides the
                        necessary elements to support cell growth, including
                        nutrients, hormones, and growth factors. The culture
                        medium also regulates the pH and the osmotic pressure of
                        the culture. Furthermore, different types of{" "}
                        <b>plastic vessels</b> can be used for cell culture and
                        cell-based assays. Cell culture <b>plates</b> (including
                        6-, 12-, 24- and <b>96-well plates</b>), dishes and{" "}
                        <b>flasks</b> (such as <b>T-25</b>) are available.
                      </p>
                      <br />
                      <h2>Cell Culture Essentials</h2>
                      <br />
                      <p>
                        <strong>Cell culture media</strong> contain several
                        components to ensure cell survival and growth. These
                        include glucose, L-glutamine and <strong>serum</strong>.
                      </p>
                      <br />
                      <h3 className="text-left mb-5">
                        Advantages Of Stemnovate&apos;s ETFDS
                      </h3>

                      <table id="products">
                        <thead>
                          <tr>
                            <th>Glucose</th>
                            <th>Glutamine</th>
                            <th>Serum</th>
                            <th>Hepes</th>
                            <th>Sodium pyruvate</th>
                            <th>Phenol red</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>High</td>
                            <td>GlutaMAX</td>
                            <td>Standard</td>
                            <td>Yes</td>
                            <td>Yes</td>
                            <td>Yes</td>
                          </tr>
                          <tr>
                            <td>Low</td>
                            <td>L-glutamine</td>
                            <td>Reduced serum</td>
                            <td>No</td>
                            <td>No</td>
                            <td>No</td>
                          </tr>
                          <tr>
                            <td>None</td>
                            <td>-</td>
                            <td>no serum</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                          </tr>
                        </tbody>
                      </table>
                      <br />

                      <h3 className="text-left mb-5">
                        Useful Cell Culture Numbers
                      </h3>

                      <table id="products">
                        <thead>
                          <tr>
                            <th>-</th>
                            <th>
                              Surface area <br />
                              (cm2)
                            </th>
                            <th>
                              Seeding
                              <br /> density <sup>*</sup>
                            </th>
                            <th>
                              Cells at
                              <br /> confluency<sup>+</sup>
                            </th>
                            <th>
                              Trypsin <br />
                              (mL of 0.05% trypsin, 0.53 mM EDTA)
                            </th>
                            <th>
                              Cell medium <br />
                              required (mL)
                            </th>
                          </tr>
                          <tr>
                            <th className="text-center" colSpan="6">
                              FLASKS
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>T-25</td>
                            <td>25</td>
                            <td>
                              0.7 x 10<sup>6</sup>
                            </td>
                            <td>
                              2.8 x 10<sup>6</sup>
                            </td>
                            <td>3 </td>
                            <td>3–5</td>
                          </tr>
                          <tr>
                            <td>T-75</td>
                            <td>75</td>
                            <td>
                              2.1 x 10<sup>6</sup>
                            </td>
                            <td>
                              8.4 x 10<sup>6</sup>
                            </td>
                            <td>5</td>
                            <td>8–15</td>
                          </tr>
                          <tr>
                            <td>T-175</td>
                            <td>175</td>
                            <td>
                              4.9 x 10<sup>6</sup>
                            </td>
                            <td>
                              23.3 x 10<sup>6</sup>
                            </td>
                            <td>17</td>
                            <td>35–53</td>
                          </tr>
                          <tr>
                            <td>T-225</td>
                            <td>225</td>
                            <td>
                              6.3 x 10<sup>6</sup>
                            </td>
                            <td>
                              30 x 10<sup>6</sup>
                            </td>
                            <td>22</td>
                            <td>45–68</td>
                          </tr>
                          <tr>
                            <th className="text-center" colSpan="6">
                              CULTURE PLATES
                            </th>
                          </tr>

                          <tr>
                            <td>6-well</td>
                            <td>9.6</td>
                            <td>
                              0.3 x 10<sup>6</sup>
                            </td>
                            <td>
                              1.2 x 10<sup>6</sup>
                            </td>
                            <td>1</td>
                            <td>1 to 3</td>
                          </tr>
                          <tr>
                            <td>12-well</td>
                            <td>3.5</td>
                            <td>
                              0.1 x 10<sup>6</sup>
                            </td>
                            <td>
                              0.5 x 10<sup>6</sup>
                            </td>
                            <td>0.4 to 1</td>
                            <td>1 to 2</td>
                          </tr>
                          <tr>
                            <td>24-well</td>
                            <td>1.9</td>
                            <td>
                              0.05 x 10<sup>6</sup>
                            </td>
                            <td>
                              0.24 x 10<sup>6</sup>
                            </td>
                            <td>0.2 to 0.3</td>
                            <td>0.5 to 1.0</td>
                          </tr>
                          <tr>
                            <td>48-well</td>
                            <td>1.1</td>
                            <td>
                              0.03 x 10<sup>6</sup>
                            </td>
                            <td>
                              0.12 x 10<sup>6</sup>
                            </td>
                            <td>0.1 to 0.2</td>
                            <td>0.2 to 0.4</td>
                          </tr>
                          <tr>
                            <td>96-well</td>
                            <td>0.32</td>
                            <td>
                              0.01 x 10<sup>6</sup>
                            </td>
                            <td>
                              0.04 x 10<sup>6</sup>
                            </td>
                            <td>0.05 to 0.1</td>
                            <td>0.1 to 0.2</td>
                          </tr>
                          <tr>
                            <th className="text-center" colSpan="6">
                              DISHES
                            </th>
                          </tr>
                          <tr>
                            <td>35mm</td>
                            <td>8.8</td>
                            <td>
                              0.04 x 10<sup>6</sup>
                            </td>
                            <td>
                              1.2 x 10<sup>6</sup>
                            </td>
                            <td>1</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>60mm</td>
                            <td>21.5</td>
                            <td>
                              0.8 x 10<sup>6</sup>
                            </td>
                            <td>
                              3.2 x 10<sup>6</sup>
                            </td>
                            <td>3</td>
                            <td>5</td>
                          </tr>
                          <tr>
                            <td>100mm</td>
                            <td>56.7</td>
                            <td>
                              2.2 x 10<sup>6</sup>
                            </td>
                            <td>
                              8.8 x 10<sup>6</sup>
                            </td>
                            <td>5</td>
                            <td>12</td>
                          </tr>
                          <tr>
                            <td>150mm</td>
                            <td>145</td>
                            <td>
                              5.0 x 10<sup>6</sup>
                            </td>
                            <td>
                              20.0 x 10<sup>6</sup>
                            </td>
                            <td>10</td>
                            <td>30</td>
                          </tr>
                        </tbody>
                      </table>
                      <small>
                        <strong>*</strong> Dishes and Flasks: cells per vessel;
                        Culture plates: cells per well
                      </small>
                      <br />
                      <small>
                        <strong>+</strong> The number of cells on a confluent
                        plate, dish, or flask will vary with cell type (HeLa
                        cells were used).
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-02-section">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <div>
                      <div className="overflow-hidden">
                        <div
                          className="ps-banner__image ml-auto mr-auto"
                          style={{ width: "500px" }}
                        >
                          <ReactPlayer
                            playing
                            loop
                            className="react-player"
                            url="/static/img/products/cell-culture/work-with-us-video-cell-culture-page.mp4"
                            width="100%"
                            height="100%"
                          />
                        </div>
                        </div>
                      <h2 className="m-4">Work With Us!</h2>
                      <p className="mx-4">
                        At Stemnovate we have developed ready-to-use cell
                        culture media, but we can also customize your media to
                        fit your project (and your budget). We can provide
                        technical support recommendations for your cell culture,
                        including tips for experimental setup and in-depth
                        troubleshooting help.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-section">
              <div className="container">
                <ProductList slug="Cell-Culture" />
              </div>
            </div>

            <Subscribe />
          </div>
        </div>
      </main>
    </Container>
  )
}

// export default categoryListScreen;
export default connect((state) => state)(categoryListScreen)
