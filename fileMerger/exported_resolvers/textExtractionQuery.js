const {
    textExtractionResolver
} = require('../resolvers/textExtractionResolvers')
module.exports = {
    textExtractionQuery: {
        extractedText: textExtractionResolver
    }
}