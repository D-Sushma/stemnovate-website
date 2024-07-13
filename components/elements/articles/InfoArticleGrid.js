import React, { useEffect } from "react";
import Link from "next/link";
import useInfo from "~/hooks/useInfo";
import PropTypes from "prop-types";

const InfoArticleGrid = ({ post }) => {
    const { title, thumbnail, thumbImageUrl, createdAt, type, position, initPost } = useInfo();

    useEffect(() => {
        initPost(post);
    }, [post]);

    return (
        <>
            <div className="mt-3 card col-xl-12 col-lg-12 col-md-12 col-sm-12 align-items-center p-1">
                <article >
                    <div className="ps-post__thumbnail">
                        <Link href={`${post.btn_url}`} prefetch={false}>
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
                    <Link href="#" prefetch={false}>
                        <span className="button-link link-hover-thumb-shape">{type}</span>
                    </Link>
                    <h5>{position}</h5>
                </div> */}
            </div>
        </>
    );
};

export default InfoArticleGrid;

InfoArticleGrid.propTypes = {
    post: PropTypes.any,
};
