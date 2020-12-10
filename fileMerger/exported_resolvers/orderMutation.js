const {
    createNewCaseResolver,
    deleteOrderResolver,
    updateOrderResolver,
    addNewOrderResolver
} = require("../resolvers/orderResolver");
module.exports = {
    orderMutation:{
        addNewOrder: addNewOrderResolver,
        updateOrder: updateOrderResolver,
        deleteOrder: deleteOrderResolver,
        createNewCase: createNewCaseResolver
    }

}