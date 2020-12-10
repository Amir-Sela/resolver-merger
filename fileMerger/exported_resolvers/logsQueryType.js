const {
    getLogsResolver,
} = require('../resolvers/logsResolvers')

module.exports={
    logsQueryType:{
        getLogs:getLogsResolver
    }
}