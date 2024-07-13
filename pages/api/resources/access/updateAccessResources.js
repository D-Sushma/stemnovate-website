import prisma from "~/lib/prisma"
import moment from "moment"

export default async function handle(req, res) {
    const { UserIdId, resources_id } = req.body
    console.log('typeof resources_id', typeof resources_id)

    if (req.method === "POST") {

        var ResourcesData = await prisma.resources_requestaccess.findMany({
            take: 1,
            orderBy: {
                id: "desc"
            },
            where: {
                user_id: UserIdId,
                resources_id: resources_id,
                published: true
            }
        })
        console.log('ResourcesData-', ResourcesData)
        if (ResourcesData.length > 0) {
            var Id = ResourcesData[0].id;

            const updateUser = await prisma.resources_requestaccess.update({
                where: {
                    id: Id,
                },
                data: {
                    published: false,
                    updated_at: moment().format()
                }
            })

            var response = {
                code: "200",
                message: "Successfully",
                result: updateUser
            }

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
