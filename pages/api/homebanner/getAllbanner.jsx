import prisma from "~/lib/prisma"

export default async function handler(req, res) {
  try {
   res.setHeader('Cache-Control', 'max-age=3600');

  if (req.method == "POST") {
    const { url } = req.body
    // console.log(url);

    const promotionsData = await prisma.home_banner.findMany({
      where: { url: url }
    })

    // console.log("promotionsData", promotionsData);

    if (promotionsData.length > 0) {
      res.status(200).json({ status: 200, data: promotionsData })
    } else {
      console.log("Error")
      res.status(200).json({ status: 201, data: [] })
    }
  } else {
    const promotionsData = await prisma.home_banner.findMany({
       where: { deleted_at: null, published: true },
      orderBy: { banner_id: "desc" }
    })
    if (promotionsData.length > 0) {
      // for (let index = 0; index < promotionsData.length; index++) {
      //     const element = promotionsData[index].product_category;
      //     var str_array = JSON.parse(element);
      //     const catid = [];
      // for (let index = 0; index < str_array.length; index++) {
      //     const element = str_array[index];
      //     catid.push(parseInt(element.id));
      // }
      // console.log("element", str_array)
      // const ret = await prisma.category.findMany({
      //     where: {
      //         id: { in: catid },
      //     },
      //     select: {
      //         category_name: true,
      //     },
      // });
      // console.log("Cat Data", ret);
      // console.log("promotionsData", index, promotionsData[index]);
      // return ret
      // promotionsData.category = ret
      // promotionsData[index].category = ret;
      // console.log("promotionsData", promotionsData)
      // }

      res.status(200).json({ status: 200, data: promotionsData })
    } else {
      console.log("Error")
      res.status(200).json({ status: 201, data: [] })
    }
  }
} catch (error) {
  console.error("An error occurred:", error);
  res.status(500).json({ error: "Internal Server Error" });
}
}
