import React from "react"
import Image from '~/components/elements/Image'
import Link from "next/link"
import dynamic from 'next/dynamic'

const Container = dynamic(
  () => import("~/components/layouts/Container"),
  {loading: ()=> <p>Loading...</p>}
)
const BreadCrumb = dynamic(
  () => import("~/components/elements/BreadCrumb"),
  {loading: ()=> <p>Loading...</p>}
)
const Subscribe = dynamic(
    () => import("~/components/shared/sections/Subscribe"),
    {loading: ()=> <p>Loading...</p>}
  )

const breadcrumb = [
  {
    id: 1,
    text: "Home",
    url: "/"
  },

  {
    id: 2,
    text: "Blog"
  }
]

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
                            <Link href="#"><div className="ps-post__overlay link-hover-thumb-shape"></div></Link>
                            <Image
                              src="/static/img/Blog/1.jpg"
                              alt="ENHANCED MICROFLUIDIC DEVICES FOR BIOMEDICAL APPLICATIONS"
                              width={1200}
                              height={675}
                            />
                            <div className="ps-post__categories">
                              <div className="div-with-link link-hover-thumb-shape">
                                SCIENCE
                              </div>
                            </div>
                          </div>
                          <div className="ps-post__wrapper justify-content-center">
                            <div className="ps-post__content justify-content-center">
                              <Link href="/post/the-latest-tests-of-popular-masks-in-accordance-with-cv2s-standards" prefetch={false}>
                                <div className="ps-post__title text-center link-hover-thumb-shape">
                                  ENHANCED MICROFLUIDIC DEVICES FOR BIOMEDICAL
                                  APPLICATIONS.....
                                </div>
                              </Link>
                              <div className="ps-post__meta justify-content-center">
                                <span className="ps-post__created-at ">
                                  Sep 18, 2019
                                </span>
                                <Link href="/blogs">
                                  <span className="ps-post__author span-with-link">Ruchi Sharma</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>

                      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                        <article className="ps-post ps-post--grid">
                          <div className="ps-post__thumbnail">
                          <Link href="#"><div className="ps-post__overlay link-hover-thumb-shape"></div></Link>
                            <Image
                              src="/static/img/Blog/2.jpg"
                              alt="THE CREATION OF NEW SCALABLE MANUFACTURING PROCESS"
                              width={1200}
                              height={675}
                            />
                            <div className="ps-post__categories">
                              <div className="div-with-link link-hover-thumb-shape">PRODUCT</div>
                            </div>
                          </div>
                          <div className="ps-post__wrapper justify-content-center">
                            <div className="ps-post__content justify-content-center">
                              <Link href="/post/the-latest-tests-of-popular-masks-in-accordance-with-cv2s-standards" prefetch={false}>
                                <div className="ps-post__title text-center link-hover-thumb-shape">
                                THE CREATION OF NEW SCALABLE MANUFACTURING
                                PROCESS.....
                                </div>
                              </Link>
                              <div className="ps-post__meta justify-content-center">
                                <span className="ps-post__created-at ">
                                  May 05, 2020
                                </span>
                                <Link href="/blogs" prefetch={false}>
                                  <span className="ps-post__author span-with-link" >Ruchi Sharma</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>

                      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                        <article className="ps-post ps-post--grid">
                          <div className="ps-post__thumbnail">
                          <Link href="#"><div className="ps-post__overlay link-hover-thumb-shape"></div></Link>
                            <Image
                              src="/static/img/Blog/3.jpg"
                              alt="HOW STEMNOVATE WILL CHANGE DRUG DEVELOPMENT"
                              width={1200}
                              height={675}
                            />
                            <div className="ps-post__categories">
                              <div className="div-with-link link-hover-thumb-shape">SCIENCE</div>
                            </div>
                          </div>
                          <div className="ps-post__wrapper justify-content-center">
                            <div className="ps-post__content justify-content-center">
                              <Link href="/post/the-latest-tests-of-popular-masks-in-accordance-with-cv2s-standards" prefetch={false}>
                                
                                <div className="ps-post__title text-center link-hover-thumb-shape">
                                HOW STEMNOVATE WILL CHANGE DRUG DEVELOPMENT
                                .....
                                </div>
                              </Link>
                              <div className="ps-post__meta justify-content-center">
                                <span className="ps-post__created-at ">
                                  Aug 24, 2019
                                </span>
                                <Link href="/blogs" prefetch={false}>
                                  <span className="ps-post__author span-with-link">Ruchi Sharma</span>
                                </Link>
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
                          <Link href="#"><div className="ps-post__overlay link-hover-thumb-shape"></div></Link>
                            <Image
                              src="/static/img/Blog/4.jpg"
                              alt="HOW A ‘CYP OF COFFEE’ CAN HELP US TO UNDERSTAND"
                              width={1200}
                              height={675}
                            />
                            <div className="ps-post__categories">
                              <div className="div-with-link link-hover-thumb-shape">PRODUCT</div>
                            </div>
                          </div>
                          <div className="ps-post__wrapper justify-content-center">
                            <div className="ps-post__content justify-content-center">
                              <Link href="/post/the-latest-tests-of-popular-masks-in-accordance-with-cv2s-standards" prefetch={false}>
                                <div className="ps-post__title text-center link-hover-thumb-shape">
                                HOW A ‘CYP OF COFFEE’ CAN HELP US TO
                                UNDERSTAND....
                                </div>
                              </Link>
                              <div className="ps-post__meta justify-content-center">
                                <span className="ps-post__created-at ">
                                  Aug 24, 2019
                                </span>
                                <Link href="/blogs" prefetch={false}>
                                  <span className="ps-post__author span-with-link">Ruchi Sharma</span>
                                </Link>
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
          </div>
        </div>
      </main>
    </Container>
  )
}

export default Blogs
