const {requestEnrichmentsResolver} = require("../resolvers/enrichmentsFlowResolvers");
const{createResolverWithArgs} = require("../utils")

const {
    get
} = require('lodash/fp');
module.exports = {
    createDraftFileResponseType: {
        setEnrichments: createResolverWithArgs(requestEnrichmentsResolver, (parent, {setEnrichments}, context, info) => {
            return {
                requestEnrichments: {
                    entityId: get('fileId', parent),
                    enrichments: setEnrichments
                }
            }
        })
    }
}