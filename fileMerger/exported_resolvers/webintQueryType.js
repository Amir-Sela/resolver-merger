const {saveQueryByUserRequestIdResolver} = require("../resolvers/webintResolver");
module.exports={
    webintQueryType:{
        getSavedQueryByUserRequestId:saveQueryByUserRequestIdResolver
    }
}