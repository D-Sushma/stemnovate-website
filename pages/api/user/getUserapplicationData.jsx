
import prisma from "~/lib/prisma";
import { getSession } from "next-auth/react"
import { v4 as uuidv4 } from 'uuid';
import { Prisma } from '@prisma/client'

export default async function handle(req, res) {
   try {
    const session = await getSession({ req })
     var response=''
    if(session!=null)
    {

       var getuser=[]
        
        const checkuser = await prisma.customer_application_details.findMany({
            where: {
                customer_id: session.id
            },
        });
        getuser.push(checkuser[0])

        const userAddress = await prisma.customer_address_details.findMany({
            where: {
                customer_id: session.id
            },
        });

        getuser.push(userAddress[0])
        console.log("checkuser",getuser)
        res.status(200).send(getuser)
       
  

    }
    else
    {
        res.status(401).send({
            unauthorized: 'You are not authorized to view this page'
        })
      

    }
   
   
   } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      // The .code property can be accessed in a type-safe manner
      if (e.code === 'P2002') {
        console.log(
          'There is a unique constraint violation, a new user cannot be created with this email'
        )
      }
    }
    throw e
  }  
}
