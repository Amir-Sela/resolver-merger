const {userByUserNameResolverWrapper} = require('../resolvers/usersResolvers');
module.exports={
    historyEntryType:{
        user:userByUserNameResolverWrapper
    }
}