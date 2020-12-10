const {
    getCasesByCrimeTypesResolver,
    getPersonnelWorkloadResolver,
    getEntitiesHeatMapResolver
} = require('../resolvers/biDashboardResolver')

module.exports={
    biDashboardQuery: {
        getCasesByCrimeTypes: getCasesByCrimeTypesResolver,
        getPersonnelWorkload: getPersonnelWorkloadResolver,
        getEntitiesHeatMap: getEntitiesHeatMapResolver
    }
}