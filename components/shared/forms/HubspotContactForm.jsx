import React, {useEffect} from "react";
    
    const HubspotContactForm = () => {
      
        useEffect(() => {
            const script = document.createElement('script');
            script.src='https://js.hsforms.net/forms/v2.js';
            script.async = true;
            document.body.appendChild(script);
    
            script.addEventListener('load', () => {
                // @TS-ignore
                if (window.hbspt) {
                    // @TS-ignore
                    window.hbspt.forms.create({
                        region: "na1",
                        portalId: "5456750",
                        formId: "f934781a-4e7e-4792-92cc-d8753da6cef0",
                        target: '#hubspotForm'
                    })
                }
            });
        }, []);
    
        return (
            <div> 
                <div id="hubspotForm"></div>
            </div>
        );
    };
    
    export default HubspotContactForm;