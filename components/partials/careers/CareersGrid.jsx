import React from "react"
import PropTypes from "prop-types"
import {
  TbCalendarTime,
  TbSend,
  TbBriefcase,
  TbBuildingCommunity,
  TbLiveView
} from "react-icons/tb"
import moment from "moment"
import Link from "next/link"
import dynamic from "next/dynamic"
import ourCulture from "~/public/static/img/our-culture/02.svg"

const Image = dynamic(() => import("~/components/elements/Image"), {
  loading: () => <p>Loading...</p>
})
function CareersGrid({ postLists, internShip, campaignList }) {
  return (
    <div className=" about-section ">
      <div className="container">
        <p className="my-4">
          We are looking for people who are driven to make a difference and are
          not afraid to challenge the status quo. Join our team to work on
          exciting projects and collaborate with the best people and
          institutions in the industry.
        </p>
        <p className="my-4">
          If you are looking for a career in an innovative, fast-paced company
          that puts its people first, Stemnovate could be your place.
        </p>
      </div>

      <div className="container">
        <div className="ps-blog-items row row-reverse my-5" data-columns="4">
          {postLists.map((data, key) => (
            <div
              className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 mb-3 d-flex flex-grow-1"
              key={key}
            >
              <div className="card p-0">
                <div className="card-body">
                  <Link href={`/jobdetails/${data.job_id}`}>
                    <h2 className="card-title h2 font-weight-bold">
                      {data.position_name}
                    </h2>
                  </Link>
                  <p>
                    <TbBuildingCommunity className="mr-3 mb-1" />
                    {data.company}
                  </p>
                  <p>
                    <TbLiveView className="mr-3 mb-1" />
                    {data.location}
                  </p>
                  <p>
                    <TbBriefcase className="mr-3" />
                    <span className="badge badge-pill badge-primary">
                      {data.Job_type}
                    </span>
                  </p>
                  <p>
                    <TbCalendarTime className="mr-3 mb-1" />
                    {moment().diff(moment(data.created_at), "days") + 1} days
                    ago
                  </p>

                  <div
                    className="p-3 bd-highlight mt-5 border-top border-dark "
                    style={{ minHeight: "100px" }}
                    dangerouslySetInnerHTML={{
                      __html: data.job_description.substr(0, 100)
                    }}
                  ></div>

                  <div className="text-right">
                    <Link href={`/jobdetails/${data.job_id}`}>
                      <div
                        className="btn btn-lg btn-primary"
                        style={{ cursor: "pointer" }}
                      >
                        Apply Now <TbSend />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div style={{ marginTop: "-5%" }} className="ps-page__content">
          <div className="ps-blog">
            <div
              className="row d-flex justify-content-center align-self-center"
              data-columns="3"
            >
              {campaignList?.map((data, key) => (
                <div
                  key={key}
                  className="card col-xl-3 col-lg-6 col-md-4 col-sm-12  m-5 image-box-container-careergrid"
                >
                  <article className="card-body ps-post ps-post--grid blog-news">
                    <div className="ps-post__thumbnail">
                      <Image
                        src={`${process.env.AWS_S3BUCKET_URL}${data.image}`}
                        alt={data?.title}
                        layout="responsive"
                        width={1000}
                        height={545}
                      />
                    </div>
                    <div className="ps-post__wrapper justify-content-center">
                      <div className="ps-post__content justify-content-center">
                        <h5 className=" pt-2 px-2">
                          {data?.campaign_description}
                        </h5>
                      </div>
                    </div>
                  </article>
                  <div className="ps-post__meta align-self-center justify-content-center">
                    <Link href={`/campaign/${data.slug}`}>
                      <div className="btn btn-lg button-orange text-white my-3">
                        Get More details
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
              {internShip?.map((data, key) => (
                <div
                  key={key}
                  className="card col-xl-3 col-lg-6 col-md-4 col-sm-12 m-5 image-box-container-careergrid"
                >
                  <article className="card-body ps-post ps-post--grid blog-news">
                    <div className="ps-post__thumbnail">
                      <Image
                        src={`${process.env.AWS_S3BUCKET_URL}${data.image}`}
                        alt={data.position_name}
                        width={1000}
                        height={545}
                        layout="responsive"
                      />
                    </div>
                    <div className="ps-post__wrapper justify-content-center">
                      <div className="ps-post__content justify-content-center">
                        <h5 className="pt-2 px-2">{data?.position_name}</h5>
                      </div>
                    </div>
                  </article>
                  <div className="ps-post__meta  align-self-center justify-content-center">
                    <Link href={`/jobdetails/${data.job_id}`}>
                      <div className="btn btn-lg button-orange text-white my-3">
                        Get More details
                      </div>
                    </Link>
                  </div>
                </div>
              ))}

              <div className="card col-xl-3 col-lg-6 col-md-4 col-sm-12 m-5 image-box-container-careergrid">
                <article className="card-body ps-post ps-post--grid blog-news">
                  <div className="ps-post__thumbnail">
                    <Image
                      src={ourCulture}
                      alt="our-culture"
                      width={1000}
                      height={545}
                      layout="responsive"
                    />
                  </div>
                  <div className="ps-post__wrapper justify-content-center">
                    <div className="ps-post__content justify-content-center text-center">
                      <h5 className=" pt-2 px-2 align-self-center">JOIN US!</h5>
                    </div>
                  </div>
                </article>
                <div className="ps-post__meta  align-self-center justify-content-center">
                  <Link href="#">
                    <div className="btn btn-lg button-orange text-white my-3">
                      Get More details
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <h2 className=" text-uppercase">Our culture</h2>
        <p className="my-4">
          Our company, Stemnovate, is dedicated to developing innovative,
          high-quality products to prevent and treat diseases while reducing
          animal testing. Our team comprises scientic and technical experts who
          focus on research and development.
        </p>
        <p className="my-4">
          Our culture is built on our commitment to our people. We believe in
          equality and inclusion, and we strive to build a diverse and skilled
          team. We understand that by doing so, we increase our chances of
          achieving our mission.
        </p>
        <p className="my-4">
          We aim to create an environment where our sta can thrive and innovate.
          If you want to join our team, please visit our careers page.
        </p>
        <p className="my-4">
          We support our sta through any challenges they may face. We provide
          mental health training, and exible working arrangements to all our
          employees.
        </p>
        <p className="my-4">
          We also encourage our sta to keep learning through training courses
          and collaborations within and outside the company. We work with the
          industry's best and most fascinating people and institutions.
        </p>
        <p className="my-4">
          At Stemnovate, we believe in equality and opportunity for all. To
          advance science, we must create equality and opportunity for all, and
          the diversity of our team helps us achieve this.
        </p>
      </div>
    </div>
  )
}

export default CareersGrid
CareersGrid.propTypes = {
  postLists: PropTypes.array,
  internShip: PropTypes.array,
  campaignList: PropTypes.array
}
