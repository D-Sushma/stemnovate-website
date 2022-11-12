import React, { useEffect } from "react"

const CareerForm = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://js.hsforms.net/forms/v2.js"
    document.body.appendChild(script)

    script.addEventListener("load", () => {
      // @TS-ignore
      if (window.hbspt) {
        // @TS-ignore
        window.hbspt.forms.create({
          region: "na1",
          portalId: "5456750",
          formId: "d056eb88-4e62-40b9-a908-a88bfbfaa87f",
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
