const {
    getInvestigationTemplateContentResolver,
    getInvestigationTemplateResolver,
    getRecommendedInvestigationTemplateResolver
} = require('../resolvers/investigationTemplateResolver')


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

const {getWsType} = require("../resolvers/entitiesResolvers");
const {pipeResolver} = require("../utils");
const {lastUpdateDateResolver} = require("../resolvers/entitiesResolvers");
const {getClassificationResolver} = require("../resolvers/classificationResolver");
const { flow, get, trimCharsStart, add, __ } = require('lodash/fp')

const {
    createResolverWithArgs
} = require('../utils')




const {updateInvestigationRelatedEntitiesResolver} = require("../resolvers/investigationResolver");
const {deleteInvestigationRelatedEntitiesResolver} = require("../resolvers/investigationResolver");
const {
    omit,filter
} = require('lodash/fp');
const filterFields = function (array, filter) {
    return array.map(relatedEntity => {
        return omit(filter, relatedEntity)
    })
}

const {deleteChapterRelatedEntitiesResolver} = require("../resolvers/investigationResolver");
const {updateChapterRelatedEntitiesResolver} = require("../resolvers/investigationResolver");

const {
    omit, omitAll, map, get, set,filter, chain, flatten, update, flow
} = require('lodash/fp');

const { getInvestigationLogResolver } = require('../resolvers/investigationLogResolvers')


const {
    deleteInvestigationThinkingResolver,
    updateInvestigationThinkingResolver,
    createInvestigationThinkingResolver,
    updateInvestigationTeamResolver,
    updateInvestigationStatusResolver,
    setChapterIconResolver,
    setInvestigationIconResolver,
    deleteChapterRelatedEntitiesResolver,
    deleteChapterRelatedEntityResolver,
    deleteUpdateChapterRelatedEntitiesResolver,
    updateChapterRelatedEntitiesResolver,
    updateChapterRelatedEntityResolver,
    createChapterRelatedEntitiesResolver,
    createChapterRelatedEntityResolver,
    deleteInvestigationRelatedEntitiesResolver,
    deleteInvestigationRelatedEntityResolver,
    deleteUpdateInvestigationRelatedEntitiesResolver,
    updateInvestigationRelatedEntitiesResolver,
    updateInvestigationRelatedEntityResolver,
    createInvestigationRelatedEntitiesResolver,
    createInvestigationRelatedEntityResolver,
    deleteInvestigationChapterResolver,
    updateInvestigationChapterResolver,
    createInvestigationChaptersResolver,
    createInvestigationChapterResolver,
    deleteInvestigationGraphResolver,
    updateInvestigationGraphResolver,
    createInvestigationGraphResolver,
    deleteInvestigationResolver,
    updateInvestigationResolver,
    createInvestigationOrderableResolver
} = require("../resolvers/investigationResolver")


const {dismissInvestigationNotificationsResolver} = require("../resolvers/investigationNotificationsResolver");

const {getInvestigationNotificationsResolver} = require("../resolvers/investigationNotificationsResolver");
module.exports={
    InvestigationTemplateQueryType: {
        getInvestigationTemplate: getInvestigationTemplateResolver,
        getRecommmendedInvestigationTemplate: getRecommendedInvestigationTemplateResolver,
        getInvestigationTemplateContent: getInvestigationTemplateContentResolver
    }
,
    InvestigationLogMutationType: {
        dummy:  (parent, args, context, info) =>{return "dummy"}
    }
,
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
,
    InvestigationDetailsType: {
        classification: createResolverWithArgs(getClassificationResolver,
            (parent) => ({getClassificationInput: {entityId: parent.id}})),
        updated:  createResolverWithArgs(
            lastUpdateDateResolver,
            (parent) => ({
                getLastUpdateDateInput: {
                    type: getWsType(parent),
                    id: parent.id
                }
            })
        ),
        tags:pipeResolver

    }
,
    InvestigationRelatedEntitiesBatchOperationEntityType:{
        insertUpdate:({ parent, args, context, info }) => {
            let relatedEntities = filter(
                { action: 'INSERT_OR_UPDATE' },
                args.deleteUpdateInvestigationRelatedEntities.relatedEntities
            )
            relatedEntities = filterFields(relatedEntities, ['action', 'chapterId'])
            const updateInvestigationRelatedEntities = {
                updateInvestigationRelatedEntities: {
                    relatedEntities,
                    investigationId: args.deleteUpdateInvestigationRelatedEntities.investigationId
                }
            }
            return updateInvestigationRelatedEntitiesResolver(
                parent,
                updateInvestigationRelatedEntities,
                context,
                info
            )
        },
        delete:({ parent, args, context, info }) => {
            let relatedEntities = filter(
                { action: 'DELETE' },
                args.deleteUpdateInvestigationRelatedEntities.relatedEntities
            )
            relatedEntities = filterFields(relatedEntities, ['action', 'chapterId'])
            const entitiesIds = relatedEntities.map(entity => entity.entityId);

            const deleteInvestigationRelatedEntities = {
                deleteInvestigationRelatedEntities: {
                    relatedEntities,
                    entitiesIds,
                    investigationId: args.deleteUpdateInvestigationRelatedEntities.investigationId
                }
            }
            return deleteInvestigationRelatedEntitiesResolver(
                parent,
                deleteInvestigationRelatedEntities,
                context,
                info
            )
        }
    }
,
    InvestigationChapterRelatedEntitiesBatchOperationEntityType:{
        insertUpdate:async ({ parent, args, context, info }) => {
            let relatedEntities = filter({ action: 'INSERT_OR_UPDATE' }, args.deleteUpdateChapterRelatedEntities)

            const chapters = chain(relatedEntities)
                .groupBy(entity => entity.chapterId)
                .value()

            const response = await Promise
                .all(Object.keys(chapters)
                    .map((chapterId) => {
                        const investigationId = chapters[chapterId][0].investigationId
                        const updateChapterRelatedEntities = {
                            updateChapterRelatedEntities: {
                                investigationId,
                                chapterId,
                                relatedEntities: filterFields(chapters[chapterId], ['action'])
                            }
                        }
                        return updateChapterRelatedEntitiesResolver(parent, updateChapterRelatedEntities, context)
                    }))
            //flat all result to one array
            return flatten(response);
        },
        delete:async ({ parent, args, context, info }) => {
            let relatedEntities = filter({ action: 'DELETE' }, args.deleteUpdateChapterRelatedEntities)

            const chapters = chain(relatedEntities)
                .groupBy(entity => entity.chapterId)
                .value()

            const response = await Promise
                .all(Object.keys(chapters)
                    .map((chapterId) => {
                        const entities = chain(chapters[chapterId])
                            .groupBy(entity => entity.entityId)
                            .value()
                        const entitiesIds = Object.keys(entities)
                        const investigationId = chapters[chapterId][0].investigationId
                        const deleteChapterRelatedEntities = {
                            deleteChapterRelatedEntities: {
                                entitiesIds,
                                chapterId,
                                investigationId
                            }
                        }
                        return deleteChapterRelatedEntitiesResolver(parent, deleteChapterRelatedEntities, context)
                    }))
            return response;
        }
    }
,
    InvestigationLogQueryType:{
        getLogs:getInvestigationLogResolver
    }
,
    InvestigationMutationType: {
        createInvestigation: createInvestigationOrderableResolver,
        updateInvestigation: updateInvestigationResolver,
        deleteInvestigation: deleteInvestigationResolver,
        createInvestigationGraph: createInvestigationGraphResolver,
        updateInvestigationGraph: updateInvestigationGraphResolver,
        deleteInvestigationGraph: deleteInvestigationGraphResolver,
        createInvestigationChapter: createInvestigationChapterResolver,
        createInvestigationChapters: createInvestigationChaptersResolver,
        updateInvestigationChapter: updateInvestigationChapterResolver,
        deleteInvestigationChapter: deleteInvestigationChapterResolver,
        createInvestigationRelatedEntity: createInvestigationRelatedEntityResolver,
        createInvestigationRelatedEntities: createInvestigationRelatedEntitiesResolver,
        updateInvestigationRelatedEntity: updateInvestigationRelatedEntityResolver,
        updateInvestigationRelatedEntities: updateInvestigationRelatedEntitiesResolver,
        deleteUpdateInvestigationRelatedEntities: deleteUpdateInvestigationRelatedEntitiesResolver,
        deleteInvestigationRelatedEntity: deleteInvestigationRelatedEntityResolver,
        deleteInvestigationRelatedEntities: deleteInvestigationRelatedEntitiesResolver,
        createChapterRelatedEntity: createChapterRelatedEntityResolver,
        createChapterRelatedEntities: createChapterRelatedEntitiesResolver,
        updateChapterRelatedEntity: updateChapterRelatedEntityResolver,
        updateChapterRelatedEntities: updateChapterRelatedEntitiesResolver,
        deleteUpdateChapterRelatedEntities: deleteUpdateChapterRelatedEntitiesResolver,
        deleteChapterRelatedEntity: deleteChapterRelatedEntityResolver,
        deleteChapterRelatedEntities: deleteChapterRelatedEntitiesResolver,
        setInvestigationIcon: setInvestigationIconResolver,
        setChapterIcon: setChapterIconResolver,
        updateInvestigationStatus: updateInvestigationStatusResolver,
        updateInvestigationTeam: updateInvestigationTeamResolver,
        createInvestigationThinking: createInvestigationThinkingResolver,
        updateInvestigationThinking: updateInvestigationThinkingResolver,
        deleteInvestigationThinking: deleteInvestigationThinkingResolver
    }
,
    InvestigationNotificationMutationsType: {
        dismissInvestigationNotifications: dismissInvestigationNotificationsResolver
    }
,
    InvestigationNotificationsQueryType:{
        getInvestigationNotifications:getInvestigationNotificationsResolver
    }
}