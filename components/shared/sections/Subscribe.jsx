import React, { useState } from "react"

const Subscribe = () => {
  const [showMessage, setShowMessage] = useState(false)
  const [email, setemail] = useState("")
  // const submitNewsletter = () => {
  //   if (email !== "") {
  //     setShowMessage(true)
  //   }
  // }

  const submitNewsletter = async () => {
    if (email !== "") {
      // var toEmail1 = "customer-support@stemnovate.co.uk";
      var toEmail = "info@stemnovate.co.uk"
      var msg = email.target.value;
      var myHeaders = new Headers()
      myHeaders.append("Content-Type", "application/json")

      var raw = JSON.stringify({
        Email: toEmail,
        message: msg,
        link: 'https://stemnovate.co.uk/'
      })

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw
      }

      await fetch(
        process.env.NEXT_BASE_URL + "/api/Email/subscribeEmail",
        requestOptions
      )
        .then((response) => response.json())
        .then(async (result) => {
          console.log("result_subscribe", result)
          setShowMessage(true)
          setemail('')
          if (result.msg == "success") {
           
          }
        })
        .catch((error) => console.log("error", error))
    }
  }

  return (
    <>
      <section className="ps-section--newsletter newsletter-section">
        <div className="d-md-flex justify-content-center">
          <div className="mb-4 text-center d-md-flex justify-content-center align-items-center">
            <div className="container-title-subscribe">
              <div className=" text-white title-subscribe-1 text-md-left">
                Join our
              </div>
              <h2 className="text-uppercase text-white title-subscribe-2">
                newsletter
              </h2>
            </div>
          </div>
          <div className="form-container-subscribe">
        
              <div className="">
                <input
                  className="form-input-subscribe mb-3"
                  type="email"
                  onChange={(val) => setemail(val)}
                  placeholder="E-mail Address"
                  required
                />
                <button onClick={submitNewsletter} className="button-subscribe text-white text-center">
                  Subscribe
                </button>
              </div>
              {showMessage && (
                <>
                  <div className="text-white text-center m-3 ">
                    Thank you for subscribing to Stemnovate newsletter!
                  </div>
                </>
              )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Subscribe
