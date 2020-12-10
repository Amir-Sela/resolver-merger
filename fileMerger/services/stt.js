const {getSttNamedEntityRecognitionEntitiesResolver} = require("../resolvers/nerResolvers");

const {
    sttContentResolver,
    sttWordsResolver
} = require('../resolvers/sttResolvers')

const {getStepStatusResolver} = require("../resolvers/taskManagerResolvers");
const {createResolverWithArgs} = require("../utils")
module.exports={
    sttNerQueryType: {
        getSttNerEntities: getSttNamedEntityRecognitionEntitiesResolver
    }
,
    sttQuery: {
        sttContent: sttContentResolver,
        sttWords: sttWordsResolver
    }
,
    sttNamedEntityRecognitionDocument: {
        status: createResolverWithArgs(getStepStatusResolver, (parent) => {
            return {
                sourceId: parent.sourceEntityId,
                stepType: 'STT-NER'
            }
        })
    }
}