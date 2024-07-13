import prisma from "~/lib/prisma";

export default async function handler(req, res) {
  try {

      const promotionsData = await prisma.imp_policies.findMany({
        take: 1,
        orderBy: {
            id: "desc",
        },
        where: { deleted_at: null },
        select: {
          cookies_policy: true,
        }
      })
      if (promotionsData.length > 0) {
        res.status(200).json({ status: 200, data: promotionsData })
      } else {
        console.log("Error")
        res.status(200).json({ status: 201, data: [] })
      }

  } catch (e) {
    console.log("e", e)
    res
      .status(200)
      .json({ status: 500, data: [], massage: "something Went to wrong" })
  }
}
