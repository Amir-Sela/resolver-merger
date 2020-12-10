const {
    validateStructureResolver,
} = require('../resolvers/importCaseResolvers')
module.exports = {
    importCaseQueryType: {
        validateFolderStructure: validateStructureResolver
    }
}