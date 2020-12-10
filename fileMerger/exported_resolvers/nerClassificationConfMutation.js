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
module.exports = {
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
}