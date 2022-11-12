import React, { useEffect } from "react";
import Container from "~/components/layouts/Container";
import BreadCrumb from "~/components/elements/BreadCrumb";
import Subscribe from "~/components/shared/sections/Subscribe";
import { connect } from "react-redux";
import { baseUrl } from "~/repositories/Repository";
import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

const breadcrumb = [
    {
        id: 1,
        text: "Home",
        url: "/",
    },

    {
        id: 2,
        text: "Resources",
    },
];

const Resources = ({ resourcesList }) => {
    const [privateList, setPrivateList] = useState([]);

    useEffect(() => {
        setPrivateList(resourcesList.data);
    }, []);

    return (
        <Container title="Resources">
            <main className="ps-page ps-page--inner">
                <div className="ps-page__header  breadcrumb-h application-breadcrumb-bg">
                    <div className="container ">
                        <BreadCrumb breacrumb={breadcrumb} />
                        <h1 className="text-center  text-white p-2">Open Resources</h1>
                    </div>
                </div>
                <div className="ps-page__content">
                    <div className="ps-about">
                        <div className="category-section mb-5">
                            <div className="container">
                                <div className="about-section py-0">
                                    <div className="row   mt-5" data-columns="4">
                                        {privateList.map((myCat, index) => (
                                            <div className="col-md-6  mb-3 p-2 d-flex flex-column flex-grow-1" key={index}>
                                                <div className="card d-flex flex-column flex-grow-1 rounded-lg align-items-center p-0 ">
                                                    <img src={`${process.env.AWS_S3BUCKET_URL}${myCat.category_image}`} className="rounded" alt={myCat.cat_name} />
                                                    <div className="card-body  rounded-lg p-0 overlay-content">
                                                        <div className="p-5">
                                                            <h1 className="h1 text-white">
                                                                <b>{myCat.cat_name}</b>
                                                            </h1>
                                                            {myCat.cat_access ? <span className="badge badge-pill badge-primary">Member only</span> : <span className="badge badge-pill badge-success">Open Access</span>}
                                                            <p className="text-white">{myCat.short_description}</p>
                                                            <Link href={`/resources/r/${myCat.slug}`}>
                                                                <a className="link-btn">
                                                                    <b>
                                                                        Get Resources <FaArrowRight />
                                                                    </b>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <ResourcesList resources={resourcesList && resourcesList.data} /> */}
                        {/* <div className="about-section">
                            <div className="container">
                                <p className="text-center">Latest blog from Stemnovate</p>
                            </div>
                        </div> */}

                        <Subscribe />
                    </div>
                </div>
            </main>
        </Container>
    );
};

export async function getServerSideProps() {
    // Fetch data from external API

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        accessType: 0,
    });

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
    };

    const response = await fetch(baseUrl + "/api/resources/getResources", requestOptions);
    const resourcesList = await response.json();
    // Pass data to the page via props
    return { props: { resourcesList } };
}

export default connect((state) => state)(Resources);
Resources.propTypes = {
    resourcesList: PropTypes.any,
};
