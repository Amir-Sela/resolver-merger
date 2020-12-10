const {
    getOrderResolver,
    getOrderLastUpdateDateResolver,
} = require('../resolvers/orderResolver')
module.exports = {
    orderQuery: {
        getOrder: getOrderResolver,
        getOrderLastUpdateDate: getOrderLastUpdateDateResolver
    }
}