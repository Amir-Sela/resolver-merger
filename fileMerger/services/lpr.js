const {
    lprNumbersResolver,
    lprSummaryResolver
} = require('../resolvers/lprResolvers')
module.exports={
    lprQuery: {
        lprNumbers: lprNumbersResolver,
        lprSummary: lprSummaryResolver
    }
}