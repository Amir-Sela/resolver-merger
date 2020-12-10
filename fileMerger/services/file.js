const {setTagsResolverOnlyNames} = require("../resolvers/tagsResolvers");
const {setPermissionsResolver} = require("../resolvers/permissionsResolver");
const {setClassificationResolver} = require("../resolvers/classificationResolver");
const {getEnrichmentsFlowResolver} = require("../resolvers/enrichmentsFlowResolvers");
const {requestEnrichmentsResolver} = require("../resolvers/enrichmentsFlowResolvers");
const {addRemarksResolver} = require("../resolvers/remarksResolver");
const {userByUserNameResolver} = require("../resolvers/usersResolvers");
const {setLinksResolver} = require("../resolvers/linksResolvers");
const {adaptResolver} = require("../utils");
const {setTagsResolver} = require("../resolvers/tagsResolvers");
const {createResolverWithArgs} = require("../utils");
module.exports={
    fileResponseType: {
        setTags: createResolverWithArgs(setTagsResolverOnlyNames, (parent) => {
            return {
                setTagsInput: {
                    entityId: parent.entityId,
                    tagEnumIds: parent.__request_entity.tags || []
                }
            }
        }),
        setLinks: adaptResolver(setLinksResolver,
            (parent) => {
                return {
                    setLinkBaseType: {
                        links: parent.__request_entity.links || [],
                        sourceType: "File",
                        sourceId: parent.entityId
                    }
                }
            }
        ),
        user: createResolverWithArgs(userByUserNameResolver, (parent) => {
            return { userName: parent.userId }
        }),
        addRemarks: createResolverWithArgs(addRemarksResolver, (parent) => {
            return {
                createRemarks: {
                    remarks: parent.__request_entity.remarks || [],
                    entityId: parent.entityId
                }
            }

        }),
        setEnrichments:createResolverWithArgs(requestEnrichmentsResolver, (parent) => {
            return {
                requestEnrichments: {
                    enrichments: parent.__request_entity.enrichments || [],
                    entityId: parent.entityId
                }
            }

        }),
        getEnrichments:createResolverWithArgs(getEnrichmentsFlowResolver, (parent) => {
            return {
                requestEnrichmentsFlow: {
                    entityId: parent.entityId
                }
            }

        }),
        setClassification:(parent, args, context, info) =>
        {
            if (parent.__request_entity.classification){
                return setClassificationResolver(parent, args, context, info);
            }else{
                return null;
            }
        },
        setPermissions: (parent, args, context, info) =>
        {
            if (Array.isArray(parent.__request_entity.permissions) &&  parent.__request_entity.permissions.length > 0){
                return setPermissionsResolver(parent, args, context, info);
            }else{
                return {
                    success: false
                };
            }
        }
    }
}