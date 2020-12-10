const {userByUserNameResolverWrapper} = require('../resolvers/usersResolvers');
module.exports={
    lockStatusType:{
        lockingUser:userByUserNameResolverWrapper
    }
}