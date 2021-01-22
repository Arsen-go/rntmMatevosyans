const User = require("../models/user-schema");

class UserRouter {
    async saveUser(req, res) {
        try {
            const user = new User(req.body);
            let result = await user.save();
            res.json({result});
        } catch (error) {
            console.log(error);
            throw new Error("Error on save user");
        }
    }
}

module.exports = new UserRouter;