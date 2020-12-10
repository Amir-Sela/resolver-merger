const {
    sttContentResolver,
    sttWordsResolver
} = require('../resolvers/sttResolvers')
module.exports = {
    sttQuery: {
        sttContent: sttContentResolver,
        sttWords: sttWordsResolver
    }
}