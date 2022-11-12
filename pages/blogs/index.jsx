import React from "react";
import Container from "~/components/layouts/Container";
import BreadCrumb from "~/components/elements/BreadCrumb";
import Subscribe from "~/components/shared/sections/Subscribe";

const breadcrumb = [
    {
        id: 1,
        text: "Home",
        url: "/",
    },

    {
        id: 2,
        text: "Blog",
    },
];

const Blogs = () => {
    return (
        <Container title="Blogs">
            <main className="ps-page ps-page--inner">
                <div className="ps-page__header  breadcrumb-h application-breadcrumb-bg">
                    <div className="container ">
                        <BreadCrumb breacrumb={breadcrumb} />
                        <h1 className="text-center  text-white p-2">Blog</h1>
                    </div>
                </div>
                <div className="ps-page__content">
                    <div className="ps-about">
                        <div className="about-section">
                            <div className="container">
                                <p className="text-center">Latest blog from Stemnovate</p>
                            </div>
                        </div>

                        <div className="">
                            <div className="container">
                                <div className="ps-page__content">
                                    <div className="ps-blog">
                                        <div className="ps-blog-items row" data-columns="3">
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                                <article className="ps-post ps-post--grid">
                                                    <div className="ps-post__thumbnail">
                                                        <a className="ps-post__overlay" href="#"></a>
                                                        <img src="/static/img/Blog/1.png" alt="ENHANCED MICROFLUIDIC DEVICES FOR BIOMEDICAL APPLICATIONS" />
                                                        <div className="ps-post__categories">
                                                            <a href="#">SCIENCE</a>
                                                        </div>
                                                    </div>
                                                    <div className="ps-post__wrapper justify-content-center">
                                                        <div className="ps-post__content justify-content-center">
                                                            <a className="ps-post__title text-center" href="/post/the-latest-tests-of-popular-masks-in-accordance-with-cv2s-standards">
                                                                ENHANCED MICROFLUIDIC DEVICES FOR BIOMEDICAL APPLICATIONS.....
                                                            </a>
                                                            <div className="ps-post__meta justify-content-center">
                                                                <span className="ps-post__created-at ">Sep 18, 2019</span>
                                                                <a className="ps-post__author" href="/blogs">
                                                                    Ruchi Sharma
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>

                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                                <article className="ps-post ps-post--grid">
                                                    <div className="ps-post__thumbnail">
                                                        <a className="ps-post__overlay" href="#"></a>
                                                        <img src="/static/img/Blog/2.jpg" alt="THE CREATION OF NEW SCALABLE MANUFACTURING PROCESS" />
                                                        <div className="ps-post__categories">
                                                            <a href="#">PRODUCT</a>
                                                        </div>
                                                    </div>
                                                    <div className="ps-post__wrapper justify-content-center">
                                                        <div className="ps-post__content justify-content-center">
                                                            <a className="ps-post__title text-center" href="/post/the-latest-tests-of-popular-masks-in-accordance-with-cv2s-standards">
                                                                THE CREATION OF NEW SCALABLE MANUFACTURING PROCESS.....
                                                            </a>
                                                            <div className="ps-post__meta justify-content-center">
                                                                <span className="ps-post__created-at ">May 05, 2020</span>
                                                                <a className="ps-post__author" href="/blogs">
                                                                    Ruchi Sharma
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>

                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                                <article className="ps-post ps-post--grid">
                                                    <div className="ps-post__thumbnail">
                                                        <a className="ps-post__overlay" href="#"></a>
                                                        <img src="/static/img/Blog/3.jpg" alt="HOW STEMNOVATE WILL CHANGE DRUG DEVELOPMENT" />
                                                        <div className="ps-post__categories">
                                                            <a href="#">SCIENCE</a>
                                                        </div>
                                                    </div>
                                                    <div className="ps-post__wrapper justify-content-center">
                                                        <div className="ps-post__content justify-content-center">
                                                            <a className="ps-post__title text-center" href="/post/the-latest-tests-of-popular-masks-in-accordance-with-cv2s-standards">
                                                                HOW STEMNOVATE WILL CHANGE DRUG DEVELOPMENT .....
                                                            </a>
                                                            <div className="ps-post__meta justify-content-center">
                                                                <span className="ps-post__created-at ">Aug 24, 2019</span>
                                                                <a className="ps-post__author" href="/blogs">
                                                                    Ruchi Sharma
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>

                                        <div className="ps-blog-items row" data-columns="3">
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                                <article className="ps-post ps-post--grid">
                                                    <div className="ps-post__thumbnail">
                                                        <a className="ps-post__overlay" href="#"></a>
                                                        <img src="/static/img/Blog/4.jpg" alt="HOW A ‘CYP OF COFFEE’ CAN HELP US TO UNDERSTAND" />
                                                        <div className="ps-post__categories">
                                                            <a href="#">PRODUCT</a>
                                                        </div>
                                                    </div>
                                                    <div className="ps-post__wrapper justify-content-center">
                                                        <div className="ps-post__content justify-content-center">
                                                            <a className="ps-post__title text-center" href="/post/the-latest-tests-of-popular-masks-in-accordance-with-cv2s-standards">
                                                                HOW A ‘CYP OF COFFEE’ CAN HELP US TO UNDERSTAND....
                                                            </a>
                                                            <div className="ps-post__meta justify-content-center">
                                                                <span className="ps-post__created-at ">Aug 24, 2019</span>
                                                                <a className="ps-post__author" href="/blogs">
                                                                    Ruchi Sharma
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className=" d-flex justify-content-center">
                                    <div className="d-flex flex-grow-1 flex-row flex-wrap justify-content-center">
                                        <div class="card card-h-min align-items-center p-1 justify-content-center ">
                                            <a href="#" target={"_blank"}>
                                                <div className="d-flex align-items-center">
                                                    <img src="/static/img/Blog/1.png" />
                                                    <h2>Enhanced microfluidic devices for biomedical applications</h2>
                                                    <p>May 05, 2020 - Ruchi Sharma</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        <Subscribe />
                    </div>
                </div>
            </main>
        </Container>
    );
};

export default Blogs;
