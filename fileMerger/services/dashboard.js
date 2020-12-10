const {getDashboardResolver} = require('../resolvers/dashboardResolver')

module.exports={
    dashboardQuery: {
        getDashboard: getDashboardResolver
    }
}