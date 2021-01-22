const nodemailer = require("nodemailer");
var validator = require("email-validator");


function sendMailRntm(req) {
    const transport = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "matevosyan20002@gmail.com",
            pass: "ars0220742"
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

module.exports = {
    sendMailRntm,
};