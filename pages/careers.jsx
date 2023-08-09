import React, { useState } from "react"
import Link from "next/link"
import Image from "~/components/elements/Image"
import ourCulture from "~/public/static/img/our-culture/02.jpg"
import Container from "~/components/layouts/Container"
import BreadCrumb from "~/components/elements/BreadCrumb"
import Subscribe from "~/components/shared/sections/Subscribe"
import { useEffect } from "react"
import CareersGrid from "~/components/partials/careers/CareersGrid"

const breadcrumb = [
  {
    id: 1,
    text: "Home",
    url: "/"
  },

  {
    id: 2,
    text: "Careers"
  }
]

const CareerScreen = () => {
  const [postLists, setPostList] = useState([])
  const [internShip, setInternShip] = useState([])

  useEffect(() => {
    getJobOpeningsList()
    getInternShipOpeningsList()
  }, [])

  const getJobOpeningsList = async () => {
    var requestParam = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({})
    }
    const response = await fetch(`/api/careers/getJobList`, requestParam)
    const resData = await response.json()
    console.log(resData)
    setPostList(resData.data)
  }

  const getInternShipOpeningsList = async () => {
    var requestParam = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({})
    }
    const response = await fetch(`/api/careers/getIntership`, requestParam)
    const resData = await response.json()
    console.log(resData)
    setInternShip(resData.data)
  }

  return (
    <Container
      title="Careers"
      cronical={"/careers"}
      ogimg={`https://stemnovate.co.uk/static/img/our-culture/02.png`}
      description="Stemnovate page for job vacancies, apprenticeships and student learning"
    >
      <main className="ps-page ps-page--inner">
        <div className="ps-page__header  breadcrumb-h application-breadcrumb-bg">
          <div className="container ">
            <BreadCrumb breacrumb={breadcrumb} />
            <h1 className="text-center  text-white ">Career</h1>
          </div>
        </div>
        <div className="ps-page__content">
          <div className="ps-about">
            <CareersGrid postLists={postLists} internShip={internShip} />
            <div className="bg-02-section">
              <div className="container">
                <section className="ps-section--block-grid">
                  <div className="ps-section__thumbnail">
                    <Link href="#">
                      <div className="ps-section__image link-hover-thumb-shape">
                        <Image
                          className="ps-section__image"
                          src={ourCulture}
                          alt="our-culture"
                          width={1200}
                          height={675}
                        />
                         </div>
                    </Link>
                  </div>
                  <div className="ps-section__content">
                    <div className="ps-section__desc ">
                      <h2 className="p-1 blue-text base-text-secondary font-weight-bold">
                        JOIN US!
                      </h2>
                      <p>
                        Pharmaceutical companies need timely and actionable
                        insights from their drug discovery data to enter
                        clinical trials. Medical practitioners need to ensure
                        patient safety from adverse drug reactions. However,
                        they are often constrained by the technology that has
                        huge reliability on animal testing. Thereby wasting
                        effort and opportunities while increasing risk of
                        failure at the clinical trials or post-marketing.
                        Stemnovate compliant platforms are integrating somatic
                        stem cell models ‘on a chip’ as the novel bioengineered
                        solution for drug-screening and safety-testing. If
                        you’re looking for a rewarding career with an
                        organisation that’s passionate about reshaping drug
                        discovery landscape, we want to hear from you.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <Subscribe />
          </div>
        </div>
      </main>
    </Container>
  )
}

export default CareerScreen
