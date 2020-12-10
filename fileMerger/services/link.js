const {
    retrieveLinksResolver,
    getPossibleEntitiesLinkTypesResolver,
    getPossibleLinkTypesResolver,
} = require('../resolvers/linksResolvers')


const {
    createLinksResolver,
    cloneLinksResolver,
    updateLinkResolver,
    deleteLinkResolver,
    setLinksResolver
} = require("../resolvers/linksResolvers");

const {getEntitiesResolver} = require("../resolvers/entitiesResolvers");
const {adaptResolver} = require("../utils");
module.exports={
    linkQueryType: {
        getPossibleLinkTypes: getPossibleLinkTypesResolver,
        getPossibleEntitiesLinkTypes: getPossibleEntitiesLinkTypesResolver,
        retrieveLinks: retrieveLinksResolver
    }
,
    linkMutationType: {
        createLink: createLinksResolver,
        cloneLinks: cloneLinksResolver,
        updateLink: updateLinkResolver,
        deleteLink: deleteLinkResolver,
        setLinks: setLinksResolver
    }
,
    linkBaseResponseType: {
        source: adaptResolver(getEntitiesResolver,
            (parent, args, context, info) => {
                return {getEntityInput : {
                        id: parent.sourceId,
                        type: parent.sourceType,
                    }}}, null, true),
        target: adaptResolver(getEntitiesResolver,
            (parent, args, context, info) => {
                return {getEntityInput : {
                        id: parent.targetId,
                        type: parent.targetType,
                    }}}, null, true)
    }
}