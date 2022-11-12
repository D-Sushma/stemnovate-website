import prisma from "~/lib/prisma"
import moment from "moment"
import { v4 as uuidv4, v1 as uuidv1 } from "uuid"
export default async function handle(req, res) {
  const { UserIdId } = req.body

  if (req.method === "POST") {
    const updateUser = await prisma.resorces_purchese_details.create({
      data: {
        purchase_id: uuidv4(),
        user_id: UserIdId,
        resources_id: "3",
        txn_id: uuidv1(),
        payment_id: uuidv4(),
        collected_amount: 50,
        created_at: moment().format()
      }
    })

    // send mail

    var response = {
      code: "200",
      message: "Resources Updated Successfully",
      result: updateUser
    }
    res.json(response)
  } else {
    response = {
      code: "401",
      message: "No Status Updates",
      result: ""
    }
    res.json(response)
  }
}
