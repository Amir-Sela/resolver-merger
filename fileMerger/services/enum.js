const {
    enumListResolver,
    getEnumMetadataResolver,
    getRootEnumsResolver,
    searchByDisplayNameResolver
} = require('../resolvers/enumsResolvers')

const {
    addEnumItemResolver,
    updateEnumItemResolver,
    deleteEnumItemResolver,
    unDeleteEnumItemResolver,
    setOrderByNameResolver,
    postEnumListResolver,
    postEnumBulkResolver
} = require("../resolvers/enumsResolvers");
module.exports={
    enumQuery: {
        getEnum: enumListResolver,
        searchRequest: searchByDisplayNameResolver,
        getEnumMetadata: getEnumMetadataResolver,
        getRootEnums: getRootEnumsResolver
    }
,
    enumMutationType: {
        addEnumItemRequest: addEnumItemResolver,
        updateEnumItemRequest: updateEnumItemResolver,
        deleteEnumItemRequest: deleteEnumItemResolver,
        unDeleteEnumItemRequest: unDeleteEnumItemResolver,
        setOrderByNameRequest: setOrderByNameResolver,
        postEnumListRequest: postEnumListResolver,
        postEnumItemsBulkRequest: postEnumBulkResolver
    }
}