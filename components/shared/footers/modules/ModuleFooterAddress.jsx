import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const ModuleFooterAddress = () => {
    return (
        <div className="ps-footer--address">
            <div className="d-flex  justify-content-start  flex-row mb-1">
                <div className="d-flex flex-column text-capitalize " style={{ minWidth: "50%" }}>
                    <p className=" font-weight-bold">
                        <FaMapMarkerAlt className="mb-1" /> Trading address
                    </p>
                    <p>Stemnovate Limited</p>
                    <p>IdeaSpace West</p>
                    <p>Entrepreneurship Centre</p>
                    <p>3 Charles Babbage Road</p>
                    <p>Cambridge</p>
                    <p>CB3 OGT</p>
                </div>
                <div className="d-flex flex-column text-capitalize">
                    <p className=" font-weight-bold">
                        <FaMapMarkerAlt className="mb-1" /> Laboratory Address
                    </p>
                    <p>Stemnovate Limited</p>
                    <p>Maia Building (270)</p>
                    <p>Babraham research campus</p>
                    <p>Cambridge</p>
                    <p>CB22 3AT</p>
                </div>
            </div>
        </div>
    );
};

export default ModuleFooterAddress;
