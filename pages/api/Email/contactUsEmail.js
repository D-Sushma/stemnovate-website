
import nodemailer from 'nodemailer'
import path from "path"
import ejs from "ejs";
export default async function handle(req, res) {
   try {
     const {name,email,phone,message} = req.body;
    const toemail = "prabir.d06@gmail.com";
    var smtpTransport = nodemailer.createTransport({
        service: "Gmail",
        secure: false,
        auth: {
          user: "info.rjkashyap05@gmail.com",
          pass: 'Work@9302460942'
        },
        tls: {
          rejectUnauthorized: false
        }
      });

      smtpTransport.verify(function (error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log("Server is ready to take our messages");
        }
      });

   
   
    ejs.renderFile(path.resolve(`./components/email/contactus.ejs`), { name: name,phone: phone,email: email,message: message }, function (err, data) {
      if (err) {
          console.log(err);
      } else {
        let from = `Support  <info.rjkashyap05@gmail.com>`
          var mainOptions = {
              from: from,
              to: toemail,
              subject: 'Contact Us',
              html: data,
             
          };
         
          smtpTransport.sendMail(mainOptions, function (err, info) {
            if (err) {
              console.log(err);
              res.json({
                msg: 'fail'
              })
            } else {
              console.log(info);
              res.json({
                msg: 'success'
              })
            }
        });
        }
    });
  
   } catch (error) {
    res.status(500).send('error',error)
   }
}
