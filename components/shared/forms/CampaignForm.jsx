import React, { useEffect } from "react"

const CareerForm = (props) => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://js.hsforms.net/forms/v2.js"
    document.body.appendChild(script)

    var portal_id = props?.portal_id?.toString();
    var form_id = props?.form_id?.toString();

    script.addEventListener("load", () => {
      // @TS-ignore
      if (window.hbspt) {
        // @TS-ignore
        window.hbspt.forms.create({
          region: "na1",
          portalId: portal_id,
          formId: form_id,
          target: "#hubspotForm"
        })
      }
    })
  }, [])

  return (
    <div>
      <div id="hubspotForm"></div>
    </div>
  )
}

export default CareerForm
