import React from "react";
import BreadCrumb from "~/components/elements/BreadCrumb";
import Container from "~/components/layouts/Container";
import { connect } from "react-redux";
import Subscribe from "~/components/shared/sections/Subscribe";
import Link from 'next/link'
import Image from '~/components/elements/Image'

const texicologyScreen = () => {
    const breadcrumb = [
        {
            id: 1,
            text: "Home",
            url: "/",
        },

        {
            id: 2,
            text: "Services",
            url: "/Services",
        },
        {
            id: 3,
            text: "Cellular Reprogramming",
        },
    ];

    return (
        <Container title="Cellular Reprogramming" description={`Stemnovate offers custom reprogramming services, saving you the time which can be better spent performing valuable research`}>
            <main className="ps-page ps-page--inner">
                <div className="ps-page__header  breadcrumb-h service-breadcrumb-bg">
                    <div className="container ">
                        <BreadCrumb breacrumb={breadcrumb} />
                        <h1>Cellular Reprogramming</h1>
                    </div>
                </div>

                <div className="ps-page__content ">
                    <div className="ps-about">
                        <div className=" about-section ">
                            <div className="container">
                                <div className="center-box">
                                    <p className=" vertical-center">We provide the best human cell models for drug discovery and disease modelling using cellular reprogramming. The ethical method uses adult skin or blood cells donated by volunteers and is core to our biobank, reflecting human diversity in age, gender, and ethnicity.</p>
                                </div>
                            </div>
                        </div>

                        <div className=" bg-02-section">
                            <div className="container">
                                <section className="ps-section--block-grid py-5">
                                    <div className="ps-section__thumbnail">
                                        <Link href="#">
                                            <div className="ps-section__image link-hover-thumb-shape">
                                            <Image 
                                            src="/static/img/services/Cell-Reprogramming.jpg" 
                                            alt="Cell Reprogramming" 
                                            width={1200}
                                            height={675}
                                            />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="ps-section__content ">
                                        <div className="ps-section__desc ">
                                            <h2 className="p-1 text-white font-weight-bold">Cell Reprogramming</h2>
                                            <p className="text-white ">
                                                Cellular reprogramming unleashes endless possibilities within drug development and research. It directs cellular identity to produce a therapeutically valuable cell type. The potential to grow and maintain any cell type of interest has excellent clinical value, creating the opportunity to develop a scalable and functional cell source for ex vivo cell therapy development, and explore novel therapeutic modalities. Unfortunately, generating induced pluripotent stem cells can often be a costly and time-consuming process.
                                                <br />
                                                Stemnovate offers custom reprogramming services, saving you the time which can be better spent performing valuable research experiments.
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>

                        <div className=" about-section ">
                            <div className="container center-box">
                                <div className="vertical-center">
                                    <h2 className="p-1 text-center font-weight-bold">More Information</h2>
                                    <p>
                                        Cellular reprogramming involves transient expression of inducible genes to generate stable lines. The stable IPSC lines are selected through stringent pluripotency characterisation and the ability of cells to differentiate into derivatives of three germ layers.
                                        <br />
                                        Cell fates during development are neither restrictive nor irreversible. Pluripotent cells can form all somatic lineages.
                                        <br />
                                        Cellular reprogramming has multiple applications: we can now convert a patient´s blood cells to study any organ´s disease process; cellular reprogramming could also be used to evaluate the efficacy and safety of newly developed drugs on human patient cells, or test drugs that might have side effects in only a small subpopulation of patients in a personalised manner before administration.
                                        <br />
                                        Stemnovate has a commercial license for IPS technology, and with that, we have molecular design and analysis capability for efficient reprogramming.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=" about-section ">
                            <div className="container ">
                                <div className="center-box">
                                    <div className="vertical-center">
                                        <div className="overflow-hidden">
                                            <div className="ps-banner__image ml-auto mr-auto" style={{ width: "100%" }}>
                                                <video src="/static/img/services/ReprogrammingDifferentiation.mp4" autoPlay loop muted playsInline width="100%" height="100%"></video>
                                            </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <Subscribe />
                    </div>
                </div>
            </main>
            </Container>
    );
};

// export default texicologyScreen;
export default connect((state) => state)(texicologyScreen);
