const {userByUserNameResolverWrapper} = require('../resolvers/usersResolvers');

const {markHistoryAsMistakeResolver} = require("../resolvers/historyResolvers");

const {
    getHistoryResolver,
    getHistoryEntryResolver,
} = require('../resolvers/historyResolvers')
module.exports={
    historyEntryType:{
        user:userByUserNameResolverWrapper
    }
,
    historyMutationType: {
        deleteHistory: markHistoryAsMistakeResolver
    }
,
    historyQueryType: {
        getHistory: getHistoryResolver,
        getHistoryEntry: getHistoryEntryResolver
    }
}