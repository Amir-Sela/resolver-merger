const {getStepStatusResolver} = require("../resolvers/taskManagerResolvers");
const {createResolverWithArgs} = require('../utils')
module.exports = {
    textExtractionResponseType: {
        status: createResolverWithArgs(getStepStatusResolver, (parent) => {
            return {
                sourceId: parent.sourceId,
                stepType: 'TEXT_EXTRACTION'
            }
        })
    }
}