import React from "react"
import dynamic from "next/dynamic"

const Container = dynamic(() => import("~/components/layouts/Container"), {
  loading: () => <p>Loading...</p>
})

const HeaderDefault = dynamic(
  () => import("~/components/shared/headers/HeaderDefault"),
  { loading: () => <p>Loading...</p> }
)

export default function _error() {
  return (
    <Container 
      title="Our team is adding new features for a better user experience"
      header={<HeaderDefault classes="without-border" />}
      >
      <div>
        <div id="imgDiv">
          <div id="msgtext">
            <h1 className="text-white font-weight-bolder">
              Stemnovate is taking a<br />
              short break!
            </h1>
            <br />
            <br />
            <p className="text-white">
              Our team is adding new features for a better user experience.
            </p>
            <p className="text-white">Thanks for your patience.</p>
            <br />
            <span className="bg-white font-weight-bolder text-color">
              We will be back shortly!
            </span>
            <br />
            <br />
            <span className="text-white">Team Stemnovate</span>
            <br />
            <br />
          </div>
        </div>
      </div>
    </Container>
  )
}
