import prisma from "~/lib/prisma"

export default async function handleCouponUsed(req, res) {
  try {
    const {coupon_code,customer_id,discount_type,discount} = req.body;

    const insertUsedCoupon = await prisma.coupon_used.create({
      data: { 
        coupon_code: coupon_code,
        discount_type: discount_type,
        discount: discount,
        customer_id: customer_id,
        created_date: new Date()
      },
    });
    
    let response = {}
    response = {
      code: "200",
      message: "Coupon inserted successfully",
      result: insertUsedCoupon
    }
    res.json(response)
  } catch (error) {
    console.error(error)
    res.status(500).json({
      code: "500",
      message: "Internal Server Error",
      error: error.message
    })
  }
}