const {userByUserNameResolverWrapper} = require('../resolvers/usersResolvers');
module.exports = {
    ChangeTrackingDataType: {
        user: userByUserNameResolverWrapper
    }
}