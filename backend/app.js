const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router =require("./router");
//app.use(bodyParser.urlencoded({ extended: false }));
const path = require("path");
app.use(bodyParser.json());
const cons = require("consolidate");
const indexRouter = require("./router/indexRouter");

// app.use(express.static("../html"));
// app.use(express.static("../images"));
app.use(express.static("../js"));
// app.use(express.static("../about_me"));
// app.use(express.static("../assets"));
app.use(express.static("assets"));
app.use(express.static("html"));
app.use(express.static("html/assets"));

app.use(express.static(path.join(__dirname, "node_modules")));
app.use(express.static(path.join(__dirname, "node_modules")));

app.engine("html", cons.swig);
app.set("views", path.join(__dirname,"..", "html"));
app.set("view engine", "html");

app.use("/", indexRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("server listening port-> 3000");
});

app.get("/", (req,res) => { 
    res.sendFile(path.join(__dirname,"..","/html/index.html"));
 });

app.post("/messageRntm", router.saveUserMessage);

app.post("/saveUser", router.saveUser);
