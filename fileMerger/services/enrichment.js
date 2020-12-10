const {requestEnrichmentsResolver} = require("../resolvers/enrichmentsFlowResolvers");

const {getEnrichmentsTypeInfoResolver, getEnrichmentsFlowResolver} = require('../resolvers/enrichmentsFlowResolvers')

module.exports={
    EnrichmentsMutationType:{
        requestEnrichments:requestEnrichmentsResolver
    }
,
    EnrichmentsQueryType: {
        getEnrichmentsTypeInfoConfig: getEnrichmentsTypeInfoResolver,
        getEnrichmentsFlow: getEnrichmentsFlowResolver
    }
}