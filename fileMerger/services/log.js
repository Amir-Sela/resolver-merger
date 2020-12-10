const {
    getLogsResolver,
} = require('../resolvers/logsResolvers')


const {insertLogEntryResolver} = require("../resolvers/casesResolvers");
module.exports={
    logsQueryType:{
        getLogs:getLogsResolver
    }
,
    logMutationType: {
        insertLogEntry: insertLogEntryResolver
    }
}