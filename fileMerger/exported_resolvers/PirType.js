const {getWFByIdResolver} = require("../resolvers/workflowResolvers");
const {createResolverWithArgs} = require("../utils");

module.exports = {
    PirType: {
        workflow: createResolverWithArgs(
            getWFByIdResolver,
            (parent) => {
                return {
                    getWFByIdInputType: {
                        id: parent.workflowId
                    }
                }
            })
    }
}