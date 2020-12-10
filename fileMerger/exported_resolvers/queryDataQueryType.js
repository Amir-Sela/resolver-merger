const {getQueryDataByIdsResolver, getQueryDataResolver} = require("../resolvers/queryDataResolver");
module.exports = {
    queryDataQueryType: {
        getQueryDataByIds: getQueryDataByIdsResolver,
        getQueryData: getQueryDataResolver
    }
}