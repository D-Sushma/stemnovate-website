import { useState } from "react";
import { getProductsByCollectionHelper } from "~/utilities/strapi-fetch-data-helpers";
import ProductRepository from "~/repositories/ProductRepository";
export default function useGetProducts() {
    const [a, b] = useState(!1), [c, d] = useState(null), [e, f] = useState(null), [g, h] = useState(null), [i, j] = useState(null), [k, l] = useState(null);
    return {
        loading: a, product: e, productItems: c, category: g, relateProducts: i, resources: k,
        setLoading: a => { b(a) },
        getProductsByCollection: async (a, c = 8) => {
            b(!0); const e = await getProductsByCollectionHelper(a, c); e && (d(e.items),
                setTimeout(() => { b(!1) }, 250))
        },
        getProducts: async a => {
            b(!0); let c; if (a) console.log(a), c = await ProductRepository.getProducts(a);
            else { c = await ProductRepository.getProducts({ _limit: 10, _orderBy: "desc" }) } c && (d(c), setTimeout(() => { b(!1) }, 250))
        },
        getPromotionalProducts: async a => {
            b(!0); let c; if (a) c = await ProductRepository.getPromotionsProducts(a);
            else { c = await ProductRepository.getPromotionsProducts({ _limit: 10, _orderBy: "desc" }) } c && (d(c), setTimeout(() => { b(!1) }, 250))
        },
        getRelatedProducts: async a => {
            b(!0); let c; if (a) console.log(a), c = await ProductRepository.getRelateProducts(a);
            else { c = await ProductRepository.getProducts({ _limit: 10, _orderBy: "desc" }) } c && (j(c), setTimeout(() => { b(!1) }, 250))
        },
        getRelatedResources: async a => {
            b(!0); let c; if (a) c = await ProductRepository.getRelateResources(a);
            else { c = await ProductRepository.getRelateResources(null) } c && (l(c), setTimeout(() => { b(!1) }, 250))
        },
        getProductById: async a => {
            b(!0); const c = await ProductRepository.getProductsById(a); c && (f(c), setTimeout(() => { b(!1) }, 250))
        },
        getCategoryBySlug: async a => {
            b(!0); const c = await ProductRepository.getProductCategoryBySlug(a); c && (console.log(c), h(c),
                setTimeout(() => { b(!1) }, 250))
        }
    }
}