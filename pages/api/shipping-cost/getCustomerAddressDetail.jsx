import prisma from "~/lib/prisma"
import { getSession } from "next-auth/react"

export default async function handleCustomerDetail(req, res) {
  try {
    const {customer_id} = req.body;
    console.log("customerId",customer_id)

    //  we also handle by backend to send customer id by using session and we can only get data in front end y Get method
    const session = await getSession({ req })
    console.log("my session", session)
    if (!session) {
      // If there is no active session, you can handle it accordingly
      res.status(401).json({
        status: "401",
        message: "Unauthorized",
        error: "No active session"
      })
      return
    }
    const userId = session.id
    const userName = session.user.name
    console.log("session userId", userId)
    console.log("session userName", userName)

    // user: { name: 'sushma', email: 'dew.sushma203@gmail.com' },
    // expires: '2023-12-29T13:26:39.602Z',
    // id: 119

    const customerDetail = await prisma.customer_address_details.findMany({
        where: {
            customer_id
        }
    })
    console.log("customerDetail", customerDetail)

    res.status(200).json({
        status: "200",
        message: "success",
        result: customerDetail
    })
} catch (error) {
    console.error(error)
    res.status(500).json({
        status: "500",
        message: "Internal Server Error",
        error: error.message
    })
}
}
