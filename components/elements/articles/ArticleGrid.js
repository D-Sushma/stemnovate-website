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
        <article className="ps-post ps-post--grid">
            <div className="ps-post__thumbnail">
                <Link href="/blogs/[slug]" as={`/blogs/${post.slug}`}>
                    <a className="ps-post__overlay"></a>
                </Link>
                {thumbnail}
                <div className="ps-post__categories">
                    <Link href="/blog-news">
                        <a> {post.tag}</a>
                    </Link>
                </div>
            </div>
            <div className="ps-post__wrapper">
                <div className="ps-post__content px-2 mb-3">
                    {title}
                    <div className="ps-post__meta">
                        <span className="ps-post__created-at">{createdBy}</span>
                        <Link href="/blog">
                            <a className="ps-post__author">{author}</a>
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ArticleGrid;
ArticleGrid.propTypes = {
    post: PropTypes.any,
};
