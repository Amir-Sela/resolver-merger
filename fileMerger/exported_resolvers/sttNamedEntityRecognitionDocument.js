const {getStepStatusResolver} = require("../resolvers/taskManagerResolvers");
const {createResolverWithArgs} = require("../utils")
module.exports = {
    sttNamedEntityRecognitionDocument: {
        status: createResolverWithArgs(getStepStatusResolver, (parent) => {
            return {
                sourceId: parent.sourceEntityId,
                stepType: 'STT-NER'
            }
        })
    }
}