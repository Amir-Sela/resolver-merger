const {
    getPirChildResolver,
    getAvailableWFModesResolver
} = require('../resolvers/pirResolver')
module.exports={
    pirQuery:{
        getPir:getPirChildResolver,
        getAvailableWFModes:getAvailableWFModesResolver
    }
}