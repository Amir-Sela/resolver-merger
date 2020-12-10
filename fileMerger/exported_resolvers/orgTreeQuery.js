const {
    getSubordinatesForPositionResolver,
    getSubTreeForPositionResolver,
    searchPositionByUserNameResolver,
    getPositionResolver,
    getDivisionsResolver
} = require('../resolvers/orgTreeResolvers')

module.exports = {
    orgTreeQuery: {
        getSubOrdinatesForPosition: getSubordinatesForPositionResolver,
        getSubTreeForPosition: getSubTreeForPositionResolver,
        searchPositionByUserName: searchPositionByUserNameResolver,
        getPosition: getPositionResolver,
        getExistingDivisions: getDivisionsResolver
    }
}