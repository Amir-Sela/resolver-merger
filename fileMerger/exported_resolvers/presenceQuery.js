const {presenceResolver} = require("../resolvers/presenceResolver");
module.exports = {
    presenceQuery: {
        fetchPresence: presenceResolver
    }
}