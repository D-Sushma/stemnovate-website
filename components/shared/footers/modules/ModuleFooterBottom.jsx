import React from "react";
import ModuleFooterCopyright from "~/components/shared/footers/modules/ModuleFooterCopyright";

const ModuleFooterBottom = () => {
    return (
        <div className="ps-footer--bottom">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <ModuleFooterCopyright />
                    </div>
                    <div className="col-md-6">
                        <div className="flex-row d-flex justify-content-around">
                            <div className="d-flex text-white">
                                <a href="/terms-of-use">Terms Of Use</a>
                            </div>
                            <div className=" d-flex  text-white">
                                <a href="/privacy-policy"> Privacy Policy</a>
                            </div>
                            <div className=" d-flex  text-white">
                                <a href="/cookies-policy">Cookies Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModuleFooterBottom;
