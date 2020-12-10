const {
    deleteQueryDataResolver,
    saveQueryDataResolver
} = require("../resolvers/queryDataResolver")
module.exports = {
    queryDataMutationType: {
        saveQueryData: saveQueryDataResolver,
        deleteQueryData: deleteQueryDataResolver
    }
}