const {dismissInvestigationNotificationsResolver} = require("../resolvers/investigationNotificationsResolver");
module.exports = {
    InvestigationNotificationMutationsType: {
        dismissInvestigationNotifications: dismissInvestigationNotificationsResolver
    }
}