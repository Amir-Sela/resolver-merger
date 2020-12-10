const {
    getUserAlertRulesResolver,
    getEntityAlertRuleResolver,
    getQueryAlertRuleResolver,
    getUserAlertsCountResolver,
    getUserAlertsResolver,
} = require('../resolvers/alertResolvers')
module.exports = {
    alertsQueryType: {
        getUserAlertRules: getUserAlertRulesResolver,
        getEntityAlertRule: getEntityAlertRuleResolver,
        getQueryAlertRule: getQueryAlertRuleResolver,
        getUserAlertsCount: getUserAlertsCountResolver,
        getUserAlerts: getUserAlertsResolver
    }
}