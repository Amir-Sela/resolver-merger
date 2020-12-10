const {executeQueryResolver} = require("../resolvers/coronaRecommendationPolicyResolver");
module.exports={
    vconnectorMutation:{
        executeQuery:executeQueryResolver
    }
}