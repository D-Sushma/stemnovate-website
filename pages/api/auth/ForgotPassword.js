import prisma from "~/lib/prisma";
import bcrypt from "bcrypt";
import { encode,decode } from "hex-encode-decode";
export default async function handle(req, res) {
   
        if(req.method=='POST')
        {

            try {
                const { Email } = req.body;
                // response = {
                //     code: "401",
                //     message: "Unauthorized Access",
                //     result: "",
                // };
                // res.status(200).send({msg:"hello"});
    
                const checkuser = await prisma.customers.findMany({
                    where: {
                        email: Email
                    },
                    select: {
                        id: true,
                        firstname: true,
                        lastname: true,
                        email:true,
                        phoneno:true,
                        location:true,
                        status:true,
                        },
                });
               
    
                if (checkuser.length>0) {
                    const myPlaintextPassword= checkuser[0].email;
                    const EncodedText=encode(myPlaintextPassword)

                   
                    const resullt={
                        email: checkuser[0].email,
                        firstname:  checkuser[0].firstname,
                        code:  EncodedText,
                        message:  "Email Sent Successfully. Please Check Your Mail",
                    }
    
                            var response = {
                                 code: "200",
                                 result: resullt,
                             };
                             res.status(200).send(response)
    
                } else {
                    response = {
                        code: "401",
                        message: "User Not Found",
                        result: "",
                    };
                    res.status(401).send(response)
                }
                
            } catch (error) {
                res.status(500).send({error:true,message: error});
            }

           
        // } else {
           
        //     res.status(401).send({msg: "Unauthorized Access"});
        // }

        }
        else{
            res.status(500).send({"error":true,'message':"Bed Request"});
        }
     
   
}
