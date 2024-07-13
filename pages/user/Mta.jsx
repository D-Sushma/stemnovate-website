import React, { useEffect } from "react"
import dynamic from "next/dynamic"
import { Checkbox } from "antd"
import { baseUrl } from "~/repositories/Repository"
import { getSession } from "next-auth/react"

const Container = dynamic(() => import("~/components/layouts/Container"), {
  loading: () => <p>Loading...</p>
})
const HubspotMtaForm = dynamic(
  () => import("~/components/shared/forms/MtaForm"),
  { loading: () => <p>Loading...</p> }
)

const MtaScreen = ({ UserData }) => {
  const [status, setStatus] = React.useState(false)
  const [matstatus, setmatStatus] = React.useState(false)

  useEffect(() => {
    onMATSet()
  }, [])

  const onMATSet = (e) => {
    if (UserData.code == 200) {
      var is_mat = UserData.result.is_mat
      setmatStatus(is_mat)
    }
  }

  const onSet = (e) => {
    console.log("e", e.target.checked)
    setStatus(e.target.checked)
  }

  return (
    <Container title="Mta Form">
      <div className="ps-page ps-page--inner">
        <div className="container">
          <div className="ps-page__content">
            <div style={{ margin: "5%", textAlign: "center" }}>
              {matstatus === 1 ? (
                <h3 style={{ color: "#0582ca" }}>
                  You Already filled the MTA (Material Transfer Agreement) Form
                </h3>
              ) : (
                <Checkbox onChange={(e) => onSet(e)}>
                    <h3 style={{ color: "#0582ca" }}>
                      Click here to fill-up the MTA (Material Transfer
                      Agreement) Form
                    </h3>
                </Checkbox>
              )}
              {/* <Checkbox onChange={(e) => onSet(e)}>
                <h3 style={{ color: "#0582ca" }}>
                  Click here to fill-up the MTA (Material Transfer Agreement)
                  Form
                </h3>
              </Checkbox> */}
            </div>
            {status ? <HubspotMtaForm /> : null}
          </div>
        </div>
      </div>
    </Container>
  )
}

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx)
  var UserData = ""
  if (session) {
    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    var raw = JSON.stringify({
      UserLoginId: session.id
    })

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    }
    const res = await fetch(`${baseUrl}/api/user/UserDetails`, requestOptions)
    UserData = await res.json()
  }

  return { props: { UserData } }
}

export default MtaScreen
