import Repository, { baseUrlBlog, serializeQuery } from "./Repository";

class PostRepository {
    constructor(callback) {
        this.callback = callback;
    }

    async getPosts() {
        const endPoint = `/api/blog/getBlogs`;
        const response = await Repository.get(`${baseUrlBlog}/${endPoint}`)
            .then((response) => {
                if (response.data.data.length > 0) {
                    return response.data.data;
                } else {
                    return null;
                }
            })
            .catch((error) => ({ error: JSON.stringify(error) }));

        return response;
    }

    async getPostBySlug(payload) {
        const response = await Repository.get(`${baseUrlBlog}/posts?slug=${payload}`)
            .then((response) => {
                if (response.data.length > 0) {
                    return response.data[0];
                } else {
                    return null;
                }
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return response;
    }

    async SPGetPostItemOfCollectionBySlug(payload) {
        const endPoint = `/api/blog/getBlogs`;
        const response = await Repository.post(`${baseUrlBlog}/${endPoint}`, payload)
            .then((response) => {
                if (response.data.data && response.data.data.length > 0) {
                    return response.data.data;
                } else {
                    return null;
                }
            })
            .catch((error) => {
                console.log(JSON.stringify(error));
                return null;
            });
        console.log("response", response);
        return response;
    }

    async getPostItemsByKeyword(payload) {
        const response = await Repository.get(`${baseUrlBlog}/posts?title_contains=${payload}`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return response;
    }

    async getPostItemsByCategory(payload) {
        const response = await Repository.get(`${baseUrlBlog}/posts?title_contains=${payload}`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return response;
    }
}

export default new PostRepository();
