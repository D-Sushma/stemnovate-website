import React, { useEffect } from "react";

import Container from "~/components/layouts/Container";

export default function _error() {
    return (
        <Container title="Our team is adding new features for a better user experience">
            <div>
                <div id="imgDiv">
                    {/* <div class="d-flex justify-content-center"> */}
                    <div id="msgtext">
                        <h1 className="text-white font-weight-bolder">
                            Stemnovate is taking a<br />
                            short break!
                        </h1>
                        <br />
                        <br />
                        <p className="text-white">Our team is adding new features for a better user experience.</p>
                        <p className="text-white">Thanks for your patience.</p>
                        <br />
                        <span className="bg-white font-weight-bolder text-color">We will be back shortly!</span>
                        <br />
                        <br />
                        <span className="text-white">Team Stemnovate</span>
                        <br />
                        <br />
                        {/* <span class="bg-orange"><a href="" class="text-white">Go to Home page</a></span> */}
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </Container>
    );
}
