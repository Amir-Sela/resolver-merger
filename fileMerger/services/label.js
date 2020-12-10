const {
    RemoveLabelFromSectionResolver,
    RenameLabelInSectionResolver,
    RemoveEntityIDsResolver,
    AddEntityToLabelResolver,
    AddLabelToSectionResolver
} = require("../resolvers/labelResolver");

const {
    GetSectionLabelsResolver,
    AddLabelToSectionResolver,
} = require('../resolvers/labelResolver')
module.exports={
    labelMutationType: {
        addLabelToSection: AddLabelToSectionResolver,
        addEntityToLabel: AddEntityToLabelResolver,
        removeEntityIds: RemoveEntityIDsResolver,
        renameLabelInSection: RenameLabelInSectionResolver,
        removeLabelFromSection: RemoveLabelFromSectionResolver
    }
,
    labelQueryType: {
        getSectionlabels: GetSectionLabelsResolver,
        addLabelToSection: AddLabelToSectionResolver
    }
}