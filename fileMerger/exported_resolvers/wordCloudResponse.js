const {getStepStatusResolver} = require("../resolvers/taskManagerResolvers");
const {createResolverWithArgs} = require("../utils")
module.exports = {
    wordCloudResponse: {
        status: createResolverWithArgs(getStepStatusResolver, (parent) => {
            return {
                sourceId: parent.entityId,
                stepType: 'WORD_CLOUD'
            }
        })
    }
}