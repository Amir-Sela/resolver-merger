const {fetchUserSummaryResolver, fetchHeatmapResolver} = require("../resolvers/coronaResolver");
module.exports = {
    coronaQuery: {
        fetchHeatmap: fetchHeatmapResolver,
        fetchUserSummary: fetchUserSummaryResolver
    }
}