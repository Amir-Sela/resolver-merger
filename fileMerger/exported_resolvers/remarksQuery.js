const {
    getRemarksResolver
} = require('../resolvers/remarksResolver')
module.exports = {
    remarksQuery: {
        getRemarks: getRemarksResolver
    }
}