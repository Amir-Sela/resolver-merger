const {
    parseCMSheetResolver,
} = require('../resolvers/telephonyResolvers')

const {importSheetResolver} = require("../resolvers/telephonyResolvers");
module.exports={
    TelephonyQueryType:
        {
            parseCMSheet: parseCMSheetResolver
        }
,
    TelephonyMutationType:{
        importSheet:importSheetResolver
    }
}