import React from "react"
// import Container from "~/components/layouts/Container";
// import BreadCrumb from "~/components/elements/BreadCrumb";
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

const TermsUse = () => {
  return (
    <Container
      title="Terms Of Use"
      description="The terms are for campaign and contests, subject to change without notice. Keep up to date by regularly checking and following our website."
    >
      <main className="ps-page ps-page--inner">
        <div className="ps-page__header  breadcrumb-h application-breadcrumb-bg">
          <div className="container ">
            <BreadCrumb breacrumb={breadcrumb} />
          </div>
          <h1 className="text-center  text-white p-2">Terms Of Use</h1>
        </div>
        <div className="container my-5">
          <div className="card">
            <div className="card-bod">
              <p>
                The contest consists of creating a picture concerning cell
                culturing using Stemnovate&apos;s products. The winners will be
                featured on our social media and website and will win a small
                prize.
              </p>
              <h4 className="my-2">Candidates</h4>
              <p>
                The contest is open to all persons over the age of 18 who have
                previously purchased Stemnovate products.
              </p>
              <h4 className="my-2">
                Technical specifications for submitted photos
              </h4>
              <p>
                Photos must be submitted as high-resolution JPEGs. Neither
                references to individuals nor direct attacks on organizations
                should appear in the picture. Entries deemed offensive will be
                disqualified immediately
              </p>
              <ol>
                <li>
                  The photo must be an original creation. Copyrighted images are
                  not allowed.
                </li>
                <li>
                  The participant must certify and warrant that the submitted
                  photo(s) does not violate any third-party or copyright rights.
                  Stemnovate is not responsible for any intellectual property
                  violations caused by the submission of photos. By
                  participating in the contest, participants accept these rules
                  in their entirety. Participation in the contest for the prize
                  is automatically cancelled if they fail to comply with the
                  rules.
                </li>
                <li>
                  Judging and notification of selected pictures Qualifying
                  photos will be judged on composition, originality, and overall
                  presentation after the contest closes at 23.59 on the 25th of
                  every month (London time). The entries will be judged by a
                  jury appointed by Stemnovate.
                </li>
                <li>
                  Stemnovate will announce the selected photo on its website,
                  Facebook and Twitter pages every 30th. Winners will be
                  notified by e-mail within three days of the announcement.
                  Winners have a month to accept their prize after receiving
                </li>
              </ol>
              <h4 className="my-2">Description of the prize</h4>
              <p>
                The prize awarded consists of an Amazon voucher for 30 GBP. In
                no case can the prize be exchanged for another prize or for its
                monetary value. Prizes cannot be given away and are strictly
                personal.
              </p>
              <h4 className="my-2">Rights and Ownership</h4>
              <p>
                Stemnovate participants agree to grant Stemnovate the right to
                use their photos in any way and media, including without
                limitation, to publish, adapt, distribute, copy, display or
                translate their photos in printed or electronic media even if
                they don&apos;t win.
              </p>
              <p>
                It is Stemnovate&apos;s policy to mention the full name of the
                chosen contestant in any materials related to the &quot;Monthly
                shine through your research&quot; campaign.
              </p>
              <p>
                Participants may be asked to take part in publicity activities.
              </p>
              <h4 className="my-2">General</h4>
              <p>
                If necessary, Stmenovate may modify or cancel the contest or any
                related arrangements, schedules, plans or items, direct or
                indirect, at any time.
              </p>

              <p>
                Stemnovate will only use the personal information provided by
                the participants for the purposes of this contest. Interested
                parties can access, cancel, oppose, and rectify their personal
                data (names, addresses, etc.) by sending their request by e-mail
                to campaign@stemnovate.com.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Container>
  )
}

export default TermsUse
