const {
    updateDivisionResolver,
    updatePositionAssigneeResolver,
    deletePositionResolver,
    updatePositionResolver,
    createNewPositionResolver
} = require("../resolvers/orgTreeResolvers");
module.exports = {
    orgTreeMutations: {
        createNewPosition: createNewPositionResolver,
        updatePosition: updatePositionResolver,
        deletePosition: deletePositionResolver,
        updatePositionAssignee: updatePositionAssigneeResolver,
        updateDivision: updateDivisionResolver
    }
}