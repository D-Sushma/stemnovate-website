import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useGetProducts from "~/hooks/useGetProducts";
import useProductGroup from "~/hooks/useProductGroup";
import BreadCrumb from "~/components/elements/BreadCrumb";
import Container from "~/components/layouts/Container";
import { baseUrl } from "~/repositories/Repository";
import { connect, useDispatch } from "react-redux";
import { toggleDrawer } from "~/store/app/action";
import useEcomerce from "~/hooks/useEcomerce";
// import Subscribe from "~/components/shared/sections/Subscribe";
import dynamic from 'next/dynamic'

const Subscribe = dynamic(
    () => import("~/components/shared/sections/Subscribe"),
    {loading: ()=> <p>Loading...</p>}
  )

const Applications = ({ ProductData, ecomerce }) => {
    const Router = useRouter();
    const { slug } = Router.query;
    const { proload, product, getProductById } = useGetProducts();
    // const [categoryList, setcategoryList] = React.useState([]);
    // const [ProductData, setProductData] = React.useState([]);
    const [isLoading, setisLoading] = React.useState(false);
    const [breadcrumb, setbreadcrumb] = React.useState([]);
    const [searchterms, setsearchterms] = React.useState("");
    const [searchUrl, setsearchUrl] = React.useState("");
    const { withGrid } = useProductGroup();
    const [AddtoCart, setAddtoCart] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const { loading, addItem } = useEcomerce();

    const handleAddItemToCart = (id, price) => {
        console.log("handleAddItemToCart", id);
        addItem({ id: id, quantity: AddtoCart, price: price }, ecomerce.cartItems, "cart");
        dispatch(toggleDrawer(true));
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const AddCart = (index) => {
        let cartval = parseInt(AddtoCart);
        var newval = cartval + parseInt(1);
        setAddtoCart(newval);
    };

    const RemoveCart = (index) => {
        if (AddtoCart) {
            let cartval = parseInt(AddtoCart);
            var newval = cartval - parseInt(1);
            setAddtoCart(newval);
            console.log(newval);
        }
    };

    useEffect(() => {
        var serarchdata = "";
        var serachurl = "/Applications";
        if (slug != undefined) {
            for (let index = 0; index < slug.length; index++) {
                const data = slug[index];
                if (index == slug.length - 1) {
                    var serarchdata = data;
                }
                serachurl = serachurl + "/" + data;
            }
            setsearchUrl(serachurl);
            slug && getcategoryListBySlug(serarchdata);
        }
    }, [slug]);

    const getcategoryListBySlug = async (params) => {
        const newbreadcrumb = [
            {
                id: 1,
                text: "Home",
                url: "/",
            },
            {
                id: 2,
                text: "Services",
                url: "/Services",
            },
        ];
        var urldata = "/Services";
        for (let index = 0; index < slug.length; index++) {
            const element = slug[index];
            if (index <= slug.length) {
                var urldata = urldata + "/" + element;
            } else {
                var urldata = urldata + "/#";
            }
            var bdc = {
                id: 3 + index,
                text: element,
                url: urldata,
            };
            newbreadcrumb.push(bdc);
        }
        setbreadcrumb(newbreadcrumb);
    };

    //

    const myLoader = ({ src }) => {
        return src;
    };

    return (
        <>
            <Container title={ProductData ? ProductData.categoryList_name : slug}>
                <main className="ps-page ps-page--inner">
                    <div className="ps-page__header  breadcrumb-h application-breadcrumb-bg">
                        <div className="container ">
                            <BreadCrumb breacrumb={breadcrumb} />
                            <h1 className="text-center  text-white ">{slug}</h1>
                        </div>
                    </div>

                    <div className="ps-page__content">
                        <div className="ps-about">
                            <div className=" about-section ">
                                <div className="container">
                                    {ProductData != "" ? (
                                        <div
                                            className="mt-5"
                                            dangerouslySetInnerHTML={{
                                                __html: ProductData.short_description,
                                            }}
                                        />
                                    ) : (
                                        <p>No Records Found</p>
                                    )}
                                </div>
                            </div>

                            <Subscribe />
                        </div>
                    </div>
                </main>
                {/* <ProductList slug="Biobanking" /> */}
            </Container>
        </>
    );
};

export async function getServerSideProps({ query }) {
    const slug = query.slug;
    var ProductData = [];
    var categoryListList = [];
    var data = "";
    if (slug != undefined) {
        data = slug[slug.length - 1];
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            slug: data,
        });

        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };

        const res = await fetch(baseUrl + "/api/products/catbyname", requestOptions);
        const myProductData = await res.json();
        (ProductData = myProductData), (categoryListList = myProductData.Products);
    }

    // // Pass data to the page via props
    return { props: { ProductData } };
}

// export default Applications;
export default connect((state) => state)(Applications);
