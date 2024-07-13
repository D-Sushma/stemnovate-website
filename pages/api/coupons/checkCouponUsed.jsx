import prisma from "~/lib/prisma"

export default async function handleCouponUsed(req, res) {
  try {
    const {coupon_code,customer_id} = req.body;
    const couponsUsed = await prisma.coupon_used.findMany({
      where: { coupon_code: coupon_code, customer_id: customer_id },
    });
    let response = {}
    if(couponsUsed.length > 0){
      if(couponsUsed[0]?.coupon_code === coupon_code){
        response = {
          code: "200",
          message: `Coupon code "${couponsUsed[0]?.coupon_code}" is already used`,
          exist: true,
          result: couponsUsed
        }
      }else{
        response = {
          code: "404",
          message: "Coupon Not Found",
          exist: false,
          result: []
        }
      }
    }else{
      response = {
        code: "200",
        message: `Coupon "${coupon_code}"  not used before`,
        exist: false,
        result: []
      }
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

