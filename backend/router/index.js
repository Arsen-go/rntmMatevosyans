const { saveUserMessage } = require("./rntm-message-router");
const { saveUser, addOneVisitor, getVisitorsLength } = require("./user-router");

module.exports = {
    saveUserMessage,
    saveUser,
    addOneVisitor,
    getVisitorsLength,
};
