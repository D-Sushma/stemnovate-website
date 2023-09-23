import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const ResourcesList = ({ resources }) => {
    return (
        <div className="">
            {resources &&
                resources.map((data, key) => (
                    <div className="resources-list " key={key}>
                        <div className="container">
                            <section className="ps-section--block-grid ">
                                <div className="ps-section__thumbnail m-1 p-1">
                                    <a className="ps-section__image" href="#">
                                        <img src={`${process.env.AWS_S3BUCKET_URL}${data.category_image}`} alt={data.cat_name} />
                                    </a>
                                </div>
                                <div className="ps-section__content m-3  p-1">
                                    <h2 className="font-weight-bold">{data.cat_name}</h2>
                                    <div className="ps-section__desc mb-1">
                                        <p
                                            className=""
                                            dangerouslySetInnerHTML={{
                                                __html: data?.category_content,
                                            }}></p>
                                        {/* <a href={`/resources/r/${data.slug}`} className="btn btn-lg button-orange text-white m-4 m-5">
                                            Get More details <HiArrowSmRight size={25} />
                                        </a> */}
                                    </div>
                                </div>
                            </section>
                        </div>
                        {data.other_resources_category.length > 0 ? (
                            <div className="category-section">
                                <div className="container">
                                    <div className="row   mt-5" data-columns="4">
                                        {/* ------------------------------ map All Blog ------------------------------  */}
                                        {data.other_resources_category.map((myCat, index) => (
                                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12 mb-3 p-2 d-flex flex-column flex-grow-1" key={index}>
                                                <div className=" blur rounded border flex-grow-1">
                                                    <img src={`${process.env.AWS_S3BUCKET_URL}${myCat?.category_image}`} className="rounded" alt={data.cat_name} />
                                                    <div className="m-4 ">
                                                        <h2 className="card-title h2 text-black font-weight-bold" style={{ color: "#000" }}>
                                                            {myCat.cat_name}
                                                        </h2>

                                                        {/* <p>
                                                    <TbBuildingCommunity className="mr-3 mb-1" />
                                                    {myCat.company}
                                                </p>
                                                <p>
                                                    <TbLiveView className="mr-3 mb-1" />
                                                    {myCat.location}
                                                </p>
                                                <p>
                                                    <TbBriefcase className="mr-3" />
                                                    <span className="badge badge-pill badge-primary">{myCat.Job_type}</span>
                                                </p>
                                                <p>
                                                    <TbCalendarTime className="mr-3 mb-1" />
                                                    {moment().diff(moment(myCat.created_at), "days") + 1} days ago
                                                </p> */}

                                                        {myCat.category_content !== "null" ? (
                                                            <div
                                                                className=" bd-highlight mt-3 "
                                                                style={{ minHeight: "50px" }}
                                                                dangerouslySetInnerHTML={{
                                                                    __html: myCat.category_content.substr(0, 100),
                                                                }}></div>
                                                        ) : null}

                                                        <div className="text-right">
                                                            <Link href={`/resources/r/${myCat.slug}`}>
                                                                <a className="btn btn-lg btn-orange-new">
                                                                    Read More <FaArrowRight className="arrow-icon" />
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
                            </div>
                        ) : null}
                    </div>
                ))}
        </div>
    );
};

export default connect((state) => state)(ResourcesList);
ResourcesList.propTypes = {
    resources: PropTypes.array,
};
