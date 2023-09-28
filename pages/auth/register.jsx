import React, { useState } from "react"
import Countries from "../../public/static/data/AllCountries.json"
import { Alert } from "antd"
import { ToastContainer, toast } from "react-toastify"
import dynamic from "next/dynamic"

const Container = dynamic(() => import("~/components/layouts/Container"), {
  loading: () => <p>Loading...</p>
})

const MyAccountScreen = () => {
  const [showpass, setshowpass] = useState(false)
  const [FirstName, setFirstName] = useState("")
  const [LastName, setLastName] = useState("")
  const [Email, setEmail] = useState("")
  const [Location, setLocation] = useState("")
  const [Password, setPassword] = useState("")
  const [ConPassword, setConPassword] = useState("")
  const [TandC, setTandC] = useState("")
  const [Newsletter, setNewsletter] = useState(false)
  const [passwordwarnig, setpasswordwarnig] = useState("")
  const [message, setmessage] = useState("")
  const [isloading, setisloading] = useState(false)
  const Togglepass = () => {
    setshowpass(!showpass)
  }

  const Checkpassword = (value) => {
    setPassword(value)
    const isWhitespace = /^(?=.*\s)/
    if (isWhitespace.test(value)) {
      setpasswordwarnig("Password must not contain Whitespaces.")
      var state = 1
    }

    const isContainsUppercase = /^(?=.*[A-Z])/
    if (!isContainsUppercase.test(value)) {
      setpasswordwarnig("Password must have at least one Uppercase Character.")
      var state = 1
    }

    const isContainsLowercase = /^(?=.*[a-z])/
    if (!isContainsLowercase.test(value)) {
      setpasswordwarnig("Password must have at least one Lowercase Character.")
      var state = 1
    }

    const isContainsNumber = /^(?=.*[0-9])/
    if (!isContainsNumber.test(value)) {
      setpasswordwarnig("Password must contain at least one Digit.")
      var state = 1
    }

    const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/
    if (!isContainsSymbol.test(value)) {
      setpasswordwarnig("Password must contain at least one Special Symbol.")
      var state = 1
    }

    const isValidLength = /^.{8,16}$/
    if (!isValidLength.test(value)) {
      setpasswordwarnig("Password must be 8-16 Characters Long.")
      var state = 1
    }
    if (state !== 1) {
      setpasswordwarnig("")
    }
  }

  const onchangePassword = (value) => {
    setConPassword(value)
    if (Password !== value) {
      setpasswordwarnig("Password Not Match")
    } else {
      setpasswordwarnig("")
    }
  }

  const Submitform = async (event) => {
    event.preventDefault()
    setisloading(true)

    if (Password == ConPassword) {
      if (TandC !== "") {
        if (
          FirstName != "" &&
          Email != "" &&
          Location !== "" &&
          Password !== "" &&
          ConPassword !== ""
        ) {
          try {
            const response = await fetch("/api/auth/register-user", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                FirstName: FirstName,
                Lastname: LastName,
                Email: Email,
                Location: Location,
                Password: Password,
                TandC: TandC,
                Newsletter: Newsletter
              })
            })
            const json = await response.json()
            console.log(json)
            if (json.code == "200") {
              toast.success(json.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
              })

              console.log(json)
            } else {
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth"
              })
              setmessage(json.message)
            }
          } catch (error) {
            console.error(error)
          }
        } else {
          setpasswordwarnig("Please fill all the felids")
        }
      } else {
        setTandC(false)
        setpasswordwarnig("Please Accept Terms & Conditions of Stemnovate")
      }
    } else {
      onchangePassword(ConPassword)
    }

    setisloading(false)
  }
  return (
    <Container title="My Account">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="ps-page ps-page--inner ">
        <div className="container">
          <div className="ps-page__header"></div>
          <div className="ps-page__content ps-account">
            <div className="row">
              <div className="container" style={{ maxWidth: "960px" }}>
                <div className="m-4 col-12 col-md-12 ">
                  <h2 className="ps-form__title">
                    Personalize Your Experience
                  </h2>
                  <p className="mb-4">
                    Welcome. Creating an online profile will allow you
                    personalize your shipping and billing information and
                    provides you prices that are specific to you and the
                    organization you work in. Do you already have an account?
                    Sign In
                  </p>
                  {message != "" ? (
                    <Alert
                      message="Warning"
                      description={message}
                      type="warning"
                      showIcon
                      closable
                    />
                  ) : null}

                  <form onSubmit={Submitform} method="post">
                    <div className="ps-form--review">
                      <h2 className="ps-form__title">PERSONAL DETAILS</h2>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <div className="ps-form__group">
                            <label className="ps-form__label">First Name</label>
                            <input
                              className="form-control ps-form__input"
                              type="text"
                              onChange={(uname) => {
                                setFirstName(uname.target.value)
                              }}
                              required
                            />
                          </div>
                        </div>
                        <div className="form-group col-md-6">
                          <div className="ps-form__group">
                            <label className="ps-form__label">Last Name</label>
                            <input
                              className="form-control ps-form__input"
                              type="text"
                              onKeyUpCapture={(uname) => {
                                setLastName(uname.target.value)
                              }}
                            />
                          </div>
                        </div>
                        <div className="form-group col-md-6">
                          <div className="ps-form__group">
                            <label className="ps-form__label">Email</label>
                            <input
                              className="form-control ps-form__input"
                              type="email"
                              onChange={(uname) => {
                                setEmail(uname.target.value)
                              }}
                              required
                            />
                          </div>
                        </div>

                        <div className="form-group col-md-6">
                          <div className="ps-form__group">
                            <label className="ps-form__label">Country</label>

                            <select
                              className="form-control ps-form__input"
                              required
                              onChange={(uname) => {
                                setLocation(uname.target.value)
                              }}
                            >
                              {Countries.map((item, key) => {
                                return (
                                  <option key={key} value={item.name}>
                                    {item.name} - ({item.code})
                                  </option>
                                )
                              })}
                            </select>
                          </div>
                        </div>

                        <div className="m-3 col-md-12 col-12">
                          <h2 className="ps-form__title">CHOOSE A PASSWORD</h2>
                          <p>Password Requirements:</p>
                          <ul className="m-3">
                            <li>Must include at least 8 characters</li>
                            <li>
                              Must include 3 of the following requirements:
                              <ul>Has uppercase letter</ul>
                              <ul>Has lowercase letter</ul>
                              <ul>Has a number</ul>
                              <ul>Has a special character</ul>
                            </li>
                          </ul>
                        </div>

                        <div className="form-group col-md-6">
                          <div className="ps-form__group">
                            <label className="ps-form__label">Password</label>
                            <div className="input-group">
                              <input
                                className="form-control ps-form__input"
                                type={showpass ? "text" : "password"}
                                onChange={(uname) => {
                                  Checkpassword(uname.target.value)
                                }}
                                required
                              />
                              <div
                                className="input-group-append"
                                onClick={() => {
                                  Togglepass()
                                }}
                              >
                                <a
                                  className={
                                    showpass
                                      ? "fa fa-eye toogle-password"
                                      : "fa fa-eye-slash toogle-password"
                                  }
                                ></a>
                              </div>
                            </div>
                            {passwordwarnig != "" ? (
                              <p className="text-danger">{passwordwarnig}</p>
                            ) : null}
                          </div>
                        </div>
                        <div className="form-group col-md-6">
                          <div className="ps-form__group">
                            <label className="ps-form__label">Password</label>
                            <div className="input-group">
                              <input
                                className="form-control ps-form__input"
                                type={showpass ? "text" : "password"}
                                onKeyUpCapture={(uname) => {
                                  onchangePassword(uname.target.value)
                                }}
                                required
                              />
                              <div
                                className="input-group-append"
                                onClick={() => {
                                  Togglepass()
                                }}
                              >
                                <a
                                  className={
                                    showpass
                                      ? "fa fa-eye toogle-password"
                                      : "fa fa-eye-slash toogle-password"
                                  }
                                ></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-12">
                          <h2 className="ps-form__title">TERMS & CONDITIONS</h2>

                          <div className="form-group">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="toc"
                                value={1}
                                onClick={(uname) => {
                                  setTandC(uname.target.checked)
                                }}
                                required
                              />
                              <label
                                className={
                                  TandC
                                    ? " form-check-label "
                                    : "form-check-label  text-danger"
                                }
                                htmlFor="toc"
                              >
                                I agree to the Terms & Conditions of Stemnovate.
                              </label>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="newsletter"
                                onClick={(uname) => {
                                  setNewsletter(uname.target.checked)
                                }}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="newsletter"
                              >
                                Email me relevant offers and promotions from
                                Stemnovate.
                              </label>
                            </div>
                          </div>
                          <p>
                            This information will not be collected for
                            promotional purposes. For more, read our Privacy
                            Policy.
                          </p>
                        </div>
                        <div className="mt-5 form-group col-md-3">
                          <div className="ps-form__submit">
                            <button className="ps-btn--lg ps-btn--curve ps-btn--fullwidth ps-btn--warning">
                              Cancel
                            </button>
                          </div>
                        </div>
                        <div className="mt-5 form-group col-md-3">
                          <div className="ps-form__submit">
                            <button className="ps-btn--lg ps-btn--curve ps-btn--fullwidth ps-btn--orange ">
                              Create Profile
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default MyAccountScreen
