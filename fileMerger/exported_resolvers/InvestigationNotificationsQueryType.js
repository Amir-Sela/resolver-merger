const {getInvestigationNotificationsResolver} = require("../resolvers/investigationNotificationsResolver");
module.exports={
    InvestigationNotificationsQueryType:{
        getInvestigationNotifications:getInvestigationNotificationsResolver
    }
}