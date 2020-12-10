const {importCaseResolver} = require("../resolvers/importCaseResolvers");

const {
    validateStructureResolver,
} = require('../resolvers/importCaseResolvers')
module.exports={
    importCaseMutationType:{
        completeImportCase:importCaseResolver
    }
,
    importCaseQueryType: {
        validateFolderStructure: validateStructureResolver
    }
}