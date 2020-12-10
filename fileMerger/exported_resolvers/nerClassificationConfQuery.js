const {getCategoryValuesResolver, getCategoryTypeResolver} = require("../resolvers/nerClassificationConfResolver");
module.exports = {
    nerClassificationConfQuery: {
        getCategories: getCategoryTypeResolver,
        getCategoryValues: getCategoryValuesResolver
    }
}