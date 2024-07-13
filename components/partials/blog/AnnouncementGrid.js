import React, { useEffect, useState } from "react";
import PostRepository from "~/repositories/PostRepositoryAnnouncement";
import PropTypes from "prop-types";
import dynamic from 'next/dynamic'

const AnnouncementArticleGrid = dynamic(
    () => import("~/components/elements/articles/AnnouncementArticleGrid"),
    { loading: () => <p>Loading...</p> }
)

const AnnouncementGrid = ({ collectionSlug, column }) => {
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
            APIPosts = await PostRepository.getPosts();
        }
        console.log(APIPosts);

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
                            <AnnouncementArticleGrid post={item} />
                        </div>
                    );
                } else if (column === "4") {
                    return (
                        <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
                            <AnnouncementArticleGrid post={item} />
                        </div>
                    );
                } else {
                    return (
                        <div className="col-md-3 col-sm-6 d-flex flex-grow-1" key={item.id}>
                            {/* <div className="p-0  m-1 "> */}
                                <AnnouncementArticleGrid post={item} />
                            {/* </div> */}
                        </div>
                    );
                }
            }
        });
    }

    return (
        <div className="ps-blog ps-blog--grid plus-section">
            <div className="container container-blog">
                <div className="ps-blog__content mb-5">
                    <div className="ps-page__header header-blog text-center mb-3 ">
                        <h4 className="font-weight-bolder text-uppercase text-white">Announcements</h4>
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

export default AnnouncementGrid;

AnnouncementGrid.propTypes = {
    collectionSlug: PropTypes.string,
    column: PropTypes.string,
};
