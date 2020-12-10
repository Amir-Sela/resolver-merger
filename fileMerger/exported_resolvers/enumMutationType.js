const {
    addEnumItemResolver,
    updateEnumItemResolver,
    deleteEnumItemResolver,
    unDeleteEnumItemResolver,
    setOrderByNameResolver,
    postEnumListResolver,
    postEnumBulkResolver
} = require("../resolvers/enumsResolvers");
module.exports = {
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