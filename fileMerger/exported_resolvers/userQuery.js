const {
    usersResolver,
    groupsResolver,
    usersByUsersNameResolver,
    userFromADResolver,
    getLastSyncTimeResolver,
    userByUserNameResolver
} = require('../resolvers/usersResolvers')
module.exports = {
    userQuery: {
        users: usersResolver,
        groups: groupsResolver,
        userByUserName: userByUserNameResolver,
        getUsersByNames: usersByUsersNameResolver,
        getUserFromAd: userFromADResolver,
        getLastSyncTime: getLastSyncTimeResolver
    }
}