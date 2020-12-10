const {userByUserNameResolver} = require("../resolvers/usersResolvers");
const {createResolverWithArgs} = require("../utils")
module.exports = {
    AlertObjectType: {
        user: createResolverWithArgs(userByUserNameResolver, (parent) => {
            return {userName: parent.userId}
        })
    }
}