const {
    getStateResolver,
    getShortestPathResolver,
} = require('../resolvers/visualizationResolvers')
module.exports = {
    visualizationQuery: {
        getState: getStateResolver,
        getShortestPath: getShortestPathResolver
    }
}