
const {removeEntityMarkTypeResolver, updateEntityMarkTypeResolver} = require("../resolvers/entityMarkResolvers");

const {
    createEntitiesResolver,
    updateEntitiesResolver,
    deleteEntitiesResolver
} = require("../resolvers/entitiesResolvers");

const {setTagsResolverOnlyNames} = require("../resolvers/tagsResolvers");
const {setPermissionsResolver} = require("../resolvers/permissionsResolver");
const {adaptResolver} = require("../utils");
const {setLinksResolver} = require("../resolvers/linksResolvers");
const {setClassificationResolver} = require("../resolvers/classificationResolver");
const {addRemarksResolver} = require("../resolvers/remarksResolver");
const {setTagsResolver} = require("../resolvers/tagsResolvers");
const {userByUserNameResolver} = require("../resolvers/usersResolvers");
const {createResolverWithArgs} = require("../utils");
const {entityResponseTypeIsTempEntityResolver} = require("../resolvers/entitiesResolvers");


const {
    getEntitiesResolver,
    getMultipleEntitiesResolver,
    lastUpdateDateResolver,
    getDefaultPermissionsResolver
} = require('../resolvers/entitiesResolvers')

const {
    getEntityMarkTypeResolver,
    getEntityAllMarksResolver
} = require('../resolvers/entityMarkResolvers')

const {getWsType} = require("../resolvers/entitiesResolvers");
const {lastUpdateDateResolver} = require("../resolvers/entitiesResolvers");
const {createResolverWithArgs} = require("../utils");
const {pipeResolver} = require("../utils");
const {entityCommonInterfaceTypeResolver} = require("../resolvers/entitiesResolvers");


module.exports={
    EntityBodyUnionType: {
        __resolveType: (value, context, info) => {
            const entityType = value.__type.toLowerCase();
            return {
                file: info.getTypeMap()["FileType"],
                reportfile: info.getTypeMap()["ReportFileType"]
            }[entityType];
        }
    }
,
    entityMarkMutationType: {
        updateEntityMarkType: updateEntityMarkTypeResolver,
        removeEntityMarkType: removeEntityMarkTypeResolver
    }
,
    entityMutationType: {
        createEntity: createEntitiesResolver,
        updateEntity: updateEntitiesResolver,
        deleteEntity: deleteEntitiesResolver
    }
,
    entityResponseType: {
        user: createResolverWithArgs(userByUserNameResolver, (parent) => {
            return { userName: parent.userId }
        }),
        isTempEntity: entityResponseTypeIsTempEntityResolver,
        setTags:  createResolverWithArgs(setTagsResolverOnlyNames, (parent, { setTags }) => {
            return {
                setTagsInput: {
                    entityId: parent.entityId,
                    tagEnumIds: setTags
                }
            }
        }),
        addRemarks:createResolverWithArgs(addRemarksResolver, (parent, { createRemarks }) => {
            return {
                createRemarks:{
                    remarks: createRemarks.remarks,
                    entityId: parent.entityId
                }
            }

        }),
        setClassification:createResolverWithArgs(setClassificationResolver,
            (parent,{ classification }) => (
                { setClassificationInput:
                        { entityId: parent.entityId, classification: classification }})),
        setLinks:adaptResolver(setLinksResolver,
            (parent, args) => {
                return {
                    setLinkBaseType: {
                        links: args.setLinkBaseType.links || [],
                        sourceType: parent.entityType,
                        sourceId: parent.entityId
                    }
                }
            }
        ),
        setPermissions:adaptResolver(setPermissionsResolver,
            (parent, args) => {
                return {
                    entityId: parent.entityId,
                    permissionTable: args.permissionTable
                }
            }
        )
    }
,
    entityQueryType: {
        getEntity: getEntitiesResolver,
        getMultipleEntities: getMultipleEntitiesResolver,
        getLastUpdateDate: lastUpdateDateResolver,
        getdefaultPermissions: getDefaultPermissionsResolver
    }
,
    entityMarkQueryType: {
        getEntityMarkType: getEntityMarkTypeResolver,
        getAllEntityMarks: getEntityAllMarksResolver
    }
,
    EntityCommonInterfaceType:{
        __resolveType:entityCommonInterfaceTypeResolver,
        updated:createResolverWithArgs(
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
}