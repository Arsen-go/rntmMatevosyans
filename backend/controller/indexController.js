class IndexController {
    homePage(req, res) {
        res.render("main-page.html");
    }
    loginPage(req, res) {
        res.render("index");
    }
    profilePage(req, res) {
        res.render("about-me");
    }
    contactRntm(req, res) {
        res.render("contact-rntm");
    }
    rntm(req, res) {
        res.render("rntm.html");
    }
}
module.exports = new IndexController();