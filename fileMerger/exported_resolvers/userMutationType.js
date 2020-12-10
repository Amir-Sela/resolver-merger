const {syncUsersFromAdResolver, updateUserResolver, createUserResolver} = require("../resolvers/usersResolvers");
module.exports = {
    userMutationType: {
        createUser: createUserResolver,
        updateUser: updateUserResolver,
        syncUsersFromAd: syncUsersFromAdResolver
    }
}