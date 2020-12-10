const {
    deleteQueryDataResolver,
    saveQueryDataResolver
} = require("../resolvers/queryDataResolver")

const {getQueryDataByIdsResolver, getQueryDataResolver} = require("../resolvers/queryDataResolver");
module.exports={
    queryDataMutationType: {
        saveQueryData: saveQueryDataResolver,
        deleteQueryData: deleteQueryDataResolver
    }
,
    queryDataQueryType: {
        getQueryDataByIds: getQueryDataByIdsResolver,
        getQueryData: getQueryDataResolver
    }
}