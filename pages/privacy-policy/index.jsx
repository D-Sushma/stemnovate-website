import React from "react"
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
    text: "Privacy Policy"
  }
]

const TermsUse = () => {
  return (
    <Container
      title="Privacy Policy"
      description="Stemnovate privacy policy in compliance of GDPRS. See our Terms and policies on website "
    >
      <main className="ps-page ps-page--inner">
        <div className="ps-page__header  breadcrumb-h application-breadcrumb-bg">
          <div className="container ">
            <BreadCrumb breacrumb={breadcrumb} />
          </div>
          <h1 className="text-center  text-white p-2">Privacy Policy</h1>
        </div>
        <div className="container my-5">
          <h3>Date: 12-January-2021</h3>
          <h3>Introduction</h3>
          <p>
            We have updated our Privacy Notice, in line with the new general
            data protection regulation (GDPR) which comes into force across the
            EU from 25th May 2018. By ‘we’ we mean Stemnovate Limited and its
            subsidiaries, The Old Bank, 205-207 High Street Cottenham Cambridge,
            Cambridgeshire, United Kingdom, CB24 8RX.
          </p>

          <ul>
            <li>
              <p>
                Stemnovate recognises the importance of safeguarding personal
                information (‘information’) of its customers using Stemnovate
                Services. This Privacy Notice (the ‘notice’) sets out the basis
                on which any of your information will be collected, stored and
                used by us, and reflects Stemnovate’s commitment to maintain the
                confidentiality and security of your information and to provide
                its customers with the best possible service.
              </p>
            </li>
            <li>
              <p>
                This Website is provided by Stemnovate Limited and describes how
                your information is used by a member of the Stemnovate Limited
                (‘Stemnovate’, ‘we’, ‘us’, ‘our’) when:
              </p>
              <ul>
                <li>
                  you use this website (the ‘website’), any of our mobile
                  software applications (Apps) or platforms (together with the
                  ‘sites’);
                </li>
                <li>
                  you call the customer services telephone lines or when you
                  interact with us using other channels including by email, live
                  chat, SMS or social media platforms;
                </li>
                <li>
                  you purchase or use Stemnovate branded products, or products
                  we provide under the branding of our partners. These services
                  and products are collectively referred to in this Notice as{" "}
                  <b>‘Stemnovate services’</b>. Dependent on how the services
                  are provided to you, the partner’s Privacy Notice may also
                  apply.
                </li>
              </ul>
            </li>
            <li>
              Stemnovate collects, stores, processes and discloses (collectively
              ‘uses’) your information in a manner consistent with the General
              Data Protection Regulation 2016/679 (GDPR) that governs the EU, as
              well as the local laws of the countries in which it does business.
            </li>
            <li>
              If you have any requests concerning your information, please refer
              to Section 9, or if you have any queries with regard to our
              practices, please contact us using the contact details in Section
              11.
            </li>
          </ul>

          <h3 className="my-2">What information we collect</h3>
          <p>
            We collect your information when you interact with us for the
            provision of Stemnovate services or through interaction with our
            sites, apps or promotions. The information we collect is either
            information you give to us, the information we collect
            automatically, the information we receive from third-parties or
            information you provide about other people.
          </p>
          <p>We collect and process your information in the following ways:</p>
          <h3>Information you give us:</h3>
          <ul>
            <li>
              You give us information about yourself when you purchase or use
              Stemnovate Services, or communicate with us (whether in writing,
              by phone or by any other means), or enter into any of our
              competitions, promotions or surveys. Where we request information
              from you, we will collect your information in the relevant forms
              or pages we use, including when you set up an account with us. You
              can choose to provide additional information to us when you
              contact us or otherwise interact with us.
            </li>
            <li>
              If you subscribe to our newsletter, you will provide us with your
              name, email address, and information indicating how you heard
              about us. You can also provide us with information on your
              marketing preferences.
            </li>
            <li>
              The registration details that you provide when you register a
              particular product sometimes include a unique ID for that product,
              your email address and marketing preferences. If you register your
              product, you will also have a unique password which enables you to
              access your account.
            </li>
            <li>
              If you have any requests concerning your information, please refer
              to Section 9, or if you have any queries with regard to our
              practices, please contact us using the contact details in Section
              11.
            </li>
            <li>
              If you purchase any Stemnovate Services, we will collect
              information from you that will enable us to complete your
              transaction. Such information can include your name, company
              address, billing address, e-mail address, and the information
              contained within those forms of identification, mobile telephone
              number, landline telephone number, credit or debit card
              information, other payment details, such as your bank account
              information, as required by us in order to complete your
              transaction. If you do not provide the information we require to
              process an order, we may not be able to proceed with your order.
            </li>
          </ul>
          <h3>Information we collect automatically:</h3>
          <ul>
            <li>
              Stemnovate also collects certain information about you by
              automated means, such as cookies and web beacons, whenever you
              visit our Sites or when you use the Stemnovate Services and how
              you use them. More information can be found in our cookie policy.
            </li>
            <li>
              We collect details of your visits to our online services. This
              includes page interaction and online services site activity,
              including which website you came from, pages you viewed during
              your visit, and the page you viewed immediately after you left.
            </li>
            <li>
              We use the information we collect automatically:
              <ul>
                <li>
                  to administer our sites for internal operations including
                  troubleshooting purposes;
                </li>
                <li>
                  to ensure that content from our sites is presented in the most
                  effective manner for you and your devices;
                </li>
                <li>
                  as part of our effort to keep our sites safe and secure;
                </li>
                <li>
                  to measure or understand the effectiveness of advertising we
                  serve to you and others, and to deliver relevant advertising
                  to you; and
                </li>
                <li>
                  to make suggestions and recommendations to you and other users
                  of our sites about goods or services that may interest you or
                  them.
                </li>
              </ul>
            </li>
          </ul>
          <h3>Information we receive from third-parties:</h3>
          <ul>
            <li>
              We also receive information from third parties (including publicly
              available information). This information includes:
            </li>
            <li>
              Non-personal information used to supplement existing information,
              such as demographics and affluence metrics (e.g.
              social-demographic groupings through matching postcode
              information).
            </li>
          </ul>
          <h3>How we use the information we collect</h3>
          <p>
            The information we hold on you will be used in a number of ways.
            This is generally to provide you with the services you request from
            us to keep you informed and improve your customer experience and the
            quality of the Stemnovate Services. In some instances, we use this
            information to send you marketing communications we think are
            relevant to you, but we only do this where it is lawful to do so, or
            you have given your consent to receiving this information. You have
            the right to object to us, sending you such information at any time.
            We will collect, process and retain your data to provide to you
            services, but this does not affect your data protection rights.
          </p>
          <h3>We use your information for the following purposes:</h3>
          <ul>
            <li>
              To provide a requested service or carry out a contract with you;
            </li>
            <li>
              collecting payment, processing and fulfilling your order and
              otherwise providing you with the information and Stemnovate
              services you request from us;
            </li>
            <li>
              providing you with any alerts, in-app messages or other messages,
              and newsletters that you have registered to receive;
            </li>
            <li>
              when we partner with other organisations to provide a particular
              Stemnovate service (these partners will be identified to you at
              the time of the provision of the relevant Stemnovate service);
            </li>
            <li>
              providing you with service messages, including messages notifying
              you about changes to Stemnovate services or changes to our terms,
              conditions and policies;
            </li>
            <li>
              enforcing any contract entered into between you and us for the
              provision of Stemnovate services.
            </li>
          </ul>
          <h3>Where we have your consent:</h3>
          <ul>
            <li>
              contacting you (including by email, social media or SMS) with
              marketing messages according to your marketing preferences.
            </li>
            <li>
              contacting you via email with short surveys, according to your
              survey preferences;
            </li>
            <li>
              when you are using a portable device (such as mobile phone, tablet
              or wearable device), we may use your precise geo-location to
              provide you with location-based services and provide you with
              targeted advertisements. You can control your geo-location
              settings within the app settings or your mobile device settings;
            </li>
            <li>
              enabling us and third-party websites to display relevant and
              targeted advertisements, based on previous behaviour, purchases,
              or any other relevant information;
            </li>
            <li>
              where you have consented, collecting your marketing preferences
              and sharing these with a Stemnovate partner.
            </li>
          </ul>
          <h4>Where we have a legal obligation</h4>
          <ul>
            <li>
              complying with our legal and regulatory obligations (including
              fraud prevention, anti-money laundering and sanction screening).{" "}
            </li>
          </ul>
          <h3>Information we share</h3>
          <p>
            Even where shared, we ensure your information will only be used for
            the purposes outlined in this notice.
          </p>
          <p>
            In the event that a third party acquires our business or we enter
            into any kind of merger or other acquisition types, your information
            where required would be shared with the relevant party.
          </p>
          <p>
            We share your personal information with fraud prevention agencies in
            the provision of certain Stemnovate services to you. These agencies
            keep a record of our enquiries and record, use and give out the
            information we give them to make assessments and to help make
            decisions on you to prevent fraud and money laundering.
          </p>
          <ul>
            <li>
              We also disclose information about you to law enforcement
              authorities or other government officials, if we are required to
              do so by law or legal process, or when we believe disclosure is
              necessary or appropriate to prevent physical harm or financial
              loss, or in connection with an investigation of suspected or
              actual fraudulent or illegal activity such as financial crime.
            </li>
            <li>We also share your information with a third party when we:</li>
            <li>
              <ul>
                <li>have your prior consent to do so;</li>
                <li>
                  are processing your information through a trusted business
                  partner, who is acting on Stemnovate’s explicit instructions
                  and in accordance with this Notice, confidentiality and levels
                  of security;
                </li>
                <li>
                  Our business partners include:
                  <ul>
                    <li>payment gateways and payment services providers</li>
                    <li>cloud and online security services providers</li>
                    <li>
                      providers of telecommunications, webchat and networking
                      services
                    </li>
                    <li>marketing communications providers</li>
                    <li>
                      online advertisers and targeted advertising providers
                    </li>
                    <li>social media networks</li>
                  </ul>
                </li>
                <li>
                  are using a third party to send targeted advertisements on our
                  behalf, using an identifier such as an email address or site
                  cookies;
                </li>

                <li>
                  have aggregated, non-personally identifiable information,
                  which is to be used for segmentation, statistical modelling,
                  general research or trend analysis;
                </li>
                <li>
                  sell or buy any new business or assets, in which case we
                  disclose your information to the prospective seller or buyer
                  of such business assets;
                </li>
                <li>
                  are purchased by a third party, in which case information held
                  by us including your information will be transferred. We will
                  notify you of this through the most appropriate means;
                </li>
                <li>
                  need to comply with the obligations we have to our third party
                  product issuers or third parties providing products or
                  services on our behalf so that they can process your order or
                  otherwise provide the information, products or services you
                  have requested (please note that these third party product
                  issuers have their own privacy policies and accordingly we
                  cannot accept any responsibility or liability for the handling
                  of your information by such third parties in accordance with
                  such policies);
                </li>
                <li>enforce our site terms of use</li>
              </ul>
            </li>
          </ul>
          <h3>
            How to opt-in or opt-out from direct marketing, third-party
            marketing and surveys
          </h3>
          <p>
            We use the information you give us on our sites for direct marketing
            purposes to provide you with updates, newsletters, events, offers
            and promotions or other communications by email, that we think may
            interest you but, where required by law, your prior consent will be
            obtained before sending direct marketing.
          </p>
          <p>
            We may also from time to time send you surveys about or products and
            services. We will only do this where we have your consent.
          </p>
          <p>
            {" "}
            <b>
              You have the right to opt-in or opt-out of direct marketing and
              surveys from us at any time by clicking the ‘unsubscribe’ link in
              any email we have sent you, sending an email to
              unsubscribe@stemnovate.co.uk
            </b>
          </p>
          <h3>Third-party marketing cookies and social advertising</h3>
          <p>
            Stemnovate has relationships with online advertisers and social
            media networks (our marketing partners). These partners use cookies
            and similar technologies for marketing purposes and may serve you
            with targeted advertising about Stemnovate while you are on a
            third-party website, at our request and only with your consent. You
            can choose to ‘decline’ the third-party Cookies that enable this
            type of marketing at any time by visiting our cookie preference
            centre here.
          </p>
          <p>
            We encourage you to learn more about how companies use advertising
            on social media and how to adjust your marketing preferences by
            checking their privacy statement and opt-out options.
          </p>
          <h3>Retention of your information</h3>
          <p>
            We will keep your information only for as long as is for the
            purposes set out in this Privacy Notice and to fulfil our legal
            obligations. Where you are a customer, this is usually at least for
            as long as you remain a customer, to be able to meet our legal and
            contractual obligations to you, and if necessary, to resolve any
            disputes. We will not keep more information than we need.
          </p>
          <ul>
            <li>
              We only retain your information for as long as is necessary for us
              to use your information as described above or to comply with our
              legal obligations. However, please be advised that we retain some
              of your information after you cease to use Stemnovate services,
              for instance, if this is necessary to meet our legal obligations,
              such as retaining the information for tax and accounting purposes
              or for Anti Money Laundering obligations.
            </li>
            <li>
              When determining the relevant retention periods, we will take into
              account factors, including:
              <ul>
                <li>
                  our contractual obligations and rights in relation to the
                  information involved;
                </li>
                <li>
                  legal obligation(s) under applicable law to retain data for a
                  certain period of time (for example, our obligations under
                  anti-money laundering laws);
                </li>
                <li>statute of limitations under applicable law(s);</li>
                <li>(potential) disputes;</li>
                <li>
                  guidelines issued by relevant data protection authorities; and
                </li>
                <li>
                  our legitimate interests, where we need to consider retaining
                  information to meet any other obligations
                </li>
              </ul>
            </li>
          </ul>
          <p>
            Otherwise, we securely erase your information once this is no longer
            needed.
          </p>
          <h3>Security</h3>
          <p>
            The internet is a global environment, so using the internet to
            collect and process your information necessarily involves
            transmitting data internationally. Therefore, by browsing our sites
            and communicating electronically with us, you acknowledge our
            processing of your information in this way. However, we will take
            all reasonable steps to ensure that all information collected
            through our sites is treated securely and in accordance with this
            Notice and strict data protection standards.
          </p>
          <p>
            In providing our services to you, such as fulfilling orders and
            taking payments, we may transfer the data we collect from you and
            about you to destinations outside of the European Economic Area
            (‘EEA’), within the Stemnovate, with our third-party processors, or
            with our partners. This is because the information is processed in
            those other locations. Where we do so, we ensure that security
            measures and appropriate safeguards are put in place to protect your
            information and ensure that all transfers of your information comply
            with applicable data protection law. We also ensure that processing
            is only ever carried out in accordance with our instructions.
          </p>
          <p>
            In all cases where we transfer information across borders, we rely
            on acceptable and defined legal mechanisms to ensure that we protect
            data at all times. We may use Standard Contractual Clauses that have
            been provided by the EU Commission, other agreements and ‘adequacy’
            protections that have been defined and approved by the European
            Commission or the relevant supervisory authority.
          </p>
          <h3>Your rights</h3>
          <p>
            By law, you have a number of rights (subject to certain conditions)
            when it comes to your information. These include the right to ask us
            what information we hold about you and to request us to modify any
            incorrect details, add missing information, or to delete the
            information we hold. You also have the right to object to us
            processing your data or ask us to restrict processing your
            information. If you want to use the information that we hold about
            you for services with others, you can ask us to provide your data in
            a commonly used electronic format. You can exercise any of these
            rights by contacting us using the contact details and form referred
            to in Section 11.
          </p>
          <p>
            You can obtain further information about your rights, or make a
            complaint to your data protection authority with regards to how we
            use your information, and Section 11 provides contact details should
            you need them.
          </p>
          <ul>
            <li>
              <b>The right to object to processing. </b>
              <p>
                You have the right to object to certain types of processing,
                including processing for direct marketing.
              </p>
            </li>
            <li>
              <b>The right to be informed.</b>
              <p>
                {" "}
                You have the right to be provided with clear, transparent and
                easily understandable information about how we use your
                information and your rights. This is why we’re providing you
                with the information in this notice.
              </p>
            </li>
            <li>
              <b>The right of access.</b>
              <p>
                {" "}
                You have the right to obtain access to your information (if
                we’re processing it), and certain other information (similar to
                that provided in this Privacy Notice). This is, so you’re aware
                and can check that we’re using your information in accordance
                with data protection law. You can do this by writing to us using
                the contact details in Section 11.
              </p>
            </li>
            <li>
              <b>The right to rectification. </b>
              <p>
                {" "}
                You are entitled to have your information corrected if it is
                inaccurate or incomplete. You can request that we rectify any
                errors in the information that we hold by writing to us using
                the contact details in Section 11
              </p>
            </li>
            <li>
              <b>The right to erasure.</b>
              <p>
                {" "}
                This is also known as ‘the right to be forgotten’ and, in simple
                terms, enables you to request the deletion or removal of your
                information that we hold by writing to us using the contact
                details in Section 11
              </p>
            </li>
            <li>
              <b>The right to restrict processing.</b>
              <p>
                {" "}
                You have rights to ‘block’ or suppress further use of your
                information. When processing is restricted, we can still store
                your information, but will not use it further. We keep lists of
                people who have asked for further use of their information to be
                ‘blocked’ to make sure the restriction is respected in the
                future.
              </p>
            </li>
            <li>
              <b>The right to data portability.</b>
              <p>
                {" "}
                You have rights to obtain and reuse your information for your
                own purposes across different services. For example, if you
                decide to switch to a new provider, this enables you to move,
                copy or transfer your information easily between our IT systems
                and theirs safely and securely, without affecting its usability.
                This is not a general right, however, and there are exceptions.
              </p>
            </li>
            <li>
              <b>The right to lodge a complaint. </b>
              <p>
                {" "}
                You have the right to lodge a complaint about the way we handle
                or process your information with your national data protection
                regulator.
              </p>
            </li>
            <li>
              <b>The right to withdraw consent. </b>
              <p>
                {" "}
                If you have given your consent to anything we do with your
                information), you have the right to withdraw your consent at any
                time (although if you do so, it does not mean that anything we
                have done with your personal data with your consent up to that
                point is unlawful). You can withdraw your consent to the
                processing of your information at any time by contacting us
                using the contact details in Section 11.
              </p>
            </li>
          </ul>
          <h3>Changes to our notice</h3>
          <p>
            This notice was last updated on the 25 October 2019. It will be
            updated to take into account changes to the Stemnovate services or
            for example, to reflect changes to applicable regulations.
          </p>
          <p>
            Any changes we make to our notice will be posted on our website.
            Please do check our notice to take notice of any changes made. By
            providing us with your information, using the online services and/or
            any service or product offered via the online services, or by
            placing orders after we have changed the terms of our notice, you
            will be deemed to have accepted these changes. We will advise you of
            significant changes to this Notice where we have your contact
            details.
          </p>
          <h3>Contact</h3>
          <p>
            You can obtain further information about your rights, or make a
            complaint to your data protection authority with regards to how we
            use your information, and this section provides contact details
            should you need them.
          </p>
          <p>
            Questions, comments and requests regarding this notice are welcomed
            and should be addressed
          </p>
          <p>
            to <b>customerservices@stemnovate.co.uk</b> or Customer Services,
            Maia Building, 270 Babraham Research Campus, Cambridge CB22 3AT.
          </p>
          <br />
          <h4>HOW TO CONTACT YOUR LOCAL SUPERVISORY AUTHORITY</h4>
          <h3>Details of the UK supervisory authority: </h3>
          <p>
            The Information Commissioner’s Office; can be contacted in the
            following ways:
          </p>
          <br />
          <p>Phone:</p>
          <p>0303 123 1113</p>
          <br />
          <p>Email:</p>
          <p>casework@ico.org.uk</p>
          <br />
          <p>Post:</p>
          <p>Information Commissioner’s Office</p>
          <p>Wycliffe House</p>
          <p>Water Lane</p>
          <p>Wilmslow</p>
          <p>Cheshire</p>
          <p>SK9 5AF</p>
        </div>
      </main>
    </Container>
  )
}

export default TermsUse
