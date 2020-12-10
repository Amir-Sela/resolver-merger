const {
    getFileEntityResolver,
    getEntityVersionsResolver,
    getFileEntityAccessibilityResolver
} = require('../resolvers/contentManagementResolver')
module.exports = {
    contentManagemnetQueryType: {
        getFileEntity: getFileEntityResolver,
        getEntityVersions: getEntityVersionsResolver,
        getFileEntityAccessibility: getFileEntityAccessibilityResolver
    }
}