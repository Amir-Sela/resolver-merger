const {
    getNamedEntityRecognitionEntitiesResolver
} = require('../resolvers/nerResolvers')

const {
    updateValueResolver,
    enableValueResolver,
    disableValueResolver,
    updateCategoryResolver,
    enableCategoryResolver,
    disableCategoryResolver,
    addValueToCategoryResolver,
    addCategoryResolver
} = require("../resolvers/nerClassificationConfResolver")

const {getCategoryValuesResolver, getCategoryTypeResolver} = require("../resolvers/nerClassificationConfResolver");
module.exports={
    nerQueryType: {
        getNerEntities: getNamedEntityRecognitionEntitiesResolver
    }
,
    nerClassificationConfMutation: {
        addCategory: addCategoryResolver,
        addValueToCategory: addValueToCategoryResolver,
        disableCategory: disableCategoryResolver,
        enableCategory: enableCategoryResolver,
        updateCategory: updateCategoryResolver,
        disableValue: disableValueResolver,
        enableValue: enableValueResolver,
        updateValue: updateValueResolver
    }
,
    nerClassificationConfQuery: {
        getCategories: getCategoryTypeResolver,
        getCategoryValues: getCategoryValuesResolver
    }
}