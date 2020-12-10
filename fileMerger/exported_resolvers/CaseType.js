const {pipeResolver} = require("../utils");
const {getWsType} = require("../resolvers/entitiesResolvers");
const {lastUpdateDateResolver} = require("../resolvers/casesResolvers");
const {setLinksResolver} = require("../resolvers/linksResolvers");
const {getClassificationResolver} = require("../resolvers/classificationResolver");
const {createResolverWithArgs} = require("../utils");
const {set} = require('lodash/fp')

module.exports = {
    CaseType: {
        setLinks: createResolverWithArgs(setLinksResolver, (parent, {setLinkBaseType}) => {
            const modifiedLinks = setLinkBaseType.links.map(
                link => (Object.assign({}, link, {sourceId: parent.id},
                    {sourceType: "Case"})))
            const setLinkType = set(['links'])(modifiedLinks)(setLinkBaseType)
            return ({setLinkBaseType: setLinkType})
        }),
        classification: createResolverWithArgs(getClassificationResolver,
            (parent) => ({getClassificationInput: {entityId: parent.id}})),
        tags: pipeResolver
    }
}