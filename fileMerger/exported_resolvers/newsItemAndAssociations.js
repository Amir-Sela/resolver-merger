const {retrieveLinksResolver} = require("../resolvers/linksResolvers");
const {getClassificationResolver} = require("../resolvers/classificationResolver");
const {createResolverWithArgs} = require("../utils");
const {getTagsResolver} = require("../resolvers/tagsResolvers");
module.exports = {
    newsItemAndAssociations: {
        tags: createResolverWithArgs(getTagsResolver,
            (parent) => ({ getTagsInput: { entityId: parent.newsItemDraft.id } })),
        classificationDetails: createResolverWithArgs(getClassificationResolver,
            (parent) => ({ getClassificationInput: { entityId: parent.newsItemDraft.id } })),
        links: createResolverWithArgs(retrieveLinksResolver,
            (parent, args) => ({ retrieveLinkBaseType: { entityId: parent.newsItemDraft.id } }))
    }
}