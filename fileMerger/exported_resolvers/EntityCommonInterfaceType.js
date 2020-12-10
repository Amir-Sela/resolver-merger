const {getWsType} = require("../resolvers/entitiesResolvers");
const {lastUpdateDateResolver} = require("../resolvers/entitiesResolvers");
const {createResolverWithArgs} = require("../utils");
const {pipeResolver} = require("../utils");
const {entityCommonInterfaceTypeResolver} = require("../resolvers/entitiesResolvers");


module.exports={
    EntityCommonInterfaceType:{
        __resolveType:entityCommonInterfaceTypeResolver,
        updated:createResolverWithArgs(
            lastUpdateDateResolver,
            (parent) => ({
                getLastUpdateDateInput: {
                    type: getWsType(parent),
                    id: parent.id
                }
            })
        ),
        tags:pipeResolver
    }
}