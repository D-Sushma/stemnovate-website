import React from "react";
import { FaArrowRight } from "react-icons/fa";
const AboutBanner = () => {
    return (
        <div className="about-section">
            <section className="container">
                <div className="center-box">
                    <div className="vertical-center">
                        <p className="text-center" style={{ fontSize: "1.37em" }}>
                            Our mission is to accelerate drug discovery from decades to years and from months to days.
                            <br /> Building the future, caring for both human and animal lives. We are Stemnovate<sup>TM</sup> .
                        </p>
                    </div>
                </div>
                <div className="container text-center ">
                    <a href="/About-Us" className="button button--green">
                        LEARN MORE <FaArrowRight />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default AboutBanner;
