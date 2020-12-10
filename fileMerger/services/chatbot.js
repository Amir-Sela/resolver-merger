const {
    getAllChecklistsResolver
} = require('../resolvers/chactbotChecklistResolver')


const {
    deleteChecklistResolver,
    upsertChecklistResolver
} = require("../resolvers/chactbotChecklistResolver")
module.exports={
    chatbotChecklistQueryType: {
        getChatbotChecklist: getAllChecklistsResolver
    }
,
    chatbotChecklistMutationType: {
        upsertCheckList: upsertChecklistResolver,
        deleteChecklist: deleteChecklistResolver
    }
}