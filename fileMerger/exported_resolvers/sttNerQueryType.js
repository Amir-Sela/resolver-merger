const {getSttNamedEntityRecognitionEntitiesResolver} = require("../resolvers/nerResolvers");
module.exports = {
    sttNerQueryType: {
        getSttNerEntities: getSttNamedEntityRecognitionEntitiesResolver
    }
}