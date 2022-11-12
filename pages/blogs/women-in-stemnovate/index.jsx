import React, { useEffect, useState } from "react";
import Container from "~/components/layouts/Container";
import BreadCrumb from "~/components/elements/BreadCrumb";
import Subscribe from "~/components/shared/sections/Subscribe";
import ProductList from "~/components/productList/productList";
import { FacebookShareButton, FacebookIcon, PinterestShareButton, PinterestIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon, LinkedinShareButton, LinkedinIcon } from "next-share";
import { useRouter } from "next/router";
import Link from "next/link";

const breadcrumb = [
    {
        id: 1,
        text: "Home",
        url: "/",
    },

    {
        id: 2,
        text: "women in stemnovate",
    },
];

export default function index() {
    const [url, setUrl] = useState("");
    const router = useRouter();

    useEffect(() => {
        const host = window.location.host;
        const baseUrl = `https://${host}${router.pathname}`;
        setUrl(baseUrl);
    }, [router.pathname]);

    return (
        <Container title="women in stemnovate">
            <main className="ps-page ps-page--inner">
                <div className="ps-page__header  breadcrumb-h application-breadcrumb-bg">
                    <div className="container ">
                        <BreadCrumb breacrumb={breadcrumb} />
                        <h1 className="text-center  text-white p-2">women in stemnovate</h1>
                    </div>
                </div>
                <div className="ps-page__content">
                    <div className="ps-about">
                        {/* <div className=" about-section ">
                            <div className="container">
                                <div className="center-box">
                                    <p className=" vertical-center">
                                        It is worrying that only less than one in 10,000 potential drug compounds reach the clinic. Drug discovery remains a complicated process.
                                        <br /> We provide phenotypic screening that evaluates the effects of potential drugs in vitro on the cultured cell lines. In addition, we effciently analyze multiparametric data sets to predict drug response much earlier in the drug discovery process.
                                    </p>
                                </div>
                            </div>
                        </div> */}

                        <div className="bg-section-women">
                            <div className="container">
                                <section className="ps-section--block-grid ">
                                    <div className="ps-section__thumbnail">
                                        <a className="ps-section__image" href="#">
                                            <img src="/static/img/women-in-stem/ruchi-sharma.png" alt="RUCHI SHARMA, CEO STEMNOVATE LIMITED" />
                                        </a>
                                    </div>
                                    <div className="ps-section__content">
                                        <h3 className="text-white ">RUCHI SHARMA, CEO STEMNOVATE LIMITED</h3>
                                        <div className="ps-section__desc ">
                                            <p className="text-white">For society to grow, we must create equality and opportunity for all, and at Stemnovate, we believe that the diversity of our team helps us advance science.</p>
                                            <p className="text-white">Instead of forgetting and excusing the past, we should learn about the people who were denied opportunities but still managed to create impactful discoveries. One such person was Rosalind Franklin, who, against all adversaries, discovered one of the most significant findings of the 20th century. The discovery she made was of the double helix structure of DNA, which changed the course of science</p>
                                            <br />
                                            <p>
                                                <i className="font-weight-light">"In my view, all that is necessary for faith is the belief that by doing our best, we shall succeed in our aims: the improvement of mankind."</i>
                                            </p>
                                            <p>
                                                <b>-Rosalind Franklin.</b>
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>

                        <div className="about-section">
                            <div className="container">
                                <section className="ps-section--block-grid ">
                                    <div className="ps-section__thumbnail">
                                        <a className="ps-section__image" href="#">
                                            <img src="/static/img/women-in-stem/GIULIA.png" alt="GIULIA: SENIOR SCIENTIST" />
                                        </a>
                                    </div>
                                    <div className="ps-section__content">
                                        <h3 className="">GIULIA: SENIOR SCIENTIST, PHD NEUROSCIENCES, IMBB/FORTH (GR) AMP; AIX-MARSEILLE UNIVERSITY (FR)</h3>
                                        <div className="ps-section__desc ">
                                            <p>
                                                <i className="font-weight-light">"Above all, don't fear difficult moments. The best comes from them"</i>
                                            </p>
                                            <p>
                                                <b>- Rita Levi Montalcini</b>
                                            </p>
                                            <p className="">My career in STEM has been profoundly inspired by Rita Levi Montalcini, an Italian Nobel laureate born in my hometown. Once banned by Mussolini's laws from working in academia, Rita set up a makeshift laboratory in her bedroom where, using scalpels constructed from sewing needles, she conducted experiments with chicken embryos to understand how embryonic nerves grow into a fully developed nervous system. This knowledge underpins current investigation into how these processes go wrong in diseases like dementia and cancer.</p>
                                            <br />
                                            <p className="">As a woman and mother of a young child working in Science, Stemnovate provides an environment that respects flexibility and reasonable working hours, thereby encouraging employees to work smartly, not endlessly.</p>
                                            <br />
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>

                        <div className="bg-section-women">
                            <div className="container">
                                <section className="ps-section--block-grid ">
                                    <div className="ps-section__thumbnail">
                                        <a className="ps-section__image" href="#">
                                            <img src="/static/img/women-in-stem/ABI-PARNELL.png" alt="ABI PARNELL: HR ADMINISTRATOR" />
                                        </a>
                                    </div>
                                    <div className="ps-section__content">
                                        <h3 className="text-white ">ABI PARNELL: HR ADMINISTRATOR</h3>
                                        <div className="ps-section__desc ">
                                            <p className="text-white">A woman I am inspired by is Greta Thunberg. Young people, female and male, are often taught to be ‘seen and not heard’ and to not challenge their elders. Greta however is not afraid to stand up to world leaders and fight for our environment for us and future generations. I believe Many of us could learn from her courage and determination, myself included.</p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>

                        <div className="about-section">
                            <div className="container">
                                <div className="row py-5">
                                    <div className="col-md-12 text-center">
                                        <div>
                                            <div className="overflow-hidden">
                                                <img className="ps-banner__image" src="/static/img/women-in-stem/JACOB.jpg" alt="JACOB: RESEARCH SCIENTIST" width="500px" />
                                            </div>
                                            <h3 className="m-4">JACOB: RESEARCH SCIENTIST</h3>
                                            <p>
                                                <i className="font-weight-light">"Let us develop respect for all living things. Let us try to replace violence and intolerance with understanding and compassion. And love."</i>
                                            </p>
                                            <p>
                                                <b> - Jane Goodall.</b>
                                            </p>
                                            <p className="mx-4 text-left">For me, renowned primatologist Jane Goodall has always stood out as a revolutionary figure in science, she poured humanity into her dedication to her field, and in doing so achieved wonderful things. I think that her influence is none so important as it is now, where compassion and empathy seem set aside in the pursuit of greatness, she taught that compassion and empathy are necessary for greatness.</p>
                                            {/* </a> */}
                                            {/* <a
                                                    className=" btn btn-lg button-orange text-white m-4 m-5"
                                                    href="/Applications/Drug-Discovery-Platform">
                                                    READ MORE
                                                </a> */}
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
}
