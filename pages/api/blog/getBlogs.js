import prisma from "~/lib/prisma";

export default async function handler(req, res) {
    res.setHeader('Cache-Control', 's-maxage=86400')
    if (req.method == "POST") {
        const { slug } = req.body;
        var blogDetails = await prisma.post.findMany({
            orderBy: {
                id: "desc",
            },
            where: { deleted_at: null, published: true, slug: slug },
            select: {
                name: true,
                slug: true,
                content: true,
                authorId: true,
                authorName: true,
                description: true,
                thumbnail: true,
                banner_title: true,
                banner_img: true,
                blog_meta_desc: true,
                tag: true,
                created_at: true,
                updated_at: true,
                published: true,
                deleted_at: true,
                features: true,
                id: true,
                shareimage: true
            }
        });

        if (blogDetails.length > 0) {
            res.status(200).json({ status: 200, data: blogDetails });
        } else {
            res.status(200).json({ status: 201, data: [] });
        }
    } else {
        const blogDetails = await prisma.post.findMany({
            orderBy: {
                id: "desc",
            },
            where: { deleted_at: null, published: true },
            select: {
                name: true,
                slug: true,
                content: true,
                updated_at: true,
                authorId: true,
                authorName: true,
                description: true,
                thumbnail: true,
                banner_title: true,
                banner_img: true,
                blog_meta_desc: true,
                tag: true,
                created_at: true,
                shareimage: true
            }
        });
        const featuredBlogDetails = await prisma.post.findMany({
            orderBy: {
                id: "desc",
            },
            where: { deleted_at: null, published: true, features: true },
            select: {
                thumbnail: true,
                name: true,
                slug: true,
                tag: true,
            }
        });
        const blogNewsDetails = await prisma.blog_news.findMany({
            orderBy: {
                id: "desc",
            },
            where: { deleted_at: null, published: true },
            select: {
                url: true,
                image: true,
                title: true,
            }
        });

        if (blogDetails.length > 0) {
            res.status(200).json({ status: 200, data: blogDetails, featuredBlog: featuredBlogDetails, blogNewsDetails: blogNewsDetails });
        } else {
            res.status(200).json({ status: 201, data: [], featuredBlog: [], blogNewsDetails: [] });
        }
    }
}
