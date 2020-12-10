const {fetchChartResolver} = require("../resolvers/genericChartsResolver");
module.exports = {
    genericCharts: {
        fetchChart: fetchChartResolver
    }
}