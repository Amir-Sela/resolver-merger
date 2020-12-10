const {
    parseCMSheetResolver,
} = require('../resolvers/telephonyResolvers')
module.exports = {
    TelephonyQueryType:
        {
            parseCMSheet: parseCMSheetResolver
        }
}