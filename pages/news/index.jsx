import React, { useEffect } from "react";
import BreadCrumb from "~/components/elements/BreadCrumb";
import Container from "~/components/layouts/Container";
import useGetPost from "~/hooks/useGetPost";
import usePostGroup from "~/hooks/usePostGroup";
import CustomPagination from "~/components/elements/basic/CustomPagination";
import { useRouter } from "next/router";

const BlogGridScreen = () => {
    const { getPosts, postItems, loading } = useGetPost();
    const { withGrid } = usePostGroup();
    const { router } = useRouter();

    useEffect(() => {
        router.push("/blog-news");
        getPosts({ _limit: 12 });
    }, []);

    const breadcrumb = [
        {
            text: "Home",
            url: "/",
        },
        {
            text: "Blog Grid",
        },
    ];

    // View
    const postsView = withGrid(postItems, loading, 3);
    return (
        <Container title="Blog">
            <div className="ps-page ps-page--inner">
                <div className="container">
                    <div className="ps-page__header">
                        <BreadCrumb breacrumb={breadcrumb} />
                        <h3 className="ps-page__heading">Latest news from Stemnovate</h3>
                    </div>
                    <div className="ps-page__content">
                        <div className="ps-blog">
                            {postsView}
                            <CustomPagination />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default BlogGridScreen;
