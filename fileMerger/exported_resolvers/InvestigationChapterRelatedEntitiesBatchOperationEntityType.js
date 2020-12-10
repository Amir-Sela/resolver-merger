const {deleteChapterRelatedEntitiesResolver} = require("../resolvers/investigationResolver");
const {updateChapterRelatedEntitiesResolver} = require("../resolvers/investigationResolver");

const {
    omit, omitAll, map, get, set,filter, chain, flatten, update, flow
} = require('lodash/fp');
module.exports={
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
}