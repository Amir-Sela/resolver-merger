const {
    getNamedEntityRecognitionEntitiesResolver
} = require('../resolvers/nerResolvers')
module.exports = {
    nerQueryType: {
        getNerEntities: getNamedEntityRecognitionEntitiesResolver
    }
}