const {
    getExportDoneResolver,
    getExportProgressResolver,
    startExportResolver,
    getGenericDataResolver
} = require("../resolvers/genericDataResolver");


const {fetchLayerResolver} = require("../resolvers/genericMapsResolver");

const {fetchChartResolver} = require("../resolvers/genericChartsResolver");
module.exports={
    genericDataQuery: {
        getGenericData: getGenericDataResolver,
        startExport: startExportResolver,
        getExportProgress: getExportProgressResolver,
        getExportDone: getExportDoneResolver
    }
,
    genericMaps: {
        fetchLayer: fetchLayerResolver
    }
,
    genericCharts: {
        fetchChart: fetchChartResolver
    }
}