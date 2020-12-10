const {createWFPreviewResolver, executeActionResolver} = require("../resolvers/workflowResolvers");
module.exports = {
    workflowMutation: {
        executeAction: executeActionResolver,
        createWFPreview: createWFPreviewResolver
    }
}