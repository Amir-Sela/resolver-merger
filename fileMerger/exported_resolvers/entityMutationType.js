const {
    createEntitiesResolver,
    updateEntitiesResolver,
    deleteEntitiesResolver
} = require("../resolvers/entitiesResolvers");
module.exports = {
    entityMutationType: {
        createEntity: createEntitiesResolver,
        updateEntity: updateEntitiesResolver,
        deleteEntity: deleteEntitiesResolver
    }
}