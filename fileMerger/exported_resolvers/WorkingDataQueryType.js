const {getWorkingDataForUserResolver, getWorkingDataResolver} = require("../resolvers/workingDataResolver");
module.exports = {
    WorkingDataQueryType: {
        getWorkingData: getWorkingDataResolver,
        getWorkingDataForUser: getWorkingDataForUserResolver
    }
}