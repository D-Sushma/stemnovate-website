import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const FooterAddress = () => {
    return (
        <div className="">
            <div className="d-flex  justify-content-around flex-row">
                <div className="d-flex flex-column text-capitalize mr-1">
                    <p className=" font-weight-bold text-capitalize">
                        <FaMapMarkerAlt className="mb-1" />
                        Trading address
                    </p>
                    <p className="text-capitalize mr-1">
                        Stemnovate Limited <br />
                        IdeaSpace West <br />
                        Entrepreneurship Centre <br /> 3 Charles Babbage Road <br /> Cambridge <br />
                        CB3 OGT
                    </p>
                </div>
                <div className="d-flex flex-column   text-capitalize">
                    <p className=" font-weight-bold">
                        <FaMapMarkerAlt className="mb-1" />
                        Laboratory Address
                    </p>
                    <p className="text-capitalize">
                        Stemnovate Limited <br /> Maia Building (270) <br /> Babraham research campus <br /> Cambridge
                        <br /> CB22 3AT
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FooterAddress;
