import React from "react"
import { baseUrl } from "~/repositories/Repository"
import PropTypes from "prop-types"
import dynamic from "next/dynamic"

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
    text: "Terms Of Use"
  }
]

const TermsAndCondition = (props) => {
  const { termsData } = props
  console.log("termsData", termsData)
  return (
    <Container title="Terms Of Use">
      <main className="ps-page ps-page--inner">
        <div className="ps-page__header  breadcrumb-h application-breadcrumb-bg">
          <div className="container ">
            <BreadCrumb breacrumb={breadcrumb} />
          </div>
          <h1 className="text-center  text-white p-2">Terms Of Use</h1>
        </div>
        <div className="container my-5">
          <p>
            This website, https://www.stemnovate.co.uk (the “Website“), is
            operated by Stemnovate Limited (“we” or “us“) on behalf of itself.
            Access is provided only in accordance with these Website Terms and
            Conditions.
          </p>
          <h4 className="my-2">1. Use of our Website</h4>
          <p>
            By using our Website, you confirm that you accept these terms of use
            and that you agree to comply with them. If you do not agree to these
            terms, you must not use our Website. We recommend that you print a
            copy of these terms for future reference.
          </p>
          <h4 className="my-2">2. Other terms that may apply to you</h4>
          <p>
            These terms of use refer to the following additional terms, which
            also apply to your use of our Website:
          </p>
          <ol>
            <li>
              Our Privacy Policy, which sets out the terms on which we process
              any personal data we collect from you, or that you provide to us.
              By using our Website, you consent to such processing and you
              warrant that all data provided by you is accurate.
            </li>
            <li>
              Our Cookie Policy, also sets out information about the cookies on
              our Website.
            </li>
          </ol>
          <h4 className="my-2">3. Copyright Notices.</h4>
          <p>
            Copyright in works contained in the Website, including but not
            limited to all software, design, text, images, sound recordings,
            animations and video sequences, are owned or licensed, except as
            otherwise expressly stated, by us. You may access the Website for
            your own use of the facilities offered. You may not otherwise copy,
            transmit, display, perform, distribute (for compensation or
            otherwise), license, alter, store or otherwise use the Website or
            any of its content. You may, however, print off copies and may
            download extracts of any page from the Website for your personal
            reference. You must not modify the paper or digital copies of any
            Website content you have printed or downloaded in any way, and you
            must not use any images, sound recordings, animations and video
            sequences separately from any accompanying text. At no point are you
            permitted to use any Website content for commercial purposes without
            our prior written consent.
          </p>
          <h4 className="my-2">4. Printing content.</h4>
          <p>
            If you print off, copy or download any part of the Website in breach
            of these Website Terms and Conditions, your right to use the Website
            will cease immediately and you must, at our option, return or
            destroy any copies of the Website you have made.
          </p>
          <h4 className="my-2">5. Linking to this Website.</h4>
          <p>
            Linking to the Website (whether to the home-page or otherwise and
            including framing) is permitted only with our prior written consent.
          </p>

          <h4 className="my-2">6. Web Content and Materials.</h4>
          <p>
            The information, materials and services contained in the Website are
            subject to change from time to time without notice. Not all products
            and services are available in all geographic areas. Your eligibility
            for particular products and services is subject to our final
            determination and acceptance. We may discontinue or make changes to
            the information, products or services described herein at any time.
            Any dated information is published as of its date only, and we do
            not undertake any obligation or responsibility to update or amend
            any such information. Furthermore, by offering information, products
            or services via the Website, we make no solicitation to any person
            to use such information, products or services in jurisdictions where
            the provision of such information, products or services is
            prohibited by law.
          </p>
          <h4 className="my-2">7. Links to Other Sites.</h4>
          <p>
            Links to third-party websites are provided solely as pointers to
            information on topics or services that may be useful to users of the
            Website, and we have no control over the content on such other
            websites. Links to other sites do not imply any responsibility for
            the opinions, ideas, products, information or services offered on
            such sites, or any representation regarding the content on such
            sites. These links are provided to you as a convenience only. You
            are responsible for complying with the terms of use of those sites.
            We make no warranties, either express or implied, concerning the
            content of such sites.
          </p>
          <h4 className="my-2">8. Termination.</h4>
          <p>
            We may terminate your access and use of any part of the Website at
            any time without notice if you are in breach of any of the terms of
            these Website Terms and Conditions or for any other reason. We
            reserve the right to cease operating the Website at any time without
            notice.
          </p>
          <h4 className="my-2">9. Third-Party Rights.</h4>
          <p>
            When you place an order on Stemnovate, we are entering a contract
            with you personally. Nothing in these terms will confer any benefit
            on any third party or any right to enforce these terms.
          </p>
          <h4 className="my-2">
            10. Which Country’s Laws apply to any disputes?
          </h4>
          <p>
            If you are a consumer, please note that these Website Terms and
            Conditions, their subject matter and their formation, are governed
            by English law. You and we both agree that the courts of England and
            Wales will have exclusive jurisdiction except that if you are a
            resident of Northern Ireland you may also bring proceedings in
            Northern Ireland, and if you are resident of Scotland, you may also
            bring proceedings in Scotland
          </p>
          <h4 className="my-2">11. Viruses</h4>
          <p>
            We do not guarantee that our Website will be secure or free from
            bugs or viruses. You are responsible for configuring your
            information technology, computer programmes and platform to access
            our Website. You should use your own virus protection software. You
            must not misuse our site by knowingly introducing viruses, trojans,
            worms, logic bombs or other material that is malicious or
            technologically harmful. You must not attempt to gain unauthorised
            access to our Website, the server on which our Website is stored or
            any server, computer or database connected to our Website. You must
            not attack our Website via a denial-of-service attack or a
            distributed denial-of-service attack. By breaching this provision,
            you would commit a criminal offence under the Computer Misuse Act
            1990. We will report any such breach to the relevant law enforcement
            authorities and we will co-operate with those authorities by
            disclosing your identity to them. In the event of such a breach,
            your right to use our Website will cease immediately.
          </p>
          <h4 className="my-2">
            12. Do not rely on the information on this site
          </h4>
          <p>
            The content on our Website is provided for general information only.
            It is not intended to amount to advice on which you should rely. You
            must obtain professional or specialist advice before taking, or
            refraining from, any action on the basis of the content on our
            Website. Although we make reasonable efforts to update the
            information on our Website, we make no representations, warranties
            or guarantees, whether express or implied, that the content on our
            Website is accurate, complete or up to date.
          </p>
          <h4 className="my-2">13. You must keep your account details safe</h4>
          <p>
            If you choose, or you are provided with, a user identification code,
            password or any other piece of information as part of our security
            procedures, you must treat such information as confidential. You
            must not disclose it to any third party. We have the right to
            disable any user identification code or password, whether chosen by
            you or allocated by us, at any time, if in our reasonable opinion
            you have failed to comply with any of the provisions of these terms
            of use.
          </p>
          <h4 className="my-2">14. We may suspend or withdraw our Website</h4>
          <p>
            Our Website is made available free of charge. We do not guarantee
            that our Website, or any content on it, will always be available or
            be uninterrupted. We may suspend or withdraw or restrict the
            availability of all or any part of our Website for business and
            operational reasons. We will try to give you reasonable notice of
            any suspension or withdrawal. You are also responsible for ensuring
            that all persons who access our Website through your internet
            connection are aware of these terms of use and other applicable
            terms and conditions and that they comply with them
          </p>
          <h4 className="my-2">15. We may make changes to these terms</h4>
          <p>
            We amend these terms from time to time. Every time you wish to use
            our Website, please check these terms to ensure you understand the
            terms that apply at that time.
          </p>
          <h4 className="my-2">16. We may make changes to our Website</h4>
          <p>
            We may update and change our Website from time to time to reflect
            changes to our products, our users’ needs and our business
            priorities.
          </p>
        </div>
      </main>
    </Container>
  )
}

export async function getServerSideProps({ query }) {
  var slug = query.slug
  var termsData = []
  if (slug != undefined) {
    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    var raw = JSON.stringify({
      slug: slug
    })

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    }

    const res = await fetch(baseUrl + "/api/terms/getAllTerms", requestOptions)
    const myTermsData = await res.json()

    if (myTermsData.status == 200) {
      termsData = myTermsData
    } else {
      termsData = []
    }
  }

  // // Pass data to the page via props
  return { props: { termsData } }
}

export default TermsAndCondition
TermsAndCondition.propTypes = {
  termsData: PropTypes.any
}
