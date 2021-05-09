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
            console.log("Error on add visitor.");
        }
    };

    async getVisitorsLength(req, res) {
        try {
            const visitors = await Visitor.findOne({ id: "countmodelforvisitors" });
            res.json({length: visitors.count}) ;
        } catch (error) {
            console.log(error);
        }
    };
};

module.exports = new UserRouter;