const {
    enumListResolver,
    getEnumMetadataResolver,
    getRootEnumsResolver,
    searchByDisplayNameResolver
} = require('../resolvers/enumsResolvers')
module.exports = {
    enumQuery: {
        getEnum: enumListResolver,
        searchRequest: searchByDisplayNameResolver,
        getEnumMetadata: getEnumMetadataResolver,
        getRootEnums: getRootEnumsResolver
    }
}