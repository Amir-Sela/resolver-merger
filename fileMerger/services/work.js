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

const {
    getAvilableAssigneesResolver,
    getWFTemplateReslover,
    getWFByIdResolver,
} = require('../resolvers/workflowResolvers')


const {createWFPreviewResolver, executeActionResolver} = require("../resolvers/workflowResolvers");

const {getWorkingDataForUserResolver, getWorkingDataResolver} = require("../resolvers/workingDataResolver");
module.exports={
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
,
    workflowQuery:{
        getAvailableAssignees:getAvilableAssigneesResolver,
        getWorkflow:getWFByIdResolver,
        getWorkflowTemplate:getWFTemplateReslover
    }
,
    workflowMutation: {
        executeAction: executeActionResolver,
        createWFPreview: createWFPreviewResolver
    }
,
    WorkingDataQueryType: {
        getWorkingData: getWorkingDataResolver,
        getWorkingDataForUser: getWorkingDataForUserResolver
    }
}