import Image from "~/components/elements/Image";
import React from "react";
import Partnership from "~/public/static/image/Partnership.jpg";
import { FaArrowRight } from "react-icons/fa";

const CaseStudy = () => {
    return (
        <section className="plus-section py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 my-auto">
                        {/* <div className="image-responsive img-con">
                            <div className="cent-img">
                                <div className="overflow-hidden"> */}
                        <Image className="rounded" src={Partnership} alt="Partnership" />
                        {/* </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="col-md-8 mt-1">
                        <h2 className="text-white ">Partnerships</h2>
                        <p className=" text-white text-justify">
                            Our global partnerships include top-tier pharmaceutical companies and world-renowned academia. As a result, we have successfully delivered projects incorporating innovation with the integration of advanced microengineering and cellular technologies.
                            <br />
                            We often partner with institutes for industrial PhD studentships, such as the National Physical Laboratory, the University of Edinburgh, the University of Northumbria, and the Babraham Institute, to name a few.
                            <br />
                            Stemnovate is certified as an ISO 9001: 2015 company. Our team comprises scientists holding PhDs and Postdocs from worldwide, and hence are well equipped to overcome challenges in research and development.
                        </p>
                        <a className=" float-right button button--yellow" href="/About-Us">
                            READ MORE <FaArrowRight />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudy;
