const {
    getInvestigationResolver,
    getInvestigationGraphResolver,
    getInvestigationChapterResolver,
    getInvestigationChaptersResolver,
    getInvestigationRelatedEntityResolver,
    getInvestigationRelatedEntitiesResolver,
    getChapterRelatedEntityResolver,
    getChapterRelatedEntitiesResolver,
    getInvestigationIconResolver,
    getChapterIconResolver,
    getInvestigationThinkingResolver,
    getInvestigationThinkingsResolver,
    investigationGeneralSummaryResolver,
    getInvestigationTeamResolver,
    getInvestigationStatusResolver,
} = require('../resolvers/investigationResolver');
module.exports = {
    InvestigationQueryType: {
        getInvestigation: getInvestigationResolver,
        getInvestigationGraph: getInvestigationGraphResolver,
        getInvestigationChapter: getInvestigationChapterResolver,
        getInvestigationChapters: getInvestigationChaptersResolver,
        getInvestigationRelatedEntity: getInvestigationRelatedEntityResolver,
        getInvestigationRelatedEntities: getInvestigationRelatedEntitiesResolver,
        getChapterRelatedEntity: getChapterRelatedEntityResolver,
        getChapterRelatedEntities: getChapterRelatedEntitiesResolver,
        getInvestigationIcon: getInvestigationIconResolver,
        getChapterIcon: getChapterIconResolver,
        getInvestigationThinking: getInvestigationThinkingResolver,
        generalSummary: investigationGeneralSummaryResolver,
        getInvestigationsStatus: getInvestigationStatusResolver,
        getInvestigationTeam: getInvestigationTeamResolver,
        getInvestigationThinkings: getInvestigationThinkingsResolver
    }
}