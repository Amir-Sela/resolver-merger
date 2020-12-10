const {
    deleteChecklistResolver,
    upsertChecklistResolver
} = require("../resolvers/chactbotChecklistResolver")
module.exports = {
    chatbotChecklistMutationType: {
        upsertCheckList: upsertChecklistResolver,
        deleteChecklist: deleteChecklistResolver
    }
}