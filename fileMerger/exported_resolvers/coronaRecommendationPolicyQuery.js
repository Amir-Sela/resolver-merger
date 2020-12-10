const {getRequestRecentResolver, getRequestStatusResolver} = require("../resolvers/coronaRecommendationPolicyResolver");
module.exports = {
    coronaRecommendationPolicyQuery: {
        getRecommendationPolicyPredictionRequest: getRequestStatusResolver,
        getRecommendationPolicyPredictionRecentRequest: getRequestRecentResolver
    }
}