const {userByUserNameResolverWrapper} = require('../resolvers/usersResolvers');
module.exports={
    CaseDetails:{
        modifiedBy:userByUserNameResolverWrapper
    }
}