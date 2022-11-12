import nodemailer from "nodemailer";
import path from "path";
import ejs from "ejs";
import { EmailConfig } from "~/lib/constant";
import { EmailUserName } from "~/lib/constant";
export default async function handle(req, res) {
    try {
        const { name, email, code } = req.body;
        const url = process.env.NEXT_BASE_URL;

        var smtpTransport = nodemailer.createTransport({
            service: "Gmail",
            secure: false,
            auth: EmailConfig,
            tls: {
                rejectUnauthorized: false,
            },
        });

        smtpTransport.verify(function (error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log("Server is ready to take our messages");
            }
        });

        ejs.renderFile(path.resolve(`./components/email/forgot.ejs`), { name: name, code: code, url: url }, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                let from = `${EmailUserName} <${EmailConfig.user}>`;
                var mainOptions = {
                    from: from,
                    to: email,
                    subject: "Stemnovate User Profile Reset password",
                    html: data,
                };

                smtpTransport.sendMail(mainOptions, function (err, info) {
                    if (err) {
                        console.log(err);
                        res.json({
                            msg: "fail",
                        });
                    } else {
                        console.log(info);
                        res.json({
                            msg: "success",
                        });
                    }
                });
            }
        });
    } catch (error) {
        res.status(500).send("error", error);
    }
}
