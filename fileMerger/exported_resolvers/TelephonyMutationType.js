const {importSheetResolver} = require("../resolvers/telephonyResolvers");
module.exports={
    TelephonyMutationType:{
        importSheet:importSheetResolver
    }
}