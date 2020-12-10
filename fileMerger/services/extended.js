const {setTagsResolverOnlyNames} = require("../resolvers/tagsResolvers");
const {createInvestigationGraphResolver} = require("../resolvers/investigationResolver");
const {createInvestigationRelatedEntitiesResolver} = require("../resolvers/investigationResolver");
const {createInvestigationChaptersResolver} = require("../resolvers/investigationResolver");
const {adaptResolver} = require("../utils");
const {setPermissionsResolver} = require("../resolvers/permissionsResolver");
const {setClassificationResolver} = require("../resolvers/classificationResolver");
const {setTagsResolver} = require("../resolvers/tagsResolvers");
const {updateCaseTeamResolver} = require("../resolvers/casesResolvers");
const {addRemarksResolver} = require("../resolvers/remarksResolver");
const {
    map, get, set, update, flow
} = require('lodash/fp');
const {createResolverWithArgs} = require("../utils")
module.exports={
    ExtendedInvestigationType: {
        updateCaseTeam: createResolverWithArgs(updateCaseTeamResolver, (parent, {updateCaseTeamInput}) => {
            return {
                updateCaseTeamInput: {
                    caseId: parent.caseId,
                    team: updateCaseTeamInput.team
                }
            }
        }),
        addRemarks: createResolverWithArgs(addRemarksResolver, (parent, {createRemarks}) => {
            return {
                createRemarks: {
                    remarks: createRemarks.remarks,
                    entityId: parent.caseId
                }
            }

        }),
        setTags: createResolverWithArgs(setTagsResolverOnlyNames, (parent, {setTags}) => {
            return {
                setTagsInput: {
                    entityId: parent.caseId,
                    tagEnumIds: setTags
                }
            }
        }),
        setClassification: createResolverWithArgs(setClassificationResolver,
            (parent, {classification}) => (
                {
                    setClassificationInput:
                        {entityId: parent.caseId, classification: classification}
                })),
        setPermissions: adaptResolver(setPermissionsResolver,
            (parent, args) => {
                return {
                    entityId: parent.caseId,
                    permissionTable: args.permissionTable
                }
            }
        ),
        createInvestigationChapters: adaptResolver(
            createInvestigationChaptersResolver,
            (parent, args) => ({
                createInvestigationChapters: {
                    investigationId: parent.investigationId,
                    chapters:
                        map(
                            set('investigationId', parent.investigationId),
                            get('createInvestigationChapters', args)
                        )
                }
            })
        ),
        createInvestigationRelatedEntities: adaptResolver(
            createInvestigationRelatedEntitiesResolver,
            (parent, args) =>
                flow([
                    set(
                        'createInvestigationRelatedEntities.investigationId',
                        parent.investigationId
                    ),
                    update(
                        'createInvestigationRelatedEntities.relatedEntities',
                        map(set('investigationId', parent.investigationId)),
                    )
                ])(args)
        ),
        setChapterPathList: adaptResolver(createInvestigationGraphResolver, (parent, args) => ({
            createInvestigationGraph: {
                investigationId: parent.investigationId,
                chapterPathList: args.createInvestigationGraph.chapterPathList
            }
        }))
    }
}