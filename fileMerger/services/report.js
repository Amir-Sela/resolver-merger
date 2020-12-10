const {createReportResolver} = require("../resolvers/reportResolver");

const {userByUserNameResolver} = require("../resolvers/usersResolvers");
const {createResolverWithArgs} = require("../utils")

module.exports={
    reportMutation: {
        addReport: createReportResolver
    }
,
    ReportEntityResponse:{
        user:createResolverWithArgs(userByUserNameResolver, (parent) => {
            return { userName: parent.userId }
        })
    }
}