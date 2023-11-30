import prisma from "~/lib/prisma"

export default async function handleCheckCoupons(req, res) {
  try {
    const { coupon_code } = req.body
    console.log("{coupon_code}", { coupon_code })
    const couponCheck = await prisma.coupons.findMany({
      where: {
        coupon_code: coupon_code
      }
    })
    console.log("couponCheck", couponCheck)

    let response = {}
    if (couponCheck.length > 0) {
      response = {
        code: "200",
        message: "Coupon Already Exist",
        exist: true,
        result: couponCheck
      }
    } else {
      response = {
        code: "404",
        message: "Coupon Not Found",
        exist: false,
        result: []
      }
    }
    res.json(response)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      code: "500",
      message: "Internal Server Error",
      error: error.message
    })
  }
}
