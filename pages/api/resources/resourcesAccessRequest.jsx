import prisma from "~/lib/prisma"
import moment from "moment"

export default async function handle(req, res) {
  const { UserIdId, resources_id } = req.body

  if (req.method === "POST") {
    const updateUser = await prisma.resources_requestaccess.create({
      data: {
        user_id: UserIdId,
        resources_id: resources_id,
        created_at: moment().format()
      }
    })

    var response = {
      code: "200",
      message: "Successfully",
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
