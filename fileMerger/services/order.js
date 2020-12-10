const {
    getOrderResolver,
    getOrderLastUpdateDateResolver,
} = require('../resolvers/orderResolver')

const {getClassificationResolver} = require("../resolvers/classificationResolver");
const {adaptResolver} = require("../utils");
const {executeActionResolver} = require("../resolvers/workflowResolvers");
const {getWFByIdResolver} = require("../resolvers/workflowResolvers");
const {createResolverWithArgs} = require("../utils");


const {createResolverWithArgs} = require("../utils");
const {getWFByIdResolver} = require("../resolvers/workflowResolvers");

const {getOrderResolver} = require("../resolvers/orderResolver");
const {createResolverWithArgs} = require("../utils");

const {
    createNewCaseResolver,
    deleteOrderResolver,
    updateOrderResolver,
    addNewOrderResolver
} = require("../resolvers/orderResolver");
module.exports={
    orderQuery: {
        getOrder: getOrderResolver,
        getOrderLastUpdateDate: getOrderLastUpdateDateResolver
    }
,
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
,
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
,
    OrderDetails:{
        order:createResolverWithArgs(getOrderResolver,
            (parent) => ({orderInput : { orderId: parent.orderId } }))
    }
,
    orderMutation:{
        addNewOrder: addNewOrderResolver,
        updateOrder: updateOrderResolver,
        deleteOrder: deleteOrderResolver,
        createNewCase: createNewCaseResolver
    }

}