const {
    getNewsBoxItemsResolver,
    getArchiveResolver,
    fullTextSearchResolver,
    getNewsBoxCountsResolver,
    getFilterValuesResolver,
    getRuleTagsResolver
} = require('../resolvers/newsBoxResolvers')
module.exports = {
    newsBoxQuery: {
        getArchive: getArchiveResolver,
        SynchroniseNewsBox: getNewsBoxItemsResolver,
        fullTextSearch: fullTextSearchResolver,
        getNewsBoxCounts: getNewsBoxCountsResolver,
        getFilterValues: getFilterValuesResolver,
        getRuleTags: getRuleTagsResolver
    }
}