const {getOrderResolver} = require("../resolvers/orderResolver");
const {createResolverWithArgs} = require("../utils");
module.exports={
    OrderDetails:{
        order:createResolverWithArgs(getOrderResolver,
            (parent) => ({orderInput : { orderId: parent.orderId } }))
    }
}