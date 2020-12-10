const {lastUpdateDateResolver} = require("../resolvers/casesResolvers");
const {adaptResolver} = require("../utils");
const {userByUserNameResolver} = require("../resolvers/usersResolvers");
const {createResolverWithArgs} = require("../utils");
module.exports = {
    newsItemType: {
        createdBy: createResolverWithArgs(userByUserNameResolver, (parent) => {
            return {userName: get('created.userId', parent)}
        }),
        getLastUpdateDate: adaptResolver(
            lastUpdateDateResolver,
            (parent, args, context, info) => {
                return {
                    getLastUpdateDateInput: {
                        id: parent.id,
                        type: "NewsItem",
                    }
                }
            })
    }
}