const {
    getAllChecklistsResolver
} = require('../resolvers/chactbotChecklistResolver')

module.exports = {
    chatbotChecklistQueryType: {
        getChatbotChecklist: getAllChecklistsResolver
    }
}