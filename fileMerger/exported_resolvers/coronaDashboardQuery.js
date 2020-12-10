const {
    getDashboardUpdateStatusResolver,
    getDashboardFileDetailsResolver,
    getDashboardDataByCategoryResolver
} = require("../resolvers/coronaDashboardResolver");
module.exports = {
    coronaDashboardQuery: {
        getCoronaDashboardData: getDashboardDataByCategoryResolver,
        getCoronaDashboardFile: getDashboardFileDetailsResolver,
        getCoronaDashboardUpdateStatus: getDashboardUpdateStatusResolver
    }
}