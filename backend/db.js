const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/rntm";

mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => {
    console.log("connected to database");
  }
);

exports.connect = this.connect;