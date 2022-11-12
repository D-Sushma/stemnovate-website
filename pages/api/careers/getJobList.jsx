import prisma from "~/lib/prisma";
export default async function handler(req, res) {
    if (req.method == "POST") {
        try {
            const { JobID } = req.body;
            var JobList = [];
            if (JobID) {
                JobList = await prisma.job_openings.findMany({
                    orderBy: {
                        id: "desc",
                    },
                    where: { deleted_at: null, job_id: JobID, status: true },
                });
            } else {
                JobList = await prisma.job_openings.findMany({
                    orderBy: {
                        id: "desc",
                    },
                    where: { deleted_at: null, status: true, internship: false },
                });
            }

            if (JobList.length > 0) {
                res.status(200).json({ status: 200, data: JobList });
            } else {
                res.status(200).json({ status: 201, data: JobList });
            }
        } catch (e) {
            res.status(503).json({ status: 500, data: [], massage: "something Went to wrong" });
        }
    } else {
        res.status(201).json({ status: 201, data: [], massage: "Bed Method" });
    }
}
