const db = require("../db");
const RntmMessageSchema = require("../models/rntm-message-schema");

class RntmMessage {
    async saveMessage(data) {
        const message = new RntmMessageSchema(data);
        try {
            await message.save();
            return {info: true};
        } catch (err) {
            console.log(err);
            throw new Error("Error on saveMessage");
        }
    }
}

const RntmUserMessage = new RntmMessage();
module.exports = RntmUserMessage;