import React, { useEffect } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import Link from "next/link"
import { useState } from "react"
import dynamic from "next/dynamic"

const Container = dynamic(() => import("~/components/layouts/Container"), {
  loading: () => <p>Loading...</p>
})
const BreadCrumb = dynamic(() => import("~/components/elements/BreadCrumb"), {
  loading: () => <p>Loading...</p>
})
const Image = dynamic(() => import("~/components/elements/Image"), {
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
    text: "Application"
  }
]

const Application = ({ resourcesList }) => {
  const [privateList, setPrivateList] = useState([])

  useEffect(() => {
    setPrivateList(resourcesList.data)
  }, [])

  return (
    <Container
      title="Application"
      description="Stemnovate resources page is for information on techniques, learning materials, updates, blogs and newsletters."
    >
      <main className="ps-page ps-page--inner">
        <div className="ps-page__header  breadcrumb-h application-breadcrumb-bg">
          <div className="container ">
            <BreadCrumb breacrumb={breadcrumb} />
            <h1 className="text-center  text-white p-2">Human</h1>
          </div>
        </div>

        <div className=" about-section ">
          <div className="container">
            <div className="ps-blog">
              <div
                className="row d-flex justify-content-center align-self-center"
                data-columns="3"
              >
                <div className="card col-xl-3 col-lg-4 col-md-3 col-sm-6 m-5 image-box-container-careergrid">
                  <article className="ps-post ps-post--grid blog-news">
                    <div className="ps-post__thumbnail">
                      <Image
                        src={`/static/img/applications/Drug-Discovery.jpg`}
                        alt="our-culture"
                        width={1000}
                        height={545}
                        unoptimized={true}
                        layout="responsive"
                      />
                    </div>
                    <div className="ps-post__wrapper justify-content-center">
                      <div className="ps-post__content justify-content-center text-center">
                        <h3 className="h3 text-dark">
                          <b>Drug Discovery Platform</b>
                        </h3>
                        <h5 className=" pt-2 px-2 align-self-center">
                          Only less than one in 10,000 potential drug 
                          compounds reach the clinic. As a result, drug 
                          discovery remains a complicated process. 
                        </h5>
                        <div className="ps-post__meta justify-content-center">
                          <Link href="/Applications/Drug-Discovery-Platform">
                            <div className="btn btn-lg button-orange text-white mt-3">
                              Get More details
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="card col-xl-3 col-lg-4 col-md-3 col-sm-6 m-5 image-box-container-careergrid">
                  <article className="ps-post ps-post--grid blog-news">
                    <div className="ps-post__thumbnail">
                      <Image
                        src={`/static/img/applications/Disease-modelling.svg`}
                        alt="our-culture"
                        width={1000}
                        height={545}
                        unoptimized={true}
                        layout="responsive"
                      />
                    </div>
                    <div className="ps-post__wrapper justify-content-center">
                      <div className="ps-post__content justify-content-center text-center">
                        <h3 className="h3 text-dark">
                          <b>Disease Modelling</b>
                        </h3>
                        <h5 className=" pt-2 px-2 align-self-center">
                          According to the FDA, Drug-Induced Liver Injury
                          has been the most frequent single cause of 
                          safety-related drug marketing withdrawals... 
                        </h5>
                        <div className="ps-post__meta justify-content-center">
                          <Link href="/Applications/Disease-Modelling">
                            <div className="btn btn-lg button-orange text-white mt-3">
                              Get More details
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="card col-xl-3 col-lg-4 col-md-3 col-sm-6 m-5 image-box-container-careergrid">
                  <article className="ps-post ps-post--grid blog-news">
                    <div className="ps-post__thumbnail">
                      <Image
                        src={`/static/img/applications/DNA-synthesis.svg`}
                        alt="our-culture"
                        width={1000}
                        height={545}
                        unoptimized={true}
                        layout="responsive"
                      />
                    </div>
                    <div className="ps-post__wrapper justify-content-center">
                      <div className="ps-post__content justify-content-center text-center">
                        <h3 className="h3 text-dark">
                          <b>DNA Synthesis</b>
                        </h3>
                        <h5 className=" pt-2 px-2 align-self-center">
                          Stemnovate is soon introducing a microfluidic 
                          platform for DNA synthesis. This disruptive 
                          technology allows template free DNA/RNA synthesis.
                        </h5>
                        <div className="ps-post__meta justify-content-center">
                          <Link href="/Applications/DNA-Synthesis">
                            <div className="btn btn-lg button-orange text-white mt-3">
                              Get More details
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Container>
  )
}

export async function getServerSideProps() {
  const resourcesList = []
  return { props: { resourcesList } }
}

export default connect((state) => state)(Application)
Application.propTypes = {
  resourcesList: PropTypes.any
}
