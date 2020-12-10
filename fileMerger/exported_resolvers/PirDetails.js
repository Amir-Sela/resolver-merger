const {getPirResolver} = require("../resolvers/pirResolver");
const {createResolverWithArgs} = require("../utils");

module.exports = {
    PirDetails: {
        pir: createResolverWithArgs(getPirResolver,
            (parent) => {
                return ({getPirInput: { id: parent.pirId } })
            })
    }
}