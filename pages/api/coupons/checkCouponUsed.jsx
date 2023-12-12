import prisma from "~/lib/prisma"

export default async function handleCouponUsed(req, res) {
  try {
    const {coupon_code,customer_id} = req.body;
    const couponsUsed = await prisma.coupon_used.findMany({
      where: { coupon_code: coupon_code, customer_id: customer_id },
    });
    console.log("coupon_code,couponsUsed",coupon_code,couponsUsed) //Test-Demo Get10

    if(couponsUsed.length > 0){
      // res.status(200).json({
      //   code: "200",
      //   message: "Success",
      //   exist: true,
      //   result: couponsUsed
      // })
      if(couponsUsed[0]?.coupon_code === coupon_code){
        res.status(200).json({
          code: "200",
          message: `Coupon code "${couponsUsed[0]?.coupon_code}" is already used`,
          exist: true,
          result: couponsUsed
        })
      }else{
        res.status(400).json({
          code: "400",
          message: "Coupon Not Found",
          exist: false,
          result: []
        })
      }
    }else{
      res.status(200).json({
        code: "200",
        message:`Coupon "${coupon_code}"  not used before`,
        exist: false,
        result: []
      })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({
      code: "500",
      message: "Internal Server Error",
      error: error.message
    })
  }
}

