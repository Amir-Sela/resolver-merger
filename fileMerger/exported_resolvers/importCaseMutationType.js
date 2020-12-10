const {importCaseResolver} = require("../resolvers/importCaseResolvers");
module.exports={
    importCaseMutationType:{
        completeImportCase:importCaseResolver
    }
}