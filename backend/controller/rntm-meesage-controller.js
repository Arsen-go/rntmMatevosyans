const db = require('../db')
const RntmMessageSchema = require("../tables/rntm-message-schema")

class RntmMessage {
    async saveMessage(data) {
        const message = new RntmMessageSchema(data);
        try {
            let result = await message.save();
            return result;
        } catch (err) {
            console.log(err)
        }
    }
}

const RntmUserMessage = new RntmMessage();
module.exports = RntmUserMessage;