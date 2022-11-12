import React, { useState } from "react";
import Moment from "moment";
import Link from "next/link";
import LazyLoad from "react-lazyload";

export default function usePost() {
    const [createdBy, setCreatedBy] = useState("Jan 1, 2021");
    const [categories, setCategories] = useState(
        <Link href="/blog-news">
            <a>uncategoried</a>
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
                        <a className="button-link pl-0">{post.name}</a>
                    </Link>
                );
            } else {
                titleView = (
                    <Link href="/blogs/[slug]" as={`/blogs/${post.slug}`}>
                        <a className="button-link pl-0">No title here.</a>
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
                        <a>{item.tag}</a>
                    </Link>
                ));

                setCategories(categoryItems);
            }
            if (post.thumbnail) {
                const thumbnailImage = (
                    <LazyLoad>
                        <img src={`${process.env.AWS_S3BUCKET_URL}${post.thumbnail}`} alt="img" />
                    </LazyLoad>
                );
                setThumbnail(thumbnailImage);
                setThumbImageUrl(`${process.env.AWS_S3BUCKET_URL}${post.thumbnail}`);
            }
        },
    };
}
