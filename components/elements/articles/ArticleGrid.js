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

            {/* <div className="card mt-3 align-items-center p-1 "
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
            </div> */}


            <div className="mt-3 card col-xl-12 col-lg-12 col-md-12 col-sm-12 align-items-center p-1">
                <article >
                    <div className="ps-post__thumbnail">
                        <Link href="/blogs/[slug]" as={`/blogs/${post.slug}`} prefetch={false}>
                            <div className="link-hover-thumb-shape">{thumbnail}</div>
                        </Link>
                    </div>
                    <div className="ps-post__wrapper justify-content-center text-center">
                        <h5 className="px-0">
                            {title}
                            {/* {title?.substring(0, 90)} */}
                        </h5>
                    </div>
                </article>
                {/* <div className="h5 text-center">
                    <span >{createdBy}</span>
                    <Link href="/blog" prefetch={false}>
                        <span className="button-link link-hover-thumb-shape">{author}</span>
                    </Link>
                </div> */}
            </div>
        </>
    );
};

export default ArticleGrid;
ArticleGrid.propTypes = {
    post: PropTypes.any,
};
