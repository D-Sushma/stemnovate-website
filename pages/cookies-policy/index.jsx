import React from "react"
import dynamic from "next/dynamic"
import { baseUrl } from "~/repositories/Repository"

const Container = dynamic(() => import("~/components/layouts/Container"), {
  loading: () => <p>Loading...</p>
})
const BreadCrumb = dynamic(() => import("~/components/elements/BreadCrumb"), {
  loading: () => <p>Loading...</p>
})

const breadcrumb = [
  {
    id: 1,
    text: "Home",
    url: "/"
  },

  {
    id: 2,
    text: "Cookies Policy"
  }
]

const CookiesPolicy = (policyData) => {
  return (
    <Container
      title="Cookies Policy"
      description="Stemnovate cookies information, terms of use and policies. Subject to change so keep updated by viisting our website."
    >
      <main className="ps-page ps-page--inner">
        <div className="ps-page__header  breadcrumb-h application-breadcrumb-bg">
          <div className="container ">
            <BreadCrumb breacrumb={breadcrumb} />
          </div>
          <h1 className="text-center  text-white p-2">Cookies Policy</h1>
        </div>
        <div className="container">
          <div
            className=" my-5"
            dangerouslySetInnerHTML={{
              __html: policyData?.policyData[0]?.cookies_policy
            }}
          ></div>
        </div>
      </main>
    </Container>
  )
}

export async function getServerSideProps() {
  var policyData = []
  const response = await fetch(baseUrl + "/api/policy/getCookiesPolicy")
  const policyTempData = await response.json()
  if (policyTempData?.status == 200) {
    policyData = policyTempData?.data
  } else {
    policyData = []
  }

  return { props: { policyData } }
}

export default CookiesPolicy
