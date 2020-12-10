const {getRequestStatusResolver} = require('../resolvers/vconnectorResolver')


const {executeQueryResolver} = require("../resolvers/coronaRecommendationPolicyResolver");
module.exports={
    vconnectorQuery: {
        getRequestStatus: getRequestStatusResolver
    }
,
    vconnectorMutation:{
        executeQuery:executeQueryResolver
    }
}