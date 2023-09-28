import React from "react";
import Link from "next/link";
const AboutTop = () => {
    return (
        <section className="ps-about__project">
            <div className="container">
                <section className="ps-section--block-grid row-reverse">
                    <div className="ps-section__thumbnail">
                        <a className="ps-section__image" href="#" style={{ border: "8px solid #076c88e8" }}>
                            <img src="/static/img/about/Ruchi.webp" alt="Ruchi Sharma" />
                        </a>
                    </div>
                    <div className="ps-section__content">
                        <h2
                            style={{
                                width: "fit-content",
                            }}
                            className="p-1">
                            About Us
                        </h2>

                        <div className="ps-section__desc my-5 ">
                            Our Founder and CEO, Dr Ruchi Sharma, is driven by her passion for taking the benefits of research and applying them to products and technology to make a significant and positive difference in the real world. She is the ‘# 2 to watch’ entrepreneur of 2020 in the UK and is leading prestigious grants and international industrial partnerships. Dr Sharma obtained a PhD from the world-renowned Roslin Institute at the University of Edinburgh, followed by a post-doctorate in the exciting field of cellular reprogramming at the University of Cambridge. She is also a veterinarian and supports inventions for better animal health while reducing animal testing. With a firm focus on partnerships and collaboration, Dr Sharma believes that we can create a better world through
                            innovation
                        </div>
                    </div>
                </section>
                <section className="ps-section__desc my-5 ">
                    <h2
                        style={{
                            width: "fit-content",
                            borderRadius: "5px",
                        }}
                        className="p-2">
                        2017
                    </h2>
                    <div className="ps-section__desc my-5 ">Recognised among the top 14 innovative women in Cambridge, leading healthcare.</div>
                </section>

                <section className="ps-section__desc my-5 ">
                    <h2
                        style={{
                            width: "fit-content",
                            borderRadius: "5px",
                        }}
                        className="p-2">
                        2017-2019
                    </h2>
                    <div className="ps-section__desc my-5 ">Commercialised Stemnovate drug discovery platform followed by successful completion of a million-pound project co-funded by Innovate UK for developing a liver on-chip platform to address the problem of liver toxicity in drug discovery.</div>
                </section>
                <section className="ps-section__desc my-5 ">
                    <h2
                        style={{
                            width: "fit-content",
                            borderRadius: "5px",
                        }}
                        className="p-2">
                        2019
                    </h2>
                    <div className="ps-section__desc my-5 ">NC3Rs grant for innovating liver model for replacing primate models during vaccination development..</div>
                </section>
                <section className="ps-section__desc my-5 ">
                    <h2
                        style={{
                            width: "fit-content",
                            borderRadius: "5px",
                        }}
                        className="p-2">
                        2020
                    </h2>
                    <div className="ps-section__desc my-5 ">Top among # 21 to watch entrepreneurs (Watch Now) The annual awards celebrates the outstanding talent in disruptive science and tech industries in Cambridge and East of England.</div>
                </section>
                <section className="ps-section__desc my-5 ">
                    <h2
                        style={{
                            width: "fit-content",
                            borderRadius: "5px",
                        }}
                        className="p-2">
                        2020-2021
                    </h2>
                    <div className="ps-section__desc my-5 ">Multiple partnerships, among them, the European space agency; The University of Edinburgh; The University of Cambridge. Trinity College, Ireland; National Physical laboratory.</div>
                </section>

                <section className="ps-section__desc my-5 ">
                    <h2
                        style={{
                            width: "fit-content",
                            borderRadius: "5px",
                        }}
                        className="p-2">
                        2019
                    </h2>
                    <ul className="ps-section__list">
                        <li>Investment above a million for Stemnovate platform commercialisation and scale up.</li>
                        <li>2021 Stemnovate recognised among # 21 to watch companies setting the standards in innovation and entrepreneurship in Cambridge and East of England.</li>
                    </ul>{" "}
                </section>

                <section className="ps-section__desc my-5 text-center ">
                    <h2 className="p-2">Our Partners</h2>
                </section>

                <section className="ps-section--block-grid row-reverse">
                    <div className="ps-section__thumbnail">
                        <a className="ps-section__image" href="#" style={{ border: "8px solid #076c88e8" }}>
                            <img src="/static/img/about/ESA-Space-gravity-partnership.jpg" alt="ESA-Space-gravity-partnership" />
                        </a>
                    </div>
                    <div className="ps-section__content">
                        <h2 className="p-1">
                            <Link href="#">
                                <a>European Space Agency</a>
                            </Link>{" "}
                            : Microgravity Application Promotion Programme
                        </h2>
                        <div className="ps-section__desc my-5 ">
                            Stemnovate has partnered with multinational collaborators on a project coordinated by MEDES Institute of space medicine and physiology. The project focus is on developing technology to study the effect on astronaut’s musculoskeletal system while living in space. The astronaut body displays reduction of muscle volume and strength, bone mass decrease and microarchitectural alterations, despite extensive use of exercise countermeasures. In addition to spaceflight-related conditions, aging and sedentariness of the population are often accompanied by sarcopenia (loss of muscle mass and strength) and osteoporosis (bone weakness), condition without efficient treatment available. There is therefore an urgent need for the development of new therapeutic strategies acting
                            on the two arms of the musculoskeletal system.
                        </div>
                    </div>
                </section>

                <div>
                    <section className="ps-section--block-grid flex-wrap ">
                        <div className="ps-section__thumbnail">
                            <a className="ps-section__image" href="#" style={{ border: "8px solid #076c88e8" }}>
                                <img src="/static/img/about/Hep2.webp" alt="Hep2" />
                            </a>
                        </div>
                        <div className="ps-section__content">
                            <h2 className="p-1">
                                <Link href="#">
                                    <a>Trinity College, Dublin</a>
                                </Link>
                                :Hepatitis C research
                            </h2>
                            <div className="ps-section__desc my-5 ">
                                Stemnovate partners Prof Cliona O’Farrelly at Trinity College, Ireland to find out why some people can block infection by hepatitis C, in a bid to improve treatment. Prof Cliona O’Farrelly has made exciting discoveries about the liver immune system, and now she is keen to know what antiviral strategies we can learn from women whose immune systems seem to block hepatitis C virus from establishing an infection. Stemnovate has expertise in reprogramming cells to multiple cell types. The adult cells, blood cells or skin cells are reprogrammed with human genes expressed in embryonic stages but without the use of any embryos. The cells acquire properties like Embryonic stem cells that can then differentiate to form neurons, heart cells and liver cells.
                            </div>
                        </div>
                    </section>
                </div>

                <div>
                    <section className="ps-section--block-grid row-reverse">
                        <div className="ps-section__thumbnail">
                            <a className="ps-section__image" href="#" style={{ border: "8px solid #076c88e8" }}>
                                <img src="/static/img/about/pigs4_2.webp" alt="fat production and muscular development" />
                            </a>
                        </div>
                        <div className="ps-section__content">
                            <h2 className="p-1">
                                <Link href="#">
                                    <a>The Roslin Institute,</a>
                                </Link>{" "}
                                The University of Edinburgh
                            </h2>
                            <div className="ps-section__desc my-5 ">Stemnovate is partnering up with the world renowned Roslin Institute on a project to create in vitro modelling systems for muscular studies that can help make new discoveries for better animal health and production. The project focus is on identifying genes linked with fat production and muscular development in pigs, with a view to producing leaner animals or more meat from fewer animals.</div>
                        </div>
                    </section>
                </div>

                <div>
                    <section className="">
                        <div className="ps-section__content">
                            <h2 className="p-1">
                                <Link href="#">
                                    <a>National Physical Laboratory</a>
                                </Link>
                                : Rapid Detection of COVID 19
                            </h2>
                            <div className="ps-section__desc my-5 ">
                                Stemnovate has developed COVID-19 rapid testing technology that is accurate and faster than commercial alternatives. In June, the company also introduced a new more accurate method that is for testing at airports, schools and offices. The Stemnovate test kit had to run for one hour to confidently identify a positive COVID test, and since then the company had been working on reducing the detection time. Through its Measurement for Recovery (M4R) programme, NPL’s Biometrology and Electronic and Magnetic Materials groups worked together with Stemnovate to identify a solution to increase the sensitivity of the COVID detection, significantly reducing the detection time. M4R programme was launched to support companies to innovate and address the many challenges
                                they currently face as a result of COVID-19. M4R matches businesses with world-leading metrologists, techniques and technologies only available at NPL and partner laboratories. The team at Stemnovate is now able to detect the results within 10 minutes. This rapid detection is a game-changing technology for COVID-19 testing, in particular for airport testing as it would allow passengers to be cleared as healthy before travel, potentially ending the need for quarantine rules The company is capable of establishing a quality standard, production and manufacturing to bring the test to market before Christmas. The company intends to manufacture the kits at Babraham Research Campus and is now seeking support to scale up the operation. Fernando Castro, Head of
                                Science for Materials, NPL states: “NPL conducted a feasibility study of Stemnovate’s COVID-19 quick detection kit under the Measurement for Recovery (M4R) programme, which gives UK business access to world-leading measurement science. The work we conducted helped to increase the sensitivity of the detection method and reduced the detection time significantly. The Measurement for Recovery (M4R) programme was set up to help companies like Stemnovate and we hope that we can continue working together to further develop Stemnovate’s technology in detecting COVID-19.” Dr Ruchi, CEO, Stemnovate states: “COVID-19 is a challenge for businesses and life, and we have a solution that is accurate, fast and scalable. We worked on a scientific technology that is
                                measurable to set measurement standards and quality assurance at a fast turnround time and designed for manufacturing at a scale and speed. NPL provides the best support for SMEs for overcoming challenges in measurement and building highest quality products. The scientific team is fantastic to work with, and we will be working together to create products that have an impact in the real world.”
                            </div>
                        </div>
                    </section>
                </div>

                <div>
                    <section className="ps-section--block-grid  mb-0">
                        <div className="ps-section__thumbnail mb-0">
                            <a className="ps-section__image" href="#" style={{ border: "8px solid #076c88e8" }}>
                                <img src="/static/img/about/SLIPS-updated-pic_.webp" alt="Slippery Liquid-Infused Porous Surfaces" />
                            </a>
                        </div>
                        <div className="ps-section__content mb-0">
                            <h2 className="p-1">
                                <Link href="#">
                                    <a>Northumbria University </a>
                                </Link>{" "}
                                : Smart Engineering in Microfluidic -Slippery Liquid-Infused Porous Surfaces
                            </h2>
                            <div className="ps-section__desc my-5 ">Prof Ciro Semprebon will be working in partnership with Stemnovate on the prestigious EPSRC grant project for advancing SLIPS technology. When a liquid comes into contact with a solid surface, its interface can be pinned by surface texture, giving rise to the ubiquitous phenomenon of the contact angle hysteresis. The presence of Contact Angle Hysteresis is a challenge for liquid manipulation and affects many practical applications ranging from self-cleaning coatings to microfluidics and oil recovery.</div>
                        </div>
                    </section>
                    <div className="mb-5">This project aims at exploring the impact of non-Newtonian liquid rheology on the Physics of SLIPS. With the aid of computational fluid dynamics simulations, this project will elucidate the dynamics of complex liquids and develop new key principles combining the geometry of solid textures and complex liquid properties in the design of new smart materials.</div>
                </div>
                <div>
                    <section className="ps-section--block-grid row-reverse">
                        <div className="ps-section__thumbnail">
                            <a className="ps-section__image" href="#" style={{ border: "8px solid #076c88e8" }}>
                                <img src="/static/img/about/ruchi_and_maria.webp" alt="cellular reprogramming for cell therapy" />
                            </a>
                        </div>
                        <div className="ps-section__content">
                            <h2 className="p-1">
                                <Link href="#">
                                    <a>Babraham Institute</a>
                                </Link>
                                : Increasing efficiency of cellular reprogramming for cell therapy
                            </h2>
                            <p className="ps-about__subtitle">Stemnovate established a collaboration with Dr Maria Christophorou at Babraham Institute to identify epigenetic and signalling mechanisms involved in cellular reprogramming that can potentially increase efficiency and safety for cellular therapies.</p>
                            <div className="ps-section__desc my-5 ">The project entitled ‘Reprogramming cells from the outside in’ focuses on studying chromatin-modifying enzyme peptidyl arginine deiminase IV (PADI4)modulation as a mode of enhancing cell reprogramming The project received funding under the BBSRC Collaborative Training Partnership.</div>
                        </div>
                    </section>
                    <div className="mb-5">
                        <h3>Project details</h3>
                        The discovery that somatic cells can be reprogrammed to a stem cell-like state and instructed to differentiate into various cell types has revolutionized regenerative medicine by rendering it possible to grow and repair diseased tissues. However, reprogramming is inefficient and we lack a clear mechanistic understanding of this process and rational approaches to enhance its efficiency. We discovered that the chromatin modifying enzyme peptidylarginine deiminase IV (PADI4) regulates pluripotency during early mammalian embryo development and iPS reprogramming. The role of PADI4 in stem cell biology was perhaps unexpected since, in a physiological setting, this enzyme is highly expressed predominantly in leukocytes and mediates the innate immune response to infection.
                        PADI4 deregulation also has well-established roles in autoimmune disease, neurodegeneration and cancer. The underlying mechanisms of how it promotes the development of these pathologies are not entirely clear, however mounting evidence points to the ability of PADI4 to modify the extracellular matrix (ECM), in addition to its role as a chromatin regulator. This presents us with a fascinating scientific problem: how does a single enzyme achieve modification of proteins both inside the nucleus and outside the cell? It also offers an exciting opportunity to understand how changes in the cellular environment are communicated to the epigenome and vice versa. In collaboration with Stemnovate Ltd. we will study how PADI4-mediated changes to the ECM affect cell fate
                        decisions and the establishment of pluripotency during human cell reprogramming. The project has following open position for PhD studentship{" "}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutTop;
