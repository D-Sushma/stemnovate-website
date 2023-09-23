import React, { useEffect, useState } from 'react';
import PostRepository from '~/repositories/PostRepository';
// import ArticleList from '~/components/elements/articles/ArticleList';
import dynamic from 'next/dynamic'

const ArticleList = dynamic(
    () => import("~/components/elements/articles/ArticleList"),
    {loading: ()=> <p>Loading..</p>}
)

const BlogGrid = ({ collectionSlug }) => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState(null);

    async function getPosts() {
        let queries, APIPosts;
        if (collectionSlug !== undefined) {
            queries = {
                slug_eq: collectionSlug,
            };
            APIPosts = await PostRepository.SPGetPostItemOfCollectionBySlug(
                queries
            );
        } else {
            queries = {
                _limit: 6,
            };
            APIPosts = await PostRepository.getPosts(queries);
        }
        if (APIPosts) {
            setTimeout(function () {
                setLoading(false);
            }, 200);
            setPosts(APIPosts);
            return APIPosts;
        } else {
            setPosts(null);
            return null;
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    let viewPostItems;
    if (!loading && posts) {
        viewPostItems = posts.map((item) => {
            return <ArticleList post={item} key={item.id} />;
        });
    }

    return <div className="ps-post-items">{viewPostItems}</div>;
};

export default BlogGrid;
