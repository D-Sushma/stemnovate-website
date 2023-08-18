import React, { useEffect, useState } from "react"
import Container from "~/components/layouts/Container"
import BreadCrumb from "~/components/elements/BreadCrumb"
// import Subscribe from "~/components/shared/sections/Subscribe"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "next-share"
import { useRouter } from "next/router"
import Image from "~/components/elements/Image"
import Link from "next/link"
import dynamic from 'next/dynamic'

const Subscribe = dynamic(
    () => import("~/components/shared/sections/Subscribe"),
    {loading: ()=> <p>Loading...</p>}
  )
  
const breadcrumb = [
  {
    id: 1,
    text: "Home",
    url: "/"
  },

  {
    id: 2,
    text: "Blog-News",
    url: "/blog-news"
  }
]

const Blogs = () => {
  const [url, setUrl] = useState("")
  const router = useRouter()

  useEffect(() => {
    const host = window.location.host
    const baseUrl = `https://${host}${router.pathname}`
    setUrl(baseUrl)
  }, [router.pathname])
  return (
    <Container
      title="How a CYP of Coffee understand precision medicine"
      ogimg="https://stemnovate.co.uk/static/img/Blog/4.jpg"
    >
      <main className="ps-page ps-page--inner">
        <div className="ps-page__header  breadcrumb-h application-breadcrumb-bg">
          <div className="container ">
            <BreadCrumb breacrumb={breadcrumb} />
            <h1 className="text-center  text-white p-2">Featured Blog</h1>
          </div>
        </div>
        <div className="ps-page__content">
          <div className="ps-about">
            <div className="">
              <div className="container">
                <section className="ps-section--block-grid ">
                  <div className="ps-section__thumbnail">
                    <Link href="#">
                      <div className="ps-section__image link-hover-thumb-shape">
                        <Image
                          src="/static/img/Blog/4.jpg"
                          alt="understand precision medicine"
                          width={1200}
                          height={675}
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="ps-section__content">
                    <div className="ps-section__desc">
                      <h1>
                        How a ‘CYP of Coffee’ can help us to understand
                        precision medicine.
                      </h1>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <span className="text-left">Ruchi Sharma</span>
                      </div>
                      <div className="col-md-5">
                        <FacebookShareButton
                          url={url}
                          quote={
                            "How a ‘CYP of Coffee’ can help us to understand precision medicine."
                          }
                          hashtag={"#Stemnovate"}
                        >
                          <FacebookIcon size={42} round />
                        </FacebookShareButton>
                        <TwitterShareButton
                          url={url}
                          quote={
                            "How a ‘CYP of Coffee’ can help us to understand precision medicine."
                          }
                          hashtag={"#Stemnovate"}
                        >
                          <TwitterIcon size={42} round />
                        </TwitterShareButton>
                        <LinkedinShareButton
                          url={url}
                          quote={
                            "How a ‘CYP of Coffee’ can help us to understand precision medicine."
                          }
                          hashtag={"#Stemnovate"}
                        >
                          <LinkedinIcon size={42} round />
                        </LinkedinShareButton>
                        <WhatsappShareButton
                          url={url}
                          quote={
                            "How a ‘CYP of Coffee’ can help us to understand precision medicine."
                          }
                          hashtag={"#Stemnovate"}
                        >
                          <WhatsappIcon size={42} round />
                        </WhatsappShareButton>
                      </div>
                      <div className="col-md-4">
                        <span className="text-right">Aug 24, 2019</span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="container">
                <div className="center-box">
                  <p className=" vertical-center">
                    A few days back I met a friend in Cambridge city Centre and
                    the delicious aroma of brewing coffee led us into a popular
                    local café. The place was bustling with people, sitting
                    around chatting and enjoying their coffees.
                  </p>
                  <br />
                  <p className=" vertical-center">
                    When our respective cuppas arrived, my friend announced:
                    “You should drink your coffee black!” “I would if I could,
                    but my CYPs are different to yours’’, I replied, somewhat
                    defensively. ‘“Sip slow and you’ll get used to it”, she told
                    me.
                  </p>
                  <br />
                  <p className=" vertical-center">
                    The ‘CYPs’ I’m referring to are the Cytochrome P450 enzymes
                    that metabolize the caffeine in coffee, and I must admit to
                    having something of a poor tolerance to caffeine.
                  </p>
                  <br />
                  <p className=" vertical-center">
                    Coffee is the most popular drink in the world with over 400
                    billion cups consumed every year. Caffeine
                    (1,3,7-trimethylxanthine) is a psychoactive substance that
                    is metabolized by the enzyme Cytochrome P450 type1A2
                    (CYP1A2)1. In a study involving 40,000 individuals, this
                    enzyme was found to determine caffeine intake.
                  </p>
                  <br />
                  <p className=" vertical-center">
                    Drug metabolism primarily occurs in the liver, where the
                    lipid soluble compounds are converted to water-soluble
                    compounds, facilitating detoxification and excretion.
                    Cytochrome P450 enzymes are the prime catalysts in this
                    process.
                  </p>
                  <br />

                  <p className=" vertical-center">
                    In the human species, there are more than 50 genes that
                    encode for CYP enzymes. This results in inter-individual
                    variability. There can be no doubt that Caffeine intake is
                    associated with a range of physiologic effects, offering
                    both detrimental and beneficial health outcomes. The CYPs
                    are therefore important candidates when it comes to studying
                    drug-drug interactions for use in personalized medicine.
                  </p>
                  <br />
                  <p className=" vertical-center">
                    The genetic polymorphism of cytochrome P450 enzymes can lead
                    to individuals being extensive, intermediate, or poor
                    metabolizers, which can result in variable drug responses,
                    determining whether specific treatment is a success or
                    failure.
                  </p>
                  <br />
                  <p className=" vertical-center">
                    For example, Codeine in cough medicine is metabolized to
                    morphine via CYP2D6 that has analgesic and cough suppressant
                    effect2. But, in individuals with gene duplication of
                    CYP2D6, it can lead to 50% more morphine production,
                    resulting in toxicity. The clinical significance of
                    CYP-mediated drug interactions can be more significant when
                    it comes to drugs with a narrow therapeutic window. CYP2D6
                    inhibition, for example, leads to decreased tamoxifen
                    activity in breast cancer patients.
                  </p>
                  <br />
                  <p className=" vertical-center">
                    Drug-drug interactions occur as the result of a common drug
                    metabolism pathway. The drugs can act as inhibitors,
                    inducers, or substrates for a specific CYP enzymatic
                    pathway. Drugs that inhibit an enzymatic pathway of CYP may
                    cause increased concentrations of other drugs, which are
                    metabolized by the same pathway, resulting in drug toxicity.
                    Likewise, drugs that induce an enzymatic pathway of CYP may
                    reduce concentrations of drugs that are metabolized by the
                    same pathway, leading to sub-therapeutic drug levels or
                    treatment failure.
                  </p>
                  <br />
                  <p className=" vertical-center">
                    A genome-wide association study (GWAS) on smoking behaviour
                    found a strong association with the main nicotine
                    metabolizing cytochrome P450, CYP2A6, the absence of which
                    was associated with reduced levels of smoking3.
                  </p>
                  <br />
                  <p className=" vertical-center">
                    Stemnovate is developing a platform that will allow such
                    drug interaction to be studied in the lab, allowing drugs to
                    be tailored specifically to a patient’s needs, taking into
                    account not only genomic variability but also physiological
                    and lifestyle differences. Our ‘Liver on a chip’ project is
                    being co-funded by Innovate UK. To find out more about it,
                    please contact us at info@stemnovate.co.uk and we’ll be
                    happy to talk about further…perhaps over a cup of coffee!
                  </p>
                  <br />
                  <p className=" vertical-center">
                    Amin et al. Molecular Psychiatry (2012) 17, 1116–1129
                    doi:10.1038/mp.2011.101
                  </p>
                  <p className=" vertical-center">
                    Leppert W, Pharmacology 2011;87:274–285 doi:
                    10.1159/000326085
                  </p>
                  <p className=" vertical-center">
                    Siedlinski et al. Thorax. 2011;66 (10):894-902.
                    doi:10.1136/thoraxjnl-2011-200154.
                  </p>
                  <br />
                </div>
              </div>
            </div>

            <Subscribe />
          </div>
        </div>
      </main>
    </Container>
  )
}

export default Blogs
