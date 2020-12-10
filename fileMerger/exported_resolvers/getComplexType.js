const {createWFPreviewResolver} = require("../resolvers/workflowResolvers");
const {createResolverWithArgs} = require("../utils");
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
}