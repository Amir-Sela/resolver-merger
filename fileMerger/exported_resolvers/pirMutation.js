const {pirTypeWorkflowResolver} = require("../resolvers/pirResolver");
const {updatePirResolver, deletePirResolver, createPirResolver} = require("../resolvers/pirResolver");
module.exports = {
    pirMutation: {
        updatePir: updatePirResolver,
        deletePir: deletePirResolver,
        createPir: createPirResolver
    }
}