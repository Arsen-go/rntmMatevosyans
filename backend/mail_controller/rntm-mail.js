const nodemailer = require("nodemailer");
const validator = require("email-validator");


function sendMailRntm(req) {
    const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: "Gmail",
        port: process.env.PORT,
        ignoreTLS: false,
        secure: false,
        auth: {
            user: "matevosyan20002@gmail.com",
            pass: "ars067804"
        }
    });

    const mailOptions = {
        from: req.body.email,
        to: "matevosyan2000@gmail.com",
        subject: "Question",
        text: `${req.body.email} is sent you a message: ${req.body.message}`
    };
    if (validator.validate(req.body.email)) {
        transport.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
            }
        });
    }
}

function sendMailToUser(req, res) {
    let txt = Math.floor(Math.random() * 10000);
    let email = req.body.email;
    const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: "Gmail",
        port: process.env.PORT,
        ignoreTLS: false,
        secure: false,
        auth: {
            user: "matevosyan20002@gmail.com",
            pass: "ars067804"
        }
    });

    const mailOptions = {
        from: "RNTM Matevosyans",
        to: email,
        subject: "RNTM Matevosyans",
        text: "Thank you for your message:I will answer within 24 hours։ "
    };
    if (validator.validate(email)) {
        transport.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.json({ isSend: false, info: `${error}` });
            } else {
                console.log("Email sent: " + info.response);
                res.json({ registrationCode: txt, isSend: true, info: "message is sent" });
            }
        });
    } else {
        console.log("mail validation error", validator.validate(email))
        res.json({ isSend: false, info: "Email validation error" });
    }
}

module.exports = {
    sendMailRntm, 
    sendMailToUser,
};