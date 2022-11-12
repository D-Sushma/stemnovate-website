import React from "react";

// Change your description content here
const ModuleDetailDescription = ({ description }) => {
    return (
        <div className="tab-pane fade active show" id="specification-content" role="tabpanel" aria-labelledby="specification-tab">
            <div className="col-12 col-md-12">
                {description.Features && (
                    <>
                        <h2 className="ps-title mt-5">Features</h2>
                        <div
                            className="mt-5"
                            dangerouslySetInnerHTML={{
                                __html: description.Features,
                            }}
                        />
                    </>
                )}
                {description.Applications != "" && (
                    <>
                        <h2 className="ps-title mt-5">Applications</h2>
                        <div
                            className="mt-5"
                            dangerouslySetInnerHTML={{
                                __html: description.Applications,
                            }}
                        />
                    </>
                )}
                {description.Compliance != "" && (
                    <>
                        <h2 className="ps-title mt-5">Compliance</h2>
                        <div
                            className="mt-5"
                            dangerouslySetInnerHTML={{
                                __html: description.Compliance,
                            }}
                        />
                    </>
                )}
                {description.ProductTesting != "" && (
                    <>
                        <h2 className="ps-title mt-5">Disclaimer</h2>
                        <div
                            className=" mt-5"
                            dangerouslySetInnerHTML={{
                                __html: description.ProductTesting,
                            }}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default ModuleDetailDescription;
