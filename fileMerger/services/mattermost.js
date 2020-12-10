const {
    stopChatNotificationResolver,
    startChatNotificationResolver
} = require("../resolvers/mattermostResolvers")
module.exports={
    mattermostMutation: {
        startChatNotification: startChatNotificationResolver,
        stopChatNotification: stopChatNotificationResolver
    }
}