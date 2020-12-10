const {
    synopsisSummaryResolver
} = require('../resolvers/synopsisResolvers')
module.exports = {
    synopsisQuery: {
        synopsisSummary: synopsisSummaryResolver
    }
}