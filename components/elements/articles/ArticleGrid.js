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
            <article className="ps-post ps-post--grid">
                <div className="ps-post__thumbnail image-article-blog rounded-0">
                    <Link href="/blogs/[slug]" as={`/blogs/${post.slug}`}>
                        <div className="ps-post__overlay link-hover-thumb-shape" ></div>
                        {/* <a className="ps-post__overlay" ></a> */}
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
            </article>
        </>
    );
};

export default ArticleGrid;
ArticleGrid.propTypes = {
    post: PropTypes.any,
};
