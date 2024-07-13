import prisma from "~/lib/prisma"

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 's-maxage=86400')
  try {
    if (req.method == "POST") {
      const { coupon_code } = req.body
      const promotionsData = await prisma.coupons.findMany({
        where: {
            coupon_code: coupon_code,
        }
      })
      if (promotionsData.length > 0) {
        res.status(200).json({ status: 200, data: promotionsData })
      } else {
        res.status(200).json({ status: 201, data: [] })
      }
    } else {
      res.status(200).json({ status: 201, data:'something went wrong' })
    }
  } catch (e) {
    res
      .status(200)
      .json({ status: 500, data: [], massage: "something Went to wrong" })
  }
}
