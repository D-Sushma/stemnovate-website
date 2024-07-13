import React, { useEffect, useState } from "react"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "next-share"
import { useRouter } from "next/router"
import { baseUrl } from "~/repositories/Repository"
import PropTypes from "prop-types"
import moment from "moment"
import { scroller } from "react-scroll"
import { TbEdit, TbCalendarEvent } from "react-icons/tb"
import Link from "next/link"
import dynamic from "next/dynamic"
import { FaInstagram } from "react-icons/fa"

const Container = dynamic(() => import("~/components/layouts/Container"), {
  loading: () => <p>Loading...</p>
})
const BreadCrumb = dynamic(() => import("~/components/elements/BreadCrumb"), {
  loading: () => <p>Loading...</p>
})
const Loader = dynamic(() => import("~/components/reuseable/Loader"), {
  loading: () => <p>Loading...</p>
})
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
    text: "Blog-News",
    url: "/blog-news"
  }
]

const Blogs = (props) => {
  const [url, setUrl] = useState("")
  const router = useRouter()
  const { PostList } = props
  const [blogData] = useState(PostList.data[0])

  useEffect(() => {
    window.addEventListener("hashchange", onHashChanged)

    return () => {
      window.removeEventListener("hashchange", onHashChanged)
    }
  }, [])

  var shareimage = blogData.shareimage
 // console.log("share",resourcesData.data[0])
  if(shareimage !== undefined || shareimage !== null){
     var ogImage = `${process.env.AWS_S3BUCKET_URL}${blogData.shareimage}`
  }else{
     var ogImage = `${process.env.AWS_S3BUCKET_URL}${blogData.thumbnail}`
  }

  const onHashChanged = () => {
    const hash = window.location.hash.substring(1)
    scroller.scrollTo(hash, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -100
    })
  }

  useEffect(() => {
    const host = window.location.host
    const baseUrl = `https://${host}/blogs/${blogData?.slug}`
    setUrl(baseUrl)
    if (blogData) {
      if (!blogData.published) {
        router.push("/blog-news")
      }
    } else {
      router.push("/blog-news")
    }

    breadcrumb.push({
      id: 2,
      text: blogData?.name
    })
  }, [router.pathname])

  if (!blogData) {
    return <Loader />
  }

  return (
    <Container
      title={blogData?.name}
      description={blogData?.blog_meta_desc}
      cronical={"/blog-news"}
      ogimg={ogImage}
    >
      <main className="ps-page ps-page--inner">
        <div
          className="ps-page__header  breadcrumb-h breadcrumb-bg"
          style={{
            backgroundImage: `url(${process.env.AWS_S3BUCKET_URL}${blogData?.banner_img})`
          }}
        >
          <div className="container ">
            <BreadCrumb breacrumb={breadcrumb} />
            <h1 className="text-center h1 text-white p-2 ">
              {blogData?.banner_title}
            </h1>
          </div>
        </div>
        <div className="ps-page__content">
          <div className="ps-about">
            <div className="">
              <div className="container">
                <section className="ps-section--block-grid pt-3">
                  <div className="ps-section__thumbnail">
                    <Link href="#">
                      <div className="ps-section__image w-100 h-100 link-hover-thumb-shape image-box-container mb-0 mx-2 image-box-container-mb">
                        <img
                          src={`${process.env.AWS_S3BUCKET_URL}${blogData?.thumbnail}`}
                          alt={blogData?.name}
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="ps-section__content">
                    <div className="ps-section__desc">
                      <h2>{blogData?.name}</h2>
                      <p>{blogData?.description}</p>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <span className="text-left">
                          <TbEdit className="mr-2" />{" "}
                          <i>
                            {blogData?.authorName !== null
                              ? blogData?.authorName
                              : blogData?.authorId}
                          </i>
                        </span>
                        <br />
                        <TbCalendarEvent className="mr-2" />{" "}
                        <span className="text-right">
                          {moment(blogData?.updated_at).format(
                            "dddd, DD MMM YYYY "
                          )}
                        </span>
                      </div>
                      <div className="col-md-6">
                        <FacebookShareButton
                          url={url}
                          quote={blogData?.name}
                          hashtag={"#Stemnovate"}
                        >
                          <FacebookIcon size={42} round />
                        </FacebookShareButton>
                        <TwitterShareButton
                          url={url}
                          quote={blogData?.name}
                          hashtag={"#Stemnovate"}
                        >
                          <TwitterIcon size={42} round />
                        </TwitterShareButton>
                        <LinkedinShareButton
                          url={url}
                          quote={blogData?.name}
                          hashtag={"#Stemnovate"}
                        >
                          <LinkedinIcon size={42} round />
                        </LinkedinShareButton>
                        <a
                          target="_blank"
                          className="ps-social__link instagram"
                          href={"https://www.instagram.com/?share=" + url}
                          rel="noreferrer"
                        >
                          <FaInstagram
                            style={{
                              backgroundColor: "#fa7e1e",
                              borderRadius: 25,
                              padding: 5
                            }}
                            className="m-1"
                            color="#ffffff"
                            size={40}
                          />
                        </a>
                      </div>
                      <div className="col-md-12"></div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="container reference-link">
                <div
                  className="center-box"
                  dangerouslySetInnerHTML={{
                    __html: blogData?.content
                  }}
                ></div>
              </div>
            </div>

            <Subscribe />
          </div>
        </div>
      </main>
    </Container>
  )
}

export async function getServerSideProps({ query }) {
  const slug = query.slug

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

  const response = await fetch(baseUrl + "/api/blog/getBlogs", requestOptions)
  const PostList = await response.json()
  return { props: { PostList } }
}

export default Blogs
Blogs.propTypes = {
  PostList: PropTypes.any
}
