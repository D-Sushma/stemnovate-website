import React, { useEffect } from "react";
import Link from "next/link";
import usePost from "~/hooks/usePost";
import PropTypes from "prop-types";

const ArticleGrid = ({ post }) => {
    const { thumbnail, author, title, createdBy, initPost } = usePost();
    useEffect(() => {
        initPost(post);
    }, [post]);

    return (
        <>
            <div className="ps-section__content">
                <div className="container d-flex justify-content-center align-items-center">
                    <div className=" row d-flex justify-content-center pl-5 pr-5 pl-md-0 pr-md-0">
                        <div className="">
                            <div className="card mt-3 align-items-center p-1 col-md-12 card-article-container">
                                <Link href="/blogs/[slug]" as={`/blogs/${post.slug}`}>
                                    <div className="ps-post__overlay link-hover-thumb-shape"></div>
                                </Link>
                               {thumbnail}
                                <div className="card-body p-0 ps-btn-link-bottom">
                                    <h5 className="card-title pt-2 px-2">
                                        {title}
                                    </h5>
                                    {/* <div className="title-article-blog">{title}</div> */}
                                    <div className="title-article-blog mt-3">
                                        <span className="">{createdBy},</span>
                                        <Link href="/blog">
                                            <span className=" ml-1 link-hover-thumb-shape button-link pl-0">{author}</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="col-md-3 col-sm-6 d-flex flex-grow-1">
                <div className="card mt-3 align-items-center p-1"> */}
            {/* <article className="ps-post ps-post--grid">
                <div className="ps-post__thumbnail image-article-blog rounded-0">
                    <Link href="/blogs/[slug]" as={`/blogs/${post.slug}`}>
                        <div className="ps-post__overlay link-hover-thumb-shape" ></div>
                    </Link>
                    {thumbnail}
                </div>
                <div className="">
                    <div className="ps-post__content text-white px-2 mb-3 pt-0">
                        <div className="title-article-blog">{title}</div>
                        <div className="ps-post__meta mt-3">
                            <span className="created-at-article-blog">{createdBy},</span>
                            <Link href="/blog">
                                <span className="author-article-blog ml-1">{author}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </article> */}
        </>
    );
};

export default ArticleGrid;
ArticleGrid.propTypes = {
    post: PropTypes.any,
};
