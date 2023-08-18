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
      title="Stemnovate in Anglia Ruskin University"
      ogimg="https://stemnovate.co.uk/static/img/Blog/5.jpg"
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
                          src="/static/img/Blog/blog5.jpg"
                          alt="Stemnovate - support young scientists"
                          width={1200}
                          height={675}
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="ps-section__content">
                    <div className="ps-section__desc">
                      <h1>
                        Stemnovate´s visit to Anglia Ruskin University to
                        support young scientists.
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
                            "Stemnovate´s visit to Anglia Ruskin University to support young scientists."
                          }
                          hashtag={"#Stemnovate"}
                        >
                          <FacebookIcon size={42} round />
                        </FacebookShareButton>
                        <TwitterShareButton
                          url={url}
                          quote={
                            "Stemnovate´s visit to Anglia Ruskin University to support young scientists."
                          }
                          hashtag={"#Stemnovate"}
                        >
                          <TwitterIcon size={42} round />
                        </TwitterShareButton>
                        <LinkedinShareButton
                          url={url}
                          quote={
                            "Stemnovate´s visit to Anglia Ruskin University to support young scientists."
                          }
                          hashtag={"#Stemnovate"}
                        >
                          <LinkedinIcon size={42} round />
                        </LinkedinShareButton>
                        <WhatsappShareButton
                          url={url}
                          quote={
                            "Stemnovate´s visit to Anglia Ruskin University to support young scientists."
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
                    Stemnovate ́s core value is to promote STEM education and
                    professional development for the younger generations, with
                    this in mind we partnered with @AngliRuskinuniversity for
                    two live briefs which consisted of assigning students a real
                    word task and for them to create solutions and ideas that
                    benefit the society. The undergraduate student in
                    microbiology created content and educational resources for
                    Covid 19 assays and disease, this aimed to overcome the
                    problem of misinformation around the disease andcreating new
                    assays that are more accurate for rapid molecular
                    diagnostics. (tag Ben, director, media team).
                  </p>
                  <br />
                  <p className=" vertical-center">
                    We are glad we had the opportunity to collaborate with
                    @AngliaRuskin to disseminate knowledge to young students,
                    give them an overview of how the industry works, and
                    communicate knowledge efficiently to the rest of the world.
                  </p>
                  <br />
                  <p className=" vertical-center">
                    Stemnovate has worked closely for over two years with Anglia
                    Ruskin building bridges between young scientists and
                    scientific industries, helping them to develop transferable
                    skills and scientific knowledge that would benefit them in
                    future employment, and to gain experience in the industry
                    working along with experts, PhDs and MDs. We will also give
                    them experience in marketing, selling strategy and an
                    overview of the real-life application of molecular
                    diagnostics techniques.
                  </p>
                  <br />
                  <p className=" vertical-center">
                    We appreciate the students that created educational
                    resources with information about Covid 19. We would like to
                    congratulate you on your hard work. Your ideas were very
                    much appreciated. Knowledge about Covid 19 is vital for
                    adopting protective behaviours and measures against Covid 19
                    that help fight the spread and save lives.
                  </p>
                  <br />
                  <p className=" vertical-center">
                    We are sharing some of the great work produced by the
                    students and we look forward to continuing working on future
                    projects with @ARU.
                  </p>
                  <br />
                  {/*                                     
                                    <p className=" vertical-center">In the human species, there are more than 50 genes that encode for CYP enzymes. This results in inter-individual variability. There can be no doubt that Caffeine intake is associated with a range of physiologic effects, offering both detrimental and beneficial health outcomes. The CYPs are therefore important candidates when it comes to studying drug-drug interactions for use in personalized medicine.</p>
                                    <br />
                                    <p className=" vertical-center">The genetic polymorphism of cytochrome P450 enzymes can lead to individuals being extensive, intermediate, or poor metabolizers, which can result in variable drug responses, determining whether specific treatment is a success or failure.</p>
                                    <br />
                                    <p className=" vertical-center">For example, Codeine in cough medicine is metabolized to morphine via CYP2D6 that has analgesic and cough suppressant effect2. But, in individuals with gene duplication of CYP2D6, it can lead to 50% more morphine production, resulting in toxicity. The clinical significance of CYP-mediated drug interactions can be more significant when it comes to drugs with a narrow therapeutic window. CYP2D6 inhibition, for example, leads to decreased tamoxifen activity in breast cancer patients.</p>
                                    <br />
                                    <p className=" vertical-center">Drug-drug interactions occur as the result of a common drug metabolism pathway. The drugs can act as inhibitors, inducers, or substrates for a specific CYP enzymatic pathway. Drugs that inhibit an enzymatic pathway of CYP may cause increased concentrations of other drugs, which are metabolized by the same pathway, resulting in drug toxicity. Likewise, drugs that induce an enzymatic pathway of CYP may reduce concentrations of drugs that are metabolized by the same pathway, leading to sub-therapeutic drug levels or treatment failure.</p>
                                    <br />
                                    <p className=" vertical-center">A genome-wide association study (GWAS) on smoking behaviour found a strong association with the main nicotine metabolizing cytochrome P450, CYP2A6, the absence of which was associated with reduced levels of smoking3.</p>
                                    <br />
                                    <p className=" vertical-center">Stemnovate is developing a platform that will allow such drug interaction to be studied in the lab, allowing drugs to be tailored specifically to a patient’s needs, taking into account not only genomic variability but also physiological and lifestyle differences. Our ‘Liver on a chip’ project is being co-funded by Innovate UK. To find out more about it, please contact us at info@stemnovate.co.uk and we’ll be happy to talk about further…perhaps over a cup of coffee!</p>
                                    <br />
                                    <p className=" vertical-center">Amin et al. Molecular Psychiatry (2012) 17, 1116–1129 doi:10.1038/mp.2011.101</p>
                                    <p className=" vertical-center">Leppert W, Pharmacology 2011;87:274–285 doi: 10.1159/000326085</p>
                                    <p className=" vertical-center">Siedlinski et al. Thorax. 2011;66 (10):894-902. doi:10.1136/thoraxjnl-2011-200154.</p>
                                    <br /> */}
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
