import React from "react";
import Rating from "~/components/elements/Rating";

const InvestorsItem = ({ source }) => {
    return (
        <section className="ps-section--block-grid ">
            <div className="ps-section__thumbnail">
                <a className="ps-section__image" href="#">
                    <div className="overflow-hidden">
                        <img src={source.avatar} alt={source?.name} />
                    </div>

                    <div style={{ width: "100%", backgroundColor: "#fff" }}>
                        <h2>{source.name}</h2>
                        <h3>{source.rate}</h3>
                    </div>
                </a>
            </div>
            <div className="ps-section__content">
                <div className="ps-section__desc">
                    <div
                        className="p-2 bd-highlight text-left  text-white"
                        dangerouslySetInnerHTML={{
                            __html: source.text,
                        }}></div>
                    {/* <p className="">
                        {source.text}</p> */}
                </div>
            </div>
        </section>
    );
};

export default InvestorsItem;
