import prisma from "~/lib/prisma";

export default async function handler(req, res) {
  //if (req.method == "POST") {
    try {
    //  const { blogID } = req.body
    //  console.log("req.body", req.body)
      var PostList = []
      PostList = await prisma.aboutus_history.findMany({
          where: { deleted_at: null }
        })

      if (PostList.length > 0) {
        res.status(200).json({ status: 200, data: PostList })
      } else {
        res.status(200).json({ status: 201, data: PostList })
      }
    } catch (e) {
      res
        .status(503)
        .json({ status: 500, data: [], massage: "something Went to wrong" })
    }
 /* } else {
    res.status(201).json({ status: 201, data: [], massage: "Bed Method" })
  }  */
}
