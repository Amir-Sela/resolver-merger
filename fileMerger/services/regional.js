const {fetchAllRegionalListResolver} = require("../resolvers/regionalHealthStatusResolver");
module.exports={
    RegionalHealthStatusQuery:{
        regionalHealthStatusList:fetchAllRegionalListResolver
    }
}