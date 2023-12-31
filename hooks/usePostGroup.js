import React from "react";
import { generateTempArray } from "~/utilities/common-helpers";
import dynamic from 'next/dynamic'

const SkeletonProduct = dynamic(
    () => import("~/components/elements/skeletons/SkeletonProduct"),
    { loading: () => <p>Loading..</p> }
)
const SkeletonProductHorizontal = dynamic(
    () => import("~/components/elements/skeletons/SkeletonProductHorizontal"),
    { loading: () => <p>Loading..</p> }
)
const ArticleList = dynamic(
    () => import("~/components/elements/articles/ArticleList"),
    { loading: () => <p>Loading..</p> }
)
const ArticleStandard = dynamic(
    () => import("~/components/elements/articles/ArticleStandard"),
    { loading: () => <p>Loading..</p> }
)
const ArticleGrid = dynamic(
    () => import("~/components/elements/articles/ArticleGrid"),
    { loading: () => <p>Loading..</p> }
)

export default function usePostGroup() {
    function handleGetColumn(columns) {
        switch (columns) {
            case 2:
                return "col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6";
                break;
            case 4:
                return "col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6";
                break;
            case 6:
                return "col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6";
                break;
            default:
                return "col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12";
        }
    }

    return {
        withGrid: (source, loading, columns = 4) => {
            let view;
            if (!loading) {
                if (source && source.length > 0) {
                    const items = source.map((item) => (
                        <div className={handleGetColumn(columns)} key={item.id}>
                            <ArticleGrid post={item} />
                        </div>
                    ));
                    view = (
                        <div
                            className="ps-blog-items row"
                            data-columns={columns}>
                            {items}
                        </div>
                    );
                } else {
                    view = <p>No Post found.</p>;
                }
            } else {
                const items = generateTempArray(columns * 2).map((item) => (
                    <div className={handleGetColumn(columns)} key={item}>
                        <SkeletonProduct />
                    </div>
                ));
                view = (
                    <div className="ps-blog-items with-grid row">{items}</div>
                );
            }
            return view;
        },
        withList: (source, loading, columns = 4) => {
            let view;
            if (!loading) {
                if (source && source.length > 0) {
                    const items = source.map((item) => (
                        <div className="ps-layout__item" key={item.id}>
                            <ArticleList post={item} />
                        </div>
                    ));
                    view = <div className="ps-layout--list">{items}</div>;
                } else {
                    view = <p>No post found.</p>;
                }
            } else {
                const items = generateTempArray(columns).map((item) => (
                    <div
                        key={item}
                        className="ps-layout__item"
                        data-columns={columns}>
                        <SkeletonProductHorizontal />
                    </div>
                ));
                view = (
                    <div
                        className="ps-layout--list with-skeleton"
                        data-columns={columns}>
                        {items}
                    </div>
                );
            }
            return view;
        },
        withStandard: (source, loading, columns = 4) => {
            let view;
            if (!loading) {
                if (source && source.length > 0) {
                    const items = source.map((item) => (
                        <div className="ps-layout__item" key={item.id}>
                            <ArticleStandard post={item} />
                        </div>
                    ));
                    view = <div className="ps-layout--list ">{items}</div>;
                } else {
                    view = <p>No post found.</p>;
                }
            } else {
                const items = generateTempArray(columns).map((item) => (
                    <div
                        key={item}
                        className="ps-layout__item"
                        data-columns={columns}>
                        <SkeletonProductHorizontal />
                    </div>
                ));
                view = (
                    <div
                        className="ps-layout--list  with-skeleton"
                        data-columns={columns}>
                        {items}
                    </div>
                );
            }
            return view;
        },
    };
}
