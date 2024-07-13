import React, { useEffect, useState } from "react";
import PostRepository from "~/repositories/PostRepositoryAnnouncement";
import PropTypes from "prop-types";
import dynamic from 'next/dynamic'

const InfoArticleGrid = dynamic(
    () => import("~/components/elements/articles/InfoArticleGrid"),
    { loading: () => <p>Loading...</p> }
)

const InfoGrid = ({ collectionSlug, column }) => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState(null);
    async function getPosts() {
        let queries, APIPosts;
        if (collectionSlug) {
            queries = {
                slug: collectionSlug,
            };
            APIPosts = await PostRepository.SPGetPostItemOfCollectionBySlug(queries);
        } else {
            APIPosts = await PostRepository.getInfoPosts();
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
        viewPostItems = posts.map((item, index) => {
            if (index <= 3) {
                if (column === "3") {
                    return (
                        <div className="col-md-4 col-sm-6" key={item.id}>
                            <InfoArticleGrid post={item} />
                        </div>
                    );
                } else if (column === "4") {
                    return (
                        <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
                            <InfoArticleGrid post={item} />
                        </div>
                    );
                } else {
                    return (
                        <div className="col-md-3 col-sm-6 d-flex flex-grow-1" key={item.id}>
                            {/* <div className="p-0  m-1 "> */}
                            <InfoArticleGrid post={item} />
                            {/* </div> */}
                        </div>
                    );
                }
            }
        });
    }

    return (
        <div className="ps-blog ps-blog--grid plus-section plus-section-lcp-image">
            <div className="container container-blog">
                <div className="ps-blog__content mb-5">
                    <div className="ps-page__header header-blog text-center mb-3 ">
                        <h4 className="font-weight-bolder text-uppercase text-white">Announcements Info Grid</h4>
                    </div>
                    <div className="ps-section__content">
                        <div className="container d-flex justify-content-center align-items-center">
                            <div className="row d-flex justify-content-center">{viewPostItems}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoGrid;

InfoGrid.propTypes = {
    collectionSlug: PropTypes.string,
    column: PropTypes.string,
};
