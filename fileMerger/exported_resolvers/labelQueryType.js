const {
    GetSectionLabelsResolver,
    AddLabelToSectionResolver,
} = require('../resolvers/labelResolver')
module.exports = {
    labelQueryType: {
        getSectionlabels: GetSectionLabelsResolver,
        addLabelToSection: AddLabelToSectionResolver
    }
}