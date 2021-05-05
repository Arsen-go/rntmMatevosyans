const User = require("../models/user-schema");
const Visitor = require("../models/visitors");

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
    };

    async addOneVisitor() {
        try {
            const visitor = await Visitor.findOne({ id: "countmodelforvisitors" });
            if(!visitor){
                const visitors = new Visitor({
                    id: "countmodelforvisitors",
                    count: 1,
                });
                await visitors.save();
                return;
            }
            ++visitor.count;
            await visitor.save();
        } catch (error) {
            throw new Error("Error on save user");
        }
    };
};

module.exports = new UserRouter;