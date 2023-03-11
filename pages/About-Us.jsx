import React from "react";
import Container from "~/components/layouts/Container";
import BreadCrumb from "~/components/elements/BreadCrumb";
import Testimonials from "~/components/shared/sections/Testimonials";
import Subscribe from "~/components/shared/sections/Subscribe";
const breadcrumb = [
    {
        id: 1,
        text: "Home",
        url: "/",
    },

    {
        id: 2,
        text: "About us",
    },
];

const AboutUsScreen = () => {
    return (
        <Container title="About Us">
            <main className="ps-page ps-page--inner">
                <div className="ps-page__header  breadcrumb-h application-breadcrumb-bg">
                    <div className="container ">
                        <BreadCrumb breacrumb={breadcrumb} />
                    </div>
                    <h2 className="text-center  text-white p-2">
                        Be the change you want to see in the world-{" "}
                        <span>
                            <small style={{ fontSize: "0.6em" }}>Mahatma Gandhi</small>
                        </span>
                    </h2>
                </div>
                <div className="ps-page__content">
                    <div className="ps-about">
                        <div class="about-section">
                            <section className="container">
                                {/* <Reveal effect="fadeInUp"> */}
                                {/* <h4 className="text-center font-weight-bold text-black">About</h4> */}
                                {/* <h2 className="text-center font-weight-bolder base-text-primary">STEMNOVATE</h2> */}
                                <div className="center-box">
                                    <div className="vertical-center">
                                        <p className=" " style={{ fontSize: "1.17em" }}>
                                            Stemnovate's pioneering platform for targeted
                                            <span className="text-orange"> drug development</span> is truly unique. We account for individual variations in patients' <span className="text-orange">genetics, physiology, and health.</span> It enables the most precise, carefully targeted drug development from the earliest stages of the process.
                                            <br /> As a result, we deliver a safer, more cost-effective, and best drug discovery for humans. Preventing the needless loss of countless animal lives in a process that up until now has failed to predict accurate human responses. <br /> Stemnovate has the best human and multispecies animal platforms to advance <span className="text-orange">medical research and drug discovery.</span>
                                        </p>
                                    </div>
                                </div>

                                {/* </Reveal> */}
                            </section>
                        </div>

                        <div className="bg-02-section">
                            <div className="container">
                                <section className="ps-section--block-grid ">
                                    <div className="ps-section__thumbnail">
                                        <a className="ps-section__image" href="#">
                                            <img src="/static/img/about/Ruchi.jpg" alt="Ruchi sharma" />
                                        </a>
                                    </div>
                                    <div className="ps-section__content">
                                        <div className="ps-section__desc ">
                                            {/* <h2 className="text-white">
                                                Live Culture Fibroblasts
                                            </h2> */}
                                            <p className="text-white">
                                                Our Founder and CEO, Dr Ruchi Sharma, is driven by her passion for taking the benefits of research and applying them to products and technology to make a significant and positive difference in the real world. She is the ‘# One to watch’ entrepreneur of 2020 in the UK and is leading prestigious grants and international industrial partnerships. Dr Sharma obtained a PhD from the world-renowned Roslin Institute at the University of Edinburgh, followed by a post-doctorate in the exciting field of cellular reprogramming at the University of Cambridge. She is also a veterinarian and supports inventions for better animal health while reducing animal testing. With a firm focus on partnerships and collaboration, Dr Sharma believes that we can create a
                                                better world through innovation.
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>

                        <div className="about-section">
                            <div className="container">
                                <div className=" row d-flex justify-content-center">
                                    {/* /* ---------------------------------- first --------------------------------- */}
                                    <div className="col-md-2 col-sm-6 d-flex flex-grow-1">
                                        <div className="card mt-3  align-items-center p-1">
                                            <div className="card card-h-min-about-us align-items-center p-1 justify-content-center ">
                                                <a href="https://www.cambridgeindependent.co.uk/business/14-innovative-women-in-cambridge-leading-the-way-in-healthcare-9053171/" target="_blank">
                                                    <div className="d-flex align-items-center our-client-images">
                                                        <img src="/static/img/about/science-cambridge.svg" alt="women in Cambridge, leading healthcare" />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="card-body  p-0 ps-btn-about-bottom">
                                                <a href="https://www.cambridgeindependent.co.uk/business/14-innovative-women-in-cambridge-leading-the-way-in-healthcare-9053171/" target={"_blank"}>
                                                    <h4 className="card-title text-center pt-2 px-2">2017</h4>
                                                    <h6 className="card-title  px-2">Recognised among the top 14 innovative women in Cambridge, leading healthcare.</h6>
                                                </a>

                                                <a target={"_blank"} href="https://www.cambridgeindependent.co.uk/business/14-innovative-women-in-cambridge-leading-the-way-in-healthcare-9053171/" className="h3 py-4 float-right ">
                                                    <span className="button-link">READ MORE</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /* --------------------------------- Second ---------------------------------  */}
                                    <div className="col-md-2 col-sm-6 d-flex flex-grow-1">
                                        <div className="card mt-3  align-items-center p-1">
                                            <div className="card card-h-min-about-us align-items-center p-1 justify-content-center ">
                                                <a href="https://www.businessweekly.co.uk/news/biomedtech/1-million-funding-cambridge-‘liver-chip’-pioneers" target="_blank">
                                                    <div className="d-flex align-items-center our-client-images">
                                                        <img src="/static/img/about/bw-logo.png" alt="Commercialised Stemnovate drug discovery platform" />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="card-body  p-0 ps-btn-about-bottom">
                                                <a href="https://www.businessweekly.co.uk/news/biomedtech/1-million-funding-cambridge-‘liver-chip’-pioneers" target={"_blank"}>
                                                    <h4 className="card-title text-center pt-2 px-2">2017-2019</h4>
                                                    <h6 className="card-title  px-2">Commercialised Stemnovate drug discovery platform followed by successful completion ....</h6>
                                                </a>

                                                <a target={"_blank"} href="https://www.businessweekly.co.uk/news/biomedtech/1-million-funding-cambridge-‘liver-chip’-pioneers" className="h3 py-4 float-right ">
                                                    <span className="button-link">READ MORE</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /* ----------------------------------- 3rd ----------------------------------  */}
                                    <div className="col-md-2 col-sm-6 d-flex flex-grow-1">
                                        <div className="card mt-3  align-items-center p-1">
                                            <div className="card card-h-min-about-us align-items-center p-1 justify-content-center ">
                                                <a href="https://nc3rs.org.uk/crackit/immuliver" target="_blank">
                                                    <div className="d-flex align-items-center our-client-images">
                                                        <img src="/static/img/about/ncr-logo.png" alt="innovating liver model for replacing primate models" />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="card-body  p-0 ps-btn-about-bottom">
                                                <a href="https://nc3rs.org.uk/crackit/immuliver" target={"_blank"}>
                                                    <h4 className="card-title text-center pt-2 px-2">2019</h4>
                                                    <h6 className="card-title  px-2">NC3Rs grant for innovating liver model for replacing primate models during vaccination development.</h6>
                                                </a>

                                                <a target={"_blank"} href="https://nc3rs.org.uk/crackit/immuliver" className="h3 py-4 float-right ">
                                                    <span className="button-link">READ MORE</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /* ----------------------------------- 4th ----------------------------------  */}
                                    <div className="col-md-2 col-sm-6 d-flex flex-grow-1">
                                        <div className="card mt-3  align-items-center p-1">
                                            <div className="card card-h-min-about-us align-items-center p-1 justify-content-center ">
                                                <a href="https://www.cambridgeindependent.co.uk/business/21towatch-shortlist-of-innovative-people-companies-and-th-9238051/" target={"_blank"}>
                                                    <div className="d-flex align-items-center our-client-images">
                                                        <img src="/static/img/about/science-cambridge.svg" alt="Top among # 21 to watch entrepreneurs" />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="card-body  p-0 ps-btn-about-bottom">
                                                <a href="https://www.cambridgeindependent.co.uk/business/21towatch-shortlist-of-innovative-people-companies-and-th-9238051/" target={"_blank"}>
                                                    <h4 className="card-title text-center pt-2 px-2">2020</h4>
                                                    <h6 className="card-title  px-2">Top among # 21 to watch entrepreneurs (Watch Now) The annual awards celebrates the..</h6>
                                                </a>

                                                <a target={"_blank"} href="https://www.cambridgeindependent.co.uk/business/21towatch-shortlist-of-innovative-people-companies-and-th-9238051/" className="h3 py-4 float-right ">
                                                    <span className="button-link">READ MORE</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /* ----------------------------------- 5th ----------------------------------  */}
                                    <div className="col-md-2 col-sm-6 d-flex flex-grow-1">
                                        <div className="card mt-3  align-items-center p-1">
                                            <div className="card card-h-min-about-us align-items-center p-1 justify-content-center ">
                                                <a href="https://www.npl.co.uk/news/m4r-supports-development-of-rapid-covid-test" target={"_blank"}>
                                                    <div className="d-flex align-items-center our-client-images">
                                                        <img src="/static/img/about/npl.svg" className="bg-black" alt="the European space agency" />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="card-body  p-0 ps-btn-about-bottom">
                                                <a href="https://www.npl.co.uk/news/m4r-supports-development-of-rapid-covid-test" target={"_blank"}>
                                                    <h4 className="card-title text-center pt-2 px-2">2020-2021</h4>
                                                    <h6 className="card-title  px-2">Multiple partnerships, among them, the European space agency; The University of Edin...</h6>
                                                </a>

                                                <a target={"_blank"} href="https://www.npl.co.uk/news/m4r-supports-development-of-rapid-covid-test" className="h3 py-4 float-right  ">
                                                    <span className="button-link">READ MORE</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /* ----------------------------------- 6th ----------------------------------  */}
                                    <div className="col-md-2 col-sm-6 d-flex flex-grow-1">
                                        <div className="card mt-3  align-items-center p-1">
                                            <div className="card card-h-min-about-us align-items-center p-1 justify-content-center ">
                                                <a href="https://www.cambridgeindependent.co.uk/business/21towatch-shortlist-of-innovative-people-companies-and-th-9238051/" target={"_blank"}>
                                                    <div className="d-flex align-items-center our-client-images">
                                                        <img src="/static/img/about/science-cambridge.svg" alt="Stemnovate platform commercialisation and scale up" />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="card-body  p-0 ps-btn-about-bottom">
                                                <a href="https://www.cambridgeindependent.co.uk/business/stemnovate-raises-more-than-1m-to-expand-commercialisation-9210105/" target={"_blank"}>
                                                    <h4 className="card-title text-center pt-2 px-2">2021</h4>
                                                    <h6 className="card-title  px-2">Investment above a million for Stemnovate platform commercialisation and scale up. 2021 Stemnovate recognised among # 21..</h6>
                                                </a>

                                                <a target={"_blank"} href="https://www.cambridgeindependent.co.uk/business/stemnovate-raises-more-than-1m-to-expand-commercialisation-9210105/" className="h3 py-4 float-right ">
                                                    <span className="button-link">READ MORE</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <section className="ps-section__desc my-5 text-center ">
                                <h2 className="p-2">Our Partners</h2>
                            </section>
                        </div>

                        <div className="bg-02-section">
                            <div className="container">
                                <section className="ps-section--block-grid">
                                    <div className="ps-section__thumbnail">
                                        <a className="ps-section__image" href="#">
                                            <img src="/static/img/about/babraham.jpg" alt="Babraham" />
                                        </a>
                                    </div>
                                    <div className="ps-section__content">
                                        <h2 className="">
                                            <u>
                                                <a href="https://www.babraham.ac.uk/news/2023/02/stemnovate-and-babraham-institute-collaboration" target={"_blank"} className="font-weight-bold">
                                                    Stemnovate and Babraham Institute come together to untangle the tauopathy in Alzheimer’s disease
                                                </a>
                                            </u>{" "}
                                            
                                        </h2>
                                        <div className="ps-section__desc">
                                            <p>Stemnovate Ltd. and Dr Nick Ktistakis from the Babraham Institute will support a proof-of-principle project to understand how the cellular quality control process of autophagy targets protein aggregates in the brain. Using blood or skin samples from volunteer donors, the research project will look to provide an important piece in the puzzle to determine how autophagy is important for brain health. </p>
                                            <p>Autophagy is a process of nutrient recycling and elimination of unnecessary or damaged cellular material in cells, leading to a periodic clean-up of the cell interior and recycling of nutrients during times of low resources.</p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        
                        <div className="about-section">
                            <div className="container">
                                <section className="ps-section--block-grid flex-wrap ">
                                    <div className="ps-section__thumbnail">
                                        <a className="ps-section__image" href="#">
                                            <img src="/static/img/about/European-Space-Agency--Microgravity.jpg" alt="European-Space-Agency--Microgravity" />
                                        </a>
                                    </div>
                                    <div className="ps-section__content">
                                        <h2 className="">
                                            <u>
                                                <a target={"_blank"} href="https://www.esa.int/" className="font-weight-bold">
                                                    European Space Agency
                                                </a>
                                            </u>{" "}
                                            : Microgravity Application Promotion Programme
                                        </h2>
                                        <div className="ps-section__desc ">
                                            <p>
                                                Stemnovate has partnered with multinational collaborators on a project coordinated by the MEDES Institute of space medicine and physiology.
                                                <br />
                                                The project focuses on developing technology to study the effect on astronauts' musculoskeletal systems while living in space. Despite extensive use of exercise countermeasures, the astronauts' body displays a reduction in muscle volume and strength, bone mass decrease, and microarchitectural alterations. In addition to spaceflight-related conditions, ageing and sedentariness of the population are often accompanied by sarcopenia (loss of muscle mass and strength) and osteoporosis (bone weakness), conditions without efficient treatment available. There is, therefore, an urgent need for the development of new therapeutic strategies acting on the two arms of the musculoskeletal system.
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>

                        <div className="bg-02-section">
                            <div className="container">
                                <section className="ps-section--block-grid">
                                    <div className="ps-section__thumbnail">
                                        <a className="ps-section__image" href="#">
                                            <img src="/static/img/about/Hep2.webp" alt="Hepatitis C research" />
                                        </a>
                                    </div>
                                    <div className="ps-section__content">
                                        <h2 className="">
                                            <u>
                                                <a href="https://www.tcd.ie/" target={"_blank"} className="font-weight-bold">
                                                    Trinity College, Dublin
                                                </a>
                                            </u>{" "}
                                            : Hepatitis C research
                                        </h2>
                                        <div className="ps-section__desc ">
                                            <p>
                                                Stemnovate partners Prof Cliona O’Farrelly at Trinity College, Ireland to find out why some people can block infection by hepatitis C, in a bid to improve treatment. Prof Cliona O’Farrelly has made exciting discoveries about the liver immune system, and now she is keen to know what antiviral strategies we can learn from women whose immune systems seem to block hepatitis C virus from establishing an infection. Stemnovate has expertise in reprogramming cells to multiple cell types. The adult cells, blood cells or skin cells are reprogrammed with human genes expressed in embryonic stages but without the use of any embryos. The cells acquire properties like Embryonic stem cells that can then differentiate to form neurons, heart cells and liver
                                                cells.
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>

                        {/* <div className="bg-02-section">
                            <div className="container">
                                <section className="ps-section--block-grid ">
                                    <div className="ps-section__thumbnail">
                                        <a className="ps-section__image" href="#">
                                            <img src="/static/img/about/European-Space-Agency--Microgravity.jpg" alt="European-Space-Agency--Microgravity" />
                                        </a>
                                    </div>
                                    <div className="ps-section__content">
                                        <h2 className="">
                                            <u>
                                                <a target={"_blank"} href="https://www.esa.int/" className="font-weight-bold">
                                                    European Space Agency
                                                </a>
                                            </u>{" "}
                                            : Microgravity Application Promotion Programme
                                        </h2>
                                        <div className="ps-section__desc ">
                                            <p>
                                                Stemnovate has partnered with multinational collaborators on a project coordinated by the MEDES Institute of space medicine and physiology.
                                                <br />
                                                The project focuses on developing technology to study the effect on astronauts' musculoskeletal systems while living in space. Despite extensive use of exercise countermeasures, the astronauts' body displays a reduction in muscle volume and strength, bone mass decrease, and microarchitectural alterations. In addition to spaceflight-related conditions, ageing and sedentariness of the population are often accompanied by sarcopenia (loss of muscle mass and strength) and osteoporosis (bone weakness), conditions without efficient treatment available. There is, therefore, an urgent need for the development of new therapeutic strategies acting on the two arms of the musculoskeletal system.
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>

                        <div className="about-section">
                            <div className="container">
                                <section className="ps-section--block-grid flex-wrap ">
                                    <div className="ps-section__thumbnail">
                                        <a className="ps-section__image" href="#">
                                            <img src="/static/img/about/Hep2.webp" alt="Hepatitis C research" />
                                        </a>
                                    </div>
                                    <div className="ps-section__content">
                                        <h2 className="">
                                            <u>
                                                <a href="https://www.tcd.ie/" target={"_blank"} className="font-weight-bold">
                                                    Trinity College, Dublin
                                                </a>
                                            </u>{" "}
                                            : Hepatitis C research
                                        </h2>
                                        <div className="ps-section__desc ">
                                            <p>
                                                Stemnovate partners Prof Cliona O’Farrelly at Trinity College, Ireland to find out why some people can block infection by hepatitis C, in a bid to improve treatment. Prof Cliona O’Farrelly has made exciting discoveries about the liver immune system, and now she is keen to know what antiviral strategies we can learn from women whose immune systems seem to block hepatitis C virus from establishing an infection. Stemnovate has expertise in reprogramming cells to multiple cell types. The adult cells, blood cells or skin cells are reprogrammed with human genes expressed in embryonic stages but without the use of any embryos. The cells acquire properties like Embryonic stem cells that can then differentiate to form neurons, heart cells and liver
                                                cells.
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>

                        <div className="bg-02-section">
                            <div className="container">
                                <section className="ps-section--block-grid">
                                    <div className="ps-section__thumbnail">
                                        <a className="ps-section__image" href="#">
                                            <img src="/static/img/about/The-Roslin-Institute-The-University-of.jpg" alt="The-Roslin-Institute-The-University" />
                                        </a>
                                    </div>
                                    <div className="ps-section__content">
                                        <h2 className="">
                                            <u>
                                                <a href="https://www.ed.ac.uk/roslin" target={"_blank"} className="font-weight-bold">
                                                    The Roslin Institute,
                                                </a>
                                            </u>{" "}
                                            The University of Edinburgh
                                        </h2>
                                        <div className="ps-section__desc">
                                            <p>Stemnovate is partnering up with the world renowned Roslin Institute on a project to create in vitro modelling systems for muscular studies that can help make new discoveries for better animal health and production. The project focus is on identifying genes linked with fat production and muscular development in pigs, with a view to producing leaner animals or more meat from fewer animals.</p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div> */}

                        <div className="about-section">
                            <div className="container">
                                <section className="">
                                    <div className="ps-section__content">
                                        <h2 className="p-1">
                                            <u>
                                                <a href="https://www.npl.co.uk/" target={"_blank"} className="font-weight-bold">
                                                    National Physical Laboratory
                                                </a>
                                            </u>{" "}
                                            : Rapid Detection of COVID 19
                                        </h2>
                                        <div className="ps-section__desc ">
                                            <p className="text-justify">
                                                Stemnovate has developed COVID-19 rapid testing technology that is accurate and faster than commercial alternatives. In June, the company also introduced a new more accurate method that is for testing at airports, schools and offices. The Stemnovate test kit had to run for one hour to confidently identify a positive COVID test, and since then the company had been working on reducing the detection time. Through its Measurement for Recovery (M4R) programme, NPL’s Biometrology and Electronic and Magnetic Materials groups worked together with Stemnovate to identify a solution to increase the sensitivity of the COVID detection, significantly reducing the detection time. M4R programme was launched to support companies to innovate and address the
                                                many challenges they currently face as a result of COVID-19. M4R matches businesses with world-leading metrologists, techniques and technologies only available at NPL and partner laboratories. The team at Stemnovate is now able to detect the results within 10 minutes. This rapid detection is a game-changing technology for COVID-19 testing, in particular for airport testing as it would allow passengers to be cleared as healthy before travel, potentially ending the need for quarantine rules The company is capable of establishing a quality standard, production and manufacturing to bring the test to market before Christmas. The company intends to manufacture the kits at Babraham Research Campus and is now seeking support to scale up the
                                                operation. Fernando Castro, Head of Science for Materials, NPL states: “NPL conducted a feasibility study of Stemnovate’s COVID-19 quick detection kit under the Measurement for Recovery (M4R) programme, which gives UK business access to world-leading measurement science. The work we conducted helped to increase the sensitivity of the detection method and reduced the detection time significantly. The Measurement for Recovery (M4R) programme was set up to help companies like Stemnovate and we hope that we can continue working together to further develop Stemnovate’s technology in detecting COVID-19.” Dr Ruchi, CEO, Stemnovate states: “COVID-19 is a challenge for businesses and life, and we have a solution that is accurate, fast and scalable. We
                                                worked on a scientific technology that is measurable to set measurement standards and quality assurance at a fast turnround time and designed for manufacturing at a scale and speed. NPL provides the best support for SMEs for overcoming challenges in measurement and building highest quality products. The scientific team is fantastic to work with, and we will be working together to create products that have an impact in the real world.”
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>

                        <div className="bg-02-section">
                            <div className="container">
                                <section className="ps-section--block-grid  mb-0">
                                    <div className="ps-section__thumbnail mb-0">
                                        <a className="ps-section__image" href="#">
                                            <img src="/static/img/about/Northumbria-University--Smart.jpg" alt="Smart Engineering in Microfluidic -Slippery Liquid-Infused Porous Surfaces" />
                                        </a>
                                    </div>
                                    <div className="ps-section__content mb-0">
                                        <h2 className="">
                                            <u>
                                                <a href="https://www.northumbria.ac.uk/" target={"_blank"} className="font-weight-bold">
                                                    Northumbria University
                                                </a>
                                            </u>{" "}
                                            : Smart Engineering in Microfluidic -Slippery Liquid-Infused Porous Surfaces
                                        </h2>
                                        <div className="ps-section__desc">
                                            <p>Prof Ciro Semprebon will be working in partnership with Stemnovate on the prestigious EPSRC grant project for advancing SLIPS technology. When a liquid comes into contact with a solid surface, its interface can be pinned by surface texture, giving rise to the ubiquitous phenomenon of the contact angle hysteresis. The presence of Contact Angle Hysteresis is a challenge for liquid manipulation and affects many practical applications ranging from self-cleaning coatings to microfluidics and oil recovery.</p>
                                        </div>
                                    </div>
                                </section>
                                <p> This project aims at exploring the impact of non-Newtonian liquid rheology on the Physics of SLIPS. With the aid of computational fluid dynamics simulations, this project will elucidate the dynamics of complex liquids and develop new key principles combining the geometry of solid textures and complex liquid properties in the design of new smart materials.</p>
                            </div>
                        </div>

                        <div className="about-section">
                            <div className="container">
                                <section className="ps-section--block-grid ">
                                    <div className="ps-section__thumbnail">
                                        <a className="ps-section__image" href="#">
                                            <img src="/static/img/about/Babraham-Institute-Increasing-efficiency.jpg" alt="identify epigenetic and signalling mechanisms" />
                                        </a>
                                    </div>
                                    <div className="ps-section__content">
                                        <h2 className="p-1">
                                            <u>
                                                <a href="https://www.babraham.ac.uk/" target={"_blank"} className="font-weight-bold">
                                                    Babraham Institute
                                                </a>
                                            </u>{" "}
                                            : Increasing efficiency of cellular reprogramming for cell therapy
                                        </h2>

                                        <div className="ps-section__desc ">
                                            {" "}
                                            <p>Stemnovate established a collaboration with Dr Maria Christophorou at Babraham Institute to identify epigenetic and signalling mechanisms involved in cellular reprogramming that can potentially increase efficiency and safety for cellular therapies.</p>
                                            <br />
                                            <p>The project entitled ‘Reprogramming cells from the outside in’ focuses on studying chromatin-modifying enzyme peptidyl arginine deiminase IV (PADI4)modulation as a mode of enhancing cell reprogramming The project received funding under the BBSRC Collaborative Training Partnership.</p>{" "}
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>

                        <div className="bg-02-section">
                            <div className="container">
                                <h2>Project details</h2>
                                <p className="text-justify">
                                    The discovery that somatic cells can be reprogrammed to a stem cell-like state and instructed to differentiate into various cell types has revolutionized regenerative medicine by rendering it possible to grow and repair diseased tissues. However, reprogramming is inefficient and we lack a clear mechanistic understanding of this process and rational approaches to enhance its efficiency. We discovered that the chromatin modifying enzyme peptidylarginine deiminase IV (PADI4) regulates pluripotency during early mammalian embryo development and iPS reprogramming. The role of PADI4 in stem cell biology was perhaps unexpected since, in a physiological setting, this enzyme is highly expressed predominantly in leukocytes and mediates the innate immune response to
                                    infection. PADI4 deregulation also has well-established roles in autoimmune disease, neurodegeneration and cancer. The underlying mechanisms of how it promotes the development of these pathologies are not entirely clear, however mounting evidence points to the ability of PADI4 to modify the extracellular matrix (ECM), in addition to its role as a chromatin regulator. This presents us with a fascinating scientific problem: how does a single enzyme achieve modification of proteins both inside the nucleus and outside the cell? It also offers an exciting opportunity to understand how changes in the cellular environment are communicated to the epigenome and vice versa. In collaboration with Stemnovate Ltd. we will study how PADI4-mediated changes to the ECM
                                    affect cell fate decisions and the establishment of pluripotency during human cell reprogramming. The project has following open position for PhD studentship
                                </p>
                            </div>
                        </div>

                        <Testimonials />
                        <Subscribe />
                    </div>
                </div>
            </main>
        </Container>
    );
};

export default AboutUsScreen;
