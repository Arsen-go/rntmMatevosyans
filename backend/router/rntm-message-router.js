const controller = require("../controller/rntm-meesage-controller")
const mail = require("../mail_controller/rntm-mail")
var validator = require("email-validator");

function saveUserMessage(req, res) {
    console.log(req.body);
    if (validator.validate(req.body.email)) {
        mail.sendMailRntm(req);
        controller.saveMessage(req.body);
    }
}

module.exports = {
    saveUserMessage,
}