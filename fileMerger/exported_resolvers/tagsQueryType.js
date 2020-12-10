const {
    getTagsResolver,
} = require('../resolvers/tagsResolvers');
module.exports = {
    tagsQueryType: {
        getTags: getTagsResolver
    }
}