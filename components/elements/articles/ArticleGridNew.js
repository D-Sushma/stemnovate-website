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
            <div className="card mt-3 align-items-center p-1 "
                style={{ width: "308px", height: "auto" }}>
                <Link href="/blogs/[slug]" as={`/blogs/${post.slug}`} prefetch={false}>
                    <div className="link-hover-thumb-shape">{thumbnail}</div>
                </Link>
                <div className="card-body  p-0 ps-btn-link-bottom">
                    <h5 className="card-title pt-2 px-2 text-center">
                        {title}
                    </h5>
                    <div className="h5 text-center">
                        <span className="">{createdBy}</span>
                        <Link href="/blog" prefetch={false}>
                            <span className="button-link link-hover-thumb-shape">{author}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ArticleGrid;
ArticleGrid.propTypes = {
    post: PropTypes.any,
};
