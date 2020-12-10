const {userByUserNameResolver} = require("../resolvers/usersResolvers");
const {createResolverWithArgs} = require("../utils")
module.exports = {
    AlertRuleObjectType: {
        user: createResolverWithArgs(userByUserNameResolver, (parent) => {
            return {userName: parent.userId}
        })
    }
}