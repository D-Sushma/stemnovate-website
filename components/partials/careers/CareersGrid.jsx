import React from "react";
import PropTypes from "prop-types";
import { TbCalendarTime, TbSend, TbBriefcase, TbBuildingCommunity, TbLiveView } from "react-icons/tb";
import moment from "moment";
import Link from "next/link";
import { HiArrowSmRight } from "react-icons/hi";
function CareersGrid({ postLists, internShip }) {
    return (
        <div className=" about-section ">
            <div className="container">
                <p className="my-4">We are looking for people who are driven to make a difference and are not afraid to challenge the status quo. Join our team to work on exciting projects and collaborate with the best people and institutions in the industry.</p>
                <p className="my-4">If you are looking for a career in an innovative, fast-paced company that puts its people first, Stemnovate could be your place.</p>
            </div>

            <div className="container">
                <div className="ps-blog-items row row-reverse my-5" data-columns="4">
                    {/* ------------------------------ map All Blog ------------------------------  */}

                    {postLists.map((data, key) => (
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 mb-3 d-flex flex-grow-1" key={key}>
                            <div className="card p-0">
                                <div className="card-body">
                                    <Link href={`/jobdetails/${data.job_id}`}>
                                        <a>
                                            {/* <TbDotsVertical className="position-absolute" style={{ width: "183%" }} /> */}
                                            <h2 className="card-title h2 font-weight-bold">{data.position_name}</h2>
                                        </a>
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
                                        <span className="badge badge-pill badge-primary">{data.Job_type}</span>
                                    </p>
                                    <p>
                                        <TbCalendarTime className="mr-3 mb-1" />
                                        {moment().diff(moment(data.created_at), "days") + 1} days ago
                                    </p>

                                    <div
                                        className="p-3 bd-highlight mt-5 border-top border-dark "
                                        style={{ minHeight: "100px" }}
                                        dangerouslySetInnerHTML={{
                                            __html: data.job_description.substr(0, 100),
                                        }}></div>

                                    <div className="text-right">
                                        <Link href={`/jobdetails/${data.job_id}`}>
                                            <a className="btn btn-lg btn-primary">
                                                Apply Now <TbSend />
                                            </a>
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
                                        <a className="ps-section__image" href="#">
                                            <img src="static/image/research-campaign.webp" alt="Sharing pictures of your work could win you an Amazon voucher" />
                                        </a>
                                    </div>
                                    <div className="ps-section__content">
                                        <Link href="https://stemnovate.co.uk/campaign/monthly-shine-through-your-research-campaign">
                                            <a>
                                                <h1 className="font-weight-bold">Sharing pictures of your work could win you an Amazon voucher</h1>
                                            </a>
                                        </Link>
                                        <div className="ps-section__desc ">
                                            <p>Sharing pictures of your work could win you an Amazon voucher</p>
                                            
                                            <a href="https://stemnovate.co.uk/campaign/monthly-shine-through-your-research-campaign" className="btn btn-lg button-orange text-white m-4 m-5">
                                                Get More details <HiArrowSmRight size={25} />
                                            </a>
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
                                    <a className="ps-section__image" href="#">
                                        <img src={`${process.env.AWS_S3BUCKET_URL}${data.image}`} alt={data.position_name} />
                                    </a>
                                </div>
                                <div className="ps-section__content">
                                    <Link href={`/jobdetails/${data.job_id}`}>
                                        <a>
                                            <h1 className="font-weight-bold">{data.position_name}</h1>
                                        </a>
                                    </Link>
                                    <div className="ps-section__desc ">
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: data.job_description,
                                            }}></p>
                                        {/* <div
                                            className="p-3 bd-highlight mt-5 border-top border-dark "
                                            style={{ minHeight: "100px" }}
                                            dangerouslySetInnerHTML={{
                                                __html: data.job_description.substr(0, 100),
                                            }}></div> */}
                                        {/* <p>
                                            <TbBuildingCommunity className="mr-3 mb-1" />
                                            {data.company}
                                        </p>
                                        <p>
                                            <TbLiveView className="mr-3 mb-1" />
                                            {data.location}
                                        </p>
                                        <p>
                                            <TbBriefcase className="mr-3" />
                                            <span className="badge badge-pill badge-primary">{data.Job_type}</span>
                                        </p>
                                        <p>
                                            <TbCalendarTime className="mr-3 mb-1" />
                                            {moment().diff(moment(data.created_at), "days") + 1} days ago
                                        </p> */}

                                        <a href={`/jobdetails/${data.job_id}`} className="btn btn-lg button-orange text-white m-4 m-5">
                                            Get More details <HiArrowSmRight size={25} />
                                        </a>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                ))}

                {/* ------------------------------ map All Blog ------------------------------  */}
            </div>
        </div>
    );
}

export default CareersGrid;
CareersGrid.propTypes = {
    postLists: PropTypes.array,
    internShip: PropTypes.array,
};
