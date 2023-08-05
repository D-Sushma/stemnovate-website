import prisma from "~/lib/prisma";
import { Prisma } from "@prisma/client";
export default async (req, res) => {
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
                    // short_description: true,
                    urllink: true,
                    slug: true,
                    other_category: {
                        where: { status: 1, deleted_at: null, is_perent: 0 },
                        select: {
                            id: true,
                            category_name: true,
                            // short_description: true,
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
        // res.status(500).json({ status: 500, data: error });
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            // The .code property can be accessed in a type-safe manner
            if (e.code === "P2002") {
                console.log("There is a unique constraint violation, a new user cannot be created with this email");
            }
        }
        throw e;
    }
};
