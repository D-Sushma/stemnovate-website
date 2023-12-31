import React, { useEffect, useState } from 'react';
import PostRepository from '~/repositories/PostRepository';
import dynamic from 'next/dynamic'

const ArticleGrid = dynamic(
    () => import("~/components/elements/articles/ArticleGrid"),
    { loading: () => <p>Loading..</p> }
)
const SuproPagination = dynamic(
    () => import("~/components/elements/basic/SuproPagination"),
    { loading: () => <p>Loading..</p> }
)
const ModuleBlogCategories = dynamic(
    () => import("~/components/partials/blog/modules/ModuleBlogCategories"),
    { loading: () => <p>Loading..</p> }
)
const WidgetBlogSearch = dynamic(
    () => import("~/components/shared/widgets/WidgetBlogSearch"),
    { loading: () => <p>Loading..</p> }
)
const WidgetBlogCategories = dynamic(
    () => import("~/components/shared/widgets/WidgetBlogCategories"),
    { loading: () => <p>Loading..</p> }
)
const WidgetBlogTags = dynamic(
    () => import("~/components/shared/widgets/WidgetBlogTags"),
    { loading: () => <p>Loading..</p> }
)
const WidgetBlogPromotions = dynamic(
    () => import("~/components/shared/widgets/WidgetBlogPromotions"),
    { loading: () => <p>Loading..</p> }
)

const BlogSidebar = ({ collectionSlug, column }) => {
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
            if (column === '3') {
                return (
                    <div className=" col-md-4 col-sm-6" key={item.id}>
                        <ArticleGrid post={item} />
                    </div>
                );
            } else if (column === '4') {
                return (
                    <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
                        <ArticleGrid post={item} />
                    </div>
                );
            } else {
                return (
                    <div className="col-md-6" key={item.id}>
                        <ArticleGrid post={item} />
                    </div>
                );
            }
        });
    }

    return (
        <div className="ps-blog ps-blog--sidebar">
            <div className="container">
                <div className="ps-blog__container">
                    <div className="ps-blog__sidebar">
                        <WidgetBlogSearch />
                        <WidgetBlogCategories />
                        <WidgetBlogTags />
                        <WidgetBlogPromotions />
                    </div>
                    <div className="ps-blog__right">
                        <div className="ps-blog__header">
                            <ModuleBlogCategories />
                        </div>
                        <div className="ps-blog__content">
                            <div className="ps-post-items">
                                <div className="row">{viewPostItems}</div>
                            </div>
                        </div>
                        <div className="ps-blog__footer">
                            <SuproPagination />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSidebar;
