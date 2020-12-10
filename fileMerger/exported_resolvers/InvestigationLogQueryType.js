const { getInvestigationLogResolver } = require('../resolvers/investigationLogResolvers')

module.exports={
    InvestigationLogQueryType:{
        getLogs:getInvestigationLogResolver
    }
}