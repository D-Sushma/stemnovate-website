import React from "react";
import ActiveLink from "~/components/elements/basic/ActiveLink";
import Logo from "~/components/elements/basic/Logo";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";

const ModuleFooterAddress = () => {
    return (
        <div className="ps-footer--address">
            <div className="d-flex  justify-content-start  flex-row mb-1">
                <div className="d-flex flex-column text-capitalize " style={{ minWidth: "50%" }}>
                    <p className=" font-weight-bold">
                        <FaMapMarkerAlt className="mb-1" /> Trading address
                    </p>
                    <p className="text-left">
                        Stemnovate Limited <br />
                        IdeaSpace West <br />
                        Entrepreneurship Centre <br /> 3 Charles Babbage Road <br /> Cambridge <br />
                        CB3 OGT
                    </p>
                </div>
                <div className="d-flex flex-column text-capitalize">
                    <p className=" font-weight-bold">
                        <FaMapMarkerAlt className="mb-1" /> Laboratory Address
                    </p>
                    <p className="text-left">
                        Stemnovate Limited <br /> Maia Building (270) <br /> Babraham research campus <br /> Cambridge
                        <br />
                        CB22 3AT
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ModuleFooterAddress;
