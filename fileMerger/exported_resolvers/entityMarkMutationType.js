const {removeEntityMarkTypeResolver, updateEntityMarkTypeResolver} = require("../resolvers/entityMarkResolvers");
module.exports = {
    entityMarkMutationType: {
        updateEntityMarkType: updateEntityMarkTypeResolver,
        removeEntityMarkType: removeEntityMarkTypeResolver
    }
}