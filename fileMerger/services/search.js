const {
    deleteSearchQueryResolver,
    saveSearchQueryResolver,
    editQueryNameResolver
} = require("../resolvers/searchResolvers");

const {
    searchQueryResolver,
    getSearchQueriesResolver,
    getSingleSavedQueryResolver,
    runSearchQueryResolver,
    retrieveLastSearchesResolver,
    suggestResolver,
    searchUsersQueryResolver
} = require('../resolvers/searchResolvers')
module.exports={
    searchMutationType: {
        deleteSearch: deleteSearchQueryResolver,
        saveSearch: saveSearchQueryResolver,
        editQueryName: editQueryNameResolver
    }
,
    searchQueryType: {
        wsEntities: searchQueryResolver,
        SavedQueries: getSearchQueriesResolver,
        retrieveAQuery: getSingleSavedQueryResolver,
        runSavedSearch: runSearchQueryResolver,
        retrieveLastSearches: retrieveLastSearchesResolver,
        suggest: suggestResolver,
        searchForWSUsers: searchUsersQueryResolver
    }
}