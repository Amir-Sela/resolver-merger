const {
    getExportDoneResolver,
    getExportProgressResolver,
    startExportResolver,
    getGenericDataResolver
} = require("../resolvers/genericDataResolver");

module.exports = {
    genericDataQuery: {
        getGenericData: getGenericDataResolver,
        startExport: startExportResolver,
        getExportProgress: getExportProgressResolver,
        getExportDone: getExportDoneResolver
    }
}