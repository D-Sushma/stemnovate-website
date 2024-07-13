import prisma from "~/lib/prisma";
import bcrypt from "bcrypt";
import { decode } from "hex-encode-decode";

export default async function handle(req, res) {
    if (req.method == "POST") {
        try {
            const { code, password, confirm } = req.body;
            if(code!==null)
            {
                if(password==confirm)
                {
                    const HexToPlain = decode(code);
                    console.log(HexToPlain);
                    const checkuser = await prisma.customers.findMany({
                        where: {
                            email: HexToPlain,
                        },
                        select: {
                            id: true,
                            password: true,
                        },
                    });
                    if (checkuser.length > 0) {
                        const previousPassword = checkuser[0].password;
                        if (bcrypt.compareSync(confirm, previousPassword)) {
                            response = {
                                code: "401",
                                message: "New password must be different from the previous password.",
                                result: "",
                            };
                            res.status(401).send(response);
                            return;
                          }
                        const hash = bcrypt.hashSync(confirm, 10);
                        const updateUser = await prisma.customers.update({
                            where: {
                                id: checkuser[0].id,
                            },
                            data: {
                                password: hash,
                            },
                        });
                      if(updateUser!==null)
                      {
                        const resullt = {
                            email: checkuser[0].email,
                            firstname: checkuser[0].firstname,
                            
                            message: "Password Changed Successfully. Please Login With New Password",
                        };
                        var response = {
                            code: "200",
                            result: resullt,
                        };
                        res.status(200).send(response);
                      }
                      else{
                        const resullt = {
                            email: checkuser[0].email,
                            firstname: checkuser[0].firstname,
                            message: "Something Went To Wrong. Please try after some time",
                        };
                         response = {
                            code: "500",
                            result: resullt,
                        };
                        res.status(500).send(response);
                      }
                    } else {
                        response = {
                            code: "401",
                            message: "User Not Found",
                            result: "",
                        };
                        res.status(401).send(response);
                    }
                }
                else{
                    response = {
                        code: "401",
                        message: "Both Password Not Match",
                        result: "",
                    };
                    res.status(401).send(response);
                }
            }
            else{
                response = {
                    code: "401",
                    message: "Code Not Found",
                    result: "",
                };
                res.status(401).send(response);
            }
        } catch (error) {
            res.status(500).send({ error: true, message: error });
        }
    } else {
        res.status(500).send({ error: true, message: "Bed Request" });
    }
}
