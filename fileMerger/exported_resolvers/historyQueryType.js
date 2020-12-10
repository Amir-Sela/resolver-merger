const {
    getHistoryResolver,
    getHistoryEntryResolver,
} = require('../resolvers/historyResolvers')
module.exports = {
    historyQueryType: {
        getHistory: getHistoryResolver,
        getHistoryEntry: getHistoryEntryResolver
    }
}