const {getEntitiesResolver} = require("../resolvers/entitiesResolvers");
const {adaptResolver} = require("../utils");
module.exports = {
    linkBaseResponseType: {
        source: adaptResolver(getEntitiesResolver,
            (parent, args, context, info) => {
                return {getEntityInput : {
                        id: parent.sourceId,
                        type: parent.sourceType,
                    }}}, null, true),
        target: adaptResolver(getEntitiesResolver,
            (parent, args, context, info) => {
                return {getEntityInput : {
                        id: parent.targetId,
                        type: parent.targetType,
                    }}}, null, true)
    }
}