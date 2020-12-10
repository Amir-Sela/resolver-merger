const {requestEnrichmentsResolver} = require("../resolvers/enrichmentsFlowResolvers");
module.exports={
    EnrichmentsMutationType:{
        requestEnrichments:requestEnrichmentsResolver
    }
}