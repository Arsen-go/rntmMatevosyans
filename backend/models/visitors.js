const mongoose = require("mongoose");

const Visitor = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    count: {
        type: Number,
    }
}, { timestamps: true });

module.exports = mongoose.model("visitor", Visitor);
