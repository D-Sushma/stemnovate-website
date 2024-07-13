import prisma from "~/lib/prisma"
import moment from "moment"

export default async function handle(req, res) {
    const { UserIdId, resources_id } = req.body
    console.log('typeof resources_id', typeof resources_id)

    if (req.method === "POST") {

        var ResourcesData = await prisma.resorces_purchese_details.findMany({
            take: 1,
            orderBy: {
                id: "desc"
            },
            select: {
                id: true,
                resources_id: true,
                is_access: true
            }
        })
        console.log('ResourcesData', ResourcesData)
        if (ResourcesData.length > 0) {
            var Id = ResourcesData[0].id;

            const updateUser = await prisma.resorces_purchese_details.update({
                where: {
                    id: Id,
                },
                data: {
                    is_access: true,
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
