const {getEnrichmentsTypeInfoResolver, getEnrichmentsFlowResolver} = require('../resolvers/enrichmentsFlowResolvers')

module.exports = {
    EnrichmentsQueryType: {
        getEnrichmentsTypeInfoConfig: getEnrichmentsTypeInfoResolver,
        getEnrichmentsFlow: getEnrichmentsFlowResolver
    }
}