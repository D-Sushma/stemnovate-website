import React, { useEffect } from "react";
import Link from "next/link";
import useAnnouncements from "~/hooks/useAnnouncements";
import PropTypes from "prop-types";

const AnnouncementArticleGrid = ({ post }) => {
    const { thumbnail, author, title, createdBy, initPost } = useAnnouncements();
    useEffect(() => {
        initPost(post);
    }, [post]);

    // var title1 = String(title)?.substring(0,50);
    var title1 = title;
    console.log('title1', title1)

    return (
        <>
                <div className="mt-3 card col-xl-12 col-lg-12 col-md-12 col-sm-12 align-items-center p-1">
                    <article>
                        <div className="ps-post__thumbnail">
                            <Link href="#" prefetch={false}>
                                <div className="link-hover-thumb-shape">{thumbnail}</div>
                            </Link>
                        </div>
                        <div className="ps-post__wrapper justify-content-center text-center">
                            <h5 className="px-0">
                                {title1}
                                {/* {String(title)?.substring(0, 90)} */}
                            </h5>
                        </div>
                    </article>
                    {/* <div className="h5 text-center">
                            <span>{createdBy}</span>
                            <Link href="#" prefetch={false}>
                                <span className="button-link link-hover-thumb-shape">{author}</span>
                            </Link>
                        </div> */}
                </div>
        </>
    );
};

export default AnnouncementArticleGrid;
AnnouncementArticleGrid.propTypes = {
    post: PropTypes.any,
};
