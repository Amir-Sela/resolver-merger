const {getTagsResolver} = require("../resolvers/tagsResolvers");
const tagEnumIdResolverWrapper = (parent, arg, context, info) => {
    const getTagsInput = {
        entityId: parent.id ? parent.id : parent[0].id,
        path: "/",
        nestedTags: false
    }
    return getTagsResolver(parent, {
        getTagsInput
    }, context, info)
}
module.exports = {
    TagType: {
        tag: tagEnumIdResolverWrapper
    }
}