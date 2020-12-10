const {
    deleteSearchQueryResolver,
    saveSearchQueryResolver,
    editQueryNameResolver
} = require("../resolvers/searchResolvers");
module.exports = {
    searchMutationType: {
        deleteSearch: deleteSearchQueryResolver,
        saveSearch: saveSearchQueryResolver,
        editQueryName: editQueryNameResolver
    }
}