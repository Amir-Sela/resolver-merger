const {getPirResolver} = require("../resolvers/pirResolver");
const {createResolverWithArgs} = require("../utils");


const {
    getPirChildResolver,
    getAvailableWFModesResolver
} = require('../resolvers/pirResolver')

const {pirTypeWorkflowResolver} = require("../resolvers/pirResolver");
const {updatePirResolver, deletePirResolver, createPirResolver} = require("../resolvers/pirResolver");

const {getWFByIdResolver} = require("../resolvers/workflowResolvers");
const {createResolverWithArgs} = require("../utils");


const {getWFByIdResolver} = require("../resolvers/workflowResolvers");
const {createResolverWithArgs} = require("../utils");

module.exports={
    PirDetails: {
        pir: createResolverWithArgs(getPirResolver,
            (parent) => {
                return ({getPirInput: { id: parent.pirId } })
            })
    }
,
    pirQuery:{
        getPir:getPirChildResolver,
        getAvailableWFModes:getAvailableWFModesResolver
    }
,
    pirMutation: {
        updatePir: updatePirResolver,
        deletePir: deletePirResolver,
        createPir: createPirResolver
    }
,
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
,
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