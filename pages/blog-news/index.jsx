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
import Link from "next/link"

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
  const [blogNewsLists] = useState(PostList.blogNewsDetails)
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
    <Container
      title="Blogs"
      description="Stemnovate page for blogs and compnay news"
    >
      <main className="ps-page ps-page--inner">
        <div className="ps-page__header  breadcrumb-h application-breadcrumb-bg">
          <div className="container ">
            <BreadCrumb breacrumb={breadcrumb} />
            <h1 className="text-center  text-white p-2">NewsRoom</h1>
          </div>
        </div>
        <div className="ps-page__content">
          <div className="ps-about">
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
                              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <article className="ps-post ps-post--grid blog-news">
                                  <div className="ps-post__thumbnail">
                                    <Link
                                      href={`/blogs/${featuredPostLists[0].slug}`}
                                    >
                                      <div className="ps-post__overlay link-hover-thumb-shape"></div>
                                    </Link>
                                    <Image
                                      loader={myLoader}
                                      src={`${process.env.AWS_S3BUCKET_URL}${featuredPostLists[0].thumbnail}`}
                                      unoptimized={false}
                                      alt={featuredPostLists[0].name}
                                      width="251"
                                      height="141"
                                      layout="responsive"
                                      placeholder="blur"
                                      blurDataURL="/static/image/blurred.png"
                                    />
                                  </div>
                                  <div
                                    className="ps-post__wrapper justify-content-center "
                                    style={{
                                      background: "#041b4a"
                                    }}
                                  >
                                    <div className="ps-post__content justify-content-center">
                                      <Link
                                        href={`/blogs/${featuredPostLists[0].slug}`}
                                      >
                                        <div className="ps-post__title text-center blog-news-title text-white span-with-link">
                                          {featuredPostLists[0].name}
                                        </div>
                                      </Link>
                                      <div className="ps-post__meta justify-content-center py-4 text-white">
                                        <Link
                                          href={`/blogs/${featuredPostLists[0].slug}`}
                                        >
                                          <div className="button button--yellow">
                                            <span
                                              className="h3 my-2 span-with-link"
                                              style={{
                                                fontSize: "22px"
                                              }}
                                            >
                                              {" "}
                                              Read More
                                            </span>
                                          </div>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </article>
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
                      {/* ------------------------------ map All Blog ------------------------------  */}
                      {postLists.map((data, key) => (
                        <div
                          className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12"
                          key={key}
                        >
                          <article className="ps-post ps-post--grid blog-news">
                            <div className="ps-post__thumbnail">
                              <Link href={`/blogs/${data.slug}`}>
                                <div className="ps-post__overlay link-hover-thumb-shape"></div>
                              </Link>
                              <Image
                                loader={myLoader}
                                src={`${process.env.AWS_S3BUCKET_URL}${data.thumbnail}`}
                                unoptimized={false}
                                alt={data.name}
                                width="251"
                                height="141"
                                layout="responsive"
                                placeholder="blur"
                                blurDataURL="/static/image/blurred.png"
                              />
                              <div className="ps-post__categories">
                                <div
                                  className="div-link"
                                  href={`/blogs/${data.slug}`}
                                >
                                  {data.tag}
                                </div>
                              </div>
                            </div>
                            <div className="ps-post__wrapper justify-content-center">
                              <div className="ps-post__content justify-content-center">
                                <Link href={`/blogs/${data.slug}`}>
                                  <div className="ps-post__title text-center blog-news-title span-with-link">
                                    {data.name}
                                  </div>
                                </Link>
                                <div className="ps-post__meta justify-content-center py-4">
                                  <Link href={`/blogs/${data.slug}`}>
                                    <div className="ps-post__author blog-author">
                                      <span className="h3 my-4 span-with-link">
                                        {" "}
                                        Read More
                                      </span>
                                    </div>
                                  </Link>
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
                                  <Link
                                    href={`/blogs/${featuredPostLists[1].slug}`}
                                  >
                                    <div className="bg-warning ps-banner__shop link-hover-thumb-shape">
                                      Read More
                                    </div>
                                  </Link>
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
                    <div
                      className="ps-blog-items row row-reverse"
                      data-columns="4"
                    >
                      {blogNewsLists.map((data, key) => (
                        <div
                          className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12"
                          key={key}
                        >
                          <article className="ps-post ps-post--grid blog-news">
                            <div className="ps-post__thumbnail">
                              <a
                                className="ps-post__overlay"
                                target={"_blank"}
                                href={`${data.url}`}
                                rel="noreferrer"
                              ></a>
                              <Image
                                src={`${process.env.AWS_S3BUCKET_URL}${data.image}`}
                                alt={data.title}
                                width={1000}
                                height={545}
                                placeholder="blur"
                                blurDataURL="/static/image/blurred.png"
                                loader={myLoader}
                                unoptimized={false}
                                layout="responsive"
                              />
                            </div>
                            <div className="ps-post__wrapper justify-content-center">
                              <div className="ps-post__content justify-content-center">
                                <a
                                  className="ps-post__title text-center blog-news-title"
                                  target={"_blank"}
                                  href={`${data.url}`}
                                  rel="noreferrer"
                                >
                                  {data.title}
                                </a>
                                <div className="ps-post__meta justify-content-center py-4">
                                  <a
                                    className="ps-post__author blog-author"
                                    target={"_blank"}
                                    href={`${data.url}`}
                                    rel="noreferrer"
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
            <Subscribe />
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
