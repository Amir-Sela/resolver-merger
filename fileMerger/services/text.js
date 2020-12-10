const {
    textExtractionResolver
} = require('../resolvers/textExtractionResolvers')

const {getStepStatusResolver} = require("../resolvers/taskManagerResolvers");
const {createResolverWithArgs} = require('../utils')
module.exports={
    textExtractionQuery: {
        extractedText: textExtractionResolver
    }
,
    textExtractionResponseType: {
        status: createResolverWithArgs(getStepStatusResolver, (parent) => {
            return {
                sourceId: parent.sourceId,
                stepType: 'TEXT_EXTRACTION'
            }
        })
    }
}