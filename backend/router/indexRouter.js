const express = require("express");
const { homePage, loginPage, profilePage, contactRntm, rntm } = require("../controller/indexController");

const router = express.Router();
router.get("/",  loginPage);
router.get("/home", homePage);
router.get("/aboutMe", profilePage);
router.get("/contactrntm", contactRntm);
router.get("/rntm", rntm);

module.exports = router;