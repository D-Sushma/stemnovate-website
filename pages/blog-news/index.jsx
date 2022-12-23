import React from "react"
import Container from "~/components/layouts/Container"
import BreadCrumb from "~/components/elements/BreadCrumb"
import Subscribe from "~/components/shared/sections/Subscribe"
import { baseUrl } from "~/repositories/Repository"
import PropTypes from "prop-types"
import { useState } from "react"
import Image from "next/image"
import Slider from "react-slick"
import NextArrow from "~/components/elements/carousel/NextArrow"
import PrevArrow from "~/components/elements/carousel/PrevArrow"

const breadcrumb = [
  {
    id: 1,
    text: "Home",
    url: "/"
  },

  {
    id: 2,
    text: "Newsroom"
  }
]

const Blogs = (props) => {
  const { PostList } = props
  const [postLists] = useState(PostList.data)
  const [featuredPostLists] = useState(PostList.featuredBlog)
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 55}`
  }

  const carouselSetting = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    dots: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }

  return (
    <Container title="Blogs">
      <main className="ps-page ps-page--inner">
        <div className="ps-page__header  breadcrumb-h application-breadcrumb-bg">
          <div className="container ">
            <BreadCrumb breacrumb={breadcrumb} />
            <h1 className="text-center  text-white p-2">NewsRoom</h1>
          </div>
        </div>
        <div className="ps-page__content">
          <div className="ps-about">
            {/* <div className="about-section"></div>  */}

            <div className=" bg-02-section">
              <div className="container">
                <div className="ps-page__header">
                  <h3 className="ps-page__heading text-white">BLOG</h3>
                </div>

                <div className="ps-page__content">
                  <div className="ps-blog">
                    <div className="row">
                      <div className="col-md-12 my-5">
                        {featuredPostLists[0] ? (
                          <section className="ps-section--banner ps-top-banners">
                            <div className="ps-section__overlay">
                              <div className="ps-section__loading"></div>
                            </div>
                            <Slider
                              {...carouselSetting}
                              className="ps-carousel ps-carousel--fullwidth "
                            >
                              <div>
                                <div
                                  className="ps-banner"
                                  style={{
                                    backgroundImage: `url(${process.env.AWS_S3BUCKET_URL}${featuredPostLists[0].thumbnail})`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    width: "100%",
                                    maxWidth: "1440px",
                                    margin: "0 auto"
                                  }}
                                >
                                  <div className="container container-initial">
                                    <div className="ps-banner__block">
                                      <div className="ps-banner__content">
                                        <h1 className="ps-banner__title text-white">
                                          {featuredPostLists[0].tag}
                                        </h1>
                                        <div className="ps-banner__desc text-white">
                                          {featuredPostLists[0].name}
                                        </div>
                                        <div className="ps-banner__btn-group"></div>
                                        <a
                                          className="bg-warning ps-banner__shop"
                                          href={`/blogs/${featuredPostLists[0].slug}`}
                                        >
                                          Read More
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Slider>
                          </section>
                        ) : null}
                      </div>
                    </div>
                    <div
                      className="ps-blog-items row row-reverse"
                      data-columns="4"
                    >
                      {/* <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                        <article className="ps-post ps-post--grid blog-news">
                          <div className="ps-post__thumbnail">
                            <a className="ps-post__overlay" href="/blogs/5"></a>
                            <img
                              src="/static/img/blog/blog5.jpg"
                              alt="Stemnovate´s visit to Anglia Ruskin University"
                            />
                            <div className="ps-post__categories">
                              <a href="/blogs/5">SCIENCE</a>
                            </div>
                          </div>
                          <div className="ps-post__wrapper justify-content-center">
                            <div className="ps-post__content justify-content-center">
                              <a
                                className="ps-post__title text-center blog-news-title"
                                href="/blogs/5"
                              >
                                Stemnovate´s visit to Anglia Ruskin University
                                to support young scientists.
                              </a>
                              <div className="ps-post__meta justify-content-center py-4 py-4">
                                <a
                                  className="ps-post__author blog-author"
                                  href="/blogs/5"
                                >
                                  <span className="h3 my-4">
                                    <span className="h3 my-4"> Read More</span>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                        <article className="ps-post ps-post--grid blog-news">
                          <div className="ps-post__thumbnail">
                            <a className="ps-post__overlay" href="/blogs/1"></a>
                            <img
                              src="/static/img/blog/1.jpg"
                              alt="ENHANCED MICROFLUIDIC DEVICES FOR BIOMEDICAL APPLICATIONS."
                            />
                            <div className="ps-post__categories">
                              <a href="/blogs/1">SCIENCE</a>
                            </div>
                          </div>
                          <div className="ps-post__wrapper justify-content-center">
                            <div className="ps-post__content justify-content-center">
                              <a
                                className="ps-post__title text-center blog-news-title"
                                href="/blogs/1"
                              >
                                ENHANCED MICROFLUIDIC DEVICES FOR BIOMEDICAL
                                APPLICATIONS.....
                              </a>
                              <div className="ps-post__meta justify-content-center py-4">
                                <a
                                  className="ps-post__author blog-author"
                                  href="/blogs/1"
                                >
                                  <span className="h3 my-4"> Read More</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>

                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                        <article className="ps-post ps-post--grid blog-news">
                          <div className="ps-post__thumbnail">
                            <a className="ps-post__overlay" href="/blogs/2"></a>
                            <img
                              src="/static/img/blog/2.jpg"
                              alt="THE CREATION OF NEW SCALABLE MANUFACTURING PROCESS"
                            />
                            <div className="ps-post__categories">
                              <a href="/blogs/2">PRODUCT</a>
                            </div>
                          </div>
                          <div className="ps-post__wrapper justify-content-center">
                            <div className="ps-post__content justify-content-center">
                              <a
                                className="ps-post__title text-center blog-news-title"
                                href="/blogs/2"
                              >
                                THE CREATION OF NEW SCALABLE MANUFACTURING
                                PROCESS.....
                              </a>
                              <div className="ps-post__meta justify-content-center py-4">
                                <a
                                  className="ps-post__author blog-author"
                                  href="/blogs/2"
                                >
                                  <span className="h3 my-4"> Read More</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>

                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                        <article className="ps-post ps-post--grid blog-news">
                          <div className="ps-post__thumbnail">
                            <a className="ps-post__overlay" href="/blogs/3"></a>
                            <img
                              src="/static/img/blog/3.jpg"
                              alt="HOW STEMNOVATE WILL CHANGE DRUG DEVELOPMENT"
                            />
                            <div className="ps-post__categories">
                              <a href="/blogs/3">SCIENCE</a>
                            </div>
                          </div>
                          <div className="ps-post__wrapper justify-content-center">
                            <div className="ps-post__content justify-content-center">
                              <a
                                className="ps-post__title text-center blog-news-title"
                                href="/blogs/3"
                              >
                                HOW STEMNOVATE WILL CHANGE DRUG DEVELOPMENT
                                .....
                              </a>
                              <div className="ps-post__meta justify-content-center py-4">
                                <a
                                  className="ps-post__author blog-author"
                                  href="/blogs/3"
                                >
                                  <span className="h3 my-4"> Read More</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>

                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                        <article className="ps-post ps-post--grid blog-news">
                          <div className="ps-post__thumbnail">
                            <a className="ps-post__overlay" href="/blogs/4"></a>
                            <img
                              src="/static/img/blog/4.jpg"
                              alt="HOW A ‘CYP OF COFFEE’ CAN HELP US TO UNDERSTAND"
                            />
                            <div className="ps-post__categories">
                              <a href="/blogs/4">PRODUCT</a>
                            </div>
                          </div>
                          <div className="ps-post__wrapper justify-content-center">
                            <div className="ps-post__content justify-content-center">
                              <a
                                className="ps-post__title text-center blog-news-title"
                                href="/blogs/4"
                              >
                                HOW A ‘CYP OF COFFEE’ CAN HELP US TO
                                UNDERSTAND....
                              </a>
                              <div className="ps-post__meta justify-content-center py-4">
                                <a
                                  className="ps-post__author blog-author"
                                  href="/blogs/4"
                                >
                                  <span className="h3 my-4"> Read More</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div> */}
                      {/* ------------------------------ map All Blog ------------------------------  */}
                      {postLists.map((data, key) => (
                        <div
                          className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12"
                          key={key}
                        >
                          <article className="ps-post ps-post--grid blog-news">
                            <div className="ps-post__thumbnail">
                              <a
                                className="ps-post__overlay"
                                href={`/blogs/${data.slug}`}
                              ></a>
                              <Image
                                loader={myLoader}
                                src={`${process.env.AWS_S3BUCKET_URL}${data.thumbnail}`}
                                unoptimized={false}
                                alt={data.name}
                                width="251"
                                height="141"
                                layout="responsive"
                              />
                              <div className="ps-post__categories">
                                <a href={`/blogs/${data.slug}`}>{data.tag}</a>
                              </div>
                            </div>
                            <div className="ps-post__wrapper justify-content-center">
                              <div className="ps-post__content justify-content-center">
                                <a
                                  className="ps-post__title text-center blog-news-title"
                                  href={`/blogs/${data.slug}`}
                                >
                                  {data.name}
                                </a>
                                <div className="ps-post__meta justify-content-center py-4">
                                  <a
                                    className="ps-post__author blog-author"
                                    href={`/blogs/${data.slug}`}
                                  >
                                    <span className="h3 my-4"> Read More</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </article>
                        </div>
                      ))}

                      {/* ------------------------------ map All Blog ------------------------------  */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-12 my-5">
                  {/* <BlogSlider /> */}
                  {featuredPostLists[1] ? (
                    <section className="ps-section--banner ps-top-banners">
                      <div className="ps-section__overlay">
                        <div className="ps-section__loading"></div>
                      </div>
                      <Slider
                        {...carouselSetting}
                        className="ps-carousel ps-carousel--fullwidth "
                      >
                        <div>
                          <div
                            className="ps-banner"
                            style={{
                              backgroundImage: `url(${process.env.AWS_S3BUCKET_URL}${featuredPostLists[1].thumbnail})`,
                              backgroundPosition: "center",
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                              width: "100%",
                              maxWidth: "1440px",
                              margin: "0 auto"
                            }}
                          >
                            <div className="container container-initial">
                              <div className="ps-banner__block">
                                <div className="ps-banner__content">
                                  <h1 className="ps-banner__title text-white">
                                    {featuredPostLists[1].tag}
                                  </h1>
                                  <div className="ps-banner__desc text-white">
                                    {featuredPostLists[1].name}
                                  </div>
                                  <div className="ps-banner__btn-group"></div>
                                  <a
                                    className="bg-warning ps-banner__shop"
                                    href={`/blogs/${featuredPostLists[1].slug}`}
                                  >
                                    Read More
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Slider>
                    </section>
                  ) : null}
                </div>
              </div>
            </div>
            <div className=" bg-02-section">
              <div className="container">
                <div className="ps-page__header">
                  <h3 className="ps-page__heading text-white">NEWS</h3>
                </div>
                <div className="ps-page__content">
                  <div className="ps-blog">
                    <div className="ps-blog-items row" data-columns="4">
                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                        <article className="ps-post ps-post--grid blog-news">
                          <div className="ps-post__thumbnail">
                            <a
                              className="ps-post__overlay"
                              target={"_blank"}
                              href="http://ow.ly/FIa450KbHet"
                              rel="noreferrer"
                            ></a>
                            <img
                              src="/static/img/blog/stemnovate-team.jpg"
                              alt="Good prognosis for drug discovery pioneer after £1M investment"
                            />
                          </div>
                          <div className="ps-post__wrapper justify-content-center">
                            <div className="ps-post__content justify-content-center">
                              <a
                                className="ps-post__title text-center blog-news-title"
                                target={"_blank"}
                                href="http://ow.ly/FIa450KbHet"
                                rel="noreferrer"
                              >
                                Good prognosis for drug discovery pioneer after
                                £1M investment
                              </a>
                              <div className="ps-post__meta justify-content-center py-4">
                                <a
                                  className="ps-post__author blog-author"
                                  target={"_blank"}
                                  href="http://ow.ly/FIa450KbHet"
                                  rel="noreferrer"
                                >
                                  <span className="h3 my-4"> Read More</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                        <article className="ps-post ps-post--grid blog-news">
                          <div className="ps-post__thumbnail">
                            <a
                              className="ps-post__overlay"
                              target={"_blank"}
                              href="https://www.cambridgeindependent.co.uk/business/21towatch-shortlist-of-innovative-people-companies-and-th-9238051/"
                              rel="noreferrer"
                            ></a>
                            <img
                              src="/static/img/blog/5.jpg"
                              alt="Dr Ruchi is one of the judges for #21 to watch 2022"
                            />
                          </div>
                          <div className="ps-post__wrapper justify-content-center">
                            <div className="ps-post__content justify-content-center">
                              <a
                                className="ps-post__title text-center blog-news-title"
                                target={"_blank"}
                                href="https://www.cambridgeindependent.co.uk/business/21towatch-shortlist-of-innovative-people-companies-and-th-9238051/"
                                rel="noreferrer"
                              >
                                Our CEO Dr Ruchi is one of the judges for #21 to
                                watch 2022.
                              </a>
                              <div className="ps-post__meta justify-content-center py-4">
                                <a
                                  className="ps-post__author blog-author"
                                  target={"_blank"}
                                  href="https://www.cambridgeindependent.co.uk/business/21towatch-shortlist-of-innovative-people-companies-and-th-9238051/"
                                  rel="noreferrer"
                                >
                                  <span className="h3 my-4"> Read More</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>

                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                        <article className="ps-post ps-post--grid blog-news">
                          <div className="ps-post__thumbnail">
                            <a
                              className="ps-post__overlay"
                              target={"_blank"}
                              href="https://www.cambridgeindependent.co.uk/business/stemnovate-raises-more-than-1m-to-expand-commercialisation-9210105/"
                              rel="noreferrer"
                            ></a>
                            <img
                              src="/static/img/blog/6.jpg"
                              alt="Stemnovate raises million for commercialisation of drug discovery platforms 2021"
                            />
                          </div>
                          <div className="ps-post__wrapper justify-content-center">
                            <div className="ps-post__content justify-content-center">
                              <a
                                className="ps-post__title text-center blog-news-title"
                                target={"_blank"}
                                href="https://www.cambridgeindependent.co.uk/business/stemnovate-raises-more-than-1m-to-expand-commercialisation-9210105/"
                                rel="noreferrer"
                              >
                                Stemnovate raises million for commercialisation
                                of drug discovery platforms 2021
                              </a>
                              <div className="ps-post__meta justify-content-center py-4">
                                <a
                                  className="ps-post__author blog-author"
                                  target={"_blank"}
                                  href="https://www.cambridgeindependent.co.uk/business/stemnovate-raises-more-than-1m-to-expand-commercialisation-9210105/"
                                  rel="noreferrer"
                                >
                                  <span className="h3 my-4"> Read More</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>

                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                        <article className="ps-post ps-post--grid blog-news">
                          <div className="ps-post__thumbnail">
                            <a
                              className="ps-post__overlay"
                              target={"_blank"}
                              href="https://youtu.be/OOplDmqtNac"
                              rel="noreferrer"
                            ></a>
                            <img
                              src="/static/img/blog/7.jpg"
                              alt="CEO recognised as #21 to watch in Cambridge in 2020"
                            />
                          </div>
                          <div className="ps-post__wrapper justify-content-center">
                            <div className="ps-post__content justify-content-center">
                              <a
                                className="ps-post__title text-center blog-news-title"
                                target={"_blank"}
                                href="https://youtu.be/OOplDmqtNac"
                                rel="noreferrer"
                              >
                                Our CEO recognised as #21 to watch in Cambridge
                                in 2020
                              </a>
                              <div className="ps-post__meta justify-content-center py-4">
                                <a
                                  className="ps-post__author blog-author"
                                  target={"_blank"}
                                  href="https://youtu.be/OOplDmqtNac"
                                  rel="noreferrer"
                                >
                                  <span className="h3 my-4"> Read More</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>

                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                        <article className="ps-post ps-post--grid blog-news">
                          <div className="ps-post__thumbnail">
                            <a
                              className="ps-post__overlay"
                              target={"_blank"}
                              href="https://www.businessweekly.co.uk/news/biomedtech/1-million-funding-cambridge-‘liver-chip’-pioneers"
                              rel="noreferrer"
                            ></a>
                            <img
                              src="/static/img/blog/8.jpg"
                              alt="Stemnovate receives prestigious Innovate UK funding"
                            />
                          </div>
                          <div className="ps-post__wrapper justify-content-center">
                            <div className="ps-post__content justify-content-center">
                              <a
                                className="ps-post__title text-center blog-news-title"
                                target={"_blank"}
                                href="https://www.businessweekly.co.uk/news/biomedtech/1-million-funding-cambridge-‘liver-chip’-pioneers"
                                rel="noreferrer"
                              >
                                Stemnovate receives prestigious Innovate UK
                                funding for a million to develop chip technology
                                - 2017
                              </a>
                              <div className="ps-post__meta justify-content-center py-4">
                                <a
                                  className="ps-post__author blog-author"
                                  target={"_blank"}
                                  href="https://www.businessweekly.co.uk/news/biomedtech/1-million-funding-cambridge-‘liver-chip’-pioneers"
                                  rel="noreferrer"
                                >
                                  <span className="h3 my-4"> Read More</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Subscribe />
            {/* <BlogGrid /> */}
          </div>
        </div>
      </main>
    </Container>
  )
}
export async function getServerSideProps() {
  // Fetch data from external API

  const response = await fetch(baseUrl + "/api/blog/getBlogs")
  const PostList = await response.json()
  // Pass data to the page via props
  return { props: { PostList } }
}

export default Blogs

Blogs.propTypes = {
  PostList: PropTypes.any
}
