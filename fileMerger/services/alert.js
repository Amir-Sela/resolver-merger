const {
    deleteUserAlertsResolver,
    deleteAlertResolver,
    deleteAlertRuleResolver,
    updateAlertRuleResolver,
    createAlertRuleResolver
} = require("../resolvers/alertResolvers");


const {userByUserNameResolver} = require("../resolvers/usersResolvers");
const {createResolverWithArgs} = require("../utils")

const {userByUserNameResolver} = require("../resolvers/usersResolvers");
const {createResolverWithArgs} = require("../utils")

const {
    getUserAlertRulesResolver,
    getEntityAlertRuleResolver,
    getQueryAlertRuleResolver,
    getUserAlertsCountResolver,
    getUserAlertsResolver,
} = require('../resolvers/alertResolvers')
module.exports={
    alertsMutationType: {
        createAlertRule: createAlertRuleResolver,
        updateAlertRule: updateAlertRuleResolver,
        deleteAlertRule: deleteAlertRuleResolver,
        deleteAlert: deleteAlertResolver,
        deleteUserAlerts: deleteUserAlertsResolver
    }
,
    AlertRuleObjectType: {
        user: createResolverWithArgs(userByUserNameResolver, (parent) => {
            return {userName: parent.userId}
        })
    }
,
    AlertObjectType: {
        user: createResolverWithArgs(userByUserNameResolver, (parent) => {
            return {userName: parent.userId}
        })
    }
,
    alertsQueryType: {
        getUserAlertRules: getUserAlertRulesResolver,
        getEntityAlertRule: getEntityAlertRuleResolver,
        getQueryAlertRule: getQueryAlertRuleResolver,
        getUserAlertsCount: getUserAlertsCountResolver,
        getUserAlerts: getUserAlertsResolver
    }
}