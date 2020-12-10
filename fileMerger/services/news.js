const {
    changeReadStateResolver,
    changeStarStateResolver,
    changeRelevantStateResolver,
    permanentDeleteResolver,
    deleteFromArchiveResolver,
    forwardNewsResolver,
    createPrivateRuleResolver,
    updatePrivateRuleResolver,
    deletePrivateRuleResolver,
    setTagsRuleResolver
} = require("../resolvers/newsBoxResolvers");

const {lastUpdateDateResolver} = require("../resolvers/casesResolvers");
const {adaptResolver} = require("../utils");
const {userByUserNameResolver} = require("../resolvers/usersResolvers");
const {createResolverWithArgs} = require("../utils");

const {
    getNewsBoxItemsResolver,
    getArchiveResolver,
    fullTextSearchResolver,
    getNewsBoxCountsResolver,
    getFilterValuesResolver,
    getRuleTagsResolver
} = require('../resolvers/newsBoxResolvers')

const {createDraftResolver,updateDraftResolver,updateExternalDraftResolver,publishNewsResolver,deleteDraftResolver} = require("../resolvers/newsItemResolvers");

const {retrieveLinksResolver} = require("../resolvers/linksResolvers");
const {getClassificationResolver} = require("../resolvers/classificationResolver");
const {createResolverWithArgs} = require("../utils");
const {getTagsResolver} = require("../resolvers/tagsResolvers");

const {
    newsItemResolver,
    newsItemDraftResolver,
} = require('../resolvers/newsItemResolvers')


const {hasLinksResolver} = require("../resolvers/linksResolvers");
const {usersByUsersNameResolver} = require("../resolvers/usersResolvers");
const {adaptResolver} = require("../utils");
const { getOr,find } = require('lodash/fp');

module.exports={
    newsBoxMutations: {
        changeReadState: changeReadStateResolver,
        changeStarState: changeStarStateResolver,
        changeRelevantState: changeRelevantStateResolver,
        permanentDeleteFeedItem: permanentDeleteResolver,
        deleteFromArchive: deleteFromArchiveResolver,
        forwardNews: forwardNewsResolver,
        createPrivateRule: createPrivateRuleResolver,
        updatePrivateRule: updatePrivateRuleResolver,
        deletePrivateRule: deletePrivateRuleResolver,
        setTagsRule: setTagsRuleResolver
    }
,
    newsItemType: {
        createdBy: createResolverWithArgs(userByUserNameResolver, (parent) => {
            return {userName: get('created.userId', parent)}
        }),
        getLastUpdateDate: adaptResolver(
            lastUpdateDateResolver,
            (parent, args, context, info) => {
                return {
                    getLastUpdateDateInput: {
                        id: parent.id,
                        type: "NewsItem",
                    }
                }
            })
    }
,
    newsBoxQuery: {
        getArchive: getArchiveResolver,
        SynchroniseNewsBox: getNewsBoxItemsResolver,
        fullTextSearch: fullTextSearchResolver,
        getNewsBoxCounts: getNewsBoxCountsResolver,
        getFilterValues: getFilterValuesResolver,
        getRuleTags: getRuleTagsResolver
    }
,
    newsItemMutations:{
        createDraft:createDraftResolver,
        updateDraft:updateDraftResolver,
        updateNewsItem:updateExternalDraftResolver,
        publishNews:publishNewsResolver,
        updateAndPublishDraft:updateDraftResolver,
        updateAndPublishExtDraft:updateExternalDraftResolver,
        deleteDraft:deleteDraftResolver
    }
,
    newsItemAndAssociations: {
        tags: createResolverWithArgs(getTagsResolver,
            (parent) => ({ getTagsInput: { entityId: parent.newsItemDraft.id } })),
        classificationDetails: createResolverWithArgs(getClassificationResolver,
            (parent) => ({ getClassificationInput: { entityId: parent.newsItemDraft.id } })),
        links: createResolverWithArgs(retrieveLinksResolver,
            (parent, args) => ({ retrieveLinkBaseType: { entityId: parent.newsItemDraft.id } }))
    }
,
    newsItemQuery: {
        getNewsItem: newsItemResolver,
        getNewsItemDraft: newsItemDraftResolver
    }
,
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