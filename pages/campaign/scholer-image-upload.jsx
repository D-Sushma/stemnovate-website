import React, { useEffect, useState } from "react";
import Container from "~/components/layouts/Container";
import BreadCrumb from "~/components/elements/BreadCrumb";
import Subscribe from "~/components/shared/sections/Subscribe";
import ProductList from "~/components/productList/productList";
import { FacebookShareButton, FacebookIcon, PinterestShareButton, PinterestIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon, LinkedinShareButton, LinkedinIcon } from "next-share";
import { useRouter } from "next/router";
import { baseUrl } from "~/repositories/Repository";

const breadcrumb = [
    {
        id: 1,
        text: "Home",
        url: "/",
    },

    {
        id: 2,
        text: "Campaign",
        // url: "/blog-news",
    },
];

export default function scholerImageUpload() {
    const [url, setUrl] = useState("");
    const router = useRouter();

    useEffect(() => {
        const host = window.location.host;
        const baseUrl = `https://${host}${router.pathname}`;
        setUrl(baseUrl);
    }, [router.pathname]);
    return (
        <Container title="Enhanced microfluidic devices for biomedical applications" ogimg="https://stemnovate.co.uk/static/img/Blog/1.jpg">
            <main className="ps-page ps-page--inner">
                <div className="ps-page__header  breadcrumb-h application-breadcrumb-bg">
                    <div className="container ">
                        <BreadCrumb breacrumb={breadcrumb} />
                        <h1 className="text-center  text-white p-2">Featured Blog</h1>
                    </div>
                </div>
                <div className="ps-page__content">
                    <div className="ps-about">
                        {/* <div className="about-section">
                            <div className="container">
                                <h2 className="text-center">HOW STEMNOVATE WILL CHANGE DRUG DEVELOPMENT WITH ITS LIVER-ON-A-CHIP TECHNOLOGY</h2>
                            </div>
                        </div> */}

                        <div className="">
                            <div className="container">
                                <section className="ps-section--block-grid ">
                                    <div className="ps-section__thumbnail">
                                        <a className="ps-section__image" href="#">
                                            <img src="/static/img/Blog/1.jpg" alt="Enhanced microfluidic devices for biomedical applications" />
                                        </a>
                                    </div>
                                    <div className="ps-section__content">
                                        <div className="ps-section__desc">
                                            <h1>Enhanced microfluidic devices for biomedical applications: from imulations to the laboratory.</h1>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <span className="text-left">Ruchi Sharma</span>
                                            </div>
                                            <div className="col-md-5">
                                                <FacebookShareButton url={url} quote={"Enhanced microfluidic devices for biomedical applications: from imulations to the laboratory."} hashtag={"#Stemnovate"}>
                                                    <FacebookIcon size={42} round />
                                                </FacebookShareButton>
                                                <TwitterShareButton url={url} quote={"Enhanced microfluidic devices for biomedical applications: from imulations to the laboratory."} hashtag={"#Stemnovate"}>
                                                    <TwitterIcon size={42} round />
                                                </TwitterShareButton>
                                                <LinkedinShareButton url={url} quote={"Enhanced microfluidic devices for biomedical applications: from imulations to the laboratory."} hashtag={"#Stemnovate"}>
                                                    <LinkedinIcon size={42} round />
                                                </LinkedinShareButton>
                                                <WhatsappShareButton url={url} quote={"Enhanced microfluidic devices for biomedical applications: from imulations to the laboratory."} hashtag={"#Stemnovate"}>
                                                    <WhatsappIcon size={42} round />
                                                </WhatsappShareButton>
                                            </div>
                                            <div className="col-md-4">
                                                <span className="text-right">Sep 18, 2019</span>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="container">
                                <div className="center-box">
                                    <p className=" vertical-center">Advances in microfluidics technology are reforming molecular biology procedures. Microfluidic channels enable new methods to analyse the biological, physical and chemical properties of DNA, proteins, suspensions of cells and bio particles. Although the analyses using these miniaturising assays are typically performed in the liquid state, most of the biological suspensions show a complex non-Newtonian behaviour, and this property must be accounted in the design of tailored devices.</p>
                                    <br />
                                    <p className=" vertical-center">Non-Newtonian fluids are characterised by non-trivial response under shear: they can exhibit yield stress, or a shear-dependent viscosity, or also a more complex viscoelastic response. For example, common fluids showing non-Newtonian properties like ketchup and mayonnaise appear very thick and viscous in the quiet state but can flow more easily when sheared. The same occurs for biological fluids, which are made of plasma, cells, proteins, and other constituents.</p>
                                    <br />
                                    <p className=" vertical-center">
                                        Surface coatings in microfluidics have been revolutionised by the introduction of SLIPS (Slippery Liquid-Infused Porous Surfaces). Inspired by the slippery pitcher plant, SLIPS consist of a nano/microstructured porous material infused with a lubricant fluid. SLIPS prevent most of the contact of liquids with the underlying solid, thus virtually suppressing the friction forces arising from contact line pinning. Consequently, by hindering the material defects and imperfections, SLIPS provide a unique approach to coating medical surfaces for more precise tuning of the fluid properties, with the advantage of reducing sample contamination by repelling almost any fouling challenge a surface may face, for example from bacteria.
                                    </p>
                                    <br />
                                    <p className=" vertical-center">
                                        However, while static and equilibrium properties of fluids sitting on SLIPS are now well known, their dynamic properties on these coatings are yet to be explored in detail. Additionally, their flow can be deeply affected by the complex rheology of biological fluids interacting with lubricants and intricated micro/nano structures. Considering that the lubricant itself can be complex, the combination of these fluids creates a broad spectrum of possibilities that demands to be explored.The main aim of this project is to elucidate this interplay of fluid and surface properties with the aid of numerical modelling, by investigating the properties of model systems. We work on a lattice Boltzmann algorithm based on a ternary model recently developed in our
                                        group, implementing non-Newtonian rheology and investigating the motion of non-Newtonian liquids on both simple and complex lubricants. Our goal is to gain insight into this system at a fundamental level, to inform the design of experiments by industrial partners.
                                    </p>
                                    <br />
                                    <p className=" vertical-center">By S. Orozco-Fuentes and C. Semprebon</p>
                                    <p className=" vertical-center">The PhD project is funded by EPSRC</p>
                                    <br />
                                </div>
                            </div>
                        </div>

                        <Subscribe />
                    </div>
                </div>
            </main>
        </Container>
    );
}
