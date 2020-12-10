const {createWFPreviewResolver} = require("../resolvers/workflowResolvers");
const {createResolverWithArgs} = require("../utils");

const {
    getReportJsonResolver,
    getCaseReportResolver
} = require('../resolvers/reportResolver')

const {getPirResolver} = require("../resolvers/pirResolver");
const{createResolverWithArgs} = require("../utils")
module.exports={
    getComplexType:{
        wfPreview: createResolverWithArgs(
            createWFPreviewResolver,
            (parent) => ({
                createWFPreviewInputType: {
                    templateId: parent.id,
                    wfType: parent.getWFTemplateInputType.wfType,
                    wfMode: parent.getWFTemplateInputType.wfMode
                }
            }))

    }
,
    getReportJson: {
        getReportJson: getReportJsonResolver,
        getCaseReport: getCaseReportResolver
    }
,
    getWorkflowWithPirResponseType:{
        pir:createResolverWithArgs(getPirResolver,
            (parent) => ({ getPirInput: { id: parent.workflow.entityId } }))
    }
}