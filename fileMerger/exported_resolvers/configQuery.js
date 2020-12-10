const {configResolver} = require("../resolvers/configResolver");
module.exports = {
    configQuery: {
        fetchConfig: configResolver
    }
}