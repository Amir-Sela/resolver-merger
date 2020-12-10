const {userByUserNameResolverWrapper} = require('../resolvers/usersResolvers');
module.exports={
    lockReplyType:{
        lockingUser:userByUserNameResolverWrapper
    }
}