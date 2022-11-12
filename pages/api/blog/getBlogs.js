import prisma from "~/lib/prisma";

export default async function handler(req, res) {
    if (req.method == "POST") {
        const { slug } = req.body;

        var blogDetails = await prisma.post.findMany({
            orderBy: {
                id: "desc",
            },
            where: { deleted_at: null, published: true, slug: slug },
        });

        if (blogDetails.length > 0) {
            res.status(200).json({ status: 200, data: blogDetails });
        } else {
            console.log("Error");
            res.status(200).json({ status: 201, data: [] });
        }
    } else {
        const blogDetails = await prisma.post.findMany({
            orderBy: {
                id: "desc",
            },
            where: { deleted_at: null, published: true },
        });
        const featuredBlogDetails = await prisma.post.findMany({
            orderBy: {
                id: "desc",
            },
            where: { deleted_at: null, published: true, features: true },
        });

        if (blogDetails.length > 0) {
            res.status(200).json({ status: 200, data: blogDetails, featuredBlog: featuredBlogDetails });
        } else {
            console.log("Error");
            res.status(200).json({ status: 201, data: [], featuredBlog: [] });
        }
    }
}
