import prisma from "~/lib/prisma"

export default async function handleCoupon(req, res) {
    try {
    const coupons = await prisma.coupons.findMany()

    res.status(200).json({
      code: "200",
      message: "Success",
      exist: "true",
      result: coupons
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      code: "500",
      message: "Internal Server Error",
      error: error.message
    })
  }
}