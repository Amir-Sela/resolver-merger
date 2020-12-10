const {getStateResolver} = require("../resolvers/visualizationResolvers");
module.exports={
    createStateResult:{
        explorationBoardState:getStateResolver
    }
}