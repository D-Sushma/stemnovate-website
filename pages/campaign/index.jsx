import React, { useEffect, useState } from "react";
import Container from "~/components/layouts/Container";
import BreadCrumb from "~/components/elements/BreadCrumb";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import Subscribe from "~/components/shared/sections/Subscribe";
import { FaArrowRight } from "react-icons/fa";
import { baseUrl } from "~/repositories/Repository";
import Link from "next/link";

const CampaignPage = ({ ProductData }) => {
    const Router = useRouter();
    const { campaignID } = Router.query;
    const [breadcrumb, setbreadcrumb] = useState([]);
    useEffect(() => {
        getcategoryListBySlug();
        console.log("ProductData", ProductData);
    }, []);

    const getcategoryListBySlug = async (params) => {
        const newbreadcrumb = [
            {
                id: 1,
                text: "Home",
                url: "/",
            },

            {
                id: 2,
                text: "Campaign",
                url: "/campaign",
            },
        ];
        console.log(campaignID, "campaignID");
        var urldata = "/campaign";
        for (let index = 0; index < campaignID?.length; index++) {
            const element = campaignID[index];
            if (index <= campaignID.length) {
                var urldata = urldata + "/" + element;
            } else {
                var urldata = urldata + "/#";
            }
            var bdc = {
                id: 3 + index,
                text: element,
            };
            console.log(bdc);
            newbreadcrumb.push(bdc);
        }
        setbreadcrumb(newbreadcrumb);
    };

    return (
        <Container title="Promotions Products">
            <ToastContainer />
            <div className="ps-page ps-page--shopping">
                <div className="ps-page__header">
                    <div className="container">
                        <ul className="breadcrumb text-white">
                            {breadcrumb?.map((item) => {
                                if (!item.url) {
                                    return (
                                        <li className="" key={item.id}>
                                            {item.text}
                                        </li>
                                    );
                                } else {
                                    return (
                                        <li className="" key={item.text}>
                                            <Link href={item.url}>
                                                <a className="">{item.text}</a>
                                            </Link>
                                        </li>
                                    );
                                }
                            })}
                        </ul>{" "}
                        <h1 className="ps-banner__title">{ProductData.data[0].title}</h1>
                        <h5 className="text-black">
                            MAY 26, 2021 <span className="brack-point my-2"></span> Leteast Campaign
                        </h5>
                    </div>
                </div>
                <div className="ps-page__content">
                    <div className="ps-about">
                        <div className="container">
                            <div className="row mt-2">
                                <div className="col-md-12">
                                    <img src={`${process.env.AWS_S3BUCKET_URL}${ProductData?.data[0].image}`} alt={ProductData?.data[0].title} />
                                </div>
                            </div>
                            <div className="about-section">
                                <p
                                    className="card-text"
                                    dangerouslySetInnerHTML={{
                                        __html: ProductData?.data[0]?.promo_content,
                                    }}></p>
                            </div>
                        </div>

                        {/* <div className=" blog-section">
                            <div className="container">
                                <div className="row mt-2">
                                    <div className="col-md-12">
                                        <img src={`${process.env.AWS_S3BUCKET_URL}${ProductData?.data[0].image}`} alt={ProductData?.data[0].title} />
                                    </div>
                                </div>
                                <section className="ps-section--block-grid ">
                                    <div className="ps-section__thumbnail">
                                        <a className="ps-section__image" href="#">
                                            <img src={`${process.env.AWS_S3BUCKET_URL}${ProductData?.data[0].image}`} alt={ProductData?.data[0].title} />
                                        </a>
                                    </div>
                                    <div className="ps-section__content">
                                        <div className="ps-section__desc ">
                                            <h5 className="text-black">
                                                MAY 26, 2021 <span className="brack-point my-2"></span> Leteast Campaign
                                            </h5>
                                            <h2 className="text-black">Live Culture Fibroblasts</h2>
                                            <p className="text-black">
                                                Stemnovate’s Live Primary Cells are delivered the same day in culture, ensuring the cells are viable and ready to be used, worry-free, for your next experiment.
                                                <br /> Our live cells are available in T-25 flasks (~400,000 Cells)
                                            </p>
                                            <a href="#" className="arrow-btn btn btn-lg  mt-5">
                                                Read Details <FaArrowRight className="arrowr" size="18" />
                                            </a>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className="blog-section">
                            <div className="container">
                                <section className="ps-section--block-grid ">
                                    <div className="ps-section__thumbnail">
                                        <a className="ps-section__image" href="#">
                                            <img src="/static/img/products/primary-human-fibroblasts/primary-Human-Fibroplast-Live-Culture.jpg" alt="Live Culture Fibroblasts" />
                                        </a>
                                    </div>
                                    <div className="ps-section__content">
                                        <div className="ps-section__desc ">
                                            <h5 className="text-black">
                                                MAY 26, 2021 <span className="brack-point my-2"></span> Leteast Campaign
                                            </h5>
                                            <h2 className="text-black">Live Culture Fibroblasts</h2>
                                            <p className="text-black">
                                                Stemnovate’s Live Primary Cells are delivered the same day in culture, ensuring the cells are viable and ready to be used, worry-free, for your next experiment.
                                                <br /> Our live cells are available in T-25 flasks (~400,000 Cells)
                                            </p>
                                            <a href="#" className="arrow-btn btn btn-lg  mt-5">
                                                Read Details <FaArrowRight className="arrowr" size="18" />
                                            </a>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div> */}

                        <Subscribe />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export async function getServerSideProps({ query }) {
    var slug = query.slug;
    var ProductData = [];

    const res = await fetch(baseUrl + "/api/campaign/getallcampaign");
    const myProductData = await res.json();

    if (myProductData.status == 200) {
        ProductData = myProductData;
    } else {
        ProductData = [];
    }

    // // Pass data to the page via props
    return { props: { ProductData } };
}

export default CampaignPage;
