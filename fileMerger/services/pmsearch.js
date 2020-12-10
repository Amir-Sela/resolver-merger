const {
    getMetadataResolver,
    searchResolver,
    scanResolver
} = require('../resolvers/pmSearchResolvers')

module.exports={
    pmSearchQueryType: {
        getMetadata: getMetadataResolver,
        search: searchResolver,
        scan: scanResolver
    }
}