import React, { useState } from "react";
import Moment from "moment";
import Link from "next/link";
import Image from "next/image"

export default function usePost() {
    const [createdBy, setCreatedBy] = useState("Jan 1, 2021");
    const [type, setType] = useState("");
    const [position, setPosition] = useState("");
    const [thumbnail, setThumbnail] = useState(null);
    const [thumbImageUrl, setThumbImageUrl] = useState(null);
    const [title, setTitle] = useState("Post title here");
    return {
        createdBy,
        type,
        title,
        position,
        thumbnail,
        thumbImageUrl,
        initPost: (post) => {
            let titleView;
            if (post?.section_type) {
                setType(post?.section_type);
            }

            if (post?.section_order) {
                setPosition(post?.section_order);
            }

            if (post?.section_title) {
                titleView = (
                    <Link href={`${post?.btn_url}`} passHref prefetch={false}>
                        <div className="button-link pl-0 link-hover-thumb-shape">{post?.section_title}</div>
                    </Link>
                );
            } else {
                titleView = (
                    <Link href={`${post.btn_url}`} passHref>
                        <div className="button-link pl-0 link-hover-thumb-shape">No title here.</div>
                    </Link>
                );
            }
            setTitle(titleView);

            if (post?.created_at) {
                setCreatedBy(Moment(post?.created_at).format("MMM DD, YYYY"));
            }

            if (post?.image) {
                const thumbnailImage = (
                    <Image
                        className="zoom-in"
                        // src={`${process.env.AWS_S3BUCKET_URL}${post?.thumbnail}`}
                        src={`${post?.image}`}
                        alt="img"
                        width={386}
                        height={218}
                    />
                );
                setThumbnail(thumbnailImage);
            }

            if (post?.btn_url) {
                // setThumbImageUrl(`${process.env.AWS_S3BUCKET_URL}${post?.btn_url}`);
                setThumbImageUrl(`${post?.btn_url}`);
            } else {
                setThumbImageUrl('#');
            }
        },
    };
}
