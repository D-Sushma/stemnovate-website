import React, { useEffect, useState } from "react";
import Container from "~/components/layouts/Container";
import BreadCrumb from "~/components/elements/BreadCrumb";
import Testimonials from "~/components/shared/sections/Testimonials";
import Subscribe from "~/components/shared/sections/Subscribe";
import { baseUrl } from "~/repositories/Repository";
import { PrinterFilled } from "@ant-design/icons";
import Image from "~/components/elements/Image"
import discoverymatters from "~/public/static/image/News.png"
import announcementimg from "~/public/static/image/announcement.png"
import Cambridge from "~/public/static/img/blog/Cambridge-Independent.jpg"
import newcambridge from "~/public/static/image/newcambridge.jpg"

import NextArrow from "~/components/elements/carousel/NextArrow";
import PrevArrow from "~/components/elements/carousel/PrevArrow";
import Slider from "react-slick";

const carouselreviewSetting = {
  infinite: true,
  autoplay: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true
      }
    }
  ]
}

const carouselSetting = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
            breakpoint: 1366,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
            },
        },
    ],
};

const breadcrumb = [
    {
        id: 1,
        text: "Home",
        url: "/",
    },

    {
        id: 2,
        text: "About us",
    },
];

const AboutUsScreen = ({ ProductData, HistoryData, PartnerData, TeamData, ReviewData, AnnounceData }) => {
    //console.log("Details : ",ProductData)
    useEffect(() => {
        console.log("ProductData", ProductData);
        console.log("HistoryData", HistoryData);
        console.log("PartnerData", PartnerData);
        console.log("ReviewData", ReviewData);
    }, []);

    return (
        <Container title="About Us">
            <main className="ps-page ps-page--inner">
                <div className="ps-page__header  breadcrumb-h application-breadcrumb-bg">
                    <div className="container ">
                        <BreadCrumb breacrumb={breadcrumb} />
                    </div>
                    <h2 className="text-center text-white p-2">
                        <div
                            className="center-box text-white"
                            dangerouslySetInnerHTML={{
                                __html: ProductData.data[0].banner_title,
                            }}></div>
                       
                    </h2>
                </div>
                <div className="ps-page__content">
                    <div className="ps-about">
                        <div className="about-section">
                            <section className="container">
                                {/* <Reveal effect="fadeInUp"> */}
                                {/* <h4 className="text-center font-weight-bold text-black">About</h4> */}
                                {/* <h2 className="text-center font-weight-bolder base-text-primary">STEMNOVATE</h2> */}
                                <div className="center-box">
                                    <div className="vertical-center">
                                        <div
                                    className="center-box"
                                    dangerouslySetInnerHTML={{
                                        __html: ProductData.data[0].intro,
                                    }}></div>
                                       
                                        {/* <p className=" " style={{ fontSize: "1.17em" }}>
                                            Stemnovate's pioneering platform for targeted
                                            <span className="text-orange"> drug development</span> is truly unique. We account for individual variations in patients' <span className="text-orange">genetics, physiology, and health.</span> It enables the most precise, carefully targeted drug development from the earliest stages of the process.
                                            <br /> As a result, we deliver a safer, more cost-effective, and best drug discovery for humans. Preventing the needless loss of countless animal lives in a process that up until now has failed to predict accurate human responses. <br /> Stemnovate has the best human and multispecies animal platforms to advance <span className="text-orange">medical research and drug discovery.</span>
                                        </p> */}
                                    </div>
                                </div>

                                {/* </Reveal> */}
                            </section>
                        </div>

                        <div className="bg-02-section">
                            <div className="container">
                                 <Slider {...carouselSetting} className="ps-carousel">
                                 {TeamData.data.map((data, key) => (
                                    <div className="ps-carousel__item" key={key}>
                                <section className="ps-section--block-grid ">
                                    <div className="ps-section__thumbnail">
                                        <a className="ps-section__image" href="#">
                                            <img src={`${process.env.AWS_S3BUCKET_URL}${data.image}`} alt={key} />
                                            {/* <img src="/static/img/about/Ruchi.jpg" alt="Ruchi sharma" /> */}
                                        </a>
                                    </div>
                                    <div className="ps-section__content">
                                        <div className="ps-section__desc ">
                                            {/* <h2 className="text-white">
                                                Live Culture Fibroblasts
                                            </h2> */}
                                            <div
                                    className="center-box"
                                    dangerouslySetInnerHTML={{
                                        __html: data.team_content,
                                    }}></div>
                                            {/* <p className="text-white">
                                                Our Founder and CEO, Dr Ruchi Sharma, is driven by her passion for taking the benefits of research and applying them to products and technology to make a significant and positive difference in the real world. She is the ‘# One to watch’ entrepreneur of 2020 in the UK and is leading prestigious grants and international industrial partnerships. Dr Sharma obtained a PhD from the world-renowned Roslin Institute at the University of Edinburgh, followed by a post-doctorate in the exciting field of cellular reprogramming at the University of Cambridge. She is also a veterinarian and supports inventions for better animal health while reducing animal testing. With a firm focus on partnerships and collaboration, Dr Sharma believes that we can create a
                                                better world through innovation.
                                            </p> */}
                                        </div>
                                    </div>
                                </section>
                                    </div>
                                ))} 
                                </Slider>
                            </div>
                        </div>

                        <div className="about-section">
                            <div className="container">
                                <div className=" row d-flex justify-content-center">
                                    {/* /* ---------------------------------- first --------------------------------- */}
                                    {HistoryData.data.map((data, key) => (
                                    <div className="col-md-2 col-sm-6 d-flex flex-grow-1">
                                        <div className="card mt-3  align-items-center p-1">
                                            <div className="card card-h-min-about-us align-items-center p-1 justify-content-center ">
                                                <a 
                                                   href={`${data.url}`}
                                                    target="_blank"
                                                >
                                                    <div className="d-flex align-items-center our-client-images">
                                                        <img 
                                                            src={`${process.env.AWS_S3BUCKET_URL}${data.image}`}
                                                            alt={data.title}
                                                        />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="card-body  p-0 ps-btn-about-bottom">
                                                <a 
                                                   href={`${data.url}`}
                                                    target="_blank"
                                                >
                                                    <h4 className="card-title text-center pt-2 px-2">{data.title}</h4>
                                                    <h6 className="card-title  px-2" style={{ height: "50%" }}>{data.history_content}</h6>
                                                </a>
                                                <a 
                                                   href={`${data.url}`}
                                                    target="_blank"
                                                    className="h3 py-4 float-right "
                                                >
                                                <span className="button-link">{data.btn_text}</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                     ))} 
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <section className="ps-section__desc my-5 text-center ">
                                <h2 className="p-2">Our Partners</h2>
                            </section>
                        </div>

                         {PartnerData.data.map((data, key) => ( 
                            <>
                                <div className={key%2 ? 'about-section' : 'bg-02-section'}>
                                    <div className="container">
                                        {data.is_feature ? (
                                        <Slider {...carouselSetting} className="ps-carousel">
                                            
                                            <div className="ps-carousel__item">
                                                <section className="ps-section--block-grid ">
                                                    <div className="ps-section__thumbnail">
                                                        <a className="ps-section__image" href="#">
                                                            <img src={`${process.env.AWS_S3BUCKET_URL}${data.image}`} alt={data.title} />
                                                        </a>
                                                    </div>
                                                    <div className="ps-section__content">
                                                                <h2 className="">
                                                                    <u>
                                                                        <a href={`${data.url}`} target={"_blank"} className="font-weight-bold">
                                                                            {data.title}
                                                                        </a>
                                                                    </u>{" "}
                                                                    
                                                                </h2>
                                                                <div className="ps-section__desc">
                                                                    <div
                                                                        className="center-box"
                                                                        dangerouslySetInnerHTML={{
                                                                            __html: data.partners_content,
                                                                        }}></div>
                                                                </div>
                                                    </div>
                                                </section>
                                            </div>
                                            <div className="ps-carousel__item">
                                                <section className="ps-section__desc my-2 text-left ">
                                                    <h1 className={key%2 ? 'p-2' : 'p-2 text-white'} >Featured Project</h1>
                                                </section>
                                                <section className="ps-section--block-grid ">
                                                    <div className="ps-section__thumbnail">
                                                        <a className="ps-section__image" href="#">
                                                            <img src={`${process.env.AWS_S3BUCKET_URL}${data.feature_image}`} alt={data.feature_title} />
                                                        </a>
                                                    </div>
                                                    <div className="ps-section__content">
                                                                <h2 className="">
                                                                    <u>
                                                                        <a href={`${data.feature_url}`}
                                                                        target={"_blank"} 
                                                                        className="font-weight-bold">
                                                                            {data.feature_title}
                                                                        </a>
                                                                    </u>{" "}
                                                                    
                                                                </h2>
                                                                 <div
                                                                    className="center-box"
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: data.feature_content,
                                                                    }}></div>
                                                    </div>
                                                </section>
                                            </div>
                                    
                                        </Slider>
                                         ) : (
                                            <section className={key%2 ? 'ps-section--block-grid flex-wrap' : 'ps-section--block-grid'}>
                                                <div className="ps-section__thumbnail">
                                                    <a className="ps-section__image" href="#">
                                                        <img src={`${process.env.AWS_S3BUCKET_URL}${data.image}`} alt={data.title} />
                                                        {/* <img src="/static/img/about/babraham.jpg" alt="Babraham" /> */}
                                                    </a>
                                                </div>
                                                <div className="ps-section__content">
                                                    <h2 className="">
                                                        <u>
                                                            <a href={`${data.url}`} target={"_blank"} className="font-weight-bold">
                                                                {data.title}
                                                            </a>
                                                        </u>{" "}
                                                        
                                                    </h2>
                                                    <div className="ps-section__desc">
                                                        <div
                                                            className="center-box"
                                                            dangerouslySetInnerHTML={{
                                                                __html: data.partners_content,
                                                            }}></div>
                                                    </div>
                                                </div>
                                            </section>           
                                         )}
                                    </div>
                                </div>

                            </>   ) )} 

                       <div>
                            <div className="about-section">
                                <section className="container">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 text-center  mt-5">
                                    <h3 className="ps-section__title text-uppercase">
                                        <span className="font-weight-bolder  px-4 py-2">
                                        Latest reviews
                                        </span>
                                    </h3>
                                    <div className="ps-section__content py-5">
                                        <div className="container">
                                        <Slider {...carouselreviewSetting} className="ps-carousel">
                                            {ReviewData.data.map((data, key) => (
                                        <div className="ps-carousel__item" key={key}>
                                               <div className="ps-review">
                                                    <div className="ps-review__name">{data.title}</div>
                                                    <div className="ps-review__text mt-2">
                                                        <blockquote>
                                                            <i>
                                                            <div
                                                            className="center-box"
                                                            dangerouslySetInnerHTML={{
                                                                __html: data.review_content,
                                                            }}></div>
                                                            </i>
                                                            {/* <i>{data.review_content}</i> */}
                                                        </blockquote>
                                                    </div>
                                                    <div className="ps-review__review">
                                                        {/* <Rating /> */}
                                                         <span className="ps-rating">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                        </div>
                                            ))} 
                                        </Slider>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </section>
                            </div>

                            <div className="plus-section My-Announcements">
                                <section className="container">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 text-center mt-5">
                                    <h3 className="ps-section__title text-uppercase ">
                                        <span className="font-weight-bolder text-white  px-4 py-2">
                                        Announcements
                                        </span>
                                    </h3>
                                    <div className="ps-section__content py-5">
                                        <div className="container">
                                        <div className=" row d-flex justify-content-center">
                                            {AnnounceData.data.map((data, key) => ( 
                                            <div className="col-md-3 col-sm-6 d-flex flex-grow-1">
                                            <div className="card mt-3  align-items-center p-1">
                                                <a href={`${data.url}`} target={"_blank"} className="font-weight-bold">
                                                    <img
                                                        src={`${process.env.AWS_S3BUCKET_URL}${data.image}`} alt={data.title}
                                                    />
                                                </a>
                                               
                                                <div className="card-body  p-0 ps-btn-link-bottom">
                                                <a href={`${data.url}`} target={"_blank"}>
                                                    <h5 className="card-title  pt-2 px-2">
                                                    {data.title}
                                                    </h5>
                                                </a>

                                                <a href={`${data.url}`} target={"_blank"} className="h5">
                                                    <span className="button-link">READ MORE</span>
                                                </a>
                                                </div>
                                            </div>
                                            </div>
                                             ))} 
{/*                                              
                                            <div className="col-md-3 col-sm-6 d-flex flex-grow-1">
                                            <div className="card mt-3  align-items-center p-0 ">
                                                <a
                                                target={"_blank"}
                                                rel="noreferrer"
                                                href="/Applications/Animal-Health"
                                                >
                                                <Image
                                                    src={Cambridge}
                                                    alt="Stemnovate leading the way in building animal models for Pharma
                                        drug discovery and animal health industry"
                                                />
                                                </a>
                                                <div className="card-body p-0 ps-btn-link-bottom">
                                                <a
                                                    target={"_blank"}
                                                    rel="noreferrer"
                                                    href="/Applications/Animal-Health"
                                                >
                                                    <h5 className="card-title  pt-2 px-2">
                                                    Stemnovate leading the way in building animal
                                                    models for Pharma drug discovery and animal health
                                                    industry
                                                    </h5>
                                                </a>
                                                <a href="/Applications/Animal-Health" className="h5 ">
                                                    <span className="button-link">READ MORE</span>
                                                </a>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="col-md-3 col-sm-6 d-flex flex-grow-1">
                                            <div className="card mt-3  align-items-center p-0 ">
                                                <a
                                                target={"_blank"}
                                                rel="noreferrer"
                                                href="https://podcasts.apple.com/gb/podcast/discovery-matters/id1466149440"
                                                >
                                                <Image
                                                    src={discoverymatters}
                                                    alt="Ruchi Sharma-Women in Stem"
                                                />
                                                </a>
                                                <div className="card-body p-0 ps-btn-link-bottom">
                                                <a
                                                    target={"_blank"}
                                                    rel="noreferrer"
                                                    href="https://podcasts.apple.com/gb/podcast/discovery-matters/id1466149440"
                                                >
                                                    <h5 className="card-title  pt-2 px-2">
                                                    Listen to our CEO Dr Ruchi Sharma on the podcast
                                                    Discovery Matters: Women in Stem.
                                                    </h5>
                                                </a>
                                                <a
                                                    target={"_blank"}
                                                    rel="noreferrer"
                                                    href="https://podcasts.apple.com/gb/podcast/discovery-matters/id1466149440"
                                                    className="h5 "
                                                >
                                                    <span className="button-link">READ MORE</span>
                                                </a>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="col-md-3 col-sm-6 d-flex flex-grow-1">
                                            <div className="card mt-3  align-items-center p-1">
                                                <a href="/Products/Biobanking">
                                                <Image
                                                    src={announcementimg}
                                                    alt="Our 3Rs mission: Zero animal testing"
                                                />
                                                </a>
                                                <div className="card-body  p-0 ps-btn-link-bottom">
                                                <a href="/Products/Biobanking">
                                                    <h5 className="card-title  pt-2 px-2">
                                                    Our 3Rs mission: Zero animal testing. We innovate
                                                    technology for reducing, refining ...
                                                    </h5>
                                                </a>

                                                <a href="/Products/Biobanking" className="h5">
                                                    <span className="button-link">READ MORE</span>
                                                </a>
                                                </div>
                                            </div>
                                            </div>
                                             */}
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </section>
                            </div>
                            </div>
                        {/* <Testimonials /> */}
                        <Subscribe />
                    </div>
                </div>
            </main>
        </Container>
    );
};

export async function getServerSideProps({ query }) {
    var ProductData = [];

    const res = await fetch(baseUrl + "/api/aboutus/getdetails");
    console.log(res);
    const myProductData = await res.json();

    if (myProductData.status == 200) {
        ProductData = myProductData;
    } else {
        ProductData = [];
    }

    var HistoryData = [];

    const resHistory = await fetch(baseUrl + "/api/aboutus/gethistorydetails");
    
    const aboutHistoryData = await resHistory.json();

    if (aboutHistoryData.status == 200) {
        HistoryData = aboutHistoryData;
    } else {
        HistoryData = [];
    }

    var PartnerData = [];

    const resPartner = await fetch(baseUrl + "/api/aboutus/getpartnerdetails");
    
    const aboutPartnerData = await resPartner.json();

    if (aboutPartnerData.status == 200) {
        PartnerData = aboutPartnerData;
    } else {
        PartnerData = [];
    }

    var TeamData = [];

    const resTeam = await fetch(baseUrl + "/api/aboutus/getTeamdetails");
    
    const aboutTeamData = await resTeam.json();

    if (aboutTeamData.status == 200) {
        TeamData = aboutTeamData;
    } else {
        TeamData = [];
    }

    var ReviewData = [];

    const resReview = await fetch(baseUrl + "/api/aboutus/getReviewdetails");
    
    const aboutReviewData = await resReview.json();

    if (aboutReviewData.status == 200) {
        ReviewData = aboutReviewData;
    } else {
        ReviewData = [];
    }

     var AnnounceData = [];

    const resAnnounce = await fetch(baseUrl + "/api/aboutus/getAnnouncedetails");
    
    const aboutAnnounceData = await resAnnounce.json();

    if (aboutAnnounceData.status == 200) {
        AnnounceData = aboutAnnounceData;
    } else {
        AnnounceData = [];
    }
    
    // // Pass data to the page via props
    return { props: { ProductData, HistoryData, PartnerData, TeamData, ReviewData, AnnounceData } };
}


export default AboutUsScreen;  
