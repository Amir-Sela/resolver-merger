const {hasLinksResolver} = require("../resolvers/linksResolvers");
const {usersByUsersNameResolver} = require("../resolvers/usersResolvers");
const {adaptResolver} = require("../utils");
const { getOr,find } = require('lodash/fp');

module.exports={
    newsBoxPreviewItemType:{
        forwardingList:adaptResolver(usersByUsersNameResolver, (parent, args, context) => {
                return getOr([], ['forwardingList'], parent).map((forwardItem) =>
                    getOr('', ['sender'], forwardItem))
            },
            (result, parent) => {
                return getOr([], ['forwardingList'], parent).map((forwardItem) => {
                    const matchUser = find({userName: forwardItem.sender}, result);
                    forwardItem.displayName = getOr('', ['displayName'], matchUser)
                    return forwardItem;
                });
            }),
        hasAttachments:adaptResolver(hasLinksResolver,
            (parent, args, context, info) => {
                return {
                    retrieveLinkBaseType : {
                        entityId: parent.newsItemId,
                        direction: 1,
                        targetType: 'File'
                    }}})
    }
}