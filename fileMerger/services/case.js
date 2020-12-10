const {userByUserNameResolverWrapper} = require('../resolvers/usersResolvers');

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

const {
    getCaseResolver,
    lastUpdateDateResolver,
    getCaseStatusResolver,
    getEntityMarkTypeResolver,
    getCaseTeamResolver,
    getIntelligencePicturesResolver,
    getIntelligencePictureResolver,
} = require('../resolvers/casesResolvers')


const {pipeResolver} = require("../utils");
const {getWsType} = require("../resolvers/entitiesResolvers");
const {lastUpdateDateResolver} = require("../resolvers/casesResolvers");
const {setLinksResolver} = require("../resolvers/linksResolvers");
const {getClassificationResolver} = require("../resolvers/classificationResolver");
const {createResolverWithArgs} = require("../utils");
const {set} = require('lodash/fp')


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
    CaseDetails:{
        modifiedBy:userByUserNameResolverWrapper
    }
,
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

,
    caseQueryType: {
        getCase: getCaseResolver,
        getCasesStatus: getCaseStatusResolver,
        getLastUpdateDate: lastUpdateDateResolver,
        getEntityMarkType: getEntityMarkTypeResolver,
        getCaseTeam: getCaseTeamResolver,
        getIntelligencePictures: getIntelligencePicturesResolver,
        getIntelligencePicture: getIntelligencePictureResolver
    }
,
    CaseType: {
        setLinks: createResolverWithArgs(setLinksResolver, (parent, {setLinkBaseType}) => {
            const modifiedLinks = setLinkBaseType.links.map(
                link => (Object.assign({}, link, {sourceId: parent.id},
                    {sourceType: "Case"})))
            const setLinkType = set(['links'])(modifiedLinks)(setLinkBaseType)
            return ({setLinkBaseType: setLinkType})
        }),
        classification: createResolverWithArgs(getClassificationResolver,
            (parent) => ({getClassificationInput: {entityId: parent.id}})),
        tags: pipeResolver
    }
,
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