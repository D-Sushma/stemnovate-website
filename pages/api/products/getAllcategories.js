import prisma from "~/lib/prisma";
import { Prisma } from "@prisma/client";
export default async (req, res) => {
    res.setHeader('Cache-Control', 's-maxage=86400')
    try {
        if (req.method == "GET") {
            var whereIs = {
                status: 1,
                deleted_at: null,
                parentcategory: 4,
                is_perent: 0,
            };
            if (req.query.slug) {
                const slugg = req.query.slug;
                whereIs = {
                    status: 1,
                    deleted_at: null,
                    slug: slugg,
                };
            }

            const catagories = await prisma.category.findMany({
                where: whereIs,
                select: {
                    id: true,
                    category_name: true,
                    urllink: true,
                    slug: true,
                    other_category: {
                        where: { status: 1, deleted_at: null, is_perent: 0 },
                        select: {
                            id: true,
                            category_name: true,
                            urllink: true,
                            slug: true,
                        },
                    },
                },
            });

            var response = {
                status: 200,
                result: catagories,
            };

            res.status(200).json(response);
        } else {
            res.status(400).json("Bad Request");
        }
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            if (e.code === "P2002") {
             
            }
        }
        throw e;
    }
};
