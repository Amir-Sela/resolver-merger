const {getWFByIdResolver} = require("../resolvers/workflowResolvers");
const {createResolverWithArgs} = require("../utils");

module.exports = {
    pirWithWorkflow: {
        workflow: createResolverWithArgs(
            getWFByIdResolver,
            (parent) => {
                return {
                    getWFByIdInputType: {
                        id: parent.pir.workflowId
                    }
                }
            })
    }
}