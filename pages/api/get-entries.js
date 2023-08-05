import prisma from "../../lib/prisma";

export default async function handle(req, res) {

  const result = await prisma.user.findUnique({
    where: {
      email: 'Work.rjkashyap05@gmail.com',
    },
  })
  res.json(result);
}

