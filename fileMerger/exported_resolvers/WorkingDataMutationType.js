const {
    mergeWorkingDataResolver,
    changeOwnerResolver,
    removeWorkingDataIdsResolver,
    addWorkingDataIdsResolver,
    deleteWorkingDataResolver,
    saveWorkingDataAsResolver,
    saveWorkingDataResolver,
    createWorkingDataResolver
} = require("../resolvers/workingDataResolver");
module.exports = {
    WorkingDataMutationType: {
        createWorkingData: createWorkingDataResolver,
        saveWorkingData: saveWorkingDataResolver,
        saveWorkingDataAs: saveWorkingDataAsResolver,
        deleteWorkingData: deleteWorkingDataResolver,
        addWorkingDataIds: addWorkingDataIdsResolver,
        removeWorkingDataIds: removeWorkingDataIdsResolver,
        changeOwner: changeOwnerResolver,
        mergeWorkingData: mergeWorkingDataResolver
    }
}