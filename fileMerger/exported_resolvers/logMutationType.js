const {insertLogEntryResolver} = require("../resolvers/casesResolvers");
module.exports = {
    logMutationType: {
        insertLogEntry: insertLogEntryResolver
    }
}