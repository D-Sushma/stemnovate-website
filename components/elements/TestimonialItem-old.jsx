import React from "react";
import Rating from "~/components/elements/Rating";

const TestimonialItem = ({ source }) => {
    return (
        <div className="ps-review">
            <div className="ps-review__name">{source.name}</div>
            <div className="ps-review__text mt-2">
                <blockquote>
                    <i>{source.text}</i>
                </blockquote>
            </div>
            <div className="ps-review__review">
                <Rating />
            </div>
        </div>
    );
};

export default TestimonialItem;
