const {
    getAvilableAssigneesResolver,
    getWFTemplateReslover,
    getWFByIdResolver,
} = require('../resolvers/workflowResolvers')

module.exports={
    workflowQuery:{
        getAvailableAssignees:getAvilableAssigneesResolver,
        getWorkflow:getWFByIdResolver,
        getWorkflowTemplate:getWFTemplateReslover
    }
}