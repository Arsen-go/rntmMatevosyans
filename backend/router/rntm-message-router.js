const controller = require("../controller/rntm-meesage-controller");
const {sendMailToUser, sendMailRntm} = require("../mail_controller/rntm-mail");
var validator = require("email-validator");

function saveUserMessage(req, res) {
    console.log(req.body);
    if (validator.validate(req.body.email)) {
        sendMailRntm(req);
        sendMailToUser(req, res);
        controller.saveMessage(req.body);
    }
}

module.exports = {
    saveUserMessage,
};