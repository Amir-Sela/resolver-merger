const {
    getStateResolver,
    getShortestPathResolver,
} = require('../resolvers/visualizationResolvers')

const {
    addToVisualizationResolver,
    getAllPathsResolver,
    expandStateResolver,
    deleteFromStateResolver,
    removeFromStateResolver,
    addToStateResolver,
    createStateResolver,
    unExpandStateResolver,
    saveStateResolver
} = require("../resolvers/visualizationResolvers");
module.exports={
    visualizationQuery: {
        getState: getStateResolver,
        getShortestPath: getShortestPathResolver
    }
,
    visualizationMutation: {
        setState: saveStateResolver,
        unexpandState: unExpandStateResolver,
        createState: createStateResolver,
        addToState: addToStateResolver,
        removeFromState: removeFromStateResolver,
        deleteFromState: deleteFromStateResolver,
        expandState: expandStateResolver,
        getAllPaths: getAllPathsResolver,
        addToVisualization: addToVisualizationResolver
    }
}