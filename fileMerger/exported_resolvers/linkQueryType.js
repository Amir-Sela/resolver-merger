const {
    retrieveLinksResolver,
    getPossibleEntitiesLinkTypesResolver,
    getPossibleLinkTypesResolver,
} = require('../resolvers/linksResolvers')

module.exports = {
    linkQueryType: {
        getPossibleLinkTypes: getPossibleLinkTypesResolver,
        getPossibleEntitiesLinkTypes: getPossibleEntitiesLinkTypesResolver,
        retrieveLinks: retrieveLinksResolver
    }
}