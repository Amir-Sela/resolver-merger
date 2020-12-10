const {getStepStatusResolver} = require("../resolvers/taskManagerResolvers");
const {createResolverWithArgs} = require("../utils")

const {
    getWordCloudResolver
} = require('../resolvers/wordCloudResolvers')
module.exports={
    wordCloudResponse: {
        status: createResolverWithArgs(getStepStatusResolver, (parent) => {
            return {
                sourceId: parent.entityId,
                stepType: 'WORD_CLOUD'
            }
        })
    }
,
    wordCloudQueryType: {
        getWordCloud: getWordCloudResolver
    }
}