const {
    getSubordinatesForPositionResolver,
    getSubTreeForPositionResolver,
    searchPositionByUserNameResolver,
    getPositionResolver,
    getDivisionsResolver
} = require('../resolvers/orgTreeResolvers')


const {
    updateDivisionResolver,
    updatePositionAssigneeResolver,
    deletePositionResolver,
    updatePositionResolver,
    createNewPositionResolver
} = require("../resolvers/orgTreeResolvers");
module.exports={
    orgTreeQuery: {
        getSubOrdinatesForPosition: getSubordinatesForPositionResolver,
        getSubTreeForPosition: getSubTreeForPositionResolver,
        searchPositionByUserName: searchPositionByUserNameResolver,
        getPosition: getPositionResolver,
        getExistingDivisions: getDivisionsResolver
    }
,
    orgTreeMutations: {
        createNewPosition: createNewPositionResolver,
        updatePosition: updatePositionResolver,
        deletePosition: deletePositionResolver,
        updatePositionAssignee: updatePositionAssigneeResolver,
        updateDivision: updateDivisionResolver
    }
}