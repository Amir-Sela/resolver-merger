const {createAlertRuleResolver} = require("../resolvers/alertResolvers");
const{createResolverWithArgs} = require("../utils")
module.exports={
    saveSearchQueryResultType:{
        createAlert:createResolverWithArgs(createAlertRuleResolver,
            (parent,{saveSearchArgs}) => {
                return ({
                    createAlertRule: {
                        sourceId: parent.id,
                        expirationDate: saveSearchArgs.expirationDate,
                        alertType: "QUERY_RESULT_CHANGED"
                    }
                })
            })


    }
}