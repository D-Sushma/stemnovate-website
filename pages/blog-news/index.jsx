import React from "react"
import { baseUrl } from "~/repositories/Repository"
import PropTypes from "prop-types"
import { useState } from "react"
import Slider from "react-slick"
import Link from "next/link"
import dynamic from "next/dynamic"
import { TbEdit, TbCalendarEvent } from "react-icons/tb"
import moment from "moment"

const Image = dynamic(() => import("~/components/elements/Image"), {
  loading: () => <p>Loading...</p>
})
const Container = dynamic(() => import("~/components/layouts/Container"), {
  loading: () => <p>Loading...</p>
})
const BreadCrumb = dynamic(() => import("~/components/elements/BreadCrumb"), {
  loading: () => <p>Loading...</p>
})
const NextArrow = dynamic(
  () => import("~/components/elements/carousel/NextArrow"),
  { loading: () => <p>Loading...</p> }
)
const PrevArrow = dynamic(
  () => import("~/components/elements/carousel/PrevArrow"),
  { loading: () => <p>Loading...</p> }
)
const Subscribe = dynamic(
  () => import("~/components/shared/sections/Subscribe"),
  { loading: () => <p>Loading...</p> }
)

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
  const { PostList, ProductData } = props
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

  const [blog_desp, setBlog_Desp] = React.useState("")

  React.useEffect(() => {
    getDesp()
  }, [])

  const getDesp = async () => {
    var slug = featuredPostLists[0]?.slug

    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    var raw = JSON.stringify({
      slug: slug
    })

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    }

    const response1 = await fetch(
      baseUrl + "/api/blog/getBlogs",
      requestOptions
    )
    const PostList1 = await response1.json()
    if (PostList1.status == 200) {
      setBlog_Desp(PostList1.data)
    }
  }

  var ogImage = ""
  var images1 = []
  var products_img1 = ProductData?.data[0]?.og_img?.split(",")
  var ogDesc = ProductData?.data[0]?.og_desc
  if (products_img1 && products_img1.length > 0) {
    products_img1.map((item) => {
      images1.push(`${process.env.AWS_S3BUCKET_URL}${item}`)
    })
    ogImage = images1[0]
  }

  return (
    <Container
      title="Blogs | Your Drug Discovery Platform"
      ogimg={ogImage}
      description={ogDesc}
    >
      <main className="ps-page ps-page--inner">
        <div
          style={{
            backgroundImage: `url(${process.env.AWS_S3BUCKET_URL}${ProductData?.data[0]?.banner_img})`
          }}
          className="ps-page__header  breadcrumb-h application-breadcrumb-bg"
        >
          <div className="container ">
            <BreadCrumb breacrumb={breadcrumb} />
            <h1 className="text-center  text-white p-2">
              {ProductData?.data[0]?.banner_content}
            </h1>
          </div>
        </div>
        <div className="ps-page__content">
          <div className="ps-about">
            <div className=" bg-02-section">
              <div className="container">
                <div className="ps-page__header">
                  <h3 className="ps-page__heading text-white">FEATURED BLOG</h3>
                </div>
                <div className="ps-page__content">
                  <div className="ps-blog">
                    <div className="row">
                      <div className="col-md-12">
                        {featuredPostLists[0] ? (
                          <section className="ps-section--banner_blog ps-top-banners">
                            <div className="ps-section__overlay">
                              <div className="ps-section__loading"></div>
                            </div>
                            <div
                              style={{ marginBottom: "8%", marginTop: "-3%" }}
                              className="container"
                            >
                              <section className="ps-section--block-grid ">
                                <div className="ps-section__thumbnail">
                                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <article
                                      style={{
                                        background: "#041b4a"
                                      }}
                                      className="ps-post ps-post--grid blog-news"
                                    >
                                      <div className="ps-post__thumbnail">
                                        <Link
                                          href={`/blogs/${featuredPostLists[0].slug}`}
                                          prefetch={false}
                                        >
                                          <div className="ps-post__overlay link-hover-thumb-shape"></div>
                                        </Link>
                                        <Image
                                          loader={myLoader}
                                          src={`${process.env.AWS_S3BUCKET_URL}${featuredPostLists[0].thumbnail}`}
                                          unoptimized={true}
                                          alt={featuredPostLists[0].name}
                                          width="386"
                                          height="218"
                                          layout="responsive"
                                          objectFit="contain"
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
                                            prefetch={false}
                                          >
                                            <div className="ps-post__title text-center blog-news-title text-white span-with-link">
                                              {featuredPostLists[0].name}
                                            </div>
                                          </Link>
                                          <div className="ps-post__meta justify-content-center text-white">
                                            <Link
                                              href={`/blogs/${featuredPostLists[0].slug}`}
                                              prefetch={false}
                                            >
                                              <div className="button button--yellow">
                                                <span
                                                  className="h3 span-with-link"
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
                                </div>

                                <div className="ps-section__content ">
                                  <div className="ps-section__desc">
                                    <h1
                                      style={{ color: "#fff" }}
                                      className="mb-5"
                                    >
                                      {blog_desp[0]?.name}
                                    </h1>
                                    <text
                                      style={{ color: "#fff", fontSize: 20 }}
                                      className="mt-5,mb-5"
                                    >
                                      {blog_desp[0]?.description}
                                    </text>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <span className="text-left">
                                        <TbEdit color="#fff" className="mr-2" />{" "}
                                        <i style={{ color: "#fff" }}>
                                          {blog_desp[0]?.authorName !== null
                                            ? blog_desp[0]?.authorName
                                            : blog_desp[0]?.authorId}
                                        </i>
                                      </span>
                                      <br />
                                      <TbCalendarEvent
                                        color="#fff"
                                        className="mr-2"
                                      />{" "}
                                      <span className="text-right">
                                        <i style={{ color: "#fff" }}>
                                          {moment(
                                            blog_desp[0]?.updated_at
                                          ).format("dddd, DD MMM YYYY ")}
                                        </i>
                                      </span>
                                    </div>
                                    <div className="col-md-12"></div>
                                  </div>
                                </div>
                              </section>
                            </div>
                          </section>
                        ) : null}
                      </div>
                    </div>

                    <div className="ps-page__header">
                      <h3 className="ps-page__heading text-white">BLOG</h3>
                    </div>
                    <div
                      className="ps-blog-items row row-reverse"
                      data-columns="4"
                    >
                      {postLists.map((data, key) => (
                        <div
                          className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12"
                          key={key}
                        >
                          <article className="ps-post ps-post--grid blog-news">
                            <div className="ps-post__thumbnail">
                              <Link
                                href={`/blogs/${data.slug}`}
                                prefetch={false}
                              >
                                <div className="ps-post__overlay link-hover-thumb-shape"></div>
                              </Link>
                              <Image
                                loader={myLoader}
                                src={`${process.env.AWS_S3BUCKET_URL}${data.thumbnail}`}
                                alt={data.name}
                                width="251"
                                height="141"
                                layout="responsive"
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
                                <Link
                                  href={`/blogs/${data.slug}`}
                                  prefetch={false}
                                >
                                  <div className="ps-post__title text-center blog-news-title span-with-link">
                                    {data.name}
                                  </div>
                                </Link>
                              </div>
                            </div>
                            <div className="ps-post__meta justify-content-center py-4">
                              <Link
                                href={`/blogs/${data.slug}`}
                                prefetch={false}
                              >
                                <div className="ps-post__author blog-author">
                                  <span className="h3 my-4 span-with-link">
                                    {" "}
                                    Read More{" "}
                                    <span className="visually-hidden">
                                      Read More About {data.name}
                                    </span>
                                  </span>
                                </div>
                              </Link>
                            </div>
                          </article>
                        </div>
                      ))}
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
                                    prefetch={false}
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
                                loader={myLoader}
                                layout="responsive"
                              />
                            </div>
                            <div className="ps-post__wrapper justify-content-center pb-4">
                              <div className="ps-post__content justify-content-center">
                                <a
                                  className="ps-post__title text-center blog-news-title"
                                  target={"_blank"}
                                  href={`${data.url}`}
                                  rel="noreferrer"
                                >
                                  {data?.title?.substring(0, 70) + "..."}
                                </a>
                              </div>
                            </div>
                            <div className="ps-post__meta justify-content-center py-4">
                              <a
                                className="ps-post__author blog-author"
                                target={"_blank"}
                                href={`${data.url}`}
                                rel="noreferrer"
                              >
                                <span className="h3 my-4"> Read More </span>
                                <span className="h3 my-4 visually-hidden">
                                  Read more about the author and their blog post
                                </span>
                              </a>
                            </div>
                          </article>
                        </div>
                      ))}
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
  const response = await fetch(baseUrl + "/api/blog/getBlogs")
  const PostList = await response.json()

  var ProductData = []
  var requestParam = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      page_name: "Newsroom"
    })
  }
  const res = await fetch(
    baseUrl + "/api/header_banners/getBanners",
    requestParam
  )
  const myProductData = await res.json()

  if (myProductData.status == 200) {
    ProductData = myProductData
  } else {
    ProductData = []
  }

  return { props: { PostList, ProductData } }
}

export default Blogs

Blogs.propTypes = {
  PostList: PropTypes.any
}
