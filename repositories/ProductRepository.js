import Repository, { baseUrl, serializeQuery } from "./Repository";

export async function getTotalRecords() {
    const res = await Repository.get(`${baseUrl}/products/count`)
        .then((response) => response.data)
        .catch((error) => ({ error: JSON.stringify(error) }));
    return res;
}

export async function getProductsByIds(payload) {
    const endPoint = `${baseUrl}api/products/getproductbyid/${payload}`;

    const res = await Repository.get(endPoint)
        .then((response) => ({
            items: response.data,
        }))

        .catch((error) => ({ error: JSON.stringify(error) }));
    return res;
}

class ProductRepository {
    async getPromotionsProducts(params) {
        const res = await Repository.get(`${baseUrl}/api/products/getPromotionsProducts?${serializeQuery(params)}`)
            .then((response) => {
                if (response.data && response.data.length > 0) {
                    return response.data;
                }
                return null;
            })

            .catch(() => null);
        return res;
    }

    async getProducts(params) {
        const reponse = await Repository.get(`${baseUrl}/api/products/getAllProductList?${serializeQuery(params)}`)
            .then((response) => {
                if (response.data && response.data.length > 0) {
                    return response.data;
                }
                return null;
            })

            .catch((error) => {
                console.log(JSON.stringify(error));
                return null;
            });
        return reponse;
    }

    async getRelateProducts(params) {
        const reponse = await Repository.get(`${baseUrl}/api/products/getRelateProductList?${serializeQuery(params)}`)
            .then((response) => {
                if (response.data && response.data.length > 0) {
                    return response.data;
                }
                return null;
            })

            .catch((error) => {
                console.log(JSON.stringify(error));
                return null;
            });
        return reponse;
    }

    async getRelateResources(params) {
        const reponse = await Repository.post(`${baseUrl}/api/products/getRelatedResources`, { tokenId: 1, resources_token: params })
            .then((response) => {
                if (response.status === 200) {
                    return response.data.data;
                }
                return null;
            })

            .catch((error) => {
                console.log(JSON.stringify(error));
                return null;
            });
        return reponse;
    }

    async getProductsById(payload) {
        const endPoint = `${baseUrl}/api/products/getproductbyid/${payload}`;

        const reponse = await Repository.get(endPoint)
            .then((response) => response.data)
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getProductsByIds(payload) {
        const endPoint = `${baseUrl}/api/products/getproductbyid/${payload}`;

        const reponse = await fetch(endPoint)
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                }
                throw new Error("Something went wrong on api server!");
            })
            .then((response) => {
                console.log("first", response);
                if (response.data && response.data.length > 0) {
                    return response.data;
                }
                return null;
            })
            .catch((error) => {
                console.log(JSON.stringify(error));
                return null;
            });

        console.log("reponse", reponse);
        return reponse;
    }

    async getProductCategories() {
        const reponse = await Repository.get(`${baseUrl}/api/products/getAllcategories`)
            .then((response) => {
                console.log(response);
                return response.data.result;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getProductCategoryBySlug(payload) {
        const reponse = await Repository.post(`${baseUrl}api/products/productbycatname`, { slug: payload })
            .then((response) => {
                if (response.data && response.status == 200) {
                    console.log("response", response.data);
                    return response.data;
                }
                return null;
            })
            .catch((error) => {
                console.log(JSON.stringify(error.message));
                return null;
            });
        return reponse;
    }

    async getProductsByPriceRange(payload) {
        const reponse = await Repository.get(`${baseUrl}/products?${serializeQuery(payload)}`)
            .then((response) => response.data)
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }
}

export default new ProductRepository();
