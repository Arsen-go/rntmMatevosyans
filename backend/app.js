const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router =require("./router");
//app.use(bodyParser.urlencoded({ extended: false }));
const path = require("path");
app.use(bodyParser.json());

app.use(express.static("../html"));
app.use(express.static("../images"));
app.use(express.static("../js"));
app.use(express.static("../about_me"));
app.use(express.static("../assets"));
app.use(express.static(path.join(__dirname, "node_modules")));
app.use(express.static(path.join(__dirname, "node_modules")));

app.listen(3000, () => {
    console.log("server listening port-> 3000");
});

app.get("/", () => { });

app.post("/messageRntm", router.saveUserMessage);

app.post("/saveUser", router.saveUser);
