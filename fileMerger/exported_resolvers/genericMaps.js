const {fetchLayerResolver} = require("../resolvers/genericMapsResolver");
module.exports = {
    genericMaps: {
        fetchLayer: fetchLayerResolver
    }
}