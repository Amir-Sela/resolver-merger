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
module.exports={
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
}