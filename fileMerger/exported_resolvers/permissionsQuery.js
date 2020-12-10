const {
    permittedResolver,
} = require('../resolvers/permissionsResolver')
const {
    getClassificationResolver
} = require('../resolvers/classificationResolver')

module.exports = {
    permissionsQuery: {
        permittedEntities: permittedResolver,
        getClassification: getClassificationResolver
    }
}