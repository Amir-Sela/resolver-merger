const {
    deleteUserAlertsResolver,
    deleteAlertResolver,
    deleteAlertRuleResolver,
    updateAlertRuleResolver,
    createAlertRuleResolver
} = require("../resolvers/alertResolvers");

module.exports = {
    alertsMutationType: {
        createAlertRule: createAlertRuleResolver,
        updateAlertRule: updateAlertRuleResolver,
        deleteAlertRule: deleteAlertRuleResolver,
        deleteAlert: deleteAlertResolver,
        deleteUserAlerts: deleteUserAlertsResolver
    }
}