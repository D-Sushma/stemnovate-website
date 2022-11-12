import { useState } from "react";
import { getProductsByCollectionHelper } from "~/utilities/strapi-fetch-data-helpers";
import ProductRepository from "~/repositories/ProductRepository";

export default function useGetProducts() {
    const [loading, setLoading] = useState(false);
    const [productItems, setProductItems] = useState(null);
    const [product, setProduct] = useState(null);
    const [category, setCategory] = useState(null);
    const [relateProducts, setRelateProducts] = useState(null);
    const [resources, setResources] = useState(null);

    return {
        loading,
        product,
        productItems,
        category,
        relateProducts,
        resources,
        setLoading: (payload) => {
            setLoading(payload);
        },

        getProductsByCollection: async (payload, pageSize = 8) => {
            setLoading(true);
            const responseData = await getProductsByCollectionHelper(payload, pageSize);
            if (responseData) {
                setProductItems(responseData.items);
                setTimeout(() => {
                    setLoading(false);
                }, 250);
            }
        },

        getProducts: async (payload) => {
            setLoading(true);
            let responseData;
            if (payload) {
                console.log(payload);
                responseData = await ProductRepository.getProducts(payload);
            } else {
                const queries = {
                    _limit: 10,
                    _orderBy: "desc",
                };
                responseData = await ProductRepository.getProducts(queries);
            }

            if (responseData) {
                setProductItems(responseData);
                setTimeout(() => {
                    setLoading(false);
                }, 250);
            }
        },
        getPromotionalProducts: async (payload) => {
            setLoading(true);
            let responseData;
            if (payload) {
                // console.log(payload);
                responseData = await ProductRepository.getPromotionsProducts(payload);
            } else {
                const queries = {
                    _limit: 10,
                    _orderBy: "desc",
                };
                responseData = await ProductRepository.getPromotionsProducts(queries);
            }

            if (responseData) {
                setProductItems(responseData);
                setTimeout(() => {
                    setLoading(false);
                }, 250);
            }
        },
        getRelatedProducts: async (payload) => {
            setLoading(true);
            let responseData;
            if (payload) {
                console.log(payload);
                responseData = await ProductRepository.getRelateProducts(payload);
            } else {
                const queries = {
                    _limit: 10,
                    _orderBy: "desc",
                };
                responseData = await ProductRepository.getProducts(queries);
            }

            if (responseData) {
                setRelateProducts(responseData);
                setTimeout(() => {
                    setLoading(false);
                }, 250);
            }
        },

        getRelatedResources: async (payload) => {
            setLoading(true);
            let responseData;
            if (payload) {
                responseData = await ProductRepository.getRelateResources(payload);
            } else {
                const queries = null;
                responseData = await ProductRepository.getRelateResources(queries);
            }

            if (responseData) {
                setResources(responseData);
                setTimeout(() => {
                    setLoading(false);
                }, 250);
            }
        },

        getProductById: async (payload) => {
            setLoading(true);
            const responseData = await ProductRepository.getProductsById(payload);
            if (responseData) {
                setProduct(responseData);
                setTimeout(() => {
                    setLoading(false);
                }, 250);
            }
        },

        getCategoryBySlug: async (payload) => {
            setLoading(true);

            const response = await ProductRepository.getProductCategoryBySlug(payload);
            if (response) {
                console.log(response);
                setCategory(response);
                setTimeout(() => {
                    setLoading(false);
                }, 250);
            }
        },
    };
}
