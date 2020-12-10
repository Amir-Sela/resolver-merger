const {setTagsResolver, addTagResolver, deleteTagResolver} = require("../resolvers/tagsResolvers");
module.exports = {
    tagsMutationType: {
        deleteTag: deleteTagResolver,
        addTag: addTagResolver,
        setTags: setTagsResolver
    }
}