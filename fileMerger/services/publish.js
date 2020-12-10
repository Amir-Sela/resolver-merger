const {requestEnrichmentsResolver} = require("../resolvers/enrichmentsFlowResolvers");
const {createResolverWithArgs} = require("../utils")
module.exports={
    publishResponseType: {
        setEnrichmnets: createResolverWithArgs(requestEnrichmentsResolver, (parent, enrichmnetTypesArgs) => {
            return {
                requestEnrichments: {
                    entityId: parent.newsItemId,
                    enrichments: enrichmnetTypesArgs.enrichmnetTypesList
                }
            }
        })
    }
}