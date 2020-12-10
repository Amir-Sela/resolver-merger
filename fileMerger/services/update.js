const {publishNewsResolver} = require("../resolvers/newsItemResolvers");
module.exports={
    updateAndPublishResultType:{
        startEnrichments:(parent, args, context, info) => {
            return publishNewsResolver(parent, {newsItemId: parent.id}, context, args)
        }
    }
}