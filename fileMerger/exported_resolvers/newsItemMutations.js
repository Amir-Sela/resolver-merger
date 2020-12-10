const {createDraftResolver,updateDraftResolver,updateExternalDraftResolver,publishNewsResolver,deleteDraftResolver} = require("../resolvers/newsItemResolvers");
module.exports={
    newsItemMutations:{
        createDraft:createDraftResolver,
        updateDraft:updateDraftResolver,
        updateNewsItem:updateExternalDraftResolver,
        publishNews:publishNewsResolver,
        updateAndPublishDraft:updateDraftResolver,
        updateAndPublishExtDraft:updateExternalDraftResolver,
        deleteDraft:deleteDraftResolver
    }
}