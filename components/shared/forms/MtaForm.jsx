import React, {useEffect} from "react";
    
    const HubspotMtaForm = () => {

        useEffect(() => {
            const script = document.createElement('script');
            script.src='https://js.hsforms.net/forms/embed/v2.js';
            script.defer = true;
            document.body.appendChild(script);
    
            script.addEventListener('load', () => {
                // @TS-ignore
                if (window.hbspt) {
                    // @TS-ignore
                    window.hbspt.forms.create({
                        region: "na1",
                        portalId: "5456750",
                        formId: "77f841cb-aa86-448b-95fe-18dc77b492ff",
                        target: '#hubspotMtaForm'
                    })
                }
            });
        }, []);
    
        return (
            <div> 
                <div id="hubspotMtaForm"></div>
            </div>
        );
    };
    
    export default HubspotMtaForm;