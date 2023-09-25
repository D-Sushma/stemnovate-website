import React from "react";
import Link from 'next/link'
import dynamic from 'next/dynamic';
const ModuleFooterCopyright = dynamic(
    () => import("~/components/shared/footers/modules/ModuleFooterCopyright"),
    {loading: ()=> <p>Loading...</p>}
  )

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
                                <Link href="/terms-of-use">Terms Of Use</Link>
                            </div>
                            <div className=" d-flex  text-white">
                                <Link href="/privacy-policy"> Privacy Policy</Link>
                            </div>
                            <div className=" d-flex  text-white">
                                <Link href="/cookies-policy">Cookies Policy</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModuleFooterBottom;
