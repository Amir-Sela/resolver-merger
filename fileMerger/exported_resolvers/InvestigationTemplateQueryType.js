const {
    getInvestigationTemplateContentResolver,
    getInvestigationTemplateResolver,
    getRecommendedInvestigationTemplateResolver
} = require('../resolvers/investigationTemplateResolver')
module.exports = {
    InvestigationTemplateQueryType: {
        getInvestigationTemplate: getInvestigationTemplateResolver,
        getRecommmendedInvestigationTemplate: getRecommendedInvestigationTemplateResolver,
        getInvestigationTemplateContent: getInvestigationTemplateContentResolver
    }
}