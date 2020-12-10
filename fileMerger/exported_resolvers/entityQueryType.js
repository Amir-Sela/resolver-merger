const {
    getEntitiesResolver,
    getMultipleEntitiesResolver,
    lastUpdateDateResolver,
    getDefaultPermissionsResolver
} = require('../resolvers/entitiesResolvers')
module.exports = {
    entityQueryType: {
        getEntity: getEntitiesResolver,
        getMultipleEntities: getMultipleEntitiesResolver,
        getLastUpdateDate: lastUpdateDateResolver,
        getdefaultPermissions: getDefaultPermissionsResolver
    }
}