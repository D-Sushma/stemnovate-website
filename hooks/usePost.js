import React, { useState } from "react";
import Moment from "moment";
import Link from "next/link";
import Image from "next/image"

export default function usePost() {
    const [createdBy, setCreatedBy] = useState("Jan 1, 2021");
    const [categories, setCategories] = useState(
        <Link href="/blog-news">
            <div className="link-hover-thumb-shape">uncategoried</div>
        </Link>
    );
    const [author, setAuthor] = useState("Unknown");
    const [thumbnail, setThumbnail] = useState(null);
    const [thumbImageUrl, setThumbImageUrl] = useState("null");
    const [wideThumbnail] = useState(null);
    const [wideThumbImageUrl] = useState("null");
    const [title, setTitle] = useState("Post title here");
    return {
        createdBy,
        author,
        categories,
        title,
        thumbnail,
        thumbImageUrl,
        wideThumbnail,
        wideThumbImageUrl,
        initPost: (post) => {
            let titleView;
            if (post.authorId) {
                setAuthor(post.authorId);
            }
            
            if (post.name) {
                titleView = (
                    <Link href="/blogs/[slug]" as={`/blogs/${post.slug}`}>
                        <div className="button-link pl-0 link-hover-thumb-shape">{post.name}</div>
                    </Link>
                );
            } else {
                titleView = (
                    <Link href="/blogs/[slug]" as={`/blogs/${post.slug}`}>
                        <div className="button-link pl-0 link-hover-thumb-shape">No title here.</div>
                    </Link>
                );
            }
            setTitle(titleView);
            if (post.created_at) {
                setCreatedBy(Moment(post.created_at).format("MMM DD, YYYY"));
            }

            if (post.categories && post.categories.length > 0) {
                const categoryItems = post.tag.map((item, index) => (
                    <Link href="/category/[slug]" as={`/categories/${item.tag}`} key={index}>
                        <div className="link-hover-thumb-shape">{item.tag}</div>
                    </Link>
                ));

                setCategories(categoryItems);
            }
            if (post.thumbnail) {
                const thumbnailImage = (
                    <Image
                        className="zoom-in"
                        src={`${process.env.AWS_S3BUCKET_URL}${post.thumbnail}`}
                        alt="img"
                        width={386}
                        height={218}
                    />
                );
                setThumbnail(thumbnailImage);
                setThumbImageUrl(`${process.env.AWS_S3BUCKET_URL}${post.thumbnail}`);
            }
        },
    };
}
