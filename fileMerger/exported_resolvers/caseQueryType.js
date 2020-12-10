const {
    getCaseResolver,
    lastUpdateDateResolver,
    getCaseStatusResolver,
    getEntityMarkTypeResolver,
    getCaseTeamResolver,
    getIntelligencePicturesResolver,
    getIntelligencePictureResolver,
} = require('../resolvers/casesResolvers')

module.exports = {
    caseQueryType: {
        getCase: getCaseResolver,
        getCasesStatus: getCaseStatusResolver,
        getLastUpdateDate: lastUpdateDateResolver,
        getEntityMarkType: getEntityMarkTypeResolver,
        getCaseTeam: getCaseTeamResolver,
        getIntelligencePictures: getIntelligencePicturesResolver,
        getIntelligencePicture: getIntelligencePictureResolver
    }
}