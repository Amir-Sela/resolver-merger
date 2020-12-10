const {
    deleteAllDraftFilesResolver,
    createDraftCaseResolver,
    deleteDraftFileResolver,
    cancelDraftFileResolver,
    saveDraftFileResolver,
    createDraftFileResolver
} = require("../resolvers/studioResolvers")
module.exports = {
    studioMutation: {
        createDraftFile: createDraftFileResolver,
        saveDraftFile: saveDraftFileResolver,
        cancelDraftFile: cancelDraftFileResolver,
        deleteDraftFile: deleteDraftFileResolver,
        createDraftCase: createDraftCaseResolver,
        deleteAllDraftFiles: deleteAllDraftFilesResolver
    }
}