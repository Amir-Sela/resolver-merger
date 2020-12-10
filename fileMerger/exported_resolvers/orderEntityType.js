const {getClassificationResolver} = require("../resolvers/classificationResolver");
const {adaptResolver} = require("../utils");
const {executeActionResolver} = require("../resolvers/workflowResolvers");
const {getWFByIdResolver} = require("../resolvers/workflowResolvers");
const {createResolverWithArgs} = require("../utils");

module.exports = {
    orderEntityType: {
        workflow: createResolverWithArgs(
            getWFByIdResolver,
            (parent) => {
                return {
                    getWFByIdInputType: {
                        id: parent.workflowId
                    }
                }
            }),
        executeAction: adaptResolver(executeActionResolver,
            (parent,args) => {
                return args
            } ),
        classificationDetails: createResolverWithArgs(getClassificationResolver,
            (parent) => ({ getClassificationInput: { entityId: parent.orderId } }))
    }
}