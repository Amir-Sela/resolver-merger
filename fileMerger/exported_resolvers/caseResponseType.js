const {setTagsResolverOnlyNames} = require("../resolvers/tagsResolvers");
const {updateCaseTeamResolver} = require("../resolvers/casesResolvers");
const {setPermissionsResolver} = require("../resolvers/permissionsResolver");
const {adaptResolver} = require("../utils");
const {setLinksResolver} = require("../resolvers/linksResolvers");
const {setClassificationResolver} = require("../resolvers/classificationResolver");
const {setTagsResolver} = require("../resolvers/tagsResolvers");
const {addRemarksResolver} = require("../resolvers/remarksResolver");
const {createResolverWithArgs} = require("../utils");
module.exports={
    caseResponseType:{
        updateCaseTeam:createResolverWithArgs(updateCaseTeamResolver, (parent, { updateCaseTeamInput }) => {
            return {
                updateCaseTeamInput: {
                    caseId: parent.caseId,
                    team: updateCaseTeamInput.team
                }
            }
        }),
        addRemarks:createResolverWithArgs(addRemarksResolver, (parent, { createRemarks }) => {
            return {
                createRemarks: {
                    remarks: createRemarks.remarks,
                    entityId: parent.caseId
                }
            }
        }),
        setTags:createResolverWithArgs(setTagsResolverOnlyNames, (parent, { setTags }) => {
            return {
                setTagsInput: {
                    entityId: parent.caseId,
                    tagEnumIds: setTags
                }
            }
        }),
        setClassification:createResolverWithArgs(setClassificationResolver,
            (parent, { classification }) => (
                {
                    setClassificationInput:
                        { entityId: parent.caseId, classification: classification }
                })),
        setLinks: adaptResolver(setLinksResolver,
            (parent, args) => {
                return {
                    setLinkBaseType: {
                        links: args.setLinks.links || [],
                        sourceType: "Case",
                        sourceId: parent.caseId
                    }
                }
            }
        ),
        setPermissions:adaptResolver(setPermissionsResolver,
            (parent, args) => {
                return {
                    entityId: parent.caseId,
                    permissionTable: args.permissionTable
                }
            }
        )
    }
}