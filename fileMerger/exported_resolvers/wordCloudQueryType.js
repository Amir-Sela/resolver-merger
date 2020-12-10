const {
    getWordCloudResolver
} = require('../resolvers/wordCloudResolvers')
module.exports = {
    wordCloudQueryType: {
        getWordCloud: getWordCloudResolver
    }
}