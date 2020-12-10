const {getRequestRecentResolver, getRequestStatusResolver} = require("../resolvers/coronaRecommendationPolicyResolver");

const {fetchUserSummaryResolver, fetchHeatmapResolver} = require("../resolvers/coronaResolver");

const {
    cancelRequestStatusResolver,
    executeQueryResolver
} = require("../resolvers/coronaRecommendationPolicyResolver");

const {
    getDashboardUpdateStatusResolver,
    getDashboardFileDetailsResolver,
    getDashboardDataByCategoryResolver
} = require("../resolvers/coronaDashboardResolver");
module.exports={
    coronaRecommendationPolicyQuery: {
        getRecommendationPolicyPredictionRequest: getRequestStatusResolver,
        getRecommendationPolicyPredictionRecentRequest: getRequestRecentResolver
    }
,
    coronaQuery: {
        fetchHeatmap: fetchHeatmapResolver,
        fetchUserSummary: fetchUserSummaryResolver
    }
,
    coronaRecommendationPolicyMutation: {
        executeQuery: executeQueryResolver,
        cancelRequest: cancelRequestStatusResolver,
    }
,
    coronaDashboardQuery: {
        getCoronaDashboardData: getDashboardDataByCategoryResolver,
        getCoronaDashboardFile: getDashboardFileDetailsResolver,
        getCoronaDashboardUpdateStatus: getDashboardUpdateStatusResolver
    }
}