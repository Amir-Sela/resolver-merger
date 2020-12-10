const {createResolverWithArgs} = require("../utils");
const {getWFByIdResolver} = require("../resolvers/workflowResolvers");
module.exports={
    OrderType:{
        workflow:createResolverWithArgs(
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