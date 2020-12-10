const {
    cancelRequestStatusResolver,
    executeQueryResolver
} = require("../resolvers/coronaRecommendationPolicyResolver");
module.exports = {
    coronaRecommendationPolicyMutation: {
        executeQuery: executeQueryResolver,
        cancelRequest: cancelRequestStatusResolver,
    }
}