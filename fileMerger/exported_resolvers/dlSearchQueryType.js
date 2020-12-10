const {dlExternalSearchResolver, dlSearchResolver} = require("../resolvers/dlSearchResolver");

module.exports = {
    dlSearchQueryType: {
        search: dlSearchResolver,
        externalSearch: dlExternalSearchResolver
    }
}