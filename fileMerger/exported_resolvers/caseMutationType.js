const {
    updateCaseResolver,
    updateCaseStatusResolver,
    updateEntityMarkTypeResolver,
    removeEntityMarkTypeResolver,
    updateCaseTeamResolver,
    insertIntelligencePictureResolver,
    updateIntelligencePictureResolver,
    deleteIntelligencePictureResolver,
    deleteCaseResolver,
    createCaseResolver
} = require("../resolvers/casesResolvers");
module.exports = {
    caseMutationType: {
        updateCase: updateCaseResolver,
        updateCaseStatus: updateCaseStatusResolver,
        updateentityMarkType: updateEntityMarkTypeResolver,
        removeEntityMarkType: removeEntityMarkTypeResolver,
        updateCaseTeam: updateCaseTeamResolver,
        insertIntelligencePicture: insertIntelligencePictureResolver,
        updateIntelligencePicture: updateIntelligencePictureResolver,
        deleteIntelligencePicture: deleteIntelligencePictureResolver,
        deleteCase: deleteCaseResolver,
        createCase: createCaseResolver
    }

}