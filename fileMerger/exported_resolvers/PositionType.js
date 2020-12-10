const {userByUserNameResolver} = require("../resolvers/usersResolvers");
const {PositionTypeIsHeadOfDivision} = require("../resolvers/orgTreeResolvers");
const {createResolverWithArgs} = require("../utils");

module.exports={
    PositionType:{
        userInfo:createResolverWithArgs(userByUserNameResolver,
            (parent) => ({ userName: parent.userName }) ),
        isHeadOfDivision:PositionTypeIsHeadOfDivision
    }
}