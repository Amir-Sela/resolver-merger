const {getPirResolver} = require("../resolvers/pirResolver");
const{createResolverWithArgs} = require("../utils")
module.exports={
    getWorkflowWithPirResponseType:{
        pir:createResolverWithArgs(getPirResolver,
            (parent) => ({ getPirInput: { id: parent.workflow.entityId } }))
    }
}