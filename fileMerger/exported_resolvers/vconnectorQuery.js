const {getRequestStatusResolver} = require('../resolvers/vconnectorResolver')

module.exports = {
    vconnectorQuery: {
        getRequestStatus: getRequestStatusResolver
    }
}