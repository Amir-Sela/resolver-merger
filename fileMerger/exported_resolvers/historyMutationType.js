const {markHistoryAsMistakeResolver} = require("../resolvers/historyResolvers");
module.exports = {
    historyMutationType: {
        deleteHistory: markHistoryAsMistakeResolver
    }
}