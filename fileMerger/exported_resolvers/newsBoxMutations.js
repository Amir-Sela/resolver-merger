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
module.exports = {
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
}