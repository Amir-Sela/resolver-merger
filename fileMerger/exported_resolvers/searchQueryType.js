const {
    searchQueryResolver,
    getSearchQueriesResolver,
    getSingleSavedQueryResolver,
    runSearchQueryResolver,
    retrieveLastSearchesResolver,
    suggestResolver,
    searchUsersQueryResolver
} = require('../resolvers/searchResolvers')
module.exports = {
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