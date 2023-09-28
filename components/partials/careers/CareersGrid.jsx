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
import { HiArrowSmRight } from "react-icons/hi"
import dynamic from "next/dynamic"
const Image = dynamic(() => import("~/components/elements/Image"), {
  loading: () => <p>Loading...</p>
})

function CareersGrid({ postLists, internShip }) {
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
          {/* ------------------------------ map All Blog ------------------------------  */}

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

          {/* ------------------------------ map All Blog ------------------------------  */}
        </div>
      </div>

      <div className="ps-blog-items my-5" data-columns="4">
        {/* ------------------------------ map All Blog ------------------------------  */}
        <div className="resources-list p-2">
          <div className="container">
            <section className="ps-section--block-grid ">
              <div className="ps-section__thumbnail">
                <Link href="#">
                  <div className="ps-section__image link-hover-thumb-shape">
                    <Image
                      src="static/image/research-campaign.webp"
                      alt="Sharing pictures of your work could win you an Amazon voucher"
                      width={1200}
                      height={675}
                    />
                  </div>
                </Link>
              </div>
              <div className="ps-section__content">
                <Link href="https://stemnovate.co.uk/campaign/monthly-shine-through-your-research-campaign">
                  <h2
                    className="font-weight-bold"
                    style={{ cursor: "pointer" }}
                  >
                    Sharing pictures of your work could win you an Amazon
                    voucher
                  </h2>
                </Link>
                <div className="ps-section__desc ">
                  <p>
                    Sharing pictures of your work could win you an Amazon
                    voucher
                  </p>

                  <Link href="https://stemnovate.co.uk/campaign/monthly-shine-through-your-research-campaign">
                    <div className="btn btn-lg button-orange text-white m-4 m-5">
                      Get More details <HiArrowSmRight size={25} />
                    </div>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* ------------------------------ map All Blog ------------------------------  */}
      </div>

      <div className="" data-columns="4">
        {/* ------------------------------ map All Blog ------------------------------  */}

        {internShip.map((data, key) => (
          <div className="resources-list p-2" key={key}>
            <div className="container">
              <section className="ps-section--block-grid ">
                <div className="ps-section__thumbnail">
                  <Link href="#">
                    <div className="ps-section__image link-hover-thumb-shape">
                      <Image
                        src={`${process.env.AWS_S3BUCKET_URL}${data.image}`}
                        alt={data.position_name}
                        width={1200}
                        height={676}
                        placeholder="blur"
                        blurDataURL="/static/image/blurred.png"
                      />
                    </div>
                  </Link>
                </div>
                <div className="ps-section__content">
                  <Link href={`/jobdetails/${data.job_id}`}>
                    <h2
                      className="font-weight-bold"
                      style={{ cursor: "pointer" }}
                    >
                      {data.position_name}
                    </h2>
                  </Link>
                  <div className="ps-section__desc ">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: data.job_description
                      }}
                    ></p>
                    <Link href={`/jobdetails/${data.job_id}`}>
                      <div className="btn btn-lg button-orange text-white m-4 m-5">
                        Get More details <HiArrowSmRight size={25} />
                      </div>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        ))}

        {/* ------------------------------ map All Blog ------------------------------  */}
      </div>
    </div>
  )
}

export default CareersGrid
CareersGrid.propTypes = {
  postLists: PropTypes.array,
  internShip: PropTypes.array
}
