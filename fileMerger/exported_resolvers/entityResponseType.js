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

module.exports = {
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
}